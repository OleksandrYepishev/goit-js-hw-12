
import Notiflix from "notiflix";
const URL = 'https://restcountries.eu/rest/v2';

function fetchCountries(name) {
        return fetch(`${URL}/name/${name}?fields=name;capital;population;flag;languages`)
        .then(
          (response) => {
            if (!response.ok) {
                throw new Error(Notiflix.Notify.failure('Oops, there is no country with that name'));
            }
            return response.json();
        }
    
    );
}

export default {fetchCountries };