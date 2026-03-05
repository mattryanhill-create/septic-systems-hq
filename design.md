# Septic Systems HQ - Design PRD

## 1. Overview

### Project Summary
**Septic Systems HQ** is the ultimate online authority for septic system information, designed as a modern, premium technical reference website.

### Target Audience
- **Primary**: Homeowners with septic systems (ages 35-65)
- **Secondary**: Home buyers evaluating properties, real estate professionals
- **Tertiary**: Septic inspectors, contractors, and industry professionals

### Website Language
English (US)

---

## 2. Page Manifest

| Page ID | Page Name | File Name | Is Entry | Notes |
|---------|-----------|-----------|----------|-------|
| home | Homepage | index.html | Yes | Hero, key topics grid, featured articles, newsletter CTA |
| types | Types of Septic Systems | types.html | No | Comprehensive system type comparisons |
| maintenance | Maintenance Guide | maintenance.html | No | Pumping schedules, care tips, seasonal checklists |
| problems | Common Problems | problems.html | No | Troubleshooting, warning signs, solutions |
| installation | Installation Guide | installation.html | No | Process overview, costs, contractor selection |
| inspection | Inspection Guide | inspection.html | No | DIY inspection, professional inspections, checklists |
| costs | Cost Guides | costs.html | No | Pricing breakdowns, cost factors, saving tips |
| regulations | Codes & Regulations | regulations.html | No | Federal, state, local regulations, permits |
| faq | FAQ | faq.html | No | Frequently asked questions, accordion format |
| glossary | Glossary | glossary.html | No | Terminology dictionary, alphabetical navigation |

---

## 3. Global Design System

### 3.1 Color Palette

#### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Navy Primary | `#1e3a5f` | Headers, primary buttons, key text, footer background |
| Navy Dark | `#152a45` | Hover states, emphasis backgrounds |
| Navy Light | `#2a4a73` | Secondary accents, borders |

#### Accent Colors
| Name | Hex | Usage |
|------|-----|-------|
| Teal Primary | `#0d9488` | Links, CTAs, highlights, active states |
| Teal Dark | `#0f766e` | Link hover, button hover |
| Teal Light | `#14b8a6` | Subtle accents, icons |
| Teal Pale | `#ccfbf1` | Background highlights, info boxes |

#### Neutral Colors
| Name | Hex | Usage |
|------|-----|-------|
| White | `#ffffff` | Primary backgrounds, cards |
| Gray 50 | `#f8fafc` | Section alternates, subtle backgrounds |
| Gray 100 | `#f1f5f9` | Card backgrounds, input backgrounds |
| Gray 200 | `#e2e8f0` | Borders, dividers |
| Gray 300 | `#cbd5e1` | Disabled states, subtle borders |
| Gray 400 | `#94a3b8` | Placeholder text, muted elements |
| Gray 500 | `#64748b` | Secondary text, captions |
| Gray 600 | `#475569` | Body text, descriptions |
| Gray 700 | `#334155` | Strong secondary text |
| Gray 800 | `#1e293b` | Headings, important text |
| Gray 900 | `#0f172a` | Primary text, darkest elements |

#### Semantic Colors
| Name | Hex | Usage |
|------|-----|-------|
| Success | `#10b981` | Success messages, positive indicators |
| Success Light | `#d1fae5` | Success backgrounds |
| Warning | `#f59e0b` | Warnings, cautions |
| Warning Light | `#fef3c7` | Warning backgrounds |
| Error | `#ef4444` | Errors, critical alerts |
| Error Light | `#fee2e2` | Error backgrounds |
| Info | `#3b82f6` | Informational notes |
| Info Light | `#dbeafe` | Info backgrounds |

### 3.2 Typography

#### Font Families
| Role | Font | Fallback |
|------|------|----------|
| Primary (Headings) | Inter | system-ui, -apple-system, sans-serif |
| Secondary (Body) | Inter | system-ui, -apple-system, sans-serif |
| Monospace | JetBrains Mono | Consolas, Monaco, monospace |

