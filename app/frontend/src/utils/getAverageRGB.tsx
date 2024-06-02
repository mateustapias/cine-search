interface RGB {
  r: number;
  g: number;
  b: number;
}

const getAverageRGB = (imgEl: HTMLImageElement): RGB => {
  const blockSize = 5; // only visit every 5 pixels
  const defaultRGB: RGB = { r: 0, g: 0, b: 0 }; // for non-supporting envs
  const canvas = document.createElement('canvas');
  const context = canvas.getContext && canvas.getContext('2d');
  let data: ImageData;
  const rgb: RGB = { r: 0, g: 0, b: 0 };
  let count = 0;

  if (!context) {
    return defaultRGB;
  }

  const height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  const width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
  console.log(height);
  console.log(width);

  canvas.height = height;
  canvas.width = width;

  context.drawImage(imgEl, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    return defaultRGB;
  }

  const { length } = data.data;

  for (let i = 0; i < length; i += blockSize * 4) {
    count += 1;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
  }

  rgb.r = Math.floor(rgb.r / count);
  rgb.g = Math.floor(rgb.g / count);
  rgb.b = Math.floor(rgb.b / count);

  return rgb;
};

export default getAverageRGB;
