import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Check, Copy } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) return;

    setIsSubmitting(true);
    setFeedback('// TRANSMITTING...');

    setTimeout(() => {
      setIsSubmitting(false);
      setFeedback('// MESSAGE LOGGED & SENT. THANK YOU.');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => {
        setFeedback(null);
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="space-y-8 border-t border-[#444748]/30 pt-16 scroll-mt-20">
      <div className="space-y-2">
        <div className="font-code-inline text-xs text-[#8e9192] tracking-widest uppercase">
          09 / GET IN TOUCH
        </div>
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
          LET'S CONNECT
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <p className="font-body-md text-[#c7c6c6] text-sm sm:text-base leading-relaxed">
            I am always open to discussing new academic opportunities, internships, open-source
            projects, and technical questions. Feel free to contact me directly.
          </p>

          <div className="space-y-4 pt-2">
            {/* Email */}
            <div className="p-5 bg-[#201f1f] border border-[#444748]/30 rounded space-y-1 group relative">
              <div className="flex items-center justify-between">
                <span className="block font-code-inline text-[11px] text-[#8e9192] uppercase">
                  EMAIL
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="text-[#8e9192] hover:text-white transition-colors cursor-pointer text-xs flex items-center space-x-1"
                  title="Copy email"
                >
                  {copiedField === 'email' ? (
                    <span className="text-emerald-400 flex items-center text-[10px] font-code-inline">
                      <Check className="w-3 h-3 mr-1" /> COPIED
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <a
                className="font-body-md text-white font-medium hover:underline break-all block text-sm sm:text-base"
                href={`mailto:${PERSONAL_INFO.email}`}
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Phone */}
            <div className="p-5 bg-[#201f1f] border border-[#444748]/30 rounded space-y-1 relative">
              <div className="flex items-center justify-between">
                <span className="block font-code-inline text-[11px] text-[#8e9192] uppercase">
                  PHONE
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="text-[#8e9192] hover:text-white transition-colors cursor-pointer text-xs flex items-center space-x-1"
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <span className="text-emerald-400 flex items-center text-[10px] font-code-inline">
                      <Check className="w-3 h-3 mr-1" /> COPIED
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <a
                className="font-body-md text-white font-medium hover:underline block text-sm sm:text-base"
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>

            {/* Location */}
            <div className="p-5 bg-[#201f1f] border border-[#444748]/30 rounded space-y-1">
              <span className="block font-code-inline text-[11px] text-[#8e9192] uppercase">
                LOCATION
              </span>
              <span className="font-body-md text-white font-medium block text-sm sm:text-base">
                {PERSONAL_INFO.location}, India
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Minimal Dark Contact Form */}
        <div className="lg:col-span-7 bg-[#201f1f] border border-[#444748]/40 rounded p-6 sm:p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                className="block font-code-inline text-[11px] text-[#8e9192] uppercase"
                htmlFor="name"
              >
                NAME
              </label>
              <input
                id="name"
                className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#444748]/40 text-white placeholder:text-[#8e9192] font-body-md rounded focus:outline-none focus:border-white transition-colors text-sm"
                placeholder="Your name or organization"
                required
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label
                className="block font-code-inline text-[11px] text-[#8e9192] uppercase"
                htmlFor="email"
              >
                EMAIL
              </label>
              <input
                id="email"
                className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#444748]/40 text-white placeholder:text-[#8e9192] font-body-md rounded focus:outline-none focus:border-white transition-colors text-sm"
                placeholder="name@domain.com"
                required
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label
                className="block font-code-inline text-[11px] text-[#8e9192] uppercase"
                htmlFor="message"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#444748]/40 text-white placeholder:text-[#8e9192] font-body-md rounded focus:outline-none focus:border-white transition-colors resize-none text-sm"
                placeholder="Type your message or project requirements..."
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>

            <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
              <button
                disabled={isSubmitting}
                className="px-6 py-3 bg-white text-[#2f3131] font-medium text-sm rounded hover:bg-[#e2e2e2] transition-colors cursor-pointer disabled:opacity-50"
                type="submit"
              >
                {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
              </button>

              {feedback && (
                <span className="font-code-inline text-xs text-[#c4c7c8]">{feedback}</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
