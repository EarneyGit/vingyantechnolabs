export const navigation = {
  main: [
    { title: "Home", href: "/" },
    {
      title: "Industries We Serve",
      href: "/industries",
      items: [
        {
          group: "IoT Solutions",
          links: [
            {
              title: "Industry 4.0",
              href: "/industries/iot/industry-4-0",
              description: "Smart factory monitoring & predictive maintenance.",
            },
            {
              title: "Home Automation",
              href: "/industries/iot/home-automation",
              description: "Smart lighting, climate control, and security.",
            },
            {
              title: "Access Control System",
              href: "/industries/iot/access-control-system",
              description: "Secure entry management & attendance logs.",
            },
            {
              title: "Smart Parking System",
              href: "/industries/iot/smart-parking-system",
              description: "Vehicle entry, exit monitoring, & slot availability.",
            },
          ],
        },
        {
          group: "Computer Vision Solutions",
          links: [
            {
              title: "Manufacturing",
              href: "/industries/computer-vision/manufacturing",
              description: "Defect detection, PPE monitoring, & quality control.",
            },
            {
              title: "Pharma",
              href: "/industries/computer-vision/pharma",
              description: "Packaging inspection & compliance support.",
            },
            {
              title: "Smart Cities",
              href: "/industries/computer-vision/smart-cities",
              description: "Traffic monitoring, incident detection, & analytics.",
            },
          ],
        },
      ],
    },
    { title: "Blog", href: "/blog" },
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact" },
  ],
  footer: {
    iot: [
      { title: "Industry 4.0", href: "/industries/iot/industry-4-0" },
      { title: "Home Automation", href: "/industries/iot/home-automation" },
      { title: "Access Control System", href: "/industries/iot/access-control-system" },
      { title: "Smart Parking System", href: "/industries/iot/smart-parking-system" },
    ],
    cv: [
      { title: "Manufacturing", href: "/industries/computer-vision/manufacturing" },
      { title: "Pharma", href: "/industries/computer-vision/pharma" },
      { title: "Smart Cities", href: "/industries/computer-vision/smart-cities" },
    ],
    company: [
      { title: "About Us", href: "/about" },
      { title: "Blog", href: "/blog" },
      { title: "Contact Us", href: "/contact" },
      { title: "Book a Demo", href: "/contact" },
    ],
    legal: [
      { title: "Privacy Policy", href: "#" },
      { title: "Terms of Service", href: "#" },
    ],
  },
};
