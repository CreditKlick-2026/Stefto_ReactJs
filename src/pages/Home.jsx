import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/image.png';
import endeavorsImage from '../assets/our_endeavors.png';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import news1 from '../assets/news_business_growth_1775211597064.png';
import news2 from '../assets/news_technology_innovation_1775211617151.png';
import news3 from '../assets/news_digital_transformation_1775211635494.png';
import mediaBg from '../assets/media_blocks_bg_1775212185626.png';
import globalBg from '../assets/global_interactions.png';
import mediaLogo from '../assets/media_logo_placeholder_1775212084849.png';
import brandLogo from '../assets/brand_logo_placeholder_1775212449786.png';
import {
  Users, Globe, Zap, MessageSquare,
  Phone, Globe2, Link as LinkIcon, Download,
  Star, ArrowRight
} from 'lucide-react';

const StatCard = ({ icon: Icon, number, label }) => {
  const [count, setCount] = React.useState(0);
  const target = parseInt(number);
  const cardRef = React.useRef(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }
    }, { threshold: 0.1 });

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={cardRef} className="stat-card"
      style={{
        background: '#ffffff',
        padding: '3rem 2.5rem',
        textAlign: 'center',
        boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        minWidth: '240px',
        cursor: 'pointer',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        const slider = e.currentTarget.querySelector('.hover-slider');
        if (slider) slider.style.width = '100%';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        const slider = e.currentTarget.querySelector('.hover-slider');
        if (slider) slider.style.width = '0';
      }}
    >
      {/* Animated Bottom Slider */}
      <div className="hover-slider" style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '5px',
        width: '0',
        background: '#0033cc',
        transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}></div>

      <div style={{ marginBottom: '1.5rem', color: '#64748b' }}>
        <Icon size={40} strokeWidth={1} style={{ margin: '0 auto' }} />
      </div>
      <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#1e293b', lineHeight: 1, marginBottom: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        {count}<span style={{ color: '#0033cc', fontSize: '2rem', marginTop: '0.2rem' }}>+</span>
      </div>
      <div style={{ color: '#64748b', fontSize: '1.1rem', fontWeight: '500' }}>{label}</div>
    </div>
  );
};

