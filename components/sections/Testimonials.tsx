'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    age: 35,
    treatment: 'Harmonização Facial',
    rating: 5,
    text: 'Fiquei muito satisfeita com o resultado! A Dra. Emylin é muito profissional e cuidadosa. O resultado ficou natural e exatamente como eu queria.',
    image: '/images/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'Ana Costa',
    age: 28,
    treatment: 'Preenchimento Labial',
    rating: 5,
    text: 'Excelente atendimento! A consulta foi muito detalhada e o procedimento foi realizado com muito cuidado. Recomendo de olhos fechados.',
    image: '/images/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'Juliana Santos',
    age: 42,
    treatment: 'Toxina Botulínica',
    rating: 5,
    text: 'Profissional excepcional! A Dra. Emylin tem uma técnica muito refinada e o resultado superou minhas expectativas. Muito feliz!',
    image: '/images/testimonial-3.jpg',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="depoimentos" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-black mb-4">
            O que nossos pacientes dizem
          </h2>
          <p className="text-lg text-primary-muted max-w-2xl mx-auto">
            Depoimentos reais de quem confiou na nossa expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <Card className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                {/* Patient Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start space-x-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-primary-muted italic mb-6 leading-relaxed">
                    &ldquo;{testimonials[currentIndex].text}&rdquo;
                  </blockquote>

                  {/* Patient Info */}
                  <div className="text-primary-black">
                    <p className="font-heading font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-primary-muted">
                      {testimonials[currentIndex].age} anos • {testimonials[currentIndex].treatment}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={handlePrevious}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={20} className="text-primary-black" />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary-pink' : 'bg-gray-300'
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={20} className="text-primary-black" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary-black rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Quer ser nosso próximo caso de sucesso?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Agende sua consulta e descubra como podemos ajudar você a alcançar seus objetivos.
            </p>
            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-pink hover:bg-primary-pink/90 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
