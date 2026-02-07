// Git Master Website - Enhanced Functionality
// This script provides additional interactive features across all pages

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 GitMaster enhanced functionality loaded');
    
    // Enhanced navigation with keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case '1': window.location.href = 'index.html'; break;
                case '2': window.location.href = 'about-git.html'; break;
                case '3': window.location.href = 'commands.html'; break;
                case '4': window.location.href = 'workflows.html'; break;
                case '5': window.location.href = 'best-practices.html'; break;
            }
        }
    });
    
    // Progressive image loading with retry mechanism
    function enhancedImageLoading() {
        document.querySelectorAll('img[data-src]').forEach(img => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                });
            });
            observer.observe(img);
        });
    }
    
    // Dark mode toggle (bonus feature)
    function addDarkModeToggle() {
        const toggle = document.createElement('button');
        toggle.innerHTML = '🌙';
        toggle.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--accent-blue);
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 9999;
            transition: all 0.3s ease;
        `;
        
        toggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            this.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        });
        
        document.body.appendChild(toggle);
        
        // Add dark mode CSS
        const darkCSS = document.createElement('style');
        darkCSS.textContent = `
            .dark-mode {
                --background: #1a1a1a;
                --card-bg: #2a2a2a;
                --text-dark: #ffffff;
                --primary-blue: #4da6ff;
                --secondary-blue: #0066cc;
            }
            .dark-mode .hero {
                background: linear-gradient(135deg, #003366, #004499);
            }
        `;
        document.head.appendChild(darkCSS);
    }
    
    // Performance analytics
    function trackPerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perf = performance.getEntriesByType('navigation')[0];
                    console.log('📊 Page Performance:');
                    console.log(`DOM Content Loaded: ${Math.round(perf.domContentLoadedEventEnd - perf.domContentLoadedEventStart)}ms`);
                    console.log(`Load Complete: ${Math.round(perf.loadEventEnd - perf.loadEventStart)}ms`);
                    console.log(`Total Load Time: ${Math.round(perf.loadEventEnd - perf.fetchStart)}ms`);
                }, 0);
            });
        }
    }
    
    // Initialize enhancements
    enhancedImageLoading();
    addDarkModeToggle();
    trackPerformance();
    
    console.log('✨ All enhancements loaded successfully!');
});