import { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
      setShowConfirm(false);
      setIsLoading(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      setShowConfirm(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="booking-modal-title" className="fixed inset-0 z-50 flex items-center justify-center bg-[#133c3e]/40 backdrop-blur-sm px-4">
      <div className="bg-[#f4f4f0] rounded-3xl p-8 max-w-md w-full shadow-2xl border border-[#133c3e]/10 relative">
        <button aria-label="Close modal" onClick={onClose} className="absolute top-4 right-4 text-[#133c3e]/60 hover:text-[#133c3e]">
          <X size={24} />
        </button>
        {isSubmitted ? (
          <div className="text-center py-8">
            <h3 className="font-heading text-2xl font-medium text-[#133c3e] mb-2">¡Solicitud enviada!</h3>
            <p className="text-[#133c3e]/80">Nos pondremos en contacto contigo pronto.</p>
          </div>
        ) : showConfirm ? (
          <div className="text-center py-8">
            <h3 className="font-heading text-2xl font-medium text-[#133c3e] mb-4">Confirmar Reserva</h3>
            <p className="text-[#133c3e]/80 mb-8">¿Estás seguro de que deseas enviar esta solicitud de turno?</p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => setShowConfirm(false)} 
                disabled={isLoading}
                className="px-6 py-2 rounded-full border border-[#133c3e]/20 text-[#133c3e] font-medium hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancelar
              </button>
              <button 
                onClick={handleConfirm} 
                disabled={isLoading}
                className="px-6 py-2 rounded-full bg-[#133c3e] text-white font-medium hover:bg-[#1a4f52] transition-colors flex items-center justify-center min-w-[120px] disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {isLoading ? <Loader2 className="animate-spin" size={20} /> : "Confirmar"}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleInitialSubmit} className="space-y-4">
            <h3 id="booking-modal-title" className="font-heading text-2xl font-medium text-[#133c3e] mb-4">Agendar Turno</h3>
            <input aria-label="Nombre" type="text" placeholder="Nombre" className="w-full px-4 py-3 rounded-xl border border-[#133c3e]/20" required />
            <input aria-label="Teléfono" type="tel" placeholder="Teléfono" className="w-full px-4 py-3 rounded-xl border border-[#133c3e]/20" required />
            <select aria-label="Tratamiento" className="w-full px-4 py-3 rounded-xl border border-[#133c3e]/20" required>
              <option value="">Selecciona tratamiento</option>
              <option value="estetica">Estética</option>
              <option value="ortodoncia">Ortodoncia</option>
              <option value="implantes">Implantes</option>
              <option value="urgencias">Urgencias</option>
              <option value="blanqueamiento">Blanqueamiento</option>
            </select>
            <input aria-label="Fecha preferida" type="date" className="w-full px-4 py-3 rounded-xl border border-[#133c3e]/20" required />
            <button type="submit" className="w-full bg-[#133c3e] text-white py-3 rounded-full font-medium hover:bg-[#1a4f52]">
              Enviar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
