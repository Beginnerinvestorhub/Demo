import React, { useState } from 'react';
import Link from 'next/link';
import { MechanicaLayout } from '../components/layout/mechanicaLayout';
import { MechanicaCard } from '../components/ui/mechanicaCard';
import { MechanicaGear } from '../components/ui/mechanicaGear';
import { MechanicaButton } from '../components/ui/mechanicaButton';
import { MechanicaInput } from '../components/ui/mechanicaInput';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: 'general', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try emailing us directly.');
    }
  };

  return (
    <MechanicaLayout
      title="Contact Us | Beginner Investor Hub"
      description="Get in touch with our support team. We're here to help with questions about portfolio simulation, AI coaching, and platform features."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
        {/* Technical Grid Overlay */}
        <div
          className="fixed inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 61, 122, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 61, 122, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12 relative">
            {/* Decorative Gears */}
            <div className="absolute -top-6 left-0">
              <MechanicaGear size="large" color="steel" speed="slow" />
            </div>
            <div className="absolute top-2 right-8">
              <MechanicaGear size="medium" color="brass" speed="reverse" />
            </div>

            <div className="flex justify-center items-center space-x-6 mb-8">
              <MechanicaGear size="xl" color="steel" speed="slow" />
              <h1 className="text-4xl md:text-5xl font-bold mechanica-heading-mechanical text-mechanica-moonlight-blue">
                Contact Us
              </h1>
              <MechanicaGear size="xl" color="steel" speed="reverse" />
            </div>

            <div className="w-24 h-1 bg-mechanica-polished-brass mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mechanica-text-technical">
              Have questions? We are here to help you master investing with precision
              engineering and expert guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                <MechanicaGear size="medium" color="brass" speed="slow" />
                <h2 className="text-2xl font-bold mechanica-heading-professional text-mechanica-moonlight-blue">
                  Get in Touch
                </h2>
              </div>
              <p className="text-gray-600 mechanica-text-technical">
                Choose the best way to reach us. We typically respond within
                24 hours during business days.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                <MechanicaCard variant="mechanical">
                  <div className="p-6 flex items-start space-x-4">
                    <div className="text-2xl">📧</div>
                    <div>
                      <h3 className="font-semibold text-lg mechanica-heading-professional text-gray-900">Email Support</h3>
                      <p className="text-gray-600 mechanica-text-technical">For general inquiries and support</p>
                      <a
                        href="mailto:info@beginnerinvestorhub.com"
                        className="text-mechanica-moonlight-blue hover:underline mechanica-text-technical"
                      >
                        info@beginnerinvestorhub.com
                      </a>
                    </div>
                  </div>
                </MechanicaCard>

                <MechanicaCard variant="brass">
                  <div className="p-6 flex items-start space-x-4">
                    <div className="text-2xl">🔒</div>
                    <div>
                      <h3 className="font-semibold text-lg mechanica-heading-professional text-gray-900">Privacy Inquiries</h3>
                      <p className="text-gray-600 mechanica-text-technical">Data requests and privacy concerns</p>
                      <a
                        href="mailto:info@beginnerinvestorhub.com"
                        className="text-mechanica-moonlight-blue hover:underline mechanica-text-technical"
                      >
                        info@beginnerinvestorhub.com
                      </a>
                    </div>
                  </div>
                </MechanicaCard>

                <MechanicaCard variant="wood">
                  <div className="p-6 flex items-start space-x-4">
                    <div className="text-2xl">💼</div>
                    <div>
                      <h3 className="font-semibold text-lg mechanica-heading-professional text-gray-900">Business Partnerships</h3>
                      <p className="text-gray-600 mechanica-text-technical">Affiliate program and collaborations</p>
                      <a
                        href="mailto:info@beginnerinvestorhub.com"
                        className="text-mechanica-moonlight-blue hover:underline mechanica-text-technical"
                      >
                        info@beginnerinvestorhub.com
                      </a>
                    </div>
                  </div>
                </MechanicaCard>

                <MechanicaCard variant="mechanical">
                  <div className="p-6 flex items-start space-x-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h3 className="font-semibold text-lg mechanica-heading-professional text-gray-900">Location</h3>
                      <p className="text-gray-700 mechanica-text-technical">Raleigh, North Carolina</p>
                      <p className="text-gray-600 mechanica-text-technical">United States</p>
                    </div>
                  </div>
                </MechanicaCard>
              </div>

              {/* Response Time */}
              <MechanicaCard variant="mechanical" animated>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MechanicaGear size="small" color="steel" speed="medium" />
                    <h3 className="font-semibold text-lg mechanica-heading-professional text-gray-900">Response Time</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 mechanica-text-technical">
                    <li>• General inquiries: Within 24 hours</li>
                    <li>• Technical support: Within 12 hours</li>
                    <li>• Privacy requests: Within 30 days</li>
                    <li>• Emergency issues: Immediate escalation</li>
                  </ul>
                </div>
              </MechanicaCard>

              {/* FAQ Link */}
              <MechanicaCard variant="wood">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <MechanicaGear size="small" color="brass" speed="slow" />
                    <h4 className="font-semibold text-lg mechanica-heading-professional text-mechanica-moonlight-blue">Looking for quick answers?</h4>
                  </div>
                  <p className="text-gray-600 mechanica-text-technical mb-4">
                    Check our FAQ section for common questions about portfolio
                    simulation, risk analysis, and platform features.
                  </p>
                  <Link href="/faq" className="text-mechanica-moonlight-blue hover:underline font-medium inline-flex items-center mechanica-text-technical">
                    Visit FAQ <span className="ml-1">→</span>
                  </Link>
                </div>
              </MechanicaCard>
            </div>

            {/* Contact Form */}
            <div>
              <MechanicaCard variant="mechanical" animated>
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <MechanicaGear size="medium" color="brass" speed="slow" />
                    <h2 className="text-2xl font-bold mechanica-heading-professional text-gray-900">
                      Send Us a Message
                    </h2>
                  </div>
                  <p className="text-gray-700 mechanica-text-technical mb-6">
                    Fill out the form below and we will get back to you as soon as
                    possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <MechanicaInput
                        label="Your Name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                      />
                    </div>

                    <div>
                      <MechanicaInput
                        type="email"
                        label="Email Address"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 mechanica-text-technical uppercase">
                        Subject <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mechanica-polished-brass focus:border-transparent bg-white mechanica-text-technical"
                        required
                      >
                        <option value="general">General Inquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="account">Account Issues</option>
                        <option value="feature">Feature Request</option>
                        <option value="bug">Bug Report</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 mechanica-text-technical uppercase">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mechanica-polished-brass focus:border-transparent mechanica-text-technical"
                        rows={6}
                        required
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    {status === 'success' && (
                      <div className="p-4 bg-green-50 text-green-800 rounded-md border border-green-200 mechanica-text-technical">
                        ✓ Message sent successfully! We will respond within 24 hours.
                      </div>
                    )}

                    {status === 'error' && (
                      <div className="p-4 bg-red-50 text-red-800 rounded-md border border-red-200 mechanica-text-technical">
                        ✕ {errorMessage}
                      </div>
                    )}

                    <MechanicaButton
                      variant="mechanical"
                      className="w-full"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? (
                        <>
                          <MechanicaGear size="small" color="steel" speed="fast" className="mr-2" />
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </MechanicaButton>
                  </form>
                </div>
              </MechanicaCard>
            </div>
          </div>
        </div>
      </div>
    </MechanicaLayout>
  );
}