import * as Jimp from 'jimp';

export interface IResizeImage {
  image: Jimp;
  method: string;
  width: number;
  height: number;
}
