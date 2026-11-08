import {
  AirVent,
  ChefHat,
  ClipboardCheck,
  Snowflake,
  Warehouse,
} from "lucide-react";
import type { Service } from "@/types";
import { images } from "./images";

/**
 * The five Al Zamams services.
 * The homepage cards, the Services page, the footer list and the contact
 * form's "Service Required" dropdown are all built from this list.
 */
export const services: Service[] = [
  {
    slug: "ac-installation",
    title: "AC Installation & Services",
    summary:
      "Installation, servicing and repair of air conditioning systems for commercial and industrial spaces.",
    description:
      "From new air conditioning installations to routine servicing and breakdown repairs, our technicians help keep your premises comfortable and your systems running efficiently. We provide AC installation and AC maintenance in Ajman and across the UAE.",
    features: [
      { title: "Air conditioning installation", text: "Installation of air conditioning units, including positioning, pipework, connections and commissioning." },
      { title: "AC servicing", text: "Cleaning of filters, coils and drains, with checks on refrigerant levels and electrical connections." },
      { title: "AC maintenance", text: "Planned maintenance visits that help reduce breakdowns and keep cooling performance consistent." },
      { title: "Troubleshooting & repair", text: "Diagnosis of cooling faults, leaks, noise and electrical issues, followed by the necessary repairs." },
    ],
    icon: AirVent,
    image: images.acService,
  },
  {
    slug: "chiller-freezer",
    title: "Chiller & Freezer Installation & Service",
    summary:
      "Installation and servicing of commercial chillers, freezers and refrigeration equipment.",
    description:
      "Reliable refrigeration is essential for food, beverage and storage businesses. We install and service commercial chillers and freezers, and carry out the maintenance needed to keep your equipment holding the right temperature.",
    features: [
      { title: "Commercial chiller installation", text: "Installation and setup of chillers for commercial and industrial applications." },
      { title: "Freezer installation", text: "Installation of commercial freezers, including storage and display units." },
      { title: "Refrigeration servicing", text: "Servicing of compressors, condensers, evaporators and controls." },
      { title: "Equipment maintenance", text: "Routine inspections and maintenance to support stable temperatures and equipment life." },
    ],
    icon: Snowflake,
    image: images.freezer,
  },
  {
    slug: "amc",
    title: "Annual Maintenance Contract (AMC)",
    summary:
      "Scheduled preventive maintenance for your air conditioning and refrigeration systems.",
    description:
      "An Annual Maintenance Contract gives you planned, regular care for your cooling equipment. Scheduled visits help identify issues early and keep your systems performing as they should throughout the year.",
    features: [
      { title: "Scheduled preventive maintenance", text: "Regular maintenance visits planned around your operations." },
      { title: "Equipment inspections", text: "Inspection of air conditioning, refrigeration and related equipment." },
      { title: "Maintenance support", text: "Technical support for the equipment covered under your contract." },
      { title: "Cooling performance checks", text: "Checks on temperatures, airflow and system operation during each visit." },
    ],
    icon: ClipboardCheck,
    image: images.maintenance,
  },
  {
    slug: "cold-room",
    title: "Cold Room Installation",
    summary:
      "Cold room design and installation, including insulated panels and refrigeration systems.",
    description:
      "We install cold rooms for businesses that need dependable chilled or frozen storage. Our work covers insulated panel installation and the refrigeration system, followed by maintenance to keep the room operating correctly.",
    features: [
      { title: "Cold room design & installation", text: "Planning the layout and installing cold rooms to suit your storage requirements." },
      { title: "Insulated panel installation", text: "Installation of insulated wall, ceiling and floor panels, doors and sealing." },
      { title: "Refrigeration system installation", text: "Installation of condensing units, evaporators, piping and controls." },
      { title: "Cold room maintenance", text: "Servicing and maintenance of cold room panels, doors and refrigeration systems." },
    ],
    icon: Warehouse,
    image: images.coldRoom,
  },
  {
    slug: "kitchen-equipment",
    title: "Maintenance of All Kitchen Equipment",
    summary:
      "Servicing and maintenance of commercial kitchen and refrigeration equipment.",
    description:
      "Commercial kitchens depend on equipment that works every service. We maintain commercial kitchen equipment, including kitchen refrigeration, to help restaurants, cafés and catering operations avoid unexpected downtime.",
    features: [
      { title: "Kitchen equipment servicing", text: "Servicing of commercial kitchen equipment used in restaurants and catering." },
      { title: "Refrigeration equipment maintenance", text: "Maintenance of under-counter chillers, reach-in fridges, freezers and display units." },
      { title: "Equipment inspection", text: "Inspection of equipment condition and operation to spot issues early." },
      { title: "Troubleshooting & maintenance", text: "Fault finding and maintenance to get equipment back in service." },
    ],
    icon: ChefHat,
    image: images.kitchen,
  },
];
