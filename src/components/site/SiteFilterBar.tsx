'use client';

import { useState } from 'react';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import TagPill from '@/components/ui/TagPill';

interface SiteFilterBarProps {
  categories: Array<{ id: string; name: string; slug: string }>;
  tags: Array<{ id: string; name: string; slug: string }>;
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  search: string;
  categorySlug: string;
  tagSlugs: string[];
  sortBy: string;
}

export default function SiteFilterBar({ categories, tags, onFilterChange }: SiteFilterBarProps) {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    categorySlug: '',
    tagSlugs: [],
    sortBy: 'rating_desc',
  });

  const updateFilters = (updates: Partial<FilterState>) => {
    const newFilters = { ...filters, ...updates };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleTag = (tagSlug: string) => {
    const newTagSlugs = filters.tagSlugs.includes(tagSlug)
      ? filters.tagSlugs.filter((s) => s !== tagSlug)
      : [...filters.tagSlugs, tagSlug];
    updateFilters({ tagSlugs: newTagSlugs });
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-md border border-border mb-8">
      <h3 className="text-lg font-semibold text-foreground mb-4">Filtrele ve Ara</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Search */}
        <Input
          placeholder="Site ara..."
          value={filters.search}
          onChange={(e) => updateFilters({ search: e.target.value })}
          fullWidth
        />

        {/* Category */}
        <Select
          value={filters.categorySlug}
          onChange={(e) => updateFilters({ categorySlug: e.target.value })}
          fullWidth
        >
          <option value="">Tüm Kategoriler</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </Select>

        {/* Sort */}
        <Select
          value={filters.sortBy}
          onChange={(e) => updateFilters({ sortBy: e.target.value })}
          fullWidth
        >
          <option value="rating_desc">En Yüksek Puan</option>
          <option value="rating_asc">En Düşük Puan</option>
          <option value="newest">En Yeni</option>
          <option value="recommended">Önerilenler</option>
        </Select>
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div>
          <p className="text-sm text-muted mb-2">Etiketler:</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <TagPill
                key={tag.id}
                active={filters.tagSlugs.includes(tag.slug)}
                onClick={() => toggleTag(tag.slug)}
              >
                {tag.name}
              </TagPill>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
