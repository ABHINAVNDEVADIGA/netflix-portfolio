import { WorkPermit } from "../types";

export async function getWorkPermit(): Promise<WorkPermit> {
  return {
    visaStatus: "Not Required",
    expiryDate: new Date("2030-01-01"),
    summary: "Eligible to work in India",
    additionalInfo: "Indian Citizen"
  };
}
