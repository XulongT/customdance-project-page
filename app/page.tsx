import { BibtexBlock } from "./BibtexBlock";

export const dynamic = "force-static";

const paperPdfUrl = "https://arxiv.org/pdf/2608.06722";
const canonicalUrl = "https://xulongt.github.io/customdance-project-page/";
const paperTitle =
  "CustomDance: Customized 3D Dance Generation with Coarse-to-Fine Human-Centered Interactive Control";

const authors = [
  { name: "Xulong Tang", affiliation: "1" },
  { name: "Kaixing Yang", affiliation: "3" },
  { name: "Xiaohu Guo", affiliation: "1" },
  { name: "Balakrishnan Prabhakaran", affiliation: "2" },
  { name: "Rawan Alghofaili", affiliation: "1" },
];

const methodStages = [
  {
    number: "01",
    title: "Choreographic Motif Planning",
    components: "MLLM Planner / Anchors / Cues",
    copy: "Music and global intent are used to propose timeline anchors and local creativity cues.",
    poster: "assets/media/workflow-motif-planning-poster.jpg",
    video: "assets/media/workflow-motif-planning.mp4",
  },
  {
    number: "02",
    title: "Dance Phrase Generation",
    components: "Retriever / Dance Library / Recommendation",
    copy: "Creators explore ranked, real dance phrases using local text and body-part controls.",
    poster: "assets/media/workflow-phrase-generation-poster.jpg",
    video: "assets/media/workflow-phrase-generation.mp4",
  },
  {
    number: "03",
    title: "Completion and Refinement",
    components: "Completer / Diagnoser / Remaker",
    copy: "Generated transitions and local repair preserve the creator's phrase choices.",
    poster: "assets/media/workflow-completion-refinement-poster.jpg",
    video: "assets/media/workflow-completion-refinement.mp4",
  },
];

const workflowStages = [
  ...methodStages,
  {
    number: "04",
    title: "Final Result",
    poster: "assets/media/workflow-final-result-poster.jpg",
    video: "assets/media/workflow-final-result.mp4",
  },
];

