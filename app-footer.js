/**
 * @description Footer about component
 */
 customElements.define('app-footer', class extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        console.log('footer component is loaded')
        this.innerHTML = `
        <footer id="footer">
            <div class="container">
                <div class="copyright">
                    <span id="year"></span>  &copy; Copyright <strong><span id="company"></span></strong>. All Rights Reserved
                    </div>
                    <div class="credits" id="credits">
                </div>
            </div>
      </footer> 
      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
          class="bi bi-arrow-up-short"></i></a>
      <div id="preloader"></div>
        `;
        this.addCompany("BD Group");
        this.addCopyrightYear(new Date().getFullYear());
        this.addCredits(`Developed by <a href="https://bdgroup.co.za">BD Group</a>`);
    }
    addCredits(credits) {
        this.querySelector("#credits").innerHTML = credits;
    }
    addCopyrightYear(year){
        this.querySelector("#year").innerHTML = year;
    }
    addCompany(name) {
        this.querySelector("#company").innerHTML = name.toString();
    }
    disconnectedCallback() { 
        this.innerHTML = "";
    }
})
