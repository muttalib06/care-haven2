import { CreditCard } from "lucide-react";

const BillingTab = () => {
  const billingHistory = [
    { date: "Jan 15, 2025", amount: "$150.00", status: "Paid" },
    { date: "Dec 28, 2024", amount: "$120.00", status: "Paid" },
    { date: "Dec 10, 2024", amount: "$180.00", status: "Paid" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-6">
        <CreditCard className="w-6 h-6 text-[#3490c5]" />
        Billing & Payments
      </h3>

      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Payment Methods</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border-2 border-[#3490c5] bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 bg-linear-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white font-bold text-xs">
                  VISA
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    •••• •••• •••• 4242
                  </p>
                  <p className="text-sm text-gray-600">Expires 12/25</p>
                </div>
              </div>
              <span className="text-xs font-medium text-[#3490c5]">
                Default
              </span>
            </div>
            <button className="w-full py-3 border-2 border-dashed border-gray-300 text-gray-600 rounded-lg hover:border-[#3490c5] hover:text-[#3490c5] transition-colors font-medium">
              + Add New Payment Method
            </button>
          </div>
        </div>

        <div className="border-t pt-6">
          <h4 className="font-semibold text-gray-900 mb-4">Billing History</h4>
          <div className="space-y-2">
            {billingHistory.map((transaction, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    {transaction.date}
                  </p>
                  <p className="text-sm text-gray-600">Care Services</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">
                    {transaction.amount}
                  </p>
                  <span className="text-xs text-emerald-600 font-medium">
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingTab;
