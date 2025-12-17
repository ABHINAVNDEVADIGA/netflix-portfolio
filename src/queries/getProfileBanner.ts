import { ProfileBanner } from "../types";

export async function getProfileBanner(): Promise<ProfileBanner> {
  return {
    headline: "Abhinav N Devadiga",
    linkedinLink: "https://www.linkedin.com/in/abhinav-n-devadiga-726699288",
    profileSummary:
      "Final year CSE student | Full Stack Developer | AI & ML Enthusiast",
    resumeLink: { url: "/ABHINAV_RESUME.pdf" },
    backgroundImage: { url: "/banner.jpg" }
  };
}
