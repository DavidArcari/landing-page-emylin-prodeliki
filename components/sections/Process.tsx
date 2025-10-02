'use client';

import { Stethoscope, Syringe, Heart } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { PROCESS_STEPS } from '@/lib/constants';

const iconMap = {
  Stethoscope,
  Syringe,
  Heart,
};

export function Process() {
  return (
    <section id="processo" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-black mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-primary-muted max-w-2xl mx-auto">
            Processo simples e transparente para garantir os melhores resultados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <div key={step.step} className="relative">
                <Card className="p-8 text-center h-full">
                  <div className="w-16 h-16 bg-primary-pink/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-primary-pink" />
                  </div>
                  
                  <div className="w-8 h-8 bg-primary-pink text-white rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold">
                    {step.step}
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-primary-black mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-primary-muted leading-relaxed">
                    {step.description}
                  </p>
                </Card>

                {/* Connector line */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-pink/30 transform -translate-y-1/2" />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-pink to-primary-pink/80 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Pronto para começar sua jornada?
            </h3>
            <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
              Agende sua consulta e dê o primeiro passo para uma versão ainda mais harmoniosa de você.
            </p>
            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-pink px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
