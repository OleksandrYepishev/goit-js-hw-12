
const URL = 'https://restcountries.eu/rest/v2';

function fetchCountries(name) {
    
    return fetch('${URL}/name/${name}?fields={name};{capital};{population};{flag};{languages }')
        .then(
          (response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        }
    
    );
}

export default { fetchCountries };