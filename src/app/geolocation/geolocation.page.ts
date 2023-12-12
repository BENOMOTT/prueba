import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  CallbackID,
  Geolocation,
  PositionOptions,
  WatchPositionCallback,
  PermissionStatus,
  GeolocationPluginPermissions,
} from '@capacitor/geolocation';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {
  currentPosition: any;
  callbackId: CallbackID | undefined;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  async printCurrentPosition() {
    try {
      const position = await Geolocation.getCurrentPosition();
      console.log('Position received:', position);
      
      // Acceder a coords.latitude y coords.longitude
      this.currentPosition = {
        latitude: Number(position.coords.latitude),
        longitude: Number(position.coords.longitude)
      };
  
      console.log('currentPosition after assignment:', this.currentPosition);
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Error getting current position:', error);
    }
  }
  
  
  
  
  

  async startWatch() {
    const options: PositionOptions = {};
    const callback: WatchPositionCallback = (position) => {
      this.currentPosition = position;
      console.log('Position update:', position);
      this.cdr.detectChanges();
    };

    try {
      this.callbackId = await Geolocation.watchPosition(options, callback);
      console.log('Watch started with ID:', this.callbackId);
    } catch (error) {
      console.error('Error starting watch:', error);
    }
  }

  async stopWatch() {
    if (this.callbackId !== undefined) {
      try {
        await Geolocation.clearWatch({ id: this.callbackId });
        console.log('Watch stopped for ID:', this.callbackId);
      } catch (error) {
        console.error('Error stopping watch:', error);
      }
    } else {
      console.error('No active watch to stop.');
    }
  }

  async checkPermissions() {
    try {
      const permissions = await Geolocation.checkPermissions();
      console.log('Permissions:', permissions);
    } catch (error) {
      console.error('Error checking permissions:', error);
    }
  }

  async requestPermissions(permissions?: GeolocationPluginPermissions | undefined): Promise<PermissionStatus | undefined> {
    try {
      const result = await Geolocation.requestPermissions(permissions);
      return result;
    } catch (error) {
      console.error('Error requesting permissions:', error);
      return undefined; 
    }
  }
}
