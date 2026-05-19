import fs from 'fs';
let css = fs.readFileSync('src/index.css', 'utf8');

// 1. Add CSS variables for svc-num
const rootRegex = /--overlay-svc:[^;]+;/;
css = css.replace(rootRegex, (match) => {
  return match + '\n  --svc-num-color: rgba(33,150,243,.15);\n  --svc-num-color-hover: rgba(33,150,243,.25);';
});

const lightRegex = /--overlay-svc:[^;]+;\s*--overlay-feature:[^;]+;\s*--overlay-feature-rev:[^;]+;/;
// We need to replace the overlays in the light theme and add svc-num vars.
// Let's just find the [data-theme='light'] block and replace the overlays
css = css.replace(/\[data-theme='light'\]\s*\{([\s\S]*?)\}/, (match, p1) => {
  let newBlock = p1;
  // Replace the hero overlays
  newBlock = newBlock.replace(/--overlay-hero-top:[^;]+;/, '--overlay-hero-top: rgba(33,150,243,0.3) 0%, rgba(33,150,243,0.15) 40%, rgba(33,150,243,0.05) 70%, transparent 100%;');
  newBlock = newBlock.replace(/--overlay-hero-side:[^;]+;/, '--overlay-hero-side: rgba(33,150,243,0.2) 0%, transparent 60%;');
  
  newBlock = newBlock.replace(/--overlay-hero-image:[^;]+;/, '--overlay-hero-image: rgba(33,150,243,0.15) 100%;');
  newBlock = newBlock.replace(/--overlay-hero-image-alt:[^;]+;/, '--overlay-hero-image-alt: rgba(33,150,243,0.1) 100%;');
  newBlock = newBlock.replace(/--overlay-hero-fixed:[^;]+;/, '--overlay-hero-fixed: rgba(33,150,243,0.2) 100%;');
  newBlock = newBlock.replace(/--overlay-svc:[^;]+;/, '--overlay-svc: rgba(33,150,243,0.2) 100%;');
  
  newBlock = newBlock.replace(/--overlay-feature:[^;]+;/, '--overlay-feature: linear-gradient(to right, transparent 55%, rgba(33,150,243,0.15) 100%);');
  newBlock = newBlock.replace(/--overlay-feature-rev:[^;]+;/, '--overlay-feature-rev: linear-gradient(to left, transparent 55%, rgba(33,150,243,0.15) 100%);');
  
  // Add svc num
  newBlock += `  --svc-num-color: rgba(4,9,15,.08);\n  --svc-num-color-hover: rgba(4,9,15,.15);\n`;
  return `[data-theme='light'] {${newBlock}}`;
});

// Now replace the svc-num colors in the actual classes
css = css.replace(/color:rgba\(33,150,243,\.15\);/, 'color:var(--svc-num-color);');
css = css.replace(/color:rgba\(33,150,243,\.25\);/, 'color:var(--svc-num-color-hover);');

fs.writeFileSync('src/index.css', css);
console.log('Light mode updated successfully!');
