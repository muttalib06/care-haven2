
import Link from 'next/link';
import Image from 'next/image';
import Badge from '../ui/Badge';

export default function RelatedGuides({ guides }) {
  if (!guides || guides.length === 0) return null;

  return (
    <div className="mt-12 pt-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Related Guides
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <Link
            key={guide._id}
            href={`/care-guides/${guide.slug}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-40">
                <Image
                  src={guide.thumbnail.url}
                  alt={guide.thumbnail.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <Badge variant="primary" size="sm">
                  {guide.careType.charAt(0).toUpperCase() + guide.careType.slice(1)} Care
                </Badge>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-1 line-clamp-2 group-hover:text-[#3490c5] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {guide.excerpt}
                </p>
                <div className="flex items-center gap-3 mt-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {guide.readingTime} min
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    {guide.ratings.average.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}