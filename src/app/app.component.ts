import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, tap, map } from 'rxjs/operators';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  result = 'test';
  selectedFile: File;
  constructor(private http: HttpClient) { }

  test(){
    this.result = 'test2';
  }

  onFileChanged(event){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = () => { // called once readAsDataURL is completed
        this.selectedFile = reader.result;
      }
    }
  }

  getImageClass(){
    this.http.get(`http://ec2-18-223-255-7.us-east-2.compute.amazonaws.com/hello/`, {responseType: 'json'})
      .subscribe(res => console.log(res.toString));
  }
  
}
