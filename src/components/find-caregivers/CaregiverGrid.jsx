// components/find-caregivers/CaregiverGrid.js
import CaretakerCard from "./CaretakerCard";
import EmptyState from "./EmptyState";

export default function CaregiverGrid({ 
  caregivers, 
  savedCaregivers,
  onToggleSave,
  onClearFilters 
}) {
  if (caregivers.length === 0) {
    return <EmptyState onClearFilters={onClearFilters} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {caregivers.map((caregiver) => (
        <CaretakerCard
          key={caregiver.id}
          caregiver={caregiver}
          isSaved={savedCaregivers.has(caregiver.id)}
          onToggleSave={onToggleSave}
        />
      ))}
    </div>
  );
}