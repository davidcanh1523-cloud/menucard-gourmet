import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  Wine, 
  Flame, 
  Award, 
  Sparkles, 
  Eye, 
  Check, 
  X,
  Plus,
  ShoppingBag,
  Info
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface Dish {
  id: string;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  nameVi: string;
  nameEn: string;
  price: string;
  image: string;
  tagVi: string;
  tagEn: string;
  descVi: string;
  descEn: string;
  pairingVi: string;
  pairingEn: string;
  originVi: string;
  originEn: string;
  calories: string;
}

const dishesData: Dish[] = [
  {
    id: 'wagyu-a5',
    category: 'mains',
    nameVi: 'Thăn Bò Wagyu A5 Miyazaki Nướng Than Binchotan',
    nameEn: 'Miyazaki Wagyu A5 Tenderloin Binchotan Grilled',
    price: '1.650.000 đ',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    tagVi: 'Bán chạy nhất 🔥',
    tagEn: 'Chef Signature 🔥',
    descVi: 'Thịt bò Wagyu chuẩn A5 nhập khẩu tỉnh Miyazaki với chỉ số vân mỡ cẩm thạch BMS 11. Nướng xém trên than trắng sồi Binchotan Nhật Bản, chấm cùng muối hồng Himalaya và sốt nấm Truffle đen Alba hảo hạng.',
    descEn: 'Grade A5 Miyazaki tenderloin with BMS 11 marbling score, seared over Japanese white oak Binchotan charcoal, served with Himalayan salt and Alba black truffle reduction.',
    pairingVi: 'Rượu Vang Đỏ: Cabernet Sauvignon Napa Valley Reserve',
    pairingEn: 'Pairing: Cabernet Sauvignon Napa Valley Reserve',
    originVi: 'Thịt bò nhập khẩu từ tỉnh Miyazaki, Nhật Bản có chứng nhận xuất xứ COA.',
    originEn: 'Certified Authentic Miyazaki Wagyu, Japan.',
    calories: '640 kcal • Khẩu phần 200g'
  },
  {
    id: 'lobster-beluga',
    category: 'mains',
    nameVi: 'Tôm Hùm Alaska Đút Lò Phô Mai & Trứng Cá Tầm Beluga',
    nameEn: 'Baked Alaska Lobster Thermidor with Beluga Caviar',
    price: '1.890.000 đ',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80',
    tagVi: 'Michelin Starred ⭐',
    tagEn: 'Michelin Starred ⭐',
    descVi: 'Tôm hùm nguyên con đánh bắt từ vịnh Alaska băng giá, nướng đút lò bơ tỏi đen, sốt rượu Cognac Napoléon và phủ lớp phô mai Gruyère Thụy Sĩ ủ 18 tháng, điểm xuyết hạt trứng cá tầm đen Beluga Hoàng Gia.',
    descEn: 'Wild Alaskan whole lobster roasted with black garlic butter, aged Swiss Gruyère, French Cognac reduction, and crowned with Royal Beluga Caviar pearls.',
    pairingVi: 'Rượu Vang Trắng: Chablis Premier Cru 2020',
    pairingEn: 'Pairing: Chablis Premier Cru 2020',
    originVi: 'Tôm hùm đánh bắt tự nhiên từ vùng biển lạnh Alaska, Hoa Kỳ.',
    originEn: 'Wild caught from cold Alaskan deep waters.',
    calories: '520 kcal • Khẩu phần 350g'
  },
  {
    id: 'foie-gras',
    category: 'starters',
    nameVi: 'Gan Ngỗng Pháp Foie Gras Áp Chảo Bánh Brioche Nóng',
    nameEn: 'Pan-Seared French Foie Gras on Warm Brioche',
    price: '680.000 đ',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    tagVi: 'Khai vị đặc sắc',
    tagEn: 'Signature Starter',
    descVi: 'Gan ngỗng nguyên miếng vùng Landes nước Pháp áp chảo vàng ruộm hai mặt, đặt trên bánh mì bơ Brioche nướng giòn và sốt quả mọng rừng chua ngọt cân bằng vị béo ngậy.',
    descEn: 'French Landes duck liver pan-seared to golden perfection, served over toasted artisan brioche and sour wild forest berry reduction.',
    pairingVi: 'Rượu Vang Trắng: Sauternes Reserve Bordeaux',
    pairingEn: 'Pairing: Sauternes Reserve Bordeaux',
    originVi: 'Nhập khẩu tươi hàng không từ vùng Landes, Tây Nam nước Pháp.',
    originEn: 'Fresh air-freighted from Landes, France.',
    calories: '380 kcal • Khẩu phần 120g'
  },
  {
    id: 'scallop-carpaccio',
    category: 'starters',
    nameVi: 'Sò Điệp Hokkaido Khò Lửa & Sốt Nhụy Hoa Nghệ Tây',
    nameEn: 'Torched Hokkaido Scallop with Saffron Emulsion',
    price: '520.000 đ',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80',
    tagVi: 'Tươi sống trong ngày',
    tagEn: 'Fresh Daily Catch',
    descVi: 'Sò điệp khổng lồ vùng biển Hokkaido khò nhẹ lửa than hoa, đi kèm sốt kem nhụy hoa nghệ tây Tây Ban Nha (Saffron), dầu nấm Truffle trắng và chồi măng tây non hữu cơ.',
    descEn: 'Giant Hokkaido sea scallops gently torched with Spanish saffron emulsion, white truffle drops, and organic baby asparagus.',
    pairingVi: 'Champagne: Brut Réserve Sparkling',
    pairingEn: 'Pairing: Brut Réserve Sparkling',
    originVi: 'Đánh bắt tại vùng biển Okhotsk, Hokkaido, Nhật Bản.',
    originEn: 'Directly sourced from Hokkaido, Japan.',
    calories: '260 kcal • Khẩu phần 150g'
  },
  {
    id: 'chocolate-gold',
    category: 'desserts',
    nameVi: 'Bánh Mousse Chocolate Valrhona 72% Dát Vàng 24K',
    nameEn: 'Valrhona 72% Dark Chocolate Mousse with 24K Gold Leaf',
    price: '420.000 đ',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80',
    tagVi: 'Dát vàng 24K ✨',
    tagEn: '24K Gold Plated ✨',
    descVi: 'Chocolate đen nguyên chất Valrhona 72% kết hợp hạt vani nguyên quả vùng Bourbon Madagascar, lõi nhân thạch quả mâm xôi dại chua thanh và lớp phủ nhũ vàng 24K rực rỡ.',
    descEn: 'French Valrhona 72% grand cru dark chocolate, Madagascar Bourbon vanilla, wild raspberry center, covered with edible 24K gold leaves.',
    pairingVi: 'Rượu Vang Ngọt: Aged Tawny Port',
    pairingEn: 'Pairing: Aged Tawny Port',
    originVi: 'Chocolate nhập khẩu trực tiếp từ Tain-l’Hermitage, Pháp.',
    originEn: 'Crafted with grand cru French chocolate.',
    calories: '410 kcal • Khẩu phần 140g'
  },
  {
    id: 'wine-margaux',
    category: 'drinks',
    nameVi: 'Château Margaux Premier Grand Cru Classé (2015)',
    nameEn: 'Château Margaux Premier Grand Cru Classé Vintage 2015',
    price: '28.500.000 đ',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80',
    tagVi: 'Hầm Vang Cổ 🍷',
    tagEn: 'Grand Cru Classé 🍷',
    descVi: 'Một trong 5 lâu đài rượu vang danh giá nhất xứ Bordeaux. Hương thơm phức hợp của hoa violet, quả anh đào đen, xì gà Cuba và gỗ tuyết tùng ủ trong thùng sồi Pháp 24 tháng.',
    descEn: 'First Growth Grand Cru from Bordeaux. Sublime aromas of fresh violets, cassis, Cuban cigar box, and 24-month French oak ageing.',
    pairingVi: 'Hoàn hảo khi thưởng thức cùng Bò Wagyu A5 hoặc Thăn cừu New Zealand.',
    pairingEn: 'Best paired with Miyazaki Wagyu A5 or New Zealand Rack of Lamb.',
    originVi: 'Chai vang nguyên bản nhập khẩu từ Margaux, Bordeaux, Pháp.',
    originEn: 'Margaux appellation, Bordeaux, France.',
    calories: '13.5% Vol • Chai 750ml'
  }
];

