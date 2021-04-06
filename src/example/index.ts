import attachFrameToPhoto from '..';

const enum RESIZE_IMG_METHODS {
  cover = 'cover',
  contain = 'contain',
  resize = 'resize',
}

const frameList = ['assets/frames/frame1.png', 'assets/frames/frame2.png'];
// const imageList = ['assets/images/image1.png', 'assets/images/image2.jpeg'];

const urlImage =
  'https://static.scientificamerican.com/sciam/cache/file/391E7BCB-431B-41EB-B8A85786A27DFAC6_source.jpg';

const example = async (): Promise<void> => {
  // await attachFrameToPhoto(frameList, imageList, RESIZE_IMG_METHODS.cover);
  // await attachFrameToPhoto(frameList, imageList, RESIZE_IMG_METHODS.contain);
  // await attachFrameToPhoto(frameList, imageList, RESIZE_IMG_METHODS.resize);

  await attachFrameToPhoto(frameList[0], urlImage, RESIZE_IMG_METHODS.cover);
};

example();
