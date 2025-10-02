'use client';

import { Check, Star } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const pricingPlans = [
  {
    name: 'Consulta de Avaliação',
    price: 'Gratuita',
    description: 'Avaliação completa e planejamento personalizado',
    features: [
      'Anamnese detalhada',
      'Avaliação facial',
      'Plano de tratamento personalizado',
      'Orientações pré e pós-procedimento',
      'Orçamento transparente',
    ],
    popular: false,
  },
  {
    name: 'Harmonização Facial',
    price: 'A partir de R$ 800',
    description: 'Procedimentos personalizados para harmonização facial',
    features: [
      'Preenchimento com ácido hialurônico',
      'Toxina botulínica',
      'Bioestimuladores de colágeno',
      'Acompanhamento pós-tratamento',
      'Garantia de qualidade',
    ],
    popular: true,
  },
];

export function Pricing() {
  return (
    <section id="precos" className="section-padding bg-primary-gray">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-black mb-4">
            Investimento
          </h2>
          <p className="text-lg text-primary-muted max-w-2xl mx-auto">
            Preços transparentes e consulta gratuita para avaliar suas necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative ${plan.popular ? 'ring-2 ring-primary-pink' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-pink text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star size={16} />
                    <span>Mais Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-bold text-primary-black mb-2">
                  {plan.name}
                </h3>
                <p className="text-primary-muted mb-4">{plan.description}</p>
                <div className="text-4xl font-heading font-bold text-primary-black">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check size={20} className="text-primary-pink flex-shrink-0 mt-0.5" />
                    <span className="text-primary-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full ${plan.popular ? 'bg-primary-pink hover:bg-primary-pink/90' : ''}`}
              >
                {plan.name === 'Consulta de Avaliação' ? 'Agendar Consulta' : 'Solicitar Orçamento'}
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-heading font-semibold text-primary-black mb-4">
              Informações Importantes
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-primary-muted">
              <div>
                <h4 className="font-medium text-primary-black mb-2">Pagamento</h4>
                <p>Aceitamos dinheiro, PIX, cartão de crédito e débito</p>
              </div>
              <div>
                <h4 className="font-medium text-primary-black mb-2">Garantia</h4>
                <p>Garantimos a qualidade dos materiais utilizados</p>
              </div>
              <div>
                <h4 className="font-medium text-primary-black mb-2">Acompanhamento</h4>
                <p>Seguimento gratuito por 30 dias após o procedimento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
