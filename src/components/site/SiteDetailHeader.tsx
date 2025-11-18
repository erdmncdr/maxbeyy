import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import TagPill from '@/components/ui/TagPill';

interface SiteDetailHeaderProps {
  site: {
    name: string;
    logoUrl: string;
    url: string;
    rating: number;
    category: {
      name: string;
    };
    tags: Array<{
      tag: {
        name: string;
      };
    }>;
  };
}

export default function SiteDetailHeader({ site }: SiteDetailHeaderProps) {
  return (
    <div className="bg-card rounded-lg p-8 shadow-lg border border-border mb-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left: Logo and Info */}
        <div className="flex items-start space-x-6">
          {/* Logo */}
          <div className="w-24 h-24 bg-secondary rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
            {site.logoUrl ? (
              <img src={site.logoUrl} alt={site.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-4xl font-bold text-accent">{site.name.charAt(0)}</span>
            )}
          </div>

          {/* Info */}
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{site.name}</h1>
            <div className="flex items-center space-x-3 mb-3">
              {/* Rating */}
              <div className="flex items-center space-x-1">
                <svg className="w-6 h-6 text-accent fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="text-2xl font-bold text-accent">{site.rating.toFixed(1)}</span>
                <span className="text-muted text-sm">/ 10</span>
              </div>

              {/* Category */}
              <Badge variant="info">{site.category.name}</Badge>
            </div>

            {/* Tags */}
            {site.tags && site.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {site.tags.map((tagRel, index) => (
                  <TagPill key={index}>{tagRel.tag.name}</TagPill>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: CTA Button */}
        <div className="flex-shrink-0">
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button variant="primary" size="lg">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Siteye Git
            </Button>
          </a>
          <p className="text-xs text-muted mt-2 text-center">18+ | Sorumlu Oyun</p>
        </div>
      </div>
    </div>
  );
}
