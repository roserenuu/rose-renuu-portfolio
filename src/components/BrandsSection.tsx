import Image from "next/image";

interface Brand {
  src: string;
  alt: string;
}

const brands: Brand[] = [
  // Row 1
  { src: "/images/6076283524f4985a4ca15a289073d4a5.png", alt: "Blanc Nature" },
  { src: "/images/732f171fa2e57dd3aa6243bb786a1993.jpg", alt: "Rezi" },
  { src: "/images/6167db00c2a780812d3fdf7075b32f85.png", alt: "Toggl" },
  { src: "/images/f85141762d733c66d95683e618198160.jpg", alt: "Loona" },
  { src: "/images/e0af249812fdf1921a8bccccb3229ec2.png", alt: "Bend Skincare" },
  { src: "/images/b28f7445a50c6e8dcb45d2c609f0440a.jpg", alt: "Budgety" },
  // Row 2
  { src: "/images/92a531bb0470870e3cd564220a0ed08c.jpg", alt: "Mosh" },
  { src: "/images/43e29b4b43e3c2eea153922b81e0c381.jpg", alt: "Hanskin" },
  { src: "/images/035cbc30f22164a9325b12ee611d404e.jpg", alt: "Hostinger" },
  { src: "/images/23fb167bffc1655fcc09a036e755769c.jpg", alt: "Temu" },
  { src: "/images/2967b5d4add4e1879dca85719555cd9d.png", alt: "Perplexity" },
  { src: "/images/b531b21bbfec5655621f315eb9e4a91c.jpg", alt: "LXB" },
  // Row 3
  { src: "/images/0a2b00caa5988dd13b6313f7a16a34db.png", alt: "Pestie" },
  { src: "/images/cad79d94d6c76422aada75ee043d99e8.jpg", alt: "Numbuzin" },
  { src: "/images/7db2ac181b62c91add52cb8fc629f522.png", alt: "OneNote" },
  { src: "/images/29c2f1be6bdc60ae61cc0ac549181040.jpg", alt: "Analytics App" },
  { src: "/images/6e0778bf085de0dcb2e8946eff249b34.jpg", alt: "Anker" },
  { src: "/images/fc9e8c2a48140accb94709af85035ff8.png", alt: "Notion" },
];

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
        Trusted by 40+ brands
      </h2>

      {/* Desktop: flex-wrap grid */}
      <div
        className="hidden sm:flex"
        style={{
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {brands.map((brand) => (
          <div
            key={brand.src}
            style={{
              position: "relative",
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="160px"
            />
          </div>
        ))}
      </div>

      {/* Mobile: 3-column grid, 100px logos */}
      <div
        className="flex sm:hidden"
        style={{
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {brands.map((brand) => (
          <div
            key={`mobile-${brand.src}`}
            style={{
              position: "relative",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="100px"
            />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
