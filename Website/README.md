# MeVIPOne website

Dependency-free static landing page built with HTML, CSS and a small JavaScript file. Compatible with Cloudflare Pages static hosting.

The public entry point (`index.html`) is a focused Coming Soon page. The previous complete product presentation is preserved at `app.html`; its sections, styles, assets, and existing client-side behavior remain available there. The early-access action on the public page opens an email to the configured contact address because no mailing-list integration is connected.

## Local preview

Serve this directory with any static file server, for example:

    python3 -m http.server 8000

Then open http://localhost:8000.

## Cloudflare Pages

Deploy the repository as a static site. No build command or framework preset is required; use the repository root as the output directory. The email signup fields are intentionally disabled and labeled as pending until a signup backend or mailing-list provider is connected. No email addresses are collected by this site yet.

## Brand assets

The supplied orange-gold crown M emblem is stored as assets/mevipone-mark.png and used by the header, footer, and dashboard preview; favicon.png uses a small copy of the same artwork. No app manifest or separate installable-app icon is configured. Lifestyle images in assets/ were generated specifically for this page and compressed as JPEGs.

## Current visual direction

The hero pairs original salon and hospital photography to reinforce the official tagline, “Save Your Time.” The source images are compressed in `assets/hospital.jpg` and `assets/salon.jpg`; customer and business-owner card photography remains in `assets/customer.jpg` and `assets/business.jpg`. Online Bargaining uses the attached at-home customer photo, compressed as `assets/bargaining-home.jpg`, with a static HTML/CSS phone and negotiation preview plus the category image sheet in `assets/bargaining-categories.jpg`. Search and bargaining APIs are not present, so the preview controls are disabled and the prices are illustrative. Event discovery and organizer sections use original compressed venue photos in `assets/events.jpg` and `assets/event-organizer.jpg` with illustrative HTML/CSS interfaces. Sample event cards are labeled, booking and organizer actions display “Coming Soon,” and the previews show no fabricated metrics. Event search, booking, event creation, bargaining, revenue analytics, and mailing-list APIs are not present; signup remains disabled until a mailing-list integration is available.


## Footer and launch state

The early-access prompt appears once, immediately above the footer; its email field remains disabled until a signup provider is connected. The footer links to existing sections and the configured contact email. App downloads and social profile links are not shown as active because no official app-store or social URLs are configured.
