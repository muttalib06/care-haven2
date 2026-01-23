
import Link from 'next/link';
import Image from 'next/image';
import Badge from '../ui/Badge';
import Rating from '../ui/Rating';

export default function GuideCard({ guide }) {
  const getCareTypeVariant = (type) => {
    const variants = {
      elderly: 'elderly',
      children: 'children',
      special: 'special'
    };
    return variants[type] || 'default';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <Link href={`/care-guides/${guide.slug}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={guide.thumbnail.url}
            alt={guide.thumbnail.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {guide.isFeatured && (
            <div className="absolute top-3 left-3">
              <Badge variant="warning" size="sm">
                ⭐ Featured
              </Badge>
            </div>
          )}
          {guide.isPopular && (
            <div className="absolute top-3 right-3">
              <Badge variant="success" size="sm">
                🔥 Popular
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant={getCareTypeVariant(guide.careType)}>
              {guide.careType.charAt(0).toUpperCase() + guide.careType.slice(1)} Care
            </Badge>
            <Badge variant="default" size="sm">
              {guide.difficulty.charAt(0).toUpperCase() + guide.difficulty.slice(1)}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#3490c5] transition-colors line-clamp-2">
            {guide.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
            {guide.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {guide.readingTime} min
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {guide.stats.views.toLocaleString()}
              </span>
            </div>
            <Rating rating={guide.ratings.average} count={guide.ratings.count} size="sm" showCount={false} />
          </div>

          {/* Author */}
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
            <Image
              src={guide.author.avatar}
              alt={guide.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {guide.author.name}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {guide.author.credentials}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}