import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Emit .next/standalone: a minimal server.js plus only the node_modules it needs.
  // The Dockerfile copies that folder into a slim runtime image.
  output: 'standalone',
  // Do not advertise the framework in every response.
  poweredByHeader: false,
};

export default nextConfig;