const SolutionCard = ({ title, desc }) => (
  <div
    className="solution-card"
    style={{
      background: 'rgba(2, 11, 40, 0.85)',
      backdropFilter: 'blur(10px)',
      padding: '3rem 2.5rem',
      color: 'white',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'rgba(4, 21, 60, 0.95)';
      e.currentTarget.style.transform = 'translateY(-5px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'rgba(2, 11, 40, 0.85)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.01em' }}>
      {title}
    </h3>
    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', fontWeight: '400' }}>
      {desc}
    </p>
  </div>
);

const AccordionItem = ({ title, items, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div style={{
      background: '#ffffff', // Clean solid white background
      boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
      borderRadius: '8px',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      borderLeft: '5px solid #ef4444',
      borderBottom: '1px solid #f1f5f9',
      borderTop: '1px solid #f1f5f9',
      borderRight: '1px solid #f1f5f9'
    }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '1.25rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          transition: 'all 0.3s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#f8fafc';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
        }}
      >
        <span style={{
          fontSize: '1.4rem',
          fontWeight: '700',
          color: '#1a237e', // Kept deep indigo for contrast
          letterSpacing: '-0.01em'
        }}>
          {title}
        </span>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1a237e',
          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }}>
          <ArrowRight size={18} strokeWidth={2.5} />
        </div>
      </div>

      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        opacity: isOpen ? 1 : 0,
        overflow: 'hidden',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        background: '#ffffff'
      }}>
        <div style={{ padding: '0.5rem 2.5rem 2.5rem 3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {items.map((sub, sIdx) => (
              <div key={sIdx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                color: '#1a237e',
                fontSize: '1.15rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  border: '1.5px solid #3b82f6',
                  borderRadius: '2px'
                }}></div>
                {sub}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {

  useEffect(() => {
    // Basic counter animation logic can be added here
  }, []);

  return (
    <main style={{ width: '100%', overflowX: 'hidden', background: '#f8fafc' }}>

      {/* 1. Hero Section — Image Only */}
      <section style={{
        height: '75vh',
        minHeight: '550px',
        position: 'relative',
        background: '#041434',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10%'
      }}>
        {/* Hero Overlay Text */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', color: 'white' }}>
          <h1 style={{ fontSize: '3.25rem', fontWeight: '800', marginBottom: '1.25rem', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
            AI-Enhanced<br />
            India's Next Frontier
          </h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '650px', lineHeight: '1.6' }}>
            Leading Hub for Digital Business Services, Operational Excellence, and Transformational Solutions
          </p>

          <Link to="/contact-us" className="btn-spark" style={{
            background: '#1a237e',
            padding: '1.75rem 2.8rem',
            border: 'none',
            borderRadius: '50px',
            color: 'white',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '1.05rem',
            position: 'relative'
          }}>
            Contact Us
          </Link>
        </div>


        {/* Subtle Dark Gradient Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(4,20,52,0.7) 0%, rgba(4,20,52,0.3) 100%)', zIndex: 1 }}></div>

        {/* New Floating Services Bar - Premium 3D Edition */}
        <div style={{
          position: 'absolute',
          bottom: '-45px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '85%',
          maxWidth: '1200px',
          background: '#ffffff',
          padding: '1.25rem 3.5rem',
          borderRadius: '12px',
          // Multi-layered shadow for high-end 3D effect
          boxShadow: `
            0 1px 0 rgba(0,0,0,0.05), 
            0 4px 6px rgba(0,0,0,0.04), 
            0 12px 25px rgba(0,0,0,0.1), 
            0 30px 60px rgba(0,0,0,0.15)
          `,
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2.5rem',
          border: '1px solid rgba(0,0,0,0.03)'
        }}>
          {[
            'Inbound and Outbound',
            'Digital Sales Fulfilment',
            'Debt Collection',
            'Market Research'
          ].map((service, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              color: '#0f172a', // Deep slate for better clarity
              fontSize: '1.1rem',
              fontWeight: '700',
              letterSpacing: '-0.01em',
              transition: 'transform 0.3s ease'
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{
                width: '11px',
                height: '11px',
                border: '2px solid #3b82f6', // Slightly thicker blue icon
                borderRadius: '2.5px'
              }}></div>
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* 2. Our Endeavors */}
      <section style={{ padding: '6rem 0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '4rem',
            alignItems: 'center',
            justifyContent: 'center'
          }}>

            {/* Professional Image */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '550px',
              height: '450px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px -15px rgba(0, 51, 204, 0.25)',
              border: '1px solid #e2e8f0'
            }}>
              <img
                src={endeavorsImage}
                alt="Our Endeavors"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.2))' }}></div>
            </div>

            {/* Content */}
            <div style={{
              flex: '1',
              minWidth: '320px',
              textAlign: window.innerWidth < 768 ? 'center' : 'left'
            }}>
              <div style={{
                marginBottom: '3rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: window.innerWidth < 768 ? 'center' : 'flex-start'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div
                    className="branding-box"
                    style={{
                      width: '32px',
                      height: '32px',
                      border: '2px solid #1a237e',
                      borderRadius: '8px',
                      cursor: 'pointer'
                    }}
                  ></div>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: '400', color: '#1e293b', letterSpacing: '-0.01em', margin: 0 }}>
                    Our <span style={{ color: '#1a237e', fontWeight: '800' }}>Endeavors</span>
                  </h2>
                </div>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'center',
                  paddingLeft: window.innerWidth < 768 ? '0' : '44px'
                }}>
                  <div style={{ width: '6px', height: '6px', background: '#1a237e', borderRadius: '50%' }}></div>
                  <div style={{ width: '6px', height: '6px', background: '#1a237e', borderRadius: '50%' }}></div>
                  <div style={{ width: '6px', height: '6px', background: '#1a237e', borderRadius: '50%' }}></div>
                  <div style={{ width: '100px', height: '4px', background: '#3b82f6', borderRadius: '10px' }}></div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem',
                textAlign: window.innerWidth < 768 ? 'center' : 'left'
              }}>
                <p style={{
                  fontSize: '1.15rem',
                  lineHeight: '1.85',
                  color: '#475569',
                  fontWeight: '400',
                  margin: 0
                }}>
                  Every day, we work closely with brands to tackle present challenges and prepare for <span style={{ color: '#1a237e', fontWeight: '600' }}>future opportunities</span> through our all-encompassing and inventive digital services. With a worldwide presence and profound local knowledge, we enable our team members to set industry standards, nurturing a <span style={{ color: '#1a237e', fontWeight: '600' }}>culture of creativity and inspiration</span>.
                </p>

                <p style={{
                  fontSize: '1.15rem',
                  lineHeight: '1.85',
                  color: '#475569',
                  fontWeight: '400',
                  margin: 0
                }}>
                  This strategy helps us grow our global presence. When your customers are looking for solutions, you can rely on our committed team to offer unwavering support at every step. Assisting others isn't just a part of our work— <span style={{ color: '#1a237e', fontWeight: '700' }}>it's central to everything we do.</span>
                </p>
              </div>

              <div style={{
                marginTop: '3rem',
                display: 'flex',
                justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start'
              }}>
                <Link to="/contact-us" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'white',
                  color: '#1a237e',
                  padding: '0.65rem 2.5rem',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '1.05rem',
                  textDecoration: 'none',
                  boxShadow: '0 12px 30px rgba(0, 26, 114, 0.15)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '1.5px solid #1a237e'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(90deg, #3b82f6, #1a237e)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 26, 114, 0.4)';
                    e.currentTarget.style.border = '1.5px solid transparent';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = '#1a237e';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 26, 114, 0.15)';
                    e.currentTarget.style.border = '1.5px solid #1a237e';
                  }}>
                  How can we help you?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Partner Across Section */}
      <section style={{
        padding: '8rem 0',
        background: '#ffffff',
        backgroundImage: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")`, // Modern high-end office background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Parallax-like depth
        overflow: 'hidden',
        position: 'relative',
        boxShadow: 'inset 0 10px 30px rgba(0,0,0,0.02)'
      }}>
        {/* Transparent Overlay for Clarity */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255, 255, 255, 0.7)', // Soft overlay to keep it 'neat and clean'
          zIndex: 0
        }}></div>

        {/* Sophisticated Background Accent */}
        <div style={{
          position: 'absolute',
          top: '-15%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.03) 0%, transparent 70%)',
          zIndex: 1
        }}></div>

        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4rem',
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}>

            {/* Left Title */}
            <div style={{ flex: '1', minWidth: '320px', position: 'sticky', top: '100px' }}>
              <h2 style={{
                fontSize: '2.75rem',
                fontWeight: '400',
                color: '#1a237e',
                lineHeight: '1.3',
                margin: 0
              }}>
                Stefto in India<br />
                is your partner <span style={{ fontWeight: '800', borderBottom: '4px solid #ef4444' }}>across...</span>
              </h2>
            </div>

            {/* Right Navigation Cards */}
            <div style={{
              flex: '1.1',
              minWidth: '320px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              maxWidth: '650px'
            }}>
              {[
                {
                  title: 'Industries',
                  items: ['Healthcare', 'Travel', 'BFSI', 'Retail & Ecommerce', 'Telecom', 'Utilities', 'Manufacturing']
                },
                {
                  title: 'Channel',
                  items: ['Direct Sales', 'Partner Network', 'Global Distribution', 'Wholesale Operations']
                },
                {
                  title: 'Services',
                  items: ['Digital Strategy', 'Cloud Transformation', 'Operational Excellence', 'Customer Experience']
                }
              ].map((item, idx) => (
                <AccordionItem
                  key={idx}
                  title={item.title}
                  items={item.items}
                  defaultOpen={idx === 0}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Our Solutions Section - Precise Reference Design */}
      <section style={{
        position: 'relative',
        minHeight: '800px',
        background: '#000b28',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Cinematic Background Split */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', zIndex: 1 }}>
          <div style={{ flex: '1.1', background: '#000b28' }}></div>
          <div style={{
            flex: '1',
            background: 'url("https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop")', // Professional analytical researcher background
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}>
            {/* Dark inner shadow for depth against edges */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #000b28 0%, rgba(0,11,40,0.2) 100%)' }}></div>
          </div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '4rem 2rem', maxWidth: '1280px', margin: '0 auto', width: '100%' }}>

          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3.25rem', color: 'white', fontWeight: '400', margin: 0 }}>
              Our <span style={{ fontWeight: '700' }}>Solutions</span>
            </h2>
            <div style={{ display: 'flex', gap: '5px', marginTop: '1.25rem' }}>
              <div style={{ width: '4px', height: '4px', background: '#3b82f6', borderRadius: '50%' }}></div>
              <div style={{ width: '4px', height: '4px', background: '#3b82f6', borderRadius: '50%' }}></div>
              <div style={{ width: '4px', height: '4px', background: '#3b82f6', borderRadius: '50%' }}></div>
              <div style={{ width: '50px', height: '4px', background: '#3b82f6', borderRadius: '2px' }}></div>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem', // Added more spacious gap for better separation
            borderBottom: '1.5px solid rgba(255,255,255,0.3)', // Target bottom line
            paddingBottom: '2.5rem'
          }}>
            <SolutionCard
              title="Customer Management"
              desc="Through our smart blend of people, process and technologies, we imagine, design and deliver outstanding customer experiences."
            />
            <SolutionCard
              title="Digital Solutions"
              desc="We help you engage in conversation with your customers through digital channels and introduce effective Data-Driven marketing models."
            />
            <SolutionCard
              title="Process Management"
              desc="We streamline your processes, reduce and remove the burden of repetitive tasks, allowing your team to be more focused and increase productivity."
            />
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: '300', color: '#1e293b' }}>Organization </span>
            <span style={{ fontSize: '2.5rem', fontWeight: '700', color: '#0033cc' }}>Overview</span>
            <div style={{ display: 'flex', gap: '5px', marginTop: '1rem', justifyContent: 'center' }}>
              <div style={{ width: '6px', height: '6px', background: '#0033cc', borderRadius: '50%' }}></div>
              <div style={{ width: '6px', height: '6px', background: '#0033cc', borderRadius: '50%' }}></div>
              <div style={{ width: '6px', height: '6px', background: '#0033cc', borderRadius: '50%' }}></div>
              <div style={{ width: '60px', height: '6px', background: '#0033cc', borderRadius: '4px' }}></div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            <StatCard icon={Users} number="2000" label="Employees" />
            <StatCard icon={Globe2} number="20" label="Languages" />
            <StatCard icon={LinkIcon} number="50" label="Clients" />
            <StatCard icon={Globe} number="8" label="Offices" />
          </div>
        </div>
      </section>

      {/* 5. Dual Brand Story Showcase (Show Both) */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#041434',
        padding: '0'
      }}>

        {/* Row 1: Talent Hero */}
        <div style={{
          width: '100%',
          position: 'relative',
          height: '700px',
          background: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '4rem 8%',
          overflow: 'hidden'
        }}>
          {/* Cinematic Overlay - Talent State */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(4, 20, 52, 0.85) 0%, rgba(4, 20, 52, 0.2) 100%)' }}></div>

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '600px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1.25rem', fontWeight: '800', lineHeight: '1.1' }}>
              At Stefto, <br />talent sets us apart
            </h2>
            <div style={{ width: '80px', height: '5px', background: '#eab308', marginBottom: '3rem' }}></div>
            <p style={{ fontSize: '1.25rem', color: 'white', lineHeight: '1.8', marginBottom: '3.5rem', fontWeight: '400' }}>
              We strongly value our people, who are essential to steering the company's success. A team dedicated to ongoing professional development. Discover a new path of growth, Join us!
            </p>
            <Link to="/careers" style={{ display: 'inline-flex', padding: '1.25rem 3.5rem', background: '#3b82f6', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>
              Learn More
            </Link>
          </div>
        </div>

        {/* Row 2: Social Commitment */}
        <div style={{
          width: '100%',
          position: 'relative',
          height: '700px',
          background: `url(${img2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '4rem 8%',
          overflow: 'hidden'
        }}>
          {/* Cinematic Overlay - Commitment State */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.1) 100%)' }}></div>

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '600px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1.25rem', fontWeight: '800', lineHeight: '1.2' }}>
              Our commitment: <br />Improvement of society
            </h2>
            <div style={{ width: '80px', height: '5px', background: '#eab308', marginBottom: '3rem' }}></div>
            <p style={{ fontSize: '1.25rem', color: 'white', lineHeight: '1.8', marginBottom: '3.5rem', fontWeight: '400' }}>
              We aim to make a positive impact on everyone at Stefto and on society as a whole. By operating sustainably and staying committed to the environment, we ensure that our activities contribute to a better future for all.
            </p>
            <Link to="/about-us" style={{ display: 'inline-flex', padding: '1.25rem 3.5rem', background: '#ffffff', color: '#041434', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* 6. In The News (Below Dual Brand Story) */}
      <section style={{ padding: '6rem 0', background: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '300', color: '#1e293b' }}>
              In The <span style={{ color: '#0033cc', fontWeight: '700' }}>News</span>
            </h2>
            <div style={{ display: 'flex', gap: '5px', marginTop: '1rem', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ width: '4px', height: '4px', background: '#0033cc', borderRadius: '50%' }}></div>
              <div style={{ width: '4px', height: '4px', background: '#0033cc', borderRadius: '50%' }}></div>
              <div style={{ width: '50px', height: '4px', background: '#0033cc', borderRadius: '2px' }}></div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
            <NewsCard img={news1} tag="Stefto" title="Stefto's expansion plan would create more job opportunities" desc="Dharmendra Kalra, the Chief Executive Officer of Stefto..." />
            <NewsCard img={news2} tag="Case Study 2" title="Stefto introduces Credit Refine product" desc="Stefto is excited to unveil its groundbreaking product, Credit Refine..." />
            <NewsCard img={news3} tag="Empowerment" title="Optimising Digital Innovation through Intelligent Services" desc="Digital transformation is now crucial for businesses aiming to stay competitive." />
          </div>
        </div>
      </section>

      {/* 7. Our Media Coverage (Transparent VALUE Design) */}
      <section style={{
        padding: '5.5rem 0',
        background: `linear-gradient(rgba(4, 20, 52, 0.6), rgba(4, 20, 52, 0.7)), url(${mediaBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '400', color: 'white', letterSpacing: '0.05em' }}>
              Our Media <span style={{ fontWeight: '700' }}>Coverage</span>
            </h2>
            <div style={{ display: 'flex', gap: '4px', marginTop: '1rem', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ width: '4px', height: '4px', background: '#3b82f6', borderRadius: '50%', opacity: 0.8 }}></div>
              <div style={{ width: '4px', height: '4px', background: '#3b82f6', borderRadius: '50%', opacity: 0.8 }}></div>
              <div style={{ width: '40px', height: '4px', background: '#3b82f6', borderRadius: '4px' }}></div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            <MediaLogoCard />
            <MediaLogoCard />
            <MediaLogoCard />
            <MediaLogoCard />
          </div>
        </div>
      </section>

      {/* 8. Infinite Logo Marquee (50+ Brands) */}
      <section style={{ padding: '4rem 0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '400', color: '#1e293b' }}>
              The Platform Trusted by Over <span style={{ color: '#0033cc', fontWeight: '700' }}>50+ Brands</span>
            </h2>
            <div style={{ display: 'flex', gap: '4px', marginTop: '1rem', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ width: '4px', height: '4px', background: '#0033cc', borderRadius: '50%' }}></div>
              <div style={{ width: '4px', height: '4px', background: '#0033cc', borderRadius: '50%' }}></div>
              <div style={{ width: '40px', height: '4px', background: '#0033cc', borderRadius: '4px' }}></div>
            </div>
          </div>
          <div style={{ width: '100%', overflow: 'hidden', position: 'relative', height: '120px', display: 'flex', alignItems: 'center' }}>
            <style>
              {`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}
            </style>
            <div style={{
              display: 'flex',
              width: 'max-content',
              gap: '1.5rem',
              animation: 'marquee 60s linear infinite',
              willChange: 'transform'
            }}>
              {[...Array(2)].map((_, loopIdx) => (
                <React.Fragment key={loopIdx}>
                  {brandNames.map((name, idx) => (
                    <BrandCard key={`${loopIdx}-${idx}`} name={name} />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials From Clients (Value Background - Cinematic Transparency) */}
      <section style={{
        padding: '7rem 0',
        background: `linear-gradient(rgba(4, 20, 52, 0.6), rgba(4, 20, 52, 0.6)), url(${mediaBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
              WHAT OUR CLIENT SAY ABOUT STEFTO
            </p>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '300', color: 'white', marginBottom: '1.25rem' }}>
              Testimonials From <span style={{ fontWeight: '700' }}>Clients</span>
            </h2>
            <div style={{ display: 'flex', gap: '5px', marginTop: '1.25rem', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ width: '4px', height: '4px', background: '#3b82f6', borderRadius: '50%' }}></div>
              <div style={{ width: '4px', height: '4px', background: '#3b82f6', borderRadius: '50%' }}></div>
              <div style={{ width: '50px', height: '4px', background: '#3b82f6', borderRadius: '2px' }}></div>
            </div>
          </div>

          <div style={{
            maxWidth: '1000px', margin: '0 auto', background: 'white', borderRadius: '16px',
            padding: '2.5rem 4rem', boxShadow: '0 35px 80px rgba(0,0,0,0.35)', position: 'relative', overflow: 'hidden', textAlign: 'center'
          }}>
            <div style={{ position: 'absolute', top: '-35px', right: '-35px', width: '110px', height: '110px', background: '#2563eb', borderRadius: '50%', zIndex: 1 }}></div>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <h3 style={{ fontSize: '1.75rem', color: '#0f172a', fontWeight: '800', marginBottom: '0.5rem' }}>MR. VINEET KAKKAR</h3>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>(ZONAL HEAD) - SBIC</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '1.5rem' }}>
                {[...Array(5)].map((_, i) => (<Star key={i} size={22} fill="#fbca1e" color="#fbca1e" />))}
              </div>
              <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: '1.8', fontWeight: '400', maxWidth: '850px', margin: '0 auto' }}>
                It has been a great experience and continuous journey with the Stefto Team. The organisation has strong leadership in delivery and managing the businesses very effectively. What sets them apart is their vested interest in understanding the nuances of the business and the culture of the organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Latest Blogs (Below Testimonials) */}
      <section style={{ padding: '8rem 0', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative Background Elements (Timeline Lines with Nodes) */}
        <div style={{ position: 'absolute', left: '4%', top: 0, bottom: 0, width: '1px', background: '#e2e8f0', zIndex: 1 }}>
          <div style={{ position: 'absolute', top: '10%', left: '-5px', width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #cbd5e1', background: 'white' }}></div>
          <div style={{ position: 'absolute', top: '50%', left: '-5px', width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #cbd5e1', background: 'white' }}></div>
          <div style={{ position: 'absolute', top: '90%', left: '-5px', width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #cbd5e1', background: 'white' }}></div>
        </div>
        <div style={{ position: 'absolute', right: '4%', top: 0, bottom: 0, width: '1px', background: '#e2e8f0', zIndex: 1 }}>
          <div style={{ position: 'absolute', top: '20%', right: '-5px', width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #cbd5e1', background: 'white' }}></div>
          <div style={{ position: 'absolute', top: '60%', right: '-5px', width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #cbd5e1', background: 'white' }}></div>
          <div style={{ position: 'absolute', top: '85%', right: '-5px', width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #cbd5e1', background: 'white' }}></div>
        </div>

        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10 }}>

          {/* Section Header with Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem' }}>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '300', color: '#1e293b', marginBottom: '1.25rem' }}>
                Latest <span style={{ color: '#0033cc', fontWeight: '800' }}>Blogs</span>
              </h2>
              <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                <div style={{ width: '4px', height: '4px', background: '#0033cc', borderRadius: '50%' }}></div>
                <div style={{ width: '4px', height: '4px', background: '#0033cc', borderRadius: '50%' }}></div>
                <div style={{ width: '50px', height: '4px', background: '#0033cc', borderRadius: '2px' }}></div>
              </div>
            </div>
            <Link to="/blogs" style={{
              padding: '1rem 2.5rem',
              background: '#155e75',
              color: 'white',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1rem',
              boxShadow: '0 4px 0 rgba(0,0,0,0.1)',
              transition: 'all 0.2s'
            }} onMouseEnter={(e) => e.target.style.background = '#0e7490'}>
              View all blogs
            </Link>
          </div>

          {/* Blog Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem'
          }}>
            <BlogCard
              date="28"
              month="Feb"
              tags={["Debt Collection", "Customer Support", "New Update"]}
              title="Management Solutions in Current Times"
              excerpt="The Significance of Recovery Management Solutions in Current Times"
            />
            <BlogCard
              date="23"
              month="Jan"
              tags={["Debt Collection"]}
              title="Making Debt Collection More Human: A 2025 Case Study"
              excerpt="How AI is Making Debt Collection More Human: A 2025 Case Study"
            />
            <BlogCard
              date="07"
              month="Jan"
              tags={["Debt Collection"]}
              title="According to the RBI report, Indian household debt is rising"
              excerpt="According to the RBI report, Indian household debt is rising, but it is relatively low in comparison with other emerging markets"
            />
          </div>
        </div>
      </section>

      {/* 11. Global Interaction CTA (Cinematic Background Image) */}
      <section style={{
        padding: '6rem 0',
        background: `linear-gradient(rgba(4, 20, 52, 0.8), rgba(4, 20, 52, 0.8)), url(${globalBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '5rem' }}>

            {/* Left Content: Corporate Authority (White Text) */}
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ fontSize: '2.8rem', color: 'white', fontWeight: '800', lineHeight: '1.2', marginBottom: '2.5rem' }}>
                Globally, we handle billions of unique interactions.
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.8', maxWidth: '600px' }}>
                Stefto India is recognized as a Center of Excellence for Back-Office Outsourcing Services and Transformation Solutions. We deliver seamless customer engagement powered by robotics, artificial intelligence, and advanced analytics.
              </p>
            </div>

            {/* Right Content: 'Subscribe with Email' Card */}
            <div style={{ flex: '1 1 400px' }}>
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '3rem',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ fontSize: '1.2rem', color: '#0f172a', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
                  Subscribe to our newsletter
                </div>
                <div style={{
                  display: 'flex',
                  background: '#f1f5f9',
                  borderRadius: '12px',
                  padding: '5px',
                  alignItems: 'center',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                }}>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    style={{
                      flex: 1,
                      border: 'none',
                      background: 'transparent',
                      padding: '1rem 1.5rem',
                      fontSize: '1rem',
                      outline: 'none',
                      color: '#1e293b'
                    }}
                  />
                  <button style={{
                    background: '#043b4d',
                    color: 'white',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    fontWeight: '800',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 5px 15px rgba(4, 59, 77, 0.2)'
                  }} onMouseEnter={(e) => { e.currentTarget.style.background = '#0e7490'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#043b4d'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

// --- SUPPORTING COMPONENTS ---

const brandNames = [
  "Bajaj", "HDFC", "ICICI", "Reliance", "Tata", "Infosys", "Wipro", "Airtel", "Jio", "Zomato",
  "Swiggy", "Ola", "Uber", "Amazon", "Google", "Microsoft", "Apple", "Samsung", "Nike", "Adidas",
  "Puma", "Lenskart", "Nykaa", "Flipkart", "Paytm", "PhonePe", "Razorpay", "Indifi", "LendingKart", "OfBusiness",
  "Stanza", "Byjus", "Unacademy", "PhysicsWallah", "Zerodha", "Groww", "Upstox", "Vedantu", "Delhivery", "BlueDart",
  "Shiprocket", "Curefit", "PharmEasy", "MediBuddy", "PolicyBazaar", "UrbanCompany", "Meesho", "Snapdeal", "Pepperfry", "FirstCry"
];

const BlogCard = ({ date, month, tags, title, excerpt }) => (
  <div style={{
    background: 'white',
    borderRadius: '8px',
    padding: '3rem 2.5rem 2.5rem 2.5rem',
    boxShadow: '0 15px 45px rgba(0,0,0,0.06)',
    position: 'relative',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: '1px solid rgba(0,0,0,0.02)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.12)'; }}>

    {/* Floating Date Badge */}
    <div style={{
      position: 'absolute',
      top: '40px',
      left: '-20px',
      background: '#f43f5e',
      color: 'white',
      padding: '12px 14px',
      borderRadius: '4px',
      textAlign: 'center',
      minWidth: '60px',
      boxShadow: '8px 8px 30px rgba(244, 63, 94, 0.3)'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: '800', lineHeight: '1' }}>{date}</div>
      <div style={{ fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', opacity: 0.9 }}>{month}</div>
    </div>

    {/* Tags */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem', marginLeft: '1rem' }}>
      {tags.map((tag, idx) => (
        <span key={idx} style={{
          background: '#3b82f6',
          color: 'white',
          fontSize: '0.65rem',
          fontWeight: '700',
          padding: '4px 10px',
          borderRadius: '4px',
          textTransform: 'uppercase'
        }}>{tag}</span>
      ))}
    </div>

    <h3 style={{ fontSize: '1.4rem', color: '#0f172a', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.4', paddingLeft: '1rem' }}>
      {title}
    </h3>

    <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.6', marginBottom: '2.5rem', paddingLeft: '1rem' }}>
      {excerpt}
    </p>

    <div style={{ marginTop: 'auto', paddingLeft: '1rem' }}>
      <button style={{
        background: '#2563eb',
        color: 'white',
        border: 'none',
        padding: '0.9rem 1.8rem',
        borderRadius: '6px',
        fontWeight: '700',
        fontSize: '0.95rem',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer'
      }}>
        Read More <span style={{ fontSize: '1.2rem' }}>→</span>
      </button>
    </div>
  </div>
);

const BrandCard = ({ name }) => (
  <div style={{
    background: 'white', height: '75px', minWidth: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    borderRadius: '12px', padding: '0 2rem', boxShadow: '0 8px 30px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.02)', flexShrink: 0
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img src={brandLogo} alt={name} style={{ height: '28px', opacity: 0.8, filter: 'grayscale(100%) brightness(1.2)' }} />
      <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>{name}</span>
    </div>
  </div>
);

const MediaLogoCard = () => (
  <div style={{
    background: 'white', height: '100px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 15px 40px rgba(0,0,0,0.2)', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', cursor: 'pointer', position: 'relative', gap: '12px'
  }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 55px rgba(59, 130, 246, 0.4)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)'; }}>
    <div style={{ width: '24px', height: '24px', position: 'relative', opacity: 0.5 }}>
      <div style={{ border: '2px solid #94a3b8', width: '100%', height: '100%', borderRadius: '2px' }}></div>
      <div style={{ position: 'absolute', top: '50%', left: '-10%', width: '120%', height: '2px', background: '#94a3b8', transform: 'rotate(45deg)' }}></div>
    </div>
    <span style={{ color: '#94a3b8', fontWeight: '600', fontSize: '1.1rem', fontFamily: 'monospace' }}>/Not Load</span>
  </div>
);

const NewsCard = ({ img, title, desc, tag }) => (
  <div style={{
    background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.08)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer', border: '1px solid rgba(0,0,0,0.02)'
  }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 25px 60px rgba(10, 48, 140, 0.12)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 15px 45px rgba(0,0,0,0.08)'; }}>
    <div style={{ width: '100%', height: '160px', background: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
    <div style={{ padding: '1.25rem 2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div style={{ width: '10px', height: '2px', background: '#0033cc' }}></div>
        {tag || "Latest News"}
      </div>
      <h3 style={{ fontSize: '1.25rem', color: '#002699', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.3' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.6', margin: 0 }}>{desc}</p>
    </div>
  </div>
);

export default Home;
