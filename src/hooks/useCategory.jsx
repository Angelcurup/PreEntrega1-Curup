import { useEffect, useState } from "react";
import { getCategorys } from "../services";

export const useCategory = () => {
  const [Category, setCategory] = useState([]);

  useEffect(() => {
    getCategorys()
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  });

  return {Category}
};
