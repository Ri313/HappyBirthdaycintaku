import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ==========================================================
// PENTING UNTUK GITHUB PAGES:
// Ganti '/nama-repo-kamu/' di bawah dengan nama repository GitHub kamu.
// Contoh: kalau repo kamu bernama "ucapan-untuk-dinda", maka:
//   '/ucapan-untuk-dinda/'
// Kalau kamu deploy sebagai user/organization page (username.github.io),
// ganti menjadi '/'
//
// CATATAN: base ini HANYA dipakai saat build untuk GitHub Pages.
// Untuk Vercel/Netlify, base harus tetap '/' — makanya kita cek
// env var khusus, bukan hanya command === 'build'.
// ==========================================================
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true' ? '/nama-repo-kamu/' : '/',
}))
