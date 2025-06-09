import { CheckCircle } from "lucide-react";

import { DollarSign, Users } from "lucide-react";

import { Clock } from "lucide-react";

export const NAV_LINKS = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },

  //   {
  //     label: "Contact",
  //     href: "/contact",
  //   },
  // {
  //   label: "Features",
  //   href: "#features",
  // },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
];

export const SECTION_HEADER_DESCRIPTIONS = {
  about: {
    title: "About Us",
    description:
      "Learn more about Tulboxx, our mission, and the passionate team behind the platform.",
  },
  pricing: {
    title: "Simple, Transparent Pricing",
    description: "Choose the perfect plan for your business needs",
  },
  contact: {
    title: "Contact",
    description: "Get in touch with us for any questions or inquiries.",
  },
  features: {
    title: "Features",
    description: "Discover the features that make Tulboxx stand out.",
  },
  industries: {
    title: "Industries",
    description: "Explore the industries that Tulboxx serves.",
  },
  blogs: {
    title: "Latest Insights & Updates",
    description:
      "Stay informed with the latest trends, tips, and best practices in the contracting industry.",
  },
};

export const INDUSTRIES = [
  "General Contractor",
  "Residential Construction",
  "Insulation",
  "Landscaping",
  "Masonry",
  "Painting",
  "Plastering",
  "Carpentry",
  "Decking",
  "Drywall",
  "Electrical",
  "Fencing",
  "Flooring",
  "Handyman",
  "Plumbing",
  "HVAC",
  "Remodeling",
  "Roofing",
  "Tiling",
  "Windows & Doors",
];

