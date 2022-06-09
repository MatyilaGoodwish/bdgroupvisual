/**
 * @description import App Global modules
 */
import "./app-hero";
import "./app-footer";
import "./app-clients";
import "./app-services";
import "./app-about";
import "./app-contact";
import "./app-header";
 
/**
 * @description Initial App component
 */
customElements.define('app-bdgroup', class extends HTMLElement{
    constructor() {
        super();
        this.mainId = "main";
        this.template = document.createElement("template");
        this.template.innerHTML = `
            <app-header></app-header>
            <app-hero></app-hero>
            <main id="${this.mainId}">
            </main> 
            <app-footer></app-footer>        
        `;
    }
    connectedCallback() { 
        console.log('app initialized');
        this.node = this.template.cloneNode(true).content;
        this.append(this.node);
    }
    disconnectedCallback() {
        this.innerHTML = "";
        this.node = "";
    }
})
























