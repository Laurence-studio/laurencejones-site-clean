import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL + '/api';

// Artworks Hook
export const useArtworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get(`${API_URL}/artworks`);
        setArtworks(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching artworks:', err);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchArtworks();
  }, []);

  return { artworks, loading, error };
};

// Exhibitions Hook
export const useExhibitions = (status = null) => {
  const [exhibitions, setExhibitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExhibitions = async () => {
      try {
        const url = status 
          ? `${API_URL}/exhibitions?status=${status}` 
          : `${API_URL}/exhibitions`;
        const response = await axios.get(url);
        setExhibitions(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching exhibitions:', err);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchExhibitions();
  }, [status]);

  return { exhibitions, loading, error };
};

// Biography Hook
export const useBiography = () => {
  const [biography, setBiography] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBiography = async () => {
      try {
        const response = await axios.get(`${API_URL}/biography`);
        setBiography(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching biography:', err);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchBiography();
  }, []);

  return { biography, loading, error };
};

// Bibliography Hook
export const useBibliography = () => {
  const [bibliography, setBibliography] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBibliography = async () => {
      try {
        const response = await axios.get(`${API_URL}/bibliography`);
        setBibliography(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching bibliography:', err);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchBibliography();
  }, []);

  return { bibliography, loading, error };
};

// Shop Hook
export const useShop = () => {
  const [shopItems, setShopItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShopItems = async () => {
      try {
        const response = await axios.get(`${API_URL}/shop`);
        setShopItems(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching shop items:', err);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchShopItems();
  }, []);

  return { shopItems, loading, error };
};
