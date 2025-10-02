'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Erro de conexão. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-heading font-bold text-primary-black mb-4">
          Mensagem enviada com sucesso!
        </h3>
        <p className="text-primary-muted mb-6">
          Entraremos em contato em até 24 horas para agendar sua consulta.
        </p>
        <Button onClick={() => setSubmitStatus('idle')}>
          Enviar nova mensagem
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary-black mb-2">
            Nome completo *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-pink focus:border-transparent transition-colors"
            placeholder="Seu nome completo"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary-black mb-2">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-pink focus:border-transparent transition-colors"
            placeholder="seu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary-black mb-2">
            Telefone/WhatsApp *
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-pink focus:border-transparent transition-colors"
            placeholder="(11) 99999-9999"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-primary-black mb-2">
            Data preferida
          </label>
          <input
            {...register('preferredDate')}
            type="date"
            id="preferredDate"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-pink focus:border-transparent transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary-black mb-2">
          Mensagem *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-pink focus:border-transparent transition-colors resize-none"
          placeholder="Conte-nos sobre seus objetivos e dúvidas..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-start space-x-3">
        <input
          {...register('consent')}
          type="checkbox"
          id="consent"
          className="mt-1 h-4 w-4 text-primary-pink focus:ring-primary-pink border-gray-300 rounded"
        />
        <label htmlFor="consent" className="text-sm text-primary-muted">
          Ao enviar, concordo com o tratamento dos meus dados conforme a{' '}
          <a href="/privacidade" className="text-primary-pink hover:underline">
            Política de Privacidade
          </a>
          . *
        </label>
      </div>
      {errors.consent && (
        <p className="text-sm text-red-600">{errors.consent.message}</p>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">{errorMessage}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            <span>Enviando...</span>
          </>
        ) : (
          <>
            <Send size={20} />
            <span>Enviar mensagem</span>
          </>
        )}
      </Button>
    </form>
  );
}
