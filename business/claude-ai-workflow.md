# Claude AI Workflow for Client Projects

**Internal Reference Document — Andrew Hicks Freelance Web Design**
**Last Updated: February 2026**

---

## Overview

This document outlines how to use Claude (both Claude chat and Claude Code) at every phase of a client project to deliver faster, higher-quality work. This AI-augmented workflow is a core competitive advantage — it's how we deliver in 1-2 weeks what agencies take 4-8 weeks to do, without sacrificing quality.

**Key principle:** Claude accelerates every phase, but human judgment, review, and quality control are never optional. AI generates the first draft; Andrew refines, tests, and delivers.

---

## Phase 1: Discovery & Research

### What Claude Does
- Researches the client's industry, competitors, and market landscape
- Generates tailored discovery call questions based on the client's business type
- Analyzes the client's existing website (if any) for issues and opportunities
- Creates a competitive analysis comparing 3-5 competitor websites

### Prompt Patterns

**Industry Research:**
```
I'm building a website for a [industry] business in [city]. Research this industry and tell me:
1. What do customers in this industry look for when choosing a provider?
2. What are the most important pages/information to have on the website?
3. What are common conversion actions (book appointment, request quote, call now)?
4. What local SEO factors matter most for this industry?
5. What compliance or legal considerations should I be aware of (e.g., HIPAA for healthcare)?
```

**Competitor Analysis:**
```
Analyze these 3 competitor websites for a [industry] business:
1. [URL 1]
2. [URL 2]
3. [URL 3]

For each, evaluate:
- Design quality and modernity
- Page speed (estimate based on complexity)
- Content structure and messaging
- CTAs and conversion optimization
- SEO basics (meta tags, headings, schema)
- Mobile responsiveness
- What they do well that we should match or beat
- What they do poorly that we can exploit
```

**Discovery Call Questions:**
```
Generate 15-20 discovery call questions for a [industry] business owner who wants a new website. Cover:
- Business overview (how long, how many employees, services offered)
- Target customers (demographics, how they find the business)
- Current website issues (what they like/dislike, what's not working)
- Competitors (who they compete with, what makes them different)
- Goals (more leads, better brand, specific metrics)
- Content (do they have photos, copy, brand guidelines)
- Timeline and budget expectations
- Decision-making process (are they the sole decision maker)
```

### Output
- Discovery call prep document with industry context, competitor notes, and question list
- Save to client folder for reference during the call

---

## Phase 2: Content & Copywriting

### What Claude Does
- Generates page-by-page website copy from discovery call notes
- Writes headlines, body copy, CTAs, and microcopy
- Creates meta titles and meta descriptions for every page
- Drafts service descriptions, about page narrative, and testimonial frameworks

### Prompt Patterns

**Page Copy Generation:**
```
I'm writing copy for a [industry] business website. Here are the discovery notes:

[Paste discovery call notes — business name, services, target customer, differentiators, tone preferences, goals]

Write copy for the following pages:
1. Home page — hero headline + subheadline, 3 service highlights, social proof section, CTA
2. About page — business story, team/founder bio, values, credentials
3. Services page — detailed descriptions of each service with benefits (not just features)
4. Contact page — heading, brief paragraph encouraging contact, form labels

Tone: [professional but approachable / clinical and trustworthy / warm and welcoming / etc.]

Focus on benefits to the customer, not just features. Use clear, jargon-free language. Include strong CTAs on every page.
```

**Meta Tags:**
```
Write SEO-optimized meta titles and meta descriptions for these 5 pages of a [industry] website in [city]:
1. Home
2. About
3. Services
4. [Service-specific page]
5. Contact

Requirements:
- Meta titles: 50-60 characters, include primary keyword and location
- Meta descriptions: 150-160 characters, include a call-to-action, compelling reason to click
- Primary keyword: [keyword]
- Location: [city, state]
```

**CTA Variations:**
```
Generate 10 call-to-action button texts for a [industry] website. The primary conversion action is [book appointment / request quote / call now / etc.]. Mix urgency, benefit-driven, and straightforward approaches. Keep each under 5 words.
```

### Quality Controls
- **Always review copy for accuracy.** Claude may invent services or details not discussed in discovery. Cross-reference every claim with discovery notes.
- **Check tone against client preferences.** If the client wanted "warm and friendly," make sure the copy doesn't sound corporate.
- **Run copy through a readability check.** Target 6th-8th grade reading level for most local business sites.
- **Client reviews and approves all copy** before it goes into the build.

---

## Phase 3: Design & Code

### What Claude Does (via Claude Code)
- Generates the HTML page structure based on sitemap and content
- Writes CSS using the design system (custom properties, responsive breakpoints, component patterns)
- Implements responsive layouts, navigation, forms, and interactive elements
- Builds reusable components that can be adapted per client

### Prompt Patterns

