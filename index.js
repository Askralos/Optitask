const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ANIMATION
const tl = gsap.timeline({
    defaults: { duration: 0.5, ease: "power2.out" },
});

// let split = new SplitText(".hero_title", { type: "chars" });

tl.from("nav #p", {
    delay: 0.3,
    opacity: 0,
    y: -30,
})
    .from("nav ul ", {
        opacity: 0,
        stagger: 0.3,
    })
    .from("nav button", {
        opacity: 0,
        y: -30,
    })
    .from('.hero_title div', {
        y: 250,
        duration: 1,
    })
    .from('.hero_desc p', {
        y: 50,
        duration: 0.8,
    })
    .from('.hero_cta p', {
        y: 50,
        duration: 0.8,
    })
    .from(".hero_img", {
        height: 0,
        duration: 1.2,
        stagger: 0.8,
    });

gsap.from(".ps_img", {
    opacity: 0,
    y: -60,
    duration: 1,
    scrollTrigger: {
        trigger: ".ps_img",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        toggleActions: "play none none reverse",
    },
});

gsap.from(".ps_header", {
    opacity: 0,
    x: 60,
    duration: 1,
    scrollTrigger: {
        trigger: ".ps_header",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        toggleActions: "play none none reverse",
    },
});

gsap.from(".title_header", {
    opacity: 0,
    x: 60,
    duration: 1,
    scrollTrigger: {
        trigger: ".fc_header",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        toggleActions: "play none none reverse",
    },
});

gsap.from(".fc_title", {
    opacity: 0,
    x: -60,
    duration: 1,
    scrollTrigger: {
        trigger: ".fonction",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        toggleActions: "play none none reverse",
    },
});

gsap.from(".fc_cta", {
    opacity: 0,
    x: 60,
    duration: 1,
    scrollTrigger: {
        trigger: ".fc_header",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        toggleActions: "play none none reverse",
    },
});

gsap.from(".fc_card", {
    opacity: 0,
    y: -60,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".fc_grid",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        toggleActions: "play none none reverse",
        // pin: true,
    },
});
gsap.utils.toArray(".pk_card").forEach((card, index) => {
    gsap.from(card, {
        opacity: 0,
        y: 60,
        stagger: 0.5,
        scrollTrigger: {
            trigger: card,
            scroller: "body", // Si tu utilises un scroll container personnalisé, mets ici l'élément.
            // markers: true,
            start: "top 80%", // La carte commence à être animée quand elle atteint 80% de la hauteur de la fenêtre.
            end: "bottom 90%", // Quand le bas de la carte atteint le haut de la fenêtre.
            toggleActions: "play none none reverse",
            scrub: 2,
        },
    });
});

gsap.from(".cta", {
    opacity: 0,
    y: 30,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".cta",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        toggleActions: "play none none reverse",
    },
});

gsap.from(".contact", {
    height: 0,
    opacity: 0,
    // duration: 2,
    scrollTrigger: {
        trigger: ".contact",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        toggleActions: "play none none reverse",
    },
});

