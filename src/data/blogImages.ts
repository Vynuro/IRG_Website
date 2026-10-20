// Fixed Unsplash photographs, shared by the index, article and related cards.
// HTTPS URLs keep Figma Make copy/paste portable: no local image uploads needed.
// All source pages identify these photographs as free under the Unsplash License.
const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=85`;

export const blogImages: Record<string, { src: string; alt: string; source: string; credit: string }> = {
  "recruit-c-suite-executives-for-interviews": {
    src: photo("photo-1758518729908-d4220a678d81"),
    alt: "Two business professionals discussing reports in a one-to-one office meeting",
    source: "https://unsplash.com/photos/8k5j5z6ZYT4",
    credit: "Vitaly Gariev / Unsplash",
  },
  "avoiding-professional-survey-takers-b2b": {
    src: photo("photo-1763568258367-1c52beb60be7"),
    alt: "Laptop displaying code and data charts for detailed data analysis",
    source: "https://unsplash.com/photos/GQOylIn892U",
    credit: "Daniil Komov / Unsplash",
  },
  "focus-groups-vs-idis": {
    src: photo("photo-1541746972996-4e0b0f43e02a"),
    alt: "A group of professionals exchanging ideas around a meeting table",
    source: "https://unsplash.com/photos/VBLHICVh-lI",
    credit: "Mario Gogh / Unsplash",
  },
  "healthcare-expert-recruitment-compliance": {
    src: photo("photo-1758691461935-202e2ef6b69f"),
    alt: "A physician reviewing paperwork during a patient consultation in a medical office",
    source: "https://unsplash.com/photos/IDM3n0LfNCY",
    credit: "Vitaly Gariev / Unsplash",
  },
  "feasible-sample-plans-niche-b2b": {
    src: photo("photo-1770681381576-f1fdceb2ea01"),
    alt: "Research planning workspace with data charts on a laptop, a notebook and a mug",
    source: "https://unsplash.com/photos/adFE-OdO7RA",
    credit: "nicoll camacho / Unsplash",
  },
  "inside-our-expert-verification-process": {
    src: photo("photo-1775163024488-e88e4a71179f"),
    alt: "Two professionals checking documents together at a conference table",
    source: "https://unsplash.com/photos/MhqUBTxQ3Hw",
    credit: "Olena Kholina / Unsplash",
  },
};

export const getBlogImage = (slug: string) => blogImages[slug] ?? blogImages["recruit-c-suite-executives-for-interviews"];
