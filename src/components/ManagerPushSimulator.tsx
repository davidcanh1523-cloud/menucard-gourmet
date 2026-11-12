import React, { useState } from 'react';
import { 
  BellRing, 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  PhoneCall, 
  Flame, 
  Volume2, 
  VolumeX, 
  Clock, 
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

export const ManagerPushSimulator: React.FC = () => {
  const { theme, lang } = useThemeLanguage();
  const [hasAlert, setHasAlert] = useState(true);
  const [isSimulating, setIsSimulating] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [callInitiated, setCallInitiated] = useState(false);

  const triggerSimulation = () => {
    setIsSimulating(true);
    setHasAlert(false);
    setConfirmed(false);
    setCallInitiated(false);

    setTimeout(() => {
      setIsSimulating(false);
      setHasAlert(true);
    }, 900);
  };

  return (
    <section id="manager-push" className={`py-20 relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#120E0D]' : 'bg-[#FCF9F5]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider mb-4 border border-rose-500/40 bg-rose-950/60 text-rose-300">
            <BellRing className="w-3.5 h-3.5" />
            <span>TÍNH NĂNG CỐT LÕI 3 • THÔNG BÁO ĐẨY QUẢN LÝ TỨC THÌ</span>
          </div>
          <h2 className={`font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'vi' ? 'Bắn Chuông Đẩy Quản Lý Tức Thì Dưới 1 Giây' : 'Sub-1-Second Real-Time Manager Push Notification'}
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {lang === 'vi' 
              ? 'Ngay khi thực khách gửi form đặt bàn hoặc bấm gọi phục vụ tại bàn, hệ thống ngay lập tức rung chuông và bật thông báo đẩy trên điện thoại quản lý nhà hàng & POS bếp.' 
              : 'The instant a patron submits a reservation or calls for service, real-time webhooks dispatch push chimes to the manager’s iPhone and kitchen POS.'}
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: Interactive Controls & Explanation */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 font-mono">
                Cơ Chế Vận Hành Thông Minh (Smart Dispatch)
              </span>
              <h3 className={`font-heading text-2xl sm:text-3xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                Không Bỏ Lỡ Bất Kỳ Khách Hàng VIP Nào
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Hầu hết nhà hàng bị mất khách VIP vì phản hồi chậm trễ qua email. MenuCard Gourmet tích hợp cơ chế Push Notification đa kênh: bắn thẳng về ứng dụng quản lý, bot Telegram VIP và tin nhắn Zalo ZNS trong 1 giây.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-slate-300 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  Đồng bộ WebSocket độ trễ:
                </span>
                <span className="font-mono font-bold text-emerald-400">&lt; 0.18 giây</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-slate-300 flex items-center gap-2">
                  <BellRing className="w-4 h-4 text-amber-400" />
                  Tỷ lệ phát chuông thành công:
                </span>
                <span className="font-mono font-bold text-amber-400">99.98% SLA</span>
              </div>
            </div>

            {/* Test Trigger Button */}
            <div className="pt-2">
              <button
                onClick={triggerSimulation}
                disabled={isSimulating}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl btn-wine text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95 transition-all"
              >
                <RefreshCw className={`w-4 h-4 ${isSimulating ? 'animate-spin' : ''}`} />
                <span>
                  {isSimulating 
                    ? (lang === 'vi' ? 'Đang Bắn Webhook...' : 'Dispatching Webhook...') 
                    : (lang === 'vi' ? '⚡ Bấm Thử Gửi Thông Báo Đẩy Ngay' : '⚡ Simulate Push Notification Now')}
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-72 sm:w-80 aspect-[9/18.5] rounded-[42px] border-[6px] border-amber-950/60 bg-[#16100E] p-3.5 shadow-2xl relative flex flex-col justify-between overflow-hidden">
              {/* Dynamic Island Notch */}
              <div className="h-6 w-28 bg-black mx-auto rounded-full flex items-center justify-center mb-2 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900"></span>
              </div>

              {/* iOS Screen Header */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 px-2 font-mono">
                <span>19:30</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  POS Live
                </span>
              </div>

              {/* Lock-Screen Push Banner */}
              <div className="my-auto py-4">
                {hasAlert ? (
                  <div className="rounded-2xl bg-gradient-to-br from-[#241715]/95 to-[#2F1D1A]/95 border border-rose-500/40 p-4 text-white shadow-2xl space-y-3 animate-slideDown">
                    <div className="flex items-center justify-between text-[10px] text-amber-400 border-b border-white/10 pb-2">
                      <div className="flex items-center gap-1.5 font-bold font-mono">
                        <BellRing className="w-3.5 h-3.5 text-rose-400 animate-bounce" />
                        <span>MENUCARD GOURMET ALERT</span>
                      </div>
                      <span className="text-slate-400 font-mono">Vừa xong</span>
                    </div>

                    <div className="space-y-1 text-left">
                      <div className="text-xs font-bold text-white flex items-center gap-1">
                        <span>Đơn Đặt Bàn VIP: Anh Tuấn</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-rose-950 text-rose-300 border border-rose-500/40 font-mono">VIP 01</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        Phòng Tiệc Tổng Thống • 8 Khách • 19:30 Hôm nay.
                      </p>
                      <p className="text-[10px] text-amber-300 font-mono">
                        Yêu cầu: 2 chai vang Napa Reserve ướp lạnh, hoa tươi.
                      </p>
                    </div>

                    {/* Quick Response Actions on Phone */}
                    <div className="pt-1 flex gap-2">
                      <button
                        onClick={() => setConfirmed(true)}
                        className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                          confirmed
                            ? 'bg-emerald-600 text-white'
                            : 'bg-rose-700 text-white hover:bg-rose-600'
                        }`}
                      >
                        {confirmed ? '✓ Đã Xác Nhận' : '✓ Giữ Bàn'}
                      </button>

                      <button
                        onClick={() => setCallInitiated(true)}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-semibold border transition-all cursor-pointer ${
                          callInitiated
                            ? 'bg-amber-600 text-white border-amber-600'
                            : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                        }`}
                      >
                        <PhoneCall className="w-3 h-3 inline mr-1" />
                        {callInitiated ? 'Đang gọi...' : 'Gọi'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-10 space-y-2">
                    <Smartphone className="w-8 h-8 text-slate-600 mx-auto animate-pulse" />
                    <p className="text-[11px] text-slate-400">
                      Sẵn sàng nhận thông báo đẩy tiếp theo...
                    </p>
                  </div>
                )}
              </div>

              {/* Home indicator bar */}
              <div className="w-24 h-1 bg-slate-600 rounded-full mx-auto mt-2 shrink-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
