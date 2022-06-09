/**
 * @description import App Global modules
 */
import "./app-footer";
import "./app-header";
import "./app-hero";
import "./app-contact";


/**
 * @description Initial App component
 */
customElements.define('app-bdgroup', class extends HTMLElement {
    constructor() {
        super();
        this.mainId = "main";
        this.template = document.createElement("template");
        this.template.innerHTML = `
            <app-header></app-header>
            <main id="${this.mainId}">
                <div class="">
                        <div id="login"></div>
                </div>
            </main> 
            <app-contact></app-contact>
            <app-footer></app-footer>        
        `;
    }
    connectedCallback() {
        console.log('app initialized');
        this.node = this.template.cloneNode(true).content;
        let form = this.node.querySelector("#login");
        webix.ready(function () {
            webix.ui(new function () {
                this.view = "form";
                this.id = "licenseForm";
                this.container = form;
                this.elements = [
                    new function () {
                        this.view = "template";
                        this.template = "<h3>Product License<h3>";
                        this.height = 40;
                        this.type = "clean";
                    },
                    new function () {
                        this.view = "text";
                        this.label = "email address";
                        this.placeholder = "email account";
                        this.required = true;
                        this.labelWidth = 120;
                        this.name = "email";
                    },
                    new function () {
                        this.view = "text";
                        this.type = "text";
                        this.required = true;
                        this.label = "website license";
                        this.placeholder = "website license";
                        this.labelWidth = 120;
                        this.name = "license";
                    },
                    new function () {
                        this.view = "button";
                        this.type = "submit";
                        this.value = "Renew License";
                        this.click = function () {

                            //validate password
                            let credentials = $$("licenseForm").getValues();
                         
                            if(!webix.rules.isEmail(credentials.email))
                            {
                                //...error email
                                webix.message("Enter a valid email address", "danger");
                            
                            }else{
                                //...confirm submission
                                webix.message("your order license renewal has been submitted")
                                emailjs.send('Orders', 'template_orders', credentials)
                                .then(function(response) {
                                   console.log('SUCCESS!', response.status, response.text);
                                   setTimeout(()=>{
                                        location.replace("/");
                                   }, 3000)
                                }, function(error) {
                                   console.log('FAILED...', error);
                                   location.replace("/");
                                });
                            }
                        }
                    },
                    new function () {
                        this.view = "template";
                        this.template = "<h4>Secure Payment Checkout</h4>";
                        this.height = 40;
                    }
                ]
            })
        })
        this.append(this.node);
    }
    disconnectedCallback() {
        this.innerHTML = "";
        this.node = "";
    }
})
























