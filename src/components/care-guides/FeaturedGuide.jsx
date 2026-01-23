
import Link from 'next/link';
import Image from 'next/image';
import Badge from '../ui/Badge';
import Rating from '../ui/Rating';

export default function FeaturedGuide({ guide }) {
  if (!guide) return null;

  const getCareTypeVariant = (type) => {
    const variants = {
      elderly: 'elderly',
      children: 'children',
      special: 'special'
    };
    return variants[type] || 'default';
  };

  return (
    <div className="bg-gradient-to-br from-[#3490c5] to-[#2c7aa8] rounded-2xl overflow-hidden shadow-2xl mb-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative h-64 md:h-auto">
          <Image
            src={guide.featuredImage.url}
            alt={guide.featuredImage.alt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 flex flex-col justify-center text-white">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="warning" size="lg">
              ⭐ Featured Guide
            </Badge>
            <Badge variant={getCareTypeVariant(guide.careType)} size="md">
              {guide.careType.charAt(0).toUpperCase() + guide.careType.slice(1)} Care
            </Badge>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {guide.title}
          </h2>

          <p className="text-white/90 text-lg mb-6 line-clamp-3">
            {guide.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-6 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{guide.readingTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>{guide.stats.views.toLocaleString()} views</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${
                      star <= Math.round(guide.ratings.average) ? 'text-amber-400' : 'text-white/30'
                    } fill-current`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span>{guide.ratings.average} ({guide.ratings.count})</span>
            </div>
          </div>

          <Link
            href={`/care-guides/${guide.slug}`}
            className="inline-flex items-center gap-2 bg-white text-[#3490c5] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-fit"
          >
            Read Full Guide
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}