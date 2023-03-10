import React from "react";
import characters from "../data/characterData.json";
import Character from "./Character";

const CharacterGallery = () => {
  console.log(characters);
  const characterComponentArray = characters.map((c) => {
    return <Character {...c} key={c._id} />
  });
  console.log(characterComponentArray);
  return (
    <div data-test="component-char-gallery">{characterComponentArray}</div>
  );
};

export default CharacterGallery;
