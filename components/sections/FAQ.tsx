'use client';

import { Accordion } from '@/components/ui/Accordion';
import { FAQ_ITEMS } from '@/lib/constants';

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-primary-gray">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-black mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-primary-muted max-w-2xl mx-auto">
            Tire suas dúvidas sobre os procedimentos e cuidados
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <Accordion items={[...FAQ_ITEMS]} />
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-heading font-semibold text-primary-black mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-primary-muted mb-6">
              Entre em contato conosco para esclarecer qualquer questão sobre os procedimentos.
            </p>
            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-pink text-white px-8 py-3 rounded-md font-medium hover:bg-primary-pink/90 transition-colors"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
