import React, { useState, useEffect } from "react";


const images = [
  "../gallery/1.jpg",
  "../gallery/2.jpg",
  "../gallery/3.jpg",
  "../gallery/4.jpg",
  "../gallery/5.jpg",
  "../gallery/6.jpg",
  "../gallery/7.jpg",
  "../gallery/8.jpg",
  "../gallery/9.jpg",
  "../gallery/10.jpg",
   
];

export default function Gallery() {

  const [currentIndex, setCurrentIndex] = useState(null);
        const openLightbox = (index) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Close on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div>
      {/* Gallery Grid */}
      <div className="gallery">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            onClick={() => openLightbox(index)}
            className="gallery-img"
          />
        ))}
      </div>


    {/* Lightbox */}
      {currentIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            ❮
          </button>

          <img
            src={images[currentIndex]}
            alt=""
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button className="next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            ❯
          </button>
        </div>
      )}
    </div>
  );
}
