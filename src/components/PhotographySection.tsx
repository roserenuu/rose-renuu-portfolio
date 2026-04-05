const PLACEHOLDER = "#d4c9bb";

export function PhotographySection() {
  return (
    <section style={{ backgroundColor: "#f8faf0" }}>
      <div
        style={{ maxWidth: "1366px", margin: "0 auto" }}
        className="flex flex-col md:flex-row md:items-center md:gap-[60px] px-5 py-10 md:px-[80px] md:py-[60px] min-h-[768px]"
      >
        {/* LEFT: text */}
        <div className="flex flex-col items-center md:w-[40%] shrink-0">
          <h2
            style={{
              fontFamily: '"MelanieDisplay", serif',
              fontSize: "clamp(56px, 8vw, 100px)",
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
              fontSize: "28px",
              color: "#383035",
              textAlign: "center",
              margin: "16px 0 0",
              lineHeight: 1.3,
            }}
          >
            lifestyle +
            <br />
            product photography
          </p>
        </div>

        {/* RIGHT: collage — desktop only */}
        <div
          className="hidden md:block"
          style={{ flex: "1 1 60%", position: "relative", height: "560px" }}
        >
          {/* 1: large tall portrait — left center (dominant) */}
          <div
            style={{
              position: "absolute",
              left: "60px",
              top: "30px",
              width: "330px",
              height: "480px",
              backgroundColor: PLACEHOLDER,
            }}
          />

          {/* 2: top-right portrait */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "260px",
              height: "300px",
              backgroundColor: PLACEHOLDER,
            }}
          />

          {/* 3: bottom-left landscape */}
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "280px",
              height: "210px",
              backgroundColor: PLACEHOLDER,
            }}
          />

          {/* 4: bottom-right portrait */}
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: "260px",
              height: "280px",
              backgroundColor: PLACEHOLDER,
            }}
          />
        </div>

        {/* RIGHT: 2-column grid — mobile only */}
        <div
          className="grid md:hidden mt-8"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "8px", width: "100%" }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              style={{ paddingBottom: "120%", position: "relative", backgroundColor: PLACEHOLDER }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
