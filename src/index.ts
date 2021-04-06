import * as Jimp from 'jimp';
import { IResizeImage } from './types';

const resizeImage = ({ image, method, width, height }: IResizeImage): Jimp => {
  if (method.toLowerCase() === 'contain') return image.contain(width, height);
  else if (method.toLowerCase() === 'resize') return image.resize(width, height);
  return image.cover(width, height);
};

const readPhotos = async (photos: string[] | string) => {
  if (typeof photos === 'string') return [await Jimp.read(photos)];

  let jimpPhotos = [];
  for (let i = 0; i < photos.length; i++) {
    jimpPhotos.push(Jimp.read(photos[i]));
  }

  return await Promise.all(jimpPhotos);
};

const attachFrameToPhoto = async (
  frames: string[] | string,
  images: string[] | string,
  method: string
) => {
  try {
    const jimpFrames = await readPhotos(frames);
    const jimpImages = await readPhotos(images);

    for (let i = 0; i < jimpFrames.length; i++) {
      const { width, height } = jimpFrames[i].bitmap;

      for (let j = 0; j < jimpImages.length; j++) {
        const resizedImg: Jimp = resizeImage({
          image: jimpImages[j],
          method,
          width,
          height,
        });

        const attachedImageFrame = resizedImg.composite(jimpFrames[i], 0, 0);

        attachedImageFrame.write(`Frame-Image/frame${i + 1}_image${j + 1}.${resizedImg.getExtension()}`);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export default attachFrameToPhoto;
