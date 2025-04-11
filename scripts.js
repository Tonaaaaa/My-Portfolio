// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
    offset: 100,
  });
  
  // Initialize Particles.js
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#F4511E",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#F4511E",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
  
  // Page loader
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.querySelector(".page-loader").style.opacity = "0";
      setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none";
      }, 500);
    }, 500);
  });
  
  // Navbar color change on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  
    // Back to top button
    const backToTop = document.getElementById("backToTop");
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });
  
  // Back to top functionality
  document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  
  // Typewriter effect for name
  document.addEventListener("DOMContentLoaded", () => {
    const nameTitle = document.getElementById("name-title");
    const text = nameTitle.textContent;
    nameTitle.textContent = "";
    nameTitle.classList.add("typewriter");
  
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        nameTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
  
    setTimeout(() => {
      typeWriter();
    }, 500);
  });
  
  // Progress bars animation
  const animateProgressBars = () => {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width;
      bar.classList.add("glow");
    });
  };
  
  // Trigger progress bar animation when skills section is in view
  const skillsSection = document.getElementById("skills");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(animateProgressBars, 300);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  
  observer.observe(skillsSection);
  
  // Form submission handling
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const sendBtn = document.getElementById("sendMessageBtn");
    const originalContent = sendBtn.innerHTML;
  
    // Show loading state
    sendBtn.innerHTML =
      '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
    sendBtn.disabled = true;
  
    // Simulate form submission
    setTimeout(() => {
      // Reset form
      document.getElementById("contactForm").reset();
  
      // Show success state
      sendBtn.innerHTML =
        '<span>Message Sent!</span> <i class="fas fa-check"></i>';
      sendBtn.classList.remove("btn-custom");
      sendBtn.classList.add("btn-success");
  
      // Reset button after 3 seconds
      setTimeout(() => {
        sendBtn.innerHTML = originalContent;
        sendBtn.disabled = false;
        sendBtn.classList.remove("btn-success");
        sendBtn.classList.add("btn-custom");
      }, 3000);
    }, 1500);
  });
  
  // Active navigation highlighting
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  
  window.addEventListener("scroll", () => {
    let current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });
  
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
  
  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
  
        // Close mobile menu if open
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          document.querySelector(".navbar-toggler").click();
        }
      }
    });
  });