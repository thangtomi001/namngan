import React from 'react';
import { Gem, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Gem className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold tracking-tighter text-white">HERAGON<span className="text-amber-600">CITY</span></span>
          </div>
          <p className="mb-4">Khu đô thị sinh thái ven sông Mã đẳng cấp bậc nhất trung tâm TP. Thanh Hóa.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase">Thông tin liên hệ</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><MapPin className="h-5 w-5 shrink-0 text-amber-600"/> Vị trí dự án: Phường Hàm Rồng, TP. Thanh Hóa</li>
            <li className="flex items-center gap-2"><Phone className="h-5 w-5 text-amber-600"/> Hotline: 0838.456.567</li>
            <li className="flex items-center gap-2"><Clock className="h-5 w-5 text-amber-600"/> Hỗ trợ tư vấn 24/7</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase">Khuyến cáo</h4>
          <p className="text-sm">Thông tin, hình ảnh, các tiện ích trên website chỉ mang tính chất minh họa tương đối và có thể được điều chỉnh theo quyết định của Chủ đầu tư tại từng thời điểm đảm bảo phù hợp quy hoạch và thực tế thi công.</p>
        </div>
      </div>
    </footer>
  );
}
