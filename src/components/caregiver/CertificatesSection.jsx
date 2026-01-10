import { Award } from 'lucide-react';

export default function CertificatesSection({ certificates }) {
  const isExpiringSoon = (expiryDate) => {
    if (!expiryDate) return false;
    const expiry = new Date(expiryDate);
    const today = new Date();
    const monthsUntilExpiry = (expiry - today) / (1000 * 60 * 60 * 24 * 30);
    return monthsUntilExpiry < 3 && monthsUntilExpiry > 0;
  };

  const isExpired = (expiryDate) => {
    if (!expiryDate) return false;
    return new Date(expiryDate) < new Date();
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Award className="w-6 h-6 text-[#3490c5]" />
        Certifications
      </h2>
      
      <div className="space-y-4">
        {certificates.map((cert, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Issued by {cert.issuedBy}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                  <span>
                    Issued: {new Date(cert.issuedDate).toLocaleDateString()}
                  </span>
                  {cert.expiryDate && (
                    <span>
                      • Expires: {new Date(cert.expiryDate).toLocaleDateString()}
                    </span>
                  )}
                  {!cert.expiryDate && <span>• No Expiration</span>}
                </div>
              </div>
              <div>
                {isExpired(cert.expiryDate) ? (
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                    Expired
                  </span>
                ) : isExpiringSoon(cert.expiryDate) ? (
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                    Expiring Soon
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                    Valid
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}