// export default {
//   server: {
//     port: 3000,
//     host: true,
//     hmr: true,
//   },
// };

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
