import CONFIG from '../../globals/config';

const createRestoTemplate = (resto) => `
    <article class="headline">
        <figure>
            <img src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://restaurant-api.dicoding.dev/images/medium/'}" alt="${resto.name}" title="${resto.name}">
            <span class="lokasi">${resto.city}</span>
        </figure>
        <div class="headline__content">
            <span class="rating">Rating ${resto.rating}</span>
            <h1 class="headline__title">${resto.name}</h1>
            <p class="headline__description">${resto.description.slice(0, 200)}...</p>
            <a href="${`/#/detail/${resto.id}`}"><button class="headline__button" type="submit">Read More</button></a>
        </div>
    </article>
    `;

const createDetailItemTemplate = (resto) => `
    <div class="container">
        <article class="detail">
            <figure>
                <img src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://restaurant-api.dicoding.dev/images/medium/'}" alt="${resto.name}" title="${resto.name}" alt="${resto.name}" title="${resto.name}">
                <span class="lokasi">${resto.city}</span>
            </figure>
            <div class="headline__content">
                <span class="rating">Rating ${resto.rating}</span>
                <h1 class="headline__title">${resto.name}</h1>
                <p class=""><b><i>${resto.address}</i></b></p>
                <p class="headline__description">${resto.description}</p>
            </div>
        </article>
        <article class="detail-2">
            <div class="headline__content">
                    <div class="box-detail">
                        <div class="col-detail">
                            <h2>Menu Makanan</h2>
                            <ul style="list-style-type:circle">
                                ${resto.menus.foods.map((food) => `
                                    <li>${food.name}</li>
                                    `)
    .join('')}
                            </ul>
                            <hr>
                            <h2>Menu Makanan</h2>
                            <ul style="list-style-type:circle">
                                ${resto.menus.drinks.map((drink) => `
                                    <li>${drink.name}</li>
                                    `)
    .join('')}
                            </ul>
                        </div>
                        <div class="col-detail">
                            <h2>Customer Review</h2>
                            ${resto.customerReviews.map((review) => `
                            <hr>
                                <p><b>${review.name}</b></p>
                                <p class="date"><i>${review.date}</i></p>
                                <p>"${review.review.substr(0, 100)}"</p>
                                `)
    .join('')}
                        </div>
                    </div>
            </div>
        </article>
    </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <img src="images/icons/like.png" alt="like">
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <img src="images/icons/liked.png" alt="liked">
  </button>
`;

export {
  createDetailItemTemplate, createRestoTemplate, createLikeButtonTemplate,
  createLikedButtonTemplate,
};
