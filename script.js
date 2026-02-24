

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
    

        
        // Scroll to Top Button
        const scrollBtn = document.getElementById('scrollToTop');

            window.addEventListener('scroll', () => {
                // Show button after scrolling down 400px
                if (window.scrollY > 400) {
                    scrollBtn.classList.remove('translate-y-24', 'opacity-0');
                    scrollBtn.classList.add('translate-y-0', 'opacity-100');
                } else {
                    scrollBtn.classList.add('translate-y-24', 'opacity-0');
                    scrollBtn.classList.remove('translate-y-0', 'opacity-100');
                }
            });

            scrollBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });