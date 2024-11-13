import { Base } from "../base/base.js";

class Title extends Base {
	constructor() {
		super();

		super.render();
	}

	setupTitleAnimation() {
		const title = this.shadowRoot.querySelector(".main-title");
		document.addEventListener("scroll", () => {
			const scrollPosition = window.scrollY;

			title.style.setProperty("scale", `${1 + scrollPosition / 650}`);
			title.style.setProperty("opacity", `${1 - scrollPosition / 650}`);
		});
	}

	connectedCallback() {
		this.setupTitleAnimation();
	}

	styles = /*css*/ `
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        :host {
            width: 100%;
        }

        .main-title-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
        }

       .main-title {
            font-size: clamp(4rem, 10vw, 8rem);
            color: var(--neutral-50);
            font-weight: bold;
            text-align: center;
            display: flex;
            gap: 2rem;
            justify-content: center;
            align-items: center;
            width: 40%;
            min-width: 300px;
            max-width: 1000px;
            scale: 1;
            opacity: 1;
        }
        `;

	html = /*html*/ `
	<div class="main-title-container">
    <img src="./The Big Share.svg" alt="The Big Share" class="main-title"  />
  </div>
        `;
}

customElements.define("title-component", Title);
