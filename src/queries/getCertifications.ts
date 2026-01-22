import { Certification } from "../types";

export async function getCertifications(): Promise<Certification[]> {
  return [
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      issuedDate: "October 2025",
      link: "https://www.credly.com/badges/d24511b6-9771-4255-8b58-b8c26ad4a074",
      iconName: "FaCertificate"
    },
    {
      title: "Prompt Engineering for Everyone",
      issuer: "Cognitive Class",
      issuedDate: "January 2026",
      link: "https://courses.cognitiveclass.ai/certificates/74ae2ae078db4ce89d7eb4d372fa909a",
      iconName: "FaCertificate"
    },
    {
      title: "Art Of Prompt Engineering",
      issuer: "Cognitive Class",
      issuedDate: "January 2026",
      link: "https://courses.cognitiveclass.ai/certificates/4cc8bda41e8e44efa6b724b11656d426",
      iconName: "FaCertificate"
    },
    {
      title: "Create Your Own ChatGPT-like Website with Open Source LLMs",
      issuer: "Cognitive Class",
      issuedDate: "January 2026",
      link: "https://courses.cognitiveclass.ai/certificates/2844dd0f112846fe92378bd123d43dc9",
      iconName: "FaCertificate"
    },
    {
      title: "Build Guardrails for Your AI with Open Source ",
      issuer: "Cognitive Class",
      issuedDate: "January 2026",
      link: "https://courses.cognitiveclass.ai/certificates/c22d62e8a2104c1499b496ed4d4a9fc5",
      iconName: "FaCertificate"
    },
  ];
}
