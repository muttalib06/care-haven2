import { Award } from "lucide-react";

export default function EducationSection({ education }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
          >
            <div className="w-12 h-12 bg-[#3490c5] rounded-lg flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-gray-600 text-sm">{edu.institution}</p>
              <p className="text-gray-500 text-sm mt-1">Graduated {edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
