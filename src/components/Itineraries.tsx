import React, { useState, useEffect } from 'react';
import { CalendarClock, MapPin, Coffee, Utensils, Compass, ChevronDown, ChevronUp, Sparkles, Heart } from 'lucide-react';
import { ITINERARIES } from '../data';
import { Itinerary, ItineraryDay } from '../types';

export default function Itineraries() {
  const [selectedItineraryId, setSelectedItineraryId] = useState<string>(ITINERARIES[0].id);
  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>({ 1: true }); // Day 1 expanded by default

  const currentItinerary = ITINERARIES.find(it => it.id === selectedItineraryId) || ITINERARIES[0];

  useEffect(() => {
    // Listen to custom event when users click "Xem Lịch Trình Chi Tiết" inside Destination list
    const handleSelectItinerary = (e: Event) => {
      const destId = (e as CustomEvent).detail;
      const matchingItinerary = ITINERARIES.find(it => it.destinationId === destId);
      if (matchingItinerary) {
        setSelectedItineraryId(matchingItinerary.id);
        // Expand Day 1 and collapse others by default on transition
        setExpandedDays({ 1: true });
        
        // Scroll to itineraries section smoothly with a tiny delay so page layout settle down
        setTimeout(() => {
          const element = document.getElementById('itineraries');
          if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 100);
      }
    };

    window.addEventListener('select-itinerary', handleSelectItinerary);
    return () => window.removeEventListener('select-itinerary', handleSelectItinerary);
  }, []);

  const toggleDayExpand = (dayNum: number) => {
    setExpandedDays(prev => ({
      ...prev,
      [dayNum]: !prev[dayNum]
    }));
  };

  const getActivityIcon = (time: string, activity: string) => {
    const actLower = activity.toLowerCase();
    const hr = parseInt(time.split(':')[0]);

    if (actLower.includes('ăn sáng') || actLower.includes('ăn trưa') || actLower.includes('ăn tối') || actLower.includes('lẩu') || actLower.includes('bánh mì')) {
      return <Utensils className="w-4 h-4 text-orange-500" />;
    }
    if (actLower.includes('cà phê') || actLower.includes('cafe') || actLower.includes('trà') || actLower.includes('acoustic')) {
      return <Coffee className="w-4 h-4 text-amber-600" />;
    }
    if (hr >= 17 || actLower.includes('hoàng hôn') || actLower.includes('sunset')) {
      return <Compass className="w-4 h-4 text-rose-500" />;
    }
    return <MapPin className="w-4 h-4 text-emerald-500" />;
  };

  return (
    <section id="itineraries" className="py-24 bg-white border-b border-stone-200/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <CalendarClock className="w-3.5 h-3.5 text-amber-700" />
            <span>Kế Hoạch Chi Tiết</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Lịch Trình Du Lịch Gợi Ý
          </h2>
          <p className="text-stone-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Được thiết kế tỉ mỉ, cân đối giữa thời gian nghỉ dưỡng và di chuyển tham quan. Bạn có thể nhấn vào từng ngày để xem hoạt động chi tiết nhé!
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Itinerary Selector Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          {ITINERARIES.map((it) => (
            <button
              id={`itinerary-tab-btn-${it.id}`}
              key={it.id}
              onClick={() => {
                setSelectedItineraryId(it.id);
                setExpandedDays({ 1: true });
              }}
              className={`w-full sm:w-auto px-5 py-3.5 rounded-2xl text-sm font-bold transition-all flex items-center justify-center space-x-2 border cursor-pointer ${
                selectedItineraryId === it.id
                  ? 'bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-500/10'
                  : 'bg-[#faf9f6] text-stone-600 hover:text-stone-900 border-stone-200 hover:bg-stone-50'
              }`}
            >
              <Heart className={`w-4 h-4 ${selectedItineraryId === it.id ? 'fill-white' : 'text-stone-400'}`} />
              <span>{it.title.split(' - ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Selected Itinerary Card Box */}
        <div className="bg-stone-50 rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-sm space-y-8">
          
          {/* Header Description */}
          <div className="space-y-3 pb-6 border-b border-stone-200/60">
            <div className="flex items-center space-x-3">
              <span className="bg-amber-100 text-amber-800 text-xs font-extrabold uppercase px-3 py-1 rounded-full">
                Thời lượng: {currentItinerary.duration}
              </span>
              <span className="text-stone-400 text-xs font-semibold flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-500" />
                Đã được kiểm chứng thực tế
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              {currentItinerary.title}
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {currentItinerary.summary}
            </p>
          </div>

          {/* Day-by-Day Accordion Container */}
          <div className="space-y-6">
            {currentItinerary.days.map((day) => {
              const isExpanded = !!expandedDays[day.dayNumber];
              return (
                <div
                  id={`itinerary-day-block-${day.dayNumber}`}
                  key={day.dayNumber}
                  className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden transition-all duration-300"
                >
                  {/* Accordion Trigger */}
                  <button
                    id={`toggle-day-${day.dayNumber}-btn`}
                    onClick={() => toggleDayExpand(day.dayNumber)}
                    className="w-full flex items-center justify-between p-5 text-left bg-stone-50/50 hover:bg-stone-50 transition-all cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500 text-stone-950 font-extrabold flex flex-col items-center justify-center shadow-sm">
                        <span className="text-[10px] uppercase tracking-wider font-bold">Ngày</span>
                        <span className="text-lg leading-none -mt-0.5">{day.dayNumber}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-900 text-base sm:text-lg">
                          {day.title}
                        </h4>
                        <p className="text-stone-400 text-xs">Nhấn để xem chi tiết mốc thời gian</p>
                      </div>
                    </div>
                    <div>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-stone-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-stone-500" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Content with Timeline */}
                  {isExpanded && (
                    <div className="p-6 sm:p-8 border-t border-stone-100 space-y-6 bg-white animate-slide-down">
                      <div className="relative border-l-2 border-amber-200 pl-6 sm:pl-8 space-y-8 ml-3">
                        {day.activities.map((act, index) => (
                          <div
                            id={`day-${day.dayNumber}-activity-${index}`}
                            key={index}
                            className="relative"
                          >
                            {/* Dot indicator inside timeline */}
                            <span className="absolute -left-[35px] sm:-left-[43px] top-1 bg-white border-2 border-amber-500 p-1 rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
                              {getActivityIcon(act.time, act.activity)}
                            </span>

                            {/* Activity Card */}
                            <div className="space-y-1">
                              <span className="text-xs font-mono text-amber-600 font-bold tracking-wider">
                                {act.time}
                              </span>
                              <h5 className="font-bold text-stone-800 text-sm sm:text-base">
                                {act.activity}
                              </h5>
                              {act.notes && (
                                <p className="text-stone-500 text-xs sm:text-sm italic leading-relaxed mt-1">
                                  * Lưu ý: {act.notes}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mini Guide Tips */}
          <div className="p-5 rounded-2xl bg-stone-100 border border-stone-200 flex items-start space-x-3.5">
            <Compass className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-stone-500 leading-relaxed space-y-1">
              <span className="font-bold text-stone-800 block">Lời khuyên nhỏ từ Hà:</span>
              <p>• Hãy chuẩn bị sẵn trang phục ấm nếu đi Đà Lạt / Sa Pa vào cuối năm, vì nhiệt độ buổi tối có thể xuống dưới 10 độ C.</p>
              <p>• Luôn liên hệ đặt dịch vụ xe giường nằm trước từ 1-2 tuần để chọn được vị trí ngồi tầng dưới êm ái nhất.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
