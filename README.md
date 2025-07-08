# Vintage Car Dealership

A sophisticated dark-themed website for a vintage car dealership, showcasing classic cars, expert team members, and professional restoration services. The site features a rich color palette of deep blacks, golds, and rust tones to create an authentic vintage automotive experience.

## Features

- **Dark Premium Design**: Rich color scheme with gold, brown, and rust accents
- **Car Inventory**: Browse vintage cars with detailed specifications and gallery
- **Expert Team**: Meet the skilled professionals behind the restoration work
- **Responsive Design**: Optimized for all devices
- **Dynamic Content**: Powered by Cosmic CMS for easy content management
- **Professional Layout**: Clean, modern design with vintage-inspired elements

## Clone this Bucket

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket to get started instantly:

[![Clone this Bucket](https://img.shields.io/badge/Clone%20this%20Bucket-4F46E5?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=car-dealership-production)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Create a content model for a company website with services, team members, testimonials, and case studies. It's for a car dealership company that deals with vintage cars. Use intelligent modelling.

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: staging in cosmic config. 

> The website is for a Vintage Car Dealership. The website should feel unique and authentic in design. It should have a dark color scheme, with colors like gold, brown, rust etc. Try to make it creative if possible.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **Cosmic SDK** - Official SDK for Cosmic API integration

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the vintage car dealership bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Add your Cosmic credentials to `.env.local`:
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

5. Run the development server:
   ```bash
   bun dev
   ```

## Cosmic SDK Examples

### Fetching Cars
```typescript
const response = await cosmic.objects.find({
  type: 'cars'
}).depth(1);
```

### Fetching Team Members
```typescript
const response = await cosmic.objects.find({
  type: 'team-members'
}).depth(1);
```

## Cosmic CMS Integration

This application integrates with [Cosmic](https://www.cosmicjs.com) CMS to manage:

- **Cars**: Vintage car inventory with specifications and galleries
- **Team Members**: Staff profiles with expertise and contact info
- **Case Studies**: Project showcases (ready for future content)
- **Testimonials**: Customer reviews (ready for future content)

For more information on the Cosmic SDK, visit the [Cosmic Docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Netlify
1. Push to GitHub
2. Connect to Netlify
3. Add environment variables
4. Deploy

Remember to add your Cosmic environment variables to your deployment platform.
<!-- README_END -->