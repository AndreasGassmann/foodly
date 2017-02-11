import { Injectable } from '@angular/core';

@Injectable()
export class ItemRepository {
  items: any = [];

  constructor() {

    this.items.push(
      {
        "ean": 7617500014203,
        title:"Barilla Olive",
        image:"http://cdnimages.tlg-sino.com/985/8076809513715_l.jpg",
        co2inmg:"1500",
        sugarcubes: 52,
        locationaddress:"Luzern, Schweiz",
        price:"22 CHF",
        actionPrice:"14 CHF",
        pice: "1",
        Weight:"200 Gramm",
        ingreedients:"Wasser, Milchserum, Zucker, Kohlensäure, Säurungsmittel, karamellisierter Zucker, natürliche Aromen",
        nutrition: [
          {
            title:"Energie / Brennwert",
            value: "160 kJ / 38 kcal"
          },
          {
            title:"Eiweiss / Proteine",
            value: "3g"
          },
          {
            title:"Fett",
            value: "5g"
          },
          {
            title:"Zucker",
            value: "20g"
          },
        ],

        similar:[7617500014203]
      }
    );
  }

  getItemByEan(ean) {
    let filtered = this.items.filter(i => i.ean == ean);
    if (filtered.length === 1) {
      console.log('scanned', filtered[0]);
      return filtered[0];
    } else {
      console.log('scanned', 'null');
      return null;
    }
  }

}
