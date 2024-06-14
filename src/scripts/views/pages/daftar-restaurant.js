import RestaurantSource from '../../data/restaurant-source';
import { createRestoTemplate } from '../templates/template-creator';

const DaftarRestaurant = {
  async render() {
    return `
    <section class="content">
      <div class="container">
          <div class="content__inner">
              <h2>Explore Restaurant</h2>
              <p>Jelajahi resturant yang ingin anda kunjungi dengan cepat</p>
              <div class="box__content" id="box__content">
                  <!-- Data list -->
              </div>
          </div>
      </div>
    </section>
      `;
  },

  async afterRender() {
    const restaurant = await RestaurantSource.daftarListRestaurant();
    const restoContainer = document.querySelector('#box__content');
    restaurant.forEach((resto) => {
      restoContainer.innerHTML += createRestoTemplate(resto);
    });
  },
};

export default DaftarRestaurant;
