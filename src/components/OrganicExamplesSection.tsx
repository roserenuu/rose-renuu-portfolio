interface VideoCard {
  src: string;
  alt: string;
  label1: string;
  label2: string;
}

const cards: VideoCard[] = [
  {
    src: "/videos/797f719e2a225d100f7ee0f2d7477d34.jpg",
    alt: "Demo – Naturelo organic example",
    label1: "Demo",
    label2: "Naturelo",
  },
  {
    src: "/videos/9f53bf6edbf0714a42e1050e1d2420aa.jpg",
    alt: "Greenscreen – Skincare organic example",
    label1: "Greenscreen",
    label2: "Skincare",
  },
  {
    src: "/videos/3f437b48b104fe8ca23224861ade0dfa.jpg",
    alt: "Without vs. With – Productivity organic example",
    label1: "Without vs. With",
    label2: "Productivity",
  },
  {
    src: "/videos/313a107d4cfb4a63304e7bfc8543dbc9.jpg",
    alt: "Reply to comment – SaaS organic example",
    label1: "Reply to comment",
    label2: "SaaS",
  },
];

export function OrganicExamplesSection() {
  return (
    <section style={{ backgroundColor: "#c8bbaa" }}>
      <div style={{ maxWidth: "1366px", margin: "0 auto", padding: "min(4.4vw, 60px) min(5.86vw, 80px)" }}>
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
        Organic Examples
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
