import { useEffect } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaJenkins,
  FaGithub as FaGithubIcon,
  FaCloud,
} from "react-icons/fa";
import { SiTerraform, SiGooglecloud } from "react-icons/si";
import { motion } from "framer-motion";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Hemanth Kumar Enuguri | Cloud Engineer Portfolio";
  }, []);

  const skills = [
    { icon: FaAws, label: "AWS" },
    { icon: SiGooglecloud, label: "GCP" },
    { icon: SiTerraform, label: "Terraform" },
    { icon: FaDocker, label: "Docker" },
    { icon: FaJenkins, label: "Jenkins" },
    { icon: FaPython, label: "Python" },
    { icon: FaGitAlt, label: "Git" },
    { icon: FaGithubIcon, label: "GitHub Actions" },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-blue-100 to-white">
        <motion.img
          src="https://via.placeholder.com/150"
          alt="Hemanth Kumar Enuguri"
          className="rounded-full w-36 h-36 mb-6 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-blue-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hemanth Kumar Enuguri
        </motion.h1>
        <p className="text-xl mb-4 text-gray-700">
          Cloud Engineer | GCP & AWS | Infra Automation Enthusiast
        </p>
        <div className="flex space-x-4 mb-8">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4 text-blue-900">About Me</h2>
        <p className="mb-4">
          I’m a Cloud Engineer with hands-on experience in both GCP and AWS,
          passionate about designing scalable, cost-efficient, and cloud-native
          solutions. I thrive on solving complex infrastructure challenges and
          driving innovation through automation and security best practices.
        </p>

        <h3 className="text-xl font-semibold mt-6">Education</h3>
        <ul className="list-disc ml-6">
          <li>
            M.S. in Information Systems (Big Data Analytics), Georgia State
            University, 2023
          </li>
          <li>B.Tech, Chaitanya Bharathi Institute of Technology, Hyderabad, 2021</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Experience</h3>
        <ul className="list-disc ml-6">
          <li>Cloud Engineer – American Express, Phoenix (Jun 2024 – Present)</li>
          <li>Capstone Project – Insight Global, Atlanta (Aug 2023 – Dec 2023)</li>
          <li>Graduate Research Assistant – Georgia State University (Jan 2023 – Dec 2023)</li>
          <li>Associate Engineer – CtrlS Datacenters Ltd, Hyderabad (Aug 2021 – Dec 2022)</li>
        </ul>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-6 text-blue-900">Skills</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {skills.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center space-y-2 cursor-pointer transform transition-transform hover:scale-110"
              title={label}
            >
              <Icon className="text-5xl" />
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-3xl font-semibold mb-6 text-blue-900">Highlighted Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-lg mb-2">Project {num}</h4>
                <p className="text-gray-600">
                  Brief description of project {num} with technologies used and
                  outcomes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4 text-blue-900">Let's Connect</h2>
        <div className="flex flex-col space-y-4 text-lg">
          <a
            href="mailto:enugurihemanthkumar@gmail.com"
            className="flex items-center space-x-2 hover:text-blue-600"
          >
            <FaEnvelope /> <span>enugurihemanthkumar@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kumar-enuguri/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-600"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/HemanthEnuguri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-600"
          >
            <FaGithub /> <span>GitHub</span>
          </a>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt /> <span>Phoenix, Arizona</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-gray-50">
        © 2025 Hemanth Kumar Enuguri. Built with React & Tailwind.
      </footer>
    </div>
  );
}
