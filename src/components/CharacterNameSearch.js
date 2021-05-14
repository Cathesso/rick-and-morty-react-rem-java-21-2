function CharacterNameSearch({ searchString }) {
    return(
        <input
            value={searchString}
            onChange={(event) => {
                setSearchString(event.target.value);
            }}
        />
    );
}

export default CharacterNameSearch;