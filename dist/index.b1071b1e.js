customElements.define("app-hero",class extends HTMLElement{constructor(){super()}connectedCallback(){console.log("hero component is loaded"),this.innerHTML='\n        <section id="hero" class="d-flex align-items-center">\n        <div class="container position-relative" data-aos="fade-up" data-aos-delay="500">\n          <h1> <span style="color: red;">Data-Driven </span>& Websites</h1>\n          <h2>Develop, innovate, and inspire through website <span style="color: red;">quality standards </span></h2>\n          <a href="/orders.html" class="btn-get-started scrollto">Get Started</a>\n        </div>\n      </section> \n        '}disconnectedCallback(){this.innerHTML=""}}),customElements.define("app-footer",class extends HTMLElement{constructor(){super()}connectedCallback(){console.log("footer component is loaded"),this.innerHTML='\n        <footer id="footer">\n            <div class="container">\n                <div class="copyright">\n                    <span id="year"></span>  &copy; Copyright <strong><span id="company"></span></strong>. All Rights Reserved\n                    </div>\n                    <div class="credits" id="credits">\n                </div>\n            </div>\n      </footer> \n      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i\n          class="bi bi-arrow-up-short"></i></a>\n      <div id="preloader"></div>\n        ',this.addCompany("BD Group"),this.addCopyrightYear((new Date).getFullYear()),this.addCredits('Developed by <a href="https://bdgroup.co.za">BD Group</a>')}addCredits(n){this.querySelector("#credits").innerHTML=n}addCopyrightYear(n){this.querySelector("#year").innerHTML=n}addCompany(n){this.querySelector("#company").innerHTML=n.toString()}disconnectedCallback(){this.innerHTML=""}}),customElements.define("app-clients",class extends HTMLElement{constructor(){super()}connectedCallback(){console.log("clients component is loaded"),this.innerHTML='\n        \n    \x3c!-- ======= Clients Section ======= --\x3e\n    <section id="clients" class="clients">\n      <div class="container" data-aos="zoom-in">\n\n        <div class="row d-flex align-items-center">\n\n\n          <div class="col-lg-2 col-md-4 col-6">\n            <img src="assets/img/clients/client-2.png" class="img-fluid" alt="">\n          </div>\n\n          <div class="col-lg-2 col-md-4 col-6">\n            <img src="assets/img/clients/client-3.png" class="img-fluid" alt="">\n          </div>\n\n          <div class="col-lg-2 col-md-4 col-6">\n            <img src="assets/img/clients/client-4.png" class="img-fluid" alt="">\n          </div>\n\n          <div class="col-lg-2 col-md-4 col-6">\n            <img src="assets/img/clients/client-5.png" class="img-fluid" alt="">\n          </div>\n\n          <div class="col-lg-2 col-md-4 col-6">\n            <img src="assets/img/clients/client-6.png" class="img-fluid" alt="">\n          </div>\n\n          <div class="col-lg-2 col-md-4 col-6">\n            <img src="assets/img/clients/client-7.png" class="img-fluid" alt="">\n          </div>\n        </div>\n\n      </div>\n    </section>\n        '}disconnectedCallback(){this.innerHTML=""}}),customElements.define("app-services",class extends HTMLElement{constructor(){super()}connectedCallback(){console.log("services component is loaded"),this.template=document.createElement("template"),this.template.innerHTML='\n        \x3c!-- ======= Services Section ======= --\x3e\n        <section id="services" class="services">\n          <div class="container">\n    \n            <div class="section-title">\n              <span>Services</span>\n              <h2>Services</h2>\n              <p>Discover how data can improve your business growth acceleration</p>\n            </div>\n    \n            <div class="row">\n              <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up">\n                <div class="icon-box">\n                  <div class="icon"><i class="bx bxl-whatsapp"></i></div>\n                  <h4><a href="#livechat">Live Chat</a></h4>\n                  <p>Live Chat Integration on your website, to help customers to get intouch with you instantly.\n                  </p>\n                </div>\n              </div>\n    \n              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up"\n                data-aos-delay="150">\n                <div class="icon-box">\n                  <div class="icon"><i class="bx bx-file"></i></div>\n                  <h4><a href="">Content Creation</a></h4>\n                  <p>Article, content creation for your website, including product descriptions for e-commerce.</p>\n                </div>\n              </div>\n    \n              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="fade-up"\n                data-aos-delay="300">\n                <div class="icon-box">\n                  <div class="icon"><i class="bx bx-tachometer"></i></div>\n                  <h4><a href="">Machine Learning</a></h4>\n                  <p>Artificial intelligence for mobile, and web in order to integrate face recognition, translation, text toxicity detection and more.\n                  </p>\n                </div>\n              </div>\n    \n              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="450">\n                <div class="icon-box">\n                  <div class="icon"><i class="bx bx-code"></i></div>\n                  <h4><a href="">Web Add-on features</a></h4>\n                  <p>Feature upgrades, custom website plugins for content management systems (CMS), blogs and design of user interface.</p>\n                </div>\n              </div>\n    \n              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="600">\n                <div class="icon-box">\n                  <div class="icon"><i class="bx bx-chart"></i></div>\n                  <h4><a href="">Website Statistics</a></h4>\n                  <p>Helping you track website traffic, crash analytics in real time, set event real time conversion goals and monitoring</p>\n                </div>\n              </div>\n    \n              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="750">\n                <div class="icon-box">\n                  <div class="icon"><i class="bx bx-cog"></i></div>\n                  <h4><a href="">Continuous Integration</a></h4>\n                  <p>We perform seamlessly fast continous integration, development and testing of your website. </p>\n                  <div id="cicd"></div>\n                </div>\n              </div>\n    \n            </div>\n    \n          </div>\n        </section>\x3c!-- End Services Section --\x3e\n        ',this.node=this.template.cloneNode(!0).content,this.cicd=this.node.querySelector("#cidcd"),this.append(this.node)}disconnectedCallback(){this.innerHTML=""}}),customElements.define("app-about",class extends HTMLElement{constructor(){super()}connectedCallback(){console.log("about component is loaded"),this.innerHTML='\n        \x3c!-- ======= Why Us Section ======= --\x3e\n        <section id="why-us" class="why-us">\n          <div class="container">\n    \n            <div class="row">\n    \n              <div class="col-lg-4" data-aos="fade-up">\n                <div class="box">\n                  <span>01</span>\n                  <h4>Discovery</h4>\n                  <p>Our agency will identify problems throught advanced research techniques that also may include intensive\n                    data collection</p>\n                </div>\n              </div>\n    \n              <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="150">\n                <div class="box">\n                  <span>02</span>\n                  <h4>Identify</h4>\n                  <p>Once our team of experts have isolated all the problems, a model of your online business will be build\n                    to attempt to key in solutions for the identified issues</p>\n                </div>\n              </div>\n    \n              <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">\n                <div class="box">\n                  <span>03</span>\n                  <h4>Integration</h4>\n                  <p>After all the identified issues have been resolved, tested through prototypes, any feature integration\n                    will take place to solve particular problem</p>\n                </div>\n              </div>\n    \n            </div>\n    \n          </div>\n        </section>\x3c!-- End Why Us Section --\x3e\n        '}disconnectedCallback(){this.innerHTML=""}}),customElements.define("app-contact",class extends HTMLElement{constructor(){super()}connectedCallback(){console.log("contact component is loaded"),this.innerHTML='\n        \x3c!-- ======= Contact Section ======= --\x3e\n        <section id="contact" class="contact">\n          <div class="container">\n    \n            <div class="section-title">\n              <span>Contact</span>\n              <h2>Contact</h2>\n              <p>We\'d love to your about your project.</p>\n            </div>\n    \n            <div class="row" data-aos="fade-up">\n              <div class="col-lg-6">\n                <div class="info-box mb-4">\n                  <i class="bx bx-map"></i>\n                  <h3>Our Address</h3>\n                  <p>Rosebank corner 191, rivonia, 2196</p>\n                </div>\n              </div>\n    \n              <div class="col-lg-3 col-md-6">\n                <div class="info-box  mb-4">\n                  <i class="bx bx-envelope"></i>\n                  <h3>Email Us</h3>\n                  <p>info@bdgroup.co.za</p>\n                </div>\n              </div>\n    \n              <div class="col-lg-3 col-md-6">\n                <div class="info-box  mb-4">\n                  <i class="bx bx-phone-call"></i>\n                  <h3>Call Us</h3>\n                  <p>+27 087 057-1581</p>\n                </div>\n              </div>\n    \n            </div>\n    \n            <div class="row" data-aos="fade-up">\n     \n            </div>\n    \n          </div>\n        </section>\x3c!-- End Contact Section --\x3e\n        '}disconnectedCallback(){this.innerHTML=""}}),customElements.define("app-header",class extends HTMLElement{constructor(){super()}connectedCallback(){console.log("header component is loaded"),this.innerHTML='\n        \n  \x3c!-- ======= Top Bar ======= --\x3e\n  <section id="topbar" class="d-flex align-items-center">\n    <div class="container d-flex justify-content-center justify-content-md-between">\n      <div class="contact-info d-flex align-items-center">\n        <i class="bi bi-envelope"></i><a href="mailto:bdgroup.inbox@outlook.com">info@bdgroup.co.za</a>\n        &nbsp; <i class="bi bi-whatsapp  "></i> 087 057-1581\n      </div>\n      <div class="social-links d-none d-md-block">\n        <a href="https://twitter.com/realgmatyila" class="twitter"><i class="bi bi-twitter"></i></a>\n        <a href="https://facebook.com/bdgroupcoza" class="facebook"><i class="bi bi-facebook"></i></a>\n        <a href="https://www.instagram.com/goodwish_za/" class="instagram"><i class="bi bi-instagram"></i></a>\n\n      </div>\n    </div>\n  </section>\n\n  \x3c!-- ======= Header ======= --\x3e\n  <header id="header" class="d-flex align-items-center">\n    <div class="container d-flex align-items-center justify-content-between">\n\n      <h1 class="logo"><a href="index.html"> <span style="color: red;">BD </span> Group</a></h1>\n\n      <nav id="navbar" class="navbar">\n        <ul>\n          <li><a class="nav-link" href="/">Home</a></li>\n\n          <li><a class="nav-link" href="services.html">Services</a></li>\n\n          <li><a class="nav-link" href="contact.html">Contact Us</a></li>\n\n          <li><a class="nav-link" href="https://tawk.to/chat/5db1f93178ab74187a5b66df/default">Get Support</a>\n          </li>\n\n          <li><a class="nav-link" href="login.html">License Renewals</a></li>\n          <li><a class="nav-link" href="orders.html">Buy Services</a></li>\n <li><a class="nav-link" href="seoflow.html">Chrome Downloads</a></li>\n        </ul>\n        <i class="bi bi-list mobile-nav-toggle"></i>\n      </nav>\x3c!-- .navbar --\x3e\n\n    </div>\n  </header>\x3c!-- End Header --\x3e\n        '}disconnectedCallback(){this.innerHTML=""}}),customElements.define("app-bdgroup",class extends HTMLElement{constructor(){super(),this.mainId="main",this.template=document.createElement("template"),this.template.innerHTML=`\n            <app-header></app-header>\n            <app-hero></app-hero>\n            <main id="${this.mainId}">\n            </main> \n            <app-footer></app-footer>        \n        `}connectedCallback(){console.log("app initialized"),this.node=this.template.cloneNode(!0).content,this.append(this.node)}disconnectedCallback(){this.innerHTML="",this.node=""}});
//# sourceMappingURL=index.b1071b1e.js.map