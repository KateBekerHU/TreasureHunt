import { z } from "zod";

export const coordinatesSchema = z.object({
  lat: z.number(),
  lng: z.number(),
});

export type Coordinates = z.infer<typeof coordinatesSchema>;

export const huntStopSchema = z.object({
  id: z.number(),
  title: z.string(),
  clue: z.string(),
  locationName: z.string(),
  prize: z.string(),
  qrCode: z.string(),
  coordinates: coordinatesSchema,
});

export type HuntStop = z.infer<typeof huntStopSchema>;

export const huntProgressSchema = z.object({
  currentStop: z.number(),
  completedStops: z.array(z.number()),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
});

export type HuntProgress = z.infer<typeof huntProgressSchema>;
