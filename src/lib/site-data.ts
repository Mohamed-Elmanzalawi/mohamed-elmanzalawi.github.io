import projectsData from "../../content/projects.json";
import publicationsData from "../../content/publications.json";
import presentationsData from "../../content/presentations.json";
import scholarshipsData from "../../content/scholarships.json";
import awardsData from "../../content/awards.json";
import cvTimelineData from "../../content/cv-timeline.json";
import affiliationsData from "../../content/affiliations.json";
import affiliationCardData from "../../content/affiliation-card.json";
import aboutBioData from "../../content/about-bio.json";
import aboutInterestsData from "../../content/about-interests.json";
import aboutCredibilityData from "../../content/about-credibility.json";
import homeIntroData from "../../content/home-intro.json";
import upcomingEventData from "../../content/upcoming-event.json";

export const LINKEDIN_URL = "https://www.linkedin.com/in/mohamed-elmanzalawi/";
export const GITHUB_URL = "https://github.com/Mohamed-Elmanzalawi";
export const ORCID_URL = "https://orcid.org/0009-0006-3840-5136";
export const SCHOLAR_URL = "https://scholar.google.com/citations?hl=en&user=DoawAGAAAAAJ&view_op=list_works&sortby=pubdate";

export type Project = {
  id: string;
  name: string;
  title: string;
  year?: string;
  // a project can belong to more than one category
  category: string[];
  categoryLabel: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  capabilities: string[];
  tech: string[];
  workflow?: string[];
  links: { label: string; url: string }[];
  context?: string;
};

export const projects: Project[] = projectsData as Project[];

// Filter tabs on the Projects page — derived from whatever categories the
// projects actually use, so a new category just needs to be set on a
// project (e.g. via the admin editor) and a tab appears for it automatically.
export const projectFilters = ["All", ...Array.from(new Set(projects.flatMap((p) => p.category))).sort()];

export type Publication = {
  year: string;
  authors: string;
  highlight: string;
  title: string;
  venue: string;
  links: { label: string; url: string }[];
};

export const publications: Publication[] = publicationsData;

export type Presentation = {
  // a single talk can be both an oral presentation and a poster
  type: ("Oral" | "Poster")[];
  year: string;
  title: string;
  event: string;
  // `location` is derived ("City, Country") from `city`/`country` below,
  // which the admin's dropdown-backed picker stores as the source of truth.
  location: string;
  city?: string;
  country?: string;
  date: string;
  // ISO (yyyy-mm-dd) source dates the admin's calendar picker stores;
  // `date` above is the formatted display string derived from these.
  startDate?: string;
  endDate?: string;
  link?: { label: string; url: string };
};

export const presentations: Presentation[] = presentationsData as Presentation[];

export type Recognition = {
  title: string;
  date: string;
  body: string;
  url?: string;
};

export const scholarships: Recognition[] = scholarshipsData;

export const awards: Recognition[] = awardsData;

export type CvTimelineEntry = {
  period: string;
  title: string;
  body: string;
  points: string[];
};

export const cvTimeline: CvTimelineEntry[] = cvTimelineData;

export type Affiliation = { label: string; url: string };

export const affiliationLinks: Affiliation[] = affiliationsData;

export type AffiliationCard = {
  university: string;
  degree: string;
  period: string;
  institute: string;
  location: string;
};

export const affiliationCard: AffiliationCard = affiliationCardData;

export type AboutBio = { paragraphs: string[] };

export const aboutBio: AboutBio = aboutBioData;

export type AboutInterests = { items: string[] };

export const aboutInterests: AboutInterests = aboutInterestsData;

export type CredibilityItem = { k: string; v: string };

export const aboutCredibility: CredibilityItem[] = aboutCredibilityData;

export type HomeIntro = { eyebrow: string; tagline: string; paragraph: string };

export const homeIntro: HomeIntro = homeIntroData;

export type UpcomingEvent = {
  visible: boolean;
  type: string;
  title: string;
  event: string;
  location: string;
  city?: string;
  country?: string;
  date: string;
  link?: { label: string; url: string };
  expiresAt?: string;
};

export const upcomingEvent: UpcomingEvent = upcomingEventData as UpcomingEvent;

// the banner stays up forever unless an expiry date was set in the admin,
// in which case it stops showing the day after that date passes
export const upcomingEventVisible =
  upcomingEvent.visible &&
  (!upcomingEvent.expiresAt || new Date().toISOString().slice(0, 10) <= upcomingEvent.expiresAt);
