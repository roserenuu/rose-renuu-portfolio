const topReels = [
  {
    src: "/images/4888fef0562b99667435aa50e491a8df.jpg",
    alt: "Day 1: $0 reel — 157K views",
  },
  {
    src: "/images/62e900d323dbca691212d24149b486a7.jpg",
    alt: "Museum of failures reel — 2.1M views",
  },
  {
    src: "/images/184342807e9129ec29a7ebb84b37b05e.png",
    alt: "Coffee video reel — 39.8K views",
  },
  {
    src: "/images/e06529e1f2c0961f3bea232cd30742d9.png",
    alt: "Day 1 to day 71 reel — 18.8K views",
  },
];

const bottomReels = [
  {
    src: "/images/e06529e1f2c0961f3bea232cd30742d9.png",
    alt: "Day 1 to day 71 reel",
  },
  {
    src: "/images/029e44ced7e4f3c01b464f271544e078.png",
    alt: "Additional reel thumbnail",
  },
];

export function IGStatsSection() {
  return (
    <section style={{ backgroundColor: "#ecede8" }} className="w-full">
      <div style={{ maxWidth: "1366px", margin: "0 auto", padding: "min(4.4vw, 60px) min(5.86vw, 80px)" }}>
      {/* UPPER AREA: two-column row */}
      <div className="flex flex-col md:flex-row w-full gap-8">

        {/* Right ~60%: heading */}
        <div
          className="flex items-start justify-end"
          style={{ flex: "0 0 60%", maxWidth: "60%" }}
        >
          <h2
            style={{
              fontFamily: '"MelanieDisplay", serif',
              fontSize: "min(7.03vw, 96px)",
              fontWeight: 400,
              color: "#704608",
              textAlign: "right",
              lineHeight: 1,
              margin: 0,
            }}
          >
            IG analytics &amp; stats
          </h2>
        </div>
      </div>

      {/* TOP VIDEO GRID: 4 reel thumbnails */}
      <div
        className="flex flex-col md:flex-row w-full"
        style={{ gap: "16px", marginTop: "32px" }}
      >
        {topReels.map((reel) => (
          <div
            key={reel.src}
            className="relative overflow-hidden"
            style={{ flex: 1, height: "420px", backgroundColor: "#c8bfb0" }}
          />
        ))}
      </div>

      {/* LOWER AREA: two-column */}
      <div
        className="flex flex-col md:flex-row w-full"
        style={{ gap: "32px", marginTop: "32px" }}
      >
        {/* Left ~40%: placeholder */}
        <div
          style={{ flex: "0 0 40%", maxWidth: "40%", height: "430px", backgroundColor: "#c8bfb0" }}
        />

        {/* Right ~60%: 2 more video thumbnails side by side */}
        <div
          className="flex flex-col md:flex-row"
          style={{ flex: "0 0 60%", maxWidth: "60%", gap: "16px" }}
        >
          {bottomReels.map((reel) => (
            <div
              key={reel.src}
              className="relative overflow-hidden"
              style={{ flex: 1, height: "430px", backgroundColor: "#c8bfb0" }}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
