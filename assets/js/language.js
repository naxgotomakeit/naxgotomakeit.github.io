(() => {
  // Both languages retain the same section IDs.
  for (const link of document.querySelectorAll('[data-language-link]')) {
    link.addEventListener('click', () => {
      const target = new URL(link.href);
      target.hash = window.location.hash;
      link.href = target.href;
    });
  }
})();
