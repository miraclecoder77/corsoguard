/**
 * Global Author Configuration
 * Used to populate schema.org Person nodes across all blog posts.
 * Update name and sameAs when real author identities are established.
 *
 * OWNER ACTION REQUIRED:
 * Replace "CorsoGuard Expert" with a real person's full name.
 * Add their LinkedIn profile URL to sameAs.
 * For health/medical articles, add a consulting veterinarian's name and credentials.
 */
export const authorConfig = {
  name: "CorsoGuard Expert",
  jobTitle: "Cane Corso Breed Specialist & Working Dog Trainer",
  description: "Experienced Cane Corso handler and researcher specialising in giant-breed health protocols, tactical gear selection, and large-breed developmental science.",
  url: "https://www.corsoguard.com/about",
  image: "https://www.corsoguard.com/author-expert.png",
  knowsAbout: [
    "Cane Corso Breed Standards",
    "Canine Health & Nutrition",
    "Giant Breed Orthopedic Health",
    "Tactical Working Dog Equipment",
    "Mastiff Temperament & Socialization",
    "Canine Developmental Psychology",
    "Gastric Dilatation-Volvulus Prevention",
  ],
  sameAs: [
    "https://twitter.com/corsoguard",
    "https://instagram.com/corsoguard",
  ],
};
