import { mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const BASE = process.cwd();

const imageUrls = [
  // Hero (S0)
  'https://melaniereneeugc.com/_assets/media/2875727fbfa1beae3add6aaeeeb2c2b5.png',
  'https://melaniereneeugc.com/_assets/media/afa39608c9a30684a99dad12b8c85622.jpg',
  'https://melaniereneeugc.com/_assets/media/ec74f22aa3426b0487e0b8ea575474aa.png',
  'https://melaniereneeugc.com/_assets/media/76c14698ca1ffb3c64ec673af48f31ab.png',
  'https://melaniereneeugc.com/_assets/media/1e96a1e0db2731ff7ccec03d4681b678.png',
  // Brands (S1)
  'https://melaniereneeugc.com/_assets/media/6076283524f4985a4ca15a289073d4a5.png',
  'https://melaniereneeugc.com/_assets/media/732f171fa2e57dd3aa6243bb786a1993.jpg',
  'https://melaniereneeugc.com/_assets/media/6167db00c2a780812d3fdf7075b32f85.png',
  'https://melaniereneeugc.com/_assets/media/f85141762d733c66d95683e618198160.jpg',
  'https://melaniereneeugc.com/_assets/media/e0af249812fdf1921a8bccccb3229ec2.png',
  'https://melaniereneeugc.com/_assets/media/b28f7445a50c6e8dcb45d2c609f0440a.jpg',
  'https://melaniereneeugc.com/_assets/media/92a531bb0470870e3cd564220a0ed08c.jpg',
  'https://melaniereneeugc.com/_assets/media/43e29b4b43e3c2eea153922b81e0c381.jpg',
  'https://melaniereneeugc.com/_assets/media/035cbc30f22164a9325b12ee611d404e.jpg',
  'https://melaniereneeugc.com/_assets/media/23fb167bffc1655fcc09a036e755769c.jpg',
  'https://melaniereneeugc.com/_assets/media/2967b5d4add4e1879dca85719555cd9d.png',
  'https://melaniereneeugc.com/_assets/media/b531b21bbfec5655621f315eb9e4a91c.jpg',
  'https://melaniereneeugc.com/_assets/media/0a2b00caa5988dd13b6313f7a16a34db.png',
  'https://melaniereneeugc.com/_assets/media/cad79d94d6c76422aada75ee043d99e8.jpg',
  'https://melaniereneeugc.com/_assets/media/7db2ac181b62c91add52cb8fc629f522.png',
  'https://melaniereneeugc.com/_assets/media/29c2f1be6bdc60ae61cc0ac549181040.jpg',
  'https://melaniereneeugc.com/_assets/media/6e0778bf085de0dcb2e8946eff249b34.jpg',
  'https://melaniereneeugc.com/_assets/media/fc9e8c2a48140accb94709af85035ff8.png',
  // IG Stats (S2)
  'https://melaniereneeugc.com/_assets/media/4888fef0562b99667435aa50e491a8df.jpg',
  'https://melaniereneeugc.com/_assets/media/62e900d323dbca691212d24149b486a7.jpg',
  'https://melaniereneeugc.com/_assets/media/184342807e9129ec29a7ebb84b37b05e.png',
  'https://melaniereneeugc.com/_assets/media/e06529e1f2c0961f3bea232cd30742d9.png',
  'https://melaniereneeugc.com/_assets/media/c5636acdc74fefbd9f60c21af842a335.png',
  'https://melaniereneeugc.com/_assets/media/e2c174202b704a6e78eaa21276f37f59.png',
  'https://melaniereneeugc.com/_assets/media/78decf9fe65502f24f30020d60c1939f.png',
  'https://melaniereneeugc.com/_assets/media/3451f24fb0de76ad186544cae86403cb.png',
  'https://melaniereneeugc.com/_assets/media/029e44ced7e4f3c01b464f271544e078.png',
  // Testimonials (S6)
  'https://melaniereneeugc.com/_assets/media/1fbac946f340ba3ba1d87b3ac40bae53.jpg',
  'https://melaniereneeugc.com/_assets/media/3ed0476240796281d1d6caa99cbbe91a.jpg',
  'https://melaniereneeugc.com/_assets/media/eaaa9eeeda2c6af7679e8dd24e191efa.jpg',
  'https://melaniereneeugc.com/_assets/media/24bc0a57d1d35f95ca101cd1df0c17cf.jpg',
  // Photography (S8)
  'https://melaniereneeugc.com/_assets/media/e94006ed224ad700c9afed969c58ceac.jpg',
  'https://melaniereneeugc.com/_assets/media/c5fb95f045affde92bfe657ceb13ea71.jpg',
  'https://melaniereneeugc.com/_assets/media/3485c7a6ec6b31ed6d7df70936cc1c78.jpg',
  'https://melaniereneeugc.com/_assets/media/100b362726a9e9e3e95471a277f8b5bb.jpg',
  'https://melaniereneeugc.com/_assets/media/782a5b87c7b122066517cefa823e22a9.jpg',
  'https://melaniereneeugc.com/_assets/media/cee1b316847c1d4e8a0c49075134521a.jpg',
];

const videoThumbs = [
  // Paid Ad Usage (S3)
  'https://melaniereneeugc.com/_assets/video/1c2f54d64a1e1009823a8f0da0cd7883.jpg',
  'https://melaniereneeugc.com/_assets/video/2e5e6d7243c87c1ff667604b07773105.jpg',
  'https://melaniereneeugc.com/_assets/video/d90b77abab2c70be6788b8fc359900e6.jpg',
  'https://melaniereneeugc.com/_assets/video/7b93774a1f25897faada9c8cf73cf61e.jpg',
  // Organic Row 1 (S4)
  'https://melaniereneeugc.com/_assets/video/29e7f6bcdbf1a61dac8473b05cb05745.jpg',
  'https://melaniereneeugc.com/_assets/video/7e0952da2e2ae9e0d370296248fb82bf.jpg',
  'https://melaniereneeugc.com/_assets/video/a942c6d5ab2d36aef6d8ef9549272dcf.jpg',
  'https://melaniereneeugc.com/_assets/video/a417fca9ab285806ae28377c14c35ffc.jpg',
  // Organic Examples (S5)
  'https://melaniereneeugc.com/_assets/video/797f719e2a225d100f7ee0f2d7477d34.jpg',
  'https://melaniereneeugc.com/_assets/video/9f53bf6edbf0714a42e1050e1d2420aa.jpg',
  'https://melaniereneeugc.com/_assets/video/3f437b48b104fe8ca23224861ade0dfa.jpg',
  'https://melaniereneeugc.com/_assets/video/313a107d4cfb4a63304e7bfc8543dbc9.jpg',
];

const fonts = [
  { url: 'https://melaniereneeugc.com/_assets/fonts/c19f8e9cab364abc00a750036f731e21.woff2', name: 'font-sans-bold.woff2' },
  { url: 'https://melaniereneeugc.com/_assets/fonts/99ddc70a8ffa326837e6983f9aed0872.woff2', name: 'font-display.woff2' },
  { url: 'https://melaniereneeugc.com/_assets/fonts/59f4bb6e7f28db8920c69494d4d715f2.woff2', name: 'font-alt.woff2' },
];

async function download(url, dest) {
  if (existsSync(dest)) {
    return;
  }
  try {
    const res = await fetch(url, { headers: { 'Referer': 'https://melaniereneeugc.com/' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    await writeFile(dest, Buffer.from(buf));
    console.log(`  ok: ${path.basename(dest)}`);
  } catch (e) {
    console.log(`  FAIL: ${path.basename(dest)} — ${e.message}`);
  }
}

async function main() {
  await mkdir(path.join(BASE, 'public/images'), { recursive: true });
  await mkdir(path.join(BASE, 'public/videos'), { recursive: true });
  await mkdir(path.join(BASE, 'public/fonts'), { recursive: true });

  console.log(`Downloading ${imageUrls.length} images...`);
  for (let i = 0; i < imageUrls.length; i += 6) {
    await Promise.all(imageUrls.slice(i, i + 6).map(url =>
      download(url, path.join(BASE, 'public/images', url.split('/').pop()))
    ));
  }

  console.log(`Downloading ${videoThumbs.length} video thumbnails...`);
  for (let i = 0; i < videoThumbs.length; i += 6) {
    await Promise.all(videoThumbs.slice(i, i + 6).map(url =>
      download(url, path.join(BASE, 'public/videos', url.split('/').pop()))
    ));
  }

  console.log(`Downloading ${fonts.length} fonts...`);
  await Promise.all(fonts.map(f => download(f.url, path.join(BASE, 'public/fonts', f.name))));

  console.log('Done!');
}

main().catch(console.error);
