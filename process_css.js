import fs from 'fs';
let css = fs.readFileSync('src/index.css', 'utf8');

// Remove image filters
css = css.replace(/filter:\s*saturate[^;]+;/g, '');
css = css.replace(/,\s*filter\s*0\.4s/g, '');

// Update Root Variables
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
}

[data-theme='light'] {
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
  --overlay-hero-image: rgba(255,255,255,0.8) 100%;
  --overlay-hero-image-alt: rgba(255,255,255,0.6) 100%;
  --overlay-hero-fixed: rgba(255,255,255,0.9) 100%;
  --overlay-svc: rgba(255,255,255,0.9) 100%;
}`;

css = css.replace(/:root\s*\{[\s\S]*?\}/, rootVars);

// Replace variable usages
css = css.replace(/var\(--night\)/g, 'var(--bg-main)');
css = css.replace(/var\(--deep\)/g, 'var(--bg-alt)');
css = css.replace(/var\(--dark-card\)/g, 'var(--bg-card)');
css = css.replace(/var\(--ice\)/g, 'var(--text-main)');

// Replace hardcoded colors
css = css.replace(/#04090f/gi, 'var(--bg-main)');
css = css.replace(/#080f1a/gi, 'var(--bg-alt)');
css = css.replace(/#030810/gi, 'var(--bg-feature)');
css = css.replace(/#0b1422/gi, 'var(--bg-card)');
css = css.replace(/#0e1c30/gi, 'var(--bg-card-hover)');
css = css.replace(/#020610/gi, 'var(--bg-footer)');
css = css.replace(/rgba\(4,9,15,\.96\)/g, 'var(--bg-nav)');

// Muted texts
css = css.replace(/rgba\(232,244,253,\.[4568]\d?\)/g, 'var(--text-muted)');
css = css.replace(/rgba\(232,244,253,\.[23]\d?\)/g, 'var(--text-dim)');
css = css.replace(/rgba\(232,244,253,\.18\)/g, 'var(--text-very-dim)');

// Replace overlays
css = css.replace(/rgba\(4,9,15,1\) 0%,\s*rgba\(4,9,15,\.6\) 40%,\s*rgba\(4,9,15,\.25\) 70%,\s*transparent 100%/g, 'var(--overlay-hero-top)');
css = css.replace(/rgba\(4,9,15,\.75\) 0%,\s*transparent 60%/g, 'var(--overlay-hero-side)');
css = css.replace(/rgba\(4,9,15,0\.6\) 100%/g, 'var(--overlay-hero-image)');
css = css.replace(/rgba\(4,9,15,0\.4\) 100%/g, 'var(--overlay-hero-image-alt)');
css = css.replace(/rgba\(4,9,15,0\.8\) 100%/g, 'var(--overlay-hero-fixed)');
css = css.replace(/rgba\(11,20,34,0\.7\) 100%/g, 'var(--overlay-svc)');

// specific fix for feature gradients
css = css.replace(/background:linear-gradient\(to right,transparent 55%,#030810 100%\);/gi, 'background:linear-gradient(to right,transparent 55%,var(--bg-feature) 100%);');
css = css.replace(/background:\s*linear-gradient\(to left, transparent 55%, var\(--bg-alt\) 100%\)/gi, 'background:linear-gradient(to left,transparent 55%,var(--bg-feature-alt) 100%)');

fs.writeFileSync('src/index.css', css);
console.log('CSS processed successfully!');
