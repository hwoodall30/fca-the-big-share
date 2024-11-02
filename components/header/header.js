import { Base } from '../base/base.js';

class Header extends Base {
	constructor() {
		super();

		super.render();
	}

	setupHeaderAnimation() {
		const header = this.shadowRoot.querySelector('header');
		document.addEventListener('scroll', () => {
			window.scrollY > 0 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
		});
	}

	connectedCallback() {
		this.setupHeaderAnimation();
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
        height: 4rem;
        z-index: 100;
    }

    header {
        height: 100%;
        top: 0;
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
    }

    header.scrolled {
        height: 5rem;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(4px);
        --webkit-backdrop-filter: blur(4px);
    }
    
    header h1 {
        font-size: clamp(0.75rem, 2vw, 1rem);
        font-weight: bold;
    }

    header h1 a {
        text-decoration: none;
        color: inherit;
    }
    
    header .header-right {
        display: flex;
        gap: 1rem;
        align-items: center;
        font-size: 0.8rem;
    }
    
    header .header-right a {
        color: inherit;
        text-decoration: none;
        font-weight: 600;
    }
    `;

	html = /*html*/ `
            <header>
                <h1><a href="../">Smoky Mountain FCA - The Big Share</a></h1>
                <div class="header-right">
                    <a href="#organizations"> Organizations </a>
                    <donate-button></donate-button> 
                </div>
            </header>
            `;
}

customElements.define('header-component', Header);
