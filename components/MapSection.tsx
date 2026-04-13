export default function MapSection() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl font-medium text-[#133c3e] mb-12 text-center">Ubicación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#f4f4f0] p-8 rounded-3xl">
            <h3 className="font-heading text-2xl font-medium text-[#133c3e] mb-4">Smile Leslieville</h3>
            <p className="text-[#133c3e]/80 mb-2">Calle Falsa 123, Leslieville</p>
            <p className="text-[#133c3e]/80 mb-6">Estacionamiento gratuito disponible en la puerta.</p>
            <a href="https://maps.google.com" target="_blank" className="text-[#82d6d6] font-medium hover:underline">Cómo llegar</a>
          </div>
          <div className="w-full h-[300px] rounded-3xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzAwLjAiTiA3M8KwNTQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" 
              width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
