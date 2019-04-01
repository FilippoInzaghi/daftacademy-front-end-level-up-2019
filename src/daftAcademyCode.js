const img1 = 'url(./img/bijou.jpg)';
const img2 = 'url(./img/negroni.jpg)';
const img3 = 'url(./img/mojito.jpg)';
const img4 = 'url(./img/rattlesnake.jpg)';
const img5 = 'url(./img/eggnogg.jpg)';
const img6 = 'url(./img/zinger.jpg)';

export default function () {
 const {
  body
 } = document;
 const div = document.createElement('div');
 div.innerHTML = ` 
 <div class='main'>
 <button class='btn btn--menu'>d'inks</button>
 <nav class='navigation wrapper'>
 <ul>
 <li>Beer</li>
 <li>Coffee / Tea</li>
 <li>Cocktail</li>
 <li>Cocoa</li>
 <li>Milk / Float / Shake</li>
 <li>Shot</li>
 <li>Punch / Party Drink</li>
 <li>Homemade Liqueur</li>
 </ul>
 </nav>
 <div class='menu wrapper'>
 <div class='menu__item' style='background-image:${img1}'><p class='menu__title'>Bijou</p></div>
 <div class='menu__item' style='background-image:${img2}'><p class='menu__title'>Negron</p></div>
 <div class='menu__item' style='background-image:${img3}'><p class='menu__title'>Mojito</p></div>
 <div class='menu__item' style='background-image:${img4}'><p class='menu__title'>Texas Rattlesnake</p></div>
 <div class='menu__item' style='background-image:${img5}'><p class='menu__title'>Egg Nogg</p></div>
 <div class='menu__item' style='background-image:${img6}'><p class='menu__title'>Zinger</p></div>
 </div>
 </div>
 <footer class='footer'> 
 <p class='footer__hello'>
  Say hello! - <strong>hi@dinks.com</strong>
 </p>
 <p class='footer__follow-us'>
 <span>Follow us</span>
 <img class='footer__follow-us__logo' src='./img/svg/basketball-ball-solid.svg'/>
 <img class='footer__follow-us__logo' src='./img/svg/instagram-brands.svg'/>
 <img class='footer__follow-us__logo' src='./img/svg/facebook-f-brands.svg'/>
 </p>

 </footer>
 `
 document

 body.appendChild(div);
};