import CaregiverCardSkeleton from "../skeleton/CaregiverCardSkeleton";
import CaretakerCard from "./CaretakerCard";
import EmptyState from "./EmptyState";

export default function CaregiverGrid({
  caregivers,
  savedCaregivers,
  onToggleSave,
  onClearFilters,
  loading,
  error,
}) {
  // console.log(loading);
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[...Array(9)].map((_, index) => (
          <CaregiverCardSkeleton key={index}></CaregiverCardSkeleton>
        ))}
      </div>
    );
  }

  if (caregivers.length === 0) {
    return <EmptyState onClearFilters={onClearFilters} />;
  }

  // console.log(caregivers);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {caregivers?.map((caregiver) => (
        <CaretakerCard
          key={caregiver._id}
          caregiver={caregiver}
          isSaved={savedCaregivers.has(caregiver.id)}
          onToggleSave={onToggleSave}
        />
      ))}
    </div>
  );
}
