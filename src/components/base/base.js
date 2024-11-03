export class Base extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
	}

	styles = null;

	html = null;

	render() {
		if (this.styles) {
			const style = document.createElement('style');
			style.textContent = this.styles;

			this.shadowRoot.appendChild(style);
		}
		if (this.html) {
			const template = document.createElement('template');
			template.innerHTML = this.html;

			this.shadowRoot.appendChild(template.content.cloneNode(true));
		}
	}
}
