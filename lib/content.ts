export type Service = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "managed-it",
    title: "Managed IT support",
    summary:
      "Day-to-day support for your people and devices, run by named engineers who know your estate.",
    detail:
      "We take the ticket queue, the patching and the device lifecycle off your plate, with a response time we publish and report against every month.",
    points: [
      "Helpdesk with a 15-minute first response",
      "Patching, backup monitoring and device lifecycle",
      "Monthly service report and quarterly review",
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud & infrastructure",
    summary:
      "Design, migration and operation of workloads on Azure, AWS or your own private estate.",
    detail:
      "Whether you are lifting a server room into the cloud or tidying a decade of accumulated infrastructure, we plan the cutover so the business does not notice it.",
    points: [
      "Landing zones, identity and network foundations",
      "Migration planning, rehearsal and cutover",
      "Cost and performance optimisation reviews",
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    summary:
      "Practical security controls that hold up against a real attack and your insurer's questionnaire.",
    detail:
      "We start with a baseline you can actually maintain, close the gaps that matter first, then rehearse what happens when something goes wrong.",
    points: [
      "Security baseline and Microsoft 365 hardening",
      "Phishing simulation and awareness training",
      "Incident response runbooks and tabletop exercises",
    ],
  },
  {
    slug: "software",
    title: "Software development",
    summary:
      "Custom web applications and integrations that replace the spreadsheet at the centre of your operation.",
    detail:
      "Small, senior teams work in short cycles, so you see working software early and the scope stays tied to the outcome you asked for.",
    points: [
      "Discovery, scoping and fixed milestones",
      "Modern web applications and APIs",
      "Integrations with finance, CRM and line-of-business systems",
    ],
  },
  {
    slug: "data",
    title: "Data & analytics",
    summary:
      "Operational data turned into reporting your leadership team reads without asking for a translation.",
    detail:
      "We model the data once, in one place, so every dashboard and board pack draws on the same numbers.",
    points: [
      "Warehouse and reporting models",
      "Power BI dashboards and board packs",
      "Data quality and reconciliation reviews",
    ],
  },
  {
    slug: "strategy",
    title: "IT strategy & vCIO",
    summary:
      "A technology roadmap tied to your budget, your risk appetite and your growth plans.",
    detail:
      "An experienced technologist in your leadership meetings, translating business plans into decisions about systems, suppliers and spend.",
    points: [
      "Technology audit and three-year roadmap",
      "Budget planning and vendor management",
      "Compliance and certification readiness",
    ],
  },
];

export const reasons = [
  {
    title: "Named engineers, not a queue",
    body: "You work with the same people each month. They know your systems, your sites and the workarounds your team relies on.",
  },
  {
    title: "Documented by default",
    body: "Every environment we touch is documented as we go, so you are never locked in by knowledge we failed to hand over.",
  },
  {
    title: "Decisions tied to outcomes",
    body: "Each recommendation comes with a cost, a risk and the business outcome it protects. You decide with the numbers in front of you.",
  },
];

export const values = [
  {
    title: "Straight answers",
    body: "If a system is not worth fixing, we say so. If a project is going to slip, you hear it before the deadline, not after.",
  },
  {
    title: "Engineer-led",
    body: "The people who design your environment are the people who support it. Nothing is handed to a script reader.",
  },
  {
    title: "Security as a habit",
    body: "Controls only count if they survive a busy Tuesday. We favour fewer, enforced controls over long policy documents.",
  },
  {
    title: "Measured service",
    body: "Response times, backup success and project milestones are reported monthly so the service is visible, not assumed.",
  },
];

export const steps = [
  {
    title: "Understand",
    body: "A short audit of your systems, contracts and pain points, plus interviews with the people who use them.",
  },
  {
    title: "Design",
    body: "A written plan with priorities, costs and risks, agreed before any work starts.",
  },
  {
    title: "Deliver",
    body: "Work in short, visible milestones with a rollback plan for anything that touches production.",
  },
  {
    title: "Support",
    body: "Ongoing monitoring, patching and reviews so the estate keeps improving after the project closes.",
  },
];

export const stats = [
  { value: "99.95%", label: "Monitored service uptime" },
  { value: "24/7", label: "Escalation cover" },
  { value: "12 yrs", label: "Average engineer experience" },
  { value: "180+", label: "Organisations supported" },
];

export const contact = {
  email: "hello@pwksolutionlimited.com",
  phone: "+44 20 7946 0521",
  location: "Borough, London SE1",
  hours: "Monday to Friday, 08:00 - 18:00 (GMT)",
};
