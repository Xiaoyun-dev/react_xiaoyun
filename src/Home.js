import MaxBanner from './Image/banner.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import LikeButton from "./LikeButton";


const Home = () => {

    return (  
        <div className="home">
            <img src={MaxBanner} alt="sneaky cat Max on stairs" />
            <h2 className ='hi'> Hi there! 🌈 🐟</h2>

            <br />

            <div className="social-icons">
                <a href="https://www.linkedin.com/in/xiaoyun-chen-422373234/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" /></a> 
                <a href="https://github.com/Xiaoyun-dev" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" /></a>
            </div>
            <LikeButton/>
        </div>
    );
}
 
export default Home;

