"use client";

import { useState } from "react";
import styles from "./honorStyle.module.css";
import t2p from "../../assets/t2p.jpeg";
import honor from "../../assets/honorHaifa.jpeg";

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
  ]);

  return (
    <section className={styles.section}>
      <h1 className="sectionTitle">Honors & CERTIFICATES</h1>

      <div className={styles.grid}>
        {certificates.map((certificate) => (
          <div key={certificate.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={certificate.image || "/placeholder.svg"}
                alt={certificate.title}
                className={styles.image}
              />
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
