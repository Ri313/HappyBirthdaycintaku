import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// =====================================================================
// PENTING UNTUK GITHUB PAGES:
// Ganti '/nama-repo-kamu/' di bawah dengan nama repository GitHub kamu.
// Contoh: kalau repo kamu bernama "ucapan-untuk-dinda", maka:
//   '/ucapan-untuk-dinda/'
// Kalau kamu deploy sebagai user/organization page (username.github.io),
// ganti menjadi '/'
//
// Catatan: base ini HANYA dipakai saat build untuk GitHub Pages (npm run build).
// Saat development (npm run dev), base otomatis tetap '/' supaya
// http://localhost:5173/ berfungsi normal.
// =====================================================================
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/nama-repo-kamu/' : '/',
}))