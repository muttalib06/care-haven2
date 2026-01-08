// components/find-caregivers/ServiceTypeDropdown.js
import { useState } from "react";
import { Sliders, ChevronDown } from "lucide-react";
import { SERVICE_TYPES } from "@/data/caregivers";

export default function ServiceTypeDropdown({ selectedServices, toggleService }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full lg:w-auto px-3 py-2 text-sm bg-gray-50/50 border-0 rounded-lg text-gray-700 font-medium hover:bg-gray-100/70 transition-all duration-200 flex items-center justify-between gap-2"
      >
        <span className="flex items-center gap-1.5">
          <Sliders size={14} />
          {selectedServices.length > 0
            ? `${selectedServices.length} selected`
            : "Service Type"}
        </span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop for closing */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Dropdown content */}
          <div className="absolute top-full  mt-1.5 left-0 right-0 lg:left-auto lg:right-0 lg:w-56 bg-white rounded-lg shadow-xl border-0 z-50 overflow-hidden">
            <div className="p-2">
              <p className="text-[10px] font-semibold text-gray-500 uppercase mb-2 px-2">
                Select Care Type
              </p>
              {SERVICE_TYPES.map((service) => (
                <label
                  key={service}
                  className="flex items-center p-2 hover:bg-blue-50 rounded-md cursor-pointer transition-all duration-200"
                >
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service)}
                    onChange={() => {
                      toggleService(service);
                      // Don't close dropdown when selecting
                    }}
                    className="w-3.5 h-3.5 rounded border-gray-300 text-[#3490c5] focus:ring-[#3490c5] focus:ring-offset-0"
                  />
                  <span className="ml-2 text-sm text-gray-700 font-medium">
                    {service} Care
                  </span>
                </label>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}