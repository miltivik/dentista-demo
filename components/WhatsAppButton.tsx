import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/1234567890?text=Hola, quiero consultar por un turno"
      target="_blank"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <MessageCircle size={32} />
    </a>
  );
}
