import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'dark' | 'light';
type Language = 'vi' | 'en';

interface ThemeLanguageContextType {
  theme: Theme;
  toggleTheme: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  vi: {
    // Badges matching image
    'badge.category': 'LANDING • F&B & NHÀ HÀNG',
    'badge.time': '24 - 48 giờ',
    'badge.gift': 'Tặng Domain + Server 1 Năm',
    
    // Core Title matching image
    'core.title': 'MenuCard Gourmet – Nhà Hàng Ẩm Thực Cao Cấp & Đặt Bàn VIP',
    'core.subtitle': 'Thực đơn số tương tác món ăn, chọn bàn phòng tiệc riêng và nhận voucher ưu đãi',
    
    // 3 Tabs matching image
    'tab.demo': 'Hình ảnh Demo & Trực quan (3)',
    'tab.features': 'Nghiệp vụ & Tính năng',
    'tab.architecture': 'Kiến trúc & Bảo mật',
    
    // Section label matching image
    'features.label': 'Quy trình & Tính năng cốt lõi đã hoàn thiện:',
    
    // 4 Features matching image
    'feature.1.title': 'Thực đơn điện tử trực quan theo từng phân loại (Khai vị, Món chính, Tráng miệng, Đồ uống)',
    'feature.1.desc': 'Thiết kế trực quan đa giác quan kèm hình ảnh haute cuisine HD, ghi chú hương vị, nguyên liệu hữu cơ và rượu vang đi kèm (wine pairing).',
    'feature.1.action': 'Trải nghiệm thực đơn số ngay →',
    
    'feature.2.title': 'Form đặt bàn trước chọn số người, ngày giờ và phòng tiệc riêng VIP',
    'feature.2.desc': 'Khách hàng chủ động chọn không gian riêng: Phòng tiệc Hoàng Gia, Hầm rượu vang cổ, Bàn nến lãng mạn ban công hoặc Quầy Omakase.',
    'feature.2.action': 'Đặt bàn tiệc VIP ngay →',
    
    'feature.3.title': 'Tích hợp thông báo đẩy tức thì về điện thoại quản lý nhà hàng',
    'feature.3.desc': 'Bắn thông báo rung chuông tức thì về điện thoại/POS của Bếp trưởng và Quản lý ngay khi có lượt đặt bàn hoặc yêu cầu phục vụ.',
    'feature.3.action': 'Mô phỏng chuông báo quản lý →',
    
    'feature.4.title': 'Hỗ trợ hiển thị chuẩn mực trên mọi màn hình điện thoại thực khách quét mã QR tại bàn',
    'feature.4.desc': 'Tối ưu siêu nhẹ tải trang dưới 0.3s, không cần tải app, giao diện chuẩn hóa 100% trên iPhone, iPad và mọi thiết bị Android.',
    'feature.4.action': 'Xem giả lập quét QR tại bàn →',
    
    // Gift Box matching image
    'gift.heading': '🎁 GÓI QUÀ TẶNG KÈM THEO DỰ ÁN (MIỄN PHÍ 100%)',
    'gift.item1': 'Tặng Tên miền .com + Cloud Server 1 năm',
    'gift.item2': 'Bảo hành 12 tháng bao trọn gói',
    'gift.item3': 'Bàn giao 100% Full Source Code',
    
    // Bottom pricing & actions matching image
    'pricing.label': 'CHI PHÍ TRỌN GÓI:',
    'pricing.price': 'Từ 2,2tr',
    'btn.liveDemo': 'Xem Live Demo',
    'btn.sourceCode': 'Source Code',
    'btn.getDiscount': 'Lấy Giá Rẻ (Giảm thêm 20%)',
    'btn.orderThis': 'Đặt Làm Bản Này / Nhận Báo Giá',
    
    // Hero & Navigation
    'nav.menu': 'Thực Đơn Số',
    'nav.booking': 'Đặt Bàn VIP',
    'nav.notification': 'Báo Đẩy Quản Lý',
    'nav.qr': 'Mã QR Tại Bàn',
    'nav.pricing': 'Bảng Giá Trọn Gói',
    'nav.hotline': 'Hotline Đặt Bàn: 0912 345 678',
    
    'hero.badge': 'GIẢI PHÁP SỐ HÓA F&B CHUYỂN ĐỔI CAO 2026',
    'hero.titleLine1': 'MenuCard Gourmet – Đỉnh Cao',
    'hero.titleLine2': 'Thực Đơn Số & Đặt Bàn VIP 5 Sao',
    'hero.subtitle': 'Biến mỗi lượt quét QR tại bàn và mỗi truy cập website thành đơn đặt bàn VIP giá trị cao. Tối ưu trải nghiệm thực khách thượng lưu, tự động hóa gửi thông báo đẩy đến quản lý nhà hàng trong 1 giây.',
    'hero.ctaOrder': 'Đặt Làm Bản Này (Từ 2,2tr) →',
    'hero.ctaMenu': 'Khám Phá Thực Đơn Trực Quan',
    'hero.statRating': 'Đánh giá 5.0 từ 180+ Nhà hàng Fine Dining & Lounge',
    'hero.stat1': '98.5%',
    'hero.stat1Label': 'Độ Hài Lòng Thực Khách',
    'hero.stat2': '< 0.3s',
    'hero.stat2Label': 'Tốc Độ Quét QR Mở Menu',
    'hero.stat3': '+45%',
    'hero.stat3Label': 'Tăng Doanh Thu Phòng VIP',
    'hero.stat4': '1 Giây',
    'hero.stat4Label': 'Bắn Thông Báo Đến Quản Lý',
  },
  en: {
    // Badges matching image
    'badge.category': 'LANDING • F&B & RESTAURANT',
    'badge.time': '24 - 48 Hours',
    'badge.gift': 'Free .com Domain + 1-Yr Server',
    
    // Core Title matching image
    'core.title': 'MenuCard Gourmet – Luxury Fine Dining & VIP Table Booking',
    'core.subtitle': 'Interactive digital tasting menu, private VIP banquet room selection & exclusive vouchers',
    
    // 3 Tabs matching image
    'tab.demo': 'Visual & Demo Gallery (3)',
    'tab.features': 'Features & Workflow',
    'tab.architecture': 'Architecture & Security',
    
    // Section label matching image
    'features.label': 'Completed Core Features & Workflow:',
    
    // 4 Features matching image
    'feature.1.title': 'Interactive Digital Menu categorized by Courses (Appetizers, Mains, Desserts, Cellar & Drinks)',
    'feature.1.desc': 'Multi-sensory digital dining experience with 4K culinary photography, tasting notes, farm-to-table organic provenance, and curated sommelier wine pairings.',
    'feature.1.action': 'Explore Digital Menu Now →',
    
    'feature.2.title': 'Advance VIP Reservation Form with Party Size, Date, Time & Private Dining Room Selection',
    'feature.2.desc': 'Guests seamlessly select their private dining setting: Imperial Royal Chamber, Vintage Wine Cellar, Romantic Skyline Balcony, or Chef’s Omakase Counter.',
    'feature.2.action': 'Book VIP Private Table →',
    
    'feature.3.title': 'Instant Real-Time Push Notification Engine directly to Restaurant Manager’s Phone',
    'feature.3.desc': 'Instant sound chime and notification dispatch to the Executive Chef and General Manager’s device whenever a VIP table is reserved.',
    'feature.3.action': 'Simulate Manager Push Alert →',
    
    'feature.4.title': 'Flawless Native Display on 100% Mobile Screens when Guests Scan Tabletop QR Codes',
    'feature.4.desc': 'Sub-0.3s ultra-fast loading without app installation, precision-tuned for iPhone, iPad, and all modern Android devices.',
    'feature.4.action': 'Simulate Tabletop QR Scan →',
    
    // Gift Box matching image
    'gift.heading': '🎁 COMPLIMENTARY PROJECT GIFT PACKAGE (100% FREE)',
    'gift.item1': 'Free .com Domain + 1-Year High-Speed Cloud Server',
    'gift.item2': 'Full 12-Month Comprehensive Warranty',
    'gift.item3': '100% Source Code Ownership Handover',
    
    // Bottom pricing & actions matching image
    'pricing.label': 'ALL-INCLUSIVE PRICE:',
    'pricing.price': 'From 2.2M VND (~$88)',
    'btn.liveDemo': 'Live Preview',
    'btn.sourceCode': 'Source Code',
    'btn.getDiscount': 'Get Discount (-20% Off)',
    'btn.orderThis': 'Order This Template / Get Quote',
    
    // Hero & Navigation
    'nav.menu': 'Digital Menu',
    'nav.booking': 'VIP Booking',
    'nav.notification': 'Push Alert',
    'nav.qr': 'Tabletop QR',
    'nav.pricing': 'Pricing',
    'nav.hotline': 'VIP Concierge: +84 912 345 678',
    
    'hero.badge': '2026 HIGH-CONVERSION F&B DIGITAL EXPERIENCE',
    'hero.titleLine1': 'MenuCard Gourmet – Haute Cuisine',
    'hero.titleLine2': 'Digital Menu & 5-Star VIP Reservation',
    'hero.subtitle': 'Transform every tabletop QR scan and website visit into high-ticket VIP dining reservations. Elevate patron experiences and dispatch real-time manager alerts in 1 second.',
    'hero.ctaOrder': 'Order This Template (From 2.2M VND) →',
    'hero.ctaMenu': 'Explore Live Digital Menu',
    'hero.statRating': '5.0 Rating from 180+ Fine Dining Restaurants & Lounges',
    'hero.stat1': '98.5%',
    'hero.stat1Label': 'Guest Satisfaction',
    'hero.stat2': '< 0.3s',
    'hero.stat2Label': 'Instant QR Menu Load',
    'hero.stat3': '+45%',
    'hero.stat3Label': 'VIP Room Revenue Growth',
    'hero.stat4': '1 Second',
    'hero.stat4Label': 'Manager Alert Dispatch',
  }
};

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(undefined);

export const ThemeLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('menucard_theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('menucard_lang');
    return (saved === 'vi' || saved === 'en') ? saved : 'vi';
  });

  useEffect(() => {
    localStorage.setItem('menucard_theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('menucard_lang', newLang);
  };

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <ThemeLanguageContext.Provider value={{ theme, toggleTheme, lang, setLang, t }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLanguage = () => {
  const context = useContext(ThemeLanguageContext);
  if (!context) {
    throw new Error('useThemeLanguage must be used within ThemeLanguageProvider');
  }
  return context;
};
