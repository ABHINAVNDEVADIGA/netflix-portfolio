import { TimelineItem } from "../types";

export async function getTimeline(): Promise<TimelineItem[]> {
  return [
    {
      title: "Bachelor of Engineering",
      timelineType: "education",
      name: "B.E – Computer Science & Engineering",
      techStack: "Java, Python, Data Structures, Web Development, AI/ML",
      summaryPoints: [
        "Currently pursuing final year B.E in Computer Science",
        "Strong foundation in programming, DSA, and core CS subjects",
        "Hands-on experience with projects in AI, ML, and Web Development"
      ],
      dateRange: "2022 – 2026",
    },
    {
      title: "Pre-University Education",
      timelineType: "education",
      name: "Sri Venkataramana PU College (SVPU)",
      techStack: "Physics, Chemistry, Mathematics, Computer Science",
      summaryPoints: [
        "Completed 2nd PU with PCMCS specialization",
        "Secured 93% aggregate",
        "Developed strong analytical and problem-solving skills"
      ],
      dateRange: "2020 – 2022",
    },
    {
      title: "Secondary School Education",
      timelineType: "education",
      name: "SVEMS School",
      techStack: "Mathematics, Science, Computer Basics",
      summaryPoints: [
        "Completed SSLC with 90% aggregate",
        "Built strong fundamentals in mathematics and science"
      ],
      dateRange: "2019 – 2020",
    }
  ];
}
