export const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }
};

export const preventScrollRestoration = () => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
};