**Site Structure:**
```
Build the HTML structure for a [industry] business website with these pages:
1. index.html — Home
2. about.html — About
3. services.html — Services
4. contact.html — Contact

Use semantic HTML5. Include:
- Consistent header with navigation (mobile hamburger menu)
- Hero section on home page
- Consistent footer with contact info, social links, and copyright
- Contact form on contact page
- Meta tags, Open Graph tags, and favicon links in <head>

Use this CSS file structure: css/style.css
Use this JS file structure: js/main.js
```

**CSS Design System:**
```
Create a CSS design system for a [industry] business website with these brand colors:
- Primary: [color]
- Secondary: [color]
- Accent: [color]
- Background: [color]
- Text: [color]

Include:
- CSS custom properties for all colors, fonts, spacing, and breakpoints
- Base reset and typography
- Responsive breakpoints: mobile (< 768px), tablet (768-1024px), desktop (> 1024px)
- Component styles: buttons, cards, forms, navigation, hero, footer
- Utility classes for spacing, text alignment, and visibility
- Smooth transitions and subtle animations (hover states, scroll reveals)
```

**Responsive Navigation:**
```
Build a responsive navigation component:
- Desktop: horizontal nav links with logo on left
- Mobile: hamburger icon that opens a full-screen overlay menu
- Smooth open/close animation
- Accessible: proper ARIA labels, keyboard navigation support
- HTML + CSS + vanilla JS (no frameworks)
```

### Reusable Assets from Personal Portfolio

The personal portfolio site at andrewhicks.dev has a battle-tested codebase to draw from:

- **CSS Design System:** `css/style.css` — CSS custom properties structure, responsive grid, component patterns. Copy the architecture, swap the colors and fonts.
- **Navigation Pattern:** Mobile-responsive hamburger menu with overlay. Proven to work across devices.
- **Footer Component:** Consistent footer with contact info and social links. Adapt per client.
- **Form Styling:** Contact form with validation styling. Reuse the CSS, update the action endpoint.
- **Animation Patterns:** Scroll-triggered fade-ins, hover transitions. Subtle and professional.
- **Performance Patterns:** Image lazy loading, CSS minification approach, font loading strategy.

**Workflow:**
1. Start every new client project by copying the portfolio site's CSS architecture
2. Update custom properties (colors, fonts) to match client brand
3. Build out pages using the same component patterns
4. Customize layout and sections per client needs
5. This cuts initial setup from hours to minutes

### Quality Controls
- **Test on real devices.** Don't rely solely on browser dev tools. Test on actual iPhone, Android, iPad.
- **Run Lighthouse after every major change.** Target 90+ performance, accessibility, best practices, SEO.
- **Validate HTML.** Use the W3C validator to catch structural issues.
- **Cross-browser test.** Chrome, Firefox, Safari, Edge at minimum.
- **Check all links, forms, and interactive elements.**

---

## Phase 4: SEO Implementation

### What Claude Does
- Generates JSON-LD structured data (LocalBusiness, Service, Organization schemas)
- Creates XML sitemap
- Writes robots.txt
- Develops keyword strategy and maps keywords to pages
- Generates alt text for images

### Prompt Patterns

**JSON-LD Schema:**
```
Generate JSON-LD structured data for a [industry] business with these details:
- Business name: [name]
- Address: [full address]
- Phone: [phone]
- Email: [email]
- Website: [URL]
- Hours: [business hours]
- Services offered: [list of services]

Create these schema types:
1. LocalBusiness (or more specific type like Dentist, LegalService, etc.)
2. Organization
3. Service (one for each primary service)
4. BreadcrumbList (for site navigation)

Output as <script type="application/ld+json"> blocks ready to paste into HTML.
```

**XML Sitemap:**
```
Generate an XML sitemap for a website with these pages:
[List all URLs]

Include lastmod dates, changefreq, and priority values. The home page should have highest priority.
```

**Keyword Strategy:**
```
Develop a local SEO keyword strategy for a [industry] business in [city, state].

For each page on the site, recommend:
1. Primary keyword (highest search volume + relevance)
2. Secondary keywords (2-3 supporting terms)
3. Long-tail variations (3-5 specific phrases)
4. How to naturally incorporate keywords into existing copy

Focus on keywords with local intent ("dentist Austin TX", "best [service] near me", etc.)
```

**Image Alt Text:**
```
Write descriptive, SEO-friendly alt text for these images on a [industry] website:
1. Hero image: [describe what's in the image]
2. Team photo: [describe]
3. Office/location photo: [describe]
4. Service illustration: [describe]
[etc.]

Keep each under 125 characters. Include relevant keywords naturally, but don't keyword-stuff.
```

### Quality Controls
- **Test structured data** with Google's Rich Results Test tool
- **Submit sitemap** to Google Search Console
- **Verify robots.txt** isn't blocking important pages
- **Check all meta tags** render correctly in search results preview

