import Image from "next/image";

interface Brand {
  name: string;
  src?: string;
  fit?: "contain" | "cover";
  padding?: string;
}

const brands: Brand[] = [
  { name: "Alani Nu", src: "/images/alani-nu.png", fit: "cover", padding: "0" },
  { name: "Fashion Nova", src: "/images/fashion-nova.svg", padding: "10px" },
  { name: "Hanskin", src: "/images/e0af249812fdf1921a8bccccb3229ec2.png" },

  { name: "Prime", src: "/images/prime.svg" },
  { name: "Notion", src: "/images/notion.svg" },
  { name: "La Roche-Posay", src: "/images/la-roche-posay.png" },
];

function BrandCircle({ brand, size }: { brand: Brand; size: number }) {
  if (brand.src) {
    return (
      <div
        style={{
          position: "relative",
          width: size,
          height: size,
          borderRadius: "50%",
          overflow: "hidden",
          flexShrink: 0,
          backgroundColor: "#ffffff",
        }}
      >
        <Image
          src={brand.src}
          alt={brand.name}
          fill
          style={{ objectFit: brand.fit ?? "contain", padding: brand.padding ?? "20px" }}
          sizes={`${size}px`}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "#d4c9bb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        padding: "12px",
      }}
    >
      <span
        style={{
          fontFamily: '"MelanieSans", ui-sans-serif, system-ui, sans-serif',
          fontSize: size * 0.14,
          fontWeight: 700,
          color: "#704608",
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        {brand.name}
      </span>
    </div>
  );
}

export function BrandsSection() {
  return (
    <section style={{ backgroundColor: "#e9e9e9" }}>
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
          Trusted by brands
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {brands.map((brand) => (
            <BrandCircle key={brand.name} brand={brand} size={160} />
          ))}
        </div>
      </div>
    </section>
  );
}
