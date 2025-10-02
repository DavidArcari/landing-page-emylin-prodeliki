'use client';

import { ArrowRight, User, Droplets, Zap, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SERVICES } from '@/lib/constants';

const iconMap = {
  Face: User,
  Droplets,
  Zap,
  Sparkles,
};

export function Services() {
  const handleLearnMore = () => {
    // Scroll to contact section or open modal with more details
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicos" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-black mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-primary-muted max-w-2xl mx-auto">
            Procedimentos especializados em harmonização facial com técnicas modernas e materiais de qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card key={service.id} className="p-6 text-center group hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary-pink/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-pink/20 transition-colors">
                  <Icon size={32} className="text-primary-pink" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-primary-black mb-4">
                  {service.title}
                </h3>
                
                <p className="text-primary-muted leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <Button
                  variant="outline"
                  onClick={handleLearnMore}
                  className="w-full group-hover:bg-primary-black group-hover:text-primary-white transition-colors"
                >
                  <span>Saiba mais</span>
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary-black rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Não sabe qual procedimento é ideal para você?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Agende uma consulta personalizada para avaliarmos suas necessidades e 
              criarmos um plano de tratamento sob medida.
            </p>
            <Button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-pink hover:bg-primary-pink/90"
            >
              Agendar Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
