import { ContactMe } from "../types";

export async function getContactMe(): Promise<ContactMe> {
  return {
    name: "Abhinav N Devadiga",
    profilePicture: {
      url: "/profile.jpg"
    },
    title: "Contact Me",
    summary: "Feel free to reach out for opportunities",
    companyUniversity: "B.E / B.Tech – Computer Science",
    linkedinLink: "https://www.linkedin.com/in/abhinav-n-devadiga-726699288",
    email: "abhinavdevadiga0@gmail.com",
    phoneNumber: "+91 7619250947"
  };
}
