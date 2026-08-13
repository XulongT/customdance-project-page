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
    /<title>CustomDance: Customized 3D Dance Generation with Coarse-to-Fine Human-Centered Interactive Control<\/title>/i,
  );
  assert.doesNotMatch(html, /with a Coarse-to-Fine Human-Centered Interactive Control/);
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/xulongt\.github\.io\/customdance-project-page\/"/i,
  );
  assert.match(html, /https:\/\/arxiv\.org\/pdf\/2608\.06722/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /ScholarlyArticle/);
  assert.match(html, /Prabhakaran Balakrishnan/);
  assert.match(html, /Balakrishnan, Prabhakaran/);
  assert.doesNotMatch(html, /Balakrishnan Prabhakaran/);
  assert.doesNotMatch(html, /Prabhakaran, Balakrishnan/);
  assert.match(html, /SIGGRAPH Asia 2026/);
  assert.match(html, />Abstract</);
  assert.doesNotMatch(
    html,
    /Our evaluations demonstrate that CustomDance not only highlights/,
  );
  assert.match(html, /Overview Video/);
  assert.match(html, /customdance_demo_video\.mp4/);
  assert.match(html, /customdance_demo_video-poster\.jpg/);
  assert.match(html, /CustomDance Framework/);
  assert.match(html, /User Workflow/);
  assert.match(html, /workflow-motif-planning\.mp4/);
  assert.match(html, /workflow-motif-planning-poster\.jpg/);
  assert.match(html, /workflow-phrase-generation\.mp4/);
  assert.match(html, /workflow-phrase-generation-poster\.jpg/);
  assert.match(html, /workflow-completion-refinement\.mp4/);
  assert.match(html, /workflow-completion-refinement-poster\.jpg/);
  assert.match(html, /workflow-final-result\.mp4/);
  assert.match(html, /workflow-final-result-poster\.jpg/);
  assert.match(html, /Final Result/);
  assert.match(html, /Customized Choreography Results/);
  assert.match(html, /results-popping-comparison\.mp4/);
  assert.match(html, /results-hantang-comparison\.mp4/);
  assert.match(html, /results-popping-comparison-poster\.jpg/);
  assert.match(html, /results-hantang-comparison-poster\.jpg/);
  assert.match(html, /powerful Popping routine/);
  assert.match(html, /elegant HanTang routine/);
  assert.doesNotMatch(html, /Two studies examine the complete workflow/);
  assert.match(html, /Choreographic Motif Planning/);
  assert.match(html, /Dance Phrase Generation/);
  assert.match(html, /Retriever \/ Dance Library \/ Recommendation/);
  assert.match(html, /Completion and Refinement/);
  assert.match(html, /Diagnoser/);
  assert.match(html, /@article\{tang2026customdance/);
  assert.match(html, /arXiv preprint arXiv:2608\.06722/);
  assert.doesNotMatch(html, /Proceedings of the SIGGRAPH Asia 2026 Conference Papers/);
  assert.match(html, /Copy BibTeX/);
  assert.doesNotMatch(
    html,
    /Qualitative results of CustomDance across five FineDance coarse styles/,
  );
  assert.doesNotMatch(
    html,
    /Task-level ratings across the five interface conditions|Rank distributions across music alignment/,
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
