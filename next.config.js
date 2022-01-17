module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://besaferestapi.herokuapp.com/:path*",
      },
    ];
  },
};
