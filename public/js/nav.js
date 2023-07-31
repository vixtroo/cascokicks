const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
            <a href="index.html"><img src="img/CasCo.png" class="brand-logo" alt=""></a>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Search product">
                    <button class="search-btn">Search</button>
                </div>
                <a href="account.html"><img src="img/account.png" alt=""></a>
                <a href="cart.html"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">Home</a></li>
            <li class="link-item"><a href="men.html" class="link">Men</a></li>
            <li class="link-item"><a href="women.html" class="link">Women</a></li>
            <li class="link-item"><a href="kids.html" class="link">Kids</a></li>
            <li class="link-item"><a href="sale.html" class="link">Sale</a></li>
            <li class="link-item"><a href="about.html" class="link">About</a></li>
        </ul>
    `;
}

createNav();