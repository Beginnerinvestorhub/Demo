import * as yup from 'yup';

// Simple validation schema that matches ProfileFormData
export const profileValidationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().optional(),
  bio: yup.string().optional(),
  riskTolerance: yup.string().oneOf(['conservative', 'moderate', 'aggressive']).required('Risk tolerance is required'),
  investmentGoals: yup.array().of(yup.string()).optional(),
  timeHorizon: yup.string().oneOf(['short_term', 'medium_term', 'long_term']).optional(),
});

// Simplified schema for ProfileForm
export const simpleProfileValidationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  riskTolerance: yup.string().oneOf(['conservative', 'moderate', 'aggressive']).required('Risk tolerance is required'),
});

export const onboardingValidationSchema = yup.object({
  riskProfile: yup.string().required('Risk profile is required'),
  investmentGoals: yup.array().of(yup.string()).min(1, 'At least one investment goal is required'),
  timeHorizon: yup.string().required('Time horizon is required'),
  learningStyle: yup.string().optional(),
});

export const portfolioValidationSchema = yup.object({
  name: yup.string().required('Portfolio name is required'),
  description: yup.string().optional(),
  initialInvestment: yup.number().positive('Initial investment must be positive').required('Initial investment is required'),
  riskTolerance: yup.string().oneOf(['conservative', 'moderate', 'aggressive']).required('Risk tolerance is required'),
});