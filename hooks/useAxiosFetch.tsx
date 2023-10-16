import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://swapi.dev/api';

axios.defaults.baseURL = API_URL;

export const useAxiosFetch = (route: string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const APICall = async () => {
    try {
      setIsLoading(true)
      const response = await axios.request({
          method: 'GET',
          url: route
      });
      setData(response.data.results);
      setError(null);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() =>{
        APICall()
  },[]);

  return { data, error, isLoading, APICall};
};
