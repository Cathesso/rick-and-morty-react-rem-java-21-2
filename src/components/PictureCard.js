import CharacterName from "./CharacterName";

function PictureCard({ character }) {
  return (
    <div>
      <img src={character.image} alt="Much majestic, very wow!" />
      <CharacterName name={character.name} />
      <p class="description">
        {" "}
        <strong>Description:</strong> {character.species}{" "}
      </p>
      <p>
        <strong>Origin: </strong>
        {character.origin.name}
      </p>
    </div>
  );
}

export default PictureCard;
