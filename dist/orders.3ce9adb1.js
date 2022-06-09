customElements.define("app-footer",class extends HTMLElement{constructor(){super()}connectedCallback(){console.log("footer component is loaded"),this.innerHTML='\n        <footer id="footer">\n            <div class="container">\n                <div class="copyright">\n                    <span id="year"></span>  &copy; Copyright <strong><span id="company"></span></strong>. All Rights Reserved\n                    </div>\n                    <div class="credits" id="credits">\n                </div>\n            </div>\n      </footer> \n      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i\n          class="bi bi-arrow-up-short"></i></a>\n      <div id="preloader"></div>\n        ',this.addCompany("BD Group"),this.addCopyrightYear((new Date).getFullYear()),this.addCredits('Developed by <a href="https://bdgroup.co.za">BD Group</a>')}addCredits(e){this.querySelector("#credits").innerHTML=e}addCopyrightYear(e){this.querySelector("#year").innerHTML=e}addCompany(e){this.querySelector("#company").innerHTML=e.toString()}disconnectedCallback(){this.innerHTML=""}}),customElements.define("app-header",class extends HTMLElement{constructor(){super()}connectedCallback(){console.log("header component is loaded"),this.innerHTML='\n        \n  \x3c!-- ======= Top Bar ======= --\x3e\n  <section id="topbar" class="d-flex align-items-center">\n    <div class="container d-flex justify-content-center justify-content-md-between">\n      <div class="contact-info d-flex align-items-center">\n        <i class="bi bi-envelope"></i><a href="mailto:bdgroup.inbox@outlook.com">info@bdgroup.co.za</a>\n        &nbsp; <i class="bi bi-whatsapp  "></i> 087 057-1581\n      </div>\n      <div class="social-links d-none d-md-block">\n        <a href="https://twitter.com/realgmatyila" class="twitter"><i class="bi bi-twitter"></i></a>\n        <a href="https://facebook.com/bdgroupcoza" class="facebook"><i class="bi bi-facebook"></i></a>\n        <a href="https://www.instagram.com/goodwish_za/" class="instagram"><i class="bi bi-instagram"></i></a>\n\n      </div>\n    </div>\n  </section>\n\n  \x3c!-- ======= Header ======= --\x3e\n  <header id="header" class="d-flex align-items-center">\n    <div class="container d-flex align-items-center justify-content-between">\n\n      <h1 class="logo"><a href="index.html"> <span style="color: red;">BD </span> Group</a></h1>\n\n      <nav id="navbar" class="navbar">\n        <ul>\n          <li><a class="nav-link" href="/">Home</a></li>\n\n          <li><a class="nav-link" href="services.html">Services</a></li>\n\n          <li><a class="nav-link" href="contact.html">Contact Us</a></li>\n\n          <li><a class="nav-link" href="https://tawk.to/chat/5db1f93178ab74187a5b66df/default">Get Support</a>\n          </li>\n\n          <li><a class="nav-link" href="login.html">License Renewals</a></li>\n          <li><a class="nav-link" href="orders.html">Buy Services</a></li>\n        </ul>\n        <i class="bi bi-list mobile-nav-toggle"></i>\n      </nav>\x3c!-- .navbar --\x3e\n\n    </div>\n  </header>\x3c!-- End Header --\x3e\n        '}disconnectedCallback(){this.innerHTML=""}}),customElements.define("app-hero",class extends HTMLElement{constructor(){super()}connectedCallback(){console.log("hero component is loaded"),this.innerHTML='\n        <section id="hero" class="d-flex align-items-center">\n        <div class="container position-relative" data-aos="fade-up" data-aos-delay="500">\n          <h1> <span style="color: red;">Data-Driven </span>& Websites</h1>\n          <h2>Develop, innovate, and inspire through website <span style="color: red;">quality standards </span></h2>\n          <a href="/orders.html" class="btn-get-started scrollto">Get Started</a>\n        </div>\n      </section> \n        '}disconnectedCallback(){this.innerHTML=""}}),customElements.define("app-contact",class extends HTMLElement{constructor(){super()}connectedCallback(){console.log("contact component is loaded"),this.innerHTML='\n        \x3c!-- ======= Contact Section ======= --\x3e\n        <section id="contact" class="contact">\n          <div class="container">\n    \n            <div class="section-title">\n              <span>Contact</span>\n              <h2>Contact</h2>\n              <p>We\'d love to your about your project.</p>\n            </div>\n    \n            <div class="row" data-aos="fade-up">\n              <div class="col-lg-6">\n                <div class="info-box mb-4">\n                  <i class="bx bx-map"></i>\n                  <h3>Our Address</h3>\n                  <p>Rosebank corner 191, rivonia, 2196</p>\n                </div>\n              </div>\n    \n              <div class="col-lg-3 col-md-6">\n                <div class="info-box  mb-4">\n                  <i class="bx bx-envelope"></i>\n                  <h3>Email Us</h3>\n                  <p>info@bdgroup.co.za</p>\n                </div>\n              </div>\n    \n              <div class="col-lg-3 col-md-6">\n                <div class="info-box  mb-4">\n                  <i class="bx bx-phone-call"></i>\n                  <h3>Call Us</h3>\n                  <p>+27 087 057-1581</p>\n                </div>\n              </div>\n    \n            </div>\n    \n            <div class="row" data-aos="fade-up">\n     \n            </div>\n    \n          </div>\n        </section>\x3c!-- End Contact Section --\x3e\n        '}disconnectedCallback(){this.innerHTML=""}}),customElements.define("app-bdgroup",class extends HTMLElement{constructor(){super(),this.mainId="main",this.template=document.createElement("template"),this.template.innerHTML=`\n            <app-header></app-header>\n            <main id="${this.mainId}">\n                <div class="">\n                        <div id="login"></div>\n                        <div id="productList"></div>\n                </div>\n            </main> \n            <app-contact></app-contact>\n            <app-footer></app-footer>        \n        `}connectedCallback(){console.log("app initialized"),this.node=this.template.cloneNode(!0).content;let e=this.node.querySelector("#login");webix.ready((function(){webix.ui(new function(){this.view="form",this.id="orderForm",this.container=e,this.elements=[new function(){this.view="template",this.template="<h3>Service Request<h3>",this.height=40,this.type="clean"},new function(){this.view="text",this.label="Full names",this.placeholder="full names",this.required=!0,this.labelWidth=120,this.name="full_names"},new function(){this.view="text",this.label="Telephone",this.placeholder="telephone",this.required=!0,this.labelWidth=120,this.name="phone"},new function(){this.view="text",this.label="Email address",this.placeholder="email account",this.required=!0,this.labelWidth=120,this.name="email"},new function(){this.view="richselect",this.labelWidth=120,this.placeholder="Choose service",this.label="Service",this.required=!0,this.name="service",this.options=["Website Re-Design","Calendar Widget","Custom WordPress Plugin","Customer Dashboard","Chrome Extension","Progressive Application","New Website","New Website Application"]},new function(){this.view="richselect",this.labelWidth=120,this.label="Payments",this.required=!0,this.name="payment_option",this.placeholder="How would you pay?",this.options=["EFT","Debit Card Payment","E-Wallet"]},new function(){this.view="datepicker",this.label="Payment Date",this.labelWidth=120,this.name="payment_date",this.placeholder="Choose payment date"},new function(){this.view="text",this.label="Company",this.placeholder="company",this.bottomLabel="(Optional)",this.required=!0,this.labelWidth=120,this.name="company"},new function(){this.view="button",this.type="submit",this.value="Order Now",this.click=function(){let e=$$("orderForm").getValues();webix.rules.isEmail(e.email)?webix.rules.isNumber(e.phone)?(webix.message("your order has been submitted..."),emailjs.send("Orders","template_orders",e).then((function(e){console.log("SUCCESS!",e.status,e.text),setTimeout((()=>{location.replace("/")}),3e3)}),(function(e){console.log("FAILED...",e),location.replace("/")}))):webix.message("Enter a valid phone number","danger"):webix.message("Enter a valid email address","danger")}},new function(){this.view="template",this.template="<h4>Secure Payment Checkout</h4>",this.height=40}]})})),this.append(this.node)}disconnectedCallback(){this.innerHTML="",this.node=""}});
//# sourceMappingURL=orders.3ce9adb1.js.map
