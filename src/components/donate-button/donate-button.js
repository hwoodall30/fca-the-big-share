import { isOutsideClick } from '../../utils/isOutsideClick.js';
import { Base } from '../base/base.js';

class DonateButton extends Base {
	constructor() {
		super();

		super.render();
	}

	setupDonateDropDown() {
		const button = this.shadowRoot.querySelector('.donate-button');
		const donateDropdown = this.shadowRoot.querySelector('.donate-dropdown');

		button.addEventListener('click', (e) => {
			e.stopPropagation();
			donateDropdown.classList.toggle('show');
		});

		document.addEventListener('click', (e) => {
			if (isOutsideClick({ event: e, element: donateDropdown })) {
				donateDropdown.classList.remove('show');
			}
		});
	}

	connectedCallback() {
		this.setupDonateDropDown();
	}

	styles = /*css*/ `

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :host {
        display: block;

        --button-padding: 0.5rem 1rem;
    }

    .donate-button-container {
        position: relative;
    }
    
    .donate-button {
        display: grid;
        place-items: center;
        background: var(--neutral-100);
        padding: var(--button-padding);
        border-radius: 9999px;
        border: none;
        outline: none;
        color: white;
        cursor: pointer;
        font-weight: bold;
        color: var(--neutral-700);
        font-size: 0.8rem;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    }
    
    .donate-dropdown {
        color: var(--neutral-700);
        opacity: 0;
        scale: 0.8;
        translate: 0 -20px;
        transition: all 0.2s ease;
        position: absolute;
        pointer-events: none;
        top: 110%;
        right: ${this.right || 0};
        padding: 1rem;
        background: var(--neutral-100);
        border-radius: 0.5rem;
        display: grid;
        gap: 1rem;
        grid-template-rows: 1fr auto;
        place-items: center;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    }
    
    .donate-dropdown .steps-container {
        display: grid;
        gap: 0.5rem;
    }
    
    .donate-dropdown .steps-list > li {
        width: clamp(14rem, 20vw, 20rem);
    }
    
    .donate-dropdown .steps-title {
        font-weight: bold;
    }
    
    .donate-dropdown .steps-list {
        list-style: none;
        font-size: 0.7rem;
    }
    
    .donate-dropdown a {
        background: white;
        border-radius: 9999px;
        padding: 0.5rem 1rem;
        color: var(--neutral-700);
        text-decoration: none;
        font-size: 0.8rem;
        font-weight: bold;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    }

    .donate-dropdown.show {
        opacity: 1;
        scale: 1;
        translate: 0 0;
        pointer-events: all;
    }
    `;

	html = /*html*/ `
    <div class="donate-button-container">
        <button part="button" class="donate-button">Donate</button>
        <div part="donate-dropdown" class="donate-dropdown">
            <div class="steps-container">
                <p class="steps-title">Steps to Donate</p>
                <ul class="steps-list">
                    <li>1. Click Donate below</li>
                    <li>2. You will be redirected to the Give Page</li>
                    <li>3. Enter your information</li>
                    <li>4. Donate to a great cause. Thank you for your support!</li>
                </ul>
            </div>
            <a href="https://blountchurch.churchcenter.com/giving/to/the-big-share" target="_blank">Donate</a>
        </div>
    </div>
    `;
}

customElements.define('donate-button', DonateButton);
