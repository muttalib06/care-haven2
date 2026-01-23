
'use client';

export default function GuideFilters({ 
  selectedCareType, 
  onCareTypeChange,
  selectedCategory,
  onCategoryChange,
  selectedDifficulty,
  onDifficultyChange 
}) {
  const careTypes = [
    { value: 'all', label: 'All Care Types'},
    { value: 'elderly', label: 'Elderly Care'},
    { value: 'children', label: 'Child Care' },
    { value: 'special', label: 'Special Care'}
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'assessment', label: 'Assessment' },
    { value: 'safety', label: 'Safety' },
    { value: 'family-guidance', label: 'Family Guidance' },
    { value: 'health', label: 'Health' },
    { value: 'activities', label: 'Activities' }
  ];

  const difficulties = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
        <svg className="w-5 h-5 text-[#3490c5]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        Filters
      </h3>

      {/* Care Type Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Care Type
        </label>
        <div className="space-y-2">
          {careTypes.map((type) => (
            <label
              key={type.value}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <input
                type="radio"
                name="careType"
                value={type.value}
                checked={selectedCareType === type.value}
                onChange={(e) => onCareTypeChange(e.target.value)}
                className="w-4 h-4 text-[#3490c5] focus:ring-[#3490c5]"
              />
              <span className="text-xl">{type.icon}</span>
              <span className="text-sm text-gray-700">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3490c5] focus:border-transparent"
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      {/* Difficulty Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Difficulty Level
        </label>
        <select
          value={selectedDifficulty}
          onChange={(e) => onDifficultyChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3490c5] focus:border-transparent"
        >
          {difficulties.map((diff) => (
            <option key={diff.value} value={diff.value}>
              {diff.label}
            </option>
          ))}
        </select>
      </div>

      {/* Reset Button */}
      <button
        onClick={() => {
          onCareTypeChange('all');
          onCategoryChange('all');
          onDifficultyChange('all');
        }}
        className="w-full px-4 py-2 text-sm text-[#3490c5] border border-[#3490c5] rounded-lg hover:bg-[#3490c5] hover:text-white transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );
}