import { IMG, type ImageKey } from "../assets/img";

export const CONTACT = {
  phone: "+91 7995150298",
  phoneDisplay: "+91 79951 50298",
  phoneHref: "tel:+917995150298",
  whatsapp:
    "https://wa.me/917995150298?text=Hi%20Aravindh%20Invisible%20Grills%2C%20I%20want%20a%20free%20quote%20for%20my%20home.",
  email: "aravindhinvisiblegrills@gmail.com",
  emailHref: "mailto:aravindhinvisiblegrills@gmail.com",
  coverage: "Serving all of Hyderabad & Telangana",
  hours: "Monday – Sunday: 8:00 AM – 9:00 PM",
  address: "Hyderabad, Telangana",
};

export const waLink = (service: string) =>
  `https://wa.me/917995150298?text=${encodeURIComponent(
    `Hi, I am interested in ${service}. Please share price details.`
  )}`;

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Areas", href: "#areas" },
  { label: "FAQ", href: "#faq" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const HERO_SLIDES: { image: string; title: string; meta: string; alt: string }[] = [
  {
    image: IMG.heroBalcony,
    title: "Balcony Invisible Grills",
    meta: "15 Yrs Warranty",
    alt: "Invisible Grill for Balconies in Hyderabad",
  },
  {
    image: IMG.bedroomWindow,
    title: "Window Invisible Grills",
    meta: "15 Yrs Warranty",
    alt: "Invisible Grill for Windows in Hyderabad",
  },
  {
    image: IMG.safetyNet,
    title: "Balcony Safety Nets",
    meta: "HDPE",
    alt: "Balcony Safety Nets in Hyderabad",
  },
  {
    image: IMG.birdNet,
    title: "Pets & Monkey Safety Nets",
    meta: "Heavy Duty",
    alt: "Pets and Monkey Safety Nets in Hyderabad",
  },
  {
    image: IMG.familyBalcony,
    title: "Children Safety Nets",
    meta: "Child Safe",
    alt: "Children Safety Nets in Hyderabad",
  },
  {
    image: IMG.birdSpikes,
    title: "Bird & Pigeon Spikes",
    meta: "SS 304",
    alt: "Bird and Pigeon Spikes in Hyderabad",
  },
  {
    image: IMG.heroReference,
    title: "Invisible Grill Balcony",
    meta: "City View",
    alt: "Invisible grill balcony with open city view",
  },
];

export type ServiceCategory =
  | "Invisible Grills"
  | "Safety Nets"
  | "Bird Control"
  | "Sports Nets"
  | "Ceiling Cloth Hangers";

export type Service = {
  title: string;
  image: string;
  badge?: string;
  category: ServiceCategory;
  desc: string;
};

const svc = (
  title: string,
  imageKey: ImageKey,
  category: ServiceCategory,
  desc: string,
  badge?: string
): Service => ({ title, image: IMG[imageKey], category, desc, badge });

export const SERVICES: Service[] = [
  svc(
    "Invisible Grill for Balconies",
    "heroBalcony",
    "Invisible Grills",
    "Add reliable balcony protection without blocking your view. Our high-tensile SS 316 invisible grills provide a clean, modern and elegant safety solution for homes and apartments.",
    "15 Years Warranty"
  ),
  svc(
    "Invisible Grill for Windows",
    "bedroomWindow",
    "Invisible Grills",
    "Protect your windows with sleek and discreet invisible grills that offer added safety while maintaining natural light and outside visibility.",
    "15 Years Warranty"
  ),
  svc(
    "Invisible Grill for Pets Safety",
    "familyBalcony",
    "Invisible Grills",
    "Create a safer environment for your pets with professionally installed invisible grills for balconies and open areas.",
    "15 Years Warranty"
  ),
  svc(
    "Invisible Grill for Child Safety",
    "staircase",
    "Invisible Grills",
    "Improve child safety around balconies and windows with discreet invisible grills designed to provide protection without compromising the view.",
    "15 Years Warranty"
  ),
  svc(
    "Invisible Grill for Bird Control",
    "birdSpikes",
    "Invisible Grills",
    "Help protect balconies and open spaces from unwanted bird entry with discreet and neatly installed invisible grill solutions.",
    "15 Years Warranty"
  ),
  svc(
    "Balcony Safety Nets",
    "safetyNet",
    "Safety Nets",
    "Strong and neatly installed balcony safety nets for children, pets and high-rise homes."
  ),
  svc(
    "Building Safety Nets",
    "buildingNet",
    "Safety Nets",
    "Reliable safety net solutions for residential and commercial buildings across Hyderabad."
  ),
  svc(
    "Car Parking Safety Nets",
    "parkingNet",
    "Safety Nets",
    "Practical safety netting for open and covered parking areas in apartments and buildings."
  ),
  svc(
    "Children Safety Nets",
    "familyBalcony",
    "Safety Nets",
    "Added protection for children around balconies, windows, staircases and open spaces."
  ),
  svc(
    "Coconut Tree Safety Nets",
    "safetyNet",
    "Safety Nets",
    "Safety net solutions designed for areas around coconut trees and nearby properties."
  ),
  svc(
    "Construction Safety Nets",
    "buildingNet",
    "Safety Nets",
    "Professional safety nets for construction sites and elevated working areas across Hyderabad."
  ),
  svc(
    "Duct Area Covering Safety Nets",
    "serviceDuct",
    "Safety Nets",
    "Customized nets for covering and securing open duct areas in buildings and apartments."
  ),
  svc(
    "Industrial Safety Nets",
    "parkingNet",
    "Safety Nets",
    "Heavy-duty safety net solutions for factories, warehouses and industrial spaces."
  ),
  svc(
    "Open Area Safety Nets",
    "buildingNet",
    "Safety Nets",
    "Customized safety nets for terraces, open areas and exposed spaces across Hyderabad."
  ),
  svc(
    "Pets & Monkey Safety Nets",
    "birdNet",
    "Safety Nets",
    "Protective netting for balconies and open areas to help keep pets safe and prevent monkey entry."
  ),
  svc(
    "Staircase Safety Nets",
    "staircase",
    "Safety Nets",
    "Professional staircase netting for homes, apartments, schools and commercial buildings."
  ),
  svc(
    "Swimming Pool Nets",
    "poolNet",
    "Safety Nets",
    "Additional protection around swimming pools for residential and commercial properties."
  ),
  svc(
    "All Sports Practice Nets",
    "cricketNet",
    "Sports Nets",
    "Customized practice nets for cricket, football and other sports training areas across Hyderabad."
  ),
  svc(
    "Anti Bird Nets",
    "birdNet",
    "Bird Control",
    "Keep balconies cleaner and protected with professionally installed anti-bird nets."
  ),
  svc(
    "Bird & Pigeon Control Spikes",
    "birdSpikes",
    "Bird Control",
    "Help prevent pigeons from settling on ledges, windows, AC units and other areas."
  ),
  svc(
    "Bird Protection Nets",
    "birdNet",
    "Bird Control",
    "Protect balconies, terraces and open areas from unwanted bird entry with quality netting."
  ),
  svc(
    "Cricket Practice Nets",
    "cricketNet",
    "Sports Nets",
    "Professional cricket nets for academies, schools, clubs and private practice areas across Hyderabad."
  ),
  svc(
    "Pigeon Safety Nets",
    "birdNet",
    "Bird Control",
    "Keep balcony spaces cleaner and more comfortable with professionally fitted pigeon safety nets."
  ),
  svc(
    "Terrace Cricket Nets",
    "cricketNet",
    "Sports Nets",
    "Transform your terrace into a practical cricket practice area with customized net installation."
  ),
  svc(
    "Football Stop Nets",
    "footballNet",
    "Sports Nets",
    "Durable football stop nets for practice grounds, training areas and sports facilities across Hyderabad."
  ),
  svc(
    "Ceiling Cloth Hangers",
    "ceilingHanger",
    "Ceiling Cloth Hangers",
    "Make better use of your balcony or utility space with a convenient ceiling-mounted cloth hanger. Ideal for modern homes and apartments."
  ),
  svc(
    "Manual Ceiling Cloth Hangers",
    "ceilingHanger",
    "Ceiling Cloth Hangers",
    "Easy-to-use manual ceiling cloth hangers designed to provide convenient clothes drying while saving valuable floor and balcony space."
  ),
  svc(
    "SS Ceiling Cloth Hangers",
    "cableDetail",
    "Ceiling Cloth Hangers",
    "Durable stainless steel ceiling cloth hangers offering a neat, strong and long-lasting solution for everyday clothes drying."
  ),
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  "Invisible Grills",
  "Safety Nets",
  "Bird Control",
  "Sports Nets",
  "Ceiling Cloth Hangers",
];

export const WHY_US = [
  {
    title: "100% High Tensile Strength",
    icon: "shield",
    copy: "Marine-grade SS 316 wire tensioned on aluminium tracks, engineered to absorb heavy impact loads safely.",
  },
  {
    title: "Anti-Rust & Weatherproof",
    icon: "sun",
    copy: "A transparent nylon sheath over every cable blocks rust, rain damage and sun discolouration for years.",
  },
  {
    title: "Unobstructed Panoramic Views",
    icon: "eye",
    copy: "Cables virtually disappear from a distance, preserving daylight, airflow and your open-sky view.",
  },
  {
    title: "Quick Professional Fitting",
    icon: "bolt",
    copy: "Neat, dust-controlled installation finished within hours by our own trained technicians — zero mess left behind.",
  },
  {
    title: "5 Years Comprehensive Warranty",
    icon: "award",
    copy: "Long-term peace of mind with full warranty cover on cables, tracks and workmanship across Hyderabad.",
  },
  {
    title: "Best Factory-Direct Price",
    icon: "tag",
    copy: "Honest, transparent billing with free measurement and a written quote before work begins. No surprises.",
  },
];

export type GalleryItem = {
  src: string;
  title: string;
  category: "Invisible Grills" | "Safety Nets" | "Bird Control" | "Sports Nets" | "Ceiling Cloth Hangers";
};

export const GALLERY: GalleryItem[] = [
  { src: IMG.heroBalcony, title: "Balcony Invisible Grill Installation, Gachibowli", category: "Invisible Grills" },
  { src: IMG.bedroomWindow, title: "Window Invisible Grill Installation, Kondapur", category: "Invisible Grills" },
  { src: IMG.heroReference, title: "High-Rise Balcony Invisible Grills, Kokapet", category: "Invisible Grills" },
  { src: IMG.cableDetail, title: "Modern Balcony Invisible Grills, Financial District", category: "Invisible Grills" },
  { src: IMG.familyBalcony, title: "Balcony Invisible Grills for Kids, Tellapur", category: "Invisible Grills" },
  { src: IMG.staircase, title: "Staircase Invisible Grill Installation, Narsingi", category: "Invisible Grills" },
  { src: IMG.safetyNet, title: "Balcony Safety Net Installation, Miyapur", category: "Safety Nets" },
  { src: IMG.buildingNet, title: "Children Safety Net on High-Rise Balcony", category: "Safety Nets" },
  { src: IMG.serviceDuct, title: "Duct Area Covering Safety Net, Uppal", category: "Safety Nets" },
  { src: IMG.parkingNet, title: "Car Parking Safety Net, Kompally", category: "Safety Nets" },
  { src: IMG.poolNet, title: "Swimming Pool Safety Net, Shamshabad", category: "Safety Nets" },
  { src: IMG.birdNet, title: "Balcony Safety Net for Pets, Attapur", category: "Safety Nets" },
  { src: IMG.birdSpikes, title: "Bird & Pigeon Control Spikes, AC Ledge", category: "Bird Control" },
  { src: IMG.birdNet, title: "Anti Bird Net Installation, Madhapur", category: "Bird Control" },
  { src: IMG.buildingNet, title: "Pigeon Safety Net, Secunderabad", category: "Bird Control" },
  { src: IMG.cricketNet, title: "Cricket Practice Net, Gachibowli", category: "Sports Nets" },
  { src: IMG.footballNet, title: "Football Stop Net, Kompally", category: "Sports Nets" },
  { src: IMG.cricketNet, title: "Terrace Cricket Net Setup", category: "Sports Nets" },
  { src: IMG.ceilingHanger, title: "SS Ceiling Cloth Hanger, Kokapet", category: "Ceiling Cloth Hangers" },
  { src: IMG.ceilingHanger, title: "Ceiling Cloth Hanger, Miyapur", category: "Ceiling Cloth Hangers" },
];

export const GALLERY_FILTERS = [
  "All",
  "Invisible Grills",
  "Safety Nets",
  "Bird Control",
  "Sports Nets",
  "Ceiling Cloth Hangers",
] as const;

export const LOCALITY_GROUPS = [
  {
    title: "West Hyderabad",
    areas: ["Gachibowli", "HITEC City", "Madhapur", "Kondapur", "Kukatpally", "Miyapur", "Financial District", "Kokapet", "Narsingi", "Tellapur"],
  },
  {
    title: "North & Central Hyderabad",
    areas: ["Secunderabad", "Begumpet", "Banjara Hills", "Jubilee Hills", "Somajiguda", "Ameerpet", "Kompally", "Alwal", "Malkajgiri", "Bowenpally"],
  },
  {
    title: "East & South Hyderabad",
    areas: ["Uppal", "LB Nagar", "Nagole", "Dilsukhnagar", "Habsiguda", "Tarnaka", "Attapur", "Mehdipatnam", "Rajendranagar", "Shamshabad"],
  },
];

export const FAQS = [
  {
    q: "What are invisible grills and how do they work?",
    a: "Invisible grills are high-tensile SS 316 marine-grade stainless steel cables tensioned on heavy aluminium tracks across balconies, windows and open spaces. From a few metres away they are virtually invisible, preserving your outside view and ventilation while providing up to 400 kg load-bearing protection.",
  },
  {
    q: "Do invisible grills come with a warranty?",
    a: "Yes! Our SS 316 invisible grills come with a 15-year product warranty on the stainless steel cables, ensuring complete peace of mind and lifelong safety.",
  },
  {
    q: "How can I get a quotation for invisible grills or safety nets?",
    a: "We offer completely free doorstep measurements anywhere in Hyderabad and Telangana. Our technician will visit your site, measure your space, and provide an exact written quote with zero hidden charges.",
  },
  {
    q: "Are invisible grills safe for children and pets?",
    a: "Absolutely. We provide customized cable spacing (2-inch, 3-inch, or 4-inch) so children cannot climb or slip through, and pets cannot squeeze through. The cables have high tensile strength and smooth nylon coatings.",
  },
  {
    q: "Will invisible grills rust over time in Hyderabad's weather?",
    a: "No. We use genuine marine-grade SS 316 stainless steel with a protective transparent nylon sheath that prevents rust, sun discoloration, and weathering for decades.",
  },
  {
    q: "How long does installation take?",
    a: "Most residential balcony and window installations are completed within 2 to 4 hours on the same day as measurement. Our technicians work neatly and leave zero mess.",
  },
  {
    q: "Do you install safety nets and bird spikes across all of Hyderabad?",
    a: "Yes, we provide doorstep measurement and same-day installation across all areas of Greater Hyderabad and Secunderabad, including Gachibowli, Kondapur, Kukatpally, Miyapur, Hitec City, Uppal, and all surrounding localities.",
  },
];

export type Review = {
  quote: string;
  name: string;
  initials: string;
  location: string;
  service: string;
};

export const REVIEWS: Review[] = [
  {
    quote:
      "Aravind Invisible Grills transformed our balcony beautifully. Premium quality SS 316 cables, neat installation, and the work was completed exactly on schedule.",
    name: "Rahul Sharma",
    initials: "RS",
    location: "Gachibowli, Hyderabad",
    service: "Balcony Invisible Grills",
  },
  {
    quote:
      "We installed child safety invisible grills and couldn't be happier. Strong materials, elegant design, and complete peace of mind for our family.",
    name: "Priya Reddy",
    initials: "PR",
    location: "Kondapur, Hyderabad",
    service: "Child Safety Invisible Grills",
  },
  {
    quote:
      "Outstanding workmanship with high-quality stainless steel cables. The team was professional, punctual, and delivered exactly as promised.",
    name: "Sandeep Kumar",
    initials: "SK",
    location: "Madhapur, Hyderabad",
    service: "Window Invisible Grills",
  },
  {
    quote:
      "The safety net was fitted neatly around our duct area within a couple of hours. Price was exactly as quoted and the team cleaned up after themselves.",
    name: "Anitha Rao",
    initials: "AR",
    location: "Kokapet, Hyderabad",
    service: "Duct Area Covering Safety Nets",
  },
  {
    quote:
      "We have two cats and were worried about the balcony. The team suggested the right spacing and the cats are safe — the view is completely unaffected.",
    name: "Vikram Deshmukh",
    initials: "VD",
    location: "Financial District, Hyderabad",
    service: "Invisible Grill for Pets Safety",
  },
  {
    quote:
      "They installed anti-bird nets and spikes across our apartment block. Clean work, fair pricing and a very responsive team throughout.",
    name: "Imran Ali",
    initials: "IA",
    location: "Mehdipatnam, Hyderabad",
    service: "Anti Bird Nets",
  },
];

export const FIELD_OPTIONS = SERVICES.map((s) => s.title).concat("Other Safety Solutions");

export const TOP_STATS = [
  { value: "5,000+", label: "Installations Done" },
  { value: "28", label: "Safety Services" },
  { value: "5 Yrs", label: "Warranty Cover" },
  { value: "30+", label: "Areas Served in Hyderabad" },
];
