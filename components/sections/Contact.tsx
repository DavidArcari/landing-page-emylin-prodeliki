'use client';

import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/forms/ContactForm';
import { SITE_CONFIG } from '@/lib/constants';
import { generateWhatsAppLink } from '@/lib/utils';

export function Contact() {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de agendar uma consulta com a Dra. Emylin Prodeliki.';
    window.open(generateWhatsAppLink(SITE_CONFIG.phone, message), '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone/WhatsApp',
      value: '(11) 99999-9999', // Replace with actual phone
      action: handleWhatsAppClick,
    },
    {
      icon: Mail,
      title: 'Email',
      value: SITE_CONFIG.email,
      action: () => window.open(`mailto:${SITE_CONFIG.email}`),
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.neighborhood}`,
      action: () => window.open(`https://maps.google.com/?q=${encodeURIComponent(`${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}`)}`),
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      value: 'Seg-Sex: 9h às 18h\nSáb: 9h às 14h',
      action: null,
    },
  ];

  return (
    <section id="contato" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-black mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-primary-muted max-w-2xl mx-auto">
            Agende sua consulta e dê o primeiro passo para uma versão ainda mais harmoniosa de você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <h3 className="text-2xl font-heading font-semibold text-primary-black mb-6">
                Solicite sua consulta
              </h3>
              <ContactForm />
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className={`p-6 ${info.action ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
                    onClick={info.action || undefined}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-pink/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon size={24} className="text-primary-pink" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-primary-black mb-1">
                          {info.title}
                        </h4>
                        <p className="text-primary-muted whitespace-pre-line">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <Card className="p-6 bg-green-50 border-green-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-primary-black mb-1">
                    Resposta Rápida
                  </h4>
                  <p className="text-primary-muted mb-4">
                    Para dúvidas urgentes, envie uma mensagem no WhatsApp
                  </p>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    <MessageCircle size={16} className="mr-2" />
                    Falar no WhatsApp
                  </Button>
                </div>
              </div>
            </Card>

            {/* Calendly Embed */}
            <Card className="p-6">
              <h4 className="font-heading font-semibold text-primary-black mb-4">
                Ou agende diretamente
              </h4>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <p className="text-primary-muted mb-4">
                  Use nosso sistema de agendamento online
                </p>
                <Button
                  onClick={() => window.open(SITE_CONFIG.calendly, '_blank')}
                  variant="outline"
                >
                  Abrir Calendly
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
