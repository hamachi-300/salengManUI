(function () {
    // 1. Logic to handle theme state
    function toggleTheme() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        // No need to manually update icons, CSS handles it based on 'dark' class
    }

    // 2. Initialize state
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // 3. Create and inject button when DOM is ready
    window.addEventListener('DOMContentLoaded', () => {
        // Avoid duplicate buttons
        if (document.getElementById('global-theme-toggle')) return;

        const btn = document.createElement('button');
        btn.id = 'global-theme-toggle';

        // classes matching original index.html but with left positioning
        btn.className = 'fixed top-4 left-4 p-3 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg z-50 hover:scale-110 transition-transform cursor-pointer flex items-center justify-center';

        // CSS-based Icon Swapping (matches index.html)
        // dark_mode icon (Moon) shows when NOT dark
        // light_mode icon (Sun) shows when dark
        btn.innerHTML = `
            <span class="material-icons-round text-gray-800 dark:hidden">dark_mode</span>
            <span class="material-icons-round text-yellow-400 hidden dark:block">light_mode</span>
        `;

        btn.onclick = toggleTheme;
        document.body.appendChild(btn);
    });
})();
