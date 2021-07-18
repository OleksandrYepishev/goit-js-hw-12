import './css/styles.css';
import API from './js/fetchCountries';
import Notiflix from "notiflix";
import debounce from 'lodash.debounce';
import countryCard from './templates/countryMarkup.hbs';
import countriesList from './templates/countriesList.hbs'

const DEBOUNCE_DELAY = 300;
const fetchCountryInput = document.getElementById('search-box');
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

fetchCountryInput.addEventListener('input', debounce(onSearch,DEBOUNCE_DELAY));

function onSearch(e) {
    e.preventDefault();
   
    const country = e.target.value.trim();
    if (country === '') {
        return clearSearchResults();
    }
    
    else {
        API.fetchCountries(country)
            .then(renderCountryCard)
            .catch((error) => console.log(error))
            .finally(clearSearchResults());
    }
}

function renderCountryCard(countries) {
    
      if (countries.length === 1) {
        countryInfo.insertAdjacentHTML('beforeend', countryCard(countries[0]));
      } 
    
     else if (countries.length >= 2 && countries.length <= 10) {
        countryList.insertAdjacentHTML('beforeend', countriesList(countries));
      }
          
      else {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
      }      
}

function clearSearchResults() {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
}