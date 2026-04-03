import React from 'react';
import { ShieldCheck, Target, Users, Code, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ValueCard = ({ icon: Icon, title, desc }) => (
  <div className="glass-panel" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
    <div style={{ background: 'rgba(79, 70, 229, 0.1)', padding: '1rem', borderRadius: '50%', width: 'fit-content', marginBottom: '1.5rem', border: '1px solid rgba(79, 70, 229, 0.2)' }}>
      <Icon size={32} color="var(--primary)" />
    </div>
    <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.25rem' }}>{title}</h3>
    <p style={{ fontSize: '0.95rem', margin: 0, flex: 1 }}>{desc}</p>
  </div>
);

const TimelineItem = ({ year, title, desc }) => (
  <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', position: 'relative' }}>
    <div style={{ 
      position: 'absolute', 
      left: '11px', 
      top: '30px', 
      bottom: '-30px', 
      width: '2px', 
      background: 'linear-gradient(to bottom, var(--primary), transparent)',
      zIndex: -1
    }}></div>
    <div style={{ 
      background: 'var(--background)', 
      border: '2px solid var(--primary)', 
      width: '24px', 
      height: '24px', 
      borderRadius: '50%', 
      flexShrink: 0,
      marginTop: '4px',
      boxShadow: '0 0 10px var(--primary)'
    }}></div>
    <div>
      <span style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>{year}</span>
      <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p>{desc}</p>
    </div>
  </div>
);

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{ minHeight: '60vh', padding: '10rem 2rem 4rem' }}>
        <div style={{ maxWidth: '800px' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '0.5rem 1rem', 
            borderRadius: '20px', 
            background: 'rgba(16, 185, 129, 0.2)', 
            color: '#34d399',
            fontWeight: '600',
            marginBottom: '1.5rem',
            border: '1px solid rgba(16, 185, 129, 0.3)'
          }}>
            Our Identity
          </div>
          <h1 style={{ fontSize: '4rem' }}>KPO Services for Banks and Financial Institutions</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            Stefto is a leading knowledge process outsourcing provider specializing in intelligent debt collection, recovery solutions, and customer support. With 750+ trained professionals and 14+ years of excellence, we redefine operational scaling.
          </p>
        </div>
      </section>

      <main className="container" style={{ paddingTop: 0 }}>
        
        {/* Core Identity Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          <ValueCard 
            icon={Target} 
            title="Our Mission" 
            desc="To be the premier partner for startups, NBFCs, and financial enterprises by providing end-to-end digital debt collection, process automation, and customer lifecycle management that safeguards brand reputation."
          />
          <ValueCard 
            icon={ShieldCheck} 
            title="Compliance & Security" 
            desc="We adhere to the highest standards of data security and regulatory compliance, ensuring that every customer interaction—be it recovery or support—is handled with utmost sensitivity and legality."
          />
          <ValueCard 
            icon={Code} 
            title="Technology Driven" 
            desc="Leveraging predictive analytics, AI-powered automation, and proprietary platforms like 'CreditKlick' to dramatically optimize collections, engagement, and operational workflows."
          />
        </div>

        {/* Story Section */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '8rem', alignItems: 'center' }} className="responsive-grid">
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>From IMS to Stefto.</h2>
            <p>
              Founded in August 2007, our organization began its journey as <strong>Incredible Management Services (IMS)</strong>. We built our foundation on trust, delivering robust BPO and recovery services to the core Indian financial sector.
            </p>
            <p>
              Recognizing the massive shift towards digital transformation, AI, and holistic process management, we evolved. In December 2023, we officially rebranded to <strong>Stefto</strong>. 
            </p>
            <p>
              This wasn't just a name change; it was a pivot towards becoming an advanced, technology-driven BPM partner capable of handling the complex demands of modern fintechs, e-commerce, and enterprise banking.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle color="var(--secondary)" size={20} />
                <span style={{ color: 'white', fontWeight: '500' }}>Gurugram HQ</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle color="var(--secondary)" size={20} />
                <span style={{ color: 'white', fontWeight: '500' }}>Delhi Labs</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle color="var(--secondary)" size={20} />
                <span style={{ color: 'white', fontWeight: '500' }}>Noida Operations</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle color="var(--secondary)" size={20} />
                <span style={{ color: 'white', fontWeight: '500' }}>Pune Hub</span>
              </div>
            </div>
          </div>
          
          <div className="glass-panel" style={{ background: 'linear-gradient(to bottom right, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9))', padding: '3rem' }}>
            <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '2rem', color: 'white' }}>Our Journey</h3>
            
            <TimelineItem 
              year="2007" 
              title="Formation of IMS" 
              desc="Established as Incredible Management Services to provide foundational recovery and support operations."
            />
            <TimelineItem 
              year="2015" 
              title="Expansion Phase" 
              desc="Expanded our footprint across multiple cities in India, heavily investing in call center infrastructure."
            />
            <TimelineItem 
              year="2020" 
              title="Digital Integration" 
              desc="Started integrating AI and data-driven insights into our core collection engines."
            />
            <TimelineItem 
              year="2023" 
              title="Birth of Stefto" 
              desc="Rebranded to Stefto, marking our transition into an end-to-end Digital BPM and Tech-enabled collections leader."
            />
          </div>
        </section>

        {/* Stats/Highlight Section */}
        <section className="glass-panel" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', padding: '4rem 2rem', textAlign: 'center', marginBottom: '4rem', background: 'rgba(79, 70, 229, 0.05)' }}>
          <div>
            <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem', lineHeight: 1 }}>750+</div>
            <div style={{ color: 'var(--text-secondary)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>Trained Professionals</div>
          </div>
          <div>
            <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem', lineHeight: 1 }}>14+</div>
            <div style={{ color: 'var(--text-secondary)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>Years Experience</div>
          </div>
          <div>
            <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '0.5rem', lineHeight: 1 }}>4</div>
            <div style={{ color: 'var(--text-secondary)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>Major Indian Offices</div>
          </div>
        </section>
        
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/contact-us" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Get in Touch With Our Leaders</Link>
        </div>

      </main>
      
      <style>{`
        @media (max-width: 768px) {
          .responsive-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
};

export default AboutUs;
