tailwind.config = {
    // Root portfolio build: preflight is disabled so Tailwind's reset cannot
    // disturb this page's existing custom stylesheet. Utilities only.
    corePlugins: { preflight: false },
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
            }
        }
    }
}
