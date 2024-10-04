import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides = [
    { src: img1, alt: 'Broadcaster, 1950–51', title: 'Broadcaster, 1950–51', description: 'Rare early Telecaster with original shortlived name. An even rarer transitional type without a model name on the headstock was later nicknamed the Nocaster.' },

    { src: img2, alt: 'Telecaster, 1951–59', title: 'Telecaster, 1951–59', description: 'First main version of standard Tele, fretted maple neck, blond-finish single-cut body, two knobs and a selector, five-screw black pickguard (white from late 1954 on)' },

    { src: img3, alt: 'Telecaster, 1959–83', title: 'Telecaster, 1959–83', description: 'Second main version of standard Tele, rosewood fretboard on maple neck (later with maple fretboard option), various colors or sunburst, eight-screw pickguard.' },

    { src: img4, alt: 'Custom Telecaster, 1959–72', title: 'Custom Telecaster, 1959–72', description: 'Rosewood fretboard on maple neck, white binding on body. Not to be confused with neck-humbucker Telecaster Custom (1972–80).' },

    { src: img5, alt: 'Thinline Telecaster, 1968–78', title: 'Thinline Telecaster, 1968–78', description: 'First semi-solid Tele, single f-hole in semi-solid body, regular pickups. Later (from 1971) two humbuckers, six-saddle bridge.' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  useEffect(() => {
    let timer;
    if (autoPlay) {
      timer = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }
    return () => clearInterval(timer);
  }, [autoPlay]);

  return (
    <div className="w-full h-[500px] relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="relative overflow-hidden w-full h-full shadow-lg rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{ zIndex: index === currentSlide ? 10 : 0 }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              <p className="mt-2 text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons Below the Slider */}
      <div className="flex justify-between mt-4">
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'rgba(10, 60, 120, 0.9)', // Darker background color
            color: '#ffffff',
            padding: '15px 30px', // Increased padding for larger buttons
            borderRadius: '8px', // Rounded corners
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // Increased shadow for more depth
            transition: 'transform 0.2s, box-shadow 0.2s', // Smooth transition for hover effects
            '&:hover': {
              backgroundColor: 'rgba(0, 40, 80, 0.9)', // Darker on hover
              transform: 'scale(1.05)', // Slightly larger on hover
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Deeper shadow on hover
            },
          }}
          onClick={prevSlide}
        >
          Prev
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'rgba(10, 60, 120, 0.9)', // Darker background color
            color: '#ffffff',
            padding: '15px 30px', // Increased padding for larger buttons
            borderRadius: '8px', // Rounded corners
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // Increased shadow for more depth
            transition: 'transform 0.2s, box-shadow 0.2s', // Smooth transition for hover effects
            '&:hover': {
              backgroundColor: 'rgba(0, 40, 80, 0.9)', // Darker on hover
              transform: 'scale(1.05)', // Slightly larger on hover
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Deeper shadow on hover
            },
          }}
          onClick={nextSlide}
        >
          Next
        </Button>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center mt-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
