import React, { useState } from 'react';
import { OrdinatusLayout } from '../components/layout/OrdinatusLayout';
import { OrdinatusCard } from '../components/ui/OrdinatusCard';
import { OrdinatusButton } from '../components/ui/OrdinatusButton';
import { OrdinatusGear } from '../components/ui/OrdinatusGear';
import { OrdinatusInput } from '../components/ui/OrdinatusInput';

interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experienceLevel: string;
  investmentGoals: string[];
  riskTolerance: string;
  preferredAssetClasses: string[];
  timeHorizon: string;
  initialCapital: number;
  monthlyContribution: number;
  riskScore: number;
}

export default function ProfileForm() {
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experienceLevel: 'beginner',
    investmentGoals: [],
    riskTolerance: 'medium',
    preferredAssetClasses: [],
    timeHorizon: '5-10',
    initialCapital: 10000,
    monthlyContribution: 500,
    riskScore: 5,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      const currentValues = [...formData[name as keyof ProfileFormData] as string[]];
      
      setFormData({
        ...formData,
        [name]: checked
          ? [...currentValues, value]
          : currentValues.filter(item => item !== value)
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'number' ? parseFloat(value) || 0 : value
      });
    }
  };

  return (
    <OrdinatusLayout 
      title="Profile Form | Beginner Investor Hub"
      description="Complete your investment profile"
    >
      <div className="Ordinatus-section Ordinatus-section-light">
        <div className="Ordinatus-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex justify-center items-center space-x-6 mb-6">
                <OrdinatusGear size="xl" color="brass" speed="slow" />
                <h1 className="text-4xl md:text-5xl font-bold Ordinatus-heading-primary text-Ordinatus-moonlight-blue">
                  Complete Your Profile
                </h1>
                <OrdinatusGear size="xl" color="brass" speed="reverse" />
              </div>
              <p className="text-gray-600 Ordinatus-text-body">
                Tell us about yourself to personalize your investment experience
              </p>
            </div>

            <OrdinatusCard variant="default" animated>
              <div className="p-8">
                {/* Progress Bar */}
                <OrdinatusCard variant="wood" className="mb-8">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-3">
                        <OrdinatusGear size="md" color="steel" speed="medium" />
                        <span className="text-sm font-semibold text-gray-700 Ordinatus-text-technical">Profile Completion</span>
                      </div>
                      <span className="text-sm font-bold text-Ordinatus-moonlight-blue Ordinatus-text-technical">30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-Ordinatus-brass-gold h-3 rounded-full transition-all duration-500 ease-out" 
                        style={{ width: '30%' }}
                      ></div>
                    </div>
                  </div>
                </OrdinatusCard>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information Section */}
                  <section className="p-6 border border-gray-200 rounded-lg bg-gray-50/50">
                    <div className="flex items-center space-x-3 mb-6">
                      <OrdinatusGear size="md" color="steel" speed="medium" />
                      <h2 className="text-xl font-semibold Ordinatus-heading-secondary text-Ordinatus-moonlight-blue">
                        Personal Information
                      </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-group">
                        <label htmlFor="firstName" className="form-label Ordinatus-text-body">First Name</label>
                        <OrdinatusInput
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="lastName" className="form-label Ordinatus-text-body">Last Name</label>
                        <OrdinatusInput
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label Ordinatus-text-body">Email</label>
                        <OrdinatusInput
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone" className="form-label Ordinatus-text-body">Phone</label>
                        <OrdinatusInput
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </section>

                  {/* Investment Profile Section */}
                  <section className="p-6 border border-gray-200 rounded-lg bg-gray-50/50">
                    <div className="flex items-center space-x-3 mb-6">
                      <OrdinatusGear size="md" color="brass" speed="slow" />
                      <h2 className="text-xl font-semibold Ordinatus-heading-secondary text-Ordinatus-moonlight-blue">
                        Investment Profile
                      </h2>
                    </div>

                    <div className="form-group mb-6">
                      <label htmlFor="experienceLevel" className="form-label Ordinatus-text-body">
                        Investment Experience
                      </label>
                      <select
                        id="experienceLevel"
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-Ordinatus-moonlight-blue focus:ring-Ordinatus-moonlight-blue sm:text-sm p-2.5 bg-white"
                        required
                      >
                        <option value="beginner">Beginner (0-2 years)</option>
                        <option value="intermediate">Intermediate (2-5 years)</option>
                        <option value="advanced">Advanced (5+ years)</option>
                        <option value="professional">Professional</option>
                      </select>
                    </div>

                    <div className="form-group mb-6">
                      <label className="form-label Ordinatus-text-body">Investment Goals</label>
                      <div className="flex flex-wrap gap-4">
                        {['Retirement', 'Wealth Building', 'Education', 'Major Purchase', 'Other'].map((goal) => (
                          <label key={goal} className="inline-flex items-center space-x-2 text-sm text-gray-700 cursor-pointer Ordinatus-text-body">
                            <input
                              type="checkbox"
                              name="investmentGoals"
                              value={goal.toLowerCase()}
                              checked={formData.investmentGoals.includes(goal.toLowerCase())}
                              onChange={handleInputChange}
                              className="h-4 w-4 text-Ordinatus-moonlight-blue border-gray-300 rounded focus:ring-Ordinatus-moonlight-blue"
                            />
                            <span>{goal}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="form-group mb-6">
                      <label className="form-label Ordinatus-text-body">Risk Tolerance</label>
                      <div className="flex flex-wrap gap-4">
                        {[
                          { value: 'conservative', label: 'Conservative' },
                          { value: 'moderate', label: 'Moderate' },
                          { value: 'balanced', label: 'Balanced' },
                          { value: 'growth', label: 'Growth' },
                          { value: 'aggressive', label: 'Aggressive' },
                        ].map((option) => (
                          <label key={option.value} className="inline-flex items-center space-x-2 text-sm text-gray-700 cursor-pointer Ordinatus-text-body">
                            <input
                              type="radio"
                              name="riskTolerance"
                              value={option.value}
                              checked={formData.riskTolerance === option.value}
                              onChange={handleInputChange}
                              className="h-4 w-4 text-Ordinatus-moonlight-blue border-gray-300 focus:ring-Ordinatus-moonlight-blue"
                            />
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                formData.riskTolerance === option.value ? 'bg-Ordinatus-moonlight-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}>
                                {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-group">
                        <label htmlFor="initialCapital" className="form-label Ordinatus-text-body">
                          Initial Investment Capital
                        </label>
                        <div className="relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">$</span>
                          </div>
                          <OrdinatusInput
                            type="number"
                            id="initialCapital"
                            name="initialCapital"
                            value={formData.initialCapital}
                            onChange={handleInputChange}
                            min="0"
                            step="100"
                            className="pl-7"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="monthlyContribution" className="form-label Ordinatus-text-body">
                          Monthly Contribution
                        </label>
                        <div className="relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">$</span>
                          </div>
                          <OrdinatusInput
                            type="number"
                            id="monthlyContribution"
                            name="monthlyContribution"
                            value={formData.monthlyContribution}
                            onChange={handleInputChange}
                            min="0"
                            step="10"
                            className="pl-7"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Success/Error Messages */}
                  {success && (
                    <OrdinatusCard variant="default" className="border-green-200 bg-green-50">
                      <div className="p-4 flex items-center justify-center">
                        <div className="w-5 h-5 mr-2 text-green-600">✓</div>
                        <span className="text-green-700 Ordinatus-text-body">Profile updated successfully!</span>
                      </div>
                    </OrdinatusCard>
                  )}
                  {error && (
                    <OrdinatusCard variant="default" className="border-red-200 bg-red-50">
                      <div className="p-4 flex items-center justify-center">
                        <div className="w-5 h-5 mr-2 text-red-600">✕</div>
                        <span className="text-red-700 Ordinatus-text-body">{error}</span>
                      </div>
                    </OrdinatusCard>
                  )}

                  <div className="flex justify-between gap-4 pt-4 border-t border-gray-200">
                    <OrdinatusButton
                      variant="secondary"
                      size="lg"
                      className="flex-1"
                      onClick={() => window.history.back()}
                      disabled={loading}
                    >
                      Cancel
                    </OrdinatusButton>
                    <OrdinatusButton
                      variant="primary"
                      size="lg"
                      className="flex-1"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                          <span className="flex items-center">
                              <OrdinatusGear size="sm" color="steel" speed="fast" className="mr-2" />
                              Saving...
                          </span>
                      ) : (
                          'Save Changes'
                      )}
                    </OrdinatusButton>
                  </div>
                </form>
              </div>
            </OrdinatusCard>
          </div>
        </div>
      </div>
    </OrdinatusLayout>
  );
}
