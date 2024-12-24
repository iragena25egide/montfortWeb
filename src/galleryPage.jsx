import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GalleryPage = () => {
  const images = [
    "/image/com.jpg",
    "/image/h.jpg",
    "/image/star.jpg",
    "/image/i.jpg",
    "/image/girl.jpg",
    "/image/mont.jpg",
    "/image/g.jpg",
    "/image/h2.jpg",
    "/image/gg.jpg",
    "/image/ggg.jpg",
    "/image/play.jpg",
    "/image/ii.jpg",
    "/image/h3.jpg",
    "/image/iii.jpg",
    "/image/student1.jpg",
    "/image/student2.jpg",
    "/image/o6.jpg",
    "/image/aa.jpg",
    "/image/a.jpg",
    "/image/trad.jpg",
    "/image/traditional.jpg",
    "/image/trip.jpg",
    "/image/trip2.jpg",
    "/image/visitor.jpg",
    "/image/xx.jpg",
    "/image/block.jpg",
    "/image/S1A.jpg",
    "/image/S1B.jpg",
    "/image/S1C.jpg",
    "/image/S1D.jpg",
    "/image/S1E.jpg",
    "/image/S2A.jpg",
    "/image/S2B.jpg",
    "/image/S2C.jpg",
    "/image/S3A.jpg",
    "/image/S3B.jpg",
    "/image/o7.jpg",
    "/image/o6.jpg",
    "/image/o5.jpg",
    "/image/o4.jpg",
    "/image/o3.jpg",
    "/image/trad.jpg",
    "/image/traditional.jpg",
    "/image/o2.jpg",
    "/image/o1.jpg",
    "/image/visitor.jpg",
    "/image/xx.jpg",
    "/image/b1.jpg",
    "/image/b2.jpg",
    "/image/b3.jpg",
    "/image/h1.jpg",
  
  ];

  
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8"
          data-aos="fade-down"
        >
          School Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay={`${index * 50}`} 
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-[240px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
