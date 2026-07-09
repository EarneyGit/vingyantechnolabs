export const industries = {
  iot: [
    {
      id: "industry-4-0",
      title: "Industry 4.0",
      slug: "/industries/iot/industry-4-0",
      description: "Smart factory monitoring, machine data collection, and predictive maintenance.",
      problem: "Manufacturing plants struggle with unplanned downtime, energy inefficiencies, and a lack of real-time visibility into machine health and production metrics.",
      solution: "Vingyan Techno Labs provides an end-to-end Industry 4.0 architecture, integrating sensors with PLCs to deliver a unified dashboard for predictive maintenance, OEE tracking, and real-time alerts.",
      capabilities: [
        "Machine data collection (PLC/SCADA integration)",
        "Predictive maintenance & health monitoring",
        "Real-time OEE and downtime tracking",
        "Energy consumption monitoring",
        "Edge-to-cloud analytics architecture"
      ],
      useCases: [
        { title: "Predictive Maintenance", description: "Monitor vibration and temperature to predict failures before they happen." },
        { title: "Production Monitoring", description: "Track real-time output and identify bottlenecks instantly." },
        { title: "Energy Optimization", description: "Analyze power usage across lines to reduce waste." }
      ],
      benefits: [
        "Up to 30% reduction in unplanned downtime",
        "Improved Overall Equipment Effectiveness (OEE)",
        "Lower maintenance costs and extended asset life"
      ]
    },
    {
      id: "home-automation",
      title: "Home Automation",
      slug: "/industries/iot/home-automation",
      description: "Smart lighting, climate control, security, and gate automation for modern living.",
      problem: "Managing modern residential complexes or large villas involves fragmented systems for security, lighting, climate, and access, leading to inefficiency and higher energy costs.",
      solution: "We deliver a unified smart home and building automation platform that brings lighting, climate control, appliances, and security under one centralized mobile control and automation system.",
      capabilities: [
        "Smart lighting & scene-based automation",
        "Intelligent climate & HVAC control",
        "Smart security & mobile monitoring",
        "Gate and appliance automation",
        "Energy optimization algorithms"
      ],
      useCases: [
        { title: "Scene-based Automation", description: "One touch to set the perfect environment for morning, evening, or away modes." },
        { title: "Remote Security Monitoring", description: "Access camera feeds and lock status from anywhere." },
        { title: "Energy Management", description: "Automated climate adjustments based on occupancy." }
      ],
      benefits: [
        "Enhanced security and peace of mind",
        "Significant energy cost savings",
        "Seamless convenience and remote control"
      ]
    },
    {
      id: "access-control-system",
      title: "Access Control System",
      slug: "/industries/iot/access-control-system",
      description: "Secure entry management, RFID/biometric access, and attendance logs.",
      problem: "Traditional physical keys and isolated card systems are difficult to manage, insecure, and fail to provide real-time attendance or unauthorized access alerts.",
      solution: "Our advanced Access Control System provides centralized management of all entry points using RFID, biometric, or QR-based credentials, integrated seamlessly with your HR and security workflows.",
      capabilities: [
        "RFID, biometric, and QR-based access",
        "Door controller & turnstile integration",
        "Centralized admin dashboard & role-based access",
        "Attendance-ready data export",
        "Real-time alerts for unauthorized access"
      ],
      useCases: [
        { title: "Visitor Management", description: "Issue temporary QR codes for seamless guest entry." },
        { title: "Automated Attendance", description: "Link entry logs directly to payroll systems." },
        { title: "High-Security Zones", description: "Multi-factor authentication for sensitive areas." }
      ],
      benefits: [
        "Improved facility security",
        "Streamlined HR and attendance tracking",
        "Reduced administrative overhead"
      ]
    },
    {
      id: "smart-parking-system",
      title: "Smart Parking System",
      slug: "/industries/iot/smart-parking-system",
      description: "Vehicle entry/exit monitoring, slot availability, and parking analytics.",
      problem: "Commercial campuses and smart cities suffer from parking congestion, inefficient space utilization, and manual, error-prone entry management.",
      solution: "Vingyan’s Smart Parking System uses sensors and ANPR cameras to automate entry, track slot availability in real-time, and provide an integrated dashboard for parking management and billing.",
      capabilities: [
        "Vehicle entry and exit monitoring",
        "Real-time slot availability tracking",
        "ANPR-ready architecture for automatic gate operation",
        "Parking occupancy dashboard & reporting",
        "Payment and third-party integration readiness"
      ],
      useCases: [
        { title: "Automated Entry", description: "Open gates automatically for registered vehicles using ANPR." },
        { title: "Slot Guidance", description: "Direct drivers to available spots using digital signage." },
        { title: "Occupancy Analytics", description: "Understand peak usage times to optimize space." }
      ],
      benefits: [
        "Eliminate bottlenecks at entry/exit gates",
        "Maximize parking space utilization",
        "Enhance visitor and employee experience"
      ]
    }
  ],
  computerVision: [
    {
      id: "manufacturing",
      title: "Manufacturing",
      slug: "/industries/computer-vision/manufacturing",
      description: "Defect detection, PPE monitoring, and visual quality control.",
      problem: "Manual visual inspection is slow, inconsistent, and prone to human error, leading to defective products reaching customers and safety compliance issues on the floor.",
      solution: "We deploy AI-powered Computer Vision models on edge devices that analyze camera feeds in real-time to detect defects, monitor line speed, and ensure safety compliance instantly.",
      capabilities: [
        "Automated defect detection & classification",
        "PPE and safety compliance monitoring",
        "Production line monitoring & object counting",
        "Visual inspection for quality control",
        "Real-time exception alerts and dashboards"
      ],
      useCases: [
        { title: "Surface Defect Detection", description: "Identify scratches, dents, or misalignments on fast-moving conveyors." },
        { title: "Safety Gear Compliance", description: "Alert supervisors instantly if a worker enters a zone without a hardhat." },
        { title: "Automated Counting", description: "Accurately count finished goods as they leave the line." }
      ],
      benefits: [
        "Near 100% inspection accuracy",
        "Reduced scrap and rework costs",
        "Enhanced worker safety and compliance"
      ]
    },
    {
      id: "pharma",
      title: "Pharma",
      slug: "/industries/computer-vision/pharma",
      description: "Packaging inspection, label verification, and cleanroom monitoring.",
      problem: "The pharmaceutical industry requires strict adherence to compliance. Mislabelled products, compromised packaging, or cleanroom breaches can result in massive recalls.",
      solution: "Our highly accurate Computer Vision solutions are tailored for pharma, offering high-speed label verification, packaging integrity checks, and continuous monitoring of sensitive zones.",
      capabilities: [
        "High-speed packaging and seal inspection",
        "Label verification & OCR (Optical Character Recognition)",
        "Batch process and cleanroom/zone monitoring",
        "Traceability dashboards & compliance logging",
        "Real-time exception alerts for QA teams"
      ],
      useCases: [
        { title: "Label OCR Verification", description: "Ensure every bottle has the correct expiry date and batch number." },
        { title: "Blister Pack Inspection", description: "Detect missing or broken tablets before final sealing." },
        { title: "Cleanroom Protocol", description: "Monitor gowning compliance in sterile environments." }
      ],
      benefits: [
        "Ensure FDA/regulatory compliance",
        "Prevent costly product recalls",
        "Automate high-speed QA processes"
      ]
    },
    {
      id: "smart-cities",
      title: "Smart Cities",
      slug: "/industries/computer-vision/smart-cities",
      description: "Traffic monitoring, incident detection, and public space analytics.",
      problem: "City administrators struggle to make sense of thousands of camera feeds, reacting to incidents too late and lacking data for long-term urban planning.",
      solution: "Vingyan transforms passive surveillance into active intelligence. Our CV models analyze city feeds to detect traffic anomalies, monitor crowds, and alert authorities to incidents in real-time.",
      capabilities: [
        "Real-time traffic flow & congestion monitoring",
        "Public space surveillance & crowd analytics",
        "Automated incident & accident detection",
        "Smart infrastructure & waste monitoring concepts",
        "Centralized city dashboard and alert workflows"
      ],
      useCases: [
        { title: "Traffic Management", description: "Optimize signal timings based on real-time vehicle counts." },
        { title: "Crowd Density Alerts", description: "Prevent stampedes or overcrowding in public transit hubs." },
        { title: "Incident Detection", description: "Automatically flag accidents or stalled vehicles on highways." }
      ],
      benefits: [
        "Faster emergency response times",
        "Data-driven urban planning",
        "Enhanced public safety and efficiency"
      ]
    }
  ]
};
