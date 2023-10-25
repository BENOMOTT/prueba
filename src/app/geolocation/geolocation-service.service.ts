import { Injectable } from '@angular/core';
import { CallbackID, ClearWatchOptions, Geolocation, Position, PositionOptions, WatchPositionCallback,PermissionStatus, GeolocationPluginPermissions,   } from '@capacitor/geolocation';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationServiceService {

  constructor() { }

 
  async getCurrentPosition(options?: PositionOptions | undefined): Promise<Position> {
    try {
      return await Geolocation.getCurrentPosition(options);
    } catch (error) {
      throw error;
    }
  }
  async watchPosition(options: PositionOptions, callback: WatchPositionCallback): Promise<CallbackID> {
    try {
      return await Geolocation.watchPosition(options, callback);
    } catch (error) {
      throw error;
    }
  }
  async clearWatch(options: ClearWatchOptions): Promise<void> {
    try {
      await Geolocation.clearWatch(options);
    } catch (error) {
      throw error;
    }
  }
  async checkPermissions() : Promise<PermissionStatus> {
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

