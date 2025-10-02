import { Award, Shield, Users } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { SITE_CONFIG } from '@/lib/constants';

const credentials = [
  {
    icon: Award,
    title: 'CRBM Registrado',
    description: `Registro profissional ${SITE_CONFIG.crbm} ativo e em dia`,
  },
  {
    icon: Users,
    title: 'Experiência Comprovada',
    description: `${SITE_CONFIG.experience} anos de experiência em harmonização facial`,
  },
  {
    icon: Shield,
    title: 'Certificações',
    description: 'Cursos nacionais e internacionais em técnicas avançadas',
  },
];

export function Credentials() {
  return (
    <section className="section-padding bg-primary-gray">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-black mb-4">
            Por que escolher a Dra. Emylin?
          </h2>
          <p className="text-lg text-primary-muted max-w-2xl mx-auto">
            Profissional qualificada com formação especializada e compromisso com a excelência
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <Card key={index} className="text-center p-8">
                <div className="w-16 h-16 bg-primary-pink/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon size={32} className="text-primary-pink" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary-black mb-4">
                  {credential.title}
                </h3>
                <p className="text-primary-muted leading-relaxed">
                  {credential.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
