import { CheckCircle, Shield, Heart } from "lucide-react";

export default function TrustBadges({
  verified,
  backgroundCheck,
  certificates,
}) {
  const hasCPR = certificates.some((cert) =>
    cert.name.toLowerCase().includes("cpr")
  );

  return (
    <div className="flex flex-wrap gap-2">
      {verified && (
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
          <CheckCircle className="w-4 h-4" />
          <span>Verified</span>
        </div>
      )}
      {backgroundCheck.completed && backgroundCheck.status === "Passed" && (
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
          <Shield className="w-4 h-4" />
          <span>Background Check</span>
        </div>
      )}
      {hasCPR && (
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-sm font-medium">
          <Heart className="w-4 h-4" />
          <span>CPR Certified</span>
        </div>
      )}
    </div>
  );
}
