import "dotenv/config";

module.exports = ({ config }) => ({
  ...config,
  extra: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    eas: {
      projectId: "89ed8ae4-9650-4974-be17-98508b7d7a0c",
    },
  },
});
