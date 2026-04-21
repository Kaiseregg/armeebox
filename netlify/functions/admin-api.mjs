
export default async (req, res) => {
  try {
    const { action, payload } = JSON.parse(req.body || "{}");

    if (action === "products") {
      // load products
      const data = await fetch(process.env.SUPABASE_URL + "/rest/v1/products?select=*", {
        headers: {
          apikey: process.env.SUPABASE_ANON_KEY,
          Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`
        }
      }).then(r => r.json());

      return res.status(200).json(data);
    }

    if (action === "products-save") {
      for (const p of payload) {
        await fetch(process.env.SUPABASE_URL + "/rest/v1/products?id=eq." + p.id, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
            Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`
          },
          body: JSON.stringify(p)
        });
      }
      return res.status(200).json({ success: true });
    }

    return res.status(400).json({ error: "Unknown action" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
