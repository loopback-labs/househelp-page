const ALLOWED_ORIGIN = env => env.ALLOWED_ORIGIN ?? "*";

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return corsResponse(null, 204, env);
    }

    if (request.method !== "POST") {
      return corsResponse("Method Not Allowed", 405, env);
    }

    let email;
    try {
      const body = await request.json();
      email = typeof body?.email === "string" ? body.email.trim() : null;
    } catch {
      return corsResponse("Bad Request", 400, env);
    }

    if (!email) {
      return corsResponse("Email is required", 400, env);
    }

    const airtableUrl = `https://api.airtable.com/v0/${env.AIRTABLE_BASE_ID}/${encodeURIComponent(env.AIRTABLE_TABLE_NAME)}`;

    const airtableRes = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.AIRTABLE_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields: { Email: email } }),
    });

    if (!airtableRes.ok) {
      const status = airtableRes.status === 422 ? 409 : airtableRes.status;
      return corsResponse("Failed to save email", status, env);
    }

    return corsResponse("OK", 200, env);
  },
};

function corsResponse(body, status, env) {
  const origin = ALLOWED_ORIGIN(env);
  const headers = {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "text/plain",
  };
  return new Response(body, { status, headers });
}
