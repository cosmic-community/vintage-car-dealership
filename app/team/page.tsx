import { getTeamMembers } from '@/lib/cosmic';
import TeamCard from '@/components/TeamCard';
import { TeamMember } from '@/types';

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();

  return (
    <div className="bg-vintage-black min-h-screen">
      <div className="section-padding">
        <div className="container-vintage">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Our Expert Team
            </h1>
            <p className="text-xl text-vintage-cream max-w-3xl mx-auto">
              Meet the skilled professionals who bring decades of experience to every restoration project and sale.
            </p>
          </div>

          {teamMembers.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-vintage-gold mb-4">
                Team Information Coming Soon
              </h2>
              <p className="text-vintage-cream">
                We're updating our team profiles. Check back soon to meet our experts.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member: TeamMember) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}