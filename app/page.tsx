'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Sparkles, ChevronLeft, ChevronRight, Stethoscope, Palette, Activity, ShieldCheck } from 'lucide-react';
import BookingModal from '../components/BookingModal';
import ProfessionalBio from '../components/ProfessionalBio';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import MapSection from '../components/MapSection';
import WhatsAppButton from '../components/WhatsAppButton';
import ServiceModal from '../components/ServiceModal';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Hero Animations
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });
    
    tl.fromTo(".hero-nav", 
      { y: -20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 }
    )
    .fromTo(".hero-title", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.1 },
      "-=0.4"
    )
    .fromTo(".hero-btn", 
      { scale: 0.9, opacity: 0 }, 
      { scale: 1, opacity: 1, ease: "back.out(1.5)" },
      "-=0.8"
    )
    .fromTo(".hero-image",
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5 },
      "-=1.2"
    );

    // Services Animations
    gsap.fromTo(".service-header",
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(".service-card",
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
        }
      }
    );

    // CTA Animations
    gsap.fromTo(".cta-content",
      { scale: 0.95, opacity: 0, y: 40 },
      {
        scale: 1, opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden">
      {/* HERO SECTION */}
      <section ref={heroRef} className="px-4 pt-4 pb-12 md:px-8 md:pt-8 md:pb-24">
        <div className="max-w-7xl mx-auto bg-[#133c3e] rounded-[2rem] overflow-hidden relative min-h-[80vh] flex flex-col">
          {/* Decorative background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a4f52] to-[#0d2a2b] opacity-80 pointer-events-none" />
          
          {/* Navigation */}
          <nav className="hero-nav relative z-10 flex items-center justify-between p-6 md:p-10 text-white">
            <div className="font-heading text-2xl tracking-widest font-light">D E N T</div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-90">
              <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:opacity-100 transition-opacity">Services</a>
              <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="hover:opacity-100 transition-opacity">Pricing</a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:opacity-100 transition-opacity">About</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:opacity-100 transition-opacity">Contact</a>
            </div>
            <button aria-haspopup="dialog" aria-expanded={isModalOpen} onClick={() => setIsModalOpen(true)} className="bg-[#82d6d6] text-[#133c3e] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#6bc2c2] transition-colors">
              Book now
            </button>
          </nav>

          {/* Hero Content */}
          <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-between p-6 md:p-16 lg:p-24">
            <div className="max-w-xl text-white z-20">
              <h1 className="hero-title font-heading text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-6 drop-shadow-lg">
                Sin lista de espera <br/> para urgencias
              </h1>
              <div className="flex gap-4 mb-10">
                <span className="bg-black/40 text-white px-4 py-1 rounded-full text-sm font-medium border border-white/20">Obra social</span>
                <span className="bg-black/40 text-white px-4 py-1 rounded-full text-sm font-medium border border-white/20">Pagos en cuotas</span>
              </div>
              <button aria-haspopup="dialog" aria-expanded={isModalOpen} onClick={() => setIsModalOpen(true)} className="hero-btn bg-[#82d6d6] text-[#133c3e] px-8 py-4 rounded-full text-base font-medium hover:bg-[#6bc2c2] transition-colors inline-flex items-center gap-2">
                Book today
              </button>
            </div>
            
            {/* Hero Image */}
            <div className="hero-image absolute bottom-0 right-0 w-full md:w-[60%] lg:w-[50%] h-[60%] md:h-[90%] pointer-events-none">
              <Image 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop"
                alt="Paciente en el dentista"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                className="object-cover object-top md:object-center rounded-br-[2rem] mask-image-gradient"
                style={{
                  WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                  maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
                }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" ref={servicesRef} className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="service-header flex items-end justify-between mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-[#133c3e]">Services</h2>
          <div className="hidden md:flex gap-4">
            <button aria-label="Previous services" className="w-12 h-12 rounded-full border border-[#133c3e]/20 flex items-center justify-center text-[#133c3e]/40 hover:border-[#133c3e] hover:text-[#133c3e] transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button aria-label="Next services" className="w-12 h-12 rounded-full border border-[#133c3e] flex items-center justify-center text-[#133c3e] hover:bg-[#133c3e] hover:text-white transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Palette, title: 'Estética', desc: 'Diseño de sonrisa personalizado.', details: 'Mejoramos la apariencia de tu sonrisa mediante carillas de porcelana, contorneado dental y tratamientos estéticos avanzados. Evaluamos tu estructura facial para diseñar una sonrisa que resalte tu belleza natural.' },
            { icon: Activity, title: 'Ortodoncia', desc: 'Alineación dental invisible.', details: 'Corregimos la posición de tus dientes utilizando alineadores transparentes de última generación o brackets estéticos. Un tratamiento cómodo, discreto y altamente efectivo para lograr una mordida perfecta.' },
            { icon: ShieldCheck, title: 'Implantes', desc: 'Reemplazo dental duradero.', details: 'Recupera la funcionalidad y estética de tu boca con implantes de titanio biocompatibles. Una solución permanente y segura para reemplazar piezas dentales perdidas, devolviéndote la confianza al sonreír y comer.' },
            { icon: Stethoscope, title: 'Urgencias', desc: 'Atención inmediata sin espera.', details: 'Dolor agudo, fracturas dentales o infecciones no pueden esperar. Contamos con un equipo preparado para brindarte alivio inmediato y solucionar tu problema dental con la mayor rapidez y profesionalismo.' },
            { icon: Sparkles, title: 'Blanqueamiento', desc: 'Sonrisa brillante en una sesión.', details: 'Aclara varios tonos el color de tus dientes de forma segura y sin dañar el esmalte. Utilizamos tecnología láser y geles blanqueadores de alta calidad para resultados visibles desde la primera sesión.' },
          ].map((service, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedService(service)}
              className="service-card bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-16">
                <div className="w-10 h-10 rounded-full bg-[#f4f4f0] flex items-center justify-center text-[#133c3e] group-hover:scale-110 group-hover:bg-[#82d6d6] transition-all duration-300">
                  <service.icon size={18} />
                </div>
                <ArrowUpRight size={20} className="text-[#133c3e]/40 group-hover:text-[#133c3e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <div className="mt-auto">
                <h3 className="font-heading text-2xl font-medium mb-3 text-[#133c3e]">{service.title}</h3>
                <p className="text-[#133c3e]/70 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl font-medium text-[#133c3e] mb-12 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {[
              { q: "¿Atienden urgencias sin turno previo?", a: "Sí, contamos con un sistema de atención prioritaria para urgencias dentales. Te recomendamos contactarnos por WhatsApp antes de venir para prepararnos." },
              { q: "¿Trabajan con obras sociales y prepagas?", a: "Aceptamos la mayoría de las obras sociales y prepagas del país. Al momento de agendar tu turno, indicanos cuál tenés para confirmarte la cobertura." },
              { q: "¿Ofrecen facilidades de pago para tratamientos largos?", a: "¡Por supuesto! Entendemos que tratamientos como ortodoncia o implantes son una inversión. Ofrecemos planes de pago en cuotas sin interés con tarjetas de crédito seleccionadas." },
            ].map((faq, i) => (
              <div key={i} className="bg-[#f4f4f0] p-6 rounded-2xl border border-[#133c3e]/10">
                <h3 className="font-heading text-xl font-medium text-[#133c3e] mb-2">{faq.q}</h3>
                <p className="text-[#133c3e]/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProfessionalBio />
      <Testimonials />
      <Pricing />
      <MapSection />
      <WhatsAppButton />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ServiceModal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        service={selectedService} 
        onBook={() => {
          setSelectedService(null);
          setIsModalOpen(true);
        }} 
      />

      {/* FINAL CTA SECTION */}
      <section ref={ctaRef} className="py-24 px-4 md:px-8">
        <div className="cta-content max-w-5xl mx-auto bg-[#82d6d6] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#133c3e] blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="font-heading text-4xl md:text-6xl font-medium text-[#133c3e] mb-6 leading-tight">
              Experimenta la odontología <br className="hidden md:block" /> de una forma diferente.
            </h2>
            <p className="text-[#133c3e]/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Únete a miles de pacientes felices que han transformado sus sonrisas con nuestro enfoque moderno y cómodo para el cuidado dental.
            </p>
            <button aria-haspopup="dialog" aria-expanded={isModalOpen} onClick={() => setIsModalOpen(true)} className="bg-[#133c3e] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#1a4f52] transition-transform hover:scale-105 active:scale-95 inline-flex items-center gap-2 shadow-xl shadow-[#133c3e]/20">
              Reserva tu turno hoy
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#133c3e] text-white/70 py-12 px-4 md:px-8 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading text-2xl tracking-widest font-light text-white">D E N T</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Smile Leslieville. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
