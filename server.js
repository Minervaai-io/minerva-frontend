// server.js (ESM)
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
// add your deployed frontend domain here later
app.use(cors({ origin: ["http://localhost:5173"] }));

const {
  RETELL_API_KEY,
  MARK_AGENT_ID,
  SARAH_AGENT_ID,
  DAVID_AGENT_ID,
  PORT = 4000,
} = process.env;

if (!RETELL_API_KEY) {
  console.error("❌ Missing RETELL_API_KEY in .env");
  process.exit(1);
}
if (!MARK_AGENT_ID && !SARAH_AGENT_ID && !DAVID_AGENT_ID) {
  console.warn("⚠️ No agent ids set (MARK_AGENT_ID / SARAH_AGENT_ID / DAVID_AGENT_ID).");
}

app.get("/__health", (_req, res) => res.json({ ok: true }));

async function createWebCall(agentId) {
  const resp = await fetch("https://api.retellai.com/v2/create-web-call", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RETELL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ agent_id: agentId }),
  });
  const raw = await resp.text();
  if (!resp.ok) throw new Error(`Retell ${resp.status}: ${raw}`);
  return JSON.parse(raw); // { access_token, call_id, ... }
}

// Unified route: choose by key or pass agentId directly
app.post("/api/start-call", async (req, res) => {
  try {
    const { agentKey, agentId } = req.body || {};
    const lookup = { mark: MARK_AGENT_ID, sarah: SARAH_AGENT_ID, david: DAVID_AGENT_ID };
    const resolvedId = agentId || lookup[agentKey] || MARK_AGENT_ID;
    if (!resolvedId) return res.status(400).json({ error: "Missing agent id" });

    const data = await createWebCall(resolvedId);
    console.log("▶️ start-call:", { agentKey: agentKey || "direct", agentId: resolvedId, call_id: data.call_id });
    res.json({ access_token: data.access_token, call_id: data.call_id });
  } catch (e) {
    console.error("start-call error:", e.message);
    res.status(502).json({ error: "Upstream error creating web call" });
  }
});

// Dedicated routes (one per agent)
app.post("/api/start-mark-call", async (_req, res) => {
  try {
    if (!MARK_AGENT_ID) return res.status(400).json({ error: "MARK_AGENT_ID not set" });
    const data = await createWebCall(MARK_AGENT_ID);
    console.log("▶️ mark-call:", { call_id: data.call_id });
    res.json({ access_token: data.access_token, call_id: data.call_id });
  } catch (e) {
    console.error("mark-call error:", e.message);
    res.status(502).json({ error: "Upstream error creating web call" });
  }
});

app.post("/api/start-sarah-call", async (_req, res) => {
  try {
    if (!SARAH_AGENT_ID) return res.status(400).json({ error: "SARAH_AGENT_ID not set" });
    const data = await createWebCall(SARAH_AGENT_ID);
    console.log("▶️ sarah-call:", { call_id: data.call_id });
    res.json({ access_token: data.access_token, call_id: data.call_id });
  } catch (e) {
    console.error("sarah-call error:", e.message);
    res.status(502).json({ error: "Upstream error creating web call" });
  }
});

app.post("/api/start-david-call", async (_req, res) => {
  try {
    if (!DAVID_AGENT_ID) return res.status(400).json({ error: "DAVID_AGENT_ID not set" });
    const data = await createWebCall(DAVID_AGENT_ID);
    console.log("▶️ david-call:", { call_id: data.call_id });
    res.json({ access_token: data.access_token, call_id: data.call_id });
  } catch (e) {
    console.error("david-call error:", e.message);
    res.status(502).json({ error: "Upstream error creating web call" });
  }
});

// simple console logger (optional)
app.post("/api/log-demo", (req, res) => {
  const { name = "", email = "", event = "" } = req.body || {};
  console.log("LOG DEMO:", { name, email, event, at: new Date().toISOString() });
  res.json({ ok: true });
});

app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
