import { useParams, Link } from "react-router-dom";
import { characters } from "@store";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import CharacterMain from "@components/CharacterMain";

const CharacterDetail = observer(() => {
  const { id } = useParams();
  useEffect(() => {
    if (id) characters.getDetailedCharacter(Number(id));
  }, [id]);

  if (characters.detailedCharacter) {
    return (
      <div className="detailed-page">
        <Link to="/">Home</Link>
        <CharacterMain info={characters.detailedCharacter}/>
        <div className="">{characters.detailedCharacter?.name}</div>
      </div>
    );
  } else {
    return <div className="">NO SUCH CHARACTER</div>
  }
  
});

export default CharacterDetail;
