# Client Onboarding & Project Pipeline

**Internal Reference Document — Andrew Hicks Freelance Web Design**
**Last Updated: February 2026**

---

## 8-Stage Client Pipeline

### Stage 1: Lead Capture

**How leads enter the pipeline:**
- Cold email response (from outreach playbook)
- Website contact form submission (andrewhicks.dev)
- Social media DM (Twitter, LinkedIn, Reddit)
- Referral from existing client
- Free audit request

**Immediate response protocol:**
- Respond within 2 hours during business hours (8 AM - 6 PM CT)
- Respond within 12 hours for after-hours inquiries
- Use Template 1 from brand-messaging.md (initial response to inquiry)
- Goal: schedule a discovery call within 48 hours of first contact

**Lead qualification checklist:**
- [ ] Is this a real business (not a personal project or student)?
- [ ] Do they have budget authority or access to the decision maker?
- [ ] Is their timeline realistic (not "I need it tomorrow")?
- [ ] Is the project within our service offerings?
- [ ] Are they in a priority industry tier?

---

### Stage 2: Discovery Call

**Logistics:**
- 30-minute video call via Google Meet or Zoom
- Send calendar link within first response email
- Send confirmation email with meeting link 24 hours before
- Send reminder 1 hour before

**Before the call:**
- Research their current website (if they have one) — run Lighthouse, check mobile, review SEO basics
- Research their business on Google, Yelp, social media
- Prepare 3 specific observations about their current site to demonstrate expertise
- Have the discovery question list ready (see below)

**During the call:**
- First 5 minutes: introductions, rapport building, understand how they found you
- Next 15 minutes: ask discovery questions, take detailed notes
- Next 5 minutes: explain your process, timeline, and pricing range (not exact quote yet)
- Final 5 minutes: next steps — tell them you'll send a proposal within 24 hours

**After the call:**
- Send a "great talking with you" email within 1 hour
- Begin drafting proposal immediately

---

### Discovery Call Question List

**Business Overview (5 minutes)**
1. Tell me about your business — how long have you been operating?
2. What services do you offer? What's your primary revenue driver?
3. How many employees/team members do you have?
4. What's your geographic service area? (Just Austin? All of Central Texas? Statewide?)
5. What makes your business different from competitors?

**Target Customers (3 minutes)**
6. Who is your ideal customer? (Demographics, age, income level)
7. How do customers currently find you? (Google, word of mouth, social media, referrals?)
8. What's the first thing a potential customer does when they're considering your business? (Do they Google you? Check reviews? Visit your website?)

**Current Website (3 minutes)**
9. Do you currently have a website? If so, what platform is it on?
10. What do you like about your current site? What do you dislike?
11. Is your current site generating leads or calls? How do you know?
12. What's the biggest frustration with your current online presence?

**Goals & Vision (3 minutes)**
13. What's the #1 thing you want your new website to accomplish? (More phone calls? More appointment bookings? Better brand image?)
14. Are there any competitor websites or other sites you admire? What do you like about them?
15. How will you measure success? What would make this project a home run for you?

**Content & Assets (2 minutes)**
16. Do you have a logo, brand colors, and brand guidelines?
17. Do you have professional photos of your business, team, and/or work?
18. Do you have existing copy/content you want to keep, or are you starting fresh?
19. Do you have testimonials or reviews we can feature?

**Logistics (2 minutes)**
20. What's your ideal timeline for having the new site live?
21. What's your budget range for this project?
22. Are you the final decision maker, or is there anyone else who needs to approve?
23. Is there anything else I should know about your business or this project?

---

### Stage 3: Proposal

**Timeline:** Sent within 24 hours of discovery call. Same day if possible.

**Proposal structure:**
1. **Summary:** 2-3 sentences recapping what they need and what we'll deliver
2. **Scope of work:** Detailed list of every deliverable, page by page
3. **Timeline:** Week-by-week breakdown with milestones
4. **Investment:** Price, tier, any add-ons, what's included vs. what's not
5. **Payment terms:** 50% upfront, 50% on delivery (or 3-payment option for Premium)
6. **What happens next:** Sign off, payment, kickoff call
7. **About Andrew:** Brief bio, case study reference, portfolio link
8. **Terms:** Revision policy, ownership, cancellation

**Proposal format:** Clean PDF or well-formatted email. Keep it under 2 pages. Do not overwhelm.

**Proposal pricing guidelines:**
- Starter leads: quote at $600-$800 (leave room above minimum)
- Professional leads: quote at $1,800-$2,500 (sweet spot is $2,000)
- Premium leads: quote at $4,000-$5,000
- Always present pricing confidently. Never apologize for your prices.

---

### Stage 4: Contract & Payment

