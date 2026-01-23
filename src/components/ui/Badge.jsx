
export default function Badge({ children, variant = 'default', size = 'md' }) {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-[#3490c5] bg-opacity-10 text-[#3490c5]',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-amber-100 text-amber-800',
    elderly: 'bg-purple-100 text-purple-800',
    children: 'bg-blue-100 text-blue-800',
    special: 'bg-pink-100 text-pink-800'
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base'
  };

  return (
    <span className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
}