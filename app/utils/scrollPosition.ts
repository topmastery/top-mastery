export const saveScrollPosition = () => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
  }
};

export const restoreScrollPosition = () => {
  if (typeof window !== 'undefined') {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
      window.scrollTo({
        top: parseInt(savedPosition),
        behavior: 'instant'
      });
      sessionStorage.removeItem('scrollPosition');
    }
  }
};
