import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AccordingToTheRbiReportTheIndianHouseholdDebtIsRisingButItIsRelativelyLowInComparisonWithOtherEmergingMarkets from './pages/AccordingToTheRbiReportTheIndianHouseholdDebtIsRisingButItIsRelativelyLowInComparisonWithOtherEmergingMarkets';
import Automotive from './pages/Automotive';
import BackOfficeSupport from './pages/BackOfficeSupport';
import BankingAndFinancialServices from './pages/BankingAndFinancialServices';
import Careers from './pages/Careers';
import CaseStudies from './pages/CaseStudies';
import ContactUs from './pages/ContactUs';
import CookiePolicy from './pages/CookiePolicy';
import CreditRefine from './pages/CreditRefine';
import CustomerStories from './pages/CustomerStories';
import CustomerSupport from './pages/CustomerSupport';
import DebtCollection from './pages/DebtCollection';
import DigitalDebtManagement from './pages/DigitalDebtManagement';
import DigitalLeadPartner from './pages/DigitalLeadPartner';
import HealthCare from './pages/HealthCare';
import HowAiIsMakingDebtCollectionMoreHumanA2025CaseStudy from './pages/HowAiIsMakingDebtCollectionMoreHumanA2025CaseStudy';
import Inbound from './pages/Inbound';
import Insurance from './pages/Insurance';
import Leadership from './pages/Leadership';
import LegalStatement from './pages/LegalStatement';
import NewUpdate from './pages/NewUpdate';
import News from './pages/News';
import Outbound from './pages/Outbound';
import PressRelease from './pages/PressRelease';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundsCancellations from './pages/RefundsCancellations';
import RetailAndECommerce from './pages/RetailAndECommerce';
import RetentionAndPersistency from './pages/RetentionAndPersistency';
import SalesSupport from './pages/SalesSupport';
import Security from './pages/Security';
import Services from './pages/Services';
import Technology from './pages/Technology';
import Telecom from './pages/Telecom';
import TermsOfUse from './pages/TermsOfUse';
import TheSignificanceOfRecoveryManagementSolutionsInCurrentTimes from './pages/TheSignificanceOfRecoveryManagementSolutionsInCurrentTimes';
import TravelHospitalityAndCargo from './pages/TravelHospitalityAndCargo';

import { Phone, Mail, MapPin, ChevronDown, Search, Menu, X } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

import steftoLogo from './assets/Steftologo.png';
import whyWorkBg from './assets/why_work_at_stefto_dropdown_bg.png';
import servicesBg from './assets/services_dropdown_bg.png';
import insightsBg from './assets/insights_dropdown_bg.png';
import industriesBg from './assets/industries_dropdown_bg.png';
import careerValuesBg from './assets/career_our_values_bg.png';
import careerWhyBg from './assets/career_why_stefto_bg.png';
import careerJobBg from './assets/career_job_opportunity_bg.png';

const SteftoLogo = () => (
  <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
    <img src={steftoLogo} alt="Stefto" style={{ height: '50px', objectFit: 'contain' }} />
  </Link>
);

const navMenus = {
  'Why Stefto?': {
    heading: 'At Stefto, We Believe That Good is Just the Beginning',
    links: [
      { label: 'About Stefto', to: '/about-us' },
      { label: 'Security', to: '/security' },
      { label: 'Innovative partners', to: '/digital-lead-partner' },
      { label: 'Leadership', to: '/leadership' },
      { label: 'Inspiration World', to: '/about-us' },
    ],
    panel: {
      type: 'image',
      image: whyWorkBg,
      title: 'Why work at Stefto',
      desc: 'Having a clear purpose and a passion for solving problems leads to a fulfilling workplace.'
    }
  },
  'Services': {
    heading: 'Innovative, Business-specific Solutions',
    links: [
      { label: 'Inbound', to: '/inbound' },
      { label: 'Outbound', to: '/outbound' },
      { label: 'Back Office Support', to: '/back-office-support' },
      { label: 'Digital Debt Management', to: '/digital-debt-management' },
      { label: 'Credit Refine', to: '/credit-refine' },
      { label: 'Retention and Persistency', to: '/retention-and-persistency' },
      { label: 'Sales Support', to: '/sales-support' },
    ],
    panel: {
      type: 'dark',
      image: servicesBg,
      title: 'STREAMLINING OPERATIONS THROUGH TAILORED BPO SOLUTIONS',
      desc: ''
    }
  },
  'Insights': {
    heading: 'The Power of Advanced Insights',
    links: [
      { label: 'Client stories', to: '/customer-stories' },
      { label: 'Blog', to: '/insights' },
      { label: 'Press releases', to: '/press-release' },
      { label: 'News', to: '/news' },
      { label: 'Case Studies', to: '/case-studies' },
    ],
    panel: {
      type: 'image',
      image: insightsBg,
      title: 'Stay Informed',
      desc: 'Explore our latest articles and success stories from the field.'
    }
  },
  'Career': {
    layout: 'columns',
    columns: [
      { label: 'Our values', to: '/about-us', image: careerValuesBg },
      { label: 'Why Stefto', to: '/about-us', image: careerWhyBg },
      { label: 'Job Opportunity', to: '/careers', image: careerJobBg },
    ]
  },
};

const NavBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header style={{ width: '100%', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
      {/* Top Navy Bar - Hidden on small mobile */}
      <div style={{ background: '#2b3366', color: 'white', padding: '0.6rem 2rem', fontSize: '0.85rem' }} className="hide-on-mobile">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={14} /> +91 8800 101 102</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="hide-on-tablet"><Mail size={14} /> info@stefto.com</span>
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <a href="https://www.facebook.com/steftocom/" target="_blank" rel="noreferrer" style={{ color: 'white', opacity: 0.8 }}><FaFacebookF size={14} /></a>
            <a href="https://x.com/steftocom" target="_blank" rel="noreferrer" style={{ color: 'white', opacity: 0.8 }}><FaTwitter size={14} /></a>
            <a href="https://www.linkedin.com/company/stefto/" target="_blank" rel="noreferrer" style={{ color: 'white', opacity: 0.8 }}><FaLinkedinIn size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Bottom Bar */}
      <div style={{ background: '#f8fafc', padding: '0.75rem 2rem', position: 'relative' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Hamburger for Mobile */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ 
                background: 'none', border: 'none', cursor: 'pointer', color: '#1a237e', 
                display: 'none' 
              }} 
              className="show-on-tablet"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <SteftoLogo />
          </div>

          {/* Desktop Nav - Hidden on tablet/mobile */}
          <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} className="hide-on-tablet">
            {Object.keys(navMenus).map((label) => (
              <div
                key={label}
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveMenu(label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <span style={{
                  color: activeMenu === label ? '#0033cc' : '#1e293b',
                  textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600',
                  display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.4rem 0.6rem',
                  borderRadius: '6px', cursor: 'pointer', transition: 'all 0.2s ease',
                  background: activeMenu === label ? '#f1f5f9' : 'transparent'
                }}>
                  {label} <ChevronDown size={12} />
                </span>

                {activeMenu === label && (
                  <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: '0.75rem', zIndex: 999 }}>
                    <div style={{ background: 'white', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', borderRadius: '12px', display: 'flex', minWidth: navMenus[label].layout === 'columns' ? 'auto' : '600px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                      {navMenus[label].layout === 'columns' ? (
                        <div style={{ display: 'flex', width: '600px', height: '300px' }}>
                          {navMenus[label].columns.map((col, idx) => (
                            <Link key={idx} to={col.to} style={{ flex: 1, position: 'relative', backgroundImage: `url(${col.image})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'flex-end', textDecoration: 'none', padding: '1rem' }}>
                              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.85))' }}></div>
                              <span style={{ position: 'relative', zIndex: 1, color: 'white', fontSize: '1.1rem', fontWeight: '800' }}>{col.label}</span>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <>
                          <div style={{ flex: '1', padding: '1.5rem' }}>
                            <p style={{ color: '#0033cc', fontWeight: '700', fontSize: '0.95rem', marginBottom: '1rem' }}>{navMenus[label].heading}</p>
                            {navMenus[label].links.map((link, i) => (
                              <Link key={i} to={link.to} onClick={() => setActiveMenu(null)} style={{ color: '#1e293b', textDecoration: 'none', padding: '0.5rem 0', fontSize: '0.85rem', fontWeight: '500', display: 'block', borderBottom: '1px solid #f1f5f9' }}>{link.label}</Link>
                            ))}
                          </div>
                          <div style={{ flex: '1', position: 'relative', background: navMenus[label].panel.type === 'dark' ? '#041434' : 'transparent', backgroundImage: navMenus[label].panel.image ? `url(${navMenus[label].panel.image})` : 'none', backgroundSize: 'cover', padding: '1.5rem', color: 'white' }}>
                            <div style={{ position: 'absolute', inset: 0, background: 'rgba(4, 20, 52, 0.45)' }}></div>
                            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                              <h4 style={{ fontSize: '1.2rem', fontWeight: '800' }}>{navMenus[label].panel.title}</h4>
                              <p style={{ fontSize: '0.8rem', opacity: 0.9 }}>{navMenus[label].panel.desc}</p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            {isSearchVisible ? (
              <div style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', borderRadius: '50px', padding: '0.2rem 0.5rem 0.2rem 1rem', border: '1.5px solid #1a237e', boxShadow: '0 4px 15px rgba(26, 35, 126, 0.1)' }} className="search-wrap-mobile">
                <input type="text" placeholder="Search..." autoFocus style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.8rem', width: window.innerWidth < 480 ? '100px' : '150px' }} />
                <button onClick={() => setIsSearchVisible(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={14} /></button>
              </div>
            ) : (
              <button onClick={() => setIsSearchVisible(true)} style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1.5px solid #000000', background: '#ffffff', color: '#1a237e', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Search size={16} /></button>
            )}
            
            {!isSearchVisible && (
              <Link to="/contact-us" className="btn-spark hide-on-mobile" style={{ background: '#1a237e', color: 'white', padding: '0.5rem 1.4rem', borderRadius: '50px', fontWeight: '700', textDecoration: 'none', fontSize: '0.85rem' }}>
                Contact us
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Dropdown Overlay */}
        {isMobileMenuOpen && (
          <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', background: 'white', zIndex: 1001, boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderTop: '1px solid #e2e8f0', padding: '1.5rem', maxHeight: '80vh', overflowY: 'auto' }}>
            {Object.keys(navMenus).map((label) => (
              <div key={label} style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#1a237e', fontSize: '1rem', fontWeight: '800', marginBottom: '0.75rem', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.35rem' }}>{label}</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  {(navMenus[label].links || (navMenus[label].columns || [])).map((link, k) => (
                    <Link key={k} to={link.to} onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#475569', textDecoration: 'none', fontSize: '0.85rem', padding: '0.25rem 0' }}>{link.label}</Link>
                  ))}
                </div>
              </div>
            ))}
            <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)} style={{ display: 'block', background: '#1a237e', color: 'white', textAlign: 'center', padding: '0.75rem', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', marginTop: '1rem' }}>Contact us</Link>
          </div>
        )}
      </div>
    </header>
  );
};

const Footer = () => (
  <footer style={{
    background: '#041434',
    color: 'white',
    padding: '3.5rem 2rem 2.5rem 2rem',
    fontSize: '0.875rem',
    position: 'relative',
    borderTop: '5px solid #3b82f6'
  }}>
    <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>

      {/* Link Matrix */}
      <div className="footer-matrix">

        {/* Brand Hub */}
        <div>
          <div style={{ marginBottom: '1.25rem' }}>
            <img
              src={steftoLogo}
              alt="Stefto"
              style={{
                height: '45px',
                objectFit: 'contain'
              }}
            />
          </div>
          <p className="footer-heading-spark" style={{ lineHeight: '1.5', fontSize: '0.85rem' }}>
            Stefto is the trade name of Incredible Management Services (India) Private Limited (CIN: U74140DL2007ULT166363).
          </p>
        </div>

        {/* Links Column 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <h4 className="footer-heading-spark" style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem' }}>Company</h4>
          <Link to="/about-us" className="footer-link-spark">About Us</Link>
          <Link to="/careers" className="footer-link-spark">Careers</Link>
          <Link to="/security" className="footer-link-spark">Security</Link>
          <Link to="/digital-lead-partner" className="footer-link-spark">Partnership</Link>
          <Link to="/contact-us" className="footer-link-spark">Contact us</Link>
        </div>

        {/* Links Column 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <h4 className="footer-heading-spark" style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem' }}>Solutions</h4>
          <Link to="/inbound" className="footer-link-spark">Inbound</Link>
          <Link to="/digital-debt-management" className="footer-link-spark">Digital Debt Collections</Link>
          <Link to="/customer-support" className="footer-link-spark">Digital Communications</Link>
          <Link to="/retention-and-persistency" className="footer-link-spark">Retention and Persistency</Link>
          <Link to="/sales-support" className="footer-link-spark">Sales Support</Link>
        </div>

        {/* Links Column 3 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <h4 className="footer-heading-spark" style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem' }}>Insights</h4>
          <Link to="/news" className="footer-link-spark">Blog</Link>
          <Link to="/press-release" className="footer-link-spark">Press Release</Link>
          <Link to="/case-studies" className="footer-link-spark">Case Studies</Link>
          <Link to="/customer-stories" className="footer-link-spark">Customer Stories</Link>
          <Link to="/leadership" className="footer-link-spark">Awards</Link>
        </div>

        {/* Links Column 4 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <h4 className="footer-heading-spark" style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem' }}>Legal</h4>
          <Link to="/refunds-cancellations" className="footer-link-spark">Refunds & cancellations</Link>
          <Link to="/legal-statement" className="footer-link-spark">Legal Notice</Link>
          <Link to="/terms-of-use" className="footer-link-spark">Terms of Use</Link>
          <Link to="/privacy-policy" className="footer-link-spark">Acceptable Use Policy</Link>
          <Link to="/cookie-policy" className="footer-link-spark">Cookie Policy</Link>
          <Link to="/privacy-policy" className="footer-link-spark">Privacy Policy</Link>
        </div>

      </div>

      {/* Bottom Section: Locations + Demo */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '3rem',
        paddingTop: '2.5rem'
      }}>

        {/* Locations List */}
        <div style={{ flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.8, fontSize: '0.8rem' }}>
          <div><strong>Head Office:</strong> Plot No. 112, Udyog Vihar, Phase-1, Gurugram, Haryana-122016</div>
          <div><strong>New Delhi Office:</strong> IInd Floor, DLF, Moti Nagar, New Delhi-110015</div>
          <div><strong>West Delhi Office:</strong> WZ-1, Upper Ground Floor, Main Nazafgarh Road, Uttam Nagar West, Delhi-110059</div>
          <div><strong>Noida Office:</strong> Plot No. 125A, Block-C, Sec-2, Phase-1, Noida, Gautam Buddha Nagar, U.P.-201301</div>
          <div><strong>Pune Office:</strong> 501, 5th Floor, Pride Icon, Kharadi, Pune, Maharashtra-411014</div>
        </div>

        {/* Demo & Social */}
        <div style={{ flex: '1 1 300px', textAlign: window.innerWidth < 768 ? 'left' : 'right' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.35rem' }}>For Booking a Demo</h4>
          <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem', opacity: 0.85 }}>
            Mobile: +91 8800-101-102. Email: info@stefto.com
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: window.innerWidth < 768 ? 'flex-start' : 'flex-end' }}>
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, idx) => (
              <a key={idx} href="#" style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'white',
                color: '#041434',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.3)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

      </div>

    </div>

    {/* Definitve Copyright Strip */}
    <div style={{
      background: '#ffffff',
      borderTop: '1px solid rgba(4, 20, 52, 0.1)',
      padding: '1.25rem 2rem',
      textAlign: 'left',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <p style={{
        color: '#64748b',
        fontSize: '0.8rem',
        margin: 0,
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}>
        <strong style={{ color: '#475569' }}>Copyright &copy; 2007 &ndash; 2026</strong> Stefto Management Services (Incredible Management Services (India) Pvt Ltd)
      </p>
    </div>
  </footer>
);

const App = () => {
  return (
    <Router>
      <div className="bg-blobs">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/according-to-the-rbi-report-the-indian-household-debt-is-rising-but-it-is-relatively-low-in-comparison-with-other-emerging-markets" element={<AccordingToTheRbiReportTheIndianHouseholdDebtIsRisingButItIsRelativelyLowInComparisonWithOtherEmergingMarkets />} />
        <Route path="/automotive" element={<Automotive />} />
        <Route path="/back-office-support" element={<BackOfficeSupport />} />
        <Route path="/banking-and-financial-services" element={<BankingAndFinancialServices />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/credit-refine" element={<CreditRefine />} />
        <Route path="/customer-stories" element={<CustomerStories />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="/debt-collection" element={<DebtCollection />} />
        <Route path="/digital-debt-management" element={<DigitalDebtManagement />} />
        <Route path="/digital-lead-partner" element={<DigitalLeadPartner />} />
        <Route path="/health-care" element={<HealthCare />} />
        <Route path="/how-ai-is-making-debt-collection-more-human-a-2025-case-study" element={<HowAiIsMakingDebtCollectionMoreHumanA2025CaseStudy />} />
        <Route path="/inbound" element={<Inbound />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/legal-statement" element={<LegalStatement />} />
        <Route path="/new-update" element={<NewUpdate />} />
        <Route path="/news" element={<News />} />
        <Route path="/outbound" element={<Outbound />} />
        <Route path="/press-release" element={<PressRelease />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refunds-cancellations" element={<RefundsCancellations />} />
        <Route path="/retail-and-e-commerce" element={<RetailAndECommerce />} />
        <Route path="/retention-and-persistency" element={<RetentionAndPersistency />} />
        <Route path="/sales-support" element={<SalesSupport />} />
        <Route path="/security" element={<Security />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/telecom" element={<Telecom />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/the-significance-of-recovery-management-solutions-in-current-times" element={<TheSignificanceOfRecoveryManagementSolutionsInCurrentTimes />} />
        <Route path="/travel-hospitality-and-cargo" element={<TravelHospitalityAndCargo />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
