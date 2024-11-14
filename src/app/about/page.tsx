import React from 'react';
import Image from 'next/image';
import myImage from './me.jpg';
import styles from './about.module.css';
function AboutPage() {
  return (
    <article className={styles.root}>
      <Image src={myImage} alt="Kira Batalova Photo" loading="eager" />
      <div>
        I am a frontend developer with a strong focus on HTML, CSS, JavaScript,
        React, and TypeScript. I enjoy building user-friendly and visually
        appealing web applications with responsive and adaptive designs. I’m
        committed to constantly improving my skills and learning modern web
        technologies, like Next.js and Redux. I’m detail-oriented and love
        tackling coding challenges to find the best solutions. I look forward to
        contributing my knowledge and passion for web development to exciting
        projects
      </div>
    </article>
  );
}

export default AboutPage;
