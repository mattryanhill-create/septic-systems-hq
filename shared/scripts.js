/**
 * Septic Systems HQ - Shared JavaScript
 */

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // Initialize scroll animations
  initScrollAnimations();
  
  // Set active navigation
  setActiveNavigation();
  
  // Initialize mobile menu
  initMobileMenu();
});

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('open');
  }
}

/**
 * Initialize mobile menu
 */
function initMobileMenu() {
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenu && menuBtn) {
      if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.remove('open');
      }
    }
  });
  
  // Close mobile menu on window resize (if going to desktop)
  window.addEventListener('resize', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu && window.innerWidth >= 1024) {
      mobileMenu.classList.remove('open');
    }
  });
}

/**
 * Set active navigation based on current page
 */
function setActiveNavigation() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('[data-nav]');
  
  navLinks.forEach(link => {
    const navPage = link.getAttribute('data-nav');
    const linkHref = link.getAttribute('href');
    
    if (linkHref === currentPage || (currentPage === '' && navPage === 'home')) {
      link.classList.add('active');
      link.classList.add('text-[#0d9488]');
    }
  });
}

/**
 * Initialize scroll animations using Intersection Observer
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.scroll-animate');
  
  if (animatedElements.length === 0) return;
  
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animationType = element.dataset.animation || 'fadeInUp';
        const delay = element.dataset.delay || '0';
        
        // Apply animation with delay
        setTimeout(() => {
          element.classList.add('animated');
          element.style.animation = `${animationType} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
        }, parseInt(delay));
        
        // Unobserve after animation
        observer.unobserve(element);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(el => observer.observe(el));
}

/**
 * Animate elements with stagger effect
 * @param {string} selector - CSS selector for elements
 * @param {number} staggerDelay - Delay between each element in ms
 */
function animateWithStagger(selector, staggerDelay = 100) {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el, index) => {
    el.style.opacity = '0';
    el.classList.add('scroll-animate');
    el.dataset.animation = 'fadeInUp';
    el.dataset.delay = (index * staggerDelay).toString();
  });
  
  initScrollAnimations();
}

/**
 * Count up animation for numbers
 * @param {HTMLElement} element - Element to animate
 * @param {number} target - Target number
 * @param {number} duration - Animation duration in ms
 * @param {string} suffix - Suffix to add after number (e.g., '+', '%')
 */
function countUp(element, target, duration = 2000, suffix = '') {
  const start = 0;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease out quad
    const easeProgress = 1 - (1 - progress) * (1 - progress);
    const current = Math.floor(start + (target - start) * easeProgress);
    
    element.textContent = current + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

/**
 * Initialize count up animations for stat elements
 */
function initCountUpAnimations() {
  const statElements = document.querySelectorAll('[data-countup]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const target = parseInt(element.dataset.countup);
        const suffix = element.dataset.suffix || '';
        
        countUp(element, target, 2000, suffix);
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.5 });
  
  statElements.forEach(el => observer.observe(el));
}

/**
 * Smooth scroll to element
 * @param {string} targetId - ID of target element
 */
function scrollToElement(targetId) {
  const element = document.getElementById(targetId);
  if (element) {
    const headerHeight = 72;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 */
function debounce(func, wait = 100) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Accordion functionality
 * @param {HTMLElement} trigger - Accordion trigger button
 */
function toggleAccordion(trigger) {
  const content = trigger.nextElementSibling;
  const icon = trigger.querySelector('[data-accordion-icon]');
  const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
  
  // Close all other accordions in the same group
  const group = trigger.closest('[data-accordion-group]');
  if (group) {
    const openTriggers = group.querySelectorAll('[data-accordion-trigger]');
    openTriggers.forEach(t => {
      if (t !== trigger) {
        const c = t.nextElementSibling;
        const i = t.querySelector('[data-accordion-icon]');
        c.style.maxHeight = '0px';
        if (i) i.style.transform = 'rotate(0deg)';
        t.setAttribute('aria-expanded', 'false');
      }
    });
  }
  
  // Toggle current accordion
  if (isOpen) {
    content.style.maxHeight = '0px';
    if (icon) icon.style.transform = 'rotate(0deg)';
    trigger.setAttribute('aria-expanded', 'false');
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
    if (icon) icon.style.transform = 'rotate(180deg)';
    trigger.setAttribute('aria-expanded', 'true');
  }
}

// Export functions for use in other scripts
window.SepticHQ = {
  toggleMobileMenu,
  initScrollAnimations,
  animateWithStagger,
  countUp,
  initCountUpAnimations,
  scrollToElement,
  debounce,
  toggleAccordion
};
