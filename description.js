
function openProductDetails(title, price, description, imageSrc) {
    // Construct the HTML content for the product details
    const productDetailsHTML = `
        
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="signup.css">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    
    <link rel="stylesheet" href="collection.css">
</head>
<body>
	
    <!-- Navbar -->
    <div class="container">
    <nav>
    <div class="logo-section">
      <div class="logo-text">
       <a href="index.html"> <p>Baggage <br /></p>
        <span id="subtitle">ONLINE STORE</span>
      </a>
      </div>
    

      <div class="login-section">
        <button class="login">
          <a href="signin.html">
          <i class="fa-solid fa-circle-user"></i>
          <span>Sign In</span></a>
        </button>

        <button class="signup">
          <a href="signup.html">
          <i class="fa-solid fa-square-pen"></i>
          <span>Sign Up</span>
        </a>
        </button>

        <div class="cart">
          <a href="addtocart.html">
          <i class="fa-solid fa-cart-shopping"></i> <p id="count">0</p></a>
        </div>

      </div>
    </div>

    <div class="menu">
        <ul>
            <li> <a href="index.html" class="active">Home</a> </li>
            <li> <a href="collection.html">Collections</a> </li>
            <li> <a href="">Contact</a> </li>
        </ul>
       
        <div class="search-bar">
    
            <input type="search" name="" id="" placeholder="search here...">
            <button>
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        
        </div>
    
    </div>
  </nav>
      </div>'
      
       <div class="details">
        <div class="image">
          <img src="${imageSrc}" alt="">
        </div>
        <div class="about-image">
          <h3>Messenger Bag</h3>
          <h4>Price: ${price}</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, quis. Aperiam iste saepe veniam distinctio libero. Optio quo praesentium molestiae officiis, ea, </p>
          <button class="shop">Shop Now</button>
          <p>Share Product:</p>
          <div class="share-icons">
            <a href="">
            <i class="fa-brands fa-facebook-f"><span>Facebook</span></i> 
          </a>
            <a href="">
            <i class="fa-brands fa-twitter"><span>Twitter</span></i>
          </a>
        </div>
      </div>
      </div>
       
    <footer>
        <div class="upper-footer">
          <h1>Follow Us</h1>
          <div class="icons">
            <a href="">
            <i class="fa-brands fa-facebook-f"><span>Facebook</span></i> 
          </a>
            <a href="">
            <i class="fa-brands fa-twitter"><span>Twitter</span></i>
          </a>
          <a href="">
            <i class="fa-brands fa-google"><span>Google</span></i>
          </a>
          </div>
        </div>
        <div class="lower-footer">
          <p>
          &copy; 2024 Baggage. All rights reserved | Designed by NRR
        </p>
        </div>
      </footer>
    `;

    // Open a new tab with the product details
    const productDetailsTab = window.open();
    productDetailsTab.document.write(productDetailsHTML);
    productDetailsTab.document.close();
}

  