const scholarlyArticleSchema = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  name: paperTitle,
  url: canonicalUrl,
  sameAs: paperPdfUrl,
  description:
    "CustomDance is a coarse-to-fine interactive system designed for customized 3D dance generation.",
  author: authors.map((author) => ({
    "@type": "Person",
    name: author.name,
  })),
  identifier: {
    "@type": "PropertyValue",
    propertyID: "arXiv",
    value: "2608.06722",
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlyArticleSchema) }}
      />
      <a className="skip-link" href="#abstract">
        Skip to abstract
      </a>

      <header className="paper-hero" id="top">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="CustomDance home">
            CustomDance
          </a>
          <div className="navlinks">
            <a href="#abstract">Abstract</a>
            <a href="#video">Video</a>
            <a href="#method">Method</a>
            <a href="#workflow">Workflow</a>
            <a href="#results">Results</a>
            <a href="#citation">BibTeX</a>
          </div>
        </nav>

        <section className="hero-title" aria-labelledby="page-title">
          <figure className="hero-teaser">
            <img
              src="assets/media/hero-teaser.webp"
              alt="CustomDance choreography results."
              fetchPriority="high"
            />
          </figure>
          <p className="venue">SIGGRAPH Asia 2026</p>
          <h1 id="page-title">CustomDance</h1>
          <p className="subtitle">
            Customized 3D Dance Generation with Coarse-to-Fine
            Human-Centered Interactive Control
          </p>

          <div className="authors" aria-label="Authors">
            {authors.map((author) => (
              <span key={author.name}>
                {author.name}
                <sup>{author.affiliation}</sup>
              </span>
            ))}
          </div>

          <div className="affiliations">
            <span>
              <sup>1</sup>The University of Texas at Dallas
            </span>
            <span>
              <sup>2</sup>University at Albany
            </span>
            <span>
              <sup>3</sup>Malou Tech Inc.
            </span>
          </div>

          <div className="actions" aria-label="Project sections">
            <a
              className="button primary"
              href={paperPdfUrl}
              target="_blank"
              rel="noreferrer"
            >
              Paper
            </a>
            <a className="button" href="#video">
              Demo Video
            </a>
            <a className="button" href="#method">
              Method
            </a>
            <a className="button" href="#results">
              Results
            </a>
          </div>
        </section>
      </header>

      <section className="section abstract-section" id="abstract">
        <div className="section-heading center">
          <p className="section-kicker">Abstract</p>
        </div>
        <div className="abstract-card">
          <p>
            With the rise of AI-generated content (AIGC) and advanced techniques
            for 3D human representation, the task of generating 3D dance
            movements has become an exciting area of research. Despite
            significant advancements, current methods often fail to provide
            comprehensive and distinct control over various multimodal inputs
            from users, such as music or specific descriptions of desired
            movements. As a result, the generated motions may be statistically
            plausible and technically correct, but they often lack depth,
            expressiveness, and alignment with the user&apos;s creative vision. To
            address this issue, we present <strong>CustomDance</strong>, a
            coarse-to-fine interactive system designed for customized 3D dance
            generation.
          </p>
          <p>
            Inspired by real-world choreographic workflows,
            <strong> CustomDance</strong> combines music-aware planning,
            phrase-level retrieval, and diffusion-based completion and repair.
            It gives creators concrete, predictable choices while preserving
            iterative control over the final choreography.
          </p>
        </div>
      </section>

      <section className="section" id="method">
        <div className="section-heading">
          <p className="section-kicker">Method</p>
          <h2>CustomDance Framework</h2>
        </div>

        <div className="method-panel">
          <figure className="figure-panel method-figure">
            <img
              src="assets/media/method-overview.webp"
              alt="Overview of CustomDance showing motif planning, phrase retrieval, and completion and refinement."
              loading="lazy"
            />
          </figure>

          <div className="method-grid" aria-label="CustomDance stages">
            {methodStages.map((stage) => (
              <article key={stage.number}>
                <span>{stage.number}</span>
                <h3>{stage.title}</h3>
                <p className="component-list">{stage.components}</p>
                <p>{stage.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section workflow-section" id="workflow">
        <div className="section-heading">
          <p className="section-kicker">User Workflow</p>
          <h2>From Creative Intent to Choreography</h2>
        </div>

        <div className="workflow-grid">
          {workflowStages.map((stage) => (
            <figure key={stage.number} className="workflow-card">
              <video
                controls
                playsInline
                preload="metadata"
                poster={stage.poster}
              >
                <source src={stage.video} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
              <figcaption>
                <span>Stage {stage.number}</span>
                <strong>{stage.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section" id="results">
        <div className="section-heading">
          <p className="section-kicker">Results</p>
          <h2>Customized Choreography Results</h2>
        </div>

        <div className="comparison-video-grid">
          <figure className="comparison-video-card">
            <video
              controls
              playsInline
              preload="metadata"
              poster="assets/media/results-popping-comparison-poster.jpg"
            >
              <source
                src="assets/media/results-popping-comparison.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML video.
            </video>
            <figcaption>
              &ldquo;I want a powerful Popping routine with higher complexity,
              and more foundational moves like the &apos;Fresno.&apos;&rdquo;
            </figcaption>
          </figure>
          <figure className="comparison-video-card">
            <video
              controls
              playsInline
              preload="metadata"
              poster="assets/media/results-hantang-comparison-poster.jpg"
            >
              <source
                src="assets/media/results-hantang-comparison.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML video.
            </video>
            <figcaption>
              &ldquo;I want an elegant HanTang routine with expansive upper-body
              stretches and flowing, graceful lines.&rdquo;
            </figcaption>
          </figure>
        </div>

      </section>

      <section className="section" id="video">
        <div className="section-heading center">
          <p className="section-kicker">Overview Video</p>
          <h2>Video</h2>
        </div>
        <figure className="video-frame">
          <video
            controls
            playsInline
            preload="metadata"
            poster="assets/media/customdance_demo_video-poster.jpg"
          >
            <source
              src="assets/media/customdance_demo_video.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>
        </figure>
      </section>

      <section className="section citation-section" id="citation">
        <BibtexBlock />
      </section>

      <footer>
        <span>© Xulong Tang 2026</span>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  );
}
