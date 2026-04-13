# Dhruv Portfolio Website

This portfolio website is built entirely with `HTML + CSS + JavaScript`. No framework, library, or site builder is used. The visual direction is inspired by the calm lakeside setting in your photos, mixed with a premium editorial style and layered 3D-like presentation.

## Project files

- `index.html` : the main portfolio landing page.
- `connect.html` : a separate page for GitHub, LinkedIn, and contact details.
- `assets/style.css` : the full visual system, layout, motion, 3D-style image treatment, and responsive behavior.
- `assets/script.js` : navigation behavior, reveal animation, tilt interaction, scroll progress, rotating text, and contact form logic.
- `assets/images/dhruv-1.jpg` : supporting image used in the hero and gallery.
- `assets/images/dhruv-2.jpg` : supporting image used in the hero and gallery.
- `assets/images/dhruv-3.jpg` : primary image used across the hero, about section, gallery, and connect page.

## Where each photo is used

| Photo | Used in | How it is used |
| --- | --- | --- |
| `dhruv-3.jpg` | `index.html` hero section | Main featured portrait inside the 3D hero composition |
| `dhruv-3.jpg` | `index.html` about section | Displayed inside the custom arched frame |
| `dhruv-3.jpg` | `index.html` gallery section | Used as the lead spotlight image |
| `dhruv-3.jpg` | `connect.html` top visual | Used as the main connect-page portrait |
| `dhruv-1.jpg` | `index.html` hero section | Used as the left floating support image |
| `dhruv-1.jpg` | `index.html` gallery section | Used as a supporting visual card |
| `dhruv-2.jpg` | `index.html` hero section | Used as the right floating support image |
| `dhruv-2.jpg` | `index.html` gallery section | Used as a supporting visual card |

## What the 3D photo effect means

The photos are not turned into real 3D models. Instead, the website creates a 3D-like feel by combining `CSS perspective`, layered cards, depth transforms, floating animation, and JavaScript tilt interaction.

These are the main pieces used for that effect:

- `.tilt-shell` : applies perspective and live tilt movement.
- `.photo-stage` : creates the layered hero scene.
- `.main-portrait` : moves the main image forward using depth styling.
- `.orbit-left` and `.orbit-right` : place the supporting photos around the main portrait with floating motion.
- `.depth-ring` : adds visual depth behind the hero composition.
- `setupTilt()` in JavaScript : responds to pointer movement and slightly rotates cards for an interactive feel.

## CSS explanation

The table below explains the main CSS selectors and groups used in the project.

| CSS selector / group | Purpose |
| --- | --- |
| `:root` | Stores the color palette, shadow values, border radii, and transition timing variables |
| `*`, `*::before`, `*::after` | Applies `box-sizing: border-box` globally |
| `html` | Enables smooth scrolling |
| `body` | Defines the page background, base font, and default text color |
| `body::before` | Adds the subtle grid texture in the background |
| `body::after` | Adds extra radial glow for atmosphere |
| `.scroll-meter` | Creates the top progress bar container |
| `.scroll-meter span` | Expands based on scroll progress |
| `.site-header` | Styles the sticky glass-like navigation bar |
| `.brand-mark`, `.brand-dot`, `.brand-copy` | Create the visual logo and brand name |
| `.site-nav` | Arranges the navigation links |
| `.site-nav a` | Styles each navigation link |
| `.site-nav .is-active` | Highlights the current active link |
| `.nav-cta` | Styles the connect button as a stronger call to action |
| `.nav-toggle` | Displays the mobile menu button |
| `.site-shell` | Controls the main content width and top spacing |
| `.hero`, `.contact-hero` | Build the top two-column layouts |
| `.eyebrow` | Styles small uppercase section labels |
| `.hero h1`, `.contact-copy h1`, `.section-title h2` | Define the large serif heading styles |
| `.hero-shift` | Highlights a key phrase in the hero heading |
| `.hero-text` | Styles the main introduction paragraph |
| `.hero-actions` | Arranges the main action buttons |
| `.button` | Base button styling |
| `.button.primary` | Filled primary button style |
| `.button.secondary` | Glass-style secondary button |
| `.hero-points` | Creates the grid of hero info cards |
| `.point-card` | Styles each hero info card |
| `.point-label` | Styles the mini label in each point card |
| `.hero-visual`, `.contact-visual` | Define the perspective area for 3D visuals |
| `.tilt-shell` | Adds the interactive tilt transform layer |
| `.photo-stage` | Creates the hero image stage |
| `.main-portrait` | Styles the main hero portrait card |
| `.orbit-card` | Styles the supporting floating image cards |
| `.orbit-left`, `.orbit-right` | Position and animate the left and right support images |
| `.card-badge` | Styles the featured label on the hero image |
| `.card-caption` | Styles the text overlay on the hero image |
| `.gallery-copy` | Styles the overlay text in gallery cards |
| `.connect-overlay` | Styles the overlay text on the connect portrait |
| `.main-portrait::after`, `.gallery-card::after`, `.connect-portrait::after` | Add gradient overlays for readability |
| `.depth-ring` | Creates the circular depth effect behind the hero |
| `.floating-note` | Adds the floating message panel in the hero |
| `.belief-strip` | Builds the dark highlight strip under the hero |
| `.section` | Adds vertical spacing between sections |
| `.section-title` | Controls section heading width and spacing |
| `.split-layout` | Creates the about section text and image layout |
| `.glass-panel` | Styles the glass-like content card |
| `.arch-panel` | Styles the container for the arched image area |
| `.arch-window` | Creates the custom arched frame for image 3 |
| `.arch-window img` | Clips the about-section image cleanly inside the arch |
| `.arch-window::before` | Adds the inner decorative border inside the arch |
| `.journey-grid` | Creates the four-card journey layout |
| `.journey-card` | Styles each journey card |
| `.journey-card::before` | Adds the background glow in journey cards |
| `.journey-number` | Styles the large step number |
| `.skill-layout` | Creates the two-column skill section |
| `.skill-bars` | Holds the skill progress rows |
| `.skill-row` | Styles one skill row |
| `.skill-meta` | Aligns each skill title and subtitle |
| `.skill-track` | Creates the progress bar background |
| `.skill-track span` | Fills the progress bar |
| `.gallery-layout` | Creates the gallery layout with a lead image and side stack |
| `.gallery-stack` | Stacks the right-side gallery cards |
| `.gallery-card` | Styles each gallery image card |
| `.gallery-feature` | Enlarges the lead gallery card |
| `.closing-banner` | Styles the final call-to-action section |
| `.site-footer` | Styles the footer layout |
| `.connect-cards` | Arranges the profile cards on the connect page |
| `.social-card` | Styles each GitHub, LinkedIn, or email card |
| `.connect-portrait` | Styles the main portrait on the connect page |
| `.connect-grid` | Creates the contact form and note layout |
| `.form-panel` | Styles the dark contact form panel |
| `.contact-form` | Defines the form layout |
| `.contact-form label` | Stacks labels with their inputs |
| `.contact-form input`, `.contact-form textarea` | Style the form fields |
| `.form-status` | Displays the feedback message after submit |
| `.connect-note` | Styles the right-side note panel |
| `.note-list` | Styles the bullet list in the note panel |
| `.reveal` | Sets the initial hidden state for reveal animation |
| `.reveal.is-visible` | Displays elements once they enter the viewport |
| `@keyframes orbitFloatLeft` | Controls the left floating image animation |
| `@keyframes orbitFloatRight` | Controls the right floating image animation |
| `@media (max-width: 1080px)` | Adjusts layouts for tablet screens |
| `@media (max-width: 820px)` | Adjusts navigation and layout for mobile |
| `@media (max-width: 640px)` | Refines spacing and image sizes for small screens |
| `@media (prefers-reduced-motion: reduce)` | Reduces motion for accessibility |

