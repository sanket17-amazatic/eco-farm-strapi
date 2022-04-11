module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5ef576dad8cf158f40517866162e8375'),
  },
});
