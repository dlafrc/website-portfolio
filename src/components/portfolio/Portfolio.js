import React from "react";
import "./portfolio.css";
import {FaFile} from "react-icons/fa";

//Images 

import Portfolio1 from '../../assets/portfolio1.png';
import Portfolio2 from '../../assets/portfolio2.png';
import Portfolio3 from '../../assets/portfolio3.png';
import Portfolio4 from '../../assets/portfolio4.png';
import Portfolio5 from '../../assets/portfolio5.png';
import Portfolio6 from '../../assets/portfolio6.png';

const projects = [
  
  {
    id: 1,
    image: Portfolio1,
    title: "First Design Content",
    source: "https://www.instagram.com/p/CrNvCn4P_PW/",
  },
  {
    id: 2,
    image: Portfolio2,
    title: "Gita's Birthday Project Carrd",
    source: "https://sacgit-day.carrd.co/",
  },
  {
    id: 3,
    image: Portfolio3,
    title: "Froggy Animated Design Content",
    source: "https://www.instagram.com/p/CuRjoaASXz4/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
  },
  {
    id: 4,
    image: Portfolio4,
    title: "Fan Account Biodata Carrd Project",
    source: "https://zeuscif.carrd.co/",
  },
  {
    id: 5,
    image: Portfolio5,
    title: "Niswa Alfiyya's Birthday Carrd Project",
    source: "https://fyas-bday.carrd.co/",
  },
  {
    id: 6,
    image: Portfolio6,
    title: "Anxiety Disorder Animation Project",
    source: "https://rudytodo.netlify.app/",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Latest Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project) => {
          return (
            <article className="portfolio__item" key={project.id}>
              <div className="portfolio__item-image">
                <img src={project.image} alt={`Project #${project.id}`} />
              </div>

              <h3>{project.title}</h3>

              <div className="portfolio__item-cta">
                <a href={project.source} 
                   className="btn" 
                   target='_blank'
                   rel="noreferrer">
                  <FaFile></FaFile> Source
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
