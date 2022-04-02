module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6e1a40ecfe658fbcf282e3e968cc55e3'),
  },
});
