/* 
CMS-Javascript (spa) 
Autor: Guillermo Jiménez López
Fecha de Actualización: 25.09.2024
Versión: 3.0.1 - Vite
*/
//Files import
//[CSS]
import './public/assets/css/style.css'
//[JS]

//Files import for App
import { inicio, load } from './src/app/core/lib';
//import { consoleLocal } from './src/app/functions';

//HASHCHANGE EVENT LISTENER FOR APP
/*window.addEventListener('hashchange', () => {
    consoleLocal('warn', 'Event Listener');
    load();
});*/

// create document click that watches the nav links only
document.addEventListener("click", (e) => {
	const { target } = e;
	if (!target.matches("nav a")) {
		return;
	}
	e.preventDefault();
	urlRoute();
});

// create a function that watches the url and calls the urlLocationHandler
const urlRoute = (event) => {
	event = event || window.event; // get window.event if event argument not provided
	event.preventDefault();
	// window.history.pushState(state, unused, target link);
	window.history.pushState({}, "", event.target.href);
	//urlLocationHandler();
    load();
};


// add an event listener to the window that watches for url changes
//window.onpopstate = urlLocationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = urlRoute;
// call the urlLocationHandler function to handle the initial url
//urlLocationHandler();

inicio();