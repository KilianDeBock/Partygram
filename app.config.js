import "dotenv/config";

module.exports = ({ config }) => ({
  ...config,
  extra: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },
});
