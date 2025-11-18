import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import TagPill from '@/components/ui/TagPill';

interface SiteCardProps {
  site: {
    slug: string;
    name: string;
    logoUrl: string;
    rating: number;
    shortDescription: string;
    welcomeBonusText: string;
    category: {
      name: string;
    };
    tags: Array<{
      tag: {
        name: string;
      };
    }>;
    isRecommended?: boolean;
  };
}

export default function SiteCard({ site }: SiteCardProps) {
  return (
    <Card hover className="h-full flex flex-col">
      {/* Header with Logo and Rating */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
            {site.logoUrl ? (
              <img src={site.logoUrl} alt={site.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-2xl font-bold text-accent">{site.name.charAt(0)}</span>
            )}
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">{site.name}</h3>
            <Badge variant="info" size="sm">{site.category.name}</Badge>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center space-x-1">
            <svg className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span className="text-lg font-bold text-accent">{site.rating.toFixed(1)}</span>
          </div>
          {site.isRecommended && (
            <Badge variant="accent" size="sm" className="mt-1">Önerilen</Badge>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted text-sm mb-4 flex-grow">{site.shortDescription}</p>

      {/* Bonus */}
      <div className="bg-secondary/50 rounded-md p-3 mb-4">
        <p className="text-xs text-muted mb-1">Hoş Geldin Bonusu</p>
        <p className="text-accent font-semibold text-sm">{site.welcomeBonusText}</p>
      </div>

      {/* Tags */}
      {site.tags && site.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {site.tags.slice(0, 3).map((tagRel, index) => (
            <TagPill key={index}>{tagRel.tag.name}</TagPill>
          ))}
        </div>
      )}

      {/* Action Button */}
      <Link href={`/sites/${site.slug}`} className="mt-auto">
        <Button variant="primary" fullWidth>
          Detayları Gör
        </Button>
      </Link>
    </Card>
  );
}
