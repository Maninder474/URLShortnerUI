import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'urlShortnerUI';
  url="/dm/URLShortner/getId";
  shortUrl:string;
  constructor(private httpClient:HttpClient){}

  getShortUrl(form:NgForm){
    console.log(form);
    const value = form.value;
   return this.httpClient.post(this.url,value.url,{responseType:'json' ,observe:'response'}).toPromise().then(response=>{
      this.shortUrl="http://localhost:8081/URLShortner/"+response.body.toString();
    });
    

  }
}
