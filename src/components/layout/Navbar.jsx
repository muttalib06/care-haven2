"use client";

import React from "react";
import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

function Navbar(props) {
  const router = useRouter();
  const { user, logout } = useAuth();
  // console.log(user);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      Swal.fire({
        title: "Logout successfully",
        icon: "success",
        draggable: true,
      });
      router.push("/login");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#3490c5" }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold" style={{ color: "#1b3a4c" }}>
                CareHaven
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#3490c5] px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/caregivers"
              className="text-gray-700 hover:text-[#3490c5] px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Find Caregivers
            </Link>

            <Link
              href={"/care-guides"}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#3490c5] hover:bg-gray-50 transition-colors duration-200"
            >
              Care Guides
            </Link>

            <Link
              href="/aboutUs"
              className="text-gray-700 hover:text-[#3490c5] px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About Us
            </Link>

            {user && (
              <Link
                href="/dashboard"
                className="text-gray-700 hover:text-[#3490c5] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Dashboard
              </Link>
            )}

            {user && (
              <Link
                href="/become-caregiver"
                className="text-gray-700 hover:text-[#3490c5] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Become a Caregiver
              </Link>
            )}
          </div>

          {/* Desktop Auth Buttons & Avatar */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {/* Avatar */}
            {user && (
              <div className="relative group">
                <Link
                  href={"/profile"}
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                >
                  <User className="w-5 h-5 text-gray-600" />
                </Link>
              </div>
            )}

            {/* Login and logout Button */}

            {user ? (
              <button
                onClick={handleLogout}
                className="px-5 py-2 text-sm font-medium border-2 rounded-lg transition-all duration-200"
                style={{ borderColor: "#3490c5", color: "#3490c5" }}
              >
                Logout
              </button>
            ) : (
              <Link
                href={"/login"}
                className="px-5 py-2 text-sm font-medium border-2 rounded-lg transition-all duration-200"
                style={{ borderColor: "#3490c5", color: "#3490c5" }}
              >
                Login
              </Link>
            )}

            {/* Register Button */}
            <Link
              href={"/signup"}
              className="px-5 py-2 text-sm font-medium text-white rounded-lg transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "#3490c5" }}
            >
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#3490c5] hover:bg-gray-100 focus:outline-none transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <Link
            href={"/"}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#3490c5] hover:bg-gray-50 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href={"/caregivers"}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#3490c5] hover:bg-gray-50 transition-colors duration-200"
          >
            Find Caregivers
          </Link>

          <Link
            href={"/resources"}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#3490c5] hover:bg-gray-50 transition-colors duration-200"
          >
            Resources
          </Link>

          <Link
            href={"/aboutUs"}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#3490c5] hover:bg-gray-50 transition-colors duration-200"
          >
            About Us
          </Link>

          {user && (
            <Link
              href={"/dashboard"}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#3490c5] hover:bg-gray-50 transition-colors duration-200"
            >
              Dashboard
            </Link>
          )}

          {/* Mobile Avatar & Auth */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            {user && (
              <div className="flex items-center px-3 mb-3">
                <div className="shrink-0">
                  <Link href={"/profile"}>
                    {" "}
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                  </Link>
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-700">User</div>
                  <div className="text-xs text-gray-500">
                    {user ? "logged in" : "Not logged in"}{" "}
                  </div>
                </div>
              </div>
            )}

            <div className="px-3 space-y-2">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-sm font-medium border-2 rounded-lg transition-all duration-200"
                  style={{ borderColor: "#3490c5", color: "#3490c5" }}
                >
                  Logout
                </button>
              ) : (
                <Link
                  href={"/login"}
                  className="w-full px-4 py-2 text-sm font-medium border-2 rounded-lg transition-all duration-200"
                  style={{ borderColor: "#3490c5", color: "#3490c5" }}
                >
                  Login
                </Link>
              )}

              <button
                className="w-full px-4 py-2 text-sm font-medium text-white rounded-lg transition-all duration-200"
                style={{ backgroundColor: "#3490c5" }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
