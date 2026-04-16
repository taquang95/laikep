import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function ThankYou() {
  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="bg-blobs"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full flex flex-col items-center mt-10 md:mt-16"
      >
        <div className="text-center space-y-3 mb-10 md:mb-14">
          <h1 className="text-4xl md:text-[44px] font-black text-[#dc2626] uppercase tracking-tight">
            ĐÃ GỬI EMAIL!
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Hãy làm theo hướng dẫn bên dưới để nhận bảng tính.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[24px] lg:rounded-[32px] p-4 lg:p-6 shadow-sm border border-slate-100 flex flex-col items-center"
          >
            <div className="w-full relative shadow-sm rounded-2xl overflow-hidden">
              <img
                src="https://i.postimg.cc/wMLdwmwv/1.png"
                alt="Bước 1"
                className="w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-bold text-center mt-6 mb-2 text-[15px] text-slate-800">
              KIỂM TRA HỘP THƯ <span className="text-red-500">INBOX (CHÍNH)</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-[24px] lg:rounded-[32px] p-4 lg:p-6 shadow-sm border border-slate-100 flex flex-col items-center"
          >
            <div className="w-full relative shadow-sm rounded-2xl overflow-hidden">
              <img
                src="https://i.postimg.cc/D0LKxXxv/2.png"
                alt="Bước 2"
                className="w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-bold text-center mt-6 mb-2 text-[15px] text-slate-800">
              KIỂM TRA <span className="text-red-500">THƯ RÁC (SPAM)</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-[24px] lg:rounded-[32px] p-4 lg:p-6 shadow-sm border border-slate-100 flex flex-col items-center"
          >
            <div className="w-full relative shadow-sm rounded-2xl overflow-hidden">
              <img
                src="https://i.postimg.cc/L5LMx1x8/3.png"
                alt="Bước 3"
                className="w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-bold text-center mt-6 mb-2 text-[15px] text-slate-800 uppercase">
              Bấm "Not spam" để nhận tài liệu
            </p>
          </motion.div>
        </div>

        <div className="w-full max-w-3xl bg-[#fefce8] border border-dashed border-amber-300 rounded-3xl p-6 md:p-8 mb-8 shadow-sm">
          <div className="flex items-center gap-2 text-amber-600 font-bold mb-6 text-lg">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>Checklist quan trọng:</span>
          </div>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Kiểm tra Inbox hoặc tab Promotions (Quảng cáo).</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Nếu không thấy, kiểm tra Spam (Thư rác).</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <span className="text-red-600 font-semibold">
                QUAN TRỌNG: Nếu mail nằm trong Spam, hãy mở email và bấm "Báo không phải thư rác" để nhận tài liệu.
              </span>
            </li>
          </ul>
        </div>

        <p className="text-slate-500 italic text-sm mb-10 text-center">
          * Email có thể mất 30s để đến hộp thư của bạn.
        </p>

        <div className="flex justify-center pb-20">
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 bg-[#0f172a] text-white px-8 py-3.5 rounded-full font-bold text-[15px] transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl hover:bg-[#1e293b]"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Quay lại trang chính</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
