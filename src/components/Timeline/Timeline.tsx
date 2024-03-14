import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faLayerGroup, faBrowsers, faSwatchbook, faPhotoFilm, faSignsPost, faUsersRays, faChalkboardUser, faKeyboard, faCode } from '@fortawesome/pro-light-svg-icons';
import './Timeline.css'; // Make sure your CSS file is correctly imported

const timelineItems = [
  { label: 'Graphic Design', icon: faLayerGroup },
  { label: 'Digital Design', icon: faBrowsers },
  { label: 'Art Direction', icon: faSwatchbook },
  { label: 'Motion Design', icon: faPhotoFilm },
  { label: 'Communication Design', icon: faSignsPost },
  { label: 'UI Design', icon: faFigma },
  { label: 'UX Design', icon: faUsersRays },
  { label: 'UX Mentor', icon: faChalkboardUser },
  { label: 'UI Developer', icon: faKeyboard },
  { label: 'Front-End Developer', icon: faCode },
];

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

  // Splitting the heading into letters for animation
  const heading = "Timeline";
  const headingLetters = Array.from(heading);

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

const Timeline: React.FC = () => {
  return (
    <Container className="section">
        <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="h1"
        >
        {headingLetters.map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.div>
      <h2>Time Travel: The Fun Highlights of My Adventure</h2>
      <Row className="timeline-row">
        <Col xs={12} className="timeline-line-container">
          <div className="timeline-line"></div>
          <FontAwesomeIcon icon={faHeart} className="timeline-heart" />
          <div className="timeline-items">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <FontAwesomeIcon icon={item.icon} className="timeline-icon" />
                <h3>{item.label}</h3>
              </motion.div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Timeline;