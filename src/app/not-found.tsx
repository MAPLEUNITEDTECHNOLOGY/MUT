import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060d1f] flex flex-col items-center justify-center p-6 text-center text-white relative overflow-hidden">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(224,16,48,0.08)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="relative z-10">
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-[#e01030] mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-black mb-8 text-white">System Endpoint Not Found</h2>
        <p className="text-white/60 mb-12 max-w-lg mx-auto font-medium">
          The structural asset or network layer you are looking for does not exist in this perimeter. It may have been disabled or relocated.
        </p>

        <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#e01030] to-[#b00c25] text-white hover:shadow-[0_0_24px_rgba(224,16,48,0.5)] hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest">
          Return to Infrastructure <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
