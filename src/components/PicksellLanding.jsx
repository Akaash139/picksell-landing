import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Tab Content ─────────────────────────────────────────── */
const tabContent = {
  catalogue: {
    heading: "Showcase your products beautifully",
    subtext:
      "Create stunning product catalogues and share them instantly with your customers.",
    features: [
      { icon: "🗂️", label: "Custom product pages" },
      { icon: "🖼️", label: "Image-rich catalog display" },
      { icon: "🔗", label: "Share via link instantly" },
    ],
    showButtons: false,
  },
  business: {
    heading: "The hassle-free platform to sell globally for less",
    subtext: "Connect your bank account and start selling to the world today!",
    features: [],
    showButtons: true,
  },
  shopping: {
    heading: "A seamless shopping experience",
    subtext:
      "Let your customers browse, add to cart, and checkout effortlessly.",
    features: [
      { icon: "⚡", label: "Fast checkout" },
      { icon: "📦", label: "Real-time order tracking" },
      { icon: "🔒", label: "Secure payments" },
    ],
    showButtons: false,
  },
};

/* ─── Card Positions per Tab ──────────────────────────────── */
const cardPositions = {
  catalogue: { x: -300 },
  business:  { x: 0    },
  shopping:  { x: 300  },
};

/* ─── Three Stacked Cards ─────────────────────────────────── */
const cards = [
  { color: "#F4C842", zIndex: 30, initRotate: -8,  offsetX: 0,   offsetY: 0,   face: true  },
  { color: "#E8523A", zIndex: 20, initRotate: -20, offsetX: -44, offsetY: 30,  face: false },
  { color: "#3ECFB2", zIndex: 10, initRotate:  7,  offsetX: 36,  offsetY: -26, face: false },
];

/* ─── Bottom Feature Boxes ────────────────────────────────── */
const bottomFeatures = [
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1E1B4B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="13" rx="2" />
        <polyline points="8,21 12,17 16,21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <rect x="13" y="6" width="6" height="7" rx="1" />
        <line x1="4" y1="7" x2="10" y2="7" />
        <line x1="4" y1="10" x2="8" y2="10" />
      </svg>
    ),
    title: "Instant Web & App",
    subtitle: "Start selling today",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1E1B4B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="9" y1="9" x2="15" y2="15" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <text x="12" y="15.5" textAnchor="middle" fontSize="9" fontWeight="800" fill="#1E1B4B" stroke="none" fontFamily="sans-serif">%</text>
      </svg>
    ),
    title: "Integrated payments",
    subtitle: "<1% transaction fees",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1E1B4B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Integrated global delivery and logistics",
    subtitle: "Live tracking",
  },
];

