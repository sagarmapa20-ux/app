export const portfolioData = {
  personal: {
    name: "PROFESSIONAL NAME",
    title: "Cloud Solution Architect",
    tagline: "18 Years of Cloud Excellence",
    description: "Results-driven Cloud Solution Architect with 18 years of extensive IT experience, specializing in designing and implementing cutting-edge cloud solutions. Proven track record in the banking and healthcare domains, adept at addressing complex challenges and delivering scalable, secure, and cost-effective solutions.",
    email: "contact@cloudarchitect.com",
    phone: "+1 (555) 123-4567",
    location: "Global Remote"
  },

  experience: [
    {
      id: 1,
      title: "Cloud Architect and Senior Manager",
      company: "LTIM",
      period: "May 2024 - Present",
      description: "Designing Azure reference architectures for multiple enterprise applications, ensuring scalability, availability, and cost optimization.",
      achievements: [
        "Implemented Infrastructure as Code (IaC) using Terraform integrated with Azure DevOps",
        "Designed and managed network topologies including VNet creation and subnet design", 
        "Delivered cost optimization strategies resulting in significant savings",
        "Executed ExpressRoute failover tests for high availability"
      ]
    },
    {
      id: 2,
      title: "Cloud Solution Architect and Senior Manager",
      company: "Reliance Jio",
      period: "Feb 2021 – May 2024",
      description: "Successfully guided the adoption of cloud solutions for 10+ projects in both GCP and Azure.",
      achievements: [
        "Orchestrated seamless migration of 15+ on-prem applications to cloud",
        "Closed 6 direct opportunities through effective client engagement",
        "Implemented cost module for Cloud Management Portal",
        "Resolved 80+ complex integrations between group companies"
      ]
    },
    {
      id: 3,
      title: "Cloud Architect and Manager",
      company: "CitiusTech",
      period: "May 2019 - Jan 2021",
      description: "Implemented highly secure and compliant cloud solutions for US-based healthcare clients.",
      achievements: [
        "Delivered PaaS services on Philips Health Suite Digital Platform",
        "Led end-to-end DevOps lifecycle integration",
        "Organized hackathons for IIT colleges",
        "Ensured regulatory compliance for healthcare data"
      ]
    },
    {
      id: 4,
      title: "Cloud Engineering Operation Specialist",
      company: "Accenture and Avanade", 
      period: "Dec 2010 - May 2019",
      description: "Established cloud infrastructures for 30+ global clients across Azure, AWS, and GCP.",
      achievements: [
        "Reduced support incidents by 20% through client education",
        "Developed automation tools decreasing manual intervention by 30%",
        "Led DevOps initiatives reducing deployment times",
        "Optimized performance across all cloud platforms"
      ]
    }
  ],

  skills: [
    {
      category: "Cloud Platforms",
      items: ["AWS", "Azure", "Google Cloud Platform", "Multi-Cloud Architecture"]
    },
    {
      category: "Architecture & Design",
      items: ["Cloud Architecture Design", "Disaster Recovery", "Network Design", "Security Implementation"]
    },
    {
      category: "DevOps & Automation",
      items: ["Terraform", "Ansible", "Azure DevOps", "CI/CD Pipelines"]
    },
    {
      category: "Migration & Integration",
      items: ["Cloud Migration", "Infrastructure Migration", "Email System Migration", "VDI Implementation"]
    },
    {
      category: "Security & Compliance",
      items: ["Cloud Security", "Healthcare Compliance", "NSG Rules", "Azure Firewall"]
    },
    {
      category: "Leadership & Strategy",
      items: ["Team Management", "Client Engagement", "Cost Optimization", "Business Alignment"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Enterprise Azure Migration",
      client: "Fortune 500 Banking Client",
      description: "Led complete migration of 15+ critical applications from on-premises to Azure cloud with zero downtime.",
      technologies: ["Azure", "Terraform", "Azure DevOps", "ExpressRoute"],
      achievements: [
        "Achieved 99.99% uptime during migration",
        "Reduced infrastructure costs by 35%",
        "Implemented automated DR strategy"
      ],
      timeline: "8 months",
      status: "Completed"
    },
    {
      id: 2,
      title: "Multi-Cloud Healthcare Platform",
      client: "US Healthcare Provider",
      description: "Designed and implemented HIPAA-compliant cloud architecture on Philips Health Suite Digital Platform.",
      technologies: ["GCP", "Azure", "Healthcare APIs", "DevSecOps"],
      achievements: [
        "Ensured 100% HIPAA compliance",
        "Served 50+ hospitals nationwide",
        "Reduced patient data processing time by 60%"
      ],
      timeline: "12 months", 
      status: "Completed"
    },
    {
      id: 3,
      title: "Cost Optimization Framework",
      client: "Reliance Jio Group Companies",
      description: "Developed comprehensive cost management and optimization framework across multiple cloud platforms.",
      technologies: ["Azure Cost Management", "Power BI", "Custom Analytics"],
      achievements: [
        "Achieved 40% cost reduction across portfolios",
        "Automated cost forecasting and alerts",
        "Created interactive cost visibility dashboards"
      ],
      timeline: "6 months",
      status: "Completed"
    },
    {
      id: 4,
      title: "Hybrid Cloud Network Design",
      client: "Global Enterprise Client",
      description: "Architected secure hybrid network topology connecting on-premises infrastructure with multi-cloud environments.",
      technologies: ["Azure Arc", "ExpressRoute", "Private Link", "Network Security"],
      achievements: [
        "Established secure connectivity across 3 cloud providers",
        "Implemented zero-trust network model",
        "Reduced network latency by 45%"
      ],
      timeline: "10 months",
      status: "In Progress"
    }
  ],

  certifications: [
    "Microsoft Azure Solutions Architect Expert",
    "AWS Certified Solutions Architect Professional", 
    "Google Cloud Professional Cloud Architect",
    "Certified Kubernetes Administrator (CKA)",
    "40+ Total Certifications across Cloud, DevOps, and Infrastructure"
  ],

  education: [
    {
      degree: "M.Tech. Artificial Intelligence and Machine Learning",
      institution: "BITS Pilani",
      year: "Pursuing",
      status: "current"
    },
    {
      degree: "Bachelor of Electronics & Telecommunication", 
      institution: "Mumbai University",
      year: "2006",
      status: "completed"
    }
  ]
};