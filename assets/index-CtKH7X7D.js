var c=Object.defineProperty;var d=(r,o,t)=>o in r?c(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t;var s=(r,o,t)=>d(r,typeof o!="symbol"?o+"":o,t);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();h();m();function h(){const r=document.querySelector(".circle-image");if(!r)return;const o=Array.from({length:101},(i,e)=>e/100);new IntersectionObserver(i=>{for(const e of i){const n=.8+e.intersectionRatio*.2;r.style.setProperty("--progress",n.toString())}},{root:null,threshold:o}).observe(r)}function m(){const r=document.querySelectorAll(".organization-logo-container .logo");if(!(r!=null&&r.length))return;const o=Array.from({length:101},(i,e)=>e/100),t=new IntersectionObserver(i=>{for(const e of i){const n=.8+e.intersectionRatio*.2;e.target.style.setProperty("--scale",n.toString())}},{root:null,threshold:o});for(const i of r)t.observe(i)}class a extends HTMLElement{constructor(){super();s(this,"styles",null);s(this,"html",null);this.attachShadow({mode:"open"})}render(){if(this.styles){const t=document.createElement("style");t.textContent=this.styles,this.shadowRoot.appendChild(t)}if(this.html){const t=document.createElement("template");t.innerHTML=this.html,this.shadowRoot.appendChild(t.content.cloneNode(!0))}}}class u extends a{constructor(){super();s(this,"mobile",!1);s(this,"styles",`
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
            `);super.render()}setupHeaderAnimation(){const t=this.shadowRoot.querySelector("header");document.addEventListener("scroll",()=>{window.scrollY>0?t.classList.add("scrolled"):t.classList.remove("scrolled")})}setupGoToOrganizations(){this.shadowRoot.querySelector(".organizations-link").addEventListener("click",()=>{document.getElementById("organizations").scrollIntoView()})}connectedCallback(){this.setupHeaderAnimation(),this.setupGoToOrganizations()}}customElements.define("header-component",u);class p extends a{constructor(){super();s(this,"styles",`
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
        `);super.render()}setupTitleAnimation(){const t=this.shadowRoot.querySelector(".main-title");document.addEventListener("scroll",()=>{const i=window.scrollY;t.style.setProperty("scale",`${1+i/650}`),t.style.setProperty("opacity",`${1-i/650}`)})}connectedCallback(){this.setupTitleAnimation()}}customElements.define("title-component",p);
