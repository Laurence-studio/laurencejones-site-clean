import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE } from '../config';

// Safe array access helper - prevents crashes on undefined data
const safeArray = (data) => Array.isArray(data) ? data : [];

// Artworks Hook
export const useArtworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get(`${API_BASE}/artworks`);
        setArtworks(safeArray(response.data));
      } catch (err) {
        console.error('Error fetching artworks:', err);
        setError(err.message || 'Failed to load artworks');
        setArtworks([]); // Ensure empty array on error
      } finally {
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
          ? `${API_BASE}/exhibitions?status=${status}` 
          : `${API_BASE}/exhibitions`;
        const response = await axios.get(url);
        setExhibitions(safeArray(response.data));
      } catch (err) {
        console.error('Error fetching exhibitions:', err);
        setError(err.message || 'Failed to load exhibitions');
        setExhibitions([]);
      } finally {
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
        const response = await axios.get(`${API_BASE}/biography`);
        setBiography(response.data || null);
      } catch (err) {
        console.error('Error fetching biography:', err);
        setError(err.message || 'Failed to load biography');
        setBiography(null);
      } finally {
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
        const response = await axios.get(`${API_BASE}/bibliography`);
        setBibliography(safeArray(response.data));
      } catch (err) {
        console.error('Error fetching bibliography:', err);
        setError(err.message || 'Failed to load bibliography');
        setBibliography([]);
      } finally {
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
        const response = await axios.get(`${API_BASE}/shop`);
        setShopItems(safeArray(response.data));
      } catch (err) {
        console.error('Error fetching shop items:', err);
        setError(err.message || 'Failed to load shop items');
        setShopItems([]);
      } finally {
        setLoading(false);
      }
    };
    fetchShopItems();
  }, []);

  return { shopItems, loading, error };
};

// Featured Works Hook
export const useFeaturedWorks = () => {
  const [featuredWorks, setFeaturedWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedWorks = async () => {
      try {
        const response = await axios.get(`${API_BASE}/featured-works`);
        setFeaturedWorks(safeArray(response.data));
      } catch (err) {
        console.error('Error fetching featured works:', err);
        setError(err.message || 'Failed to load featured works');
        setFeaturedWorks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchFeaturedWorks();
  }, []);

  return { featuredWorks, loading, error };
};

// Vault Works Hook
export const useVaultWorks = () => {
  const [vaultWorks, setVaultWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVaultWorks = async () => {
      try {
        const response = await axios.get(`${API_BASE}/vault-works`);
        setVaultWorks(safeArray(response.data));
      } catch (err) {
        console.error('Error fetching vault works:', err);
        setError(err.message || 'Failed to load vault works');
        setVaultWorks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchVaultWorks();
  }, []);

  return { vaultWorks, loading, error };
};
