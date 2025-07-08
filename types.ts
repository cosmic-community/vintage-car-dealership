// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type_slug: string;
  created_at: string;
  modified_at: string;
}

// Car interface
interface Car extends CosmicObject {
  type_slug: 'cars';
  metadata: {
    make: string;
    model: string;
    year: number;
    price?: number;
    status?: {
      key: string;
      value: string;
    };
    description?: string;
    specifications?: {
      engine?: string;
      transmission?: string;
      drivetrain?: string;
      exterior_color?: string;
      interior_color?: string;
      fuel_type?: string;
      [key: string]: any;
    };
    gallery?: CarImage[];
    condition?: {
      key: string;
      value: string;
    };
    mileage?: number;
    vin?: string;
  };
}

// Team Member interface
interface TeamMember extends CosmicObject {
  type_slug: 'team-members';
  metadata: {
    full_name: string;
    position: string;
    bio?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    expertise?: string[];
    phone?: string;
    email?: string;
    years_experience?: number;
  };
}

// Case Study interface
interface CaseStudy extends CosmicObject {
  type_slug: 'case-studies';
  metadata: {
    project_title: string;
    car?: Car;
    project_type?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    before_photos?: CarImage[];
    after_photos?: CarImage[];
    team_members?: TeamMember[];
    duration?: string;
    featured?: boolean;
  };
}

// Testimonial interface
interface Testimonial extends CosmicObject {
  type_slug: 'testimonials';
  metadata: {
    customer_name: string;
    review: string;
    rating?: {
      key: string;
      value: string;
    };
    car_purchased?: Car;
    location?: string;
    date?: string;
    featured?: boolean;
  };
}

// Car Image interface
interface CarImage {
  url: string;
  imgix_url: string;
}

// API Response interface
interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type literals for select-dropdown values
type CarStatus = 'available' | 'sold' | 'restoration' | 'reserved';
type CarCondition = 'excellent' | 'very-good' | 'good' | 'fair' | 'project';
type ProjectType = 'restoration' | 'partial-restoration' | 'maintenance' | 'sale' | 'appraisal';
type Rating = '5' | '4' | '3' | '2' | '1';

// Type guards
function isCar(obj: CosmicObject): obj is Car {
  return obj.type_slug === 'cars';
}

function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type_slug === 'team-members';
}

function isCaseStudy(obj: CosmicObject): obj is CaseStudy {
  return obj.type_slug === 'case-studies';
}

function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type_slug === 'testimonials';
}

export type {
  CosmicObject,
  Car,
  TeamMember,
  CaseStudy,
  Testimonial,
  CarImage,
  CosmicResponse,
  CarStatus,
  CarCondition,
  ProjectType,
  Rating
};

export {
  isCar,
  isTeamMember,
  isCaseStudy,
  isTestimonial
};