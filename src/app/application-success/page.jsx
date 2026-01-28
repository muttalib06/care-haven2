'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Mail, Phone, Calendar, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';

export default function ApplicationSuccess() {
  const [countdown, setCountdown] = useState(5);
  const [confetti, setConfetti] = useState(true);

  useEffect(() => {
    // Countdown for auto-redirect
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  useEffect(() => {
    // Remove confetti after animation
    const timer = setTimeout(() => setConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 flex items-center justify-center p-4">
      {/* Confetti Effect */}
      {confetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: ['#3490c5', '#2563eb', '#10b981', '#f59e0b', '#ef4444'][
                    Math.floor(Math.random() * 5)
                  ],
                }}
              />
            </div>
          ))}
        </div>
      )}

      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-scaleIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#3490c5] to-[#2563eb] p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            <div className="relative">
              {/* Success Icon */}
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 shadow-xl animate-bounce-gentle">
                <CheckCircle2 className="w-12 h-12 text-green-500" strokeWidth={2.5} />
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Application Submitted!
              </h1>
              <p className="text-lg sm:text-xl text-blue-100">
                Welcome to the CareHaven family
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 sm:p-12 space-y-8">
            {/* Success Message */}
            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Thank you for applying to become a caregiver with CareHaven! We've received your
                application and our team is excited to review your profile.
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-[#3490c5]" />
                What Happens Next?
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3490c5] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Application Review</h3>
                    <p className="text-sm text-gray-600">
                      Our team will review your application within 2-3 business days
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3490c5] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Background Check</h3>
                    <p className="text-sm text-gray-600">
                      We'll initiate the background check process and verify your credentials
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3490c5] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Interview & Onboarding</h3>
                    <p className="text-sm text-gray-600">
                      If approved, we'll schedule a video interview and complete your profile
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Start Caring!</h3>
                    <p className="text-sm text-gray-600">
                      Once verified, you'll be able to accept bookings and start earning
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expected Timeline */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
              <Calendar className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-amber-900 mb-1">Expected Timeline</p>
                <p className="text-sm text-amber-800">
                  The entire process typically takes 5-7 business days from application to
                  activation. We'll keep you updated every step of the way.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
                We'll Be In Touch
              </h2>
              <p className="text-center text-gray-600 mb-6">
                You'll receive a confirmation email shortly. In the meantime, if you have any
                questions:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="mailto:careers@carehaven.com"
                  className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors border border-blue-200"
                >
                  <div className="w-10 h-10 bg-[#3490c5] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-600 mb-1">Email us</p>
                    <p className="font-semibold text-[#3490c5] text-sm">
                      careers@carehaven.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+1-800-CARE-NOW"
                  className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors border border-blue-200"
                >
                  <div className="w-10 h-10 bg-[#3490c5] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-600 mb-1">Call us</p>
                    <p className="font-semibold text-[#3490c5] text-sm">1-800-CARE-NOW</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#3490c5] text-white rounded-xl font-semibold hover:bg-[#2980b5] transition-all shadow-lg hover:shadow-xl"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>

              <Link
                href="/caregiver/resources"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#3490c5] border-2 border-[#3490c5] rounded-xl font-semibold hover:bg-blue-50 transition-all"
              >
                <span>Caregiver Resources</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Auto Redirect Notice */}
            {countdown > 0 && (
              <div className="text-center pt-4">
                <p className="text-sm text-gray-500">
                  Redirecting to home page in{' '}
                  <span className="font-semibold text-[#3490c5]">{countdown}</span> seconds...
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Application ID: <span className="font-mono font-semibold">APP-{Date.now()}</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Please save this ID for your records
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        .animate-confetti {
          animation: confetti linear forwards;
        }

        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
