import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Wishlist / Favorites state
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('empragold_wishlist');
      return saved ? JSON.parse(saved) : ['prop-1', 'prop-2'];
    } catch {
      return ['prop-1', 'prop-2'];
    }
  });

  // Compare properties list (Max 4)
  const [compareList, setCompareList] = useState(() => {
    try {
      const saved = localStorage.getItem('empragold_compare');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Recently viewed properties
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  // Toast notifications
  const [toasts, setToasts] = useState([]);

  // Modals state
  const [inspectionModal, setInspectionModal] = useState({ isOpen: false, property: null });
  const [quickViewModal, setQuickViewModal] = useState({ isOpen: false, property: null });
  const [careerModal, setCareerModal] = useState({ isOpen: false, jobTitle: null });

  // Save wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('empragold_wishlist', JSON.stringify(wishlist));
    } catch (err) {
      console.error('Failed to save wishlist:', err);
    }
  }, [wishlist]);

  // Save compareList to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('empragold_compare', JSON.stringify(compareList));
    } catch (err) {
      console.error('Failed to save compare list:', err);
    }
  }, [compareList]);

  // Toast handler
  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Toggle wishlist
  const toggleWishlist = (propertyId) => {
    if (wishlist.includes(propertyId)) {
      setWishlist((prev) => prev.filter((id) => id !== propertyId));
      showToast('Removed from your Saved Properties', 'info');
    } else {
      setWishlist((prev) => [...prev, propertyId]);
      showToast('Added to your Saved Properties', 'success');
    }
  };

  // Toggle compare
  const toggleCompare = (property) => {
    const exists = compareList.some((p) => p.id === property.id);
    if (exists) {
      setCompareList((prev) => prev.filter((p) => p.id !== property.id));
      showToast('Removed from comparison list', 'info');
    } else {
      if (compareList.length >= 4) {
        showToast('You can compare up to 4 properties at once', 'error');
        return;
      }
      setCompareList((prev) => [...prev, property]);
      showToast('Added to property comparison', 'success');
    }
  };

  // Add to recently viewed
  const addRecentlyViewed = (property) => {
    if (!property || !property.id) return;
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((p) => p.id !== property.id);
      return [property, ...filtered].slice(0, 6);
    });
  };

  return (
    <AppContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        compareList,
        toggleCompare,
        recentlyViewed,
        addRecentlyViewed,
        toasts,
        showToast,
        removeToast,
        inspectionModal,
        setInspectionModal,
        quickViewModal,
        setQuickViewModal,
        careerModal,
        setCareerModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
