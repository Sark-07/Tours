import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    
    const response = await fetch(url);
    const items = await response.json();
    setLoading(false);
    setData(items);
  };

  useEffect(() => {
    getData();
  }, [url]);


  return {loading, data}
};
