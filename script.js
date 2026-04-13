const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const scrollMeter = document.querySelector("#scrollMeter");
const revealItems = document.querySelectorAll(".reveal");
const tiltItems = document.querySelectorAll("[data-tilt]");
const rotatingWords = document.querySelectorAll("[data-words]");
const yearTargets = document.querySelectorAll("[data-year]");
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open", !expanded);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}

const setActiveNavLink = () => {
  if (!siteNav) {
    return;
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const hash = window.location.hash;

  siteNav.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const isCurrentPage =
      (currentPage === "index.html" && href === "index.html") ||
      (currentPage === "connect.html" && href === "connect.html");
    const matchesHash = currentPage === "index.html" && hash && href === hash;

    if (isCurrentPage || matchesHash) {
      link.classList.add("is-active");
    } else if (currentPage === "index.html" && href.startsWith("#") && !hash && href === "#about") {
      link.classList.add("is-active");
    } else {
      link.classList.remove("is-active");
    }
  });
};

setActiveNavLink();
window.addEventListener("hashchange", setActiveNavLink);

const updateScrollMeter = () => {
  if (!scrollMeter) {
    return;
  }

  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  scrollMeter.style.width = `${progress}%`;
};

updateScrollMeter();
window.addEventListener("scroll", updateScrollMeter, { passive: true });
window.addEventListener("resize", updateScrollMeter);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const setupTilt = (element) => {
  const maxTilt = 8;

  const resetTilt = () => {
    element.style.setProperty("--tilt-x", "0deg");
    element.style.setProperty("--tilt-y", "0deg");
    element.style.setProperty("--lift", "0px");
  };

  element.addEventListener("pointermove", (event) => {
    const rect = element.getBoundingClientRect();
    const percentX = (event.clientX - rect.left) / rect.width - 0.5;
    const percentY = (event.clientY - rect.top) / rect.height - 0.5;

    const tiltX = percentX * maxTilt;
    const tiltY = percentY * -maxTilt;

    element.style.setProperty("--tilt-x", `${tiltX}deg`);
    element.style.setProperty("--tilt-y", `${tiltY}deg`);
    element.style.setProperty("--lift", "-6px");
  });

  element.addEventListener("pointerleave", resetTilt);
  element.addEventListener("pointercancel", resetTilt);
  element.addEventListener("pointerup", resetTilt);
};

tiltItems.forEach(setupTilt);

rotatingWords.forEach((target) => {
  const words = (target.dataset.words || "")
    .split(",")
    .map((word) => word.trim())
    .filter(Boolean);

  if (words.length < 2) {
    return;
  }

  let index = 0;
  setInterval(() => {
    index = (index + 1) % words.length;
    target.textContent = words[index];
  }, 2200);
});

yearTargets.forEach((item) => {
  item.textContent = new Date().getFullYear();
});

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const emailBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const mailtoLink = `mailto:dhruv7patel78@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
    formStatus.textContent = "Your email draft is ready. Once you replace the placeholder email with your real address, this flow will work directly.";
    contactForm.reset();
  });
}
