/**
 * StructuredData — JSON-LD schema components for rich snippets
 * Supports: Person, WebSite, BreadcrumbList, FAQ, Service, 
 *           SoftwareApplication, ProfilePage, and Project schemas
 */

// Base JSON-LD wrapper
const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

// Person Schema — core identity for knowledge panel
export const PersonSchema = () => (
  <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gagan Shukla",
    "givenName": "Gagan",
    "familyName": "Shukla",
    "jobTitle": "Full Stack Mobile App Developer",
    "description": "Full Stack Mobile App Developer specializing in Flutter, React Native, and cross-platform application development with 2+ years of professional experience.",
    "url": "https://gaganshukla.in",
    "image": "https://gaganshukla.in/og-image.png",
    "email": "gaganshuklarmg@gmail.com",
    "telephone": "+916394756798",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Amity University"
    },
    "knowsAbout": [
      "Flutter", "Dart", "React Native", "React.js", "Next.js", "Node.js",
      "JavaScript", "TypeScript", "PostgreSQL", "Firebase", "Supabase",
      "Mobile App Development", "Cross-Platform Development", "Clean Architecture",
      "REST APIs", "WebSockets", "State Management", "UI/UX Design",
      "Full Stack Development", "MERN Stack", "Cloud Computing", "AWS"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "AWS Certified Cloud Practitioner",
        "credentialCategory": "certification"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/gagan-shukla-2624b826b/",
      "https://github.com/gagan-090"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "TruckMitr",
      "url": "https://truckmitr.com"
    }
  }} />
);

// WebSite Schema — sitelinks search box eligibility
export const WebSiteSchema = () => (
  <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Gagan Shukla — Developer Portfolio",
    "alternateName": "Gagan Shukla Portfolio",
    "url": "https://gaganshukla.in",
    "description": "Professional developer portfolio of Gagan Shukla — Full Stack Mobile App Developer specializing in Flutter, React Native, and cross-platform development.",
    "inLanguage": "en",
    "creator": {
      "@type": "Person",
      "name": "Gagan Shukla"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://gaganshukla.in/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }} />
);

// ProfilePage Schema — for /about page
export const ProfilePageSchema = () => (
  <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "About Gagan Shukla — Flutter & React Native Developer",
    "url": "https://gaganshukla.in/about",
    "mainEntity": {
      "@type": "Person",
      "name": "Gagan Shukla",
      "jobTitle": "Full Stack Mobile App Developer",
      "url": "https://gaganshukla.in"
    }
  }} />
);

// BreadcrumbList Schema
export const BreadcrumbSchema = ({ items }) => (
  <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }} />
);

// Service Schema — for services/skills page
export const ServiceSchema = ({ services }) => (
  <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "Service",
      "position": index + 1,
      "name": service.name,
      "description": service.description,
      "provider": {
        "@type": "Person",
        "name": "Gagan Shukla",
        "url": "https://gaganshukla.in"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "serviceType": service.type || "Software Development"
    }))
  }} />
);

// FAQ Schema — for rich snippets
export const FAQSchema = ({ faqs }) => (
  <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }} />
);

// SoftwareApplication Schema — for project pages
export const SoftwareAppSchema = ({ app }) => (
  <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": app.name,
    "description": app.description,
    "applicationCategory": app.category || "MobileApplication",
    "operatingSystem": app.os || "Android, iOS",
    "author": {
      "@type": "Person",
      "name": "Gagan Shukla",
      "url": "https://gaganshukla.in"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }} />
);

// Project/CreativeWork Schema — for work pages
export const ProjectSchema = ({ project }) => (
  <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.ai_summary || project.description,
    "url": `https://gaganshukla.in/projects/${project.id}`,
    "creator": {
      "@type": "Person",
      "name": "Gagan Shukla",
      "url": "https://gaganshukla.in"
    },
    "dateCreated": "2025",
    "keywords": project.techStack ? project.techStack.join(", ") : (project.tags ? project.tags.join(", ") : ""),
    "genre": "Mobile Application Development",
    "text": `
      Problem: ${project.problem || ''}
      Solution: ${project.solution || ''}
      Architecture: ${project.architecture || ''}
      Impact: ${project.impact || ''}
      Challenges: ${project.challenges || ''}
    `.trim()
  }} />
);

// BlogPosting Schema — for individual blog posts
export const BlogPostingSchema = ({ post }) => (
  <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.image,
    "datePublished": post.datePublished,
    "dateModified": post.dateModified,
    "author": {
      "@type": "Person",
      "name": post.authorName,
      "url": "https://gaganshukla.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Gagan Shukla",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gaganshukla.in/favicon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://gaganshukla.in"
    }
  }} />
);

export default JsonLd;
