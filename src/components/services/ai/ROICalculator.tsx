'use client';
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, animate } from 'motion/react';

// Custom Animated Counter Component
function AnimatedCounter({ value, prefix = "", suffix = "", decimals = 0 }: { value: number, prefix?: string, suffix?: string, decimals?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  // Store previous value to animate from
  const prevValueRef = useRef(0);

  useEffect(() => {
    const node = nodeRef.current;
    if (node) {
      const controls = animate(prevValueRef.current, value, {
        duration: 1,
        ease: "easeOut",
        onUpdate(v) {
          node.textContent = `${prefix}${v.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`;
        }
      });
      prevValueRef.current = value;
      return controls.stop;
    }
  }, [value, prefix, suffix, decimals]);

  return <span ref={nodeRef} />;
}

// Custom Premium Slider Component
function PremiumSlider({ label, value, min, max, onChange, prefix = "", suffix = "", step = 1 }: any) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-end">
        <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{label}</label>
        <span className="text-white font-black text-lg">{prefix}{value.toLocaleString()}{suffix}</span>
      </div>
      <div className="relative h-2 bg-white/10 rounded-full group cursor-pointer">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-400 to-[#e01030] rounded-full transition-all duration-150 ease-out"
          style={{ width: `${percentage}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(224,16,48,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
          style={{ left: `calc(${percentage}% - 8px)` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default function ROICalculator() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scale and round corners to create a smooth transition from light section to dark section
  const sectionScale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.85, 1, 1, 0.85]);
  const sectionRadius = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["4rem", "0rem", "0rem", "4rem"]);

  // Input States
  const [employees, setEmployees] = useState(250);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [hoursSaved, setHoursSaved] = useState(15);

  const [initialInvestment, setInitialInvestment] = useState(75000);
  const [monthlyCost, setMonthlyCost] = useState(5000);

  // Core Calculations
  const stats = useMemo(() => {
    const annualSavings = employees * hourlyRate * hoursSaved * 52;
    const annualCost = initialInvestment + (monthlyCost * 12);
    const netAnnualBenefit = annualSavings - annualCost;

    const roiPercentage = annualCost > 0 ? (netAnnualBenefit / annualCost) * 100 : 0;

    const monthlySavings = annualSavings / 12;
    const netMonthlySavings = monthlySavings - monthlyCost;

    let paybackMonths = 0;
    if (netMonthlySavings > 0) {
      paybackMonths = initialInvestment / netMonthlySavings;
    } else {
      paybackMonths = 999;
    }

    return { annualSavings, annualCost, netAnnualBenefit, roiPercentage, paybackMonths };
  }, [employees, hourlyRate, hoursSaved, initialInvestment, monthlyCost]);

  // Chart Generation
  const svgWidth = 600;
  const svgHeight = 200;

  const chartPoints = useMemo(() => {
    const points = [];
    let min = -initialInvestment;
    let max = -initialInvestment;

    for (let m = 0; m <= 12; m++) {
      const netMonthlySavings = (employees * hourlyRate * hoursSaved * 52 / 12) - monthlyCost;
      const val = -initialInvestment + (netMonthlySavings * m);
      points.push(val);
      if (val < min) min = val;
      if (val > max) max = val;
    }
    return { points, min, max };
  }, [initialInvestment, monthlyCost, employees, hourlyRate, hoursSaved]);

  const rangeY = chartPoints.max - chartPoints.min;
  const pathD = chartPoints.points.map((val, idx) => {
    const x = (idx / 12) * svgWidth;
    const normalizedY = rangeY === 0 ? 0.5 : (val - chartPoints.min) / rangeY;
    const y = svgHeight - (normalizedY * svgHeight);
    return `${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  const zeroY = rangeY === 0 ? svgHeight / 2 : svgHeight - ((0 - chartPoints.min) / rangeY * svgHeight);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full bg-[#F8FAFC] flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ scale: sectionScale, borderRadius: sectionRadius }}
        className="w-full h-full max-w-[100vw] mx-auto bg-[#020617] text-white flex flex-col items-center justify-center relative overflow-hidden shadow-2xl"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 h-full max-h-[90vh] items-center z-10">

          {/* Left: Inputs */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full space-y-10">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-red-500 mb-4 block">Interactive Model</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
                Calculate Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">True Upside.</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-white/10 pb-2">Operational Impact</h3>
                <PremiumSlider label="Workforce Size" value={employees} min={1} max={1000} step={1} onChange={setEmployees} />
                <PremiumSlider label="Avg. Hourly Rate" value={hourlyRate} min={20} max={150} step={5} prefix="$" onChange={setHourlyRate} />
                <PremiumSlider label="Hours Saved / Wk" value={hoursSaved} min={1} max={50} step={1} suffix="h" onChange={setHoursSaved} />
              </div>

              <div className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-white/10 pb-2">Investment Model</h3>
                <PremiumSlider label="Initial Setup Cost" value={initialInvestment} min={10000} max={500000} step={5000} prefix="$" onChange={setInitialInvestment} />
                <PremiumSlider label="Monthly Platform Cost" value={monthlyCost} min={1000} max={50000} step={1000} prefix="$" onChange={setMonthlyCost} />
              </div>
            </div>
          </div>

          {/* Right: Visualization & Output */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full">
            <div className="bg-white/[0.02] border border-white/10 backdrop-blur-3xl rounded-[2.5rem] p-10 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">

              {/* Top Metrics Grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 mb-12">
                <div>
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest block mb-2">Net Annual Benefit</span>
                  <div className="text-2xl md:text-3xl xl:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 tracking-tighter tabular-nums leading-none">
                    <AnimatedCounter value={stats.netAnnualBenefit} prefix="$" />
                  </div>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest block mb-2">Projected ROI</span>
                  <div className="text-2xl md:text-3xl xl:text-4xl font-black text-white tracking-tighter tabular-nums leading-none">
                    <AnimatedCounter value={stats.roiPercentage} suffix="%" />
                  </div>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest block mb-2">Payback Period</span>
                  <div className="text-xl md:text-2xl xl:text-3xl font-bold text-white tracking-tighter tabular-nums leading-none">
                    {stats.paybackMonths > 120 ? (
                      "> 10 Years"
                    ) : (
                      <><AnimatedCounter value={stats.paybackMonths} decimals={1} /> <span className="text-xs md:text-sm text-slate-500 font-medium">Months</span></>
                    )}
                  </div>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest block mb-2">Total Annual Cost</span>
                  <div className="text-xl md:text-2xl xl:text-3xl font-bold text-slate-300 tracking-tighter tabular-nums leading-none">
                    <AnimatedCounter value={stats.annualCost} prefix="$" />
                  </div>
                </div>
              </div>

              {/* 12-Month Trajectory Chart */}
              <div className="w-full relative border-t border-white/10 pt-8 mt-4">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">12-Month Trajectory</span>
                  <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full">Breakeven Analysis</span>
                </div>

                <div className="h-48 w-full relative">
                  <svg width="100%" height="100%" viewBox={`0 0 ${svgWidth} ${svgHeight}`} preserveAspectRatio="none" className="overflow-visible">
                    {/* Zero line (Breakeven) */}
                    {zeroY >= 0 && zeroY <= svgHeight && (
                      <motion.line
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        x1="0" y1={zeroY} x2={svgWidth} y2={zeroY}
                        stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="6 6"
                      />
                    )}

                    <motion.path
                      d={pathD}
                      fill="none"
                      stroke="url(#chartGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Axis Labels */}
                  <div className="absolute top-0 -left-4 text-[10px] text-slate-600 font-bold -translate-x-full">
                    ${(chartPoints.max / 1000).toFixed(0)}k
                  </div>
                  <div className="absolute bottom-0 -left-4 text-[10px] text-slate-600 font-bold -translate-x-full">
                    ${(chartPoints.min / 1000).toFixed(0)}k
                  </div>
                  <div className="absolute -bottom-6 left-0 text-[10px] text-slate-600 font-bold">Month 0</div>
                  <div className="absolute -bottom-6 right-0 text-[10px] text-slate-600 font-bold">Month 12</div>
                </div>
              </div>

            </div>

            <button className="interactive mt-8 w-full py-5 bg-white text-[#020617] font-black tracking-[0.2em] uppercase rounded-2xl hover:bg-slate-200 transition-all active:scale-[0.98] text-[12px]">
              Download Full Technical Assessment
            </button>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

