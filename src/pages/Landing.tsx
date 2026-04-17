import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, TrendingDown, Map, Clock, Wallet, 
  LineChart, SlidersHorizontal, BarChart2, Home,
  ArrowRight, Phone, Facebook, Gift, Loader2, Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Landing() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen relative font-sans selection:bg-indigo-100 selection:text-indigo-900 bg-grid-pattern overflow-x-hidden">
      <div className="fixed inset-0 hero-gradient pointer-events-none -z-10"></div>
      
      <Header />

      <main className="section-container pt-32 space-y-32 pb-32">
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
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-header py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-slate-950 text-white flex items-center justify-center rounded-xl font-black text-xl transition-transform group-hover:scale-110">
              N
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-950 text-base tracking-tight leading-none">Nguyễn Nam BĐS</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">Tài Chính & Bất Động Sản</span>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-10">
            {['Vấn đề', 'Tính năng', 'Quy trình'].map((item, i) => (
              <motion.a 
                key={item}
                href={`#${item === 'Vấn đề' ? 'van-de' : item === 'Tính năng' ? 'tinh-nang' : 'quy-trinh'}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="text-slate-600 hover:text-slate-950 font-semibold text-sm transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-950 transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <a 
              href="#lead-form"
              className="bg-slate-950 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-slate-800 transition-all hidden sm:block shadow-lg hover:shadow-slate-200"
            >
              Tải File Ngay
            </a>
            
            <button 
              className="md:hidden p-2 text-slate-900 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 overflow-hidden"
      >
        <div className="px-6 py-8 flex flex-col space-y-6">
          <a href="#van-de" onClick={() => setMobileMenuOpen(false)} className="text-slate-900 font-bold text-xl hover:translate-x-2 transition-transform">Vấn đề</a>
          <a href="#tinh-nang" onClick={() => setMobileMenuOpen(false)} className="text-slate-900 font-bold text-xl hover:translate-x-2 transition-transform">Tính năng</a>
          <a href="#quy-trinh" onClick={() => setMobileMenuOpen(false)} className="text-slate-900 font-bold text-xl hover:translate-x-2 transition-transform">Quy trình</a>
          <a 
            href="#lead-form"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-4 text-center bg-slate-950 text-white rounded-xl font-bold text-base shadow-xl"
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
    <section className="relative grid lg:grid-cols-[1fr_0.8fr] gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-10"
      >
        <div className="badge-premium">
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
          <span>Tài liệu Độc Quyền 2026</span>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black tracking-tight text-slate-950 leading-[1.1]">
            <span className="text-slate-500 block text-2xl sm:text-3xl font-bold mb-4 uppercase tracking-[0.2em]">Kế hoạch 2026</span>
            Làm Chủ <span className="text-brand-accent italic">Tài Chính</span> <br/>
            Sở Hữu <span className="underline decoration-brand-gold underline-offset-8">Nhà Mơ Ước</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
            Tặng anh chị <span className="text-slate-950 font-bold">File Excel tự động</span> giúp kỷ luật tài chính, tận dụng sức mạnh lãi kép để gom tiền mua nhà nhanh nhất. Hơn 2,000 khách hàng đã áp dụng thành công.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a href="#lead-form" className="btn-premium-accent group flex items-center justify-center space-x-3">
            <span>Tải Miễn Phí Ngay</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#quy-trinh" className="btn-premium-primary !bg-white !text-slate-950 border border-slate-200 hover:border-slate-400 flex items-center justify-center">
            Xem Lộ Trình
          </a>
        </div>

        <div className="flex items-center space-x-6 pt-4 border-t border-slate-100">
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden ring-2 ring-slate-50">
                <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Avatar" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
            <span className="text-slate-950">2,000+</span> Lượt tải tháng này
          </p>
        </div>
      </motion.div>

      <div className="relative group perspective-1000 hidden lg:block">
        <motion.div 
          initial={{ opacity: 0, rotateY: 20, rotateX: 10, scale: 0.8 }}
          animate={{ opacity: 1, rotateY: -15, rotateX: 10, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 p-1 bg-gradient-to-br from-white/20 to-transparent rounded-[40px] shadow-2xl"
        >
          <div className="glass shadow-2xl rounded-[40px] overflow-hidden border-white/40">
            <div className="bg-slate-950 px-6 py-4 flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Dashboard_MuaNha_2026.xlsx</span>
            </div>
            <div className="p-8 space-y-8 bg-white">
              <div className="grid grid-cols-3 gap-4">
                {[1,2,3].map(i => (
                  <div key={i} className="h-24 bg-slate-50 rounded-2xl border border-slate-100 p-4 space-y-2">
                    <div className="w-8 h-1 bg-brand-accent/20 rounded"></div>
                    <div className="w-full h-8 bg-slate-100 rounded-lg"></div>
                  </div>
                ))}
              </div>
              <div className="h-48 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/5 to-transparent"></div>
                <div className="flex items-end space-x-2 h-32">
                  {[40, 70, 50, 90, 60, 100, 80].map((h, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
                      className="w-4 bg-brand-accent rounded-t-sm"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Floating cards */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-10 z-20 glass p-6 rounded-3xl shadow-2xl border-white/80"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-brand-success/20 rounded-2xl flex items-center justify-center text-brand-success">
              <TrendingDown className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Dự báo</div>
              <div className="text-xl font-black text-slate-950 font-display">Tăng 240%</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-10 -left-10 z-20 glass p-6 rounded-3xl shadow-2xl border-white/80"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-brand-gold/20 rounded-2xl flex items-center justify-center text-brand-gold">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Mục tiêu</div>
              <div className="text-xl font-black text-slate-950 font-display">Sở hữu nhà</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AuthorSection() {
  return (
    <section className="relative py-20">
      <div className="glass-dark rounded-[40px] p-8 md:p-16 overflow-hidden flex flex-col md:flex-row items-center gap-12 group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <div className="absolute inset-0 bg-brand-accent rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <img 
            src="https://i.postimg.cc/j5nWg8jz/anh-dai-dien.jpg" 
            alt="Nguyễn Nam" 
            className="w-full h-full object-cover rounded-3xl relative z-10 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight">Nguyễn Nam BĐS</h3>
            <p className="text-brand-accent font-bold uppercase tracking-widest text-sm italic">Cố vấn Tài chính & Bất động sản chuyên nghiệp</p>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
            "Hơn 4 năm kinh nghiệm thực chiến trong lĩnh vực Tư vấn BĐS & Tài chính, tôi hiểu rằng <span className="text-white italic underline underline-offset-4 decoration-white/20">không phải thu nhập thấp</span> cản trở anh chị mua nhà, mà chính là <span className="text-white font-bold">thiếu đi một lộ trình tài chính khoa học</span>."
          </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="tel:0987182666" className="flex items-center space-x-3 text-white/80 hover:text-white font-bold uppercase tracking-widest text-[11px] transition-colors border border-white/10 px-4 py-2 rounded-full">
              <Phone className="w-4 h-4" />
              <span>0987.182.666</span>
            </a>
            <a href="https://www.facebook.com/mr.nambdsvn/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-white/50 hover:text-brand-accent font-bold uppercase tracking-widest text-[11px] px-4 py-2 transition-colors">
              <Facebook className="w-4 h-4" />
              <span>Facebook Hơn 50k Followers</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      icon: TrendingDown,
      title: "Lạm phát \"ăn mòn\"",
      desc: "Tiền để không mất dần giá trị. Thiếu kênh tích lũy đúng, sức mua của bạn đang lùi lại.",
      color: "bg-red-500"
    },
    {
      icon: Wallet,
      title: "Chi tiêu không kiểm soát",
      desc: "Thu nhập 30 triệu nhưng không kỷ luật trích lập quỹ, dễ dàng tiêu phạm vào tiền tương lai.",
      color: "bg-amber-500"
    },
    {
      icon: Map,
      title: "Thiếu lộ trình rõ ràng",
      desc: "Muốn mua nhà nhưng không biết mỗi tháng cần cất đi chính xác bao nhiêu, khi nào thì đủ tiền cọc.",
      color: "bg-brand-accent"
    }
  ];

  return (
    <section id="van-de" className="scroll-mt-24 space-y-20">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-slate-950 uppercase italic leading-none">⚠️ Cái bẫy <br/><span className="text-brand-accent">Thu Nhập Ổn Định</span></h2>
        <p className="text-xl text-slate-500 font-medium">80% người thu nhập tốt vẫn chưa thể mua nhà vì 3 rào cản tài chính này.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-10 rounded-[40px] space-y-8 group hover:-translate-y-2 transition-all"
          >
            <div className={`w-16 h-16 ${p.color} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform`}>
              <p.icon className="w-8 h-8" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-black text-slate-950">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeatureSection() {
  const features = [
    { title: "Lộ trình trực quan", icon: LineChart, desc: "Chỉ cần nhập thu nhập và mục tiêu, bảng tính tự động trả kết quả thời điểm đủ tiền mua nhà." },
    { title: "Tùy chỉnh linh hoạt", icon: SlidersHorizontal, desc: "Thay đổi biến số (lãi suất, số tiền gửi) nhanh chóng để chọn phương án tối ưu." },
    { title: "Kỷ luật thực tế", icon: BarChart2, desc: "Nhìn thấy tài sản tăng trưởng theo hàm mũ giúp triệt tiêu thói quen tiêu xài lãng phí." }
  ];

  return (
    <section id="tinh-nang" className="scroll-mt-24 space-y-20">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-slate-950 uppercase italic leading-none">💡 Giải pháp <br/><span className="text-brand-accent">File Excel Thông Minh</span></h2>
        <p className="text-xl text-slate-500 font-medium">Công cụ được thiết kế chuyên biệt cho lộ trình sở hữu nhà 2026.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-brand-accent/5 rounded-[40px] transform rotate-1 group-hover:rotate-2 transition-transform"></div>
            <div className="relative glass p-10 rounded-[40px] space-y-8 h-full border-white/60">
              <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:bg-brand-accent transition-colors">
                <f.icon className="w-8 h-8" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-black text-slate-950">{f.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{f.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="space-y-20 py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-slate-950 -z-10 -rotate-2"></div>
      
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-white uppercase italic leading-none">Sự khác biệt <br/><span className="text-brand-accent">Thực tế</span></h2>
        <p className="text-xl text-slate-400 font-medium italic">Ví dụ: Tiết kiệm 15 triệu/tháng (50% thu nhập 30tr). Sau 3 năm, con số không hề nhỏ.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-stretch">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-12 space-y-10"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <div className="badge-premium !bg-white/10 !text-white !border-white/20 uppercase tracking-widest">Tiết kiệm thuần</div>
              <h3 className="text-5xl font-display font-black text-white">540 Triệu</h3>
            </div>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/40">01</div>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed font-medium">Bỏ ống heo hoặc để tài khoản thanh toán 0%. Tiền đứng yên và bị lạm phát bào mòn sức mua theo thời gian.</p>
          <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-slate-500 w-[60%]"></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-brand-accent rounded-[40px] p-12 space-y-10 shadow-[0_0_60px_rgba(99,102,241,0.3)] transform md:-translate-y-8"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <div className="badge-premium !bg-white/20 !text-white !border-white/20 uppercase tracking-widest">Tích lũy Lãi kép</div>
              <h3 className="text-5xl font-display font-black text-white">610 Triệu</h3>
            </div>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/40">02</div>
          </div>
          <p className="text-white/80 text-lg leading-relaxed font-medium italic">Tái đầu tư liên tục với lợi suất 8%/năm. Chênh lệch ~70 triệu (tương đương 4 tháng thu nhập) chỉ sau 3 năm khởi đầu.</p>
          <div className="h-4 w-full bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-white shadow-[0_0_20px_white]"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const steps = [
    { title: "Đăng ký nhận file", icon: Building2, desc: "Điền Tên & Email để hệ thống nhận diện." },
    { title: "Kiểm tra Email", icon: Clock, desc: "Bảng tính & Video HD được gửi tự động sau 2 phút." },
    { title: "Hành động ngay", icon: ArrowRight, desc: "Cam kết kỷ luật và bám sát lộ trình mua nhà." }
  ];

  return (
    <section id="quy-trinh" className="scroll-mt-24 space-y-20 py-20">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-slate-950 uppercase italic leading-none">🚀 Lộ trình <br/><span className="text-brand-accent">3 Bước Sở Hữu Nhà</span></h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative">
        <div className="absolute top-[32px] left-0 w-full h-px bg-slate-200 hidden md:block"></div>
        {steps.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative space-y-8 text-center"
          >
            <div className="w-16 h-16 bg-white border-4 border-slate-50 flex items-center justify-center rounded-2xl mx-auto shadow-xl z-10 relative group-hover:scale-110 transition-transform">
              <span className="text-slate-950 font-display font-black text-2xl">{i + 1}</span>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-black text-slate-950">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed max-w-xs mx-auto">{item.desc}</p>
            </div>
          </motion.div>
        ))}
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
    const firstname = formData.get("firstname") as string;
    const email = formData.get("email") as string;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Email không đúng định dạng. Vui lòng kiểm tra lại (ví dụ: nambds@gmail.com)");
      setLoading(false);
      return;
    }

    const data = { firstname, email };

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      
      const result = await res.json();
      
      if (!res.ok && res.status !== 302 && res.status !== 200) {
        throw new Error(result.error || "Có lỗi xảy ra, vui lòng thử lại!");
      }

      if (result.success) {
        navigate("/thank-you");
      } else {
        throw new Error(result.error || "Gửi dữ liệu thất bại");
      }
    } catch (err: any) {
      setError(err.message || "Lỗi kết nối máy chủ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead-form" className="scroll-mt-24 pt-20">
      <div className="glass-dark rounded-[40px] p-8 md:p-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent)]"></div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <div className="badge-premium !bg-brand-accent/20 !text-brand-accent !border-brand-accent/30">Limited Access</div>
            <h2 className="text-4xl md:text-7xl font-display font-black text-white uppercase italic leading-none">
              Sẵn sàng để <br/><span className="text-brand-accent">Bứt Phá?</span>
            </h2>
            <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-lg">
              Nhận ngay bộ công cụ độc quyền giúp bạn rút ngắn 5-10 năm tích lũy mua nhà. Chúng tôi chỉ gửi cho những người thực sự khao khát.
            </p>
            <div className="flex items-center space-x-6 text-white/40 font-bold uppercase tracking-widest text-xs">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800"></div>
                ))}
              </div>
              <span>2,400+ Joined this week</span>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl relative border border-slate-100">
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-accent rounded-3xl flex items-center justify-center text-white rotate-12 shadow-2xl">
              <Gift className="w-10 h-10" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-50 text-red-600 text-sm p-4 rounded-2xl border border-red-200 font-bold"
                >
                  {error}
                </motion.div>
              )}

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-slate-500 uppercase tracking-widest ml-1">Danh tính của bạn</label>
                  <input 
                    type="text" 
                    name="firstname"
                    required
                    placeholder="Họ và Tên"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-400 font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email nhận tài liệu</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Email cá nhân"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-400 font-bold"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full btn-premium-accent py-5 rounded-2xl flex justify-center items-center group font-black uppercase italic tracking-widest shadow-[0_20px_40px_rgba(99,102,241,0.2)] hover:shadow-[0_25px_50px_rgba(99,102,241,0.3)] transition-all"
              >
                {loading ? (
                  <Loader2 className="animate-spin w-6 h-6" />
                ) : (
                  <span className="flex items-center space-x-3">
                    <span>NHẬN FILE NGAY</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </button>
              
              <p className="text-center text-[11px] text-slate-400 font-bold uppercase tracking-widest">🔒 Bảo mật dữ liệu 100%</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start border-b border-white/5 pb-20">
          <div className="space-y-8">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-white font-black text-2xl rotate-3 group-hover:rotate-12 transition-transform">N</div>
              <span className="text-2xl font-display font-black text-white tracking-widest uppercase italic">Nguyễn Nam BĐS</span>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed max-w-sm font-medium">
              Kiến tạo lộ trình tự do tài chính thông qua bất động sản và sức mạnh của lãi kép.
            </p>
            <div className="flex items-center space-x-6">
              <a href="https://www.facebook.com/mr.nambdsvn/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-accent hover:border-brand-accent transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/mr.nambdsvn/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-accent hover:border-brand-accent transition-all">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 text-sm sm:text-base">
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Hỗ trợ</h4>
              <ul className="space-y-4">
                <li><a href="tel:0987182666" className="text-white/60 hover:text-brand-accent transition-colors font-medium">0987.182.666</a></li>
                <li><a href="#" className="text-white/60 hover:text-brand-accent transition-colors font-medium">Trung tâm trợ giúp</a></li>
                <li><a href="#" className="text-white/60 hover:text-brand-accent transition-colors font-medium">Chính sách bảo mật</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Shortcut</h4>
              <ul className="space-y-4">
                <li><a href="#van-de" className="text-white/60 hover:text-brand-accent transition-colors font-medium">Vấn đề</a></li>
                <li><a href="#tinh-nang" className="text-white/60 hover:text-brand-accent transition-colors font-medium">Công cụ</a></li>
                <li><a href="#quy-trinh" className="text-white/60 hover:text-brand-accent transition-colors font-medium">Lộ trình</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Nguyễn Nam BĐS. <span className="text-slate-800">Elite Series.</span>
          </p>
          <div className="flex items-center space-x-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            <span>Powered by</span>
            <span className="text-white tracking-widest uppercase">Elite AI Engine</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
