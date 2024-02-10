import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Card({ text, imageSrc, smallText, index, to }) {
  return (
    <motion.div
      className="card"
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1.3,
        },
      }}
      viewport={{ once: true }}
    >
      <div className="card-content">
        <Link to={to}>
          <a  href="#" className="card-text">
            {text}
          </a>
        </Link>
        <img src={imageSrc} alt="Image" className="card-image" />
        <p className="small-text">{smallText}</p>
      </div>
    </motion.div>
  );
}

export default Card;
