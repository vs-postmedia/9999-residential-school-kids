// CSS
import normalize from './css/normalize.css';
import colours from './css/colors.css';
import fonts from './css/fonts.css';
import css from './css/main.css';

// JS
import Rellax from 'rellax';
import * as App from './js/App/app.js';
import data from './data/data.js';

const init = async () => {
	const rellax = new Rellax('.rellax');
	App.init(data.sort(() => Math.random() - 0.5), '#background');
};


init();