---

## Phase 5: Delivery & Handoff

### What Claude Does
- Generates client-facing handoff documentation
- Creates a maintenance guide for the client
- Writes training notes for content updates
- Drafts the testimonial request and referral ask emails

### Prompt Patterns

**Handoff Documentation:**
```
Create a client handoff document for a website project with these details:
- Client: [Business Name]
- Site URL: [URL]
- Hosting: [provider + login info location]
- Domain registrar: [provider + login info location]
- Pages built: [list]
- Features: [list key features — forms, maps, analytics, etc.]

Include sections for:
1. What was built (summary of all pages and features)
2. How to request content updates (process and contact)
3. Hosting and domain information
4. Analytics access (Google Analytics, Search Console)
5. Maintenance schedule (what's included, what costs extra)
6. Emergency contact info
7. FAQ (common questions like "how do I update my hours?" or "how do I add a new photo?")
```

**Maintenance Guide:**
```
Write a simple, non-technical guide for a small business owner explaining:
1. How their website hosting works (in plain English)
2. When their domain needs to be renewed
3. What ongoing maintenance involves
4. How to check their Google Analytics for basic metrics
5. Who to contact if something breaks
6. What their maintenance package includes vs. what costs extra

Audience: non-technical business owner. Keep it simple, avoid jargon.
```

---

## Speed Advantage Breakdown

### Traditional Agency Timeline (4-8 weeks)
1. Week 1-2: Discovery, research, strategy
2. Week 2-3: Design mockups in Figma
3. Week 3-4: Client review, revisions on mockups
4. Week 4-6: Development (building from mockups)
5. Week 6-7: QA, testing, revisions
6. Week 7-8: Launch preparation, go-live

### Our AI-Augmented Timeline (1-2 weeks)

**Starter Tier (5-7 days):**
| Day | Activity |
|-----|----------|
| Day 1 | Discovery call + Claude generates copy + competitor research |
| Day 2-3 | Build site using Claude Code + portfolio templates |
| Day 4 | Internal QA, Lighthouse testing, cross-device testing |
| Day 5 | Client review round 1 |
| Day 6 | Revisions + round 2 review |
| Day 7 | Go live |

**Professional Tier (2-3 weeks):**
| Day | Activity |
|-----|----------|
| Day 1-2 | Discovery + research + copy generation |
| Day 3-5 | Design system setup + build all pages |
| Day 6-7 | SEO implementation + forms + integrations |
| Day 8 | Internal QA + testing |
| Day 9-10 | Client review round 1 + revisions |
| Day 11-12 | Client review round 2 + final revisions |
| Day 13-14 | Launch prep + go live |

**Why we're faster:**
- Claude eliminates the blank-page problem — first drafts of copy, code, and structure happen in minutes
- Reusable CSS architecture from portfolio site cuts setup time by 60-70%
- No design mockup phase — we design in the browser, which is the final product
- No handoff between designer and developer — it's all one person
- AI handles the tedious parts (meta tags, schema, alt text, boilerplate code) so Andrew focuses on creative and strategic decisions

---

## Prompt Library (Quick Reference)

| Task | Prompt Starter |
|------|---------------|
| Industry research | "Research the [industry] industry for a website project..." |
| Discovery questions | "Generate discovery call questions for a [industry] client..." |
| Page copy | "Write website copy for a [industry] business. Here are the notes..." |
| Meta tags | "Write meta titles and descriptions for these pages..." |
| CTAs | "Generate 10 CTA button texts for a [industry] site..." |
| HTML structure | "Build HTML structure for a [number]-page [industry] website..." |
| CSS system | "Create a CSS design system with these brand colors..." |
| JSON-LD schema | "Generate JSON-LD structured data for a [type] business..." |
| Sitemap | "Generate an XML sitemap for these URLs..." |
| Alt text | "Write alt text for these images on a [industry] site..." |
| Handoff doc | "Create a handoff document for this website project..." |
| Testimonial request | "Write a testimonial request email for a client who just launched..." |

---

## Internal Notes

- **Never deliver raw Claude output to a client.** Every piece of copy, code, and documentation must be reviewed, refined, and personalized before the client sees it.
- **Save effective prompts.** When a prompt produces great output, save it to a prompt library file for reuse. Build prompt templates for each industry vertical over time.
- **Claude is strongest at first drafts and structure.** It's weakest at visual design decisions (color pairings, whitespace, typography feel) and understanding nuanced brand voice. Lean on Claude for speed, lean on human judgment for taste.
- **Version control everything.** Use Git for all client projects. Claude Code makes this seamless.
- **Lighthouse is the final authority.** If Claude generates code that scores below 90 on Lighthouse, fix it before delivery, regardless of how good it looks.
- **Track time savings.** Keep a log of how long each project phase takes with AI vs. estimated time without AI. This data supports the speed claims in marketing.
