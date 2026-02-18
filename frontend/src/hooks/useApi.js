import { useState, useEffect } from 'react';

// Import static data - eliminates runtime API dependency
import artworksData from '../data/artworks.json';
import featuredWorksData from '../data/featuredWorks.json';
import vaultWorksData from '../data/vaultWorks.json';

// Safe array helper - prevents crashes on undefined/null data
const safeArray = (data) => Array.isArray(data) ? data : [];

// Artworks Hook - Homepage hero gallery
export const useArtworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Use static data
      setArtworks(safeArray(artworksData));
    } catch (err) {
      console.error('Error loading artworks:', err);
      setError(err.message || 'Failed to load artworks');
      setArtworks([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { artworks, loading, error };
};

// Featured Works Hook
export const useFeaturedWorks = () => {
  const [featuredWorks, setFeaturedWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Use static data
      setFeaturedWorks(safeArray(featuredWorksData));
    } catch (err) {
      console.error('Error loading featured works:', err);
      setError(err.message || 'Failed to load featured works');
      setFeaturedWorks([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { featuredWorks, loading, error };
};

// Vault Works Hook
export const useVaultWorks = () => {
  const [vaultWorks, setVaultWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Use static data
      setVaultWorks(safeArray(vaultWorksData));
    } catch (err) {
      console.error('Error loading vault works:', err);
      setError(err.message || 'Failed to load vault works');
      setVaultWorks([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { vaultWorks, loading, error };
};

// Legacy hooks for backward compatibility - return empty data
export const useExhibitions = () => ({
  exhibitions: [],
  loading: false,
  error: null
});

export const useBiography = () => ({
  biography: null,
  loading: false,
  error: null
});

export const useBibliography = () => ({
  bibliography: [],
  loading: false,
  error: null
});

export const useShop = () => ({
  shopItems: [],
  loading: false,
  error: null
});
