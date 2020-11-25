import VacancyListing from './components/vacancy-listing';
import './styles.scss';

declare let window: any;

/**
 * Store the components against window so they can be used by another script in the browser
 */
window.oleeo = {};

window.oleeo.VacancyListing = VacancyListing;
