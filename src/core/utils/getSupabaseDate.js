export const getSupabaseDate = (date = null, timeBack = 0) => {
  const d = date ? date : new Date();
  d.setHours(d.getHours() - timeBack);
  return d.toISOString();
};