#### Type Scale
| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| H1 | 3rem (48px) | 700 | 1.1 | -0.02em |
| H2 | 2.25rem (36px) | 700 | 1.2 | -0.01em |
| H3 | 1.5rem (24px) | 600 | 1.3 | 0 |
| H4 | 1.25rem (20px) | 600 | 1.4 | 0 |
| H5 | 1.125rem (18px) | 600 | 1.4 | 0 |
| H6 | 1rem (16px) | 600 | 1.5 | 0 |
| Body Large | 1.125rem (18px) | 400 | 1.7 | 0 |
| Body | 1rem (16px) | 400 | 1.7 | 0 |
| Body Small | 0.875rem (14px) | 400 | 1.6 | 0 |
| Caption | 0.75rem (12px) | 500 | 1.5 | 0.02em |

### 3.3 Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| space-1 | 0.25rem (4px) | Micro spacing |
| space-2 | 0.5rem (8px) | Tight spacing |
| space-3 | 0.75rem (12px) | Compact spacing |
| space-4 | 1rem (16px) | Default spacing |
| space-5 | 1.25rem (20px) | Medium spacing |
| space-6 | 1.5rem (24px) | Component padding |
| space-8 | 2rem (32px) | Section inner spacing |
| space-10 | 2.5rem (40px) | Large component spacing |
| space-12 | 3rem (48px) | Section padding |
| space-16 | 4rem (64px) | Large section padding |
| space-20 | 5rem (80px) | Hero spacing |
| space-24 | 6rem (96px) | Major section breaks |

### 3.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| radius-sm | 0.25rem (4px) | Small elements, tags |
| radius-md | 0.5rem (8px) | Buttons, inputs |
| radius-lg | 0.75rem (12px) | Cards, containers |
| radius-xl | 1rem (16px) | Large cards, modals |
| radius-2xl | 1.5rem (24px) | Feature cards, hero elements |
| radius-full | 9999px | Pills, avatars |

### 3.5 Shadows

| Token | Value | Usage |
|-------|-------|-------|
| shadow-sm | 0 1px 2px 0 rgba(0,0,0,0.05) | Subtle elevation |
| shadow-md | 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1) | Cards, buttons |
| shadow-lg | 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1) | Elevated cards |
| shadow-xl | 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1) | Modals, dropdowns |
| shadow-teal | 0 4px 14px 0 rgba(13,148,136,0.25) | Primary button glow |

### 3.6 Animation Defaults

#### Timing Functions
| Name | Value | Usage |
|------|-------|-------|
| ease-default | ease | Default transitions |
| ease-in-out | cubic-bezier(0.4, 0, 0.2, 1) | Smooth transitions |
| ease-out | cubic-bezier(0, 0, 0.2, 1) | Entering animations |
| ease-in | cubic-bezier(0.4, 0, 1, 1) | Exiting animations |
| ease-bounce | cubic-bezier(0.34, 1.56, 0.64, 1) | Playful interactions |
| ease-spring | cubic-bezier(0.175, 0.885, 0.32, 1.275) | Card hovers |

#### Durations
| Name | Value | Usage |
|------|-------|-------|
| duration-fast | 150ms | Micro-interactions |
| duration-normal | 250ms | Standard transitions |
| duration-slow | 350ms | Emphasis transitions |
| duration-slower | 500ms | Page transitions |
| duration-slowest | 700ms | Hero animations |

### 3.7 Component Styles

#### Primary Button
- Background: `#0d9488`
- Text: `#ffffff`
- Padding: 0.875rem 1.75rem
- Border Radius: 0.5rem
- Font Weight: 600
- Hover: Background `#0f766e`, transform translateY(-2px), shadow-teal
- Transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1)

#### Secondary Button
- Background: transparent
- Border: 2px solid `#0d9488`
- Text: `#0d9488`
- Padding: 0.75rem 1.5rem
- Hover: Background `#ccfbf1`, border-color `#0f766e`

#### Standard Card
- Background: `#ffffff`
- Border Radius: 0.75rem
- Padding: 1.5rem
- Shadow: shadow-md
- Hover: shadow-lg, transform translateY(-4px)
- Transition: all 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275)

#### Feature Card
- Background: `#ffffff`
- Border Radius: 1rem
- Padding: 2rem
- Shadow: shadow-lg
- Border: 1px solid `#e2e8f0`
- Hover: shadow-xl, transform translateY(-6px), border-color `#0d9488`

#### Text Input
- Background: `#ffffff`
- Border: 1px solid `#e2e8f0`
- Border Radius: 0.5rem
- Padding: 0.75rem 1rem
- Focus: Border `#0d9488`, shadow 0 0 0 3px rgba(13,148,136,0.1)