**Service agreement covers:**
- Scope of work (mirrored from proposal)
- Timeline and milestones
- Payment terms and amounts
- Revision policy (2 rounds included, $75/hour beyond)
- Intellectual property (client owns all final deliverables upon full payment)
- Cancellation terms (deposit is non-refundable if work has begun; unused portion refunded if cancelled before work starts)
- Limitation of liability
- Both parties sign electronically

**Payment processing:**
- Invoice sent via Stripe or PayPal
- 50% deposit due before any work begins
- Work does NOT start until deposit clears
- Final 50% due upon project completion, before site goes live and files are transferred

**Premium tier 3-payment option:**
- Payment 1 (34%): Due upon contract signing, before work begins
- Payment 2 (33%): Due at midpoint review (after initial build, before revisions)
- Payment 3 (33%): Due upon final delivery and launch

---

### Stage 5: Kickoff

**Kickoff email sent after deposit clears. Requests:**
- [ ] Logo files (SVG or high-res PNG preferred)
- [ ] Brand colors (hex codes if available, or reference examples)
- [ ] Professional photos (team, office, work, products)
- [ ] Existing copy/content they want to use (or confirmation they want us to write it)
- [ ] Access to existing hosting account (if migrating)
- [ ] Access to existing domain registrar (if transferring DNS)
- [ ] Google Analytics access (if they have existing analytics)
- [ ] List of all services/pages they want
- [ ] Any competitor sites they like (for design reference)
- [ ] Any specific functionality requests (booking form, map, specific integrations)

**Kickoff call (15 minutes, if needed):**
- Walk through what's needed and answer questions
- Set expectations for weekly check-ins
- Share staging URL where they'll review progress
- Confirm timeline milestones

**Give the client a deadline:** All assets are due within 3 business days of kickoff. If assets are delayed, the timeline shifts accordingly. Communicate this clearly upfront.

---

### Stage 6: Build Phase

**Weekly rhythm:**
- Monday: Begin week's build tasks
- Wednesday/Thursday: Share progress via staging link
- Friday: Weekly check-in email summarizing what was completed, what's coming next week, any blockers

**Client communication guidelines:**
- Share the staging link early (even if incomplete). Clients love seeing progress.
- Send brief update emails 2-3x per week. Keep them short: "Here's what I built today + screenshot."
- If you hit a blocker that requires client input, ask immediately. Don't wait for the weekly check-in.
- Keep a running list of decisions needed from the client. Batch them when possible to avoid overwhelming.

**Internal build process:**
1. Set up project repository in Git
2. Build CSS design system with client's brand (colors, fonts, spacing)
3. Build page structure and navigation
4. Implement content (copy, images, CTAs)
5. Implement SEO (meta tags, schema, sitemap, robots.txt)
6. Set up forms and integrations
7. Performance optimization (images, code minification, lazy loading)
8. Internal QA: Lighthouse audit, cross-device testing, link checking
9. Deploy to staging for client review

---

### Stage 7: Review & Launch

**Review Round 1:**
- Share staging link with a guided walkthrough (Loom video or annotated screenshots)
- Ask client to review every page and compile ALL feedback into one email/document
- Set a deadline for feedback (3 business days recommended)
- Implement all changes within 2-3 business days

**Review Round 2:**
- Share updated staging link
- Ask for final review and sign-off
- Deadline: 2 business days
- Implement any remaining tweaks

**After Round 2 approval:**
- Do NOT implement additional changes without discussing scope/cost
- If client adds new requests: "Great idea! That falls outside our current scope. I can add that for $[X]. Want me to include it?"

**Launch checklist:**
- [ ] All pages reviewed and approved by client
- [ ] Lighthouse scores: 90+ performance, accessibility, best practices, SEO
- [ ] Mobile responsive on iPhone, Android, iPad
- [ ] Cross-browser tested: Chrome, Firefox, Safari, Edge
- [ ] All forms working and sending to correct email
- [ ] All links working (internal and external)
- [ ] Favicon installed
- [ ] SSL certificate active (HTTPS)
- [ ] Google Analytics 4 tracking installed and verified
- [ ] Google Search Console verified
- [ ] XML sitemap submitted to Search Console
- [ ] robots.txt configured correctly
- [ ] JSON-LD structured data validated
- [ ] Open Graph meta tags set for social sharing
- [ ] 404 page exists
- [ ] DNS configured, domain pointing to new hosting
- [ ] Old site redirects set up (if applicable)
- [ ] Final payment received
- [ ] Go live

