
export default function Rating({ rating, count, showCount = true, size = 'md' }) {
  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`${sizes[size]} ${
              star <= Math.round(rating) ? 'text-amber-400' : 'text-gray-300'
            } fill-current`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <span className={`${textSizes[size]} text-gray-600 font-medium`}>
        {rating.toFixed(1)}
      </span>
      {showCount && count && (
        <span className={`${textSizes[size]} text-gray-500`}>
          ({count})
        </span>
      )}
    </div>
  );
}