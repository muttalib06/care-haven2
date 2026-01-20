import { User, Mail, Phone, MapPin, Calendar } from "lucide-react";

const InputField = ({
  label,
  name,
  type,
  value,
  onChange,
  isEditing,
  iconType,
  displayValue,
}) => {
  const getIcon = () => {
    const icons = {
      user: User,
      mail: Mail,
      phone: Phone,
      mapPin: MapPin,
      calendar: Calendar,
    };
    const IconComponent = icons[iconType] || User;
    return <IconComponent className="w-4 h-4 text-gray-400" />;
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      {isEditing ? (
        <input
          type={type}
          name={name}
          value={value || ""}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3490c5] focus:border-transparent"
        />
      ) : (
        <div className="flex items-center gap-2 text-gray-900">
          {getIcon()}
          {displayValue || value}
        </div>
      )}
    </div>
  );
};

export default InputField;
