import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {CartService} from "../../providers/cart-service";
import {DomSanitizer} from "@angular/platform-browser";
declare let google;

@Component({
  selector: 'page-umwelt',
  templateUrl: 'umwelt.html'
})
export class UmweltPage {

  @ViewChild('googleMap') mapElement: ElementRef;
  map: any;
  item: any;
  matches: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _cartService: CartService, public domSanitizer: DomSanitizer) {
    console.log(this.navParams.get('item'));
    this.item = this.navParams.get('item');
    this.matches = this._cartService.getSimilarSortedByMoney(this.item.id);
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  back(){
    this.navCtrl.parent.parent.pop();
  }

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
      zoom: 8,
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
      {lat: 37.772, lng: -122.214},
      {lat: -27.467, lng: 153.027}
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

  addToCart() {
    this._cartService.addProduct(this.item);
  }
}
