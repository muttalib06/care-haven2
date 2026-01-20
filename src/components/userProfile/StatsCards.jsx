import { Star, Clock } from "lucide-react";

const StatsCards = () => {
  const stats = [
    { label: "Reviews Given", value: "18", icon: Star },
    { label: "Member Since", value: "2023", icon: Clock },
  ];

  return (
    <div className="grid grid-cols-2 lg:hidden gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-4 text-center"
        >
          <stat.icon className="w-6 h-6 text-[#3490c5] mx-auto mb-2" />
          <div className="text-xl font-bold text-gray-900">{stat.value}</div>
          <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
