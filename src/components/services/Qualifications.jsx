import {
  ShieldCheck,
  Heart,
  Award,
  BookOpen,
  Zap,
  CheckCircle,
} from "lucide-react";

export default function Qualifications({ qualifications }) {

  const icons = [ShieldCheck, Heart, Award, BookOpen, Zap];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3490c5] rounded-full mb-6 shadow-lg shadow-blue-100">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Rigorous Caregiver Standards
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every caregiver on our platform meets our strict qualification
            requirements to ensure your family receives exceptional care.
          </p>
        </div>

        {/* Qualifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {qualifications?.map((qual, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#3490c5] group-hover:bg-[#3490c5] group-hover:text-white transition-all duration-300">
                  <IconComponent size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {qual.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {qual.description}
                </p>

                <div className="mt-6 flex items-center text-green-600">
                  <CheckCircle size={18} className="mr-2" />
                  <span className="text-sm font-medium">
                    Required for all caregivers
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Section */}
        <div className="mt-16 bg-gradient-to-r from-[#3490c5] to-[#2d7db3] rounded-2xl p-8 lg:p-12 text-white text-center shadow-xl">
   
        </div>
      </div>
    </section>
  );
}
