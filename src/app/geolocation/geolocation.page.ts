import { Component, OnInit } from '@angular/core';
import {
  CallbackID,
  ClearWatchOptions,
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
  callbackId: CallbackID | undefined; // Cambio aquí

  constructor() { }

  ngOnInit() {
  }

  async printCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.currentPosition = coordinates;
    console.log('Current position:', coordinates);
  }

  async startWatch() {
    const options: PositionOptions = {};
    const callback: WatchPositionCallback = (position) => {
      this.currentPosition = position;
      console.log('Position update:', position);
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

  async checkPermissions(): Promise<PermissionStatus> {
    try {
      const permissions = await Geolocation.checkPermissions();
      return permissions;
    } catch (error) {
      throw error;
    }
  }

  async requestPermissions(permissions?: GeolocationPluginPermissions | undefined): Promise<PermissionStatus> {
    try {
      const result = await Geolocation.requestPermissions(permissions);
      return result;
    } catch (error) {
      throw error;
    }
  }
  
}
