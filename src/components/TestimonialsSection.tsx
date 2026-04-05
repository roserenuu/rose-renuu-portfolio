import Image from "next/image";

interface Testimonial {
  review: string;
  logoSrc: string;
  logoAlt: string;
  name: string;
  company: string;
  logoFit?: "contain" | "cover";
}

const testimonials: Testimonial[] = [
  {
    review:
      "Rose was an absolute dream to work with! She brought so much energy and creativity to our content, and her videos truly captured the Alani Nu vibe. She was super communicative, delivered everything on time, and the engagement on her content was incredible. Would 100% work with her again!",
    logoSrc: "/images/alani-nu.png",
    logoAlt: "Alani Nu logo",
    name: "Ashley M.",
    company: "Alani Nu",
  },
  {
    review:
      "Working with Rose was such a great experience. Her content was genuine, aesthetic, and perfectly on brand for us. She understood our vision right away and delivered stunning lifestyle shots that performed really well across our ads. We'll definitely be reaching out for future campaigns!",
    logoSrc: "/images/glossier.png",
    logoAlt: "Glossier logo",
    name: "Brittany K.",
    company: "Glossier",
    logoFit: "cover",
  },
  {
    review:
      "Rose exceeded all of our expectations! Her skincare content was professional, authentic, and incredibly well produced. She clearly knows how to connect with her audience and make a product feel relatable. The UGC she created for us drove great results. Highly recommend!",
    logoSrc: "/images/la-roche-posay.png",
    logoAlt: "La Roche-Posay logo",
    name: "Morgan S.",
    company: "La Roche-Posay",
  },
  {
    review:
      "Rose was so easy to collaborate with and incredibly talented. She took our brief and turned it into content that felt completely natural and genuine. Her turnaround time was impressive and the quality was outstanding. We'd love to work with her again!",
    logoSrc: "/images/good-molecules.png",
    logoAlt: "Good Molecules logo",
    name: "Kayla T.",
    company: "Good Molecules",
  },
];

export function TestimonialsSection() {
  return (
    <section style={{ backgroundColor: "#f8faf0" }}>
      <div style={{ maxWidth: "1366px", margin: "0 auto", padding: "min(4.4vw, 60px) min(5.86vw, 80px)" }}>
      <h2
        style={{
          fontFamily: '"MelanieDisplay", serif',
          fontSize: "min(5.27vw, 72px)",
          fontWeight: 400,
          color: "#000000",
          textAlign: "center",
          marginBottom: "40px",
          lineHeight: 1.1,
        }}
      >
        Client Testimonials
      </h2>

      {/* 2×2 grid — single column on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "24px" }}>
        {testimonials.map((t) => (
          <div
            key={t.name + t.company}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              padding: "24px 32px",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            {/* Stars */}
            <p
              style={{
                color: "#f5b100",
                fontSize: "24px",
                marginBottom: "12px",
                lineHeight: 1,
              }}
            >
              ★★★★★
            </p>

            {/* Review text */}
            <p
              style={{
                fontSize: "16px",
                color: "#383035",
                lineHeight: 1.6,
                marginBottom: "20px",
                fontFamily: '"MelanieSans", ui-sans-serif, system-ui, sans-serif',
              }}
            >
              {t.review}
            </p>

            {/* Reviewer row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={t.logoSrc}
                  alt={t.logoAlt}
                  fill
                  style={{ objectFit: t.logoFit ?? "contain" }}
                  sizes="40px"
                />
              </div>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#383035",
                    margin: 0,
                    fontFamily: '"MelanieSans", ui-sans-serif, system-ui, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#383035",
                    margin: 0,
                    fontFamily: '"MelanieSans", ui-sans-serif, system-ui, sans-serif',
                  }}
                >
                  {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
