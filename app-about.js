/**
 * @description App about component
 */
 customElements.define('app-about', class extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        console.log('about component is loaded')
        this.innerHTML = `
        <!-- ======= Why Us Section ======= -->
        <section id="why-us" class="why-us">
          <div class="container">
    
            <div class="row">
    
              <div class="col-lg-4" data-aos="fade-up">
                <div class="box">
                  <span>01</span>
                  <h4>Discovery</h4>
                  <p>Our agency will identify problems throught advanced research techniques that also may include intensive
                    data collection</p>
                </div>
              </div>
    
              <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="150">
                <div class="box">
                  <span>02</span>
                  <h4>Identify</h4>
                  <p>Once our team of experts have isolated all the problems, a model of your online business will be build
                    to attempt to key in solutions for the identified issues</p>
                </div>
              </div>
    
              <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                <div class="box">
                  <span>03</span>
                  <h4>Integration</h4>
                  <p>After all the identified issues have been resolved, tested through prototypes, any feature integration
                    will take place to solve particular problem</p>
                </div>
              </div>
    
            </div>
    
          </div>
        </section><!-- End Why Us Section -->
        `;
    }
    disconnectedCallback() { 
        this.innerHTML = "";
    }
})
