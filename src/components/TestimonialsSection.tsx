import Image from "next/image";

interface Testimonial {
  review: string;
  logoSrc: string;
  logoAlt: string;
  name: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    review:
      "Rose was awesome to work with! The content created was amazing and super creative and engaging! Rose responded to emails quickly and sent over content on time! Would love to work together again!",
    logoSrc: "/images/1fbac946f340ba3ba1d87b3ac40bae53.jpg",
    logoAlt: "Pestie logo",
    name: "Bianca",
    company: "Pestie",
  },
  {
    review:
      "We'd like to say a huge thank you to Rose. Her UGC video was absolutely great and she was so easy to collaborate with. Rose captured our brand perfectly and made the message feel natural, engaging, and authentic. It was such a pleasure working with her. We'll definitely keep her in mind for future campaigns.",
    logoSrc: "/images/3ed0476240796281d1d6caa99cbbe91a.jpg",
    logoAlt: "Budgety logo",
    name: "Moradeke",
    company: "Budgety",
  },
  {
    review:
      "Wow Rose! Thanks for the great pictures! Great work and we'd love to work with you again in the future!",
    logoSrc: "/images/eaaa9eeeda2c6af7679e8dd24e191efa.jpg",
    logoAlt: "Thrive logo",
    name: "Thrive",
    company: "Thrive",
  },
  {
    review:
      "Rose went above and beyond on our projects. Completed in a very timely manner and her quality and performance were spot on. Would HIGHLY recommend.",
    logoSrc: "/images/24bc0a57d1d35f95ca101cd1df0c17cf.jpg",
    logoAlt: "Adver LLC logo",
    name: "Ryan",
    company: "Adver LLC",
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
                  style={{ objectFit: "contain" }}
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
