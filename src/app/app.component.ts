import { concat } from 'rxjs/operator/concat';
import { any } from 'codelyzer/util/function';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datos: any;

  url: any;
  constructor(private http: HttpClient) {
    this.datos = {
      "face": {
        "eyes": [
          "eyes1",
          "eyes10",
          "eyes2",
          "eyes3",
          "eyes4",
          "eyes5",
          "eyes6",
          "eyes7",
          "eyes9"
        ],
        "nose": [
          "nose2",
          "nose3",
          "nose4",
          "nose5",
          "nose6",
          "nose7",
          "nose8",
          "nose9"
        ],
        "mouth": [
          "mouth1",
          "mouth10",
          "mouth11",
          "mouth3",
          "mouth5",
          "mouth6",
          "mouth7",
          "mouth9"
        ],
        "color": [
          "d32f2f",
          "aa00ff",
          "3f51b5 ",
          "304ffe",
          "ccff90",
          "ffc107",
          "757575",
          "b0bec5",
          "689f38 ",
          "00bfa5"
        ]
      }
    }
    console.log(this.datos.face.eyes);


    setInterval(() => {
      this.url = "https://api.adorable.io/avatars/face/" + this.datos.face.eyes[this.generate(0, 8)] + "/" + this.datos.face.nose[this.generate(0, 7)] + "/" + this.datos.face.mouth[this.generate(0, 7)] + "/" + this.datos.face.color[this.generate(0, 9)];
      console.log("ojojs", this.url);
    }, 2000)
    console.log();
    /**  this.http.get('https://api.adorable.io/avatars/face/eyes1/nose2/mouth1/d32f2f').subscribe(data => {
        // Read the result field from the JSON response.
        console.log('data', data)
        this.url = data['results'];
      });**/
  }

  generate(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


}
