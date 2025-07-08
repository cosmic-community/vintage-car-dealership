import { TeamMember } from '@/types';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="card-vintage group">
      {/* Photo */}
      <div className="relative overflow-hidden rounded-t-lg">
        {member.metadata.photo ? (
          <img
            src={`${member.metadata.photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={member.metadata.full_name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            width={300}
            height={300}
          />
        ) : (
          <div className="w-full h-64 bg-vintage-dark flex items-center justify-center">
            <span className="text-vintage-gold text-lg">No Photo Available</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-vintage-gold mb-2">
          {member.metadata.full_name}
        </h3>
        
        <p className="text-vintage-gold font-medium mb-4">
          {member.metadata.position}
        </p>

        {member.metadata.years_experience && (
          <p className="text-vintage-cream mb-4">
            <span className="font-semibold">Experience:</span> {member.metadata.years_experience} years
          </p>
        )}

        {member.metadata.expertise && member.metadata.expertise.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-vintage-gold mb-2">Expertise:</h4>
            <div className="flex flex-wrap gap-2">
              {member.metadata.expertise.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-vintage-rust text-vintage-cream text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {member.metadata.bio && (
          <div
            className="text-vintage-cream text-sm prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: member.metadata.bio }}
          />
        )}

        {/* Contact Info */}
        <div className="mt-4 pt-4 border-t border-vintage-dark">
          {member.metadata.phone && (
            <p className="text-vintage-cream text-sm">
              <span className="font-semibold">Phone:</span> {member.metadata.phone}
            </p>
          )}
          {member.metadata.email && (
            <p className="text-vintage-cream text-sm">
              <span className="font-semibold">Email:</span> {member.metadata.email}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}