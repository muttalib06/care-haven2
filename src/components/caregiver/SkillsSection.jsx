export default function SkillsSection({ skills, serviceTypes }) {
  const medicalSkills = skills.filter(
    (skill) =>
      skill.toLowerCase().includes("therapy") ||
      skill.toLowerCase().includes("support") ||
      skill.toLowerCase().includes("physical")
  );
  const interpersonalSkills = skills.filter(
    (skill) => !medicalSkills.includes(skill)
  );

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Skills & Expertise
      </h2>

      {/* Service Types */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          Service Types
        </h3>
        <div className="flex flex-wrap gap-2">
          {serviceTypes.map((type, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#3490c5] text-white rounded-lg text-sm font-medium"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Medical Skills */}
      {medicalSkills.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Medical & Therapeutic
          </h3>
          <div className="flex flex-wrap gap-2">
            {medicalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-red-50 text-red-700 border border-red-200 rounded-lg text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Interpersonal Skills */}
      {interpersonalSkills.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Interpersonal & Activities
          </h3>
          <div className="flex flex-wrap gap-2">
            {interpersonalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
