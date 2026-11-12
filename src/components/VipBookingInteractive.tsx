import React, { useState } from 'react';
import { 
  CalendarCheck, 
  Users, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  User, 
  Wine, 
  Flame, 
  Heart,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface VipBookingInteractiveProps {
  onBookingSuccess?: (bookingDetails: any) => void;
}

export const VipBookingInteractive: React.FC<VipBookingInteractiveProps> = ({ onBookingSuccess }) => {
  const { theme, lang } = useThemeLanguage();

  const [selectedRoom, setSelectedRoom] = useState<'presidential' | 'winecellar' | 'terrace' | 'omakase'>('presidential');
  const [guestCount, setGuestCount] = useState(6);
  const [selectedDate, setSelectedDate] = useState('2026-11-15');
  const [selectedTime, setSelectedTime] = useState('19:30');
  const [specialRequest, setSpecialRequest] = useState<string[]>(['Rượu vang ướp lạnh sẵn']);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketCode, setTicketCode] = useState('');

  const rooms = [
    {
      id: 'presidential',
      nameVi: 'Phòng Tiệc Tổng Thống Hoàng Gia',
      nameEn: 'Imperial Presidential Dining Chamber',
      capacityVi: '8 - 18 khách',
      capacityEn: '8 - 18 Guests',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      badgeVi: 'VIP Suite 01',
      badgeEn: 'VIP Suite 01',
      descVi: 'Không gian riêng tư tuyệt đối, đèn chùm pha lê, dàn âm thanh Bang & Olufsen và quản gia phục vụ riêng.'
    },
    {
      id: 'winecellar',
      nameVi: 'Phòng Hầm Rượu Vang Cổ 1.200 Chai',
      nameEn: 'Vintage Wine Cellar Private Room',
      capacityVi: '6 - 10 khách',
      capacityEn: '6 - 10 Guests',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
      badgeVi: 'Hầm Vang Grand Cru',
      badgeEn: 'Grand Cru Vault',
      descVi: 'Nhiệt độ phòng kiểm soát chuẩn 16°C, bao quanh bởi 1.200 chai vang cổ quý hiếm, sommelier rót rượu tại bàn.'
    },
    {
      id: 'terrace',
      nameVi: 'Bàn Nến Lãng Mạn Ban Công Skyline',
      nameEn: 'Romantic Skyline Terrace Table',
      capacityVi: '2 khách (Cặp đôi)',
      capacityEn: '2 Guests (Couples)',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      badgeVi: 'Cầu hôn & Kỷ niệm',
      badgeEn: 'Proposal & Romance',
      descVi: 'Tầm nhìn 360 độ ngắm hoàng hôn thành phố, nến thơm dịu dàng, hoa hồng nhung tươi và âm nhạc êm dịu.'
    },
    {
      id: 'omakase',
      nameVi: 'Quầy Omakase Trực Tiếp Bếp Trưởng',
      nameEn: 'Executive Chef Omakase Counter',
      capacityVi: '4 - 8 khách',
      capacityEn: '4 - 8 Guests',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
      badgeVi: 'Live Cooking',
      badgeEn: 'Live Cooking',
      descVi: 'Ngồi trực tiếp trước quầy đá cẩm thạch ngắm nghệ thuật khò lửa than hoa, thái thịt Wagyu A5 và giao lưu cùng Executive Chef.'
    }
  ];

  const toggleRequest = (req: string) => {
    if (specialRequest.includes(req)) {
      setSpecialRequest(specialRequest.filter(r => r !== req));
    } else {
      setSpecialRequest([...specialRequest, req]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert(lang === 'vi' ? 'Vui lòng nhập họ tên và số điện thoại!' : 'Please enter your name and phone number!');
      return;
    }

    const code = `VIP-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketCode(code);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06B6D4', '#38BDF8', '#10B981', '#FF5A5F']
      });
    } catch {}

    if (onBookingSuccess) {
      onBookingSuccess({
        ticketCode: code,
        name,
        phone,
        room: rooms.find(r => r.id === selectedRoom)?.nameVi,
        guests: guestCount,
        date: selectedDate,
        time: selectedTime,
        requests: specialRequest
      });
    }
  };

  return (
    <section id="vip-booking" className={`py-20 relative transition-colors duration-300 border-t ${
      theme === 'dark' ? 'bg-[#150F0D] border-white/5' : 'bg-[#F9F4EE] border-black/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider mb-4 border border-rose-500/40 bg-rose-950/60 text-rose-300">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>TÍNH NĂNG CỐT LÕI 2 • ĐẶT BÀN & PHÒNG TIỆC RIÊNG VIP</span>
          </div>
          <h2 className={`font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'vi' ? 'Hệ Thống Đặt Bàn VIP & Phòng Tiệc Riêng' : 'VIP Table & Private Banquet Reservation Engine'}
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {lang === 'vi'
              ? 'Tùy chọn không gian tiệc theo mục đích tiếp khách ngoại giao, kỷ niệm ngày cưới hay tiệc riêng tư gia đình.'
              : 'Choose the bespoke dining ambiance tailored for diplomatic banquets, private corporate summits, or intimate romantic anniversaries.'}
          </p>
        </div>

        {/* Interactive Booking Container */}
        <div className={`rounded-3xl p-6 sm:p-10 border max-w-5xl mx-auto ${
          theme === 'dark'
            ? 'bg-[#1F1714] border-rose-500/30 shadow-2xl'
            : 'bg-white border-slate-200 shadow-xl'
        }`}>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Chọn Không Gian Phòng Tiệc */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3 text-left">
                  Bước 1: Chọn Không Gian Phòng Tiệc Riêng (*Bắt buộc)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {rooms.map((room) => (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoom(room.id as any)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex gap-3.5 ${
                        selectedRoom === room.id
                          ? 'border-rose-500 bg-rose-950/40 shadow-lg'
                          : theme === 'dark'
                            ? 'border-white/10 bg-white/5 hover:border-white/20'
                            : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                      }`}
                    >
                      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                        <img src={room.image} alt={room.nameVi} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 space-y-1 text-left">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-500/30 font-mono">
                            {lang === 'vi' ? room.badgeVi : room.badgeEn}
                          </span>
                          <span className="text-xs font-mono text-amber-400 font-semibold">
                            {lang === 'vi' ? room.capacityVi : room.capacityEn}
                          </span>
                        </div>
                        <h4 className={`text-sm font-bold font-heading ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          {lang === 'vi' ? room.nameVi : room.nameEn}
                        </h4>
                        <p className="text-[11px] text-slate-400 line-clamp-2 leading-snug">
                          {room.descVi}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Thời Gian & Số Lượng Khách */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-6 text-left">
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-400 mb-2">
                    {lang === 'vi' ? 'Số lượng khách dự kiến:' : 'Number of Guests:'}
                  </label>
                  <div className="flex items-center gap-2">
                    {[2, 4, 6, 8, 12, 16].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setGuestCount(num)}
                        className={`w-10 h-10 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
                          guestCount === num
                            ? 'bg-rose-700 text-white font-extrabold shadow-md'
                            : 'bg-white/5 text-slate-300 border border-white/10'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-400 mb-2">
                    {lang === 'vi' ? 'Ngày dùng tiệc:' : 'Dining Date:'}
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-400 mb-2">
                    {lang === 'vi' ? 'Khung giờ đón khách:' : 'Reservation Time:'}
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {['17:30', '18:30', '19:30', '20:30', '21:30'].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                          selectedTime === time
                            ? 'bg-rose-700 text-white font-bold'
                            : 'bg-white/5 text-slate-300 border border-white/10'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Yêu Cầu Đặc Biệt */}
              <div className="border-t border-white/10 pt-6 text-left">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2">
                  {lang === 'vi' ? 'Dịch vụ đặc quyền chuẩn bị trước (Miễn phí setup):' : 'Bespoke Amenities:'}
                </label>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    'Rượu vang ướp lạnh sẵn',
                    'Hoa hồng nhung kỷ niệm ngày cưới',
                    'Bánh kem sinh nhật đặc biệt',
                    'Setup bàn nến lãng mạn',
                    'Thực đơn ăn chay / Halal riêng',
                    'Butler riêng phục vụ món'
                  ].map((req) => (
                    <button
                      key={req}
                      type="button"
                      onClick={() => toggleRequest(req)}
                      className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer border flex items-center gap-1.5 ${
                        specialRequest.includes(req)
                          ? 'bg-rose-700 text-white border-rose-600 font-bold'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {specialRequest.includes(req) && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                      <span>{req}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Thông Tin Liên Hệ Khách VIP */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-6 text-left">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {lang === 'vi' ? 'Họ và tên của Quý Khách *' : 'Full Name *'}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder={lang === 'vi' ? 'Ví dụ: Nguyễn Hoàng Anh' : 'e.g. Alexander Vance'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {lang === 'vi' ? 'Số điện thoại nhận vé VIP & mã phòng *' : 'Phone Number *'}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder={lang === 'vi' ? 'Ví dụ: 0912 345 678' : 'e.g. +84 912 345 678'}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Bảo mật thông tin khách VIP 100% • Xác nhận qua SMS/Zalo trong 10 giây
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl btn-wine text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl active:scale-95 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Xác Nhận Giữ Phòng VIP Ngay</span>
                </button>
              </div>
            </form>
          ) : (
            /* Booking Confirmation Voucher Card */
            <div className="text-center py-8 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-700 text-white">
                  MÃ ĐẶT CHỖ VIP: {ticketCode}
                </span>
                <h3 className="font-heading font-bold text-2xl text-white">
                  Đặt Phòng Tiệc VIP Thành Công!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Cảm ơn Quý khách <strong className="text-white">{name}</strong>. Bếp trưởng và quản gia riêng đã nhận yêu cầu cho <strong className="text-amber-400">{guestCount} khách</strong> vào lúc <strong className="text-white">{selectedTime} ngày {selectedDate}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between text-slate-300">
                  <span>Phòng tiệc:</span>
                  <span className="font-bold text-amber-400">{rooms.find(r => r.id === selectedRoom)?.nameVi}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Yêu cầu setup:</span>
                  <span className="text-emerald-400">{specialRequest.join(', ') || 'Tiêu chuẩn 5 sao'}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Trạng thái quản lý:</span>
                  <span className="text-rose-400 font-mono">Đã bắn chuông đẩy đến Quản lý</span>
                </div>
              </div>

              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 rounded-xl border border-white/20 text-xs font-semibold text-slate-200 hover:bg-white/10 cursor-pointer"
              >
                Đặt thêm bàn tiệc khác
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
