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
      ? `Cazare Sinaia cu piscină – Studio Dandelion, lângă Peleș`
      : `Sinaia accommodation with pool – Studio Dandelion, near Peleș`),
    tagline: (data) => (data.lang === "ro" ? data.tagline_ro : data.tagline_en),
    description: (data) => (data.lang === "ro"
      ? "Cazare în Sinaia cu piscină și bistro în complex, în centru și aproape de Castelul Peleș: Studio Dandelion — garsonieră elegantă cu vedere la munte, saună și fitness. Rezervare directă, fără comision, la un preț bun."
      : "Accommodation in Sinaia with a pool and on-site bistro, in the centre and near Peleș Castle: Studio Dandelion — an elegant mountain-view studio with sauna and gym. Direct booking, no commission, at a fair price."),
    capacity: (data) => (data.lang === "ro" ? data.capacity_ro : data.capacity_en),
    roomType: (data) => (data.lang === "ro" ? data.roomType_ro : data.roomType_en),
    metaExtra: (data) => (data.lang === "ro" ? data.metaExtra_ro : data.metaExtra_en),
    amenities: (data) => (data.lang === "ro" ? data.amenities_ro : data.amenities_en),
    desc: (data) => (data.lang === "ro" ? data.desc_ro : data.desc_en),
    priceUnit: (data) => (data.lang === "ro" ? data.priceUnit_ro : data.priceUnit_en),
    ogImage: (data) => data.hero
  }
};