#### Header
- Background: `#ffffff`
- Height: 72px
- Shadow: 0 1px 3px rgba(0,0,0,0.05)
- Position: Fixed top
- Z-Index: 50

#### Nav Link
- Font Size: 0.9375rem
- Font Weight: 500
- Color: `#475569`
- Hover: Color `#0d9488`
- Transition: color 150ms ease

---

## 4. Page Specifications

### 4.1 Homepage (index.html)

#### Sections

**Section 1: Header/Navigation**
- Layout: Fixed top, full width, max-width container centered
- Height: 72px
- Logo: "Septic Systems HQ" with house/droplet icon
- Nav Links: Types, Maintenance, Problems, Costs, Inspection, FAQ

**Section 2: Hero**
- Layout: Full width, min-height 85vh, two-column on desktop
- Left Column (55%): Headline, subheadline, search bar, CTA buttons
- Right Column (45%): Hero illustration/image
- Background: Gradient from `#f8fafc` to `#ffffff`
- Headline: "Everything You Need to Know About Septic Systems"
- Subheadline: "Expert guides, maintenance tips, and troubleshooting advice for homeowners. Trusted by 500,000+ readers."
- Animations:
  - Headline: fadeInUp, 0.7s, ease-out, delay 0.1s
  - Subheadline: fadeInUp, 0.7s, ease-out, delay 0.2s
  - Search: fadeInUp, 0.7s, ease-out, delay 0.3s
  - CTAs: fadeInUp, 0.7s, ease-out, delay 0.4s
  - Hero image: fadeIn + scale from 0.95 to 1, 1s, ease-out, delay 0.3s

**Section 3: Trust Indicators**
- Layout: Horizontal row, 4 columns
- Background: `#1e3a5f`
- Content: "500+ Articles", "Expert Reviewed", "Updated Weekly", "Free Resources"
- Animations: fadeIn on scroll, stagger 0.1s per item

**Section 4: Key Topics Grid**
- Layout: 3x2 grid on desktop
- Background: `#ffffff`
- Cards (6): Types of Systems, Maintenance, Common Problems, Installation, Inspection, Cost Guides
- Animations: fadeInUp on scroll, stagger 0.1s

**Section 5: Featured Article**
- Layout: Two-column, image left (45%), content right (55%)
- Background: `#f8fafc`
- Animations: fadeInLeft/Right on scroll

**Section 6: Quick Stats**
- Layout: 4-column grid
- Background: `#ffffff`
- Stats: "1 in 5 US homes", "$250-500 pumping cost", "3-5 Years interval", "20-30 Years lifespan"
- Animations: Count-up animation on scroll

**Section 7: Popular Articles**
- Layout: 3-column card grid
- Background: `#f8fafc`
- Animations: fadeInUp on scroll, stagger 0.15s

**Section 8: Newsletter CTA**
- Layout: Centered, max-width 600px
- Background: Gradient from `#1e3a5f` to `#2a4a73`
- Animations: fadeInUp on scroll

**Section 9: Footer**
- Layout: 4-column grid + bottom bar
- Background: `#0f172a`
- Animations: fadeIn on scroll

#### Images

| Image | Type | Placement | Keywords |
|-------|------|-----------|----------|
| hero-illustration | Illustration | Hero right column | septic system diagram, house cross-section, underground pipes, tank illustration, technical drawing, clean vector, infographic style, educational, professional, blue and teal color scheme |
| featured-maintenance | Photo | Featured article | septic tank pumping, maintenance work, professional service truck, hose connection, outdoor residential, blue sky, professional photography |
| article-thumbnail-1 | Photo | Popular articles | clogged drain, slow sink, plumbing problem, homeowner concern, bathroom sink, water draining |
| article-thumbnail-2 | Photo | Popular articles | septic system inspection, professional inspector, outdoor yard, maintenance check, clipboard |
| article-thumbnail-3 | Photo | Popular articles | green lawn grass, healthy yard, leach field, drainage field, outdoor residential |

---

### 4.2 Types of Septic Systems (types.html)

#### Sections

**Section 1: Header** (Active nav: Types)

**Section 2: Page Hero**
- Background: `#1e3a5f`
- Title: "Types of Septic Systems"
- Animations: fadeInUp

