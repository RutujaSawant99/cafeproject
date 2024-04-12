import { Component } from '@angular/core';
import {  AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent  implements AfterViewInit{


constructor(){}


  ngAfterViewInit() {
    const video = document.getElementById('autoplayVideo') as HTMLVideoElement;
    video.play();
  }

}
