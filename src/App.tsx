import React, { useState } from 'react';
import { ThemeLanguageProvider, useThemeLanguage } from './context/ThemeLanguageContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { CoreFeaturesTab } from './components/CoreFeaturesTab.tsx';
import { DigitalMenuInteractive } from './components/DigitalMenuInteractive.tsx';
import { VipBookingInteractive } from './components/VipBookingInteractive.tsx';
import { ManagerPushSimulator } from './components/ManagerPushSimulator.tsx';
import { TabletopQrSimulator } from './components/TabletopQrSimulator.tsx';
import { Footer } from './components/Footer.tsx';
import { OrderQuoteModal } from './components/OrderQuoteModal.tsx';
import { DiscountModal } from './components/DiscountModal.tsx';

function MainLayout() {
  const { theme } = useThemeLanguage();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);
  const [hasDiscount, setHasDiscount] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyDiscount = () => {
    setHasDiscount(true);
    setIsOrderModalOpen(true);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 selection:bg-rose-600 selection:text-white ${
      theme === 'dark' ? 'bg-[#120E0D] text-[#FAF6F0]' : 'bg-[#FCF9F5] text-[#1F1612]'
    }`}>
      {/* Sticky Haute Cuisine Navbar */}
      <Navbar 
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
        onOpenDiscountModal={() => setIsDiscountModalOpen(true)}
      />

      <main>
        {/* Dynamic Michelin Warmth Hero */}
        <Hero 
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
          onOpenDiscountModal={() => setIsDiscountModalOpen(true)}
          onScrollToTabs={() => scrollToSection('core-tabs')}
        />

        {/* 100% Exact Replica of User's Uploaded Image with Tabs, Features & Bottom Pricing Bar */}
        <CoreFeaturesTab 
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
          onOpenDiscountModal={() => setIsDiscountModalOpen(true)}
          onScrollToMenu={() => scrollToSection('digital-menu')}
          onScrollToBooking={() => scrollToSection('vip-booking')}
          onScrollToPush={() => scrollToSection('manager-push')}
          onScrollToQr={() => scrollToSection('qr-experience')}
        />

        {/* Feature 1 Deep Dive: Interactive Digital Gourmet Menu */}
        <DigitalMenuInteractive />

        {/* Feature 2 Deep Dive: Interactive VIP Table & Private Room Booking */}
        <VipBookingInteractive />

        {/* Feature 3 Deep Dive: Manager Real-Time Push Notification Engine */}
        <ManagerPushSimulator />

        {/* Feature 4 Deep Dive: Tabletop QR Code Simulator */}
        <TabletopQrSimulator />
      </main>

      {/* Footer & Mobile Conversion Sticky Bar */}
      <Footer 
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
        onOpenDiscountModal={() => setIsDiscountModalOpen(true)}
      />

      {/* Order / Quote Modal */}
      <OrderQuoteModal 
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        hasDiscount={hasDiscount}
      />

      {/* -20% Discount Voucher Modal */}
      <DiscountModal 
        isOpen={isDiscountModalOpen}
        onClose={() => setIsDiscountModalOpen(false)}
        onApplyDiscount={handleApplyDiscount}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeLanguageProvider>
      <MainLayout />
    </ThemeLanguageProvider>
  );
}

export default App;
