import Link from 'next/link';
import { getTeamMembers } from '@/lib/cosmic';
import TeamCard from './TeamCard';
import { TeamMember } from '@/types';

export default async function TeamSection() {
  const teamMembers = await getTeamMembers();
  const featuredMembers = teamMembers.slice(0, 3); // Show first 3 members

  return (
    <section className="section-padding bg-vintage-dark">
      <div className="container-vintage">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Meet Our Experts
          </h2>
          <p className="text-xl text-vintage-cream max-w-3xl mx-auto">
            Our skilled team brings decades of experience in vintage car restoration, sales, and appraisal services.
          </p>
        </div>

        {featuredMembers.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-vintage-gold mb-4">
              Team Profiles Coming Soon
            </h3>
            <p className="text-vintage-cream mb-8">
              We're updating our team information. Check back soon to meet our experts.
            </p>
            <Link href="/team" className="btn-vintage">
              Learn More
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredMembers.map((member: TeamMember) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
            <div className="text-center">
              <Link href="/team" className="btn-vintage">
                Meet The Full Team
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}