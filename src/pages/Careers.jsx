import React, { useEffect } from 'react';
import { Square } from 'lucide-react';
import perksImage from '../assets/stefto_career_working.png';
import ctaImage from '../assets/stefto_business_growth.png';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-slate-50 min-h-screen pt-[60px] sm:pt-[70px] lg:pt-[80px]">
      
      {/* 1. Join The Family Section */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[900px]">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 lg:mb-10">
              Join the <span className="italic font-serif">Stefto Family</span>
            </h2>
            
            <div className="text-base sm:text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                At Stefto, we are digital innovators. We leverage the power of technology to solve the challenges 
                faced by our clients. We owe our success to our team of innovators and passionate problem 
                solvers. If you love working in a fast-paced environment with ample opportunities to advance your 
                career while helping customers amplify their success, then Stefto is the perfect choice for you. Join 
                our winning team to make a change in customer experience in finance.
              </p>
              <p>
                Browse available jobs. Cannot find something that fits you? Send us your resume and we will help 
                you find the right role for you on our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Perks Section */}
      <section className="w-full pt-10 pb-20 sm:pt-16 sm:pb-32 bg-[#fdfdfd] relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-0 sm:px-6 lg:px-8">
          
          <div className="relative flex flex-col lg:flex-row">
            
            {/* Left Image Area */}
            <div className="w-full lg:w-[45%] h-[400px] sm:h-[600px] relative">
              <img 
                src={perksImage} 
                alt="Man working on laptop" 
                className="w-full h-full object-cover object-center"
              />
              {/* Title Text positioned absolutely to span across image and background */}
              <div className="absolute top-6 sm:top-10 left-[50%] lg:left-[65%] z-30 whitespace-nowrap">
                <h2 className="text-[1rem] sm:text-xl lg:text-[22px] tracking-[0.25em] sm:tracking-[0.3em] text-black uppercase font-medium">
                  Perks of Working With Stefto
                </h2>
              </div>
            </div>

            {/* Right Overlapping White Card Area */}
            <div className="w-[95%] mx-auto lg:w-[50%] bg-white p-6 sm:p-10 shadow-[0_5px_40px_rgba(0,0,0,0.06)] relative mt-[-150px] lg:mt-[130px] lg:-ml-[8%] z-20">
              
              <ul className="flex flex-col">
                
                <li className="flex items-center justify-between border-b border-slate-100 py-6 sm:py-7 group cursor-pointer hover:bg-slate-50 transition-colors px-2 sm:px-4">
                  <span className="font-bold text-[11px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] text-black uppercase">
                    Handsome Remuneration
                  </span>
                  <Square size={14} strokeWidth={2} className="text-slate-600" />
                </li>

                <li className="flex items-center justify-between border-b border-slate-100 py-6 sm:py-7 group cursor-pointer hover:bg-slate-50 transition-colors px-2 sm:px-4">
                  <span className="font-bold text-[11px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] text-black uppercase">
                    Fun & Productive Team Building Activities
                  </span>
                  <Square size={14} strokeWidth={2} className="text-slate-600" />
                </li>

                <li className="flex items-center justify-between border-b border-slate-100 py-6 sm:py-7 group cursor-pointer hover:bg-slate-50 transition-colors px-2 sm:px-4">
                  <span className="font-bold text-[11px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] text-black uppercase">
                    Rewards & Recognition Programs
                  </span>
                  <Square size={14} strokeWidth={2} className="text-slate-600" />
                </li>

                <li className="flex items-center justify-between border-b border-slate-100 py-6 sm:py-7 group cursor-pointer hover:bg-slate-50 transition-colors px-2 sm:px-4">
                  <span className="font-bold text-[11px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] text-black uppercase">
                    Opportunities For All
                  </span>
                  <Square size={14} strokeWidth={2} className="text-slate-600" />
                </li>

                <li className="flex items-center justify-between border-b border-slate-100 py-6 sm:py-7 group cursor-pointer hover:bg-slate-50 transition-colors px-2 sm:px-4">
                  <span className="font-bold text-[11px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] text-black uppercase">
                    Employee Growth Plan
                  </span>
                  <Square size={14} strokeWidth={2} className="text-slate-600" />
                </li>

              </ul>
              
            </div>

          </div>
        </div>
      </section>

      {/* 3. Job Listings Section */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#2d3a4b] text-center tracking-tight mb-2">
              Choose a career with Stefto and <span className="italic text-[#374151]">let's grow together!</span>
            </h2>
            <div className="w-full flex justify-end mt-4">
              <div className="w-[150px] lg:w-[300px] h-[1px] bg-orange-300"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Job 1 */}
            <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
              <div>
                <p className="text-[#f59e0b] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-4">OPERATION</p>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">Voice (Sales)</h3>
                <p className="text-[#475569] text-sm font-medium">Gurgaon, Noida</p>
              </div>
              <button className="bg-[#344458] text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-[#1e293b] transition-colors flex items-center group">
                APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Job 2 */}
            <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
              <div>
                <p className="text-[#f59e0b] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-4">OPERATION</p>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">Voice (Recovery)</h3>
                <p className="text-[#475569] text-sm font-medium">Gurgaon, Noida, Delhi</p>
              </div>
              <button className="bg-[#344458] text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-[#1e293b] transition-colors flex items-center group">
                APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Job 3 */}
            <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
              <div>
                <p className="text-[#f59e0b] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-4">OPERATION</p>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">A.M (Sales)</h3>
                <p className="text-[#475569] text-sm font-medium">Gurgaon, Noida, Delhi</p>
              </div>
              <button className="bg-[#344458] text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-[#1e293b] transition-colors flex items-center group">
                APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Job 4 */}
            <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
              <div>
                <p className="text-[#f59e0b] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-4">OPERATION</p>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">A.M (Recovery)</h3>
                <p className="text-[#475569] text-sm font-medium">Gurgaon</p>
              </div>
              <button className="bg-[#344458] text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-[#1e293b] transition-colors flex items-center group">
                APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            
            {/* Job 5 */}
            <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
              <div>
                <p className="text-[#f59e0b] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-4">HCM</p>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">H.R (Hiring)</h3>
                <p className="text-[#475569] text-sm font-medium">Gurgaon, Noida, Delhi</p>
              </div>
              <button className="bg-[#344458] text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-[#1e293b] transition-colors flex items-center group">
                APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Job 6 */}
            <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
              <div>
                <p className="text-[#f59e0b] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-4">TRAINING</p>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">Trainer (Sales)</h3>
                <p className="text-[#475569] text-sm font-medium">Gurgaon, Noida, Delhi</p>
              </div>
              <button className="bg-[#344458] text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-[#1e293b] transition-colors flex items-center group">
                APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Job 7 */}
            <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
              <div>
                <p className="text-[#f59e0b] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-4">OPERATION</p>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">M.I.S</h3>
                <p className="text-[#475569] text-sm font-medium">Gurgaon, Noida, Delhi</p>
              </div>
              <button className="bg-[#344458] text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-[#1e293b] transition-colors flex items-center group">
                APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Job 8 */}
            <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
              <div>
                <p className="text-[#f59e0b] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-4">OPERATION</p>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">Manager (Recovery)</h3>
                <p className="text-[#475569] text-sm font-medium">Gurgaon, Noida, Delhi</p>
              </div>
              <button className="bg-[#344458] text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-[#1e293b] transition-colors flex items-center group">
                APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Job Alerts Section */}
      <section className="w-full py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            
            {/* Left Image Area (matching the broken image reference in screenshot) */}
            <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100 rounded-lg">
              <div className="flex items-center gap-2">
                <Square size={20} className="opacity-50" />
                <span className="text-sm font-medium">05-services3.jpg</span>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="w-full md:w-1/2 flex flex-col">
              <p className="text-[#f59e0b] text-sm font-medium tracking-wide uppercase mb-4">
                JOB ALERTS
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#2d3a4b] font-bold mb-6">
                Get notified of new openings
              </h2>
              <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-8">
                Stay ahead in your career by subscribing to our job alerts! Receive timely 
                notifications about new job openings, ensuring you're the first to know about 
                exciting opportunities. Don't miss out on your dream job - sign up today to 
                stay informed and take the next step in your professional journey
              </p>
              <button className="bg-[#344458] text-white tracking-[0.15em] font-semibold py-3 sm:py-4 px-8 w-fit hover:bg-[#1e293b] transition-colors text-xs sm:text-sm">
                REGISTER NOW
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA Banner Section */}
      <section 
        className="w-full relative py-20 sm:py-32 lg:py-40"
        style={{
          backgroundImage: `url(${ctaImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
        <div className="max-w-[1000px] mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 mb-6 lg:mb-8 tracking-tight">
            Here to Help Your <span className="italic font-serif">Every Business Need.</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-900 font-medium leading-relaxed mb-10 lg:mb-12 max-w-3xl">
            Through financial clarity, we provide you with the financial confidence you need to achieve.<br className="hidden sm:block" />
            And, that's just the beginning.
          </p>
          <button className="bg-[#12315a] hover:bg-[#0b1f3c] transition-colors text-white font-semibold py-3 sm:py-4 px-8 text-sm sm:text-base tracking-wide shadow-xl rounded-sm">
            Get a Free Quote
          </button>
        </div>
      </section>

    </main>
  );
};

export default Careers;
