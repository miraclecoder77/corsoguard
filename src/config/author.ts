/**
 * Global Publisher Configuration
 * Used to populate the schema.org author/publisher nodes across all blog posts.
 *
 * NOTE: articles are currently attributed to the CorsoGuard organisation, not to
 * a named person. Schema.org permits an Organization as `author`, and that is the
 * only accurate claim we can make today.
 *
 * TO UPGRADE E-E-A-T (recommended — this is the single highest-value change):
 * 1. Add a real person below via `namedAuthor` (full name, real photo at the given
 *    path, a genuine bio, and a linked profile such as LinkedIn).
 * 2. For the health articles, add `medicalReviewer` with a licensed veterinarian's
 *    name and credentials — only once they have actually reviewed the content.
 * Both are read by SchemaBridge and are simply omitted while null.
 */

export const publisherConfig = {
  name: "CorsoGuard",
  url: "https://www.corsoguard.com",
  logo: "https://www.corsoguard.com/logo.png",
  description:
    "Breed-specific tools and guides for Cane Corso owners, covering giant-breed growth, nutrition, orthopedic health, and socialisation.",
  knowsAbout: [
    "Cane Corso Breed Standards",
    "Canine Health & Nutrition",
    "Giant Breed Orthopedic Health",
    "Tactical Working Dog Equipment",
    "Mastiff Temperament & Socialization",
    "Canine Developmental Psychology",
    "Gastric Dilatation-Volvulus Prevention",
  ],
  // Only verified, live profiles belong here. A `sameAs` entry that 404s is a
  // negative trust signal, not a neutral one.
  sameAs: ["https://instagram.com/corsoguard"],
};

/**
 * Set to a real person to attribute articles to a named author.
 * Leave null until a genuine identity (and photo) exists.
 */
export const namedAuthor: {
  name: string;
  jobTitle: string;
  url: string;
  image: string;
  description: string;
  sameAs: string[];
} | null = null;

/**
 * Set to a licensed veterinarian once they have genuinely reviewed the health
 * content. Leave null otherwise — claiming unperformed medical review is worse
 * than claiming none.
 */
export const medicalReviewer: {
  name: string;
  honorificSuffix: string;
  url: string;
} | null = null;
