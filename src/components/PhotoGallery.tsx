import React, { useState } from 'react';
import { Image as ImageIcon, Maximize2, ChevronLeft, ChevronRight, X, MapPin, Sparkles } from 'lucide-react';
import { ALBUMS } from '../data';
import { Photo } from '../types';

export default function PhotoGallery() {
  const [selectedAlbumId, setSelectedAlbumId] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Flatten photos or filter based on choice
  const allPhotos = ALBUMS.reduce<Photo[]>((acc, album) => {
    return [...acc, ...album.photos];
  }, []);

  const filteredPhotos = selectedAlbumId === 'all'
    ? allPhotos
    : ALBUMS.find(a => a.id === selectedAlbumId)?.photos || [];

  const handleOpenLightbox = (photo: Photo) => {
    const idx = filteredPhotos.findIndex(p => p.id === photo.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => {
      if (prev === null) return null;
      return prev === 0 ? filteredPhotos.length - 1 : prev - 1;
    });
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => {
      if (prev === null) return null;
      return prev === filteredPhotos.length - 1 ? 0 : prev + 1;
    });
  };

  const handleClose = () => {
    setLightboxIndex(null);
  };

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-white border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>Khoảnh Khắc Đẹp</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Thư Viện Ảnh Du Lịch
          </h2>
          <p className="text-stone-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Những bức ảnh tuyệt đẹp ghi lại từng khoảnh khắc mộc mạc và rực rỡ nhất dọc dải đất hình chữ S trong các chuyến đi của Hà.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Album Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            id="album-filter-all"
            onClick={() => setSelectedAlbumId('all')}
            className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
              selectedAlbumId === 'all'
                ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                : 'bg-[#faf9f6] text-stone-600 border-stone-200 hover:bg-stone-50'
            }`}
          >
            Tất cả ảnh
          </button>
          {ALBUMS.map((album) => (
            <button
              id={`album-filter-${album.id}`}
              key={album.id}
              onClick={() => setSelectedAlbumId(album.id)}
              className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                selectedAlbumId === album.id
                  ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                  : 'bg-[#faf9f6] text-stone-600 border-stone-200 hover:bg-stone-50'
              }`}
            >
              Album {album.name.replace('Tuyệt Tác ', '').replace('Thiên Đường ', '')}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              id={`gallery-photo-card-${photo.id}`}
              key={photo.id}
              onClick={() => handleOpenLightbox(photo)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl border border-stone-100 bg-stone-50"
            >
              {/* Photo Image */}
              <img
                src={photo.url}
                alt={photo.caption}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Dark Gradient Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5 text-white" />

              {/* Instant static label of location in corner */}
              <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full flex items-center space-x-1 border border-white/10">
                <MapPin className="w-3 h-3 text-amber-400" />
                <span>{photo.location}</span>
              </div>

              {/* Rich Hover text */}
              <div className="absolute inset-x-5 bottom-5 text-white opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                <p className="text-xs font-semibold text-amber-400 flex items-center space-x-1 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ảnh chụp thực tế</span>
                </p>
                <h4 className="font-serif text-sm font-bold leading-snug line-clamp-2">
                  {photo.caption}
                </h4>
                <div className="mt-3.5 flex items-center space-x-1 text-[10px] text-stone-300 font-semibold uppercase tracking-wider">
                  <Maximize2 className="w-3 h-3 text-stone-300 mr-0.5" />
                  <span>Phóng to ảnh</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal Overlay */}
        {activePhoto && (
          <div
            id="photo-lightbox-modal"
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
            onClick={handleClose}
          >
            {/* Close Button */}
            <button
              id="close-lightbox-btn"
              onClick={handleClose}
              className="absolute top-6 right-6 bg-white/15 hover:bg-white/20 border border-white/10 text-white p-3 rounded-full backdrop-blur transition-all cursor-pointer z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Wrapper */}
            <div className="relative max-w-5xl w-full flex-grow flex items-center justify-center">
              
              {/* Previous Photo Button */}
              <button
                id="lightbox-prev-btn"
                onClick={handlePrev}
                className="absolute left-0 sm:-left-12 bg-white/10 hover:bg-white/20 border border-white/10 text-white p-3 rounded-full backdrop-blur transition-all cursor-pointer z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* High-Res Image View */}
              <div 
                className="max-h-[75vh] max-w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center bg-stone-950"
                onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing lightbox
              >
                <img
                  src={activePhoto.url}
                  alt={activePhoto.caption}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80';
                  }}
                  className="max-h-[75vh] max-w-full object-contain animate-scale-up"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Next Photo Button */}
              <button
                id="lightbox-next-btn"
                onClick={handleNext}
                className="absolute right-0 sm:-right-12 bg-white/10 hover:bg-white/20 border border-white/10 text-white p-3 rounded-full backdrop-blur transition-all cursor-pointer z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>

            {/* Lightbox Caption Footer */}
            <div
              className="w-full max-w-3xl text-center text-white mt-6 space-y-2 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="inline-flex items-center space-x-1.5 bg-amber-500 text-stone-950 text-xs font-extrabold uppercase px-3 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-stone-950 mr-0.5" />
                <span>{activePhoto.location}</span>
              </div>
              <p className="font-serif text-lg sm:text-xl font-medium tracking-wide">
                {activePhoto.caption}
              </p>
              <p className="text-stone-400 text-xs font-mono">
                Ảnh {lightboxIndex! + 1} / {filteredPhotos.length} của Album {selectedAlbumId === 'all' ? 'Tổng Hợp' : ALBUMS.find(a => a.id === selectedAlbumId)?.name.replace('Tuyệt Tác ', '').replace('Thiên Đường ', '')}
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
