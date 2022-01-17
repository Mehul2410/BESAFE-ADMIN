module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://besaferestapi.herokuapp.com/:path*",
      },
    ];
  },
};
