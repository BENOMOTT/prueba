import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor(   public photoService: PhotoService,
    private router:Router) { }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  } 

  ngOnInit() {
  }

}
