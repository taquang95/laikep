import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, TrendingDown, Map, Clock, Wallet, 
  LineChart, SlidersHorizontal, BarChart2, Home,
  ArrowRight, Phone, Facebook
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Landing() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden pt-20">
      <div className="bg-blobs"></div>
      
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
        <HeroSection />
        <AuthorSection />
        <ProblemSection />
        <FeatureSection />
        <ComparisonSection />
        <TimelineSection />
        <LeadFormSection navigate={navigate} />
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 bg-blue-600 rounded-md text-white flex items-center justify-center font-black text-lg">
              N
            </div>
            <span className="font-bold text-blue-600 text-[18px] tracking-tight truncate max-w-[120px] sm:max-w-none">Nguyễn Nam BĐS</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#van-de" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Vấn đề</a>
            <a href="#tinh-nang" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Tính năng</a>
            <a href="#quy-trinh" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Quy trình</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <a 
              href="#lead-form"
              className="btn-primary px-3 py-2 text-xs sm:text-sm sm:px-4 hidden sm:block whitespace-nowrap"
            >
              Nhận File Ngay
            </a>
            
            <button 
              className="md:hidden p-2 -mr-2 text-slate-600 hover:text-blue-600 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div 
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
      >
        <div className="px-4 pt-2 pb-6 flex flex-col space-y-4 shadow-xl">
          <a href="#van-de" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium text-lg px-2 py-2 hover:bg-slate-50 rounded-lg">Vấn đề</a>
          <a href="#tinh-nang" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium text-lg px-2 py-2 hover:bg-slate-50 rounded-lg">Tính năng</a>
          <a href="#quy-trinh" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium text-lg px-2 py-2 hover:bg-slate-50 rounded-lg">Quy trình</a>
          <a 
            href="#lead-form"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary w-full py-3 text-center text-sm font-bold mt-2 shadow-md"
          >
            Nhận bảng tính ngay
          </a>
        </div>
      </motion.div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="pt-12 md:pt-20 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 md:space-y-8 w-full max-w-full"
      >
        <div className="badge-primary inline-flex items-start sm:items-center space-x-2 text-left max-w-full h-auto">
          <span className="flex-shrink-0 mt-0.5 sm:mt-0">🎁</span>
          <span className="whitespace-normal leading-tight">Quà tặng độc quyền - Công cụ lập kế hoạch tài chính 2026</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-slate-900 leading-[1.2]">
          LÀM CHỦ TƯƠNG LAI TÀI CHÍNH VỚI <br className="hidden md:block"/>
          <span className="text-gradient-metal inline-block">SỨC MẠNH LÃI KÉP</span>
        </h1>

        <p className="text-sm sm:text-base md:text-xl text-slate-600 leading-relaxed w-full max-w-lg">
          Tặng bạn bảng tính Excel chuyên sâu giúp lập kế hoạch tiết kiệm, tích lũy mua nhà và nghỉ hưu sớm dựa trên lãi suất ngân hàng thực tế.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full">
          <a href="#lead-form" className="inline-flex justify-center items-center space-x-2 btn-accent px-6 md:px-8 py-3.5 rounded-[10px] font-bold text-[14px] md:text-[15px] transition-all transform hover:-translate-y-0.5 w-full sm:w-auto text-center shadow-[0_8px_20px_rgba(245,158,11,0.25)]">
            <span className="whitespace-nowrap">Tải File Excel Miễn Phí</span>
            <ArrowRight className="w-5 h-5 flex-shrink-0 hidden sm:block" />
          </a>
          <a href="#video" className="inline-flex justify-center items-center space-x-2 bg-white text-slate-700 border border-slate-200 px-6 md:px-8 py-3.5 rounded-[10px] font-bold text-[14px] md:text-[15px] shadow-sm hover:bg-slate-50 transition-colors w-full sm:w-auto text-center">
            <span className="whitespace-nowrap">Xem video hướng dẫn</span>
          </a>
        </div>
      </motion.div>

      <div className="relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mockup-dark p-4 md:p-6"
        >
          {/* Mockup Bảng tính */}
          <div className="bg-white rounded-xl shadow-inner border border-slate-100 overflow-hidden">
            <div className="bg-slate-100 px-4 py-3 flex items-center space-x-2 border-b border-slate-200">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-xs text-slate-500 font-medium ml-4">Bang_Tinh_Lai_Kep_V2.xlsx</div>
            </div>
            <div className="p-3 md:p-4 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                <div className="flex justify-between items-center h-8 bg-slate-50 rounded border border-slate-100 px-3 overflow-hidden">
                  <span className="text-[11px] md:text-xs text-green-700 font-bold whitespace-nowrap">Vốn ban đầu:</span>
                  <span className="text-[11px] md:text-xs font-mono text-slate-600 font-bold ml-2 truncate min-w-0">500,000,000 đ</span>
                </div>
                <div className="flex justify-between items-center h-8 bg-slate-50 rounded border border-slate-100 px-3 overflow-hidden">
                  <span className="text-[11px] md:text-xs text-blue-700 font-bold whitespace-nowrap">Lãi suất năm:</span>
                  <span className="text-[11px] md:text-xs font-mono text-slate-600 font-bold ml-2 truncate min-w-0">8.5%</span>
                </div>
                <div className="flex justify-between items-center h-8 bg-slate-50 rounded border border-slate-100 px-3 overflow-hidden">
                  <span className="text-[11px] md:text-xs text-amber-700 font-bold whitespace-nowrap">Số năm:</span>
                  <span className="text-[11px] md:text-xs font-mono text-slate-600 font-bold ml-2 truncate min-w-0">15 Năm</span>
                </div>
              </div>
              <div className="h-px bg-slate-100 my-2"></div>
              <div className="flex items-end gap-1 sm:gap-2">
                <div className="flex-1 max-w-[2rem] bg-blue-200 rounded-t h-12"></div>
                <div className="flex-1 max-w-[2rem] bg-blue-300 rounded-t h-16"></div>
                <div className="flex-1 max-w-[2rem] bg-blue-400 rounded-t h-24"></div>
                <div className="flex-1 max-w-[2rem] bg-blue-500 rounded-t h-32"></div>
                <div className="flex-1 max-w-[2rem] bg-blue-600 rounded-t h-40"></div>
                <div className="flex-1 max-w-[2rem] bg-cyan-500 rounded-t h-48"></div>
                <div className="ml-auto text-right pl-2">
                  <div className="text-[10px] md:text-xs text-slate-500 leading-tight">Tài sản sau 15 năm</div>
                  <div className="text-xl sm:text-2xl font-black text-slate-800 leading-none mt-1">1,720<span className="text-sm text-slate-400">tr</span></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-center gap-3 sm:space-x-4 bg-white/5 p-3 md:p-4 rounded-[12px] shadow-sm ml-auto mr-auto w-fit border border-white/10">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.postimg.cc/Pq0w4J8q/av1.jpg" alt="User" onError={(e) => (e.currentTarget.src = "https://i.pravatar.cc/100?img=1")} referrerPolicy="no-referrer" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.postimg.cc/zGg1G8bq/av2.jpg" alt="User" onError={(e) => (e.currentTarget.src = "https://i.pravatar.cc/100?img=2")} referrerPolicy="no-referrer" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.postimg.cc/ydmQ2r1z/av3.jpg" alt="User" onError={(e) => (e.currentTarget.src = "https://i.pravatar.cc/100?img=3")} referrerPolicy="no-referrer" />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">+</div>
            </div>
            <div className="text-sm font-medium text-slate-600">
              <strong className="text-slate-900">2,000+</strong> người đã tải về
            </div>
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse hidden md:block"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse hidden md:block" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
}

