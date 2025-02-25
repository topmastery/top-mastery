export const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

export const preventScrollRestoration = () => {
  if (typeof window !== 'undefined') {
    history.scrollRestoration = 'manual';
  }
};
