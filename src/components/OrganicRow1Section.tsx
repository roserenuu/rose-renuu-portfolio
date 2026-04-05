interface VideoCard {
  src: string;
  alt: string;
  label1: string;
  label2: string;
}

const cards: VideoCard[] = [
  {
    src: "/videos/29e7f6bcdbf1a61dac8473b05cb05745.jpg",
    alt: "Walk and talk – SaaS organic video",
    label1: "Walk and talk",
    label2: "SaaS",
  },
  {
    src: "/videos/7e0952da2e2ae9e0d370296248fb82bf.jpg",
    alt: "7 day before/after – Skincare organic video",
    label1: "7 day before/after",
    label2: "Skincare",
  },
  {
    src: "/videos/a942c6d5ab2d36aef6d8ef9549272dcf.jpg",
    alt: "Before/after – Home organic video",
    label1: "Before/after",
    label2: "Home",
  },
  {
    src: "/videos/a417fca9ab285806ae28377c14c35ffc.jpg",
    alt: "Testimonial – Money app organic video",
    label1: "Testimonial",
    label2: "Money app",
  },
];

export function OrganicRow1Section() {
  return (
    <section style={{ backgroundColor: "#c8bbaa" }}>
      <div style={{ maxWidth: "1366px", margin: "0 auto", padding: "min(4.4vw, 60px) min(5.86vw, 80px)" }}>
      {/* 4-column grid — collapses to 2 on mobile */}
      <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "16px" }}>
        {cards.map((card) => (
          <div key={card.src}>
            {/* Thumbnail with play overlay */}
            <div
              className="relative overflow-hidden h-[280px] md:h-[500px]"
              style={{ width: "100%", backgroundColor: "#b3a090" }}
            >
              {/* Play button */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    borderLeft: "20px solid white",
                    borderTop: "12px solid transparent",
                    borderBottom: "12px solid transparent",
                    marginLeft: "5px",
                  }}
                />
              </div>
            </div>

            {/* Labels */}
            <div style={{ marginTop: "12px" }}>
              <p
                style={{
                  fontFamily: '"MelanieSans", ui-sans-serif, system-ui, sans-serif',
                  fontSize: "clamp(15px, 2vw, 24px)",
                  fontWeight: 400,
                  color: "#fffaf1",
                  margin: 0,
                }}
              >
                {card.label1}
              </p>
              <p
                style={{
                  fontFamily: '"MelanieSans", ui-sans-serif, system-ui, sans-serif',
                  fontSize: "clamp(15px, 2vw, 24px)",
                  fontWeight: 700,
                  color: "#fffaf1",
                  margin: 0,
                }}
              >
                {card.label2}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
