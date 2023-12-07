import { useState, useEffect } from 'react';
import biobg from './Image/backgound4.png';

const Bio = () => {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      // Attach the event listener
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const backgroundImageStyle = {
      backgroundImage: `url(${biobg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: windowSize.width,
      height: windowSize.height,
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
    };

    const biolink1 = "https://codelancashire.tech/";
    const biolink2 = "https://www.research.lancs.ac.uk/portal/en/people/xiaoyun-chen(262c37c4-5638-47df-a87a-56e1c26e73c1).html";

    return (
      <div style={backgroundImageStyle}>
        <div className="bio-content">
            <h2>I am Xiaoyun Chen</h2>
            <br /><br /> <br /> <br />
            <p> Researcher in Psychology <a href={biolink2} style={{ padding: '0 10px' }}>@ Lancaster Uni</a></p>;

            <p> A{' '}<a href={biolink1} style={{ padding: '0 10px' }}> CODELancashire Learner</a></p> {' '}
            <br />
            <p > Data Enthusiast </p>
        </div>
        <br /><br />
        <div >
            <p style={{color:'#265073',}}>I am from Shenzhen, China and now living in Lancaster, UK. </p>
        </div>
      </div>
    );
  };
  
  export default Bio;

