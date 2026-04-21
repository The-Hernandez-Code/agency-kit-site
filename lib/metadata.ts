import type { Metadata } from "next";

export const siteConfig = {
  name: "Centurion",
  description:
    "Centurion helps teams deliver practical automation outcomes through Power Platform, M365 Copilot adoption, and AI engineering.",
  url: "https://centurionstudio.example",
  ogImage: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
  logo: "https://centurionstudio.example/centurion-logo.svg",
  keywords: [
    "AI innovation",
    "artificial intelligence",
    "machine learning",
    "technology solutions",
    "AI consulting",
    "machine learning engineering",
    "LLM development",
    "AI strategy"
  ],
  authors: [
    {
      name: "Centurion Team",
      url: "https://centurionstudio.example",
    },
  ],
  creator: "Centurion",
  publisher: "Centurion",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://centurionstudio.example",
    siteName: "Centurion",
    title: "Centurion - AI & Automation Consulting Studio",
    description:
      "Centurion helps teams deliver practical automation outcomes through Power Platform, M365 Copilot adoption, and AI engineering.",
    images: [
      {
        url: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
        width: 1200,
        height: 630,
        alt: "Centurion - AI & Automation Consulting Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Centurion - AI & Automation Consulting Studio",
    description:
      "Centurion helps teams deliver practical automation outcomes through Power Platform, M365 Copilot adoption, and AI engineering.",
    images: ["https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png"],
    creator: "@centurionstudio",
  },
  verification: {
    google: "your-google-verification-code", 
  },
  alternates: {
    canonical: "https://centurionstudio.example",
  },
  category: "technology",
};


export const pageMetadata = {
  home: {
    title: "Centurion - AI & Automation Consulting Studio",
    description:
      "Transform your operations with practical AI, Power Platform delivery, and M365 Copilot adoption programs from Centurion.",
    keywords: [
      "AI solutions",
      "artificial intelligence consulting",
      "machine learning services",
      "AI innovation",
      "technology transformation",
      "business AI",
      "AI strategy"
    ],
    openGraph: {
      title: "Centurion - AI & Automation Consulting Studio",
      description:
        "Transform your operations with practical AI, Power Platform delivery, and M365 Copilot adoption programs from Centurion.",
      url: "https://centurionstudio.example",
      type: "website",
    },
    twitter: {
      title: "Centurion - AI & Automation Consulting Studio",
      description:
        "Transform your operations with practical AI, Power Platform delivery, and M365 Copilot adoption programs from Centurion.",
    },
    alternates: {
      canonical: "https://centurionstudio.example",
    },
  },
  about: {
    title: "About Centurion - AI & Automation Consulting Studio",
    description:
      "Learn how Centurion helps organizations move from AI experiments to reliable automation outcomes across teams and workflows.",
    keywords: [
      "Centurion",
      "AI innovation",
      "technology solutions",
      "artificial intelligence",
      "machine learning",
      "company culture",
      "team expertise",
      "AI company story"
    ],
    openGraph: {
      title: "About Centurion - AI & Automation Consulting Studio",
      description:
        "Learn how Centurion helps organizations move from AI experiments to reliable automation outcomes across teams and workflows.",
      url: "https://centurionstudio.example/about",
      type: "website",
    },
    twitter: {
      title: "About Centurion - AI & Automation Consulting Studio",
      description:
        "Learn how Centurion helps organizations move from AI experiments to reliable automation outcomes across teams and workflows.",
    },
    alternates: {
      canonical: "https://centurionstudio.example/about",
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Centurion",
      "description":
        "Centurion helps teams deliver practical automation outcomes through Power Platform, M365 Copilot adoption, and AI engineering.",
      "url": "https://centurionstudio.example",
      "logo": "https://centurionstudio.example/centurion-logo.svg",
      "foundingDate": "2022",
      "numberOfEmployees": "10-50",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://linkedin.com/company/centurionstudio",
        "https://x.com/centurionstudio"
      ],
      "knowsAbout": [
        "Artificial Intelligence",
        "Machine Learning",
        "AI Solutions",
        "Technology Innovation"
      ]
    }
  },
  blog: {
    title: "AI Insights & Research - Centurion Blog",
    description: "Stay updated with the latest trends, research, and insights in artificial intelligence, machine learning, and emerging technologies that are shaping the future of business.",
    keywords: [
      "AI blog",
      "artificial intelligence insights",
      "machine learning research",
      "AI trends",
      "technology insights",
      "AI articles",
      "ML engineering",
      "LLM development"
    ],
    openGraph: {
      title: "AI Insights & Research - Centurion Blog",
      description: "Stay updated with the latest trends, research, and insights in artificial intelligence, machine learning, and emerging technologies that are shaping the future of business.",
      url: "https://centurionstudio.example/blog",
      type: "website",
    },
    twitter: {
      title: "AI Insights & Research - Centurion Blog",
      description: "Stay updated with the latest trends, research, and insights in artificial intelligence, machine learning, and emerging technologies that are shaping the future of business.",
    },
    alternates: {
      canonical: "https://centurionstudio.example/blog",
    },
  },
};

export function generatePageMetadata(
  page: keyof typeof pageMetadata,
  customMetadata?: Partial<Metadata>
): Metadata {
  const baseMetadata = pageMetadata[page];
  
  return {
    title: baseMetadata.title,
    description: baseMetadata.description,
    keywords: baseMetadata.keywords,
    openGraph: {
      ...siteConfig.openGraph,
      ...baseMetadata.openGraph,
    },
    twitter: {
      ...siteConfig.twitter,
      ...baseMetadata.twitter,
    },
    alternates: baseMetadata.alternates,
    robots: siteConfig.robots,
    verification: siteConfig.verification,
    ...customMetadata,
  };
}


export function generateBlogPostMetadata(
  title: string,
  description: string,
  publishedTime: string,
  slug: string,
  image?: string
): Metadata {
  const blogUrl = `https://centurionstudio.example/blog/${slug}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title: `${title} - Centurion Blog`,
    description,
    keywords: [
      ...siteConfig.keywords,
      "AI blog post",
      "artificial intelligence article",
      "machine learning insights"
    ],
    openGraph: {
      ...siteConfig.openGraph,
      title: `${title} - Centurion Blog`,
      description,
      url: blogUrl,
      type: "article",
      publishedTime,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...siteConfig.twitter,
      title: `${title} - Centurion Blog`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: blogUrl,
    },
    robots: siteConfig.robots,
  };
}


export function generateBlogPostStructuredData(
  title: string,
  description: string,
  publishedTime: string,
  slug: string,
  author?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    datePublished: publishedTime,
    dateModified: publishedTime,
    description,
    url: `https://centurionstudio.example/blog/${slug}`,
    author: {
      "@type": "Person",
      name: author || "Centurion Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Centurion",
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://centurionstudio.example/blog/${slug}`,
    },
  };
}


export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  robots: siteConfig.robots,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  verification: siteConfig.verification,
  alternates: siteConfig.alternates,
  category: siteConfig.category,
};
