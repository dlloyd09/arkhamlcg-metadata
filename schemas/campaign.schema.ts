import { z } from "zod";

export const campaignSchema = z.strictObject({
    code: z.string().describe("Unique code identifying the campaign."),
    cycle_code: z
        .string()
        .describe("Code of the cycle containing the campaign."),
    name: z.string().describe("Display name of the campaign."),
    scenarios: z
        .array(z.string())
        .describe("Codes of the scenarios included in the campaign."),
    variant_of_code: z
        .string()
        .optional()
        .describe("Code of the campaign that this campaign is a variant of."),
});

export type Campaign = z.infer<typeof campaignSchema>;
