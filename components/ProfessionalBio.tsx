import Image from 'next/image';

export default function ProfessionalBio() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-[#f4f4f0]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="relative w-full md:w-1/2 h-[400px] rounded-3xl overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop"
            alt="Dr. Professional"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="font-heading text-4xl font-medium text-[#133c3e] mb-4">Dr. Juan Pérez</h2>
          <p className="text-[#133c3e]/60 mb-6 uppercase tracking-widest text-sm">Odontólogo | Matrícula: 12345 | 15 años de experiencia</p>
          <p className="text-[#133c3e]/80 leading-relaxed">
            Especialista en transformar sonrisas con un enfoque humano y tecnología de vanguardia. 
            Mi compromiso es brindarte una atención personalizada, sin dolor y con resultados que superen tus expectativas.
          </p>
        </div>
      </div>
    </section>
  );
}
