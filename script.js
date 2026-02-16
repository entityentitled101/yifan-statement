// ========================================
// YIFAN ZONG - PERSONAL STATEMENT ANIMATIONS
// Brutalist Style | Line Draw | Text Reveal
// ========================================

gsap.registerPlugin();

// Animation Timeline
const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

// Border Lines Draw
tl.to('.border-line.top', {
    scaleX: 1,
    duration: 1.2,
    ease: 'power2.inOut'
})
.to('.border-line.bottom', {
    scaleX: 1,
    duration: 1.2,
    ease: 'power2.inOut'
}, '-=0.8')

// Header Fade In
.to('.header', {
    opacity: 1,
    y: 0,
    duration: 0.8
}, '-=0.4')

// Horizontal Divider
.to('.divider', {
    scaleX: 1,
    duration: 1,
    ease: 'power2.inOut'
}, '-=0.4')

// Vertical Divider
.to('.divider-v', {
    scaleY: 1,
    duration: 0.8,
    ease: 'power2.inOut'
}, '-=0.6')

// Sections Stagger In
.to('.section', {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.15
}, '-=0.4')

// Footer
.to('.footer', {
    opacity: 1,
    duration: 0.6
}, '-=0.2');

// Hover Effects for Work Items
document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            x: 5,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            x: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Interest List Hover
document.querySelectorAll('.interest-list li').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('.interest-num'), {
            color: '#FFFFFF',
            duration: 0.3
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('.interest-num'), {
            color: '#888888',
            duration: 0.3
        });
    });
});

// Contact Link Hover
document.querySelectorAll('.contact-small').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            letterSpacing: '0.15em',
            duration: 0.3
        });
    });
    
    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            letterSpacing: '0.1em',
            duration: 0.3
        });
    });
});

console.log('Personal Statement - Animations Loaded');
