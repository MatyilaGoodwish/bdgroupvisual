/**
 * @description Services hero component
 */

 customElements.define('app-services', class extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        console.log('services component is loaded')
        this.template = document.createElement("template");
        this.template.innerHTML = `
        <!-- ======= Services Section ======= -->
        <section id="services" class="services">
          <div class="container">
    
            <div class="section-title">
              <span>Services</span>
              <h2>Services</h2>
              <p>Discover how data can improve your business growth acceleration</p>
            </div>
    
            <div class="row">
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                <div class="icon-box">
                  <div class="icon"><i class="bx bxl-whatsapp"></i></div>
                  <h4><a href="#livechat">Live Chat</a></h4>
                  <p>Live Chat Integration on your website, to help customers to get intouch with you instantly.
                  </p>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up"
                data-aos-delay="150">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-file"></i></div>
                  <h4><a href="">Content Creation</a></h4>
                  <p>Article, content creation for your website, including product descriptions for e-commerce.</p>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="fade-up"
                data-aos-delay="300">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-tachometer"></i></div>
                  <h4><a href="">Machine Learning</a></h4>
                  <p>Artificial intelligence for mobile, and web in order to integrate face recognition, translation, text toxicity detection and more.
                  </p>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="450">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-code"></i></div>
                  <h4><a href="">Web Add-on features</a></h4>
                  <p>Feature upgrades, custom website plugins for content management systems (CMS), blogs and design of user interface.</p>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="600">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-chart"></i></div>
                  <h4><a href="">Website Statistics</a></h4>
                  <p>Helping you track website traffic, crash analytics in real time, set event real time conversion goals and monitoring</p>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="750">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-cog"></i></div>
                  <h4><a href="">Continuous Integration</a></h4>
                  <p>We perform seamlessly fast continous integration, development and testing of your website. </p>
                  <div id="cicd"></div>
                </div>
              </div>
    
            </div>
    
          </div>
        </section><!-- End Services Section -->
        `;
        this.node = this.template.cloneNode(true).content;
        this.cicd = this.node.querySelector("#cidcd");
        this.append(this.node)
    }
    disconnectedCallback() { 
        this.innerHTML = "";
    }
})