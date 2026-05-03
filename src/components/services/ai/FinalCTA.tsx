'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import Link from 'next/link';
import { GridPattern } from '@/components/ui/GridPattern';

export default function FinalCTA() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  // Create a slight parallax effect for the background orb
  const orbX = useTransform(mouseXSpring, [-20, 20], [-50, 50]);
  const orbY = useTransform(mouseYSpring, [-20, 20], [-50, 50]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 40;
    const yPct = (mouseY / height - 0.5) * 40;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-40 bg-[#020617] relative overflow-hidden">
       {/* Seamless Top Curve from previous light section */}
       <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
         <svg className="relative block w-full h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
             <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-[#f8fafc] opacity-80" />
             <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" className="fill-[#f8fafc] opacity-50" />
             <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-[#f8fafc]" />
         </svg>
       </div>

       {/* Animated Beam at curve boundary */}
       <motion.div 
         initial={{ opacity: 0, x: "-100%" }}
         whileInView={{ opacity: 1, x: "100%" }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 5 }}
         className="absolute top-[40px] md:top-[80px] left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px] z-20 pointer-events-none opacity-50"
       />

       {/* Background Grid */}
       <GridPattern className="opacity-10" />
       
       {/* Dynamic Background Orb */}
       <motion.div 
         style={{ x: orbX, y: orbY }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen"
       />
       
       <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <span className="inline-block py-2 px-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-[11px] font-black tracking-[0.4em] uppercase text-cyan-400 mb-10 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
              Ready to Scale?
            </span>
            <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[1.1] uppercase">
              Engineer Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-cyan-500">Autonomous Future.</span>
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-20 leading-relaxed">
              Join the league of enterprises redefining efficiency with custom-architected intelligence.
            </p>
            <div className="flex flex-col items-center gap-12 relative z-20">
              <Link
                href="/contact"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="interactive group relative inline-block"
              >
                <motion.div
                  style={{ x: mouseXSpring, y: mouseYSpring }}
                  className="bg-white text-black px-16 py-6 md:px-20 md:py-8 rounded-full text-[13px] md:text-[15px] font-black tracking-[0.2em] uppercase transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_80px_rgba(34,211,238,0.4)] flex items-center justify-center gap-4"
                >
                  <span className="relative z-10 group-hover:text-cyan-600 transition-colors">Start the Strategy</span>
                  <svg className="w-5 h-5 text-black group-hover:text-cyan-600 transition-colors transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
                
                {/* Glow behind button */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full pointer-events-none -z-10" />
              </Link>
              
              <div className="flex items-center gap-4">
                <div className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-white/30" />
                <p className="text-cyan-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em]">
                  Limited Availability for Q3
                </p>
                <div className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-white/30" />
              </div>
            </div>
          </motion.div>
       </div>
    </section>
  );
}