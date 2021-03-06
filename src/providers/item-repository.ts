import { Injectable } from '@angular/core';

@Injectable()
export class ItemRepository {
  items: any = [];

  constructor() {

    let blevita5korngebaeck = {
      "ean": 7617400033557,
      "title": "Blévita 5-Korngebäck",
      "image": "assets/img/product/product-54445.png",
      "co2inmg": "1500",
      "sugarcubes": 52,
      "locationaddress": "Zürich, Schweiz",
      "distanceInKm": 10,
      "price": "0.55 CHF",
      "actionPrice": "0.35 CHF",
      "piece": "6",
      "Weight": "38 Gramm",
      "ingreedients": "Fünfkornmehl 90% (Weizen, Hafer, Roggen, Gerste, Dinkel), Sonnenblumenöl, Magermilchpulver, Kochsalz, Hefe, Gerstenmalzextrakt, Weizenkeime 1%, Backtriebmittel: E 500, E 503, natürliches Aroma, Vitamine: B1, B2, B6, Niacin, Folsäure",
      "nutrition": [
        {
          "title": "Energie / Brennwert",
          "value": "1731 kJ / 412 kcal"
        },
        {
          "title": "Eiweiss / Proteine",
          "value": "11g"
        },
        {
          "title": "Fett",
          "value": "12g"
        },
        {
          "title": "Zucker",
          "value": "2.5g",
          "valueIng": 2.5
        }
      ],
      "similar": [
        7617400036299,
        7613269186014,
        7613269185758,
        7613269185772
      ]
    };

    let blevitadinkelgebaeck = {
      "ean": 7617400036299,
      "title": "Blévita Dinkelgebäck",
      "image": "assets/img/product/product-121310.png",
      "co2inmg": "60",
      "sugarcubes": 5,
      "locationaddress": "Zürich, Schweiz",
      "distanceInKm": 80,
      "price": "3.55 CHF",
      "actionPrice": "1.70 CHF",
      "piece": "1",
      "Weight": "228 Gramm",
      "ingreedients": "DINKELmehl 57%, DINKELflocken 34%, Sonnenblumenöl, MagerMILCHpulver, Meersalz, GERSTENmalzextrakt, Hefe, WEIZENkeime 1%, Thymian, Backtriebmittel: E 500, Vitamine: Niacin, B2, B6, B1, Folsäure",
      "nutrition": [
        {
          "title": "Energie / Brennwert",
          "value": "1820 kJ / 434,6 kcal"
        },
        {
          "title": "Eiweiss / Proteine",
          "value": "13g"
        },
        {
          "title": "Fett",
          "value": "12g"
        },
        {
          "title": "Zucker",
          "value": "2,5g",
          "valueIng": 2.5
        }
      ],
      "similar": [
        7617400033557,
        7613269186014,
        7613269185758,
        7613269185772
      ]
    };

    let cocacola = {
      "ean": 54491014,
      "title": "Coca Cola",
      "image": "assets/img/product/product-17957.png",
      "sugarcubes": 52,
      "co2inmg": "2000",
      "locationaddress": "Zürich, Schweiz",
      "distanceInKm": 310,
      "price": "1.50 CHF",
      "actionPrice": "1.30 CHF",
      "piece": "1",
      "Weight": "1500 Gramm",
      "ingreedients": "Wasser, Zucker, Kohlensaure, Farbstoff (Caramel), Sauerungsmittel (E 338), Koffein, Aroma",
      "nutrition": [
        {
          "title": "Energie / Brennwert",
          "value": "1800kJ / 420kcal"
        },
        {
          "title": "Eiweiss / Proteine",
          "value": "0.0g"
        },
        {
          "title": "Fett",
          "value": "0.0	g"
        },
        {
          "title": "Zucker",
          "value": "106g",
          "valueIng": 106
        }
      ],
      "similar": [
        7613312052358,
        7617500014401,
        12131415,
        76168352,
        3048431002696
      ]
    };

    let farmercrunchyhonig = {
      "ean": 7613269186014,
      "title": "Farmer Crunchy - Honig",
      "image": "assets/img/product/product-51541.png",
      "co2inmg": "500",
      "sugarcubes": 20,
      "locationaddress": "Zürich, Schweiz",
      "distanceInKm": 1412,
      "price": "4.40 CHF",
      "actionPrice": "3.30 CHF",
      "piece": "12",
      "Weight": "1500 Gramm",
      "ingreedients": "Vollkornflocken 40% (HAFER, WEIZEN), Honig 18 %, Zucker, Palmfett, MagerMILCHpulver, HASELNÜSSE, Kokosraspel, Kochsalz, Aroma",
      "nutrition": [
        {
          "title": "Energie / Brennwert",
          "value": "4300kJ / 1100kcal"
        },
        {
          "title": "Eiweiss / Proteine",
          "value": "20g"
        },
        {
          "title": "Fett",
          "value": "40g"
        },
        {
          "title": "Zucker",
          "value": "70g",
          "valueIng": 70
        }
      ],
      "similar": [
        7617400033557,
        7617400036299,
        7613269185758,
        7613269185772
      ]
    };

    let farmersoftapfel = {
      "ean": 7613269185758,
      "title": "Farmer Soft Apfel",
      "image": "assets/img/product/product-51542.png",
      "co2inmg": "1500",
      "sugarcubes": 20,
      "locationaddress": "Zürich, Schweiz",
      "distanceInKm": 95,
      "price": "4.40 CHF",
      "actionPrice": "3.90 CHF",
      "piece": "12",
      "Weight": "240 Gramm",
      "ingreedients": "Getreide, Zucker, Traubenzucker, Sojakerne, Sultaninen, getrocknete Äpfel, Glukosesirup, Palmfett, Fruchtzucker, Feuchthaltemittel (Sorbitsirup), Säurungsmittel (Citronensäure, Ascorbinsäure), Kochsalz, Aroma",
      "nutrition": [
        {
          "title": "Energie / Brennwert",
          "value": "1670 kJ / 398 kcal"
        },
        {
          "title": "Eiweiss / Proteine",
          "value": "7g"
        },
        {
          "title": "Fett",
          "value": "10g"
        },
        {
          "title": "Zucker",
          "value": "41g",
          "valueIng": 41
        }
      ],
      "similar": [
        7617400033557,
        7617400036299,
        7613269186014,
        7613269185772
      ]
    };

    let farmersoftchocnatural = {
      "ean": 7613269185772,
      "title": "Farmer Soft Choch Natural",
      "image": "assets/img/product/product-51547.png",
      "co2inmg": "60",
      "sugarcubes": 5,
      "locationaddress": "Zürich, Schweiz",
      "distanceInKm": 24120,
      "price": "3.55 CHF",
      "actionPrice": "1.70 CHF",
      "piece": "1",
      "Weight": "228 Gramm",
      "ingreedients": "DINKELmehl 57%, DINKELflocken 34%, Sonnenblumenöl, MagerMILCHpulver, Meersalz, GERSTENmalzextrakt, Hefe, WEIZENkeime 1%, Thymian, Backtriebmittel: E 500, Vitamine: Niacin, B2, B6, B1, Folsäure",
      "nutrition": [
        {
          "title": "Energie / Brennwert",
          "value": "1820 kJ / 434,6 kcal"
        },
        {
          "title": "Eiweiss / Proteine",
          "value": "13g"
        },
        {
          "title": "Fett",
          "value": "12g"
        },
        {
          "title": "Zucker",
          "value": "2,5g",
          "valueIng": 2.5
        }
      ],
      "similar": [
        7617400033557,
        7617400036299,
        7613269186014,
        7613269185758
      ]
    };

    let mclassicorangensaft = {
      "ean": 7613312052358,
      "title": "M-Classic Orangensaft 25cl",
      "image": "assets/img/product/product-228762.png",
      "co2inmg": "1500",
      "sugarcubes": 52,
      "locationaddress": "Zürich, Schweiz",
      "distanceInKm": 740,
      "price": "0.40 CHF",
      "actionPrice": "0.35 CHF",
      "piece": "1",
      "Weight": "250 Gramm",
      "ingreedients": "Orangensaft aus Konzentrat",
      "nutrition": [
        {
          "title": "Energie / Brennwert",
          "value": "188 kJ / 44 kcal"
        },
        {
          "title": "Eiweiss / Proteine",
          "value": "0.5g"
        },
        {
          "title": "Fett",
          "value": "0.5g"
        },
        {
          "title": "Zucker",
          "value": "9g",
          "valueIng": 9
        }
      ],
      "similar": [
        7617500014401,
        12131415,
        76168352,
        3048431002696,
        54491014
      ]
    };

    let migrosaprozclassic = {
      "ean": 7617500014401,
      "title": "Migros Aproz Classic",
      "image": "assets/img/product/product-56835.png",
      "co2inmg": "30",
      "sugarcubes": 0,
      "locationaddress": "Zürich, Schweiz",
      "distanceInKm": 814,
      "price": "1.50 CHF",
      "actionPrice": "0.70 CHF",
      "piece": "1",
      "Weight": "500 Gramm",
      "ingreedients": "Natürliches Mineralwasser Aproz, Kohlensäure",
      "nutrition": [
        {
          "title": "Energie / Brennwert",
          "value": "0 kJ / 0 kcal"
        },
        {
          "title": "Eiweiss / Proteine",
          "value": "0g"
        },
        {
          "title": "Fett",
          "value": "0g"
        },
        {
          "title": "Zucker",
          "value": "0g",
          "valueIng": 0
        }
      ],
      "similar": [
        7613312052358,
        12131415,
        76168352,
        3048431002696,
        54491014
      ]
    };

    let migrosbioicetea = {
        "ean": 12131415,
        "title": "Migros Bio Ice Tea Glückstee",
        "image": "assets/img/product/product-107762.png",
        "co2inmg": "800",
        "sugarcubes": 1,
        "locationaddress": "Zürich, Schweiz",
      "distanceInKm": 55,
      "price": "1.70 CHF",
        "actionPrice": "1.50 CHF",
        "piece": "1",
        "Weight": "1000 Gramm",
        "ingreedients": "Aufguss aus Kräutern (Bohnenkraut, Hanf, Zitronenverbene, Petersilie, APfelminze, Rosenblüten) Extraktgehalt:1.2g/L, Zucker, Säuerungsmittel:Citronensäure",
        "nutrition": [
          {
            "title": "Energie / Brennwert",
            "value": "110kJ / 26kcal"
          },
          {
            "title": "Eiweiss / Proteine",
            "value": "0.5g"
          },
          {
            "title": "Fett",
            "value": "0.5	g"
          },
          {
            "title": "Zucker",
            "value": "7g",
            "valueIng": 7
          }
        ],
        "similar": [
          7613312052358,
          7617500014401,
          76168352,
          3048431002696,
          54491014
        ]
      }
    ;

    let migrosicetea = {
      "ean": 76168352,
      "title": "Migros Ice Tea",
      "image": "assets/img/product/product-82915.png",
      "co2inmg": "150",
      "sugarcubes": 30,
      "locationaddress": "Zürich, Schweiz",
      "distanceInKm": 610,
      "price": "1.19 CHF",
      "actionPrice": "0.50 CHF",
      "piece": "1",
      "Weight": "33 Gramm",
      "ingreedients": "Aufguss aus Schwarztee und Hagebutten/ Karkadeblüten, Zucker, Fruchtzucker, Zitronensaft aus Konzentrat 2.7%, Traubenzucker",
      "nutrition": [
        {
          "title": "Energie / Brennwert",
          "value": "40kJ / 9,6kcal"
        },
        {
          "title": "Eiweiss / Proteine",
          "value": "0g"
        },
        {
          "title": "Fett",
          "value": "0.5g"
        },
        {
          "title": "Zucker",
          "value": "2g",
          "valueIng": 2
        }
      ],
      "similar": [
        7613312052358,
        7617500014401,
        12131415,
        3048431002696,
        54491014
      ]
    };

    let vittel = {
      "ean": 3048431002696,
      "title": "Vittel, Mineralwasser ohne Kohlensäure 50cl",
      "image": "assets/img/product/product-8060.png",
      "co2inmg": "1500",
      "sugarcubes": 0,
      "locationaddress": "Zürich, Schweiz",
      "distanceInKm": 10312,
      "price": "0.65 CHF",
      "actionPrice": "0.40 CHF",
      "piece": "6",
      "Weight": "500 Gramm",
      "ingreedients": "Wasser",
      "nutrition": [
        {
          "title": "Energie / Brennwert",
          "value": "0 kJ / 0 kcal"
        },
        {
          "title": "Eiweiss / Proteine",
          "value": "0g"
        },
        {
          "title": "Fett",
          "value": "0g"
        },
        {
          "title": "Zucker",
          "value": "0g"
        }
      ],
      "similar": [
        7613312052358,
        7617500014401,
        12131415,
        76168352,
        54491014
      ]
    };

    this.items.push(blevita5korngebaeck);
    this.items.push(blevitadinkelgebaeck);
    this.items.push(cocacola);
    this.items.push(farmercrunchyhonig);
    this.items.push(farmersoftapfel);
    this.items.push(farmersoftchocnatural);
    this.items.push(mclassicorangensaft);
    this.items.push(migrosaprozclassic);
    this.items.push(migrosbioicetea);
    this.items.push(migrosicetea);
    this.items.push(vittel);
    this.items.forEach((el, i, orig) => {
      orig[i].id = orig[i].ean;
      orig[i].currency = orig[i].price.split(' ')[1];
      orig[i].priceString = orig[i].price;
      orig[i].price = orig[i].price.split(' ')[0];
      orig[i].actionPriceString = orig[i].actionPrice;
      orig[i].actionPrice = orig[i].actionPrice.split(' ')[0];
    });
  }

  getItemByEan(ean) {
    console.log('getting item by ean', ean);
    let filtered = this.items.filter(i => i.ean == ean);
    if (filtered.length === 1) {
      console.log('scanned', filtered[0]);
      return filtered[0];
    } else {
      console.log('product not in database');
      return null;
    }
  }

  getSimilar(ean) {

    console.log('getSimilar', ean);
    let filtered = this.items.filter(i => i.ean == ean);
    console.log('getSimilarFiltered', filtered);
    if (filtered.length === 1) {
      console.log('returning similars', filtered[0].similar);
      //ns remove duplicate items
        var unique = filtered[0].similar.filter(function(elem, index, self) {
            return index == self.indexOf(elem);
        })
      return unique;
    } else {
      return [];
    }
  }

  getSimilars(ean) {
  //  console.log('getSimilars ean:', ean);
    let similarProducts = [];
    let similars = this.getSimilar(ean);

    //console.log('getSimilars', similars);
    similars.push(ean);
    if (similars) {
      similars.forEach(i => {

        similarProducts.push(this.getItemByEan(i));
      });
    }
    return similarProducts;
  }
}
