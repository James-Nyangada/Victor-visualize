'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

export function IntakeForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: '',
    description: '',
    timeline: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-[#14141A] border border-white/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
      <div className="font-mono text-xs text-[#F05A28] mb-8 uppercase tracking-widest">The Intake Protocol</div>
      
      <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FloatingInput label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
          <FloatingInput label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        
        <FloatingInput label="Organization / Brand" name="organization" value={formData.organization} onChange={handleChange} />
        
        <div className="relative group">
          <select 
            name="service" 
            value={formData.service} 
            onChange={handleChange} 
            required
            className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#F05A28] transition-colors appearance-none peer"
          >
            <option value="" disabled className="bg-[#14141A]"></option>
            <option value="video" className="bg-[#14141A]">Video Production</option>
            <option value="photo" className="bg-[#14141A]">Photography</option>
            <option value="design" className="bg-[#14141A]">Graphic Design</option>
            <option value="other" className="bg-[#14141A]">Other</option>
          </select>
          <label className={`absolute left-0 transition-all duration-300 pointer-events-none font-mono uppercase tracking-widest ${formData.service ? '-top-2 text-[10px] text-[#A1A1AA]' : 'top-4 text-xs text-[#A1A1AA] peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-[#F05A28]'}`}>
            Service Needed *
          </label>
        </div>

        <div className="relative group">
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            required
            rows={4}
            className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#F05A28] transition-colors resize-none peer"
          />
          <label className={`absolute left-0 transition-all duration-300 pointer-events-none font-mono uppercase tracking-widest ${formData.description ? '-top-2 text-[10px] text-[#A1A1AA]' : 'top-4 text-xs text-[#A1A1AA] peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-[#F05A28]'}`}>
            Project Description *
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group">
            <select 
              name="timeline" 
              value={formData.timeline} 
              onChange={handleChange} 
              required
              className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#F05A28] transition-colors appearance-none peer"
            >
              <option value="" disabled className="bg-[#14141A]"></option>
              <option value="asap" className="bg-[#14141A]">ASAP</option>
              <option value="1month" className="bg-[#14141A]">Within 1 Month</option>
              <option value="3months" className="bg-[#14141A]">1-3 Months</option>
              <option value="flexible" className="bg-[#14141A]">Flexible</option>
            </select>
            <label className={`absolute left-0 transition-all duration-300 pointer-events-none font-mono uppercase tracking-widest ${formData.timeline ? '-top-2 text-[10px] text-[#A1A1AA]' : 'top-4 text-xs text-[#A1A1AA] peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-[#F05A28]'}`}>
              Timeline *
            </label>
          </div>

          <div className="relative group">
            <select 
              name="budget" 
              value={formData.budget} 
              onChange={handleChange} 
              required
              className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#F05A28] transition-colors appearance-none peer"
            >
              <option value="" disabled className="bg-[#14141A]"></option>
              <option value="small" className="bg-[#14141A]">Under $2,000</option>
              <option value="medium" className="bg-[#14141A]">$2,000 - $5,000</option>
              <option value="large" className="bg-[#14141A]">$5,000 - $10,000</option>
              <option value="enterprise" className="bg-[#14141A]">$10,000+</option>
            </select>
            <label className={`absolute left-0 transition-all duration-300 pointer-events-none font-mono uppercase tracking-widest ${formData.budget ? '-top-2 text-[10px] text-[#A1A1AA]' : 'top-4 text-xs text-[#A1A1AA] peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-[#F05A28]'}`}>
              Budget Range *
            </label>
          </div>
        </div>

        <div className="pt-8">
          <button 
            type="submit" 
            disabled={status !== 'idle'}
            className="w-full relative overflow-hidden rounded-full bg-white/5 border border-white/10 py-5 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <AnimatePresence mode="wait">
              {status === 'idle' && (
                <motion.div 
                  key="idle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="relative flex items-center justify-center gap-3"
                >
                  <div className="absolute inset-0 bg-gradient-sunset opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
                  <span className="font-bold text-white tracking-widest uppercase text-sm relative z-10">Submit Inquiry</span>
                </motion.div>
              )}
              {status === 'submitting' && (
                <motion.div 
                  key="submitting"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-4"
                >
                  <span className="font-bold text-white tracking-widest uppercase text-sm">Sending...</span>
                  <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-sunset"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, ease: "linear" }}
                    />
                  </div>
                </motion.div>
              )}
              {status === 'success' && (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-3 text-[#25D366]"
                >
                  <Check className="w-5 h-5" />
                  <span className="font-bold tracking-widest uppercase text-sm">Received</span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </form>
    </div>
  );
}

function FloatingInput({ label, type = "text", name, value, onChange, required = false }: any) {
  return (
    <div className="relative group">
      <input 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
        required={required}
        className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#F05A28] transition-colors peer"
      />
      <label className={`absolute left-0 transition-all duration-300 pointer-events-none font-mono uppercase tracking-widest ${value ? '-top-2 text-[10px] text-[#A1A1AA]' : 'top-4 text-xs text-[#A1A1AA] peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-[#F05A28]'}`}>
        {label} {required && '*'}
      </label>
    </div>
  );
}