**Section 3: System Type Comparison Table**
- Layout: Full-width table, responsive
- Rows: Conventional, Chamber, Drip Distribution, Mound, Aerobic, Recirculating Sand Filter
- Animations: fadeIn on scroll

**Section 4: Detailed System Cards**
- Layout: Stacked full-width cards
- Systems: Conventional, ATU, Mound, Chamber, Drip Distribution, Sand Filter
- Animations: fadeInUp on scroll, stagger 0.2s

**Section 5: Decision Guide**
- Background: `#ccfbf1`
- Animations: fadeIn on scroll

**Section 6: Related Resources**
- Layout: 3-column card grid
- Animations: fadeInUp on scroll

#### Images

| Image | Type | Placement | Keywords |
|-------|------|-----------|----------|
| conventional-system | Diagram | Conventional card | conventional septic system, gravity fed, leach field diagram, two-compartment tank, distribution box, soil absorption field, technical illustration |
| aerobic-system | Diagram | ATU card | aerobic treatment unit, oxygen injection, electrical components, pump tank, spray distribution, advanced treatment, technical diagram |
| mound-system | Diagram | Mound card | mound septic system, raised bed, sand fill, pump chamber, pressure distribution, above-grade system, hilly terrain |
| chamber-system | Diagram | Chamber card | chamber leach field, plastic chambers, gravelless system, infiltrator, open bottom, series connection |

---

### 4.3 Maintenance Guide (maintenance.html)

#### Sections

**Section 1: Header** (Active nav: Maintenance)

**Section 2: Page Hero**
- Background: `#1e3a5f`
- Title: "Septic System Maintenance Guide"

**Section 3: Maintenance Schedule Visual**
- Layout: Horizontal timeline
- Timeline: Monthly, Annually, 3-5 Years, As Needed
- Animations: fadeInUp, timeline draws on scroll

**Section 4: Pumping Guide**
- Layout: Two-column
- Animations: fadeInLeft/Right

**Section 5: Do's and Don'ts**
- Layout: Two-column comparison
- Animations: fadeInUp, stagger items

**Section 6: Seasonal Care**
- Layout: 4-column tabs
- Content: Spring, Summer, Fall, Winter

**Section 7: Printable Checklist CTA**
- Background: `#ccfbf1`

#### Images

| Image | Type | Placement | Keywords |
|-------|------|-----------|----------|
| pumping-truck | Photo | Pumping section | septic pumping truck, vacuum hose, professional service, residential driveway, maintenance operation |
| inspection-check | Photo | Hero section | professional inspector, septic system check, maintenance evaluation, clipboard documentation |
| seasonal-care | Illustration | Seasonal section | four seasons illustration, home maintenance calendar, seasonal tasks, year-round care, infographic style |

---

### 4.4 Common Problems (problems.html)

#### Sections

**Section 1: Header** (Active nav: Problems)

**Section 2: Page Hero**
- Background: `#1e3a5f`
- Title: "Common Septic System Problems"

**Section 3: Warning Signs Grid**
- Layout: 2x3 grid
- Cards: Slow Drains, Sewage Odors, Lush Grass, Standing Water, Gurgling Sounds, Sewage Backup
- Animations: fadeInUp, stagger 0.1s

**Section 4: Problem Detail Sections**
- Layout: Alternating two-column
- Problems: Clogs, Drain Field Failure, Tank Issues, Tree Root Intrusion
- Animations: fadeInLeft/Right alternating

**Section 5: Emergency Guide**
- Background: `#fee2e2`
- Border: Left border `#ef4444`

**Section 6: Prevention Tips**
- Layout: Numbered list with icons

#### Images

| Image | Type | Placement | Keywords |
|-------|------|-----------|----------|
| slow-drain | Photo | Slow drains | clogged bathroom sink, slow draining water, plumbing issue, residential bathroom |
| sewage-odor | Photo | Odor problem | outdoor yard smell, septic vent pipe, odor issue, residential exterior |
| lush-grass | Photo | Drain field | overly green grass, leach field problem, nutrient overload, uneven lawn growth |
| standing-water | Photo | Water pooling | puddle in yard, saturated ground, drainage failure, standing water |

---

### 4.5 Installation Guide (installation.html)

#### Sections

**Section 1: Header** (Active nav: Installation)

**Section 2: Page Hero**
- Background: `#1e3a5f`
- Title: "Septic System Installation"

