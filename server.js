// server.js - CommonJS backend with CORS for Netlify + Render
console.log(">>> server.js STARTING");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const {
  RETELL_API_KEY,
  MARK_AGENT_ID,
  SARAH_AGENT_ID,
  DAVID_AGENT_ID,
  PORT = 4000,
} = process.env;

const app = express();

// CORS: allow Netlify + anything else for now
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Healthcheck
app.get("/__health", (_req, res) => res.json({ ok: true }));

// Helper: use global fetch (Node 18+ on Render)
async function createWebCall(agentId) {
  if (!RETELL_API_KEY) {
    throw new Error("RETELL_API_KEY not configured");
  }

  const resp = await fetch("https://api.retellai.com/v2/create-web-call", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RETELL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ agent_id: agentId }),
  });

  const raw = await resp.text();

  if (!resp.ok) {
    console.error("Retell error:", resp.status, raw);
    throw new Error(`Retell ${resp.status}`);
  }

  return JSON.parse(raw); // { access_token, call_id, ... }
}

// Optional unified route
app.post("/api/start-call", async (req, res) => {
  try {
    const { agentKey, agentId } = req.body || {};
    const lookup = {
      mark: MARK_AGENT_ID,
      sarah: SARAH_AGENT_ID,
      david: DAVID_AGENT_ID,
    };
    const resolvedId = agentId || lookup[agentKey] || MARK_AGENT_ID;

    if (!resolvedId) {
      return res.status(400).json({ error: "Missing agent id" });
    }

    const data = await createWebCall(resolvedId);
    console.log("▶️ start-call:", {
      agentKey: agentKey || "direct",
      agentId: resolvedId,
      call_id: data.call_id,
    });

    return res.json({
      access_token: data.access_token,
      call_id: data.call_id,
    });
  } catch (e) {
    console.error("start-call error:", e);
    return res
      .status(502)
      .json({ error: "Upstream error creating web call" });
  }
});

// Dedicated routes used by frontend
app.post("/api/start-mark-call", async (_req, res) => {
  try {
    if (!MARK_AGENT_ID) {
      return res.status(400).json({ error: "MARK_AGENT_ID not set" });
    }

    const data = await createWebCall(MARK_AGENT_ID);
    console.log("▶️ mark-call:", { call_id: data.call_id });

    return res.json({
      access_token: data.access_token,
      call_id: data.call_id,
    });
  } catch (e) {
    console.error("mark-call error:", e);
    return res
      .status(502)
      .json({ error: "Upstream error creating web call" });
  }
});

app.post("/api/start-sarah-call", async (_req, res) => {
  try {
    if (!SARAH_AGENT_ID) {
      return res.status(400).json({ error: "SARAH_AGENT_ID not set" });
    }

    const data = await createWebCall(SARAH_AGENT_ID);
    console.log("▶️ sarah-call:", { call_id: data.call_id });

    return res.json({
      access_token: data.access_token,
      call_id: data.call_id,
    });
  } catch (e) {
    console.error("sarah-call error:", e);
    return res
      .status(502)
      .json({ error: "Upstream error creating web call" });
  }
});

app.post("/api/start-david-call", async (_req, res) => {
  try {
    if (!DAVID_AGENT_ID) {
      return res.status(400).json({ error: "DAVID_AGENT_ID not set" });
    }

    const data = await createWebCall(DAVID_AGENT_ID);
    console.log("▶️ david-call:", { call_id: data.call_id });

    return res.json({
      access_token: data.access_token,
      call_id: data.call_id,
    });
  } catch (e) {
    console.error("david-call error:", e);
    return res
      .status(502)
      .json({ error: "Upstream error creating web call" });
  }
});

// Simple logger
app.post("/api/log-demo", (req, res) => {
  const { name = "", email = "", event = "" } = req.body || {};
  console.log("LOG DEMO:", {
    name,
    email,
    event,
    at: new Date().toISOString(),
  });
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
