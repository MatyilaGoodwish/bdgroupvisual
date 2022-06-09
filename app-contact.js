/**
 * @description Contact about component
 */
 customElements.define('app-contact', class extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        console.log('contact component is loaded')
        this.innerHTML = `
        <!-- ======= Contact Section ======= -->
        <section id="contact" class="contact">
          <div class="container">
    
            <div class="section-title">
              <span>Contact</span>
              <h2>Contact</h2>
              <p>We'd love to your about your project.</p>
            </div>
    
            <div class="row" data-aos="fade-up">
              <div class="col-lg-6">
                <div class="info-box mb-4">
                  <i class="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>Rosebank corner 191, rivonia, 2196</p>
                </div>
              </div>
    
              <div class="col-lg-3 col-md-6">
                <div class="info-box  mb-4">
                  <i class="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>info@bdgroup.co.za</p>
                </div>
              </div>
    
              <div class="col-lg-3 col-md-6">
                <div class="info-box  mb-4">
                  <i class="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>+27 087 057-1581</p>
                </div>
              </div>
    
            </div>
    
            <div class="row" data-aos="fade-up">
     
            </div>
    
          </div>
        </section><!-- End Contact Section -->
        `;
    }
    disconnectedCallback() { 
        this.innerHTML = "";
    }
})