**Section 3: Installation Process Steps**
- Layout: Vertical numbered timeline
- Steps: Site Evaluation, System Design, Excavation, Tank Installation, Drain Field, Final Inspection
- Animations: fadeInUp, step numbers animate sequentially

**Section 4: Cost Breakdown**
- Layout: Two-column

**Section 5: Permit Requirements**
- Layout: Info cards by region

**Section 6: Contractor Selection**
- Layout: Checklist format
- Background: `#ccfbf1`

**Section 7: Timeline Visual**
- Layout: Horizontal bar chart

#### Images

| Image | Type | Placement | Keywords |
|-------|------|-----------|----------|
| site-evaluation | Photo | Step 1 | soil testing, perc test, site evaluation, professional with equipment, outdoor residential |
| excavation | Photo | Step 3 | backhoe excavation, septic tank installation, heavy equipment, dirt pile, construction site |
| tank-installation | Photo | Step 4 | concrete septic tank, crane lowering, installation process, construction phase |
| contractor-meeting | Photo | Contractor section | homeowner meeting contractor, consultation, professional discussion, outdoor residential |

---

### 4.6 Inspection Guide (inspection.html)

#### Sections

**Section 1: Header** (Active nav: Inspection)

**Section 2: Page Hero**
- Background: `#1e3a5f`
- Title: "Septic System Inspection"

**Section 3: DIY vs Professional**
- Layout: Two-column comparison

**Section 4: DIY Inspection Checklist**
- Layout: Interactive checklist

**Section 5: What Inspectors Look For**
- Layout: Accordion sections
- Sections: Tank condition, Baffle inspection, Drain field, Distribution box, Plumbing

**Section 6: Inspection Report Sample**
- Layout: Document preview

**Section 7: How Often to Inspect**
- Layout: Timeline visual

#### Images

| Image | Type | Placement | Keywords |
|-------|------|-----------|----------|
| diy-inspection | Photo | DIY section | homeowner inspecting yard, visual check, maintenance awareness, outdoor residential |
| professional-inspection | Photo | Professional section | septic inspector at work, professional equipment, tank opening, safety gear |
| inspection-tools | Photo | Tools section | inspection tools, flashlight, probe stick, measuring tape, professional equipment |
| report-document | Illustration | Report section | inspection report document, checklist form, professional documentation, paper form |

---

### 4.7 Cost Guides (costs.html)

#### Sections

**Section 1: Header** (Active nav: Costs)

**Section 2: Page Hero**
- Background: `#1e3a5f`
- Title: "Septic System Costs"

**Section 3: Cost Calculator Tool**
- Layout: Interactive calculator

**Section 4: Cost Breakdown by Category**
- Layout: Expandable cards
- Categories: Installation, Pumping, Repair, Inspection, Maintenance

**Section 5: Regional Cost Variations**
- Layout: Map or table

**Section 6: Money-Saving Tips**
- Layout: Numbered tips with icons
- Background: `#ccfbf1`

**Section 7: Cost vs Value**
- Layout: Two-column

#### Images

| Image | Type | Placement | Keywords |
|-------|------|-----------|----------|
| cost-comparison | Illustration | Hero section | money savings illustration, cost comparison chart, financial planning, budget graphic |
| pumping-cost | Photo | Pumping section | septic pumping invoice, service receipt, cost documentation, professional service |
| repair-work | Photo | Repair section | septic repair work, contractor fixing system, repair equipment, outdoor service |

---

### 4.8 Regulations (regulations.html)

#### Sections

**Section 1: Header** (Active nav: Regulations)

**Section 2: Page Hero**
- Background: `#1e3a5f`
- Title: "Septic System Regulations"

**Section 3: Regulation Levels**
- Layout: Three-column cards
- Cards: Federal, State, Local

**Section 4: Common Permit Types**
- Layout: Table or list

**Section 5: Environmental Regulations**
- Layout: Info sections

**Section 6: Compliance Checklist**
- Layout: Downloadable checklist
- Background: `#ccfbf1`

**Section 7: State Resources**
- Layout: Searchable table

#### Images

| Image | Type | Placement | Keywords |
|-------|------|-----------|----------|
| permit-document | Illustration | Permits section | building permit document, official paperwork, government form, approval stamp |
| environmental | Photo | Environmental section | clean water source, environmental protection, natural landscape, groundwater protection |
| compliance | Illustration | Compliance section | checklist illustration, compliance verification, regulatory adherence, approved status |

