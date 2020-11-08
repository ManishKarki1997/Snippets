if (typeof window !== 'undefined' && window.localStorage) {
  const storedTheme = window.localStorage.getItem('css-snippets-theme')
  if (typeof storedTheme === 'string') {
    window.document.body.classList.add(storedTheme)
  } else {
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      window.document.body.classList.add('dark')
      localStorage.setItem('css-snippets-theme', 'dark')
    } else {
      localStorage.setItem('css-snippets-theme', 'light')
    }
  }
}
