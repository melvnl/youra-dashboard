module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0d304d23ffc4a224f8b2242e0ff55d0e'),
  },
});
