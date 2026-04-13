export default function Pricing() {
  const services = [
    { name: "Estética", price: "$150" },
    { name: "Ortodoncia", price: "$300" },
    { name: "Implantes", price: "$800" },
    { name: "Urgencias", price: "$100" },
    { name: "Blanqueamiento", price: "$200" }
  ];

  return (
    <section id="pricing" className="py-20 px-4 md:px-8 bg-[#f4f4f0]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-4xl font-medium text-[#133c3e] mb-12 text-center">Precios orientativos</h2>
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          {services.map((s, i) => (
            <div key={i} className="flex justify-between py-4 border-b border-[#133c3e]/10 last:border-0">
              <span className="font-heading text-lg text-[#133c3e]">{s.name}</span>
              <span className="font-medium text-[#133c3e]">{s.price}</span>
            </div>
          ))}
          <p className="text-sm text-[#133c3e]/60 mt-6 text-center">* Los precios son orientativos y pueden variar según el diagnóstico profesional.</p>
        </div>
      </div>
    </section>
  );
}
