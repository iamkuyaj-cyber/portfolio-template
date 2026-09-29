# About Me: Content Brief for My Portfolio

## Instructions for Claude Code

Use this file to replace every PLACEHOLDER in this portfolio template.

- Write in first person, casual but confident. No em dashes anywhere.
- Only use the numbers and facts in this file. Never invent stats, clients or testimonials.
- Client names stay anonymous. Describe clients by industry only.
- If a spot has no content here, leave it as `TODO` so I can fill it in later.
- Sections marked **HIDE** do not fit my business. Remove them from the navigation and home cards cleanly, without breaking the layout.
- Show me the site with `npm run dev` after each major section so I can review and make my own edits.

---

## 1. Identity (`src/data/profile.ts`)

| Field | Value |
|---|---|
| name | Jeun Agustero |
| firstName | Jeun |
| handle | TODO (my preferred @handle) |
| role | Meta Ads and Creative Strategist |
| verifiedLabel | TODO (e.g. FAMA Elite Season 3, or leave "Verified") |
| email | TODO (confirm which email to show publicly) |
| location | Davao City, Philippines (GMT+8) |
| Home headline, line 1 | Cheap leads are easy. |
| Home headline, line 2 | Revenue is the job. |
| hero.body | I turn Meta ad spend into revenue, not just leads and clicks, for service businesses and ecommerce brands. |
| portraitAlt | Jeun Agustero |

**Phone stats (3):**
- `$3.5M+` / Managed ad spend
- `5.9x` / Largest account scale
- `GMT+8` / Davao, PH

**Socials:**
- LinkedIn: https://www.linkedin.com/in/jeunagustero
- Facebook: TODO
- Discord: remove this one unless I add a link

**Photo:** TODO (I will add my own photo to `public/`)

---

## 2. Tools marquee (`src/components/ToolsMarquee.tsx`)

Replace the default list with my tools. Keep icons that already exist in `public/icons/`; for the rest, tell me which logos I need to add.

Meta Ads Manager, GoHighLevel, Google Tag Manager, Stape.io (server-side tracking), Meta Pixel and Conversions API, Claude Code, Google Workspace

Remove: Codex, Cursor, Hermes AI, VS Code, Lightspeed X-Series, Zendesk, Intercom, Slack

---

## 3. About (`src/components/AboutGrid.tsx`)

**One line:** I'm a Meta ads strategist who fixes the real problem behind bad numbers, not just the ads.

**Longer version:**
I started out as a media buyer. Over time I learned that most accounts don't have a traffic problem. They have a tracking problem, a funnel problem, or a follow-up problem. So now I diagnose first, then rebuild the whole system: the ads, the funnel, the tracking and the automations that turn a lead into a sale.

I work with two kinds of clients: service businesses that live on leads (legal, wellness, contractors, heavy equipment) and DTC ecommerce brands. My strategy is grounded in market desire, sophistication and awareness, and I audit accounts with my SPEAR method.

I'm based in Davao City, Philippines, and I'm a husband and an active member of Couples for Christ. (TODO: keep or remove the personal line)

---

## 4. Credentials

- FAMA Elite Season 3, Meta ads mentorship under Coach Sarah Maluyo (2026)
- Member of Tribe (Freelance Movement) by John Pagulayan
- TODO: any certificates I want to show (GoHighLevel, Meta Blueprint, etc.)

---

## 5. Services (`src/components/ServicesGrid.tsx`)

**Page line:** I sell the whole system: ads, funnel, follow-up and tracking. Not just traffic.

**Why my method works (one sentence):** I diagnose what is actually broken before spending another dollar, so scale comes from a system that holds up.

**Process (3 steps):**
1. **Diagnose** - I audit the account, funnel and tracking to find what is really costing you sales.
2. **Rebuild** - I fix the tracking, the funnel and the follow-up, then relaunch the ads on clean data.
3. **Scale** - You get more revenue at a stable cost per result, not just more leads.

**Five services:**

| # | Service | Chip | One line | 3 benefits |
|---|---|---|---|---|
| 1 | Meta Ads for Lead Gen | Service businesses | Campaigns built to produce signed clients and booked jobs, not cheap form fills. | Lower cost per sale; Lead quality tracked to revenue; Creative testing every week |
| 2 | DTC Ecommerce Scaling | Ecommerce | Scale spend while holding cost per purchase steady. | Structured scaling plan; Incremental attribution reporting; Creative strategy for cold traffic |
| 3 | Tracking and Attribution | Pixel, CAPI, GTM | Clean, deduplicated data so Meta optimizes for real buyers. | Pixel and CAPI deduplication; Server-side tracking with Stape; Fixes over-reporting |
| 4 | Funnels and GHL Automations | GoHighLevel | Funnels and follow-up that turn leads into sales without manual chasing. | Lead capture and booking funnels; SMS and email follow-up; Pipeline built in GHL |
| 5 | Ad Account Audits | SPEAR method | A clear report of what is broken and what to fix first. | Full account and funnel review; Prioritized fix list; Branded PDF report |

