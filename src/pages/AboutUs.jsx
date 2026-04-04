import React, { useEffect } from 'react';
import { Target, Eye, Rocket, CheckCircle2, Shield, Zap, TrendingUp, Users, Cpu, FileAudio, ListOrdered, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ValueCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
    <div className="w-14 h-14 bg-blue-50 text-[#1a237e] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon size={28} strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-bold text-[#041434] mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed font-light flex-1">{desc}</p>
  </div>
);

const TimelineItem = ({ year, title, desc }) => (
  <div className="flex gap-6 relative pb-12 last:pb-0">
    <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-[#3b82f6] to-transparent"></div>
    <div className="relative z-10 w-6 h-6 rounded-full bg-white border-4 border-[#3b82f6] shadow-[0_0_15px_rgba(59,130,246,0.4)] flex-shrink-0 mt-1"></div>
    <div>
      <span className="text-[#3b82f6] font-extrabold text-xl mb-1 block">{year}</span>
      <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
      <p className="text-slate-300 leading-relaxed font-light">{desc}</p>
    </div>
  </div>
);

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-slate-50 min-h-screen pt-[60px] sm:pt-[70px] lg:pt-[80px] overflow-x-hidden">
      
      {/* Our Story Section (Screenshot 1 & 2 integration) */}
      <section className="w-full py-20 bg-white border-b border-slate-100">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#041434] mb-4">Our Story</h2>
          <p className="text-xl text-slate-600 mb-10 font-medium">We provide industry-leading services designed to achieve your objectives.</p>
          
          <div className="bg-slate-50 p-8 sm:p-12 rounded-2xl shadow-sm text-left border border-slate-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#041434] leading-tight mb-6">
              <span className="text-[#3b82f6]">Incorporated in August 2006</span>, Stefto has been a leading provider of knowledge process outsourcing (KPO) services to banks and financial institutions for over 17 years.
            </h3>
            <p className="text-lg font-semibold text-slate-700 mb-6 border-l-4 border-[#3b82f6] pl-4">
              Currently Operating in Gurugram, Delhi, Noida & Pune
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
              We are committed to helping our clients grow their business by providing world-class, cost-efficient services with excellent quality of work. Our tech-driven approach, combined with AI-enabled services, ensures consistent performance that goes beyond client expectations.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Sub-intro (Screenshot 5) */}
      <section className="w-full py-16 bg-white relative z-20">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#3b82f6] font-semibold text-sm mb-4 tracking-wide uppercase">
            Stefto People. Process. Performance.
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041434] mb-6">About us</h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light text-left sm:text-center">
            We are India's fastest-growing Business Process Management (BPM) company, driven by a single mission: to astonish our clients by exceeding expectations. Leveraging digital empowerment, we aim for extraordinary results and meaningful partnerships. Our focus is on crafting exceptional customer experiences while helping our clients achieve their unique business objectives.
          </p>
        </div>
      </section>



      {/* Mission, Vision, Goals */}
      <section className="w-full py-16 bg-white relative z-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 rounded-2xl bg-white">
            <div className="p-8 sm:p-10 border border-slate-100 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-50 text-[#3b82f6] rounded-full flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold text-[#041434] mb-4">Goals</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                We tackle our clients' most difficult problems by offering exceptional services in strategy, consulting, digital, technology, and operations. Our goal is to drive innovation that enhances both the way the world operates and the quality of life.
              </p>
            </div>
            
            <div className="p-8 sm:p-10 border border-slate-100 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-indigo-50 text-[#1a237e] rounded-full flex items-center justify-center mb-6">
                <Rocket size={32} />
              </div>
              <h2 className="text-2xl font-bold text-[#041434] mb-4">Mission</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                To shape the future of the Business Process Management industry by pioneering transformational technologies and capabilities. We strive to stay ahead of the curve to drive growth for our customers, deliver value to investors, and enrich overall experiences.
              </p>
            </div>
            
            <div className="p-8 sm:p-10 border border-slate-100 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h2 className="text-2xl font-bold text-[#041434] mb-4">Vision</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Our aim is to lead in the markets we target and be recognized as the most trusted partner by our global clients. We will achieve this by streamlining complex business processes with advanced technology and top-notch industry practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Stefto Story & Timeline */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative z-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="flex-1 lg:max-w-xl">
              <div className="inline-block px-3 py-1 rounded-full bg-[#1a237e]/10 text-[#1a237e] font-semibold text-sm mb-4 tracking-wide">
                OUR HISTORY & ESTABLISHMENT
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#041434] mb-6 leading-tight">
                Over a decade of driving <br className="hidden lg:block"/>
                <span className="text-[#3b82f6]">transformational change.</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-loose mb-6">
                Founded in August 2007, Stefto has been delivering knowledge process outsourcing services to banks and financial institutions for over 14 years. Our team of over <strong className="text-[#041434]">2000 skilled professionals</strong> comes from various backgrounds, allowing us to provide top-notch inbound and outbound services. 
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-loose mb-10">
                We have robust field support with our presence in more than 4 locations across 8 centres in India, with our Headquarters in Gurugram, Haryana.
              </p>

              <div className="space-y-6">
                {/* Block 1 */}
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group hover:border-[#3b82f6] transition-all">
                  <div className="absolute top-0 right-0 bg-[#3b82f6] text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                    Experience Excellence
                  </div>
                  <h3 className="text-xl font-bold text-[#041434] mb-3 pr-20">Digitally Empowered Customer Interaction</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Our people have the social, emotional, and problem-solving skills to handle the complex issues that customers can't solve through digital self-service.
                  </p>
                </div>

                {/* Block 2 */}
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group hover:border-[#3b82f6] transition-all">
                  <div className="absolute top-0 right-0 bg-[#3b82f6] text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                    Experience Excellence
                  </div>
                  <h3 className="text-xl font-bold text-[#041434] mb-3 pr-20">Intelligent Back-Office</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We outperform internal teams through continuous performance measurement, rigorous quality control and industry-specific knowledge.
                  </p>
                </div>

                {/* Block 3 */}
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group hover:border-[#3b82f6] transition-all">
                  <div className="absolute top-0 right-0 bg-[#3b82f6] text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                    Experience Excellence
                  </div>
                  <h3 className="text-xl font-bold text-[#041434] mb-3 pr-20">Automated HR Services</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Servicing multiple locations and employing best-in-class technology helps our clients embrace flexibility, maximise efficiency and maintain compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Timeline Box */}
            <div className="flex-1 w-full relative">
              <div className="sticky top-24">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#041434] to-[#1a237e] rounded-3xl transform rotate-2 hidden lg:block opacity-75"></div>
                <div className="bg-[#042044] rounded-3xl p-8 sm:p-12 shadow-2xl relative z-10 w-full h-auto">
                  <h3 className="text-2xl font-bold text-white mb-10 pb-4 border-b border-white/10 uppercase tracking-widest">
                    Our Timeline
                  </h3>
                  
                  <TimelineItem 
                    year="August 2007" 
                    title="Company Establishment" 
                    desc="Founded as IMS, delivering knowledge process outsourcing services for banks and financial institutions."
                  />
                  <TimelineItem 
                    year="2021" 
                    title="Creditklick Launch" 
                    desc="Launched in 2022, Creditklick is our flagship financial platform dedicated to fulfilling diverse financial needs like Credit Cards, Loans, and Credit Refine."
                  />
                  <TimelineItem 
                    year="December 2023" 
                    title="Rebranding to Stefto" 
                    desc="We underwent a significant transformation, rebranding IMS to Stefto. Reflects our evolution and commitment to providing innovative solutions."
                  />
                  <TimelineItem 
                    year="2024" 
                    title="LAUNCH finance Application" 
                    desc="In 2024, we launched the Creditklick App for a more seamless and tailored user experience (Credit Cards, Loans, Credit Refine)."
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services & Offerings (Screenshot 3 & 4 data) */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#041434] mb-4">Services Offered</h2>
            <p className="text-slate-500 text-lg">
              We offer a comprehensive range of services designed to enhance customer engagement, drive sales, and optimize business operations. Our expertise includes:
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* List */}
            <div className="flex-1 w-full space-y-4">
               {[
                 { title: "Specialty Help Desk", desc: "for efficient customer support." },
                 { title: "Inbound Sales & Upsell/Cross-sell", desc: "to maximize revenue." },
                 { title: "Retention and Recovery Services", desc: "to strengthen customer relationships." },
                 { title: "Collections and Direct Sales", desc: "for improved financial performance." },
                 { title: "Lead Generation and Onboarding", desc: "to accelerate business growth." },
                 { title: "Health Check & Retention Calling", desc: "to ensure customer satisfaction." },
                 { title: "Persistency & Reconciliation", desc: "for operational accuracy." },
                 { title: "Book Entry, Survey Form Entry, and Subscription", desc: "Management for seamless data processing." }
               ].map((item, idx) => (
                 <div key={idx} className="flex items-start gap-4">
                   <div className="mt-1 w-2 h-2 rounded-full bg-[#3b82f6] flex-shrink-0"></div>
                   <p className="text-slate-700">
                     <span className="font-bold text-[#1a237e]">{item.title}</span> {item.desc}
                   </p>
                 </div>
               ))}
            </div>

            {/* Subtext Card Block */}
            <div className="flex-1 w-full">
              <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100 flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 bg-blue-50 text-[#3b82f6] rounded-full flex items-center justify-center mb-6">
                  <Users size={40} />
                </div>
                <p className="text-lg sm:text-xl font-medium text-[#041434] leading-relaxed">
                  Our solutions are designed to deliver excellence through <span className="text-[#3b82f6] font-bold">AI-driven insights</span>, <span className="text-[#3b82f6] font-bold">technology-led processes</span>, and a <span className="text-[#3b82f6] font-bold">customer-centric approach</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#041434]">Technology</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* AICapture 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-[#3b82f6] mb-6 flex items-center gap-3">
                <Cpu size={24} />
                AICapture 1
              </h3>
              <ul className="space-y-4">
                {[
                  "Queue Management",
                  "Speech Analytics",
                  "Lead Prioritization",
                  "A.I. Led Quality Audit"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 size={18} className="text-[#1a237e]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* TechCapture 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-[#3b82f6] mb-6 flex items-center gap-3">
                <FileAudio size={24} />
                TechCapture 1
              </h3>
              <ul className="space-y-4">
                {[
                  "Omnichannel",
                  "Dialer",
                  "Calling App",
                  "Training & Performance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 size={18} className="text-[#1a237e]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ASSCapture */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-[#3b82f6] mb-6 flex items-center gap-3">
                <Users size={24} />
                ASSCapture
              </h3>
              <ul className="space-y-4">
                {[
                  "9 Languages",
                  "4 Cities",
                  "Office & Remote"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 size={18} className="text-[#1a237e]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Our Partner Section */}
      <section className="w-full py-16 bg-white border-t border-slate-100 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#041434]">Our Partner</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {[
              "BAJAJ", "CASHE", "HINDUJA", "ZEST", 
              "YES BANK", "IDFC", "AU", "TATA", "PAYTM"
            ].map((partner, index) => (
              <div key={index} className="px-6 py-4 bg-slate-50 border border-slate-200 rounded-lg shadow-sm flex items-center justify-center min-w-[140px] hover:border-[#3b82f6] hover:shadow-md transition-all duration-300">
                <span className="text-lg sm:text-xl font-black text-slate-400 tracking-wider uppercase">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041434] mb-6">What we value</h2>
            <p className="text-slate-500 text-lg sm:text-xl">
              These core principles shape our culture, guide our interactions, and form the foundation of our operations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ValueCard 
              icon={Shield} 
              title="Professionalism" 
              desc="At our core, we uphold the highest standards of professionalism, ensuring every interaction reflects our commitment to excellence."
            />
            <ValueCard 
              icon={TrendingUp} 
              title="Empowerment" 
              desc="We celebrate the individual journey of growth and success, fostering an environment where personal achievements are recognized and valued."
            />
            <ValueCard 
              icon={Users} 
              title="Solidarity" 
              desc="Our emphasis on solidarity creates a cohesive community, where collaboration and communication thrive to achieve common goals."
            />
            <ValueCard 
              icon={CheckCircle2} 
              title="Authenticity" 
              desc="Transparency and honesty form the foundation of our operations. We believe in the power of authenticity to build trust and credibility."
            />
            <ValueCard 
              icon={Zap} 
              title="Vibrancy" 
              desc="Infusing energy and enthusiasm into everything we do, our vibrant culture sparks creativity and innovation, driving dynamic solutions."
            />
             <div className="bg-[#1a237e] rounded-xl p-8 flex flex-col justify-center text-center text-white relative overflow-hidden shadow-xl">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
               <h3 className="text-2xl font-bold mb-4">Want to Join Us?</h3>
               <p className="text-indigo-100 mb-6 font-light">Become a part of our thriving ecosystem and redefine your career.</p>
               <Link to="/careers" className="inline-block bg-white text-[#1a237e] font-bold py-3 px-6 rounded-full hover:bg-slate-100 transition-colors">
                 View Opportunities
               </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Legal Footer */}
      <section className="w-full py-8 bg-[#041434] border-t border-white/10 text-center px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto text-slate-400 text-sm">
          <p className="mb-2">Copyright © 2026 Stefto Management Services | Powered by Astra WordPress Theme</p>
          <p>Stefto is the trade name of Incredible Management Services (India) Private Limited (CIN: U74140DL2...)</p>
        </div>
      </section>

    </main>
  );
};

export default AboutUs;