function AuthorSection() {
  return (
    <section className="scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-5 relative overflow-hidden"
      >
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent -z-10"></div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 z-10">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-30 transform scale-110"></div>
              <img 
                src="https://i.postimg.cc/j5nWg8jz/anh_dai_dien.jpg" 
                alt="Nguyễn Nam BĐS" 
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white shadow-xl relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="text-center md:text-left space-y-4">
            <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
              Chuyên gia tư vấn
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-900">Nguyễn Nam BĐS</h2>
              <p className="text-lg text-slate-600 font-medium mt-1">Giám đốc kinh doanh tại Thành Phát Land</p>
            </div>
            <p className="text-slate-600 max-w-2xl leading-relaxed">
              Với hơn 8 năm kinh nghiệm phân phối bất động sản và tư vấn tài chính, tôi nhận ra rào cản lớn nhất của mọi người không phải là không có thu nhập, mà là chưa biết cách tối ưu sức mạnh của lãi kép. Bảng tính này là tâm huyết tôi đúc kết, giúp bạn nhìn thấy rỏ lộ trình đến với căn nhà mơ ước.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
              <a href="tel:0987182666" className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 font-bold transition-colors">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span>0987.182.666</span>
              </a>
              <a href="https://www.facebook.com/mr.nambdsvn/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 font-bold transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Facebook className="w-5 h-5" />
                </div>
                <span>Facebook Cá Nhân</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      icon: TrendingDown,
      title: "Lạm phát bào mòn tài sản",
      desc: "Tiền để không mỗi ngày mất đi sức mua. Nếu lãi suất tiết kiệm không bù đắp được lạm phát, bạn đang chật vật bước lùi.",
      color: "text-red-500",
      bg: "bg-red-50"
    },
    {
      icon: Map,
      title: "Không lộ trình mua nhà rõ ràng",
      desc: "Muốn mua nhà nhưng không biết mỗi tháng cần tích lũy bao nhiêu, gửi bao lâu thì đạt mục tiêu, dẫn đến dễ nản chí.",
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      icon: Clock,
      title: "Bỏ lỡ thời điểm vàng lãi suất",
      desc: "Chần chừ 1-2 năm không lập kế hoạch đồng nghĩa với việc bạn mất đi sức mua của 10 năm trong tương lai.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: Wallet,
      title: "Tiêu xài lãng phí không kiểm soát",
      desc: "Vì không thấy sự tăng trưởng của dòng tiền tương lai, bạn dễ dàng tiêu đi số vốn có thể tạo ra cả một gia tài.",
      color: "text-slate-600",
      bg: "bg-slate-100"
    }
  ];

  return (
    <section id="van-de" className="scroll-mt-24 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900">Tại sao bạn cần file này?</h2>
        <p className="text-lg text-slate-600">80% người trưởng thành mắc phải các sai lầm tài chính dưới đây vì thiếu một bức tranh toàn cảnh.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all"
          >
            <div className={`w-14 h-14 ${p.bg} rounded-xl flex items-center justify-center mb-6`}>
              <p.icon className={`w-7 h-7 ${p.color}`} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight">{p.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeatureSection() {
  const features = [
    { title: "Dự báo tài sản 10-30 năm", icon: LineChart, desc: "Thấy rõ bảng cân đối kế toán cá nhân trong tương lai dài hạn." },
    { title: "Tùy chỉnh linh hoạt", icon: SlidersHorizontal, desc: "Thay đổi biến số lãi suất & số tiền gửi cực kỳ dễ dàng." },
    { title: "Biểu đồ trực quan", icon: BarChart2, desc: "Các dashboard và chart sinh động, dễ hiểu ngay cả cho người mới." },
    { title: "Formulate mục tiêu BĐS", icon: Home, desc: "Tính toán chính xác thời điểm sẵn sàng xuống tiền mua nhà." }
  ];

  return (
    <section id="tinh-nang" className="scroll-mt-24 space-y-12 bg-slate-900 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-16 relative overflow-hidden text-white shadow-2xl">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-[100px] opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-[100px] opacity-20 -z-10"></div>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white shadow-sm">Khám phá Bảng tính Excel</h2>
        <p className="text-lg text-slate-300">Công cụ All-in-one được thiết kế bài bản, tự động hóa 100% công thức phức tạp.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex gap-6 hover:bg-white/10 transition-colors"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <f.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-slate-300 leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900">Sự khác biệt khổng lồ</h2>
        <p className="text-lg text-slate-600">Với vốn 1 tỷ VNĐ sau 20 năm, sự kỳ diệu của việc tái đầu tư tạo ra ranh giới giàu nghèo.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-white border-2 border-slate-100 rounded-[1.5rem] md:rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="inline-block bg-slate-100 text-slate-600 font-bold px-4 py-1.5 rounded-full mb-6">Lãi Đơn (Không tái đầu tư)</div>
          <div className="text-4xl md:text-5xl font-black text-slate-800 mb-2">2.6 tỷ</div>
          <p className="text-slate-500 mb-6 md:mb-8 border-b border-slate-100 pb-6 md:pb-8">Chỉ lấy lãi chi tiêu, tiền gốc giữ nguyên. Sự gia tăng tuyến tính và chậm chạp.</p>
          
          <div className="h-6 w-full bg-slate-100 relative rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-slate-400 w-1/3"></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-[1.5rem] md:rounded-3xl p-6 md:p-8 shadow-2xl transform md:-translate-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full filter blur-[50px] opacity-20"></div>
          <div className="inline-block bg-white/20 text-white font-bold px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">Lãi Kép (Tái đầu tư liên tục)</div>
          <div className="text-4xl md:text-5xl font-black mb-2">6.8 tỷ</div>
          <p className="text-blue-100 mb-6 md:mb-8 border-b border-white/20 pb-6 md:pb-8">Lãi sinh lãi, quỹ đạo tăng trưởng theo hàm mũ. Tài sản vượt xa kỳ vọng.</p>
          
          <div className="h-6 w-full bg-blue-800/50 relative rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-amber-400 w-full animate-[pulse_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-6 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 shadow-sm">
        <span className="text-3xl">💡</span>
        <div className="text-amber-800 font-bold text-lg sm:text-xl">
          "Kỷ luật là chìa khóa của sự giàu có. Lãi kép chỉ hoạt động kỳ diệu khi có thời gian."
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section id="quy-trinh" className="scroll-mt-24 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900">3 Bước Sở Hữu Tài Sản</h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {[
            { step: 1, title: "Nhận bảng tính", desc: "Điền form và nhận file ngay qua Email tự động" },
            { step: 2, title: "Nhập thông số", desc: "Điền số vốn hiện có và khả năng tích lũy hàng tháng" },
            { step: 3, title: "Thiết lập hành động", desc: "Bám sát lộ trình mua nhà do bảng tính tự động đề xuất" }
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              key={i} 
              className="bg-white rounded-[1.5rem] md:rounded-2xl p-6 md:p-8 border border-slate-100 shadow-xl text-center relative group"
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadFormSection({ navigate }: { navigate: any }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstname: formData.get("firstname"),
      email: formData.get("email")
    };

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      
      // Even if somewhat unsuccessful strictly, we redirect to thank you for UX, 
      // but let's check ok conditionally
      if (!res.ok && res.status !== 302 && res.status !== 200) {
        throw new Error("Có lỗi xảy ra, vui lòng thử lại!");
      }
      navigate("/thank-you");
    } catch (err: any) {
      setError(err.message || "Lỗi kết nối máy chủ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead-form" className="scroll-mt-24 pt-12">
      <div className="glass-card bg-white/80 p-5 md:p-10 lg:p-12 overflow-hidden relative border-t-[6px] border-t-amber-500">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-amber-400 rounded-full filter blur-[60px] md:blur-[100px] opacity-10 -z-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
              Nhận Ngay File Tính Lãi Kép & <span className="text-gradient">Lộ Trình Mua Nhà</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">Hệ thống sẽ tự động gửi Bảng tính Excel cao cấp và Video hướng dẫn sử dụng vào Email của bạn trong 2 phút.</p>
            <div className="flex items-center space-x-2 text-sm font-bold text-green-600 bg-green-50 px-4 py-2 rounded-lg inline-flex mt-4 border border-green-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              <span>Cam kết bảo mật 100% thông tin</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="form-grid-wrapper glass rounded-[24px] p-6 relative z-10 space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-[18px] font-bold text-slate-900 mb-1">Nhận File tính Lãi kép & Lộ trình qua Email</h3>
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100 font-medium">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div className="space-y-1.5 w-full">
                  <label className="text-[11px] font-semibold text-[#94a3b8] block uppercase">Họ và Tên</label>
                  <input 
                    type="text" 
                    name="firstname"
                    required
                    placeholder="VD: Nguyễn Văn A"
                    className="w-full px-3 py-3 rounded-[10px] bg-white border border-[#e2e8f0] focus:border-blue-500 outline-none transition-all text-[14px]"
                  />
                </div>

                <div className="space-y-1.5 w-full">
                  <label className="text-[11px] font-semibold text-[#94a3b8] block uppercase">Email nhận file</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="VD: nguyenb@gmail.com"
                    className="w-full px-3 py-3 rounded-[10px] bg-white border border-[#e2e8f0] focus:border-blue-500 outline-none transition-all text-[14px]"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full btn-accent py-3.5 rounded-[10px] font-bold text-[15px] transition-all flex justify-center items-center uppercase"
              >
                {loading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : (
                  "Gửi cho tôi ngay"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg text-white flex items-center justify-center font-black text-lg">
                N
              </div>
              <span className="font-bold text-white text-xl tracking-tight">Nguyễn Nam BĐS</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Đồng hành cùng bạn trên con đường tự do tài chính và sở hữu bất động sản mơ ước thông qua các giải pháp tư vấn minh bạch, chuyên sâu.
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Liên hệ</h4>
            <div className="flex flex-col md:items-end space-y-3">
              <a href="tel:0987182666" className="text-slate-400 hover:text-blue-400 flex items-center gap-2 group">
                <Phone className="w-4 h-4 group-hover:text-blue-400" />
                <span>Hotline: 0987.182.666</span>
              </a>
              <a href="https://www.facebook.com/mr.nambdsvn/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 flex items-center gap-2 group">
                <Facebook className="w-4 h-4 group-hover:text-blue-400" />
                <span>Facebook Cá Nhân</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Nguyễn Nam BĐS. Bảo lưu mọi quyền.
        </div>
      </div>
    </footer>
  );
}
