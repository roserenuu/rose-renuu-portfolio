interface ServiceItem {
  text: string;
  subItems?: string[];
  italic?: boolean;
  small?: boolean;
}

const ugcVideoItems: ServiceItem[] = [
  { text: "Concept and script" },
  { text: "UGC photos*" },
  { text: "Hook/CTA iterations*" },
  { text: "Product showcasing & unboxing" },
  { text: "Testimonials and reviews" },
  { text: "Demonstrations and tutorials" },
  { text: "Raw footage*" },
  { text: "Product-related \"tips and tricks\"" },
  { text: "Script-reads" },
  { text: "*requires additional fees", italic: true, small: true },
];

const addOnItems: ServiceItem[] = [
  {
    text: "Usage rights",
    subItems: ["paid ads", "full rights"],
  },
  { text: "Raw footage" },
  { text: "Hook, CTA, and restructured variations" },
  { text: "Aspect ratio resizing" },
  { text: "Done-for-you content" },
  { text: "Exclusivity" },
  { text: "Refilms" },
  { text: "UGC + product photography" },
];

export function ServicesSection() {
  return (
    <section style={{ backgroundColor: "#f8faf0", borderTop: "3px solid #e8620a" }}>
      <div style={{ maxWidth: "1366px", margin: "0 auto", padding: "min(4.4vw, 60px) min(5.86vw, 80px)" }}>
      <h2
        style={{
          fontFamily: '"MelanieDisplay", serif',
          fontSize: "min(5.86vw, 80px)",
          fontWeight: 400,
          color: "#000000",
          textAlign: "center",
          lineHeight: 1.1,
          marginBottom: "8px",
        }}
      >
        Services and Packages
      </h2>

      <p
        style={{
          fontFamily: '"MelanieSans", ui-sans-serif, system-ui, sans-serif',
          fontSize: "clamp(13px, 1.5vw, 18px)",
          color: "#383035",
          fontStyle: "italic",
          textAlign: "center",
          marginBottom: "clamp(20px, 3vw, 40px)",
        }}
      >
        *contact for rates and influencer collaborations
      </p>

      {/* 3-column grid — 2 cols on mobile, 3 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: "clamp(16px, 3vw, 40px)" }}>

        {/* Column 1: UGC Video */}
        <div>
          <h3
            style={{
              fontFamily: '"MelanieSans", ui-sans-serif, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: "clamp(16px, 1.8vw, 24px)",
              color: "#383035",
              marginBottom: "16px",
            }}
          >
            UGC video scripting, filming, and editing
          </h3>
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: "20px",
              margin: 0,
              fontFamily: '"MelanieSans", ui-sans-serif, system-ui, sans-serif',
              color: "#383035",
            }}
          >
            {ugcVideoItems.map((item) => (
              <li
                key={item.text}
                style={{
                  fontSize: item.small ? "clamp(12px, 1.3vw, 16px)" : "clamp(14px, 1.5vw, 20px)",
                  fontStyle: item.italic ? "italic" : "normal",
                  listStyle: item.italic ? "none" : "disc",
                  marginLeft: item.italic ? "-20px" : "0",
                  marginBottom: "6px",
                  lineHeight: 1.5,
                  color: "#383035",
                }}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Add-ons */}
        <div>
          <h3
            style={{
              fontFamily: '"MelanieSans", ui-sans-serif, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: "clamp(16px, 1.8vw, 24px)",
              color: "#383035",
              marginBottom: "16px",
            }}
          >
            Add-ons
          </h3>
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: "20px",
              margin: 0,
              fontFamily: '"MelanieSans", ui-sans-serif, system-ui, sans-serif',
              color: "#383035",
            }}
          >
            {addOnItems.map((item) => (
              <li key={item.text} style={{ marginBottom: "6px", lineHeight: 1.5, fontSize: "clamp(14px, 1.5vw, 20px)" }}>
                {item.text}
                {item.subItems && item.subItems.length > 0 && (
                  <ul
                    style={{
                      listStyle: "circle",
                      paddingLeft: "20px",
                      marginTop: "4px",
                    }}
                  >
                    {item.subItems.map((sub) => (
                      <li key={sub} style={{ fontSize: "clamp(13px, 1.4vw, 18px)", marginBottom: "2px" }}>
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Package Bundles */}
        <div className="col-span-2 md:col-span-1">
          <h3
            style={{
              fontFamily: '"MelanieSans", ui-sans-serif, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: "clamp(16px, 1.8vw, 24px)",
              color: "#383035",
              marginBottom: "16px",
            }}
          >
            Package Bundles
          </h3>

          <div
            style={{
              fontFamily: '"MelanieSans", ui-sans-serif, system-ui, sans-serif',
              color: "#383035",
              fontSize: "clamp(14px, 1.5vw, 20px)",
              lineHeight: 1.6,
            }}
          >
            {/* AD TESTER #1 */}
            <p style={{ fontWeight: 700, marginBottom: "4px" }}>AD TESTER #1</p>
            <ul
              style={{
                listStyle: "disc",
                paddingLeft: "20px",
                margin: "0 0 16px 0",
              }}
            >
              <li style={{ marginBottom: "4px" }}># concepts</li>
              <li style={{ marginBottom: "4px" }}># hooks</li>
              <li style={{ marginBottom: "4px" }}># CTAs</li>
              <li style={{ marginBottom: "4px" }}># total deliverables</li>
            </ul>

            {/* AD TESTER #2 */}
            <p style={{ fontWeight: 700, marginBottom: "4px" }}>AD TESTER #2</p>
            <ul
              style={{
                listStyle: "disc",
                paddingLeft: "20px",
                margin: "0 0 16px 0",
              }}
            >
              <li style={{ marginBottom: "4px" }}># concepts</li>
              <li style={{ marginBottom: "4px" }}># hooks</li>
              <li style={{ marginBottom: "4px" }}># CTAs</li>
              <li style={{ marginBottom: "4px" }}># total deliverables</li>
            </ul>

            <p style={{ fontStyle: "italic", fontSize: "clamp(13px, 1.3vw, 18px)" }}>
              *30 days paid ad usage rights included*
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
