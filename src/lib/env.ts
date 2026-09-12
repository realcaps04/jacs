export function getConvexUrl() {
  const url = import.meta.env.VITE_CONVEX_URL?.trim()
  if (!url) {
    throw new Error('Missing VITE_CONVEX_URL. Add it to .env and restart the dev server.')
  }
  return url
}

export function getGoogleClientId() {
  return import.meta.env.VITE_GOOGLE_CLIENT_ID?.trim() || ''
}
