import { Injectable } from '@angular/core';
import { Offers } from './offers.modal';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor() { }

  getAllOffers() {
    return [...this.offers];
  }

  getOffer(offerId: string) {
    return {
      ...this.offers.find(offer => {
        return offer.id === offerId;
      })
    };
  }

  private offers: Offers[] = [
    {
      id: 'o1',
      title: 'Brunei Muara',
      imageUrl: 'https://www.shutterstock.com/image-vector/brunei-muara-highlighted-on-darussalam-260nw-1841896906.jpg',
      book: [],
    },
    {
      id: 'o2',
      title: 'Tutong',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Locator_map_Tutong_in_Brunei.svg/250px-Locator_map_Tutong_in_Brunei.svg.png',
      book: [],
    },
    {
      id: 'o3',
      title: 'Belait',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Locator_map_Belait_in_Brunei.svg/250px-Locator_map_Belait_in_Brunei.svg.png',
      book: [],
    },
    {
      id: 'o4',
      title: 'Temburong',
      imageUrl: 'https://www.shutterstock.com/image-vector/temburong-highlighted-on-brunei-darussalam-260nw-1841896900.jpg',
      book: [],
    },
  ];
}
