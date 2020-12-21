import { getUserInfo } from '../localStorage';

const Header = {
  render: () => {
    const { name } = getUserInfo();
    return ` <div class="shopName">
    <a href="/#/"> SHOPAHOLIC</a>
</div>
<div class="leftSide">
${
    name
      ? `<a href="#/profile">${name}</a>`
      : `<a href="#/signin"><img src="images1/logo/user.png" alt="signIn" class="signInIcon"></a>`
  }    
    
    <a href="#/cart"><img src="images1/logo/shopping-cart.png" alt="shoppingCart" class="cartIcon"></a>
</div>`;
  },
  after_render: () => {},
};
export default Header;