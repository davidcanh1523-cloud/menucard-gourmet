import React, { useState } from 'react';
import { X, Tag, Sparkles, Check, Copy, ArrowRight, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyDiscount: () => void;
}

export const DiscountModal: React.FC<DiscountModalProps> = ({
  isOpen,
  onClose,
  onApplyDiscount
}) => {
  const { lang } = useThemeLanguage();
  const [copied, setCopied] = useState(false);
  const voucherCode = 'GOURMET20';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(voucherCode);
    setCopied(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F59E0B', '#10B981']
      });
    } catch {}
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md rounded-3xl bg-[#1C1412] border border-amber-500/50 p-6 sm:p-8 text-white relative shadow-2xl text-center">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400 text-amber-400 flex items-center justify-center mx-auto mb-4">
          <Tag className="w-7 h-7" />
        </div>

        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 block mb-1">
          ƯU ĐÃI ĐỘC QUYỀN TRONG THÁNG NÀY
        </span>

        <h3 className="font-heading font-bold text-2xl text-white mb-2">
          Voucher Giảm Thêm 20% Chi Phí
        </h3>

        <p className="text-xs text-slate-300 mb-6 leading-relaxed">
          Áp dụng ngay cho khách hàng đặt làm mẫu landing page <strong>MenuCard Gourmet</strong> trong tuần này. Tiết kiệm ngay <strong className="text-amber-400">440.000 đ</strong> (Chỉ còn 1.760.000 đ trọn gói).
        </p>

        {/* Voucher Code Box */}
        <div className="p-4 rounded-2xl bg-white/5 border border-dashed border-amber-400/60 mb-6 flex items-center justify-between">
          <div className="text-left">
            <span className="text-[10px] uppercase font-mono text-slate-400 block">Mã Giảm Giá</span>
            <span className="font-mono text-xl font-black text-amber-400 tracking-wider">
              {voucherCode}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="px-3.5 py-2 rounded-xl bg-amber-500 text-black text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-amber-400"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Đã Sao Chép' : 'Sao Chép'}</span>
          </button>
        </div>

        <button
          onClick={() => {
            onClose();
            onApplyDiscount();
          }}
          className="w-full py-3.5 rounded-xl btn-wine text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl active:scale-95 transition-all"
        >
          <Sparkles className="w-4 h-4" />
          <span>Áp Dụng Mã & Đặt Làm Bản Này →</span>
        </button>
      </div>
    </div>
  );
};
