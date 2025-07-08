import { createBucketClient } from '@cosmicjs/sdk';
import { Car, TeamMember, CaseStudy, Testimonial, CosmicResponse } from '@/types';

// Initialize Cosmic client
export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
});

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all cars
export async function getCars(): Promise<Car[]> {
  try {
    const response = await cosmic.objects.find({
      type: 'cars'
    }).depth(1);
    
    return response.objects as Car[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch cars');
  }
}

// Fetch single car by slug
export async function getCar(slug: string): Promise<Car | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'cars',
      slug
    }).depth(1);
    
    return response.object as Car;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch car');
  }
}

// Fetch all team members
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects.find({
      type: 'team-members'
    }).depth(1);
    
    return response.objects as TeamMember[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch team members');
  }
}

// Fetch single team member by slug
export async function getTeamMember(slug: string): Promise<TeamMember | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'team-members',
      slug
    }).depth(1);
    
    return response.object as TeamMember;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch team member');
  }
}

// Fetch all case studies
export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await cosmic.objects.find({
      type: 'case-studies'
    }).depth(1);
    
    return response.objects as CaseStudy[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch case studies');
  }
}

// Fetch all testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects.find({
      type: 'testimonials'
    }).depth(1);
    
    return response.objects as Testimonial[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch testimonials');
  }
}

// Fetch available cars (status: available)
export async function getAvailableCars(): Promise<Car[]> {
  try {
    const response = await cosmic.objects.find({
      type: 'cars',
      'metadata.status.key': 'available'
    }).depth(1);
    
    return response.objects as Car[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch available cars');
  }
}

// Fetch featured testimonials
export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects.find({
      type: 'testimonials',
      'metadata.featured': true
    }).depth(1);
    
    return response.objects as Testimonial[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch featured testimonials');
  }
}

// Fetch featured case studies
export async function getFeaturedCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await cosmic.objects.find({
      type: 'case-studies',
      'metadata.featured': true
    }).depth(1);
    
    return response.objects as CaseStudy[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch featured case studies');
  }
}