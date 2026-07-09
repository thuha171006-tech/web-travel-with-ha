import React, { useState } from 'react';
import { Search, MapPin, Calendar, DollarSign, X, CheckCircle2, ChevronRight, Compass, Navigation } from 'lucide-react';
import { DESTINATIONS } from '../data';
import { Destination } from '../types';

export default function DestinationList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('Tất cả');
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);

  const regions = ['Tất cả', 'Miền Bắc', 'Miền Trung', 'Miền Nam'];

  // Normalize Vietnamese strings for robust search
  const removeVietnameseTones = (str: string) => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Y|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
  };

  const filteredDestinations = DESTINATIONS.filter((dest) => {
    const matchesRegion = selectedRegion === 'Tất cả' || dest.regionVi === selectedRegion;
    const cleanSearch = removeVietnameseTones(searchTerm.toLowerCase());
    const cleanName = removeVietnameseTones(dest.name.toLowerCase());
    const cleanIntro = removeVietnameseTones(dest.intro.toLowerCase());
    
    const matchesSearch = cleanName.includes(cleanSearch) || cleanIntro.includes(cleanSearch);
    return matchesRegion && matchesSearch;
  });

  const handleOpenItinerary = (destId: string) => {
    setSelectedDest(null);
    const element = document.getElementById('itineraries');
    if (element) {
      // Find the itinerary tab button or route
      element.scrollIntoView({ behavior: 'smooth' });
      // We can also trigger state update in App.tsx if we lift it, or just let users scroll.
      // Let's dispatch a custom event to switch to the right itinerary automatically!
      const event = new CustomEvent('select-itinerary', { detail: destId });
      window.dispatchEvent(event);
    }
  };

  return (
    <section id="destinations" className="py-24 bg-stone-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>Địa Điểm Kỳ Thú</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Cẩm Nang Địa Điểm Du Lịch
          </h2>
          <p className="text-stone-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Tổng hợp những vùng đất tuyệt vời nhất Việt Nam dựa trên trải nghiệm thực tế của Hà, có sẵn gợi ý về thời điểm đẹp nhất và chi phí ước tính.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Search and Filters Block */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-200/50 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Search bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input
              id="destination-search-input"
              type="text"
              placeholder="Tìm kiếm địa điểm (ví dụ: Đà Lạt, Sa Pa...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
            />
            {searchTerm && (
              <button
                id="clear-search-btn"
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-stone-200 text-stone-500"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {regions.map((region) => (
              <button
                id={`region-filter-tab-${region}`}
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  selectedRegion === region
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <div
                id={`destination-card-${dest.id}`}
                key={dest.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200/60 hover:border-amber-500/20 transition-all duration-300 flex flex-col group"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-semibold flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{dest.regionVi}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-stone-500 text-sm line-clamp-3 mb-6 leading-relaxed">
                    {dest.intro}
                  </p>

                  {/* Highlights Snippet */}
                  <div className="space-y-2.5 mb-6 border-t border-stone-100 pt-4 flex-grow">
                    <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider block">Điểm đặc sắc nhất:</span>
                    <div className="space-y-1.5">
                      {dest.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-stone-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="font-medium">{h.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Stats / Button */}
                  <div className="border-t border-stone-100 pt-4 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider block">Chi phí dự kiến</span>
                      <span className="text-xs font-bold text-stone-800 flex items-center">
                        <DollarSign className="w-3.5 h-3.5 text-amber-500 mr-0.5" />
                        {dest.estimatedCost}
                      </span>
                    </div>
                    <button
                      id={`view-detail-btn-${dest.id}`}
                      onClick={() => setSelectedDest(dest)}
                      className="flex items-center space-x-1 text-sm font-semibold text-amber-600 hover:text-amber-700 bg-amber-50 hover:bg-amber-100/80 px-4 py-2.5 rounded-xl transition-all cursor-pointer"
                    >
                      <span>Xem Chi Tiết</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-16 text-center border border-stone-200">
            <Compass className="w-16 h-16 text-stone-300 mx-auto mb-4 animate-bounce" />
            <p className="text-stone-600 font-medium text-lg">Không tìm thấy địa điểm phù hợp</p>
            <p className="text-stone-400 text-sm mt-1">Vui lòng thử từ khóa khác hoặc lọc theo vùng miền.</p>
            <button
              id="reset-search-btn"
              onClick={() => {
                setSearchTerm('');
                setSelectedRegion('Tất cả');
              }}
              className="mt-4 px-5 py-2.5 bg-amber-500 text-white font-medium rounded-xl text-sm shadow-sm"
            >
              Xem tất cả địa điểm
            </button>
          </div>
        )}

        {/* Detailed Modal Overlay for Destination */}
        {selectedDest && (
          <div
            id="destination-detail-modal"
            className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <div className="bg-[#faf9f6] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200/50 relative animate-scale-up">
              
              {/* Image Banner Header */}
              <div className="relative h-64 sm:h-80 bg-stone-100">
                <img
                  src={selectedDest.image}
                  alt={selectedDest.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80';
                  }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Title inside Banner */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="bg-amber-500 text-stone-900 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-2 inline-block">
                    {selectedDest.regionVi}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
                    {selectedDest.name}
                  </h3>
                </div>

                {/* Close Button */}
                <button
                  id="close-detail-modal-btn"
                  onClick={() => setSelectedDest(null)}
                  className="absolute top-4 right-4 bg-black/55 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-all border border-white/20 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 sm:p-8 space-y-8">
                
                {/* Intro */}
                <div className="space-y-3">
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900 border-l-4 border-amber-500 pl-3">
                    Giới Thiệu Chung
                  </h4>
                  <p className="text-stone-600 text-base leading-relaxed text-justify">
                    {selectedDest.intro}
                  </p>
                </div>

                {/* Grid for best time & costs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-amber-500/10 border border-amber-500/20 p-5 rounded-2xl flex items-start space-x-3">
                    <Calendar className="w-5.5 h-5.5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-stone-900 text-sm">Thời Điểm Lý Tưởng</h5>
                      <p className="text-stone-600 text-xs mt-1 leading-relaxed">{selectedDest.bestTime}</p>
                    </div>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-2xl flex items-start space-x-3">
                    <DollarSign className="w-5.5 h-5.5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-stone-900 text-sm">Chi Phí Dự Kiến</h5>
                      <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                        Chỉ từ <strong>{selectedDest.estimatedCost}</strong> cho chuyến đi tự túc tiết kiệm.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Highlights Section */}
                <div className="space-y-4">
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900 border-l-4 border-amber-500 pl-3">
                    Các Điểm Nhất Định Phải Ghé
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedDest.highlights.map((high, idx) => (
                      <div key={idx} className="bg-white p-4.5 rounded-2xl border border-stone-200 shadow-sm">
                        <h5 className="font-bold text-stone-900 text-sm flex items-center space-x-1.5 mb-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{high.title}</span>
                        </h5>
                        <p className="text-stone-500 text-xs leading-relaxed">{high.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated Map coordinates Card */}
                <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-3.5 shadow-sm">
                  <h4 className="font-serif text-base font-bold text-stone-900 flex items-center space-x-2">
                    <Navigation className="w-4.5 h-4.5 text-amber-500" />
                    <span>Vị Trí & Bản Đồ Tham Khảo</span>
                  </h4>
                  <div className="bg-stone-50 border border-stone-200/80 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-stone-500 font-semibold uppercase tracking-wider">Tọa Độ Địa Lý</p>
                      <p className="text-sm font-mono text-stone-800">
                        Latitude: {selectedDest.coordinates.lat} | Longitude: {selectedDest.coordinates.lng}
                      </p>
                      <p className="text-xs text-stone-400 mt-1 flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-0.5 text-stone-400" />
                        {selectedDest.mapUrl}
                      </p>
                    </div>
                    {/* Simulated Map Visual Badge */}
                    <div className="bg-amber-100 border border-amber-200 text-amber-800 text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-lg text-center select-none tracking-widest shrink-0 self-start sm:self-auto flex items-center space-x-1">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping mr-1" />
                      <span>GPS Đang Định Vị</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-400 italic">
                    * Lưu ý: Khi du lịch, bạn hãy cài đặt ứng dụng Google Maps trực tuyến và nhập chính xác tên địa danh để được dẫn đường chi tiết nhất nhé!
                  </p>
                </div>

                {/* CTA Action inside Modal */}
                <div className="border-t border-stone-200 pt-6 flex flex-col sm:flex-row items-center justify-end gap-3">
                  <button
                    id="modal-close-footer-btn"
                    onClick={() => setSelectedDest(null)}
                    className="w-full sm:w-auto px-5 py-3 text-stone-600 hover:bg-stone-200 rounded-xl text-sm font-medium transition-colors"
                  >
                    Đóng lại
                  </button>
                  <button
                    id={`modal-itinerary-cta-${selectedDest.id}`}
                    onClick={() => handleOpenItinerary(selectedDest.id)}
                    className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-stone-900 hover:text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md shadow-amber-500/10 flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <span>Xem Lịch Trình Chi Tiết</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
