import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the CustomDance project page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>CustomDance \| Interactive 3D Choreography Authoring<\/title>/i,
  );
  assert.match(html, /SIGGRAPH Asia 2026/);
  assert.match(html, /01 \/ Abstract/);
  assert.doesNotMatch(
    html,
    /Our evaluations demonstrate that CustomDance not only highlights/,
  );
  assert.match(html, /02 \/ Video/);
  assert.match(html, /The video contains two parts/);
  assert.match(html, /customdance_demo_video\.mp4/);
  assert.match(html, /Choreography shaped around creative intent/);
  assert.doesNotMatch(html, /Two studies examine the complete workflow/);
  assert.match(html, /Choreographic Motif Planning/);
  assert.match(html, /Dance Phrase Generation/);
  assert.match(html, /Retriever \/ Dance Library \/ Recommendation/);
  assert.match(html, /Completion and Refinement/);
  assert.match(html, /Diagnoser/);
  assert.match(html, /Proceedings of the SIGGRAPH Asia 2026 Conference Papers/);
  assert.match(html, /Copy BibTeX/);
  assert.match(
    html,
    /Qualitative results of CustomDance across five FineDance coarse styles/,
  );
  assert.doesNotMatch(html, /Style range|Authoring experience|Dance quality/);
  assert.doesNotMatch(html, /Rank-1 overall|Authoring time|Recall@10/);
  assert.match(html, /Xulong Tang/);
  assert.match(html, /© Xulong Tang 2026/);
  assert.doesNotMatch(
    html,
    /customdance-(?:paper|supplement)\.pdf|05 \/ Resources/i,
  );
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});
