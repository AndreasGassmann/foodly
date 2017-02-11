import {Component, ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CartService} from "../../providers/cart-service";

declare let google;
@Component({
  selector: 'page-lokal-tab',
  templateUrl: 'lokal-tab.html'
})
export class LokalTabPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _cartService: CartService) {
    this.item = this.navParams.get('item');
  }
  /**
   * Reference to the google map html container
   */
  @ViewChild('googleMap') mapElement: ElementRef;
  map: any;

  /**
   * Loads the map with a custom stylesheet
   */
  private loadMap() {
    let styles = [{
      "featureType": "all",
      "elementType": "geometry.fill",
      "stylers": [{"weight": "2.00"}]
    }, {
      "featureType": "all",
      "elementType": "geometry.stroke",
      "stylers": [{"color": "#9c9c9c"}]
    }, {
      "featureType": "all",
      "elementType": "labels.text",
      "stylers": [{"visibility": "on"}]
    }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"}]}, {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [{"color": "#ffffff"}]
    }, {
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [{"color": "#ffffff"}]
    }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {
      "featureType": "road",
      "elementType": "all",
      "stylers": [{"saturation": -100}, {"lightness": 45}]
    }, {"featureType": "road", "elementType": "geometry.fill", "stylers": [{"color": "#eeeeee"}]}, {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [{"color": "#7b7b7b"}]
    }, {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": [{"color": "#ffffff"}]
    }, {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [{"visibility": "simplified"}]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [{"visibility": "off"}]
    }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]
    }, {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [{"color": "#c8d7d4"}]
    }, {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{"color": "#070707"}]
    }, {"featureType": "water", "elementType": "labels.text.stroke", "stylers": [{"color": "#ffffff"}]}
    ];


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
      strokeColor: '#FF0000',
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
