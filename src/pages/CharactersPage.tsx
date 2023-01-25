import CharactersList from '@components/CharactersList';
import {characters} from '@store';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

const CharactersPage = observer(() => {
  useEffect(() => {
    characters.getCharacters();
  },[])
  return <CharactersList characters={characters.charactersList}/>
})

export default CharactersPage;