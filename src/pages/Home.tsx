import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, ShieldCheck, TrendingUp, CheckCircle2, ArrowRight, Phone, Building, AlertTriangle, Newspaper, ExternalLink } from 'lucide-react';
import { newsArticles } from '../data/news';
import { useLocation } from 'react-router-dom';

const scrollToForm = () => {
  document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
};

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: 'Đất nền liền kề'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxWmUGL92vEyj4_DU9KbCKuAt-r4vp0OXvpfxF0MXuYNreWmIpEuIjksyfD5ZOFRjZ7QQ/exec';
    
    try {
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('phone', formData.phone);
      formDataObj.append('product', formData.product);
      formDataObj.append('timestamp', new Date().toLocaleString('vi-VN'));

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataObj
      });
      
      // Track Lead event with Facebook Pixel
      if (typeof (window as any).fbq === 'function') {
        (window as any).fbq('track', 'Lead');
      }

      setIsSuccess(true);
      setFormData({ name: '', phone: '', product: 'Đất nền liền kề' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại sau!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/hero-bg.jpg" 
            alt="Heragon City Riverside" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 font-medium mb-6 backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              Dự án Heragon Thanh Hóa - Tâm điểm 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
              DỰ ÁN HERAGON THANH HÓA
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200 mb-8">
              ĐẤT NỀN SỔ ĐỎ VEN SÔNG MÃ
            </h2>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-3xl">
              Quy mô 57.9ha tại Hàm Rồng - Trục phát triển mới của thành phố. 
              Cơ hội <strong className="text-amber-400">GẤP ĐÔI TÀI SẢN</strong> trước thềm siết luật phân lô bán nền 2025.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <button onClick={scrollToForm} className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg transition flex items-center justify-center gap-2 shadow-xl shadow-amber-600/20">
                Nhận bảng giá ngay <ArrowRight className="h-5 w-5" />
              </button>
              <button onClick={scrollToForm} className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition flex items-center justify-center gap-2">
                Chọn lô đẹp
              </button>
            </div>
            
            <div className="mt-10 flex items-center justify-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-amber-400"/> Sổ đỏ lâu dài</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-amber-400"/> Tiềm năng +30%/năm</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOMO Banner */}
      <div className="bg-red-600 text-white py-3 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3 font-bold text-sm md:text-base animate-pulse text-center">
          <AlertTriangle className="h-5 w-5 shrink-0" />
          CHỈ CÒN 15 SUẤT NỘI BỘ GIÁ TỐT NHẤT GIAI ĐOẠN 1 - ĐĂNG KÝ NGAY ĐỂ GIỮ CHỖ!
          <AlertTriangle className="h-5 w-5 shrink-0 hidden sm:block" />
        </div>
      </div>

      {/* Reasons to Invest */}
      <section id="tong-quan" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">TẠI SAO PHẢI ĐẦU TƯ <span className="text-amber-600">HERAGON CITY</span> NGAY LÚC NÀY?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Bảo chứng vàng cho dòng tiền đầu tư với 4 lợi thế độc tôn không thể sao chép.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: "Vị trí độc tôn ven sông", desc: "Tọa độ vàng Hàm Rồng, ôm trọn dòng sông Mã lịch sử, phong thủy vượng khí, sinh tài lộc." },
              { icon: ShieldCheck, title: "Pháp lý an toàn 100%", desc: "Dự án hiếm hoi ĐÃ CÓ SỔ ĐỎ TỪNG LÔ. Sẵn sàng sang tên, an tâm tuyệt đối cho nhà đầu tư." },
              { icon: TrendingUp, title: "Tiềm năng tăng giá 30%", desc: "Đón đầu quy hoạch mở rộng thành phố và hạ tầng giao thông nghìn tỷ đang triển khai." },
              { icon: Building, title: "Quy mô đẳng cấp 57.9ha", desc: "Đại đô thị đồng bộ tiện ích lớn nhất khu vực, kiến tạo cộng đồng tinh hoa mới của Thanh Hóa." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-amber-200 transition group"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                  <item.icon className="h-7 w-7 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section id="mat-bang" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">MẶT BẰNG <span className="text-amber-600">DỰ ÁN</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Quy hoạch đồng bộ, thiết kế tối ưu, đa dạng loại hình sản phẩm.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100"
          >
            <img 
              src="/mat-bang.png" 
              alt="Mặt bằng phân lô Heragon City" 
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
              }}
            />
          </motion.div>
          
          <div className="mt-10 text-center">
             <button onClick={scrollToForm} className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg shadow-amber-600/30 inline-flex items-center gap-2">
                Tải mặt bằng nét (PDF) <ArrowRight className="h-5 w-5" />
             </button>
          </div>
        </div>
      </section>

      {/* FOMO / Legal Section */}
      <section id="phap-ly" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current text-white"><polygon points="0,100 100,0 100,100"/></svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-red-600 text-white font-bold px-4 py-1 rounded mb-6">TIN NÓNG THỊ TRƯỜNG</div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                LUẬT ĐẤT ĐAI 2024 SIẾT CHẶT PHÂN LÔ BÁN NỀN
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Từ 2025, nguồn cung đất nền phân lô tại các đô thị loại I, II, III sẽ bị siết chặt. 
                <strong className="text-amber-400"> Heragon City là một trong những dự án CUỐI CÙNG được cấp sổ đỏ từng lô</strong> tại trung tâm TP. Thanh Hóa.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-amber-400 shrink-0 mt-0.5"/>
                  <span className="text-lg">Sự khan hiếm đẩy giá đất nền có sổ đỏ tăng vọt trong 1-2 năm tới.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-amber-400 shrink-0 mt-0.5"/>
                  <span className="text-lg">Mua ngay hôm nay để sở hữu tài sản thực, giá trị thực trước khi thiết lập mặt bằng giá mới.</span>
                </li>
              </ul>
              <button onClick={scrollToForm} className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg shadow-amber-600/30">
                Tải trọn bộ pháp lý dự án
              </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img src="/legal-image.jpg" alt="Pháp lý minh bạch" className="rounded-2xl shadow-2xl border-4 border-slate-800" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <ShieldCheck className="h-10 w-10 text-green-600" />
                  <span className="font-bold text-xl">SỔ ĐỎ TRAO TAY</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">100% các lô đất đã có Giấy chứng nhận QSDĐ. Công chứng sang tên ngay.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="vi-tri" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">VỊ TRÍ CHIẾN LƯỢC - <span className="text-amber-600">TÂM ĐIỂM KẾT NỐI</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Tọa lạc tại phường Hàm Rồng, ôm trọn dòng sông Mã, Heragon City sở hữu vị trí "Nhất cận thị - Nhị cận giang - Tam cận lộ".</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl h-[400px] bg-slate-200 relative"
            >
              <img src="/location-map.png" alt="Bản đồ vị trí" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/20">
                <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full font-bold text-slate-800 shadow-lg flex items-center gap-2">
                  <MapPin className="text-amber-600" /> Bản đồ quy hoạch vị trí
                </div>
              </div>
            </motion.div>
            <div className="flex flex-col justify-center space-y-6">
              {[
                { time: "05", desc: "Đến trung tâm hành chính mới TP. Thanh Hóa, BigC (Go!), Vinhomes Star City." },
                { time: "10", desc: "Kết nối trực tiếp Quốc lộ 1A, thuận tiện di chuyển Bắc - Nam." },
                { time: "15", desc: "Đến thành phố biển Sầm Sơn qua đại lộ Nam Sông Mã." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100"
                >
                  <div className="bg-amber-100 p-3 rounded-lg text-amber-600 font-bold text-xl">{item.time}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Phút di chuyển</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
              <motion.button 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                onClick={scrollToForm} 
                className="mt-4 text-amber-600 font-bold flex items-center gap-2 hover:text-amber-700 transition"
              >
                Xem chi tiết quy hoạch hạ tầng <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-du-an" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">VIDEO <span className="text-amber-500">THỰC TẾ DỰ ÁN</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Cập nhật tiến độ và hình ảnh thực tế mới nhất từ công trường Heragon City.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-700 aspect-video bg-slate-800"
          >
            <video 
              className="w-full h-full object-cover"
              controls
              poster="https://images.unsplash.com/photo-1541888086225-f6404f380c5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            >
              <source src="/project-video.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ thẻ video.
            </video>
          </motion.div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">HỆ SINH THÁI <span className="text-amber-600">TIỆN ÍCH ĐỈNH CAO</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Trải nghiệm sống nghỉ dưỡng mỗi ngày ngay tại trung tâm thành phố.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Công viên ven sông", img: "/amenity-1.png" },
              { name: "Trung tâm thương mại", img: "/amenity-2.png" },
              { name: "Trường học quốc tế", img: "/amenity-3.png" },
              { name: "Khu thể thao đa năng", img: "/amenity-4.png" }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative h-48 rounded-xl overflow-hidden group"
              >
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex items-end p-4">
                  <span className="font-bold text-lg text-white">{item.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="san-pham" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">SẢN PHẨM <span className="text-amber-600">ĐA DẠNG</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Đáp ứng mọi nhu cầu an cư và đầu tư với thiết kế tối ưu, diện tích đa dạng.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Đất nền Liền kề", image: "/product-1.png", desc: "Diện tích: 90m2 - 120m2. Phù hợp đầu tư sinh lời nhanh, tính thanh khoản cực cao." },
              { title: "Shophouse Thương mại", image: "/product-2.png", desc: "Nằm trên trục đường lớn. Tối ưu công năng vừa ở vừa kinh doanh, cho thuê sinh dòng tiền." },
              { title: "Biệt thự Ven sông", image: "/product-3.png", desc: "Diện tích: 200m2 - 350m2. Khẳng định đẳng cấp thượng lưu với tầm nhìn panorama sông Mã." }
            ].map((prod, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 group flex flex-col"
              >
                <div className="h-64 overflow-hidden relative shrink-0">
                  <img src={prod.image} alt={prod.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white">{prod.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-slate-600 mb-6 flex-1">{prod.desc}</p>
                  <button onClick={scrollToForm} className="w-full py-3 border-2 border-amber-600 text-amber-600 font-bold rounded-xl hover:bg-amber-600 hover:text-white transition mt-auto">
                    Xem mặt bằng & Giá
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="tin-tuc" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">TIN TỨC <span className="text-amber-600">DỰ ÁN</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Cập nhật những thông tin mới nhất về Heragon City trên các phương tiện truyền thông.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article, idx) => (
              <motion.a 
                key={article.id} 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-amber-200 transition group flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
                    <Newspaper className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-slate-900">{article.source}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4 group-hover:text-amber-600 transition flex-1">{article.title}</h3>
                <div className="flex items-center gap-2 text-amber-600 font-medium text-sm mt-auto">
                  Xem chi tiết <ExternalLink className="h-4 w-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="lead-form" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            <div className="md:w-5/12 bg-amber-600 p-10 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4">CƠ HỘI ĐẦU TƯ TỐT NHẤT 2026</h3>
              <p className="mb-8 text-amber-100">Đăng ký ngay để nhận thông tin nội bộ trước khi dự án công bố rộng rãi.</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-white"/> Bảng giá gốc CĐT (Chưa qua F1)</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-white"/> Sơ đồ phân lô chi tiết</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-white"/> Chính sách chiết khấu khủng</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-white"/> Hỗ trợ tham quan thực tế 24/7</li>
              </ul>
            </div>
            
            <div className="md:w-7/12 p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">ĐĂNG KÝ NHẬN THÔNG TIN</h3>
              
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-bold mb-2">Đăng ký thành công!</h4>
                  <p>Cảm ơn bạn đã quan tâm. Chuyên viên tư vấn sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Họ và tên *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition" 
                      placeholder="Nhập họ tên của bạn" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Số điện thoại *</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition" 
                      placeholder="Nhập số điện thoại (Zalo)" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Sản phẩm quan tâm</label>
                    <select 
                      value={formData.product}
                      onChange={(e) => setFormData({...formData, product: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white"
                    >
                      <option>Đất nền liền kề</option>
                      <option>Shophouse thương mại</option>
                      <option>Biệt thự ven sông</option>
                      <option>Cần tư vấn thêm</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full ${isSubmitting ? 'bg-slate-400' : 'bg-amber-600 hover:bg-amber-700'} text-white font-bold text-lg py-4 rounded-xl transition shadow-lg shadow-amber-600/30 mt-4 flex justify-center items-center`}
                  >
                    {isSubmitting ? 'ĐANG GỬI...' : 'NHẬN BẢNG GIÁ & ƯU ĐÃI NGAY'}
                  </button>
                  <p className="text-xs text-center text-slate-500 mt-4">Thông tin của bạn được bảo mật tuyệt đối và chỉ dùng để tư vấn dự án này.</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
