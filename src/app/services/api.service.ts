import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private readonly urlPrefix = 'https://gnews.io';
  constructor(private http: HttpClient) { }

  fetch(){
    fetch('https://gnews.io/api/v4/search?q=example&token=0752f83c9b0a2f85958c95221a548b2d')
    .then(function (response) {
      if(response.status !== 200){
        return response.statusText;
      } else {
        return response.json();
      }
    })
    .then(function (data) {
      console.log("service api");
      console.log(data);
      return data;
    });
  }
}