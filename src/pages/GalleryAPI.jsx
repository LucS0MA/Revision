import { useState, useEffect } from "react";
import "./GalleryAPI.css";

const GalleryAPI = () => {
  const [charactersInfos, setCharactersInfo] = useState([]);

  useEffect(() => {
    fetch("https://miadil.github.io/HarryPotterApi/api/json/characters.json")
      .then((res) => res.json())
      .then((data) => setCharactersInfo(data));
  }, []);

  return (
    <>
      <div className="Welcome">Harry Potter Characters</div>
      <div className="Gallery">
        {charactersInfos.map((charactersInfos) => {
          return (
            <div className="Cards">
              <img className="Images" src={charactersInfos.image} alt="" />
              <div className="Attributes">
                <p className="Names">Personnage : {charactersInfos.name}</p>
                <p className="Names">Maison : {charactersInfos.house}</p>
                <p className="Names">Acteur : {charactersInfos.actor}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GalleryAPI;
