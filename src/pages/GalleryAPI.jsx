import { useState, useEffect } from "react";
import "./GalleryAPI.css";

const GalleryAPI = () => {
  const [charactersInfos, setCharactersInfo] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleClick = (index) => {
    setSelectedCharacter((prevSelected) =>
      prevSelected === index ? null : index
    );
  };

  useEffect(() => {
    fetch("https://miadil.github.io/HarryPotterApi/api/json/characters.json")
      .then((res) => res.json())
      .then((data) => setCharactersInfo(data));
  }, []);

  return (
    <>
      <div className="back">
        <div className="Welcome">Harry Potter Characters</div>
        <div className="Gallery">
          {charactersInfos.map((charactersInfos, index) => {
            return (
              <div
                className="Cards"
                key={index}
                onClick={() => handleClick(index)}
              >
                <img className="Images" src={charactersInfos.image} alt="" />
                {selectedCharacter === index && (
                  <div className="Attributes">
                    <p className="Names">Personnage : {charactersInfos.name}</p>
                    <p className="Names">Maison : {charactersInfos.house}</p>
                    <p className="Names">Acteur : {charactersInfos.actor}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GalleryAPI;
