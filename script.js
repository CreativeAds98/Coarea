

        // Initialize Icons
        lucide.createIcons();

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        const navBtn = document.getElementById('nav-btn');
        const logoText = document.getElementById('logo-text');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Scrolled state (White background, Blue text)
                navbar.classList.add('bg-white', 'shadow-md', 'py-3', 'text-slate-700');
                navbar.classList.remove('bg-transparent', 'py-6', 'text-white');
                
                logoText.classList.add('text-blue-900');
                navBtn.classList.remove('shadow-lg'); // Flatten button slightly
            } else {
                // Initial state (Transparent background, White text)
                navbar.classList.remove('bg-white', 'shadow-md', 'py-3', 'text-slate-700');
                navbar.classList.add('bg-transparent', 'py-6', 'text-white');
                
                logoText.classList.remove('text-blue-900');
                navBtn.classList.add('shadow-lg');
            }
        });

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });
    