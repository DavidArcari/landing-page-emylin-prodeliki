'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { generateWhatsAppLink } from '@/lib/utils';

export function Footer() {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de saber mais sobre os procedimentos da Dra. Emylin Prodeliki.';
    window.open(generateWhatsAppLink(SITE_CONFIG.phone, message), '_blank');
  };

  return (
    <footer className="bg-primary-black text-white">
      <div className="container-max">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary-pink rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="font-heading font-semibold text-xl">
                  Dra. Emylin Prodeliki
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Biomédica Estéta especializada em harmonização facial. Procedimentos 
                personalizados com foco em segurança e resultados naturais.
              </p>
              <div className="flex space-x-4">
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-pink transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#servicos" className="text-gray-300 hover:text-white transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="#galeria" className="text-gray-300 hover:text-white transition-colors">
                    Galeria
                  </Link>
                </li>
                <li>
                  <Link href="#processo" className="text-gray-300 hover:text-white transition-colors">
                    Processo
                  </Link>
                </li>
                <li>
                  <Link href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">
                    Depoimentos
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-6">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Phone size={16} className="text-primary-pink flex-shrink-0" />
                  <span className="text-gray-300">(11) 99999-9999</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={16} className="text-primary-pink flex-shrink-0" />
                  <span className="text-gray-300">{SITE_CONFIG.email}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin size={16} className="text-primary-pink flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    {SITE_CONFIG.address.street}<br />
                    {SITE_CONFIG.address.neighborhood}<br />
                    {SITE_CONFIG.address.city} - {SITE_CONFIG.address.state}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dra. Emylin Prodeliki. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacidade" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
          
          {/* Medical Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center max-w-4xl mx-auto">
              <strong>Disclaimer Médico:</strong> Os resultados dos procedimentos podem variar de acordo com cada paciente. 
              É necessária uma consulta prévia para avaliação individual e indicação do tratamento mais adequado. 
              Todos os procedimentos são realizados por profissional qualificado e registrado no CRBM.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
