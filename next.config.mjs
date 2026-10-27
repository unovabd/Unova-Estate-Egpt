/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // www → non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.unovasoftware.com" }],
        destination: "https://unovasoftware.com/:path*",
        permanent: true,
      },
      // old .html URLs → clean URLs
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/book.html", destination: "/demo", permanent: true },
      { source: "/demo.html", destination: "/demo", permanent: true },
      { source: "/book", destination: "/demo", permanent: true },
    ];
  },
};

export default nextConfig;
