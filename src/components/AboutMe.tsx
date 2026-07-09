import React from 'react';
import { Heart, Globe, Sparkles, BookOpen, Users, HelpCircle, ShieldCheck } from 'lucide-react';
import { PROFILE_IMAGE } from '../data';

export default function AboutMe() {
  const audiences = [
    { name: 'Sinh viên', desc: 'Các bạn trẻ yêu phượt, muốn đi tìm kiếm khám phá thế giới với ngân sách tối giản nhất.' },
    { name: 'Người mê du lịch', desc: 'Những tín đồ đam mê xê dịch muốn săn lùng các tọa độ tuyệt đẹp, hoang sơ và kỳ thú.' },
    { name: 'Gia đình', desc: 'Các gia đình muốn lên kế hoạch nghỉ dưỡng chu đáo, thảnh thơi và an toàn.' },
    { name: 'Người chuẩn bị đi', desc: 'Bất cứ ai cần tham khảo lịch trình chi tiết và bảng dự trù kinh phí thực tế trước khi xách balo lên.' }
  ];

  return (
    <section id="about" className="py-24 bg-[#faf9f6] border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
            <span>Kết Nối Bạn Đọc</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Giới Thiệu Về Mình
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-Column Bio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Blogger Image with Aesthetic Accent Frames */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Back decorative warm orange panel */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-400 to-amber-200 rounded-3xl rotate-6 opacity-30 blur-sm -z-10" />
              <div className="absolute inset-0 border-2 border-dashed border-amber-500/40 rounded-3xl rotate-3 -z-10" />
              
              <img
                src={PROFILE_IMAGE}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                }}
                alt="Chân dung Hà - Travel Blogger"
                className="w-full h-full object-cover rounded-3xl shadow-xl border-4 border-white"
                referrerPolicy="no-referrer"
              />

              {/* Float Badge overlay */}
              <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-2xl p-3.5 border border-stone-100 flex items-center space-x-3 max-w-[200px] animate-bounce-slow">
                <div className="p-2 rounded-xl bg-amber-500 text-white">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Hà Du Hý</h4>
                  <p className="text-xs text-stone-500">20+ Miền Đất Đã Đi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
              Xin chào! Mình là Hà, một người yêu thích khám phá những vùng đất mới...
            </h3>
            
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Xin chào! Mình là Hà, một người yêu thích khám phá những vùng đất mới và lưu giữ những khoảnh khắc đẹp qua mỗi chuyến đi.
            </p>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Mình tạo ra blog <strong className="text-amber-600 font-semibold">Travel With Hà</strong> với mong muốn chia sẻ những trải nghiệm du lịch thực tế, các lịch trình tham khảo, chi phí dự kiến và những mẹo hữu ích để mọi người có thêm thông tin trước khi lên đường. Tất cả nội dung trên website đều được tổng hợp từ trải nghiệm cá nhân và quá trình tìm hiểu, với hy vọng giúp việc du lịch trở nên dễ dàng và thú vị hơn.
            </p>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Đối với mình, mỗi chuyến đi không chỉ là dịp khám phá cảnh đẹp mà còn là cơ hội tìm hiểu văn hóa, ẩm thực và con người ở từng địa phương. Vì vậy, mình luôn cố gắng ghi lại những thông tin chân thực và hữu ích nhất để chia sẻ cùng mọi người.
            </p>

            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start space-x-4">
              <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-stone-900 text-base">Cam kết 100% Phi Thương Mại</h4>
                <p className="text-stone-600 text-sm mt-1">
                  Website này được xây dựng hoàn toàn với mục đích chia sẻ thông tin phi thương mại. Mình không bán tour, không nhận đặt phòng, không cung cấp dịch vụ du lịch. Tất cả chỉ hướng đến việc kết nối cộng đồng xê dịch nhiệt thành!
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Target Audience Bento Cards */}
        <div className="border-t border-stone-200/50 pt-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-1.5 text-stone-500 text-xs font-semibold uppercase tracking-wider mb-2">
              <Users className="w-4 h-4 text-amber-500" />
              <span>Đối Tượng Đọc Blog</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-800">Cẩm Nang Này Dành Cho Ai?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((aud, index) => (
              <div
                id={`about-audience-card-${index}`}
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200/60 hover:shadow-md hover:border-amber-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-4 group-hover:bg-amber-500 group-hover:text-white transition-all">
                  0{index + 1}
                </div>
                <h4 className="font-bold text-stone-900 text-lg mb-2">{aud.name}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
