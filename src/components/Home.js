import React from 'react'
import '../index.css'
import Gmail from '../logos/logo-gmail-9952.png'
import LinkedIn from '../logos/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930587_72.png'
import GitHub from '../logos/pngwing.com.png'
import { useSpring, animated } from 'react-spring';


export default function Home() {

  const animationProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 }, // You can adjust the animation duration
  });

  const handleGmailClick = () => {
    window.location.href = "mailto:takhleesfatima2003@gmail.com";
  }

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/takhlees-fatima-668410235/");
  }

  const handleGitHubClick = () => {
    window.open("https://github.com/Takhlees");
  }

  const handleResume = () => {
    const link = document.createElement('a');
    link.href = '/Takhlees (CV).pdf'; // Path to your resume file
    link.download = 'CV.pdf'; // Rename your resume file if needed
    link.click();
  }

  return (
<animated.div style={animationProps}>
    <div id="home">
      <div id="heading">
        <h3>Hey, I am </h3>
        <h2>Takhlees Fatima</h2>
      </div>
      <div id="images">
        <span onClick={handleGmailClick}><img className='gmail' src={Gmail}></img></span>
        <span onClick={handleLinkedInClick}><img className='linkedin' src={LinkedIn}></img></span>
        <span onClick={handleGitHubClick}><img className='github' src={GitHub}></img></span>
      </div>
      <div className='h-button'>
      <button className= "h-btn" onClick={handleResume}>Download Resume</button>
      </div>
    </div>
    </animated.div>
  )
}

