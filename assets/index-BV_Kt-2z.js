var d=Object.defineProperty;var c=(o,r,e)=>r in o?d(o,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[r]=e;var s=(o,r,e)=>c(o,typeof r!="symbol"?r+"":r,e);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();p();h();function p(){const o=document.querySelector(".circle-image");if(!o)return;const r=Array.from({length:101},(n,t)=>t/100);new IntersectionObserver(n=>{for(const t of n){const i=.8+t.intersectionRatio*.2;o.style.setProperty("--progress",i.toString())}},{root:null,threshold:r}).observe(o)}function h(){const o=document.querySelectorAll(".organization-logo-container .logo");if(!(o!=null&&o.length))return;const r=Array.from({length:101},(n,t)=>t/100),e=new IntersectionObserver(n=>{for(const t of n){const i=.8+t.intersectionRatio*.2;t.target.style.setProperty("--scale",i.toString())}},{root:null,threshold:r});for(const n of o)e.observe(n)}class l extends HTMLElement{constructor(){super();s(this,"styles",null);s(this,"html",null);this.attachShadow({mode:"open"})}render(){if(this.styles){const e=document.createElement("style");e.textContent=this.styles,this.shadowRoot.appendChild(e)}if(this.html){const e=document.createElement("template");e.innerHTML=this.html,this.shadowRoot.appendChild(e.content.cloneNode(!0))}}}class u extends l{constructor(){super();s(this,"mobile",!1);s(this,"styles",`
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
    `);s(this,"html",`
            <header>
                <div class="header-left">
                	  <img class="logo" src="./The Big Share Small.svg" alt="The Big Share" />
                </div>
                <div class="header-right">
                    <p class="organizations-link"> Organizations </p>
                    <slot name="donate-button"></slot>
                </div>
            </header>
            `);super.render()}setupHeaderAnimation(){const e=this.shadowRoot.querySelector("header");document.addEventListener("scroll",()=>{window.scrollY>0?e.classList.add("scrolled"):e.classList.remove("scrolled")})}setupGoToOrganizations(){this.shadowRoot.querySelector(".organizations-link").addEventListener("click",()=>{document.getElementById("organizations").scrollIntoView()})}connectedCallback(){this.setupHeaderAnimation(),this.setupGoToOrganizations()}}customElements.define("header-component",u);class m extends l{constructor(){super();s(this,"styles",`
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
        `);s(this,"html",`
	<div class="main-title-container">
    <img src="./The Big Share.svg" alt="The Big Share" class="main-title"  />
  </div>
        `);super.render()}setupTitleAnimation(){const e=this.shadowRoot.querySelector(".main-title");document.addEventListener("scroll",()=>{const n=window.scrollY;e.style.setProperty("scale",`${1+n/650}`),e.style.setProperty("opacity",`${1-n/650}`)})}connectedCallback(){this.setupTitleAnimation()}}customElements.define("title-component",m);function g({event:o,element:r}){const e=r.getBoundingClientRect();return!(o.clientX>=e.left&&o.clientX<=e.right&&o.clientY>=e.top&&o.clientY<=e.bottom)}class b extends l{constructor(){super();s(this,"styles",`

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
        right: ${this.right||0};
        padding: 1rem;
        background: var(--neutral-100);
        border-radius: 0.5rem;
        display: grid;
        gap: 1rem;
        grid-template-rows: 1fr auto;
        place-items: center;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
        z-index: 1000;
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
    `);s(this,"html",`
    <div class="donate-button-container">
        <button part="button" class="donate-button">Donate</button>
        <div part="donate-dropdown" class="donate-dropdown">
            <div class="steps-container">
                <p class="steps-title">Steps to Donate</p>
                <ul class="steps-list">
                    <li>1. Click Donate below</li>
                    <li>2. You will be redirected to the Give Page</li>
                    <li>3. Enter your information</li>
                    <li>4. Thank you for your support!</li>
                </ul>
            </div>
            <a href="https://blountchurch.churchcenter.com/giving/to/the-big-share" target="_blank">Donate</a>
        </div>
    </div>
    `);super.render()}setupDonateDropDown(){const e=this.shadowRoot.querySelector(".donate-button"),n=this.shadowRoot.querySelector(".donate-dropdown");e.addEventListener("click",t=>{t.stopPropagation(),n.classList.toggle("show")}),document.addEventListener("click",t=>{g({event:t,element:n})&&n.classList.remove("show")})}connectedCallback(){this.setupDonateDropDown()}}customElements.define("donate-button",b);
