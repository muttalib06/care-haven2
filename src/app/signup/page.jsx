"use client";
import { useEffect, useState } from "react";
import { Eye, EyeOff, Heart, Shield, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/lib/validation/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LoadingPage from "@/components/loading/LoadingPage";

const SignUp = () => {
  const { signup, user, updateUserProfile } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // console.log(user);

  // helper function to handle error;

  const handleError = (error) => {
    if (!error) return setError("");
    if (error.code) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setError(
            "This email is already registered. Please login or use another email."
          );
          break;

        case "auth/invalid-email":
          setError("Invalid email format.");
          break;
        case "auth/weak-password":
          setError("Password is too weak. Must be at least 6 characters.");
          break;
        case "auth/user-not-found":
          setError("No account found with this email. Please sign up first.");
          break;
        case "auth/popup-closed-by-user":
          setError("Google sign-in was cancelled. Please try again.");
          break;
        case "auth/network-request-failed":
          setError("Network error! Check your internet connection.");
          break;
        default:
          setError("Something went wrong. Please try again.");
      }
    } else {
      setError("An unexpected error occurred.");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setError("");
    setLoading(true);
    try {
      const email = data.email;
      const password = data.password;
      const name = data.name;
      const image = "No image";
      // console.log(email, password);
      await signup(email, password);
      await updateUserProfile(name, image);
      router.push("/")
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if(loading){
    return <LoadingPage></LoadingPage>
  }

  return (
    <div className="min-h-screen my-10 flex flex-col lg:flex-row bg-background">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-6 lg:px-8 xl:px-12">
        <div className="w-full max-w-md mx-auto animate-fade-in">
          {/* Header */}
          <div className="mb-4">
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
              Create your account
            </h1>
            <p className="text-muted-foreground text-sm">
              Join thousands of families finding trusted care
            </p>
          </div>

          {/* Social Sign Up */}
          <div className="space-y-2 mb-4">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors duration-200 font-medium text-foreground text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
            {/* <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors duration-200 font-medium text-foreground text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              Continue with GitHub
            </button> */}
          </div>

          {/* Divider */}
          <div className="relative flex items-center mb-4">
            <div className="grow border-t border-border"></div>
            <span className="px-3 text-xs text-muted-foreground bg-background">
              or sign up with email
            </span>
            <div className="grow border-t border-border"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-medium text-foreground mb-1"
              >
                Full Name
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-foreground mb-1"
              >
                Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-foreground mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Create a password"
                  className="w-full px-3 py-2 pr-10 text-sm rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-xs font-medium text-foreground mb-1"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  {...register("confirmPassword")}
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full px-3 py-2 pr-10 text-sm rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div className="flex items-start gap-2">
              <input
                required
                type="checkbox"
                id="agreeToTerms"
                className="mt-0.5 w-4 h-4 rounded border-input text-primary focus:ring-ring cursor-pointer"
              />
              <label
                htmlFor="agreeToTerms"
                className="text-xs text-muted-foreground cursor-pointer"
              >
                I agree to the{" "}
                <span className="text-primary hover:underline font-medium cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-primary hover:underline font-medium cursor-pointer">
                  Privacy Policy
                </span>
              </label>
            </div>

            <p className="my-2 text-sm text-red-600">{error}</p>

            <button
              type="submit"
              className="w-full py-2.5 px-4 text-sm bg-[#3490c5] text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200 shadow-care hover:shadow-care-lg transform hover:-translate-y-0.5"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-4 text-center text-muted-foreground text-xs">
            Already have an account?{" "}
            <Link
              href={"/login"}
              className="text-primary font-semibold hover:underline cursor-pointer"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image & Features */}
      <div className="hidden lg:flex flex-1 relative bg-care-soft">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/auth-image.avif"
            alt="Caring family moment"
            fill
            priority
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* FIXED GRADIENT - Using proper Tailwind classes */}
          <div className="absolute inset-0 rounded-2xl  bg-linear-to-t from-[#3490c5]/90 via-[#3490c5]/50 to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-end p-8 xl:p-12">
          <div className="animate-slide-in-right">
            <h2 className="text-2xl xl:text-3xl font-bold text-white mb-3">
              Trusted Care for Your Loved Ones
            </h2>
            <p className="text-white/90 text-base mb-6 max-w-md">
              Connect with verified caregivers who treat your family like their
              own.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Shield className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-medium text-white">
                  Verified Caregivers
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Users className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-medium text-white">
                  10,000+ Families
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Heart className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-medium text-white">
                  Compassionate Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
