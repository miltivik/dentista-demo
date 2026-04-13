import Image from 'next/image';
import { Star } from 'lucide-react';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Testimonials() {
  const testimonials = [
    { 
      name: "Ana García", 
      time: "Hace 2 semanas",
      quote: "Me cambiaron la sonrisa en 3 sesiones, ¡increíble! El trato fue súper amable y profesional desde el primer momento.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    { 
      name: "Carlos Mendoza", 
      time: "Hace 1 mes",
      quote: "El tratamiento de implantes fue indoloro y rápido. Tenía mucho miedo al dentista pero el Dr. Pérez me dio muchísima confianza.",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop"
    },
    { 
      name: "Lucía Fernández", 
      time: "Hace 3 meses",
      quote: "La atención en urgencias fue inmediata y profesional. Me salvaron de un dolor de muela terrible un domingo por la tarde.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Google Reviews Header */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <h2 className="font-heading text-4xl font-medium text-[#133c3e] mb-6">Lo que dicen nuestros pacientes</h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#f4f4f0] py-4 px-8 rounded-full border border-[#133c3e]/10 shadow-sm">
            <div className="flex items-center gap-3">
              <GoogleIcon />
              <span className="font-medium text-lg text-gray-800">Valoración en Google</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-2xl text-gray-900">4.9</span>
              <div className="flex text-[#FBBC05]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-gray-500 text-sm ml-1">(128 reseñas)</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                    <Image 
                      src={t.avatar} 
                      alt={t.name} 
                      fill 
                      sizes="40px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">{t.name}</h3>
                    <p className="text-gray-500 text-xs">{t.time}</p>
                  </div>
                </div>
                <GoogleIcon />
              </div>
              <div className="flex text-[#FBBC05] mb-3">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                {t.quote}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
