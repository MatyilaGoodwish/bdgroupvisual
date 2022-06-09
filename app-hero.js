/**
 * @description App hero component
 */
 customElements.define('app-hero', class extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        console.log('hero component is loaded')
        this.innerHTML = `
        <section id="hero" class="d-flex align-items-center">
        <div class="container position-relative" data-aos="fade-up" data-aos-delay="500">
          <h1> <span style="color: red;">Data-Driven </span>& Websites</h1>
          <h2>Develop, innovate, and inspire through website <span style="color: red;">quality standards </span></h2>
          <a href="/orders.html" class="btn-get-started scrollto">Get Started</a>
        </div>
      </section> 
        `;
    }
    disconnectedCallback() { 
        this.innerHTML = "";
    }
})