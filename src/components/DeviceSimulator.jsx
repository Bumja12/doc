import React, { useState, useEffect } from 'react';
import { Wifi, BatteryFull, SignalHigh } from 'lucide-react';

export default function DeviceSimulator({ model, children }) {
  const [time, setTime] = useState('09:41');

  useEffect(() => {
    // Optionally update time to real time, but 09:41 is classic Apple mockup time
    // We'll keep it static for consistent mockups, or update it:
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(interval);
  }, []);
  // Device definitions
  const devices = {
    'iphone-8-plus': {
      // Scale: 1mm = ~6.044px (based on 736px screen height / 121.76mm)
      // Height: 158.4mm * 6.044 = 956px
      // Top/Bottom bezel: 18.3mm * 6.044 = ~110px
      // Visual side bezel: Adjusted from mathematical 29px to a realistic 14px 
      width: 442, height: 956, radius: 48, border: 6,
      frameClass: 'bg-white', screenClass: 'h-[736px] w-[414px] mx-auto bg-white relative mt-[110px]',
      outerClass: 'rounded-[48px]',
      renderBezels: () => (
        <>
          <div className="absolute top-0 w-full h-[110px] bg-slate-900 z-20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-black absolute left-1/2 -ml-16 border border-slate-700"></div>
            <div className="w-16 h-1.5 rounded-full bg-slate-800 border border-slate-700"></div>
          </div>
          <div className="absolute bottom-0 w-full h-[110px] bg-slate-900 z-20 flex items-center justify-center">
            <div className="w-[64px] h-[64px] rounded-full border-[3px] border-slate-700 shadow-inner"></div>
          </div>
        </>
      ),
      contentPadding: 'pt-6'
    },
    'iphone-12-pro': {
      // Viewport: 428 x 926
      // Border: 12px all around
      width: 452, height: 950, radius: 48, border: 12,
      frameClass: 'bg-white', screenClass: 'w-[428px] h-[926px] mx-auto bg-white relative',
      outerClass: 'rounded-[48px]',
      renderBezels: () => (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160px] h-[30px] bg-slate-900 rounded-b-3xl z-20 shadow-sm"></div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-slate-200 rounded-full z-20 mix-blend-difference"></div>
        </>
      ),
      contentPadding: 'pt-12 pb-8'
    },
    'iphone-17-pro': {
      // Viewport: 430 x 932
      // Border: 10px (thinner bezels)
      width: 450, height: 952, radius: 52, border: 10,
      frameClass: 'bg-white', screenClass: 'w-[430px] h-[932px] mx-auto bg-white relative',
      outerClass: 'rounded-[52px]',
      renderBezels: () => (
        <>
          <div className="absolute top-[11px] left-1/2 -translate-x-1/2 w-[120px] h-[36px] bg-slate-900 rounded-full z-20 flex items-center justify-end px-3 shadow-md">
            <div className="w-3 h-3 rounded-full bg-black shadow-inner border border-white/10"></div>
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-slate-200 rounded-full z-20 mix-blend-difference"></div>
        </>
      ),
      contentPadding: 'pt-16 pb-8'
    },
    'galaxy-s25-ultra-gesture': {
      // Viewport: 412 x 915
      // Border: 8px (very sharp corners)
      width: 428, height: 931, radius: 8, border: 8,
      frameClass: 'bg-white', screenClass: 'w-[412px] h-[915px] mx-auto bg-white relative',
      outerClass: 'rounded-[12px]',
      renderBezels: () => (
        <>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-20 border-2 border-slate-900 shadow-inner"></div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-slate-900/30 rounded-full z-20 mix-blend-difference"></div>
        </>
      ),
      contentPadding: 'pt-10 pb-8'
    },
    'galaxy-s25-ultra-buttons': {
      width: 428, height: 931, radius: 8, border: 8,
      frameClass: 'bg-white', screenClass: 'w-[412px] h-[915px] mx-auto bg-white relative pb-[48px]',
      outerClass: 'rounded-[12px]',
      renderBezels: () => (
        <>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-20 border-2 border-slate-900 shadow-inner"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[412px] h-[48px] bg-white border-t border-slate-200 z-20 flex items-center justify-around px-10">
            <div className="w-5 h-5 flex items-center justify-center"><div className="w-4 h-4 border-[2.5px] border-slate-500 rounded-sm"></div></div>
            <div className="w-5 h-5 flex items-center justify-center"><div className="w-5 h-5 bg-slate-500 rounded-full"></div></div>
            <div className="w-5 h-5 flex items-center justify-center"><div className="w-0 h-0 border-t-[7px] border-t-transparent border-r-[10px] border-r-slate-500 border-b-[7px] border-b-transparent"></div></div>
          </div>
        </>
      ),
      contentPadding: 'pt-10'
    },
    'galaxy-fold-7-gesture': {
      // Viewport: 840 x 960 (approx 7:8 ratio inner screen)
      // Border: 10px
      width: 860, height: 980, radius: 24, border: 10,
      frameClass: 'bg-white', screenClass: 'w-[840px] h-[960px] mx-auto bg-white relative',
      outerClass: 'rounded-[24px]',
      renderBezels: () => (
        <>
          <div className="absolute top-4 right-[25%] w-4 h-4 bg-black rounded-full z-20 border-2 border-slate-900 opacity-60"></div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-slate-900/30 rounded-full z-20 mix-blend-difference"></div>
        </>
      ),
      contentPadding: 'pt-10 pb-8'
    },
    'galaxy-fold-7-buttons': {
      width: 860, height: 980, radius: 24, border: 10,
      frameClass: 'bg-white', screenClass: 'w-[840px] h-[960px] mx-auto bg-white relative pb-[48px]',
      outerClass: 'rounded-[24px]',
      renderBezels: () => (
        <>
          <div className="absolute top-4 right-[25%] w-4 h-4 bg-black rounded-full z-20 border-2 border-slate-900 opacity-60"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[840px] h-[48px] bg-white border-t border-slate-200 z-20 flex items-center justify-around px-[30%]">
            <div className="w-5 h-5 flex items-center justify-center"><div className="w-4 h-4 border-[2.5px] border-slate-500 rounded-sm"></div></div>
            <div className="w-5 h-5 flex items-center justify-center"><div className="w-5 h-5 bg-slate-500 rounded-full"></div></div>
            <div className="w-5 h-5 flex items-center justify-center"><div className="w-0 h-0 border-t-[7px] border-t-transparent border-r-[10px] border-r-slate-500 border-b-[7px] border-b-transparent"></div></div>
          </div>
        </>
      ),
      contentPadding: 'pt-10'
    }
  };

  const current = devices[model] || devices['iphone-17-pro'];

  // Smart Status Bar Layout
  const renderStatusBar = () => {
    const isClassicIphone = model === 'iphone-8-plus';
    const isModernIphone = model.includes('iphone-12') || model.includes('iphone-17');
    const isAndroid = model.includes('galaxy');

    if (isClassicIphone) {
      return (
        <div className="absolute top-0 w-full h-[24px] px-3 flex justify-between items-center text-[13px] font-semibold text-slate-800 z-30 mix-blend-multiply pointer-events-none mt-1">
          <div className="flex gap-1.5 items-center justify-start w-1/3 h-full">
            <SignalHigh size={16} strokeWidth={2.5} />
            <span className="mb-[1px]">KT</span>
            <Wifi size={16} strokeWidth={2.5} />
          </div>
          <div className="w-1/3 flex items-center justify-center h-full">{time}</div>
          <div className="flex gap-1.5 items-center justify-end w-1/3 h-full">
            <span className="mb-[1px]">100%</span>
            <BatteryFull size={22} strokeWidth={2} className="rotate-90" />
          </div>
        </div>
      );
    }

    if (isModernIphone) {
      return (
        <div className="absolute top-0 w-full h-[54px] px-8 flex justify-between items-center text-[17px] font-bold tracking-wide text-slate-800 z-30 mix-blend-multiply pointer-events-none">
          <div className="w-1/3 flex items-center justify-start h-full pl-2">
            <span className="mt-[2px]">{time}</span>
          </div>
          <div className="w-1/3"></div> {/* Notch/Island space */}
          <div className="flex gap-2 items-center justify-end w-1/3 h-full pr-1">
            <SignalHigh size={20} strokeWidth={2.5} />
            <Wifi size={20} strokeWidth={2.5} />
            <BatteryFull size={26} strokeWidth={2} />
          </div>
        </div>
      );
    }

    if (isAndroid) {
      return (
        <div className="absolute top-0 w-full h-[40px] px-6 mt-1 flex justify-between items-center text-[15px] font-bold text-slate-800 z-30 mix-blend-multiply pointer-events-none">
          <div className="w-1/3 flex items-center justify-start h-full">
            <span className="mt-[1px]">{time}</span>
          </div>
          <div className="w-1/3"></div> {/* Punch hole space */}
          <div className="flex gap-2 items-center justify-end w-1/3 h-full">
            <Wifi size={18} strokeWidth={2.5} />
            <SignalHigh size={18} strokeWidth={2.5} />
            <span className="text-[14px] mt-[1px]">100%</span>
            <BatteryFull size={22} strokeWidth={2} />
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div 
      className={`shadow-2xl overflow-hidden relative transition-all duration-500 ease-in-out border-slate-900 bg-slate-900 ${current.outerClass}`}
      style={{
        width: current.width,
        height: current.height,
        borderWidth: current.border,
      }}
    >
      {current.renderBezels()}
      <div className={`${current.screenClass} ${current.contentPadding} overflow-hidden`}>
        {renderStatusBar()}
        {children}
      </div>
    </div>
  );
}
