import type { ClientMarkName } from "@/components/icons/client-marks";

export type Client = {
  name: string;
  mark: ClientMarkName;
};

/**
 * Names shown in the "trusted by" strip. Replace with real client names and
 * swap the `mark` for a supplied logo when one is available.
 */
export const clients: Client[] = [
  { name: "Northwind", mark: "northwind" },
  { name: "Vantage", mark: "vantage" },
  { name: "Orbital", mark: "orbital" },
  { name: "Lumen Co", mark: "lumen" },
  { name: "Bridgepoint", mark: "bridgepoint" },
  { name: "Kestrel", mark: "kestrel" },
  { name: "Halcyon", mark: "halcyon" },
  { name: "Ironwood", mark: "ironwood" },
];
