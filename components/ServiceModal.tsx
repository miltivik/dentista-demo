import { X, ArrowRight } from 'lucide-react';

interface Service {
  icon: any;
  title: string;
  desc: string;
  details: string;
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
  onBook: () => void;
}

export default function ServiceModal({ isOpen, onClose, service, onBook }: ServiceModalProps) {
  if (!isOpen || !service) return null;

  const Icon = service.icon;

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-[#133c3e]/40 backdrop-blur-sm px-4">
      <div className="bg-[#f4f4f0] rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-[#133c3e]/10 relative animate-in fade-in zoom-in-95 duration-200">
        <button aria-label="Cerrar modal" onClick={onClose} className="absolute top-4 right-4 text-[#133c3e]/60 hover:text-[#133c3e] transition-colors">
          <X size={24} />
        </button>
        
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#133c3e] mb-6 shadow-sm">
          <Icon size={32} />
        </div>
        
        <h3 className="font-heading text-3xl font-medium text-[#133c3e] mb-4">{service.title}</h3>
        
        <div className="space-y-4 mb-8">
          <p className="text-[#133c3e] font-medium text-lg">
            {service.desc}
          </p>
          <p className="text-[#133c3e]/80 leading-relaxed">
            {service.details}
          </p>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={onBook} 
            className="flex-1 bg-[#133c3e] text-white py-3 px-6 rounded-full font-medium hover:bg-[#1a4f52] transition-colors flex items-center justify-center gap-2"
          >
            Agendar turno <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
