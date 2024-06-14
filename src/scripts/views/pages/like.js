import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestoTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <section class="content">
    <div class="container">
        <div class="content__inner">
            <h2>Restaurant Terfavorit</h2>
            <p>Kumpulan restaurant yang anda sukai</p>
            <div class="box__content" id="box__content">
                <!-- Data list -->
            </div>
        </div>
    </div>
    </section>
    `;
  },

  async afterRender() {
    const resto = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#box__content');
    resto.forEach((resto) => {
      restosContainer.innerHTML += createRestoTemplate(resto);
    });
  },
};

export default Like;
