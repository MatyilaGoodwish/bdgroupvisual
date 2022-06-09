/**
 * @description Header about component
 */
 customElements.define('app-header', class extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        console.log('header component is loaded')
        this.innerHTML = `
        
  <!-- ======= Top Bar ======= -->
  <section id="topbar" class="d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope"></i><a href="mailto:bdgroup.inbox@outlook.com">info@bdgroup.co.za</a>
        &nbsp; <i class="bi bi-whatsapp  "></i> 087 057-1581
      </div>
      <div class="social-links d-none d-md-block">
        <a href="https://twitter.com/realgmatyila" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="https://facebook.com/bdgroupcoza" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/goodwish_za/" class="instagram"><i class="bi bi-instagram"></i></a>

      </div>
    </div>
  </section>

  <!-- ======= Header ======= -->
  <header id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="index.html"> <span style="color: red;">BD </span> Group</a></h1>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link" href="/">Home</a></li>

          <li><a class="nav-link" href="services.html">Services</a></li>

          <li><a class="nav-link" href="contact.html">Contact Us</a></li>

          <li><a class="nav-link" href="https://tawk.to/chat/5db1f93178ab74187a5b66df/default">Get Support</a>
          </li>

          <li><a class="nav-link" href="login.html">License Renewals</a></li>
          <li><a class="nav-link" href="orders.html">Buy Services</a></li>
 <li><a class="nav-link" href="seoflow.html">Chrome Downloads</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->
        `;
    }
    disconnectedCallback() { 
        this.innerHTML = "";
    }
})

