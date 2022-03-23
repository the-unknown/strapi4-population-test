module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dc2e34951e647589a6cd8393a1cc93d8'),
  },
});
