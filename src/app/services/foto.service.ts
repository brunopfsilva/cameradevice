import { Injectable } from '@angular/core';
import { CameraResultType,CameraSource } from '@capacitor/camera';
import { Plugins } from '@capacitor/core';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor() { }

  public async addNewToGallery(){
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }

}
