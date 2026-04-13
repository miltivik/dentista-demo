import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f4f4f0] text-[#133c3e] px-4 text-center">
      <h2 className="font-heading text-4xl font-medium mb-4">404 - Página no encontrada</h2>
      <p className="text-lg mb-8 opacity-80">Lo sentimos, no pudimos encontrar la página que buscas.</p>
      <Link href="/" className="bg-[#133c3e] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1a4f52] transition-colors">
        Volver al inicio
      </Link>
    </div>
  );
}
