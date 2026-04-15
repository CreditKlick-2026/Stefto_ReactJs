import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, User, Eye, EyeOff, Loader2, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'register'
  
  // Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');


  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setError('');
    setSuccessMsg('');
    setShowPassword(false);
  };

  const switchTab = (tab) => {
    resetForm();
    setActiveTab(tab);
  };

  // Auth Guard: Direct to dashboard if already logged in
  useEffect(() => {
    if (localStorage.getItem('stefto_admin_token')) {
      navigate('/admin-dashboard');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        localStorage.setItem('stefto_admin_token', data.data?.token || 'mock_token');
        navigate('/admin-dashboard');
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch (err) {
      setError('Unable to connect. Please ensure the server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMsg('');
    
    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setSuccessMsg('Account created successfully! You can now sign in.');
        setTimeout(() => {
          resetForm();
          setActiveTab('login');
        }, 2000);
      } else {
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError('Unable to connect. Please ensure the server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  // ==================== AUTH SCREEN ====================
  return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 px-4 py-16">

        {/* Subtle Background Accents */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-sky-100/40 rounded-full blur-3xl"></div>
        </div>

        {/* Auth Card */}
        <div className="relative z-10 w-full max-w-[420px]">

          {/* Logo / Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#2b3366] shadow-lg shadow-indigo-200/50 mb-4">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">
              {activeTab === 'login' ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-sm text-slate-500 mt-1.5">
              {activeTab === 'login' 
                ? 'Sign in to access Stefto CMS' 
                : 'Get started with your Stefto account'}
            </p>
          </div>

          {/* Card Body */}
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden">

            {/* Tab Switcher */}
            <div className="flex border-b border-slate-100">
              <button
                onClick={() => switchTab('login')}
                className={`flex-1 py-3.5 text-sm font-bold tracking-wide transition-all relative ${
                  activeTab === 'login'
                    ? 'text-[#2b3366]'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Sign In
                {activeTab === 'login' && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-[#2b3366] rounded-full"></span>
                )}
              </button>
              <button
                onClick={() => switchTab('register')}
                className={`flex-1 py-3.5 text-sm font-bold tracking-wide transition-all relative ${
                  activeTab === 'register'
                    ? 'text-[#2b3366]'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Register
                {activeTab === 'register' && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-[#2b3366] rounded-full"></span>
                )}
              </button>
            </div>

            {/* Form Area */}
            <div className="p-6 sm:p-8">

              {/* Alerts */}
              {error && (
                <div className="flex items-start gap-2.5 text-sm text-red-600 bg-red-50 p-3 rounded-xl border border-red-100 mb-5">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p className="leading-snug">{error}</p>
                </div>
              )}
              {successMsg && (
                <div className="flex items-start gap-2.5 text-sm text-emerald-700 bg-emerald-50 p-3 rounded-xl border border-emerald-100 mb-5">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p className="leading-snug font-medium">{successMsg}</p>
                </div>
              )}

              {/* ====== LOGIN FORM ====== */}
              {activeTab === 'login' && (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#2b3366] focus:bg-white focus:ring-2 focus:ring-indigo-50 text-slate-700 font-medium text-sm transition-all"
                      placeholder="Email address"
                    />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full pl-11 pr-11 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#2b3366] focus:bg-white focus:ring-2 focus:ring-indigo-50 text-slate-700 font-medium text-sm transition-all"
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      {showPassword ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 bg-[#2b3366] hover:bg-[#222a55] text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-indigo-200/30 hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
                    style={{ border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer' }}
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>Sign In <ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              )}

              {/* ====== REGISTER FORM ====== */}
              {activeTab === 'register' && (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#2b3366] focus:bg-white focus:ring-2 focus:ring-indigo-50 text-slate-700 font-medium text-sm transition-all"
                      placeholder="Full name"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#2b3366] focus:bg-white focus:ring-2 focus:ring-indigo-50 text-slate-700 font-medium text-sm transition-all"
                      placeholder="Email address"
                    />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                      className="w-full pl-11 pr-11 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#2b3366] focus:bg-white focus:ring-2 focus:ring-indigo-50 text-slate-700 font-medium text-sm transition-all"
                      placeholder="Password (min. 6 characters)"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      {showPassword ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 bg-[#2b3366] hover:bg-[#222a55] text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-indigo-200/30 hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
                    style={{ border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer' }}
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>Create Account <ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              )}

              {/* Bottom Toggle */}
              <p className="text-center text-sm text-slate-500 mt-6">
                {activeTab === 'login' ? (
                  <>Don't have an account?{' '}
                    <button
                      onClick={() => switchTab('register')}
                      className="text-[#2b3366] font-bold hover:underline"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >Register</button>
                  </>
                ) : (
                  <>Already have an account?{' '}
                    <button
                      onClick={() => switchTab('login')}
                      className="text-[#2b3366] font-bold hover:underline"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >Sign In</button>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-center text-xs text-slate-400 mt-6">
            Protected by Stefto Security Shield
          </p>
        </div>
      </div>
  );
};

export default Admin;
