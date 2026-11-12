import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Gift, 
  Clock, 
  ShieldCheck, 
  Phone, 
  User, 
  UtensilsCrossed,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface OrderQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  hasDiscount?: boolean;
}

export const OrderQuoteModal: React.FC<OrderQuoteModalProps> = ({ 
  isOpen, 
  onClose,
  hasDiscount = false 
}) => {
  const { lang } = useThemeLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [cuisineType, setCuisineType] = useState('Fine Dining & Âu Mỹ');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSuccess(true);
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#06B6D4', '#D4AF37', '#10B981']
      });
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg rounded-3xl bg-[#1C1412] border border-rose-500/40 p-6 sm:p-8 text-white relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-rose-950 text-rose-300 border border-rose-500/40">
                ⚡ Triển khai trong 24 - 48 giờ
              </span>
              {hasDiscount && (
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-950 text-amber-300 border border-amber-500/40">
                  -20% Voucher Áp Dụng
                </span>
              )}
            </div>

            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">
              Đặt Làm Bản Này / Nhận Báo Giá
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              Sở hữu ngay website & thực đơn số MenuCard Gourmet cho nhà hàng của bạn với chi phí trọn gói chỉ <strong className="text-amber-400 font-mono text-sm">{hasDiscount ? '1.760.000 đ' : 'từ 2.200.000 đ'}</strong>.
            </p>

            {/* Gift Box Reminder */}
            <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs mb-6 space-y-1.5">
              <div className="font-bold flex items-center gap-1.5 uppercase text-[11px]">
                <Gift className="w-4 h-4 text-emerald-400" />
                Quà tặng kèm theo dự án (Miễn phí 100%):
              </div>
              <div className="grid grid-cols-1 gap-1 text-[11px] text-slate-300">
                <span>✓ Tặng Tên miền .com + Cloud Server tốc độ cao 1 năm</span>
                <span>✓ Bảo hành trọn gói kỹ thuật 12 tháng</span>
                <span>✓ Bàn giao 100% Full Source Code độc lập</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Họ và tên của bạn *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn Tuấn"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Số điện thoại nhận tư vấn & demo mẫu *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0912 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Tên nhà hàng / quán ăn / thương hiệu F&B
                </label>
                <div className="relative">
                  <UtensilsCrossed className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Ví dụ: Le Gourmet Saigon / Nhà hàng Hải Sản Biển Đông"
                    value={restaurantName}
                    onChange={(e) => setRestaurantName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Mô hình nhà hàng
                </label>
                <select
                  value={cuisineType}
                  onChange={(e) => setCuisineType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#261C19] border border-white/15 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Fine Dining & Âu Mỹ">Fine Dining & Ẩm thực Âu Mỹ</option>
                  <option value="Nhà hàng Nhật Bản Omakase & Sushi">Nhà hàng Nhật Bản Omakase & Sushi</option>
                  <option value="Lounge, Bar & Hầm Rượu Vang">Lounge, Bar & Hầm Rượu Vang</option>
                  <option value="Hải Sản & Ẩm Thực Việt Cao Cấp">Hải Sản & Ẩm Thực Việt Cao Cấp</option>
                  <option value="Chuỗi Cafe & Trà Sữa Thượng Lưu">Chuỗi Cafe & Trà Sữa Thượng Lưu</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl btn-wine text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl active:scale-95 transition-all mt-6"
              >
                <Sparkles className="w-4 h-4" />
                <span>Gửi Yêu Cầu & Kích Hoạt Triển Khai Ngay</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-400 text-rose-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-heading font-bold text-2xl text-white">
                Tiếp Nhận Đơn Thành Công!
              </h3>
              <p className="text-xs text-slate-300">
                Kỹ sư trưởng dự án MenuCard Gourmet sẽ liên hệ với anh/chị <strong className="text-amber-400">{name}</strong> ({phone}) trong vòng 15 phút để cấu hình tên miền và tiến hành bàn giao mã nguồn.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1 text-left">
              <div>Thương hiệu: <span className="font-semibold text-white">{restaurantName || 'MenuCard Gourmet'}</span></div>
              <div>Mô hình: <span className="text-amber-400">{cuisineType}</span></div>
              <div>Mã yêu cầu: <span className="font-mono text-rose-400">#FNB-{Math.floor(1000 + Math.random() * 9000)}</span></div>
            </div>

            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl btn-wine font-bold text-xs uppercase cursor-pointer"
            >
              Đóng Cửa Sổ
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
