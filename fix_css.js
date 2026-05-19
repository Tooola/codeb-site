import fs from 'fs';
let css = fs.readFileSync('src/index.css', 'utf8');

// 1. Hero Video
css = css.replace(/\.hero-video-wrap img \{([^}]+)\}/, '.hero-video-wrap img {$1 filter: var(--hero-img-filter); }');

// 2. About
css = css.replace(/\.about-visual img \{([^}]+)\}/, '.about-visual img {$1 filter: var(--about-img-filter); }');
css = css.replace(/\.about-visual:hover img \{([^}]+)\}/, '.about-visual:hover img {$1 filter: var(--about-img-filter-hover); }');

// 3. Services 
css = css.replace(/\.svc-img-wrap img \{([^}]+)\}/g, (match, p1) => {
  if (p1.includes('filter:')) return match;
  return `.svc-img-wrap img {${p1} filter: var(--svc-img-filter); }`;
});
css = css.replace(/\.svc-card:hover \.svc-img-wrap img \{([^}]+)\}/g, (match, p1) => {
  if (p1.includes('filter:')) return match;
  return `.svc-card:hover .svc-img-wrap img {${p1} filter: var(--svc-img-filter-hover); }`;
});

// 4. Feature
css = css.replace(/\.feature-img img \{([^}]+)\}/, (match, p1) => {
  if (p1.includes('filter:')) return match;
  return `.feature-img img {${p1} filter: var(--feature-img-filter); }`;
});
css = css.replace(/\.feature-img:hover img \{([^}]+)\}/, (match, p1) => {
  if (p1.includes('filter:')) return match;
  return `.feature-img:hover img {${p1} filter: var(--feature-img-filter-hover); }`;
});

// 5. Hero Side
css = css.replace(/\.hero-side-image img \{([^}]+)\}/, (match, p1) => {
  if (p1.includes('filter:')) return match;
  return `.hero-side-image img {${p1} filter: var(--side-img-filter); }`;
});
css = css.replace(/\.hero-side-image:hover img \{([^}]+)\}/, (match, p1) => {
  if (p1.includes('filter:')) return match;
  return `.hero-side-image:hover img {${p1} filter: var(--side-img-filter-hover); }`;
});

// 6. Hero Fixed
css = css.replace(/\.hero-fixed-img img \{([^}]+)\}/, (match, p1) => {
  if (p1.includes('filter:')) return match;
  return `.hero-fixed-img img {${p1} filter: var(--fixed-img-filter); }`;
});
css = css.replace(/\.hero-fixed-img:hover img \{([^}]+)\}/, (match, p1) => {
  if (p1.includes('filter:')) return match;
  return `.hero-fixed-img:hover img {${p1} filter: var(--fixed-img-filter-hover); }`;
});

// Update the :root and [data-theme='light'] blocks
const rootRegex = /:root\s*\{[\s\S]*?--overlay-svc:[^;]+;/;
const rootVars = `:root {
  --blue:        #1565c0;
  --blue-bright: #2196f3;
  --blue-light:  #64b5f6;
  --blue-glow:   rgba(33,150,243,0.18);
  
  --bg-main:     #04090f;
  --bg-alt:      #080f1a;
  --bg-feature:  #030810;
  --bg-feature-alt: #060d18;
  --bg-card:     #0b1422;
  --bg-card-hover: #0e1c30;
  --bg-nav:      rgba(4,9,15,.96);
  --bg-footer:   #020610;

  --text-main:   #e8f4fd;
  --text-muted:  rgba(232,244,253,.65);
  --text-dim:    rgba(232,244,253,.4);
  --text-very-dim: rgba(232,244,253,.18);

  --overlay-hero-top: rgba(4,9,15,1) 0%, rgba(4,9,15,.6) 40%, rgba(4,9,15,.25) 70%, transparent 100%;
  --overlay-hero-side: rgba(4,9,15,.75) 0%, transparent 60%;
  --overlay-hero-image: rgba(4,9,15,0.6) 100%;
  --overlay-hero-image-alt: rgba(4,9,15,0.4) 100%;
  --overlay-hero-fixed: rgba(4,9,15,0.8) 100%;
  --overlay-svc: rgba(11,20,34,0.7) 100%;
  
  --hero-img-filter: saturate(.55) hue-rotate(195deg) brightness(.7);
  --about-img-filter: saturate(.6) hue-rotate(190deg) contrast(1.1);
  --about-img-filter-hover: saturate(.9) hue-rotate(190deg) contrast(1.05);
  --svc-img-filter: saturate(0.5) hue-rotate(195deg) brightness(0.75);
  --svc-img-filter-hover: saturate(0.85) hue-rotate(195deg) brightness(0.9);
  --feature-img-filter: saturate(.5) hue-rotate(200deg) brightness(.65);
  --feature-img-filter-hover: saturate(.8) hue-rotate(200deg) brightness(.78);
  --side-img-filter: saturate(0.6) hue-rotate(190deg) brightness(0.8);
  --side-img-filter-hover: saturate(0.85) hue-rotate(190deg) brightness(0.9);
  --fixed-img-filter: saturate(0.7) hue-rotate(190deg) brightness(0.8);
  --fixed-img-filter-hover: saturate(0.9) hue-rotate(190deg) brightness(0.9);`;

const lightRegex = /\[data-theme='light'\]\s*\{[\s\S]*?--overlay-svc:[^;]+;/;
const lightVars = `[data-theme='light'] {
  --bg-main:     #ffffff;
  --bg-alt:      #f8fafc;
  --bg-feature:  #f8fafc;
  --bg-feature-alt: #ffffff;
  --bg-card:     #ffffff;
  --bg-card-hover: #f1f5f9;
  --bg-nav:      rgba(255,255,255,.96);
  --bg-footer:   #f8fafc;
  
  --text-main:   #0f172a;
  --text-muted:  #475569;
  --text-dim:    #64748b;
  --text-very-dim: #94a3b8;

  --overlay-hero-top: rgba(255,255,255,1) 0%, rgba(255,255,255,.8) 40%, rgba(255,255,255,.4) 70%, transparent 100%;
  --overlay-hero-side: rgba(255,255,255,.9) 0%, transparent 60%;
  
  --overlay-hero-image: rgba(11,20,34,0.3) 100%;
  --overlay-hero-image-alt: rgba(11,20,34,0.15) 100%;
  --overlay-hero-fixed: rgba(11,20,34,0.4) 100%;
  --overlay-svc: rgba(11,20,34,0.4) 100%;
  
  --hero-img-filter: saturate(1.1) brightness(0.95);
  --about-img-filter: saturate(1.1) contrast(1.05);
  --about-img-filter-hover: saturate(1.2) contrast(1.1);
  --svc-img-filter: saturate(1.1) brightness(0.95);
  --svc-img-filter-hover: saturate(1.2) brightness(1);
  --feature-img-filter: saturate(1.1) brightness(0.95);
  --feature-img-filter-hover: saturate(1.2) brightness(1);
  --side-img-filter: saturate(1.1) brightness(0.95);
  --side-img-filter-hover: saturate(1.2) brightness(1);
  --fixed-img-filter: saturate(1.1) brightness(0.95);
  --fixed-img-filter-hover: saturate(1.2) brightness(1);`;

css = css.replace(rootRegex, rootVars);
css = css.replace(lightRegex, lightVars);

fs.writeFileSync('src/index.css', css);
console.log('Fixed CSS filters and overlays!');
