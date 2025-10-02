'use client';

import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { generateWhatsAppLink } from '@/lib/utils';

export function Hero() {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de agendar uma consulta com a Dra. Emylin Prodeliki.';
    window.open(generateWhatsAppLink(SITE_CONFIG.phone, message), '_blank');
  };

  const handleGalleryClick = () => {
    document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-dra-emylin.jpg"
          alt="Dra. Emylin Prodeliki - Biomédica Estéta"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Harmonização Facial com{' '}
                <span className="text-primary-pink">naturalidade</span> e precisão
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl">
                Dra. Emylin Prodeliki — Biomédica Estéta. Procedimentos personalizados 
                com foco em segurança e resultados naturais.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-primary-pink hover:bg-primary-pink/90 flex items-center space-x-2"
              >
                <Calendar size={20} />
                <span>Agende sua avaliação</span>
              </Button>
              
              <Button
                onClick={handleGalleryClick}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-black flex items-center space-x-2"
              >
                <ArrowRight size={20} />
                <span>Ver antes e depois</span>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-pink rounded-full" />
                <span className="text-gray-300">CRBM: {SITE_CONFIG.crbm}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-pink rounded-full" />
                <span className="text-gray-300">{SITE_CONFIG.experience} anos de experiência</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-pink rounded-full" />
                <span className="text-gray-300">Certificações internacionais</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-dra-emylin.jpg"
                alt="Dra. Emylin Prodeliki"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
