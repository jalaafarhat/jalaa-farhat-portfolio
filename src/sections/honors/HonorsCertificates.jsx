"use client";

import { useState } from "react";
import styles from "./honorStyle.module.css";
import t2p from "../../assets/t2p.jpeg";
import honor from "../../assets/honorHaifa.jpeg";
import udemy from "../../assets/udemyCertificate.jpg";

function HonorsCertificates() {
  // Replace with your actual certificates data
  const [certificates] = useState([
    {
      id: 1,
      title: "Tech2Peace Seminar & Google for Startups Participation",
      description:
        "Participated in the Tech2Peace seminar and was selected for the Google for Startups program, focusing on tech innovation and peace-building.",
      image: t2p,
    },
    {
      id: 2,
      title: "Honored by Minister Gila Gamliel",
      description:
        "Recognized by Minister Gila Gamliel for teaching Python programming to students in school and empowering youth through coding education.",
      image: honor,
    },
    //Full Stack Web Development With MERN STACK & GenAI 2025
    {
      id: 2,
      title: "Full Stack Web Development With MERN STACK & GenAI 2025 (Udemy)",
      description:
        "Completed the full course on Full Stack Web Development with MERN Stack & GenAI 2025 by Masynctech Coding School on Udemy. Verified on 08/05/2025.",
      image: udemy,
    },
  ]);

  return (
    <section className={styles.section}>
      <h1 className="sectionTitle">Honors & CERTIFICATES</h1>

      <div className={styles.grid}>
        {certificates.map((certificate) => (
          <div key={certificate.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.title}
                  className={styles.image}
                />
              </a>
            </div>
            <h3 className={styles.title}>{certificate.title}</h3>
            <p className={styles.description}>{certificate.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HonorsCertificates;
