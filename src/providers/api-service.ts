import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  eaternityToken: string = 'h4cK4tH0NOg75HjfK339KlOlpa39fJzxXw';
  eaternityUrl: string = 'https://test.eaternity.ch';

  constructor(public http: Http) {
    console.log('Hello ApiService Provider');
  }

  getDataForIncredient() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic aDRjSzR0SDBOT2c3NUhqZkszMzlLbE9scGEzOWZKenhYdzo=');

    let data = {
      "recipe": {
        "location": "schweiz",
        "date": "2017-01-01",
        "ingredients": [
          {
            "names": [
              {
                "language": "DE",
                "value": "banane"
              }
            ],
            "amount": 200,
            "origin": "schweiz"
          }
        ]
      }
    };

    return this.http.post(this.eaternityUrl + '/api/recipes?full-resource=true', data, {
      headers: headers
    })
  }

}
