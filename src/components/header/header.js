import { Base } from "../base/base.js";

class Header extends Base {
	mobile = false;
	constructor() {
		super();

		super.render();
	}

	setupHeaderAnimation() {
		const header = this.shadowRoot.querySelector("header");
		document.addEventListener("scroll", () => {
			window.scrollY > 0 ? header.classList.add("scrolled") : header.classList.remove("scrolled");
		});
	}

	setupGoToOrganizations() {
		this.shadowRoot.querySelector(".organizations-link").addEventListener("click", () => {
			document.getElementById("organizations").scrollIntoView();
		});
	}

	connectedCallback() {
		this.setupHeaderAnimation();
		this.setupGoToOrganizations();
	}

	styles = /*css*/ `
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :host {
        width: 100%;
        display: block;
        position: fixed;
        top: 0;
        height: 4rem;
        z-index: 100;
    }

    header {
        height: 100%;
        width: 100%;
        display: grid;
        align-items: center;
        padding: 0 2rem;
        transition: all 0.2s ease;
        grid-template-columns: repeat(2, auto);
        justify-content: space-between;
        z-index: 100;
        color: white;
        background: rgba(255, 255, 255, 0.2);
        color: var(--neutral-950);
    }

    header.scrolled {
        height: 5rem;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }

    header .header-left {
        font-size: clamp(0.9rem, 2vw, 1rem);
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    header .logo {
        width: 90px;
        height: 65px;
        border-radius: 9999px;
    }

    header .header-right {
        display: flex;
        gap: 1rem;
        align-items: center;
        font-size: 0.8rem;
    }

    header .header-right p {
        color: var(--primary-blue);
        text-decoration: none;
        font-weight: 600;
    }

    header .organizations-link {
        cursor: pointer;
    }
    `;

	html = /*html*/ `
            <header>
                <div class="header-left">
                	  <img class="logo" src="./The Big Share Small.svg" alt="The Big Share" />
                </div>
                <div class="header-right">
                    <p class="organizations-link"> Organizations </p>
                    <slot name="donate-button"></slot>
                </div>
            </header>
            `;
}

customElements.define("header-component", Header);
