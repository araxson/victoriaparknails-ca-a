# Comprehensive Error Report
Generated on: 2025-06-20 10:31:00

## Linting Report
[ ] ./src/lib/gallery-loader.ts
[ ] 19:12  Error: 'error' is defined but never used.  @typescript-eslint/no-unused-vars
[ ] 37:10  Error: 'generateAltText' is defined but never used.  @typescript-eslint/no-unused-vars
[ ] info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules

## TypeScript Report
[ ] npm error Missing script: "type-check"
[ ] npm error
[ ] npm error To see a list of scripts, run:
[ ] npm error   npm run
[ ] npm error A complete log of this run can be found in: C:\Users\ivatl\AppData\Local\npm-cache\_logs\2025-06-20T16_31_04_315Z-debug-0.log

## Build Report
[ ] 🖼️  Generating gallery manifest...
[ ] ✅ Generated gallery manifest:
[ ]    📁 Output: C:\Users\ivatl\OneDrive\Desktop\zss\003_Victoria_Park_Nails_and_Spa\02_Website\victoriaparknails-ca-a\src\data\gallery-manifest.json
[ ]    📊 Total images: 26
[ ]    🕒 Generated: 2025-06-20T16:31:05.110Z
[ ] 📈 Format distribution:
[ ]    .jpeg: 1 files (3.8%)
[ ]    .webp: 22 files (84.6%)
[ ]    .jpg: 3 files (11.5%)
[ ] ✨ Gallery manifest generated successfully!
[ ]    ▲ Next.js 15.3.3
[ ]    Creating an optimized production build ...
[ ]  ✓ Compiled successfully in 7.0s
[ ]    Skipping linting
[ ]    Checking validity of types ...
[ ]    Collecting page data ...
[ ]    Generating static pages (0/13) ...
[ ]    Generating static pages (3/13) 
[ ]    Generating static pages (6/13) 
[ ]    Generating static pages (9/13) 
[ ]  ✓ Generating static pages (13/13)
[ ]    Finalizing page optimization ...
[ ]    Collecting build traces ...
[ ]    Exporting (0/3) ...
[ ]  ✓ Exporting (3/3)
[ ] Route (app)                                 Size  First Load JS
[ ] ┌ ○ /                                     3.1 kB         311 kB
[ ] ├ ○ /_not-found                            145 B         102 kB
[ ] ├ ○ /apple-icon.png                          0 B            0 B
[ ] ├ ○ /contact                             2.29 kB         304 kB
[ ] ├ ○ /gallery                             3.29 kB         305 kB
[ ] ├ ○ /icon.png                                0 B            0 B
[ ] ├ ○ /offers                              3.46 kB         305 kB
[ ] ├ ○ /robots.txt                            145 B         102 kB
[ ] ├ ○ /services                            2.37 kB         310 kB
[ ] └ ○ /sitemap.xml                           145 B         102 kB
[ ] + First Load JS shared by all             102 kB
[ ]   ├ chunks/4bd1b696-be9dac7ec4f79c36.js  53.2 kB
[ ]   ├ chunks/684-e8bd5385120813de.js       46.4 kB
[ ]   └ other shared chunks (total)          2.05 kB
[ ] ○  (Static)  prerendered as static content

## Formatting Report
[ ] npm error Missing script: "format:check"
[ ] npm error
[ ] npm error To see a list of scripts, run:
[ ] npm error   npm run
[ ] npm error A complete log of this run can be found in: C:\Users\ivatl\AppData\Local\npm-cache\_logs\2025-06-20T16_31_33_807Z-debug-0.log

## Security Audit Report
[ ] # npm audit report
[ ] hoek  *
[ ] Severity: high
[ ] hoek subject to prototype pollution via the clone function. - https://github.com/advisories/GHSA-c429-5p7v-vgjp
[ ] fix available via `npm audit fix`
[ ] node_modules/hoek
[ ]   joi  0.0.2 - 14.3.1
[ ]   Depends on vulnerable versions of hoek
[ ]   Depends on vulnerable versions of topo
[ ]   node_modules/joi
[ ]   topo  *
[ ]   Depends on vulnerable versions of hoek
[ ]   node_modules/topo
[ ] request  *
[ ] Severity: moderate
[ ] Server-Side Request Forgery in Request - https://github.com/advisories/GHSA-p8p7-x288-28g6
[ ] Depends on vulnerable versions of tough-cookie
[ ] No fix available
[ ] node_modules/request
[ ]   squareup  *
[ ]   Depends on vulnerable versions of joi
[ ]   Depends on vulnerable versions of request
[ ]   node_modules/squareup
[ ] tough-cookie  <4.1.3
[ ] Severity: moderate
[ ] tough-cookie Prototype Pollution vulnerability - https://github.com/advisories/GHSA-72xf-g2v4-qvf3
[ ] No fix available
[ ] node_modules/tough-cookie
[ ] 6 vulnerabilities (2 moderate, 4 high)
[ ] To address issues that do not require attention, run:
[ ]   npm audit fix
[ ] Some issues need review, and may require choosing
[ ] a different dependency.

