import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createDetailItemTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div class="box__detail" id="detail">
      <!-- Detail -->
    </div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant_detail = await RestaurantSource.detailRestaurant(url.id);
    console.log(restaurant_detail);
    const restoContainer = document.querySelector('#detail');
    restoContainer.innerHTML = createDetailItemTemplate(restaurant_detail);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant_detail.id,
        pictureId: restaurant_detail.pictureId,
        city: restaurant_detail.city,
        rating: restaurant_detail.rating,
        name: restaurant_detail.name,
        address: restaurant_detail.address,
        menus: restaurant_detail.menus,
        customerReviews: restaurant_detail.customerReviews,
        description: restaurant_detail.description,
      },
    });
  },
};

export default Detail;
