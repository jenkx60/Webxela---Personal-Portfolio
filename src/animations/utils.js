import gsap from 'gsap';

export const animatePageIn = () => {
  const transitionElement = document.getElementById('page-transition');
  if (transitionElement) {
    const tl = gsap.timeline();
    tl.set(transitionElement, { display: 'flex' })
      .to(transitionElement, {
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        onComplete: () => {
          transitionElement.style.display = 'none';
        },
      });
  }
};

export const animateText = (element) => {
    if (!element) return;
    gsap.fromTo(
        element,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
};

export const animateStagger = (elements, delay = 0) => {
    if (!elements || elements.length === 0) return;
    gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: delay, ease: "power3.out" }
    );
};

export const revealSection = (element) => {
    if (!element) return;
    gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );
};
