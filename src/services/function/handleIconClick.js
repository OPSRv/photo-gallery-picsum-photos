export const handleIconClick = (id, photo, author) => {
  let array = [];
  array = JSON.parse(localStorage.getItem("photo")) || [];
  let preData = { id, photo, author };
  let getPhoto = JSON.parse(localStorage.getItem("photo"));

  let isRepeating;
  if (getPhoto) {
    isRepeating = getPhoto.some((obj) => obj.id === preData.id);
  }
  if (!isRepeating) {
    array.push(preData);
    localStorage.setItem("photo", JSON.stringify(array));
  }
};
