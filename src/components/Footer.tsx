import React from 'react';
import { 
  UtensilsCrossed, 
  Wine, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Gift, 
  Clock, 
  Sparkles,
  Tag
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface FooterProps {
  onOpenOrderModal: () => void;
  onOpenDiscountModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderModal, onOpenDiscountModal }) => {
  const { theme, lang, t } = useThemeLanguage();

  return (
    <footer className={`border-t transition-colors duration-300 pb-20 sm:pb-8 text-left ${
      theme === 'dark' ? 'bg-[#0E0A09] border-white/10 text-slate-400' : 'bg-stone-100 border-stone-200 text-stone-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-700 to-orange-600 p-1.5 flex items-center justify-center text-white shadow-md">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="font-heading font-black text-xl text-white">
                MenuCard <span className="wine-flame-gradient-text">GOURMET</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Giải pháp landing page và thực đơn số chuyển đổi cao dành riêng cho nhà hàng fine dining, lounge và ẩm thực cao cấp chuẩn 5 sao.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-mono">
              <span>★ Michelin & Haute Cuisine Standard 2026</span>
            </div>
          </div>

          {/* Col 2: Core Modules */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Hệ Thống Phân Hệ
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#core-tabs" className="hover:text-rose-400 transition-colors">Nghiệp Vụ & Tính Năng Cốt Lõi</a></li>
              <li><a href="#digital-menu" className="hover:text-rose-400 transition-colors">Thực Đơn Số Đa Giác Quan</a></li>
              <li><a href="#vip-booking" className="hover:text-rose-400 transition-colors">Form Đặt Bàn VIP & Phòng Tiệc</a></li>
              <li><a href="#manager-push" className="hover:text-rose-400 transition-colors">Thông Báo Đẩy Quản Lý & POS</a></li>
              <li><a href="#qr-experience" className="hover:text-rose-400 transition-colors">Quét Mã QR Chuẩn Mọi Thiết Bị</a></li>
            </ul>
          </div>

          {/* Col 3: Cam kết */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Cam Kết Triển Khai
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5 text-emerald-400">
                <Gift className="w-3.5 h-3.5" /> Tặng Domain + Cloud Server 1 năm
              </li>
              <li className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" /> Bảo hành kỹ thuật 12 tháng
              </li>
              <li className="flex items-center gap-1.5 text-rose-400">
                <Clock className="w-3.5 h-3.5" /> Bàn giao hoàn thiện trong 24-48 giờ
              </li>
              <li className="flex items-center gap-1.5 text-amber-400">
                ★ 100% Full Source Code độc lập
              </li>
            </ul>
          </div>

          {/* Col 4: Hotline & Tư Vấn */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Tư Vấn & Khởi Tạo
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono text-white font-bold">0912 345 678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>contact@menucard-gourmet.vn</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Quận 1, TP. Hồ Chí Minh & Hà Nội</span>
              </div>
            </div>

            <button
              onClick={onOpenOrderModal}
              className="w-full mt-2 py-2.5 rounded-xl btn-wine text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nhận Báo Giá Bản Này (Từ 2,2tr)</span>
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © 2026 MenuCard Gourmet Inc. Mọi quyền được bảo lưu. Tối ưu theo bộ Top 6 AI Design Skills.
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
            <span>Bảo mật chuẩn ISO 27001</span>
            <span>Google PageSpeed 99/100</span>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Quick Conversion Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#120E0D]/95 border-t border-rose-500/30 backdrop-blur-lg flex items-center justify-between gap-2 shadow-2xl">
        <div className="text-left">
          <span className="text-[10px] uppercase font-mono text-slate-400 block">Trọn Gói:</span>
          <span className="font-heading font-black text-sm text-amber-400">Từ 2,2tr</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenDiscountModal}
            className="px-2.5 py-2 rounded-lg border border-amber-500/50 bg-amber-500/10 text-amber-300 text-[11px] font-bold flex items-center gap-1"
          >
            <Tag className="w-3 h-3" />
            <span>-20%</span>
          </button>

          <button
            onClick={onOpenOrderModal}
            className="px-3.5 py-2 rounded-lg btn-wine text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md"
          >
            <Sparkles className="w-3 h-3" />
            <span>Đặt Bản Này</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
