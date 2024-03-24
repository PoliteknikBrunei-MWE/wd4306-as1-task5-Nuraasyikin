import { Injectable } from '@angular/core';
import { Places } from './places.modal';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor() { }

  getAllPlaces() {
    return [...this.places];
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId;
      })
    };
  }

  private places: Places[] = [
    {
      id: 'p1',
      title: 'Brunei Muara',
      imageUrl: 'https://www.shutterstock.com/image-vector/brunei-muara-highlighted-on-darussalam-260nw-1841896906.jpg',
      book: [],
    },
    {
      id: 'p2',
      title: 'Tutong',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Locator_map_Tutong_in_Brunei.svg/250px-Locator_map_Tutong_in_Brunei.svg.png',
      book: [],
    },
    {
      id: 'p3',
      title: 'Belait',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Locator_map_Belait_in_Brunei.svg/250px-Locator_map_Belait_in_Brunei.svg.png',
      book: [],
    },
    {
      id: 'p4',
      title: 'Temburong',
      imageUrl: 'https://www.shutterstock.com/image-vector/temburong-highlighted-on-brunei-darussalam-260nw-1841896900.jpg',
      book: [],
    },
  ];
}
