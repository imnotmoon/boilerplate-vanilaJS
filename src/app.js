import hello from "./_utils/flux.js";
import "../public/stylesheets/index.scss";

export default class App {
	constructor() {
		document.querySelector("#app").innerHTML = hello;
	}
}
