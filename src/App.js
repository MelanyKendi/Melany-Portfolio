import React, { useState } from "react";
import "./App.css";

export default function App() {
  const NAME = "Melany Kendi Muriungi";
  const TITLE =
    "BSc. Information Systems & Technology — Concentration: Forensics & Cybersecurity";
  const PHOTO = "/profile.jpg";

  const SUMMARY = `I am an ambitious IT professional with experience in IT support, application management,
networking and cybersecurity-focused interests. I focus on applying investigative forensics
and secure development practices to solve real-world technical problems.`;

  const stats = [
    { label: "Experience", value: "Emerging Professional" },
    { label: "Projects", value: "4+" },
  ];

  const education = [
    {
      degree:
        "Bachelor of Science in Information Systems & Technology (Forensics & Cybersecurity)",
      school: "United States International University (USIU) — Nairobi, Kenya",
      period: "09/2021 – 04/2025",
    },
    {
      degree: "Certificate in Computer Packages",
      school: "Institute of Advanced Technology — Nairobi, Kenya",
      period: "05/2021 – 09/2021",
    },
    { degree: "KCSE - B-", school: "Pangani Girls", period: "2017 – 2021" },
  ];

  const certifications = [
    "Certified Cybersecurity Technician (EC-Council University) - current",
    "Cybersecurity Fundamentals (IBM)",
    "Essentials of IT Service Management (ITIL Level 4) - Alison",
    "Introduction to the Threat Landscape (Fortinet)",
    "Diploma in Data Analytics (UniAthena)",
    "Cybersecurity (Prodigy InfoTech)",
    "Digital Marketing (ICDL Africa)",
    "Social Media Marketing (HubSpot Academy)",
  ];

  const skills = [
    "BPM application support",
    "TurnQuest Bancassurance (TQ)",
    "HAIS (Hospital Admin Info System)",
    "Oracle DB basics",
    "Manual testing & bug tracking",
    "SQL & data entry",
    "Linux",
    "Forensics",
    "Network analysis",
    "Problem solving",
  ];

  const experience = [
    {
      role: "ICT Technician",
      org: "Affordable Housing Board",
      period: "05/2025 – Present",
      details:
        "Frontline technical support, system configuration, data entry & digital records management for housing platforms and CRM systems.",
    },
    {
      role: "Intern — Enterprise Group (Applications & Asset Mgmt)",
      org: "KCB Bank",
      period: "02/2025 – 05/2025",
      details:
        "Worked on IT applications and asset tracking; supported process improvement initiatives and Oracle database tasks.",
    },
    {
      role: "Intern",
      org: "Prodigy InfoTech",
      period: "12/2024",
      details:
        "Assisted in cybersecurity tasks and testing; debugging and analysing basic vulnerabilities.",
    },
    {
      role: "Voluntary Assistant",
      org: "Happy Life Children's Home",
      period: "05/2023 – 08/2023",
      details:
        "Administrative support and community engagement assistance; prioritized tasks and met deadlines.",
    },
    { role: "Clerk", org: "IEBC", period: "08/2022", details: "Admin & voter assistance." },
  ];

  const projects = [
    {
      title: "Network Packet Analyzer",
      tag: "Tool / Project",
      summary:
        "A packet sniffer tool developed to capture and analyze network packets for insights and diagnostics.",
      details:
        "Implemented packet capture and basic parsing to display packet headers and payload metadata for analysis.",
      link: "#",
    },
    {
      title: "Password Complexity Checker",
      tag: "Tool / Utility",
      summary:
        "A utility that evaluates password strength across multiple parameters (entropy, length, complexity).",
      details:
        "Helps users and admins enforce strong password policies by scoring and suggesting improvements.",
      link: "#",
    },
    {
      title: "Pixel Manipulation — Image Encryption",
      tag: "Research / Tool",
      summary:
        "An experimental tool that encrypts/decrypts images using mathematical pixel operations.",
      details:
        "Demonstrated simple image obfuscation and recovery using deterministic pixel transforms.",
      link: "#",
    },
    {
      title: "Caesar Cipher Tool",
      tag: "Crypto / Utility",
      summary:
        "A simple text encryption/decryption tool implementing Caesar cipher for learning and demonstration.",
      details: "Supports shifting and brute-force analysis for small educational examples.",
      link: "#",
    },
  ];

  const labs = [
    {
      title: "Introduction to Networking",
      problem:
        "This module provided foundational knowledge about computer networks and how data moves across systems in the modern digital world.",
      approach:
        "The module explored various network types, architectures, and communication models. Through both theory and practice, I learned how devices communicate using protocols and how data is transferred securely and efficiently between systems.",
      tools: "Cisco Packet Tracer, Wireshark, Networking Simulators, Command Line Tools",
      lessons: `Networking is a fundamental concept that underpins the modern world, enabling the seamless exchange of information, connecting people across the globe, and supporting the infrastructure of the digital age. It is the intricate web of connections that powers the internet, drives communication between devices, and facilitates the flow of data in both personal and business contexts.

In this module, I covered the following topics:
• The types and structure of the Internet
• Proxies
• Different topologies
• Models and concepts
• OSI & TCP/IP
• IPv4 & IPv6
• Subnetting

Conclusion:
In summary, this introductory networking module has equipped me with a wealth of knowledge. I now feel confident in my ability to set up a home network, handle the intricacies of corporate network management, and explore the realm of cybersecurity.`,
      screenshot: "/screenshots/networking.png",
    },
    {
      title: "Linux Fundamentals",
      problem:
        "This module introduced the Linux operating system and its role as a backbone of cybersecurity and server administration.",
      approach:
        "The course focused on essential Linux concepts such as the command-line interface, directory structure, permissions, and service configuration. Practical exercises were conducted to reinforce learning through hands-on application.",
      tools: "Linux terminal, Bash shell, VirtualBox, Ubuntu OS",
      lessons: `Linux is a critical operating system in the field of cybersecurity, widely utilized in server environments and security-related operations. Proficiency in Linux is therefore essential for cybersecurity professionals, systems administrators, and network defenders. This module provides an introduction to the foundational concepts of Linux, focusing on its structure, command-line interface, and administrative functionalities. It emphasizes practical skills such as navigating the operating system, managing files and directories, configuring services, and handling permissions, thereby equipping learners with the necessary competencies to operate effectively within Linux environments.`,
      screenshot: "/screenshots/linux.png",
    },
  ];

  const CONTACTS = {
    linkedin: "https://www.linkedin.com/in/melany-kendi-5a9207267",
    github: "https://github.com/MelanyKendi",
    email: "melanykendi7@gmail.com",
    phone: "0111612338",
  };

  const [showContact, setShowContact] = useState(false);

  return (
    <div className="portfolio-root">
      <header className="navbar">
        <div className="nav-left">
          <div className="nav-brand">M</div>
          <div className="nav-name">
            <div className="nav-name-main">Melany</div>
            <div className="nav-name-sub">Kendi</div>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
          <a href="#projects">Projects</a>
          <a href="#labs">Lab Challenges</a>
          <a href="#contact" className="contact-cta">
            Contact
          </a>
        </nav>
      </header>

      <main>
        {/* HERO / HOME */}
        <section id="home" className="hero">
          <div className="hero-left">
            <h1 className="hello">Hello — I’m</h1>
            <h2 className="hero-name">{NAME}</h2>
            <p className="hero-title">{TITLE}</p>
            <p className="hero-summary">{SUMMARY}</p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-outline">
                View Projects
              </a>
              <a
                href="/MelanyKendiCV.pdf"
                download="MelanyKendiCV.pdf"
                className="btn btn-outline"
              >
                Download CV
              </a>
              <button
                className="btn btn-primary"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="profile-card">
              <img src={PHOTO} alt="profile" className="profile-photo" />
              <div className="profile-overlay">
                <h3>{NAME.split(" ")[0]}</h3>
                <p className="small">{TITLE}</p>
                <div className="stat-row">
                  {stats.map((s, i) => (
                    <div key={i} className="stat">
                      <div className="stat-value">{s.value}</div>
                      <div className="stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="social-row">
                  <a href={CONTACTS.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a href={CONTACTS.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section white-card">
          <h3>About</h3>
          <p>{SUMMARY}</p>
          <div className="about-grid">
            <div>
              <h4>Core Skills</h4>
              <ul>
                {skills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Certifications</h4>
              <ul>
                {certifications.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* RESUME */}
        <section id="resume" className="section">
          <div className="resume-grid">
            <div className="white-card">
              <h3>Education</h3>
              {education.map((e, i) => (
                <div key={i} className="edu">
                  <strong>{e.degree}</strong>
                  <div className="muted">{e.school}</div>
                  <div className="muted small">{e.period}</div>
                </div>
              ))}
            </div>

            <div className="white-card">
              <h3>Experience</h3>
              {experience.map((ex, i) => (
                <div key={i} className="exp">
                  <strong>{ex.role}</strong>
                  <div className="muted">
                    {ex.org} — <span className="small">{ex.period}</span>
                  </div>
                  <p className="muted small">{ex.details}</p>
                </div>
              ))}
              {/* Optional download CV button here too */}
              <a
                href="/MelanyKendiCV.pdf"
                download="MelanyKendiCV.pdf"
                className="btn btn-outline resume-download"
              >
                Download My CV
              </a>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section white-card">
          <h3>Projects</h3>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <article key={i} className="project-card">
                <div className="project-head">
                  <h4>{p.title}</h4>
                  <span className="tag">{p.tag}</span>
                </div>
                <p className="muted small">{p.summary}</p>
                <p className="muted smaller">{p.details}</p>
                {p.link && p.link !== "#" ? (
                  <a
                    href={p.link}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        {/* LAB CHALLENGES */}
        <section id="labs" className="section">
          <div className="white-card">
            <h3>Lab Challenges & Writeups</h3>
            <div className="labs-list">
              {labs.map((l, i) => (
                <div key={i} className="lab-card">
                  <h4>{l.title}</h4>
                  <p>
                    <strong>Problem:</strong> {l.problem}
                  </p>
                  <p>
                    <strong>Approach:</strong> {l.approach}
                  </p>
                  <p>
                    <strong>Tools:</strong> {l.tools}
                  </p>
                  <p>
                    <strong>Key lessons:</strong> {l.lessons}
                  </p>
                  {l.screenshot ? (
                    <div className="lab-screenshot">
                      <img
                        src={l.screenshot}
                        alt={`${l.title}-screenshot`}
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section white-card contact-section">
          <h3>Contact</h3>
          <p className="muted">
            To protect privacy, my email and phone are revealed only after you
            click the button below.
          </p>
          <div className="contact-actions">
            <button
              className="btn btn-primary"
              onClick={() => setShowContact((s) => !s)}
            >
              {showContact ? "Hide Contact Info" : "Reveal Contact Info"}
            </button>

            {showContact && (
              <div className="contact-info">
                <div>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
                </div>
                <div>
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${CONTACTS.phone}`}>{CONTACTS.phone}</a>
                </div>
              </div>
            )}
          </div>

          <div className="contact-links">
            <a href={CONTACTS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={CONTACTS.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} {NAME} — Built with focus on
          forensics & cybersecurity.
        </footer>
      </main>
    </div>
  );
}
