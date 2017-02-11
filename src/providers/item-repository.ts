import { Injectable } from '@angular/core';

@Injectable()
export class ItemRepository {
  items: any = [];

  constructor() {
    this.items.push({
      id: 7640150491001,
      name: 'Wienerli',
      image: 'http://static.wixstatic.com/media/8ef132_db0a53c0917c4d118061767f65a37452.png_srz_355_316_85_22_0.50_1.20_0.00_png_srz',
      price: 1.4,
      category: 0
    }, {
      id: 7610097111072,
      name: 'Lasagne',
      image: 'http://limon.ch/wp-content/uploads/2015/09/rivella.jpg',
      price: 7.4,
      category: 0
    });
  }

  getItemByEan(ean) {
    let filtered = this.items.filter(i => i.id === ean);
    if (filtered.length === 1) {
      return filtered[0];
    } else {
      return {};
    }
  }

}