**Launch day:**
- Switch DNS / deploy to production
- Verify everything works on the live domain
- Send "You're live!" email to client with link
- Post on social media (with client's permission)

---

### Stage 8: Post-Launch & Referrals

**30-Day Post-Launch Support (included in all tiers):**
- Bug fixes (if anything breaks)
- Minor text edits (typos, phone number changes, small copy tweaks)
- Answer questions about the site
- Does NOT include: new pages, new features, design changes, ongoing SEO work

**Week 1 post-launch:**
- Check in on Day 2: "How's everything looking? Any issues?"
- Monitor analytics for baseline traffic data
- Fix any bugs reported

**Week 2-3 post-launch:**
- Send analytics summary: "Your site had X visitors this week, here's the breakdown"
- Ask if they need any minor updates

**Week 4 post-launch:**
- Send final 30-day report
- Request testimonial (use email template from brand-messaging.md)
- Ask for referrals (use referral ask template)
- If applicable, pitch maintenance retainer or additional services

**Testimonial request timing:** 2-3 weeks after launch is the sweet spot. The site has been live long enough for them to see results, but the experience is still fresh.

**Referral incentive program:**
- $100 credit toward future work OR $100 discount on their next project for every referral that converts to a paying client
- Explain the incentive when asking for the referral
- Track referrals in the CRM spreadsheet
- Alternative: offer a free month of maintenance for a converting referral

---

## Payment Terms Summary

| Tier | Deposit | Midpoint | Final | Total |
|------|---------|----------|-------|-------|
| Starter ($500-$800) | 50% | -- | 50% (on delivery) | 100% |
| Professional ($1,500-$2,500) | 50% | -- | 50% (on delivery) | 100% |
| Premium - Standard ($3,500-$5,000) | 50% | -- | 50% (on delivery) | 100% |
| Premium - Split ($3,500-$5,000) | 34% | 33% | 33% (on delivery) | 100% |

**Non-negotiable rules:**
- Work never begins before deposit clears
- Site never goes live before final payment clears
- If a client pushes back on 50% upfront, offer the 3-payment split (Premium only) or move on
- Never start work on a handshake. Always have a signed agreement and deposit.

---

## Revision Policy Summary

| Item | Policy |
|------|--------|
| Rounds included | 2 rounds in all tiers |
| What counts as a round | One consolidated batch of feedback from the client |
| What's covered | Design tweaks, text changes, layout adjustments, color/font modifications |
| What's NOT covered | New pages, new features, scope changes, redesigns of approved sections |
| Additional revisions rate | $75/hour, billed in 30-minute increments |
| Client notification | Always notify before any billable revision work begins |
| Round 1 turnaround | 2-3 business days |
| Round 2 turnaround | 1-2 business days |

---

## Handoff Documentation Template

Every completed project includes a handoff document covering:

1. **Project Summary**
   - Client name, site URL, launch date
   - Pages built and key features
   - Technologies used

2. **How to Request Updates**
   - Email ahicks5.nd@gmail.com with the subject line "[Business Name] - Website Update Request"
   - Describe the change needed (text edit, image swap, new section, etc.)
   - Include screenshots or annotated examples when possible
   - Turnaround: minor edits within 24-48 hours (during maintenance period), larger changes quoted separately

3. **Hosting & Domain Information**
   - Hosting provider and login credentials location
   - Domain registrar and renewal date
   - SSL certificate status and renewal
   - Who to contact if the site goes down

4. **Analytics Access**
   - Google Analytics 4: how to access, what to look at (users, sessions, top pages, traffic sources)
   - Google Search Console: how to access, what to monitor (search performance, index coverage)
   - How to share access with a marketing person or other team member in the future

5. **Maintenance Schedule**
   - What's included in post-launch support (30 days standard, 3 months for Premium)
   - What maintenance costs after the included period
   - Recommended maintenance tasks (check for broken links, update content quarterly, review analytics monthly)

6. **Important Files & Credentials**
   - Where all project files are stored
   - Any third-party accounts created (Google Analytics, Search Console, form service, etc.)
   - Login credentials are stored [in a shared password manager or secure document — never in plain text email]

7. **FAQ**
   - "How do I update my business hours?" → Contact me or reference the maintenance guide
   - "How do I add a new photo?" → Contact me with the image and where you want it placed
   - "My site is down, what do I do?" → Check hosting provider status page, then contact me immediately
   - "How do I check if my site is ranking on Google?" → Open Google Search Console (link + instructions)
   - "I want to add a new page, how much does that cost?" → $200-$400 depending on complexity, contact me for a quick quote

---

## Internal Notes

- **Speed of response is everything in the early stages.** The first freelancer to respond with a thoughtful reply usually wins the project. Aim for under 2 hours.
- **The discovery call is a sales call, but it shouldn't feel like one.** Ask questions, listen, take notes. The client should talk 70% of the time. When you do talk, focus on their problems and your solutions — never on features.
- **Never send a proposal without a price range from the discovery call.** If they can't afford your minimums, you'll waste time writing a proposal they'll reject. Get budget alignment on the call.
- **Underpromise on timeline, overdeliver.** If you think it'll take 5 days, say 7. Delivering early feels great. Delivering late destroys trust.
- **The referral ask is the highest-ROI activity in the entire pipeline.** One happy client who refers 2-3 others is worth more than 100 cold emails. Never skip the referral ask.