**Nudge line:** Not sure which one you need? Start with an audit.

**Example automation (one sentence):** TODO (e.g. a GHL flow that texts a new lead within a minute and books them straight into a call)

---

## 6. Projects and case studies (`src/components/ProjectsGrid.tsx`)

**Page line:** A few rebuilds I'm proud of. Open a card to see it full size.

Use these as the project cards. All clients anonymous.

1. **Heavy equipment dealer.** 1,699 leads at about $3 each but only 5 machines sold. I rebuilt the system and it went to 14 machines sold and about $700K in revenue on $8,332 in ad spend.
2. **DTC pet supplies brand.** Took over in September 2025. Grew monthly spend 7.4x in five months with cost per purchase moving only 2.7%. Over my tenure: $1.03M spent, $1.93M revenue, 5.9x the spend of the previous year and cost per purchase down 32%.
3. **Legal claim intake.** Scaled from $2,494 to $59,231 per month in five months. 2,679 leads and 256 signed cases at $545 per signed case.
4. **Personal injury firm.** Scaled from $11.6K to $71.6K per month in ad spend.
5. **Tattoo removal clinic (Texas).** Cost per lead cut from $41.77 to $14.10, ROAS from 1.16 to 7.09.
6. **DTC baby products brand.** Cost per purchase cut 54%, ROAS from 1.23 to 3.72.
7. **Tracking rebuild (coaching brand).** Fixed severe over-reporting caused by duplicate events and un-deduplicated CAPI. Rebuilt tracking in GTM with proper event IDs, with server-side via Stape.

**Screenshots / sample document cards:** TODO (I'll add screenshots of dashboards, GHL workflows and a sample audit report)

---

## 7. AI Builds (`src/data/ai-stack.ts`)

**Root line:** AI tools I build to run ads and sales faster.

- **AI Sales Assistant "Alex"** (Live) - An AI sales rep for a heavy equipment dealer that handles questions, objections, competitor comparisons, financing pre-approval and warehouse routing. Stack: Claude.
- **Ads Account Assistant** (Internal) - I connected Meta Ads to Claude so I can ask questions about any client ad account in plain English. Stack: Claude, Meta Ads MCP.
- **Multi-client Ads Tracker** (Internal) - A Google Sheets tracker for monthly performance across all my client accounts. Stack: Google Sheets.
- **Tracking Stack** (Live) - Pixel, CAPI, GTM and Stape setups with deduplication for GHL funnels. Stack: GTM, Stape.io, GoHighLevel.

Remove any leftover placeholder projects beyond these. Keep categories simple (one or two groups max).

---

## 8. Funnels and websites carousel (`src/data/funnels.ts`)

TODO: I will add my own funnel pages and websites (GHL funnels for lead capture and booking). Until then, keep the placeholders but rename the groups to "Lead Capture" and "Booking".

---

## 9. Testimonials (`src/components/TestimonialsGrid.tsx`)

**Page line:** What clients say about working with me.

TODO: I'll add real client testimonials and videos. Use these roles for now, no names:
- Client 1: Heavy equipment dealer | I run their Meta ads and AI sales assistant.
- Client 2: DTC pet supplies brand | I manage and scale their Meta ads.
- Client 3: Legal claim intake agency | I run their lead gen campaigns and tracking.

Do not write any fake quotes.

---

## 10. FAQs (`src/data/faqs.ts`)

1. **What do you do?** I run Meta ads and fix the system around them: funnel, tracking and follow-up. My clients are service businesses that need leads and ecommerce brands that need sales.
2. **How fast can you start?** Audits usually start within a few days. Full account management starts after the audit, once we agree on the plan. (TODO: confirm)
3. **How much do you charge?** It depends on your ad spend and what needs fixing. I start with an audit, then quote a monthly retainer or project. (TODO: confirm)
4. **Where are you based?** Davao City, Philippines (GMT+8). I work evening shifts, so I overlap with US business hours. (TODO: confirm)
5. **Do you only do leads?** No. About half my managed spend is ecommerce. I care about revenue either way.

---

## 11. Contact (`src/components/ContactGrid.tsx`)

**Line:** Tell me about your ads and what's not working. I'll reply with what I'd look at first.

---

## 12. Sections to HIDE (don't fit my business)

- **Flagship / Showcase product** (dashboards, job listings board, changelog). I don't sell a software product. Either hide it, or repurpose Showcase into my hero case study (heavy equipment dealer). Ask me which.
- **Mobile apps and web apps** in `src/data/projects.ts`. Hide unless I add some later.
- **Browser extensions** in `Projects.tsx`. Hide.

---

## 13. Legal pages

Privacy and Terms: TODO. Fill in with my name and the fact the contact form only opens the visitor's email app. Remind me to review before going live.
