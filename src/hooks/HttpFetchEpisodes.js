import { useEffect, useState } from "react";
import axios from 'axios';

const HttpFetchEpisodes = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  
  useEffect(() => {
    setLoading(true);
    axios.get(url).then((resp) => {
      const episodes = resp.data;
      setData(episodes);
      setLoading(false);
    });
  }, [url]);

  return { data, loading, error }
}

export default HttpFetchEpisodes;