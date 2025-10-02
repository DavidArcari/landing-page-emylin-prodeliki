import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '@/components/forms/ContactForm';

// Mock fetch
global.fetch = jest.fn();

describe('ContactForm', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('renders form fields correctly', () => {
    render(<ContactForm />);
    
    expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/telefone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/data preferida/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensagem/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/concordo com o tratamento/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty required fields', async () => {
    render(<ContactForm />);
    
    const submitButton = screen.getByRole('button', { name: /enviar mensagem/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/nome deve ter pelo menos 2 caracteres/i)).toBeInTheDocument();
      expect(screen.getByText(/email inválido/i)).toBeInTheDocument();
      expect(screen.getByText(/telefone deve ter pelo menos 10 dígitos/i)).toBeInTheDocument();
      expect(screen.getByText(/mensagem deve ter pelo menos 10 caracteres/i)).toBeInTheDocument();
      expect(screen.getByText(/você deve concordar com o tratamento dos dados/i)).toBeInTheDocument();
    });
  });

  it('submits form successfully', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: 'Mensagem enviada com sucesso!' }),
    });

    render(<ContactForm />);
    
    // Fill form
    fireEvent.change(screen.getByLabelText(/nome completo/i), {
      target: { value: 'João Silva' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'joao@email.com' },
    });
    fireEvent.change(screen.getByLabelText(/telefone/i), {
      target: { value: '11999999999' },
    });
    fireEvent.change(screen.getByLabelText(/mensagem/i), {
      target: { value: 'Gostaria de agendar uma consulta' },
    });
    fireEvent.click(screen.getByLabelText(/concordo com o tratamento/i));

    // Submit form
    const submitButton = screen.getByRole('button', { name: /enviar mensagem/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/mensagem enviada com sucesso/i)).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledWith('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'João Silva',
        email: 'joao@email.com',
        phone: '11999999999',
        preferredDate: '',
        message: 'Gostaria de agendar uma consulta',
        consent: true,
      }),
    });
  });

  it('shows error message on failed submission', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Erro interno do servidor' }),
    });

    render(<ContactForm />);
    
    // Fill form
    fireEvent.change(screen.getByLabelText(/nome completo/i), {
      target: { value: 'João Silva' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'joao@email.com' },
    });
    fireEvent.change(screen.getByLabelText(/telefone/i), {
      target: { value: '11999999999' },
    });
    fireEvent.change(screen.getByLabelText(/mensagem/i), {
      target: { value: 'Gostaria de agendar uma consulta' },
    });
    fireEvent.click(screen.getByLabelText(/concordo com o tratamento/i));

    // Submit form
    const submitButton = screen.getByRole('button', { name: /enviar mensagem/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/erro interno do servidor/i)).toBeInTheDocument();
    });
  });
});
