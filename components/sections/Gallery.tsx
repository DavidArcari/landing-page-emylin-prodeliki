'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';

const galleryImages = [
  {
    id: 1,
    src: '/images/before-after-1.jpg',
    alt: 'Antes e depois - Harmonização facial',
    category: 'Harmonização Facial',
  },
  {
    id: 2,
    src: '/images/before-after-2.jpg',
    alt: 'Antes e depois - Preenchimento labial',
    category: 'Preenchimento',
  },
  {
    id: 3,
    src: '/images/before-after-3.jpg',
    alt: 'Antes e depois - Toxina botulínica',
    category: 'Toxina Botulínica',
  },
  {
    id: 4,
    src: '/images/before-after-4.jpg',
    alt: 'Antes e depois - Bioestimuladores',
    category: 'Bioestimuladores',
  },
  {
    id: 5,
    src: '/images/before-after-5.jpg',
    alt: 'Antes e depois - Harmonização completa',
    category: 'Harmonização Facial',
  },
  {
    id: 6,
    src: '/images/before-after-6.jpg',
    alt: 'Antes e depois - Rejuvenescimento',
    category: 'Rejuvenescimento',
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') handleClose();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrevious();
  };

  return (
    <section id="galeria" className="section-padding bg-primary-gray">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-black mb-4">
            Antes e Depois
          </h2>
          <p className="text-lg text-primary-muted max-w-2xl mx-auto">
            Resultados reais de nossos pacientes. Cada caso é único e os resultados podem variar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                  {image.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-primary-muted italic">
            * Resultados podem variar de acordo com cada paciente. Consulta é necessária para avaliação individual.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <Modal
          isOpen={true}
          onClose={handleClose}
          className="max-w-4xl"
        >
          <div
            className="relative"
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            tabIndex={-1}
          >
            {/* Navigation buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <div className="relative aspect-[4/3] max-h-[80vh]">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Image info */}
            <div className="mt-4 text-center">
              <h3 className="text-lg font-heading font-semibold text-primary-black">
                {galleryImages[selectedImage].category}
              </h3>
              <p className="text-sm text-primary-muted mt-1">
                {selectedImage + 1} de {galleryImages.length}
              </p>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
