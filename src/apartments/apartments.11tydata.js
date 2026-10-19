// Site standalone Studio Dandelion: pagina apartamentului E home-ul (/ si /en/).
module.exports = {
  layout: "apartment.njk",
  pagination: {
    data: "languages",
    size: 1,
    alias: "lang",
    addAllPagesToCollections: true
  },
  eleventyComputed: {
    permalink: (data) => (data.lang === "ro" ? "/index.html" : "/en/index.html"),
    urlRo: (data) => "/",
    urlEn: (data) => "/en/",
    title: (data) => (data.lang === "ro"
      ? `Cazare Sinaia – Studio Dandelion, garsonieră cu vedere la munte`
      : `Accommodation Sinaia – Studio Dandelion, mountain-view studio`),
    tagline: (data) => (data.lang === "ro" ? data.tagline_ro : data.tagline_en),
    description: (data) => (data.lang === "ro"
      ? "Cazare in Sinaia, la pret bun: Studio Dandelion, garsoniera moderna cu vedere la munte, piscina, sauna si fitness. Aproape de centru, partii si activitati (ATV, snowmobil, telecabina). Rezervari directe, fara comision."
      : "Affordable accommodation in Sinaia: Studio Dandelion, a modern mountain-view studio with pool, sauna and gym. Near the centre, ski slopes and activities (ATV, snowmobile, cable car). Direct bookings, no commission."),
    capacity: (data) => (data.lang === "ro" ? data.capacity_ro : data.capacity_en),
    roomType: (data) => (data.lang === "ro" ? data.roomType_ro : data.roomType_en),
    metaExtra: (data) => (data.lang === "ro" ? data.metaExtra_ro : data.metaExtra_en),
    amenities: (data) => (data.lang === "ro" ? data.amenities_ro : data.amenities_en),
    desc: (data) => (data.lang === "ro" ? data.desc_ro : data.desc_en),
    priceUnit: (data) => (data.lang === "ro" ? data.priceUnit_ro : data.priceUnit_en),
    ogImage: (data) => data.hero
  }
};
