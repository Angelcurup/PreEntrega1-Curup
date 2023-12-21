import axios from "axios";

export async function getCategorys() {
  return await axios.get("https://dummyjson.com/products/categories");
}
