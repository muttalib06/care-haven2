"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import RelatedGuides from "@/components/care-guides/RelatedGuides";
import Badge from "@/components/ui/Badge";
import Rating from "@/components/ui/Rating";
import { getSingleGuide } from "@/data-handling/getSingleGuide";

export default function GuideDetailPage() {
  const params = useParams();
  const [activeSection, setActiveSection] = useState("");
  const [guideData, setGuideData] = useState(null); // Fixed: Initialize as null instead of empty array

  useEffect(() => {
    const loadData = async () => {
      const response = await getSingleGuide(params.slug);
      setGuideData(response?.data || null); // Fixed: Added null fallback
    };
    loadData();
  }, [params.slug]);

  const guide = guideData;

  // Fixed: Derive related guides from guide instead of storing in state
  const relatedGuides = useMemo(() => {
    if (!guide?.relatedGuides || !Array.isArray(guide.relatedGuides)) {
      return [];
    }
    return guide.relatedGuides; // Fixed: Actually return the relatedGuides array
  }, [guide]);

  // Memoize sections extraction - use guide as dependency
  const sections = useMemo(() => {
    if (!guide?.content) return [];

    // Safer regex with limits
    const headings = guide.content.match(/^## .{1,200}$/gm);
    if (!headings) return [];

    return headings.map((heading) => ({
      id: heading
        .replace(/^## /, "")
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .substring(0, 100),
      title: heading.replace(/^## /, ""),
    }));
  }, [guide]);

  const formatContent = useCallback((content) => {
    if (!content) return null;

    const lines = content.split("\n");
    return lines.map((line, index) => {
      const trimmedLine = line.trim();

      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="text-4xl font-bold text-gray-900 mb-6">
            {line.replace(/^# /, "")}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        const text = line.replace(/^## /, "");
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .substring(0, 100);
        return (
          <h2
            key={index}
            id={id}
            className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20"
          >
            {text}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        return (
          <h3
            key={index}
            className="text-xl font-semibold text-gray-900 mt-6 mb-3"
          >
            {line.replace(/^### /, "")}
          </h3>
        );
      } else if (trimmedLine === "") {
        return <div key={index} className="h-4" />;
      } else if (line.startsWith("- ") || line.startsWith("* ")) {
        return (
          <li key={index} className="text-gray-700 leading-relaxed ml-6">
            {line.replace(/^[-*] /, "")}
          </li>
        );
      } else {
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {line}
          </p>
        );
      }
    });
  }, []);

  const getCareTypeVariant = useCallback((type) => {
    const variants = {
      elderly: "elderly",
      children: "children",
      special: "special",
    };
    return variants[type] || "default";
  }, []);

  // Memoize scroll handler to prevent recreation on every render
  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll("h2[id]");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= 120) {
        currentSection = section.getAttribute("id") || "";
      }
    });

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    if (!guide) return;

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [guide, handleScroll]);

  if (!guide) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center" role="status" aria-live="polite">
          <div
            className="w-16 h-16 border-4 border-[#3490c5] border-t-transparent rounded-full animate-spin mx-auto mb-4"
            aria-hidden="true"
          />
          <p className="text-gray-600">Loading guide...</p>
          <span className="sr-only">Loading guide content</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-[#3490c5]">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/care-guides" className="hover:text-[#3490c5]">
                Care Guides
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span className="text-gray-900 truncate" aria-current="page">
                {guide.title}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src={guide.featuredImage?.url || "/placeholder.jpg"}
            alt={guide.featuredImage?.alt || guide.title}
            fill
            className="object-cover opacity-70"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant={getCareTypeVariant(guide.careType)}>
                {guide.careType?.charAt(0).toUpperCase() +
                  guide.careType?.slice(1)}{" "}
                Care
              </Badge>
              {guide.isFeatured && <Badge variant="warning">⭐ Featured</Badge>}
              {guide.isPopular && <Badge variant="success">🔥 Popular</Badge>}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {guide.title}
            </h1>
            <p className="text-xl text-white/90 mb-6">{guide.excerpt}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1" aria-label="Guide information">
            <div className="sticky top-4 space-y-6">
              {/* Author Info */}
              {guide.author && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-sm font-semibold text-gray-900 mb-4">
                    Written By
                  </h2>
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={guide.author.avatar || "/default-avatar.jpg"}
                      alt={`${guide.author.name}'s avatar`}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {guide.author.name}
                      </p>
                      {guide.author.credentials && (
                        <p className="text-xs text-gray-600">
                          {guide.author.credentials}
                        </p>
                      )}
                    </div>
                  </div>
                  {guide.author.bio && (
                    <p className="text-sm text-gray-600">{guide.author.bio}</p>
                  )}
                </div>
              )}

              {/* Guide Stats */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-sm font-semibold text-gray-900 mb-4">
                  Guide Info
                </h2>
                <dl className="space-y-3 text-sm">
                  {guide.readingTime && (
                    <div className="flex items-center justify-between">
                      <dt className="text-gray-600">Reading Time</dt>
                      <dd className="font-semibold text-gray-900">
                        {guide.readingTime} min
                      </dd>
                    </div>
                  )}
                  {guide.stats?.views !== undefined && (
                    <div className="flex items-center justify-between">
                      <dt className="text-gray-600">Views</dt>
                      <dd className="font-semibold text-gray-900">
                        {guide.stats.views.toLocaleString()}
                      </dd>
                    </div>
                  )}
                  {guide.difficulty && (
                    <div className="flex items-center justify-between">
                      <dt className="text-gray-600">Difficulty</dt>
                      <dd>
                        <Badge variant="default" size="sm">
                          {guide.difficulty.charAt(0).toUpperCase() +
                            guide.difficulty.slice(1)}
                        </Badge>
                      </dd>
                    </div>
                  )}
                  {guide.ratings && (
                    <div className="pt-3 border-t">
                      <Rating
                        rating={guide.ratings.average || 0}
                        count={guide.ratings.count || 0}
                      />
                    </div>
                  )}
                </dl>
              </div>

              {/* Table of Contents */}
              {sections.length > 0 && (
                <nav
                  className="bg-white rounded-lg shadow-md p-6 hidden lg:block"
                  aria-label="Table of contents"
                >
                  <h2 className="text-sm font-semibold text-gray-900 mb-4">
                    Table of Contents
                  </h2>
                  <ul className="space-y-2">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className={`block text-sm py-1 px-2 rounded transition-colors ${
                            activeSection === section.id
                              ? "text-[#3490c5] bg-[#3490c5]/10 font-medium"
                              : "text-gray-600 hover:text-[#3490c5]"
                          }`}
                          aria-current={
                            activeSection === section.id
                              ? "location"
                              : undefined
                          }
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-md p-8 md:p-12">
              <div className="prose max-w-none">
                {formatContent(guide.content)}
              </div>

              {/* Features */}
              {guide.features &&
                (guide.features.hasDownloadablePDF ||
                  guide.features.hasChecklist) && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">
                      Available Resources
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {guide.features.hasDownloadablePDF && (
                        <button
                          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                          aria-label="Download guide as PDF"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Download PDF
                        </button>
                      )}
                      {guide.features.hasChecklist && (
                        <button
                          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                          aria-label="View checklist"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                          View Checklist
                        </button>
                      )}
                    </div>
                  </div>
                )}

              {/* CTA */}
              {guide.callsToAction && guide.callsToAction.length > 0 && (
                <div className="mt-8 p-6 bg-gradient-to-r from-[#3490c5] to-[#2c7aa8] rounded-lg">
                  <div className="text-center text-white">
                    <h2 className="text-xl font-bold mb-2">
                      Ready to Get Started?
                    </h2>
                    <p className="mb-4">
                      Find professional caregivers in your area today
                    </p>
                    <Link
                      href={"/caregivers"}
                      className="inline-block px-8 py-3 bg-white text-[#3490c5] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      {guide.callsToAction[0].text}
                    </Link>
                  </div>
                </div>
              )}
            </article>

            {/* Related Guides */}
            {relatedGuides.length > 0 && (
              <RelatedGuides guide={relatedGuides} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}