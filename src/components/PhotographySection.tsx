const PLACEHOLDER = "#d4c9bb";

export function PhotographySection() {
  return (
    <section style={{ backgroundColor: "#f8faf0" }}>
      <div
        style={{ maxWidth: "1366px", margin: "0 auto" }}
        className="flex flex-col md:flex-row md:items-center md:gap-[80px] px-5 py-8 md:px-[80px] md:py-[80px] md:min-h-[768px]"
      >
        {/* LEFT: text */}
        <div className="flex flex-col items-center md:w-[40%] shrink-0">
          <h2
            style={{
              fontFamily: '"MelanieDisplay", serif',
              fontSize: "clamp(36px, 6vw, 86px)",
              fontWeight: 400,
              color: "#704608",
              lineHeight: 1,
              margin: 0,
            }}
          >
            Photography
          </h2>
          <p
            style={{
              fontFamily: '"MelanieSans", sans-serif',
              fontSize: "clamp(16px, 2.5vw, 28px)",
              color: "#383035",
              textAlign: "center",
              margin: "24px 0 0",
              lineHeight: 1.3,
            }}
          >
            lifestyle +
            <br />
            product photography
          </p>
        </div>

        {/* RIGHT: collage grid — desktop only */}
        <div
          className="hidden md:grid"
          style={{
            flex: "1 1 60%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: "12px",
            height: "720px",
          }}
        >
          <div style={{ gridColumn: 1, gridRow: "1 / 3", backgroundColor: PLACEHOLDER }} />
          <div style={{ gridColumn: 2, gridRow: 1, backgroundColor: PLACEHOLDER }} />
          <div style={{ gridColumn: 3, gridRow: 1, backgroundColor: PLACEHOLDER }} />
          <div style={{ gridColumn: 2, gridRow: 2, backgroundColor: PLACEHOLDER }} />
          <div style={{ gridColumn: 3, gridRow: "2 / 4", backgroundColor: PLACEHOLDER }} />
          <div style={{ gridColumn: "1 / 3", gridRow: 3, backgroundColor: PLACEHOLDER }} />
        </div>

        {/* RIGHT: 2 portrait cards — mobile only */}
        <div
          className="flex md:hidden mt-6"
          style={{ gap: "8px", width: "100%" }}
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              style={{ flex: 1, aspectRatio: "3 / 4", backgroundColor: PLACEHOLDER }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
