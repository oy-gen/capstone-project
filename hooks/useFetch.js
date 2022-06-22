//const url = "https://burningbuddha.myshopify.com/admin/api/2022-04/products.json";
import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then(response => response.json())
        .then(json => {
          setData(json);
          console.log(data);
        })
        .catch(error_ => {
          setError(error_);
        });
    }
  }, [url, data]);

  return { data, error };
}
