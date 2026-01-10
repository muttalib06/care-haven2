export default function AboutSection({ aboutMe }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {aboutMe}
      </p>
    </div>
  );
}
