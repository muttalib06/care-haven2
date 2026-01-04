import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaHeart,
  FaShieldHalved,
  FaAward,
  FaClock,
} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Babysitting", href: "#" },
      { name: "Elderly Care", href: "#" },
      { name: "Special Care", href: "#" },
      { name: "Night Care", href: "#" },
      { name: "Emergency Care", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "How It Works", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Safety Guidelines", href: "#" },
      { name: "Trust & Safety", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "FAQs", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Accessibility", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  ];

  const features = [
    { icon: FaShieldHalved, text: "Verified Caregivers" },
    { icon: FaAward, text: "Quality Guaranteed" },
    { icon: FaClock, text: "24/7 Support" },
    { icon: FaHeart, text: "Trusted by 10K+ Families" },
  ];

  return (
    <footer className="bg-linear-to-b  from-gray-50 to-white border-t border-gray-200">
      {/* Trust Badges Section */}
      <div className="bg-[#3490c5] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 text-center"
              >
                <feature.icon size={20} className="shrink-0" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#3490c5] p-2 rounded-lg">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">CareHaven</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Connecting families with trusted, verified caregivers. Your peace
              of mind is our priority.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-gray-600 hover:text-[#3490c5] transition-colors"
              >
                <FaPhone className="text-[#3490c5]" />
                <span className="text-sm">+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:support@carehaven.com"
                className="flex items-center gap-3 text-gray-600 hover:text-[#3490c5] transition-colors"
              >
                <FaEnvelope className="text-[#3490c5]" />
                <span className="text-sm">support@carehaven.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-600">
                <FaLocationDot className="text-[#3490c5] mt-0.5 shrink-0" />
                <span className="text-sm">
                  123 Care Street, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#3490c5] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#3490c5] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#3490c5] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#3490c5] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="max-w-xl">
            <h4 className="text-gray-900 font-bold text-lg mb-2">
              Stay Connected
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter for caregiving tips and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3490c5] focus:border-transparent"
              />
              <button className="px-6 py-3 bg-[#3490c5] text-white rounded-lg font-medium hover:bg-[#2980b5] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#3490c5] flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-600 text-sm">
              © {currentYear} CareHaven. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Made with <FaHeart className="inline text-red-500" /> for families
              everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
