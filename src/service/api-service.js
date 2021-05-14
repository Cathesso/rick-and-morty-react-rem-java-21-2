import axios from "axios";

/*export function loadCharacters() {
    return fetch("https://rickandmortyapi.com/api/character/?page=13").then((response) =>
        response.json()
    );
}*/

export function loadCharacters(){
    // Make a request for a user with a given ID
    return axios.get('https://rickandmortyapi.com/api/character/?page=12')
        .then(response => {
            // handle success
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}