export const TRADE_CONTENT = {
  "general-contractor": {
    title: "General Contractors",
    description: "Streamline your construction projects from start to finish",
    features: [
      "Project management and scheduling",
      "Subcontractor coordination",
      "Material tracking and ordering",
      "Client communication portal",
      "Progress reporting and documentation",
    ],
    benefits: [
      {
        title: "Save 15+ Hours Weekly",
        description: "Automate routine tasks and streamline project management",
        icon: Clock,
      },
      {
        title: "Increase Profit Margins",
        description: "Better cost tracking and accurate estimates",
        icon: DollarSign,
      },
      {
        title: "Improve Client Satisfaction",
        description: "Professional communication and transparent updates",
        icon: Users,
      },
    ],
    cta: "Start Managing Projects Better",
  },
  "residential-construction": {
    title: "Residential Construction",
    description: "Build homes with confidence and efficiency",
    features: [
      "Home building project templates",
      "Client portal for selections",
      "Material and labor cost tracking",
      "Progress photo documentation",
      "Warranty management",
    ],
    benefits: [
      {
        title: "Faster Project Completion",
        description: "Streamlined workflows and better coordination",
        icon: Clock,
      },
      {
        title: "Higher Quality Standards",
        description: "Built-in quality control checkpoints",
        icon: CheckCircle,
      },
      {
        title: "Better Client Experience",
        description: "Transparent communication and updates",
        icon: Users,
      },
    ],
    cta: "Transform Your Home Building Process",
  },
  insulation: {
    title: "Insulation",
    description: "Optimize energy efficiency and comfort in every project",
    features: [
      "Energy efficiency assessments",
      "Material selection and tracking",
      "Installation scheduling",
      "Quality control checkpoints",
      "Energy savings reporting",
    ],
    benefits: [
      {
        title: "Reduce Energy Costs",
        description:
          "Help clients save on utility bills with proper insulation",
        icon: DollarSign,
      },
      {
        title: "Faster Installation",
        description: "Streamlined processes for quicker project completion",
        icon: Clock,
      },
      {
        title: "Better Quality Control",
        description: "Ensure proper installation and maximum efficiency",
        icon: CheckCircle,
      },
    ],
    cta: "Optimize Your Insulation Business",
  },
  landscaping: {
    title: "Landscaping",
    description: "Create and maintain beautiful outdoor spaces",
    features: [
      "Design and planning tools",
      "Seasonal maintenance scheduling",
      "Equipment and material tracking",
      "Client communication portal",
      "Photo documentation",
    ],
    benefits: [
      {
        title: "Efficient Scheduling",
        description: "Optimize routes and maintenance schedules",
        icon: Clock,
      },
      {
        title: "Grow Your Business",
        description: "Attract more clients with professional management",
        icon: DollarSign,
      },
      {
        title: "Better Client Relationships",
        description: "Keep clients informed and satisfied",
        icon: Users,
      },
    ],
    cta: "Transform Your Landscaping Business",
  },
  masonry: {
    title: "Masonry",
    description: "Build lasting structures with precision and efficiency",
    features: [
      "Project estimation tools",
      "Material calculation and tracking",
      "Progress documentation",
      "Client communication portal",
      "Quality control checkpoints",
    ],
    benefits: [
      {
        title: "Accurate Estimates",
        description: "Calculate materials and costs precisely",
        icon: DollarSign,
      },
      {
        title: "Project Efficiency",
        description: "Streamline workflow and reduce delays",
        icon: Clock,
      },
      {
        title: "Quality Assurance",
        description: "Maintain high standards in every project",
        icon: CheckCircle,
      },
    ],
    cta: "Build Your Masonry Business",
  },
  painting: {
    title: "Painting",
    description: "Deliver flawless finishes with professional management",
    features: [
      "Color selection tools",
      "Surface preparation tracking",
      "Material estimation",
      "Progress documentation",
      "Client approval system",
    ],
    benefits: [
      {
        title: "Faster Project Completion",
        description: "Optimize workflow and reduce downtime",
        icon: Clock,
      },
      {
        title: "Better Material Management",
        description: "Accurate estimates and reduced waste",
        icon: DollarSign,
      },
      {
        title: "Client Satisfaction",
        description: "Deliver consistent, high-quality results",
        icon: Users,
      },
    ],
    cta: "Paint Your Success Story",
  },
  plastering: {
    title: "Plastering",
    description: "Achieve perfect finishes with professional tools",
    features: [
      "Surface assessment tools",
      "Material calculation",
      "Progress tracking",
      "Quality control checkpoints",
      "Client communication portal",
    ],
    benefits: [
      {
        title: "Precise Estimates",
        description: "Calculate materials and costs accurately",
        icon: DollarSign,
      },
      {
        title: "Efficient Workflow",
        description: "Streamline processes and reduce delays",
        icon: Clock,
      },
      {
        title: "Quality Results",
        description: "Ensure consistent, professional finishes",
        icon: CheckCircle,
      },
    ],
    cta: "Perfect Your Plastering Business",
  },
  carpentry: {
    title: "Carpentry",
    description: "Build and install with precision and efficiency",
    features: [
      "Project planning tools",
      "Material estimation",
      "Installation scheduling",
      "Progress documentation",
      "Client approval system",
    ],
    benefits: [
      {
        title: "Accurate Measurements",
        description: "Reduce errors and material waste",
        icon: DollarSign,
      },
      {
        title: "Efficient Workflow",
        description: "Optimize processes and save time",
        icon: Clock,
      },
      {
        title: "Client Satisfaction",
        description: "Deliver quality work on schedule",
        icon: Users,
      },
    ],
    cta: "Build Your Carpentry Business",
  },
  decking: {
    title: "Decking",
    description: "Create beautiful outdoor spaces with professional tools",
    features: [
      "Design and planning tools",
      "Material estimation",
      "Installation scheduling",
      "Progress documentation",
      "Client communication portal",
    ],
    benefits: [
      {
        title: "Precise Planning",
        description: "Accurate measurements and material estimates",
        icon: DollarSign,
      },
      {
        title: "Efficient Installation",
        description: "Streamline workflow and reduce delays",
        icon: Clock,
      },
      {
        title: "Quality Results",
        description: "Ensure durable, beautiful decks",
        icon: CheckCircle,
      },
    ],
    cta: "Build Better Decks",
  },
  drywall: {
    title: "Drywall",
    description: "Install and finish with precision and efficiency",
    features: [
      "Project estimation tools",
      "Material calculation",
      "Installation scheduling",
      "Progress tracking",
      "Quality control checkpoints",
    ],
    benefits: [
      {
        title: "Accurate Estimates",
        description: "Calculate materials and costs precisely",
        icon: DollarSign,
      },
      {
        title: "Faster Installation",
        description: "Optimize workflow and reduce delays",
        icon: Clock,
      },
      {
        title: "Quality Finishes",
        description: "Ensure professional results every time",
        icon: CheckCircle,
      },
    ],
    cta: "Transform Your Drywall Business",
  },
  electrical: {
    title: "Electrical",
    description: "Power up your electrical contracting business",
    features: [
      "Project estimation tools",
      "Material tracking",
      "Safety compliance tracking",
      "Client communication portal",
      "Progress documentation",
    ],
    benefits: [
      {
        title: "Safety First",
        description: "Track compliance and safety measures",
        icon: CheckCircle,
      },
      {
        title: "Efficient Workflow",
        description: "Streamline processes and reduce delays",
        icon: Clock,
      },
      {
        title: "Better Planning",
        description: "Accurate estimates and material tracking",
        icon: DollarSign,
      },
    ],
    cta: "Power Up Your Business",
  },
  fencing: {
    title: "Fencing",
    description: "Install and maintain fences with professional tools",
    features: [
      "Design and planning tools",
      "Material estimation",
      "Installation scheduling",
      "Progress tracking",
      "Client communication portal",
    ],
    benefits: [
      {
        title: "Accurate Estimates",
        description: "Calculate materials and costs precisely",
        icon: DollarSign,
      },
      {
        title: "Efficient Installation",
        description: "Optimize workflow and reduce delays",
        icon: Clock,
      },
      {
        title: "Client Satisfaction",
        description: "Deliver quality work on schedule",
        icon: Users,
      },
    ],
    cta: "Build Better Fences",
  },
  flooring: {
    title: "Flooring",
    description: "Install beautiful floors with professional management",
    features: [
      "Material selection tools",
      "Installation planning",
      "Progress tracking",
      "Quality control checkpoints",
      "Client communication portal",
    ],
    benefits: [
      {
        title: "Precise Planning",
        description: "Accurate measurements and material estimates",
        icon: DollarSign,
      },
      {
        title: "Efficient Installation",
        description: "Streamline workflow and reduce delays",
        icon: Clock,
      },
      {
        title: "Quality Results",
        description: "Ensure professional finishes every time",
        icon: CheckCircle,
      },
    ],
    cta: "Transform Your Flooring Business",
  },
  handyman: {
    title: "Handyman",
    description: "Manage multiple projects with ease",
    features: [
      "Project scheduling",
      "Client management",
      "Material tracking",
      "Progress documentation",
      "Service area management",
    ],
    benefits: [
      {
        title: "Efficient Scheduling",
        description: "Optimize routes and service times",
        icon: Clock,
      },
      {
        title: "Better Organization",
        description: "Manage multiple projects effectively",
        icon: CheckCircle,
      },
      {
        title: "Client Satisfaction",
        description: "Deliver reliable service every time",
        icon: Users,
      },
    ],
    cta: "Grow Your Handyman Business",
  },
  plumbing: {
    title: "Plumbing",
    description: "Manage plumbing projects with professional tools",
    features: [
      "Project estimation",
      "Material tracking",
      "Emergency service scheduling",
      "Client communication portal",
      "Progress documentation",
    ],
    benefits: [
      {
        title: "Quick Response",
        description: "Efficient emergency service scheduling",
        icon: Clock,
      },
      {
        title: "Accurate Estimates",
        description: "Calculate costs and materials precisely",
        icon: DollarSign,
      },
      {
        title: "Client Trust",
        description: "Build long-term relationships",
        icon: Users,
      },
    ],
    cta: "Plumb Your Success",
  },
  hvac: {
    title: "HVAC",
    description: "Keep clients comfortable with professional management",
    features: [
      "System assessment tools",
      "Maintenance scheduling",
      "Emergency service tracking",
      "Client communication portal",
      "Progress documentation",
    ],
    benefits: [
      {
        title: "Efficient Service",
        description: "Optimize maintenance schedules",
        icon: Clock,
      },
      {
        title: "Better Planning",
        description: "Accurate system assessments",
        icon: CheckCircle,
      },
      {
        title: "Client Satisfaction",
        description: "Ensure comfort and reliability",
        icon: Users,
      },
    ],
    cta: "Cool Your Business Growth",
  },
  remodeling: {
    title: "Remodeling",
    description: "Transform spaces with professional tools",
    features: [
      "Project planning tools",
      "Material estimation",
      "Progress tracking",
      "Client communication portal",
      "Quality control checkpoints",
    ],
    benefits: [
      {
        title: "Accurate Planning",
        description: "Detailed project estimates and timelines",
        icon: DollarSign,
      },
      {
        title: "Efficient Workflow",
        description: "Streamline processes and reduce delays",
        icon: Clock,
      },
      {
        title: "Client Satisfaction",
        description: "Deliver quality transformations",
        icon: Users,
      },
    ],
    cta: "Transform Your Remodeling Business",
  },
  roofing: {
    title: "Roofing",
    description: "Protect homes with professional roofing services",
    features: [
      "Roof assessment tools",
      "Material estimation",
      "Installation scheduling",
      "Progress tracking",
      "Client communication portal",
    ],
    benefits: [
      {
        title: "Accurate Estimates",
        description: "Calculate materials and costs precisely",
        icon: DollarSign,
      },
      {
        title: "Efficient Installation",
        description: "Optimize workflow and reduce delays",
        icon: Clock,
      },
      {
        title: "Quality Results",
        description: "Ensure durable, weatherproof roofs",
        icon: CheckCircle,
      },
    ],
    cta: "Roof Your Success",
  },
  tiling: {
    title: "Tiling",
    description: "Create beautiful tile installations with professional tools",
    features: [
      "Design and planning tools",
      "Material estimation",
      "Installation scheduling",
      "Progress tracking",
      "Client communication portal",
    ],
    benefits: [
      {
        title: "Precise Planning",
        description: "Accurate measurements and material estimates",
        icon: DollarSign,
      },
      {
        title: "Efficient Installation",
        description: "Streamline workflow and reduce delays",
        icon: Clock,
      },
      {
        title: "Quality Results",
        description: "Ensure professional finishes every time",
        icon: CheckCircle,
      },
    ],
    cta: "Tile Your Way to Success",
  },
  "windows-doors": {
    title: "Windows & Doors",
    description: "Install and maintain with precision and efficiency",
    features: [
      "Product selection tools",
      "Installation planning",
      "Progress tracking",
      "Quality control checkpoints",
      "Client communication portal",
    ],
    benefits: [
      {
        title: "Accurate Measurements",
        description: "Ensure perfect fit every time",
        icon: CheckCircle,
      },
      {
        title: "Efficient Installation",
        description: "Streamline workflow and reduce delays",
        icon: Clock,
      },
      {
        title: "Client Satisfaction",
        description: "Deliver quality installations",
        icon: Users,
      },
    ],
    cta: "Open New Opportunities",
  },
};
