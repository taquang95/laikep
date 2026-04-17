import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/submit-form", async (req, res) => {
    try {
      const { firstname, email } = req.body;
      
      const MAUTIC_URL = "https://crm.nambds.vn";
      const FORM_ID = "10";

      const formData = new URLSearchParams();
      // Chú ý: Ở form gốc Mautic, trường "Họ và tên" thực sự đang bị đánh vần sai thành "firtsname" (chữ 't' đứng trước 's').
      // Chúng ta phải map đúng giá trị 'firtsname' thì Mautic mới nhận diện được dữ liệu.
      formData.append("mauticform[firtsname]", firstname || "");
      formData.append("mauticform[email]", email || "");
      formData.append("mauticform[formId]", FORM_ID);
      formData.append("mauticform[return]", "");
      formData.append("mauticform[formName]", "bieumaufiletinhlaikep");
      formData.append("mauticform[submit]", "1");

      const response = await fetch(`${MAUTIC_URL}/form/submit?formId=${FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Forwarded-For": req.ip || req.headers['x-forwarded-for']?.toString() || "127.0.0.1"
        },
        body: formData.toString(),
      });

      if (!response.ok && response.status !== 302) {
        console.warn("Mautic returned status:", response.status);
      }

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Submit form error:", error);
      res.status(500).json({ success: false, error: "Failed to submit form" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // We are running compiled ESBuild inside the dist folder maybe... or not
    // The dist build structure:
    // /dist/server.cjs
    // /dist/index.html
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
