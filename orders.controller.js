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
                        <div id="productList"></div>
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
                this.id = "orderForm";
                this.container = form;
                this.elements = [
                    new function () {
                        this.view = "template";
                        this.template = "<h3>Service Request<h3>";
                        this.height = 40;
                        this.type = "clean";
                    },
                    new function () {
                        this.view = "text";
                        this.label = "Full names";
                        this.placeholder = "full names";
                        this.required = true;
                        this.labelWidth = 120;
                        this.name = "full_names";
                    },
                    new function () {
                        this.view = "text";
                        this.label = "Telephone";
                        this.placeholder = "telephone";
                        this.required = true;
                        this.labelWidth = 120;
                        this.name = "phone";
                    },
                    new function () {
                        this.view = "text";
                        this.label = "Email address";
                        this.placeholder = "email account";
                        this.required = true;
                        this.labelWidth = 120;
                        this.name = "email";
                    },
                    new function () {
                        this.view = "richselect";
                        this.labelWidth = 120;
                        this.placeholder = "Choose service";
                        this.label = "Service";
                        this.required = true;
                        this.name = "service";
                        this.options = [
                            "Website Re-Design",
                            "Calendar Widget",
                            "Custom WordPress Plugin",
                            "Customer Dashboard",
                            "Chrome Extension",
                            "Progressive Application",
                            "New Website",
                            "New Website Application"
                        ]
                    },
                    new function () {
                        this.view = "richselect";
                        this.labelWidth = 120;
                        this.label = "Payments";
                        this.required = true;
                        this.name = "payment_option"
                        this.placeholder = "How would you pay?"
                        this.options = [
                            "EFT",
                            "Debit Card Payment",
                            "E-Wallet"
                        ]
                    },
                    new function () {
                        this.view = "datepicker";
                        this.label = "Payment Date";
                        this.labelWidth = 120
                        this.name = "payment_date";
                        this.placeholder = "Choose payment date"
                    },
                    new function () {
                        this.view = "text";
                        this.label = "Company";
                        this.placeholder = "company";
                        this.bottomLabel = "(Optional)";
                        this.required = true;
                        this.labelWidth = 120;
                        this.name = "company";
                    },
                    new function () {
                        this.view = "button";
                        this.type = "submit";
                        this.value = "Order Now";
                        this.click = function () {
                            let order = $$("orderForm").getValues();
                            if(!webix.rules.isEmail(order.email))
                            {
                                //...error email
                                webix.message("Enter a valid email address", "danger");
                            }
                            else if(!webix.rules.isNumber(order.phone))
                            {
                                //...error phone
                                webix.message("Enter a valid phone number", "danger");
                            }else{
                                //...confirm submission
                                webix.message("your order has been submitted...")
                                emailjs.send('Orders', 'template_orders', order)
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
























