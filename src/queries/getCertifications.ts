import { Certification } from "../types";

export async function getCertifications(): Promise<Certification[]> {
  return [
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      issuedDate: "October 2025",
      link: "https://www.credly.com/badges/d24511b6-9771-4255-8b58-b8c26ad4a074",
      iconName: "FaCertificate"
    }
  ];
}
