import "./Home.css";
import AccueilImage from "../assets/Accueil.png";

const Home = () => {
  return (
    <>
      <div>
        {/* <div className="Welcome">Welcome to my HarryPotter API cons Gallery</div> */}
        <img className="AccueilImage" src={AccueilImage} alt="" />
      </div>
    </>
  );
};

export default Home;
