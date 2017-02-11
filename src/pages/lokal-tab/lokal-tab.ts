import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {CartService} from "../../providers/cart-service";

declare let google;
@Component({
  selector: 'page-lokal-tab',
  templateUrl: 'lokal-tab.html'
})
export class LokalTabPage {
  item: any;
  matches: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _cartService: CartService) {
    this.item = this.navParams.get('item');
    this.matches = this._cartService.getSimilarSortedByMoney(this.item.id);
  }

  /**
   * Reference to the google map html container
   */
  @ViewChild('googleMap') mapElement: ElementRef;
  map: any;

  public getFirst() {
    return this.matches[0];
  }

  public getSecond() {
    return this.matches[1];
  }

  public getThird() {
    return this.matches[2];
  }

  /**
   * Loads the map with a custom stylesheet
   */
  private loadMap() {
    let styles = [
        {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "-100"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
            {
              "saturation": -100
            },
            {
              "lightness": 65
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
            {
              "saturation": -100
            },
            {
              "lightness": "50"
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "-100"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "all",
          "stylers": [
            {
              "lightness": "30"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "all",
          "stylers": [
            {
              "lightness": "40"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
            {
              "saturation": -100
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "hue": "#ffff00"
            },
            {
              "lightness": -25
            },
            {
              "saturation": -97
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [
            {
              "lightness": -25
            },
            {
              "saturation": -100
            }
          ]
        }
      ]
      ;


    let latLng = new google.maps.LatLng(8.406991800000014, 46.8200266);

    /**
     * Default options (coordinates, zoom, stylesheet)
     * @type {{center: google.maps.LatLng; zoom: number; mapTypeId: any; styles: ({featureType: string; elementType: string; stylers: {weight: string}[]}|{featureType: string; elementType: string; stylers: {color: string}[]}|{featureType: string; elementType: string; stylers: {visibility: string}[]}|{featureType: string; elementType: string; stylers: {color: string}[]}|{featureType: string; elementType: string; stylers: {color: string}[]}|{featureType: string; elementType: string; stylers: {color: string}[]}|{featureType: string; elementType: string; stylers: {visibility: string}[]}|{featureType: string; elementType: string; stylers: ({saturation: number}|{lightness: number})[]}|{featureType: string; elementType: string; stylers: {color: string}[]}|{featureType: string; elementType: string; stylers: {color: string}[]}|{featureType: string; elementType: string; stylers: {color: string}[]}|{featureType: string; elementType: string; stylers: {visibility: string}[]}|{featureType: string; elementType: string; stylers: {visibility: string}[]}|{featureType: string; elementType: string; stylers: {visibility: string}[]}|{featureType: string; elementType: string; stylers: ({color: string}|{visibility: string})[]}|{featureType: string; elementType: string; stylers: {color: string}[]}|{featureType: string; elementType: string; stylers: {color: string}[]}|{featureType: string; elementType: string; stylers: {color: string}[]})[]; streetViewControl: boolean; mapTypeControl: boolean}}
     */
    let mapOptions = {
      center: latLng,
      zoom: 1,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: styles,
      streetViewControl: false,
      mapTypeControl: false
    };
    this.map.setCenter({lat:46.947974, lng:7.447447});
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.draw();
  }

  private draw() {
    let flightPlanCoordinates = [
      {lat: 51.399206, lng: -61.523437},
      {lat: 24.527135, lng: -13.535156},
      {lat: 47.040182, lng: 8.085938}
    ];

    let flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: '#2274A5',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath.setMap(this.map);
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  back() {
    this.navCtrl.parent.parent.pop();
  }

  addToCart() {
    this._cartService.addProduct(this.item);
    this.back();
  }

}