/* ─── Main Component ──────────────────────────────────────── */
export default function PicksellLanding() {
  const [page, setPage] = useState("business");
  const content = tabContent[page];
  const cardPos = cardPositions[page];

  return (
    <div
      style={{
        background: "#1E1B4B",
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; }
        .ps-navbtn { background: none; border: none; cursor: pointer; font-family: inherit; }

        @media (max-width: 900px) {
          .ps-hero { min-height: 360px !important; }
          .ps-cards-container { display: none !important; }
          .ps-hero-left { width: 100% !important; max-width: 100% !important; }
        }

        @media (max-width: 680px) {
          .ps-nav { padding: 14px 20px !important; }
          .ps-nav-tabs { display: none !important; }
          .ps-hero { padding: 20px !important; flex-direction: column; }
          .ps-hero-left { width: 100% !important; }
          .ps-cta-row { flex-direction: column !important; }
          .ps-cta-row button { width: 100% !important; }
          .ps-bottom { padding: 24px 20px 36px !important; gap: 28px !important; }
          .ps-bottom-item { max-width: 100% !important; width: 100%; }
        }
      `}</style>

      {/* ── Navbar ── */}
      <nav
        className="ps-nav"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 40px",
          position: "relative",
          zIndex: 50,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <div
            style={{
              width: 32, height: 32, borderRadius: 8,
              background: "#F4C842",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" rx="1" fill="#1E1B4B" />
              <rect x="9" y="2" width="5" height="5" rx="1" fill="#1E1B4B" />
              <rect x="2" y="9" width="5" height="5" rx="1" fill="#1E1B4B" />
              <rect x="9" y="9" width="5" height="5" rx="1" fill="#1E1B4B" />
            </svg>
          </div>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.3px" }}>
            Picksell
          </span>
        </div>

        {/* Tabs */}
        <div
          className="ps-nav-tabs"
          style={{ display: "flex", alignItems: "center", gap: 36 }}
        >
          {["catalogue", "business", "shopping"].map((tab) => (
            <button
              key={tab}
              className="ps-navbtn"
              onClick={() => setPage(tab)}
              style={{
                position: "relative",
                color: page === tab ? "#fff" : "rgba(255,255,255,0.5)",
                fontWeight: page === tab ? 700 : 500,
                fontSize: "0.92rem",
                padding: "4px 0",
                transition: "color 0.2s",
                textTransform: "capitalize",
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {page === tab && (
                <motion.div
                  layoutId="tabUnderline"
                  style={{
                    position: "absolute", bottom: -2, left: 0, right: 0,
                    height: 2.5, borderRadius: 99, background: "#3ECFB2",
                  }}
                  transition={{ type: "spring", stiffness: 420, damping: 36 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Auth Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <button
            className="ps-navbtn"
            style={{
              padding: "8px 20px", borderRadius: 999,
              border: "1.5px solid rgba(255,255,255,0.35)",
              color: "#fff", fontWeight: 600, fontSize: "0.88rem",
            }}
            onMouseOver={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
            onMouseOut={e => { e.currentTarget.style.background = "transparent"; }}
          >
            Sign in
          </button>
          <button
            className="ps-navbtn"
            style={{
              padding: "8px 20px", borderRadius: 999,
              background: "#fff", color: "#1E1B4B",
              fontWeight: 700, fontSize: "0.88rem",
            }}
          >
            Get Started
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 4, color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", cursor: "pointer" }}>
            English
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <div
        className="ps-hero"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          padding: "0 40px",
          position: "relative",
          minHeight: 460,
        }}
      >
        {/* SVG Wave */}
        <svg
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            pointerEvents: "none", zIndex: 1, opacity: 0.72,
          }}
          viewBox="0 0 1400 520"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 380 Q 180 300 380 360 Q 580 420 760 320 Q 960 220 1150 290 Q 1300 340 1400 270"
            fill="none"
            stroke="#3ECFB2"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>

        {/* Left Content */}
        <div
          className="ps-hero-left"
          style={{ position: "relative", zIndex: 20, width: "48%", maxWidth: 500 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Heading */}
              <h1
                style={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "clamp(1.75rem, 3.2vw, 2.85rem)",
                  lineHeight: 1.15,
                  marginBottom: 18,
                  letterSpacing: "-0.5px",
                }}
              >
                {content.heading}
              </h1>

              {/* Subtext */}
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "1rem",
                  lineHeight: 1.65,
                  fontWeight: 500,
                  marginBottom: 28,
                }}
              >
                {content.subtext}
              </p>

              {/* Feature list (catalogue / shopping) */}
              {!content.showButtons && content.features.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                  {content.features.map((f, i) => (
                    <motion.div
                      key={f.label}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.08, duration: 0.32 }}
                      style={{ display: "flex", alignItems: "center", gap: 12 }}
                    >
                      <div
                        style={{
                          width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                          background: "rgba(255,255,255,0.1)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "1.1rem",
                        }}
                      >
                        {f.icon}
                      </div>
                      <span style={{ color: "#fff", fontWeight: 600, fontSize: "0.93rem" }}>
                        {f.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* CTA Buttons */}
              <div
                className="ps-cta-row"
                style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}
              >
                <button
                  className="ps-navbtn"
                  style={{
                    padding: "14px 34px", borderRadius: 14,
                    background: "#F4C842", color: "#1E1B4B",
                    fontWeight: 800, fontSize: "0.95rem",
                    boxShadow: "0 8px 28px rgba(244,200,66,0.4)",
                    transition: "transform 0.15s",
                  }}
                  onMouseOver={e => { e.currentTarget.style.transform = "scale(1.04)"; }}
                  onMouseOut={e => { e.currentTarget.style.transform = "scale(1)"; }}
                >
                  Get Started
                </button>
                <button
                  className="ps-navbtn"
                  style={{
                    padding: "14px 34px", borderRadius: 14,
                    border: "1.5px solid rgba(255,255,255,0.38)",
                    color: "#fff", fontWeight: 700, fontSize: "0.95rem",
                    background: "transparent",
                    transition: "background 0.18s",
                  }}
                  onMouseOver={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                  onMouseOut={e => { e.currentTarget.style.background = "transparent"; }}
                >
                  Book a demo
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Animated Cards ── */}
        <div
          className="ps-cards-container"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          <motion.div
            animate={{ x: cardPos.x }}
            transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: "relative", width: 220, height: 220 }}
          >
            {cards.map((card, i) => (
              <motion.div
                key={card.color}
                animate={{
                  rotate:
                    card.initRotate +
                    (page === "catalogue" ? -7 : page === "shopping" ? 8 : 0),
                }}
                transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  position: "absolute",
                  width: 210,
                  height: 210,
                  borderRadius: 36,
                  background: card.color,
                  zIndex: card.zIndex,
                  top: card.offsetY,
                  left: card.offsetX,
                  boxShadow: `0 16px 30px ${card.color}28`,
                }}
              >
                {card.face && (
                  <div
                    style={{
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: 28,
  paddingTop: 56,
}}

                  >
                    <div style={{ width: 14, height: 26, borderRadius: 99, background: "#1a1a2e", opacity: 0.82 }} />
                    <div style={{ width: 14, height: 26, borderRadius: 99, background: "#1a1a2e", opacity: 0.82 }} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Bottom Feature Boxes ── */}
      <div
        className="ps-bottom"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 52,
          padding: "28px 40px 52px",
          position: "relative",
          zIndex: 20,
          flexWrap: "wrap",
        }}
      >
        {bottomFeatures.map((feat, i) => (
          <motion.div
            key={feat.title}
            className="ps-bottom-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.38 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              maxWidth: 280,
            }}
          >
            {/* White icon box — matches the image exactly */}
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 18,
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 4px 20px rgba(0,0,0,0.22)",
              }}
            >
              {feat.icon}
            </div>

            {/* Text */}
            <div>
              <div
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  lineHeight: 1.35,
                  marginBottom: 4,
                }}
              >
                {feat.title}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 500,
                  fontSize: "0.82rem",
                }}
              >
                {feat.subtitle}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}