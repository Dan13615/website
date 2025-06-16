import React, { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  date: string;
  rating: string;
  content: string;
}

export default function TestimonialsCarousel() {
  const testimonials: Testimonial[] = [
    {
      name: "Mme et M T.",
      date: "24 décembre 2024",
      rating: "10/10",
      content: "On adore ! Passage obligé dès que l'on débarque à Nice. Equipe super sympathique, la patronne bretonne en tête ! La carte est courte mais toujours avec de bons produits de saison. Assiette équilibrée et gouteuse. Notre go to place.",
    },
    {
      name: "Zahia A.",
      date: "23 novembre 2024",
      rating: "10/10",
      content: "Accueil chaleureux, ambiance et déco très authentique... le brunch pour ma part est assez copieux pour un prix raisonnable... Je recommande !",
    },
    {
      name: "Lionel M.",
      date: "10 août 2024",
      rating: "10/10",
      content: "Très bon restaurant, accueil chaleureux, service au top, des plats succulents pour un prix corrects. Plusieurs fois que nous y allons et jamais déçu. Une adresse a recommander.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const nextTestimonial = () => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsVisible(true);
      }, 500);
    };

    const interval = setInterval(nextTestimonial, 10000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const current = testimonials[currentIndex];

  return (
    <div className="max-w-2xl mx-auto p-6 transition-all duration-500">
      <div className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="flex items-center mb-4">
          <div className="text-yellow-500 text-3xl font-bold mr-2">{current.rating}</div>
          <div className="text-sm text-gray-200">
            <span className="font-semibold">{current.name}</span> • {current.date}
          </div>
        </div>
        <p className="text-white text-2xl italic">"{current.content}"</p>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <div key={index} className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-yellow-500" : "bg-gray-400"}`} />
        ))}
      </div>
    </div>
  );
}