## JavaScript explanation

| JavaScript part | Purpose |
| --- | --- |
| `navToggle` | Selects the mobile navigation button |
| `siteNav` | Selects the navigation container |
| `scrollMeter` | Selects the top progress bar element |
| `revealItems` | Selects all elements that should reveal on scroll |
| `tiltItems` | Selects all elements that should respond to tilt interaction |
| `rotatingWords` | Selects the text elements that rotate through phrases |
| `yearTargets` | Selects all footer year placeholders |
| `contactForm` | Selects the contact form on the connect page |
| `formStatus` | Selects the status message area below the form |
| `navToggle.addEventListener("click", ...)` | Opens and closes the mobile navigation |
| `siteNav.querySelectorAll("a")...` | Closes the mobile menu after a link is clicked |
| `setActiveNavLink()` | Highlights the active page or anchor in the navigation |
| `window.addEventListener("hashchange", setActiveNavLink)` | Refreshes active navigation when the page hash changes |
| `updateScrollMeter()` | Calculates the scroll percentage and updates the top progress bar |
| `window.addEventListener("scroll", updateScrollMeter)` | Updates the progress bar on scroll |
| `window.addEventListener("resize", updateScrollMeter)` | Recalculates the progress bar on resize |
| `IntersectionObserver` | Watches sections and reveals them when they enter the viewport |
| `revealObserver.observe(item)` | Attaches the observer to each reveal element |
| `setupTilt(element)` | Adds the interactive 3D tilt effect |
| `pointermove` listener in `setupTilt` | Updates the tilt angle based on pointer position |
| `resetTilt()` | Returns the tilt effect to its default state |
| `tiltItems.forEach(setupTilt)` | Activates tilt behavior on all selected cards |
| `rotatingWords.forEach(...)` | Rotates the dynamic role text in the hero section |
| `setInterval(...)` inside rotating words | Changes the displayed word every 2.2 seconds |
| `yearTargets.forEach(...)` | Inserts the current year automatically in the footer |
| `contactForm.addEventListener("submit", ...)` | Handles the contact form submit without reloading the page |
| `new FormData(contactForm)` | Collects form input values |
| `mailto:` link creation | Builds the email draft URL from user input |
| `window.location.href = mailtoLink` | Opens the user’s default email app |
| `contactForm.reset()` | Clears the form after submit |

## Important customization

These values should be replaced later with your real details:

- Update `href="https://github.com/your-username"` in `connect.html` with your real GitHub profile link.
- Update `href="https://www.linkedin.com/in/your-linkedin-id"` in `connect.html` with your real LinkedIn profile link.
- Update `dhruv.dev@example.com` in `connect.html` and `assets/script.js` with your real email address.

## Content direction used in the website

The website content was written around these ideas:

- You enjoy the IT field and want to grow in it
- You are currently learning frontend development
- You plan to learn backend development next
- You want to build a career in full stack development
- You have a calm but ambitious learning mindset

## How to run it

1. Open the project folder.
2. Open `index.html` in your browser.
3. Open `connect.html` to view the separate connect page.

If you want, I can also update the website with your real GitHub, LinkedIn, and email details next.
