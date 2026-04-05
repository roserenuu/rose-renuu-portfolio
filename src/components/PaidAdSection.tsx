interface VideoCard {
  src: string;
  alt: string;
  label1: string;
  label2: string;
}

const cards: VideoCard[] = [
  {
    src: "/videos/1c2f54d64a1e1009823a8f0da0cd7883.jpg",
    alt: "Strong hook – Digital media paid ad",
    label1: "Strong hook",
    label2: "Digital media",
  },
  {
    src: "/videos/2e5e6d7243c87c1ff667604b07773105.jpg",
    alt: "Talking head – SaaS paid ad",
    label1: "Talking head",
    label2: "SaaS",
  },
  {
    src: "/videos/d90b77abab2c70be6788b8fc359900e6.jpg",
    alt: "Product demo – SaaS paid ad",
    label1: "Product demo",
    label2: "SaaS",
  },
  {
    src: "/videos/7b93774a1f25897faada9c8cf73cf61e.jpg",
    alt: "Competitor comparison – Tech paid ad",
    label1: "Competitor Comparison",
    label2: "Tech",
  },
];

export function PaidAdSection() {
  return (
    <section style={{ backgroundColor: "#ddc7ab" }}>
      <div style={{ maxWidth: "1366px", margin: "0 auto", padding: "clamp(32px, 4.4vw, 60px) clamp(20px, 5.86vw, 80px)" }}>
      <h2
        style={{
          fontFamily: '"MelanieDisplay", serif',
          fontSize: "min(4.69vw, 64px)",
          fontWeight: 700,
          color: "#fffaf1",
          marginBottom: "32px",
          lineHeight: 1.1,
        }}
      >
        Paid Ad Usage
      </h2>

      {/* 4-column grid — collapses to 2 on mobile */}
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ gap: "16px", marginTop: "32px" }}
      >
        {cards.map((card) => (
          <div key={card.src}>
            {/* Thumbnail with play overlay */}
            <div
              className="relative overflow-hidden h-[280px] md:h-[500px]"
              style={{ width: "100%", backgroundColor: "#c4a882" }}
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
