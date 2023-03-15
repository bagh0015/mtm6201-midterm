const createNav =()=> {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="pink"></div>
    <div class="header">
    <div class="nav-bar">
    <div class="logo">
            <img src="Logo.svg" alt="Offrang" width=" 120px">
    </div>

        <div class="nav">
            <ul>
            
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><div class="sign-up-button">
                <img src="png/signup (1).png" alt="">
                </div>
                </li>
            </ul>

        </div>
        <div class="search">
        <input type="text" class="search-box" placeholder=" search">
    </div>
    </div>
    
    </div>

    `;
}
createNav();