export const DigitalMenuInteractive: React.FC = () => {
  const { theme, lang } = useThemeLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'starters' | 'mains' | 'desserts' | 'drinks'>('all');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [tastingCart, setTastingCart] = useState<string[]>(['wagyu-a5']);

  const filteredDishes = selectedCategory === 'all' 
    ? dishesData 
    : dishesData.filter(d => d.category === selectedCategory);

  const toggleTasting = (dishId: string) => {
    if (tastingCart.includes(dishId)) {
      setTastingCart(tastingCart.filter(id => id !== dishId));
    } else {
      setTastingCart([...tastingCart, dishId]);
    }
  };

  return (
    <section id="digital-menu" className={`py-20 relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#120E0D]' : 'bg-[#FCF9F5]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider mb-4 border border-rose-500/40 bg-rose-950/60 text-rose-300">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>TÍNH NĂNG CỐT LÕI 1 • THỰC ĐƠN SỐ ĐA GIÁC QUAN</span>
          </div>
          <h2 className={`font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'vi' ? 'Thực Đơn Điện Tử Trực Quan Đa Ngành F&B' : 'Interactive Multi-Category Digital Food Menu'}
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {lang === 'vi' 
              ? 'Mỗi món ăn là một tác phẩm nghệ thuật với hình ảnh 4K sắc nét, nguồn gốc nguyên liệu đạt chuẩn Michelin và gợi ý rượu vang chuẩn sommelier.'
              : 'Every dish is a gastronomic artwork with 4K resolution, organic provenance pedigree, and master sommelier wine pairing guidance.'}
          </p>
        </div>

        {/* Category Pills Switcher */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {[
            { id: 'all', labelVi: 'Tất Cả Món Ký Danh', labelEn: 'All Signatures' },
            { id: 'starters', labelVi: 'Khai Vị (Starters)', labelEn: 'Starters' },
            { id: 'mains', labelVi: 'Món Chính (Mains)', labelEn: 'Signature Mains' },
            { id: 'desserts', labelVi: 'Tráng Miệng (Desserts)', labelEn: 'Desserts' },
            { id: 'drinks', labelVi: 'Rượu Vang & Đồ Uống', labelEn: 'Sommelier Wine Cellar' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-rose-700 to-orange-600 text-white border-rose-500 font-bold shadow-lg scale-105'
                  : theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    : 'bg-white border-black/10 text-slate-700 hover:bg-slate-100 shadow-sm'
              }`}
            >
              {lang === 'vi' ? cat.labelVi : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Grid of Dishes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredDishes.map((dish) => {
            const inCart = tastingCart.includes(dish.id);
            return (
              <div 
                key={dish.id}
                className="rounded-2xl overflow-hidden culinary-card border flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img 
                      src={dish.image} 
                      alt={lang === 'vi' ? dish.nameVi : dish.nameEn}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 text-orange-400 border border-orange-500/40 backdrop-blur-md font-mono">
                      {lang === 'vi' ? dish.tagVi : dish.tagEn}
                    </span>
                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-lg text-xs font-mono font-bold bg-[#181311]/90 text-amber-300 border border-amber-500/30 backdrop-blur-md shadow-lg">
                      {dish.price}
                    </span>
                  </div>

                  <div className="p-5 space-y-2.5 text-left">
                    <h3 className={`font-heading font-bold text-lg leading-snug ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {lang === 'vi' ? dish.nameVi : dish.nameEn}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {lang === 'vi' ? dish.descVi : dish.descEn}
                    </p>

                    <div className="pt-2 text-[11px] text-rose-400 flex items-center gap-1.5 font-mono">
                      <Wine className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{lang === 'vi' ? dish.pairingVi : dish.pairingEn}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedDish(dish)}
                    className="flex-1 py-2.5 rounded-xl border border-white/15 text-xs font-semibold text-slate-200 hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'vi' ? 'Xem Vị Giác & Calo' : 'Tasting Notes'}</span>
                  </button>

                  <button
                    onClick={() => toggleTasting(dish.id)}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      inCart
                        ? 'bg-emerald-600 text-white'
                        : 'bg-rose-700 text-white hover:bg-rose-600'
                    }`}
                  >
                    {inCart ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    <span>{inCart ? (lang === 'vi' ? 'Đã Chọn' : 'Selected') : (lang === 'vi' ? 'Chọn' : 'Add')}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Tasting List Ticker */}
        <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-[#1C1412] via-[#241A17] to-[#1C1412] border border-rose-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-300">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-xs font-mono uppercase text-rose-400 block font-semibold">
                {lang === 'vi' ? 'THỰC ĐƠN NẾM THỬ TẠM CHỌN' : 'CURRENT TASTING SELECTION'}
              </span>
              <span className="text-sm font-bold text-white">
                {tastingCart.length} {lang === 'vi' ? 'món ăn & rượu vang đặc sắc đã thêm' : 'selected signature items'}
              </span>
            </div>
          </div>

          <a
            href="#vip-booking"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl btn-wine text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span>{lang === 'vi' ? 'Đặt Bàn Kèm Thực Đơn Này →' : 'Book Table with this Menu →'}</span>
          </a>
        </div>
      </div>

      {/* Dish Sommelier Details Modal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-2xl rounded-3xl bg-[#1A1412] border border-rose-500/40 p-6 sm:p-8 text-white relative shadow-2xl">
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              <div className="w-full sm:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
                <img 
                  src={selectedDish.image} 
                  alt={selectedDish.nameVi} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="space-y-3 flex-1 text-left">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-rose-700 text-white font-mono">
                  {lang === 'vi' ? selectedDish.tagVi : selectedDish.tagEn}
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                  {lang === 'vi' ? selectedDish.nameVi : selectedDish.nameEn}
                </h3>
                <div className="text-xl font-mono font-bold text-amber-300">
                  {selectedDish.price}
                </div>
                <div className="text-xs font-mono text-slate-400">
                  {selectedDish.calories}
                </div>
              </div>
            </div>

            <div className="space-y-4 text-xs leading-relaxed border-t border-white/10 pt-4 text-left">
              <div>
                <span className="text-slate-400 block mb-1 font-semibold uppercase font-mono">
                  {lang === 'vi' ? 'Hương vị & Kỹ thuật chế biến:' : 'Culinary Technique & Flavor Profile:'}
                </span>
                <p className="text-slate-200">
                  {lang === 'vi' ? selectedDish.descVi : selectedDish.descEn}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-rose-400 block font-bold mb-1 flex items-center gap-1.5 font-mono">
                  <Wine className="w-4 h-4" /> {lang === 'vi' ? 'Gợi Ý Phối Rượu Vang (Wine Pairing):' : 'Sommelier Pairing:'}
                </span>
                <p className="text-slate-200">
                  {lang === 'vi' ? selectedDish.pairingVi : selectedDish.pairingEn}
                </p>
              </div>

              <div>
                <span className="text-slate-400 block mb-1 font-semibold uppercase font-mono">
                  {lang === 'vi' ? 'Nguồn gốc xuất xứ nguyên liệu:' : 'Origin & Provenance:'}
                </span>
                <p className="text-slate-300">
                  {lang === 'vi' ? selectedDish.originVi : selectedDish.originEn}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => {
                  toggleTasting(selectedDish.id);
                  setSelectedDish(null);
                }}
                className="px-6 py-2.5 rounded-xl btn-wine text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                {tastingCart.includes(selectedDish.id) 
                  ? (lang === 'vi' ? 'Đã Có Trong Thực Đơn' : 'Already Selected') 
                  : (lang === 'vi' ? '+ Thêm Vào Thực Đơn Nếm Thử' : '+ Add to Tasting Selection')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
