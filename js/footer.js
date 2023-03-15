const createFooter =() => {
    let footer= document.querySelector('footer');
    footer.innerHTML= `
    <div class="container">
    <div class="left">
      <p>&copy; 2023 Offrang. All rights reserved.</p>
    </div>
    <div class="middle">
      <a href="#" class="social-link"><img src="png/instagram.png" alt="Instagram icon"></a>
     <a href="#" class="social-link"><img src="png/twitter.png" alt="Facebook icon"></a>
     <a href="#" class="social-link"><img src="png/facebook.png" alt="Twitter icon"></a>
     <a href="#" class="social-link"><img src="png/youtube.png" alt="Youtube icon"></a>
    </div>
    <div class="right">
           <a href="#" class="social-link"><img src="png/chat (1).png" alt="Youtube icon"></a>
    </div>
  </div>
    `;
}
    createFooter();