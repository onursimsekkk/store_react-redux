export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";

export function addToFav(product) {
  return {
    type: "ADD_TO_FAV",
    payload: product,
  };
}

export function removeFromFav(product) {
  return {
    type: "REMOVE_FROM_FAV",
    payload: product,
  };
}
