// ═══════════════════════════════════════════════════════
// ANIMATION VARIANTS — World-Class Portfolio Animations
// ═══════════════════════════════════════════════════════

// Cubic bezier easing presets
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];
const EASE_OUT_QUINT = [0.22, 1, 0.36, 1];
const EASE_IN_OUT_CUBIC = [0.65, 0, 0.35, 1];

// ── Basic Reveals ──────────────────────────────────────

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO }
  }
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO }
  }
};

export const fadeUpSlow = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: EASE_OUT_QUINT }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO }
  }
};

// ── Line & Shape Reveals ───────────────────────────────

export const lineReveal = {
  hidden: { width: "0%" },
  visible: {
    width: "100%",
    transition: { duration: 1.2, ease: EASE_IN_OUT_CUBIC }
  }
};

export const lineRevealVertical = {
  hidden: { height: "0%" },
  visible: {
    height: "100%",
    transition: { duration: 1.0, ease: EASE_IN_OUT_CUBIC }
  }
};

export const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: EASE_IN_OUT_CUBIC }
  }
};

// ── Stagger Containers ─────────────────────────────────

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05
    }
  }
};

export const staggerContainerSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// ── Character & Word Reveals ───────────────────────────

export const letterReveal = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -90
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { 
      duration: 0.6, 
      ease: EASE_OUT_EXPO 
    }
  }
};

export const wordReveal = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.7, 
      ease: EASE_OUT_QUINT 
    }
  }
};

// ── Parallax-Ready Variants ────────────────────────────

export const parallaxUp = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: EASE_OUT_QUINT }
  }
};

// ── Scale & Blur Reveals ───────────────────────────────

export const blurIn = {
  hidden: { 
    opacity: 0, 
    filter: "blur(20px)",
    scale: 0.9
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1.0, ease: EASE_OUT_QUINT }
  }
};
