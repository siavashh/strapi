module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd4f705811d74fd0e5bdd310814a8ec23'),
  },
});
