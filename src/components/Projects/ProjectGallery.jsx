import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ProjectGallery = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [unavailableImages, setUnavailableImages] = useState([]);

  const visibleImages = (images || []).filter(({ src }) => !unavailableImages.includes(src));

  if (!visibleImages.length) return null;

  const activeImage = visibleImages[Math.min(activeIndex, visibleImages.length - 1)];
  const move = (direction) => {
    setActiveIndex((current) => (current + direction + visibleImages.length) % visibleImages.length);
  };

  const handleTouchEnd = (event) => {
    if (startX === null) return;
    const distance = event.changedTouches[0].clientX - startX;
    if (Math.abs(distance) > 40) move(distance < 0 ? 1 : -1);
    setStartX(null);
  };

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">EcoStep Project Screens</h4>
        <span className="text-xs text-slate-500">Swipe to explore</span>
      </div>

      <div
        className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 touch-pan-y"
        onTouchStart={(event) => setStartX(event.touches[0].clientX)}
        onTouchEnd={handleTouchEnd}
      >
        <img
          key={activeImage.src}
          src={activeImage.src}
          alt={`${title} — ${activeImage.alt}`}
          onError={() => setUnavailableImages((current) => [...current, activeImage.src])}
          className="h-[420px] w-full select-none object-contain bg-black sm:h-[520px]"
        />

        {visibleImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/85 p-2 text-white shadow-lg transition-colors hover:bg-slate-800"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/85 p-2 text-white shadow-lg transition-colors hover:bg-slate-800"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-slate-950/75 px-2.5 py-2">
              {visibleImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show screenshot ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all ${index === activeIndex ? 'w-5 bg-emerald-400' : 'w-1.5 bg-slate-500 hover:bg-slate-300'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <p className="text-center text-xs text-slate-400">{activeImage.alt}</p>
    </section>
  );
};
