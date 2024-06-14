import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async daftarListRestaurant() {
    const response = await fetch(API_ENDPOINT.DAFTAR_LIST);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.restaurant;
  }
}

export default RestaurantSource;
