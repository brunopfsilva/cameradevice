import { Injectable } from '@angular/core';
import { CameraResultType,CameraSource } from '@capacitor/camera';
import { Plugins } from '@capacitor/core';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  public fotos: Foto[] = []; 

  constructor() { }

  public async addNewToGallery(){
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    //unshift adiciona info no inicio do array
    this.fotos.unshift({
      webviewPath: capturedPhoto.webPath
    });
  }

  public deletePhoto(index: number){
    //funcao splice recebe index como paramentro e deleta uma posicao
    this.fotos.splice(index, 1);
  }

}

export interface Foto {
  webviewPath: string;
  base64?: string;
}
