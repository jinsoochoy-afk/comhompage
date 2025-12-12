// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA Button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get form values
        const companyName = this.querySelector('input[placeholder="회사명"]').value;
        const email = this.querySelector('input[placeholder="이메일"]').value;
        const phone = this.querySelector('input[placeholder="연락처"]').value;
        const message = this.querySelector('textarea[placeholder="문의 사항"]').value;
        
        // Simple validation
        if (companyName && email && phone && message) {
            // Show success message
            alert('문의가 성공적으로 접수되었습니다.\n빠른 시일 내에 연락드리겠습니다.');
            
            // Reset form
            this.reset();
        } else {
            alert('모든 필드를 입력해주세요.');
        }
    });
}

// Add scroll animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.glass-card, .business-card, .feature-item, .contact-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Active navigation link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset + 200;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.style.color = '#ffd700';
            }
        }
    });
});

// Parallax effect for hero section
const heroSection = document.querySelector('.hero');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        const blobs = document.querySelectorAll('.blob');
        
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 0.02;
            blob.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
}

console.log('테크제조 홈페이지에 오신 것을 환영합니다!');