---

### 4.9 FAQ (faq.html)

#### Sections

**Section 1: Header** (Active nav: FAQ)

**Section 2: Page Hero**
- Background: `#1e3a5f`
- Title: "Frequently Asked Questions"
- Search: "Search FAQs..." input

**Section 3: Category Tabs**
- Layout: Horizontal tabs
- Categories: General, Maintenance, Problems, Costs, Installation

**Section 4: FAQ Accordion**
- Layout: Full-width accordion
- Questions: 6-8 per category
- Sample: Pumping frequency, what not to put down drain, system lifespan, green grass, garbage disposal, pumping cost

**Section 5: Still Have Questions**
- Layout: Centered CTA
- Background: `#ccfbf1`

#### Images

| Image | Type | Placement | Keywords |
|-------|------|-----------|----------|
| faq-illustration | Illustration | Hero | question mark illustration, FAQ graphic, help and support, information seeking |

---

### 4.10 Glossary (glossary.html)

#### Sections

**Section 1: Header** (Active nav: Glossary)

**Section 2: Page Hero**
- Background: `#1e3a5f`
- Title: "Septic System Glossary"

**Section 3: Alphabet Navigation**
- Layout: Horizontal sticky bar
- Content: A-Z letter links

**Section 4: Term Listings**
- Layout: Grouped by letter
- Sample Terms: Absorption Field, Aerobic Bacteria, Anaerobic Bacteria, Baffle, Biomat, Distribution Box, Effluent, Leach Field, Perc Test, Scum Layer, Septic Tank, Sludge

**Section 5: Related Terms**
- Layout: Tag cloud or list

#### Images

| Image | Type | Placement | Keywords |
|-------|------|-----------|----------|
| glossary-illustration | Illustration | Hero | dictionary book illustration, terminology reference, educational resource, knowledge base |

---

## 5. Technical Requirements

### 5.1 Required CDNs

