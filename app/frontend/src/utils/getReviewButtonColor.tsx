const getReviewButtonColor = (value: number) => {
  const red = Math.round((1 - value / 10) * 255);
  const green = Math.round((value / 10) * 255);
  return `rgb(${red}, ${green}, 0)`;
};

export default getReviewButtonColor;
