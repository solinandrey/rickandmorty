import styles from "./CharacterMain.module.scss";
import { CharacterFull } from "@types";

interface IProps {
  info: CharacterFull;
}

const CharacterMain = ({
  info: { id, name, image },
}: IProps) => {
  return (
    <div className="">
      <div className="id">ID: {id}</div>
      <div className="name">Name: {name}</div>
      <div className="image">Image: <img src={image} alt="" /></div>
    </div>
  );
};

export default CharacterMain;
