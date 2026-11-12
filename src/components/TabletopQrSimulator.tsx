import React, { useState } from 'react';
import { 
  QrCode, 
  Smartphone, 
  Tablet, 
  Monitor, 
  CheckCircle2, 
  Zap, 
  UtensilsCrossed, 
  Wine, 
  CreditCard, 
  BellRing,
  Sparkles
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

export const TabletopQrSimulator: React.FC = () => {
  const { theme, lang } = useThemeLanguage();
  const [device, setDevice] = useState<'iphone' | 'samsung' | 'tablet'>('iphone');
  const [serviceCalled, setServiceCalled] = useState(false);
  const [billRequested, setBillRequested] = useState(false);

  const handleCallService = () => {
    setServiceCalled(true);
    setTimeout(() => setServiceCalled(false), 3000);
  };

  const handleRequestBill = () => {
    setBillRequested(true);
    setTimeout(() => setBillRequested(false), 3000);
  };

  return (
    <section id="qr-experience" className={`py-20 relative transition-colors duration-300 border-t ${
      theme === 'dark' ? 'bg-[#150F0D] border-white/5' : 'bg-[#F9F4EE] border-black/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider mb-4 border border-rose-500/40 bg-rose-950/60 text-rose-300">
            <QrCode className="w-3.5 h-3.5" />
            <span>TÍNH NĂNG CỐT LÕI 4 • TRẢI NGHIỆM QUÉT MÃ QR TẠI BÀN</span>
          </div>
          <h2 className={`font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'vi' ? 'Hiển Thị Hoàn Hảo Trên 100% Điện Thoại Quét QR' : 'Native 60 FPS Tabletop QR Mobile Experience'}
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {lang === 'vi'
              ? 'Thực khách chỉ cần quét mã QR đặt trên đế thông minh tại bàn để xem ngay thực đơn song ngữ 4K, gọi thêm món hoặc gọi thanh toán chỉ bằng 1 chạm nhẹ nhàng.'
              : 'Guests effortlessly scan the tabletop smart QR stand to browse the 4K bilingual tasting menu, summon sommeliers, and request checkout.'}
          </p>
        </div>

        {/* Device Switcher Pills */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setDevice('iphone')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer border transition-all ${
              device === 'iphone'
                ? 'bg-rose-700 text-white font-bold border-rose-600 shadow-lg'
                : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>iPhone 16 Pro (iOS)</span>
          </button>

          <button
            onClick={() => setDevice('samsung')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer border transition-all ${
              device === 'samsung'
                ? 'bg-rose-700 text-white font-bold border-rose-600 shadow-lg'
                : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Galaxy S25 Ultra (Android)</span>
          </button>

          <button
            onClick={() => setDevice('tablet')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer border transition-all ${
              device === 'tablet'
                ? 'bg-rose-700 text-white font-bold border-rose-600 shadow-lg'
                : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span>iPad Mini (Order Board)</span>
          </button>
        </div>

        {/* Simulator Workspace */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
          {/* Tabletop Smart Stand Graphic */}
          <div className="w-64 rounded-3xl p-5 border border-rose-500/40 bg-gradient-to-b from-[#2A1B18] to-[#160E0C] text-center space-y-3 shadow-2xl">
            <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 block font-bold">
              ĐẾ GỖ SỒI TITAN KHẮC LAZER TẠI BÀN
            </span>
            <div className="w-36 h-36 mx-auto rounded-2xl bg-white p-2.5 flex items-center justify-center shadow-inner">
              <QrCode className="w-full h-full text-black" />
            </div>
            <div className="space-y-0.5">
              <div className="text-sm font-bold font-heading text-white">BÀN VIP 08</div>
              <div className="text-[10px] text-amber-200/70 font-mono">Quét để xem Menu & Gọi phục vụ</div>
            </div>
          </div>

          {/* Interactive Screen Container */}
          <div className={`transition-all duration-300 rounded-[38px] border-4 border-amber-950/60 bg-[#16100E] p-4 text-white shadow-2xl ${
            device === 'tablet' ? 'w-full max-w-md aspect-[4/3]' : 'w-72 sm:w-80 aspect-[9/18]'
          } flex flex-col justify-between`}>
            {/* Top Bar inside guest screen */}
            <div className="space-y-2 border-b border-white/10 pb-3">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="text-amber-400 font-bold">BÀN VIP 08 • SƠ LƯỢC</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <Zap className="w-3 h-3" /> Tải 0.18s
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-sm text-white">MenuCard Gourmet</span>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-500/30 font-mono">
                  Đang dùng bữa
                </span>
              </div>
            </div>

            {/* Quick Menu Item preview inside phone */}
            <div className="space-y-2 my-auto py-2">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80" alt="Wagyu" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-xs font-bold text-white leading-tight">Thăn Bò Wagyu A5 Miyazaki</div>
                  <div className="text-[10px] text-amber-300 font-mono">1.650.000 đ • 1 phần</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=200&q=80" alt="Wine" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-xs font-bold text-white leading-tight">Cabernet Sauvignon Reserve</div>
                  <div className="text-[10px] text-rose-300 font-mono">Đang ướp xô đá 16°C</div>
                </div>
              </div>
            </div>

            {/* Interactive Guest Action Buttons */}
            <div className="space-y-2 border-t border-white/10 pt-3">
              <button
                onClick={handleCallService}
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  serviceCalled
                    ? 'bg-emerald-600 text-white'
                    : 'bg-rose-700 text-white hover:bg-rose-600'
                }`}
              >
                <BellRing className="w-3.5 h-3.5" />
                <span>{serviceCalled ? '✓ Đang Điều Phối Phục Vụ...' : '🔔 Gọi Phục Vụ / Thêm Nước'}</span>
              </button>

              <button
                onClick={handleRequestBill}
                className={`w-full py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  billRequested
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>{billRequested ? '✓ Đang In Hóa Đơn...' : 'Yêu Cầu Hóa Đơn Tạm Tính'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
