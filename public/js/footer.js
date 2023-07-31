const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer">
            <div class="categ">
                <div class="footer-1">
                    <h2>FIND A STORE</h2>
                    <h2>BECOME A MEMBER</h2>
                    <h2>SIGN UP FOR EMAIL</h2>
                    <h2>STUDENT DISCOUNT</h2>
                    <h2>SEND US FEEDBACK</h2>
                </div>
                <div class="footer-2">
                    <h2>GET HELP</h2>
                    <ul>
                        <li>Order Status</li>
                        <li>Delivery</li>
                        <li>Returns</li>
                        <li>Payment Options</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div class="footer-3">
                    <a href="index.html"><img src="img/CasCo-light.png"></a>
                </div>
                <div class="footer-4">
                    <h2>FOLLOW US</h2>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>                    
                </div>
            </div>
            <hr>
            <p class="copyright">Copyright 2022 Nike, Inc. All Rights Reserved</p>
            <p class="copyright">© 2022 adidas Philippines Inc</p>
        </div>
    `;
}

createFooter();