```html
<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

<!-- Icons -->
<script src="https://unpkg.com/lucide@latest"></script>

<!-- Animation Library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

### 5.2 Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### 5.3 Accessibility Requirements
- WCAG 2.1 AA compliance
- Minimum contrast ratio: 4.5:1
- Keyboard navigation support
- Screen reader friendly markup

---

## 6. Image Requirements Summary

| Image ID | Page | Keywords |
|----------|------|----------|
| hero-illustration | index | septic system diagram, house cross-section, underground pipes, tank illustration, technical drawing, clean vector, infographic style, educational, professional, blue teal color scheme |
| featured-maintenance | index | septic tank pumping, maintenance work, professional service truck, hose connection, outdoor residential, blue sky, professional photography |
| article-thumbnail-1 | index | clogged drain, slow sink, plumbing problem, homeowner concern, bathroom sink, water draining |
| article-thumbnail-2 | index | septic system inspection, professional inspector, outdoor yard, maintenance check, clipboard |
| article-thumbnail-3 | index | green lawn grass, healthy yard, leach field, drainage field, outdoor residential |
| conventional-system | types | conventional septic system, gravity fed, leach field diagram, two-compartment tank, distribution box, soil absorption field, technical illustration |
| aerobic-system | types | aerobic treatment unit, oxygen injection, electrical components, pump tank, spray distribution, advanced treatment, technical diagram |
| mound-system | types | mound septic system, raised bed, sand fill, pump chamber, pressure distribution, above-grade system, hilly terrain |
| chamber-system | types | chamber leach field, plastic chambers, gravelless system, infiltrator, open bottom, series connection |
| pumping-truck | maintenance | septic pumping truck, vacuum hose, professional service, residential driveway, maintenance operation |
| inspection-check | maintenance | professional inspector, septic system check, maintenance evaluation, clipboard documentation |
| seasonal-care | maintenance | four seasons illustration, home maintenance calendar, seasonal tasks, year-round care, infographic |
| slow-drain | problems | clogged bathroom sink, slow draining water, plumbing issue, residential bathroom |
| sewage-odor | problems | outdoor yard smell, septic vent pipe, odor issue, residential exterior |
| lush-grass | problems | overly green grass, leach field problem, nutrient overload, uneven lawn growth |
| standing-water | problems | puddle in yard, saturated ground, drainage failure, standing water |
| site-evaluation | installation | soil testing, perc test, site evaluation, professional with equipment, outdoor residential |
| excavation | installation | backhoe excavation, septic tank installation, heavy equipment, dirt pile, construction site |
| tank-installation | installation | concrete septic tank, crane lowering, installation process, construction phase |
| contractor-meeting | installation | homeowner meeting contractor, consultation, professional discussion, outdoor residential |
| diy-inspection | inspection | homeowner inspecting yard, visual check, maintenance awareness, outdoor residential |
| professional-inspection | inspection | septic inspector at work, professional equipment, tank opening, safety gear |
| inspection-tools | inspection | inspection tools, flashlight, probe stick, measuring tape, professional equipment |
| report-document | inspection | inspection report document, checklist form, professional documentation, paper form |
| cost-comparison | costs | money savings illustration, cost comparison chart, financial planning, budget graphic |
| pumping-cost | costs | septic pumping invoice, service receipt, cost documentation, professional service |
| repair-work | costs | septic repair work, contractor fixing system, repair equipment, outdoor service |
| permit-document | regulations | building permit document, official paperwork, government form, approval stamp |
| environmental | regulations | clean water source, environmental protection, natural landscape, groundwater protection |
| compliance | regulations | checklist illustration, compliance verification, regulatory adherence, approved status |
| faq-illustration | faq | question mark illustration, FAQ graphic, help and support, information seeking |
| glossary-illustration | glossary | dictionary book illustration, terminology reference, educational resource, knowledge base |

---

## 7. Navigation Structure

### 7.1 Main Navigation

| Position | Label | Link | Icon |
|----------|-------|------|------|
| 1 | Home | index.html | home |
| 2 | Types | types.html | layers |
| 3 | Maintenance | maintenance.html | calendar-check |
| 4 | Problems | problems.html | alert-triangle |
| 5 | Costs | costs.html | dollar-sign |
| 6 | Inspection | inspection.html | clipboard-check |
| 7 | FAQ | faq.html | help-circle |

### 7.2 Footer Navigation

**Column 1: Quick Links**
- Home, Types of Systems, Maintenance Guide, Common Problems, Cost Guides

**Column 2: Resources**
- Installation Guide, Inspection Guide, Regulations, FAQ, Glossary

**Column 3: Legal**
- Privacy Policy, Terms of Use, Disclaimer, Contact

---

## 8. Animation Specifications

### 8.1 Page Load Animations

| Element | Animation | Duration | Easing | Delay |
|---------|-----------|----------|--------|-------|
| Header | fadeIn | 300ms | ease-out | 0ms |
| Hero content | fadeInUp | 700ms | ease-out | 100ms stagger |
| Hero image | fadeIn + scale | 1000ms | ease-out | 300ms |

### 8.2 Scroll Animations

| Trigger | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Section enters viewport | fadeInUp | 600ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Cards grid | fadeInUp + stagger | 500ms each | cubic-bezier(0.4, 0, 0.2, 1) |
| Two-column sections | fadeInLeft/Right | 800ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Stats counter | countUp | 2000ms | ease-out |

### 8.3 Hover Animations

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Primary button | translateY(-2px) + shadow | 250ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Card | translateY(-6px) + shadow | 350ms | cubic-bezier(0.175, 0.885, 0.32, 1.275) |
| Nav link | color change | 150ms | ease |

### 8.4 Accordion Animations

| Action | Animation | Duration | Easing |
|--------|-----------|----------|--------|
| Expand | height auto + fadeIn | 300ms | ease-in-out |
| Collapse | height 0 + fadeOut | 250ms | ease-in-out |

---

## 9. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, stacked sections, hamburger nav |
| Tablet | 640px - 1024px | 2-column grids, condensed spacing |
| Desktop | 1024px - 1280px | Full layout, 3-column grids |
| Large Desktop | > 1280px | Max-width container (1280px), centered |

---

## 10. File Structure

```
/mnt/okcomputer/output/
├── index.html
├── types.html
├── maintenance.html
├── problems.html
├── installation.html
├── inspection.html
├── costs.html
├── regulations.html
├── faq.html
├── glossary.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   └── (all image files)
└── design.md (this file)
```

---

*Document Version: 1.0*
*Created: Design SubAgent*
