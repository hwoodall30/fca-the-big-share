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

       .main-title {
            font-size: clamp(4rem, 10vw, 8rem);
            color: var(--neutral-50);
            font-weight: bold;
            text-align: center;
            display: flex;
            gap: 2rem;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
        `;

	html = /*html*/ `
    <h1 class="main-title">The Big Share</h1>
        `;
}

customElements.define("title-component", Title);
