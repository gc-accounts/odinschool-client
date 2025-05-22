export default `

/* ----------  Layout & Position  ---------- */
.relative         { position: relative; }
.absolute         { position: absolute; }
.top-0            { top: 0; }
.right-0          { right: 0; }
.flex             { display: flex; }
.flex-col         { flex-direction: column; }
.flex-wrap        { flex-wrap: wrap; }
.items-center     { align-items: center; }
.items-start      { align-items: flex-start; }
.justify-center   { justify-content: center; }
.justify-between  { justify-content: space-between; }

/* ----------  Box model (spacing, sizing)  ---------- */
.p-8              { padding: 2rem; }                 /* 32px  */
.px-3             { padding-left: 0.75rem; padding-right: 0.75rem; }
.py-1             { padding-top: 0.25rem; padding-bottom: 0.25rem; }

.pb-4             { padding-bottom: 1rem; }          /* 16px  */
.pb-1             { padding-bottom: 0.25rem; }       /* 4px   */

.mb-6             { margin-bottom: 1.5rem; }         /* 24px  */
.mb-5             { margin-bottom: 1.25rem; }        /* 20px  */
.mb-4             { margin-bottom: 1rem; }           /* 16px  */
.mb-3             { margin-bottom: 0.75rem; }        /* 12px  */
.mb-2             { margin-bottom: 0.5rem; }         /* 8px   */

.mt-4             { margin-top: 1rem; }
.mt-3             { margin-top: 0.75rem; }
.mt-1             { margin-top: 0.25rem; }

.mx-auto          { margin-left: auto; margin-right: auto; }
.mr-1             { margin-right: 0.25rem; }         /* 4px   */

.h-full           { height: 100%; }
.h-3.5, .w-3.5    { height: 0.875rem; width: 0.875rem; } /* 14px */

.min-h-\[900px\]  { min-height: 900px; }
.max-w-\[850px\]  { max-width: 850px; }

/* ----------  Gap utilities  ---------- */
.gap-2            { gap: 0.5rem; }
.gap-x-4          { column-gap: 1rem; }
.gap-y-1          { row-gap: 0.25rem; }

/* ----------  Typography  ---------- */
.font-sans        { font-family: ui-sans-serif, system-ui, -apple-system,
                    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
                    Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
                    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }

.font-bold        { font-weight: 700; }
.font-semibold    { font-weight: 600; }
.font-medium      { font-weight: 500; }

.text-3xl         { font-size: 1.875rem; line-height: 2.25rem; }
.text-xl          { font-size: 1.25rem; line-height: 1.75rem; }
.text-lg          { font-size: 1.125rem; line-height: 1.75rem; }
.text-sm          { font-size: 0.875rem; line-height: 1.25rem; }
.text-xs          { font-size: 0.75rem; line-height: 1rem; }

.text-center      { text-align: center; }
.text-right       { text-align: right; }
.italic           { font-style: italic; }
.leading-relaxed  { line-height: 1.625; }

/* ----------  Colors  ---------- */
/*  Palette mirrors Tailwind default grays & blues  */
.bg-white         { background-color: #ffffff; }
.bg-gray-100      { background-color: #f3f4f6; }

.text-gray-800    { color: #1f2937; }
.text-gray-600    { color: #4b5563; }
.text-gray-400    { color: #9ca3af; }

.text-primary-700 { color: #1d4ed8; } /* blue-700 */
.text-primary-600 { color: #2563eb; } /* blue-600 */

.border-b         { border-bottom: 1px solid #e5e7eb; }

/* ----------  Effects  ---------- */
.shadow-inner     { box-shadow: inset 0 2px 4px rgba(0,0,0,0.06); }
.hover\:underline:hover { text-decoration: underline; }

/* ----------  Shapes  ---------- */
.rounded-full     { border-radius: 9999px; }


`