# Vectux Academy - UX/UI Improvements Task List

Based on client feedback and ChatGPT recommendations in `feedback.txt`, here are the improvements needed for both **Diplomados** and **Programs** pages.

---

## Diplomados Page (`/diplomados`)

### Current Section Order:
1. HeroSection
2. Lecture
3. Promotion
4. Bussiness
5. HowWeLearn
6. Testimonials
7. DiplomadosCards
8. MasterclassSection
9. ContactSection

### Recommended Section Order (per feedback.txt):
1. HeroSection (value + CTA)
2. Why this matters now (future of work / AI) - *may need new section or repurpose Promotion*
3. DiplomadosCards (program cards)
4. Who this is for (profiles) - *Bussiness section*
5. HowWeLearn (outcomes & methodology)
6. Testimonials (social proof)
7. Lecture (instructors/mentors)
8. MasterclassSection
9. ContactSection (final CTA)

### Tasks:

#### 1. Rearrange Section Order
- [ ] Move DiplomadosCards higher (after Hero or Promotion)
- [ ] Move Bussiness (target audience) before HowWeLearn
- [ ] Keep ContactSection at bottom as final CTA

#### 2. Hero Section Improvements
- [ ] Ensure text is left-aligned (value proposition)
- [ ] Check H1 size: Desktop 56-60px, Tablet 40-44px, Mobile 28-32px
- [ ] CTA button: "Ver Programas" or "Ver Diplomados" instead of generic text
- [ ] Optional: Add secondary CTA "Hablar con un Asesor"

#### 3. Program Cards (DiplomadosCards)
- [ ] Each card needs: Title, 1-sentence value proposition, 3-4 bullet benefits, CTA button
- [ ] Card hover: slight elevation + shadow increase + button color intensifies
- [ ] CTA text: "Ver Curriculum" or "Ver Detalles del Programa" (avoid "Learn more")
- [ ] Soft shadow or subtle border styling
- [ ] 12-16px internal padding

#### 4. Buttons
- [ ] Minimum height: 44px (mobile-friendly tap target)
- [ ] Horizontal padding: 20-28px
- [ ] Hover transition: 150-250ms
- [ ] One primary CTA per section
- [ ] Repeat CTAs after major content blocks

#### 5. Typography Check
- [ ] H1: 56-60px desktop, 40-44px tablet, 28-32px mobile
- [ ] H2 (Section titles): 32-36px desktop, 22-26px mobile
- [ ] H3 (Card titles): 22-24px desktop, 18-20px mobile
- [ ] Body text: 16-18px, line-height 1.5-1.7
- [ ] Avoid center-aligned long paragraphs

#### 6. Motion & Interactions
- [ ] Keep AOS fade-in animations (already implemented)
- [ ] Ensure button hover transitions are 150-250ms
- [ ] Card hover elevation effect
- [ ] Avoid heavy parallax or auto-playing animations

---

## Programs Page (`/programs`)

### Current Components:
1. HeroSection
2. AboutSection
3. ServiceSection
4. Skills
5. LevelsSection
6. WhyAttend
7. InfoSection
8. Testimonials
9. ContactUsSection
10. Letstalk

### Tasks:

#### 1. Rearrange Section Order (same logic)
- [ ] Hero first with clear value proposition + CTA
- [ ] Program/service cards should be prominent (move ServiceSection up if needed)
- [ ] Target audience section (who is this for)
- [ ] Outcomes/benefits
- [ ] Testimonials for social proof
- [ ] Final CTA at bottom

#### 2. Hero Section
- [ ] Same typography rules as Diplomados
- [ ] Left-aligned text layout
- [ ] Strong outcome-driven headline
- [ ] Primary + optional secondary CTA

#### 3. Cards & Hover Effects
- [ ] Apply same card styling: shadow, padding, hover elevation
- [ ] CTA buttons with specific action text

#### 4. Buttons
- [ ] Same 44px minimum height
- [ ] Consistent styling with Diplomados page
- [ ] Hover states

#### 5. Typography Consistency
- [ ] Match font sizes with Diplomados page
- [ ] Same line-height and spacing

---

## General Improvements (Both Pages)

### Already Implemented:
- [x] Responsive design (mobile, tablet, desktop)
- [x] AOS scroll animations
- [x] Smooth scrolling with Lenis
- [x] Gradient boundaries between sections
- [x] Glass card effects
- [x] 3D hover effects on selected images
- [x] Left border accent cards
- [x] Button color: #ffaa00 (orange)

### To Do:
- [ ] Review all button sizes (ensure 44px height minimum)
- [ ] Check all CTA button text (make action-specific)
- [ ] Ensure long paragraphs are not center-aligned
- [ ] Add alt text to all images for accessibility
- [ ] Consider lazy loading for images
- [ ] Performance check: images under 200kb where possible

---

## Priority Order

1. **High Priority**: Section order rearrangement (both pages)
2. **High Priority**: CTA button improvements (text, sizing, placement)
3. **Medium Priority**: Typography fine-tuning
4. **Medium Priority**: Card hover effects consistency
5. **Low Priority**: Performance optimization (images, lazy loading)

---

## Notes

- The current design already follows many best practices
- Main changes are content organization (section order) and minor UI tweaks
- The client's ChatGPT feedback is generic - we've already implemented more advanced features
- Focus on user flow: Hero -> Programs -> Who it's for -> Benefits -> Testimonials -> CTA
