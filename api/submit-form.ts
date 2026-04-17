import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstname, email } = req.body;
    
    const MAUTIC_URL = "https://crm.nambds.vn";
    const FORM_ID = "12";

    const formData = new URLSearchParams();
    // Supporting both common spellings just in case
    formData.append("mauticform[firtsname]", firstname || "");
    formData.append("mauticform[firstname]", firstname || "");
    formData.append("mauticform[email]", email || "");
    formData.append("mauticform[formId]", FORM_ID);
    formData.append("mauticform[return]", "");
    formData.append("mauticform[formName]", "bieumaufiletinhlaikep");
    formData.append("mauticform[submit]", "1");

    console.log("Submitting to Mautic:", `${MAUTIC_URL}/form/submit?formId=${FORM_ID}`);

    const mauticResponse = await fetch(`${MAUTIC_URL}/form/submit?formId=${FORM_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Forwarded-For": (req.headers['x-forwarded-for'] as string) || "127.0.0.1"
      },
      body: formData.toString(),
    });

    // Mautic often returns 302 on success, or 200.
    if (!mauticResponse.ok && mauticResponse.status !== 302) {
      const errorText = await mauticResponse.text();
      console.warn("Mautic error response:", mauticResponse.status, errorText);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Submit form error:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
