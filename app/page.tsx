import { BibtexBlock } from "./BibtexBlock";

export const dynamic = "force-static";

const authors = [
  { name: "Xulong Tang", affiliation: "1" },
  { name: "Kaixing Yang", affiliation: "3" },
  { name: "Xiaohu Guo", affiliation: "1" },
  { name: "Balakrishnan Prabhakaran", affiliation: "2" },
  { name: "Rawan Alghofaili", affiliation: "1" },
];

const stages = [
  {
    number: "01",
    title: "Choreographic Motif Planning",
    label: "Listen / plan",
    components: "MLLM planner / anchors / cues",
    accent: "amber",
    image: "assets/media/ui-planning.webp",
    alt: "CustomDance interface showing global text, Gemini-generated cues, anchors, and timeline slots.",
    copy: "A multimodal language model reads the music together with the creator's global intent, then proposes temporal anchors and local creativity cues for the timeline.",
  },
  {
    number: "02",
    title: "Dance Phrase Generation",
    label: "Search / select",
    components: "Retriever / Dance Library / Recommendation",
    accent: "cyan",
    image: "assets/media/ui-retrieval.webp",
    alt: "CustomDance interface showing local text, body-part controls, a ranked motion list, and selected timeline phrases.",
    copy: "For each slot, the creator can edit a local prompt and body-part intensity or variety controls. A trimodal Retriever ranks previewable, real dance phrases from the library.",
  },
  {
    number: "03",
    title: "Completion and Refinement",
    label: "Connect / repair",
    components: "Completer / Diagnoser / Remaker",
    accent: "rust",
    image: "assets/media/ui-refinement.webp",
    alt: "CustomDance Diagnoser interface showing a selected local region for motion repair.",
    copy: "The Completer fills gaps between selected phrases. The Diagnoser helps locate local anomalies, and the Remaker resynthesizes a selected full-body or joint-group window.",
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#abstract">
        Skip to abstract
      </a>

      <header className="site-nav" aria-label="Primary navigation">
        <a className="site-mark" href="#top" aria-label="CustomDance home">
          CustomDance
        </a>
        <nav className="nav-links" aria-label="Project sections">
          <a href="#abstract">Abstract</a>
          <a href="#video">Video</a>
          <a href="#method">Method</a>
          <a href="#results">Results</a>
          <a href="#citation">Citation</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img
          className="hero-media"
          src="assets/media/hero-teaser.webp"
          alt=""
          fetchPriority="high"
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-inner">
          <p className="kicker">SIGGRAPH Asia 2026 / Technical Paper</p>
          <h1 id="hero-title">CustomDance</h1>
          <p className="hero-subtitle">
            Customized 3D Dance Generation with a Coarse-to-Fine
            Human-Centered Interactive System
          </p>

          <div className="author-list" aria-label="Authors">
            {authors.map((author, index) => (
              <span key={author.name}>
                {author.name}
                <sup>{author.affiliation}</sup>
                {index < authors.length - 1 ? "," : ""}
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

          <div className="hero-actions" aria-label="Project resources">
            <a className="action action-primary" href="#video">
              Demo video
            </a>
            <a className="action" href="#method">
              Method
            </a>
            <a className="action" href="#results">
              Results
            </a>
          </div>
        </div>
      </section>

      <section className="abstract paper-section" id="abstract">
        <div className="section-shell">
          <div className="abstract-heading">
            <p className="kicker ink-kicker">01 / Abstract</p>
          </div>
          <div className="abstract-copy">
            <p>
              With the rise of AI-generated content (AIGC) and advanced
              techniques for 3D human representation, the task of generating 3D
              dance movements has become an exciting area of research. Despite
              significant advancements, current methods often fail to provide
              comprehensive and distinct control over various multimodal inputs
              from users, such as music or specific descriptions of desired
              movements. As a result, the generated motions may be statistically
              plausible and technically correct, but they often lack depth,
              expressiveness, and alignment with the user&apos;s creative
              vision. To address this issue, we present{" "}
              <strong>CustomDance</strong>, a coarse-to-fine interactive system
              designed for customized 3D dance generation.
            </p>
            <p>
              Inspired by the workflows of expert choreographers,{" "}
              <strong>CustomDance</strong> introduces a novel paradigm to
              AI-assisted choreography through three interconnected stages.
              First, a multimodal Large Language Model (MLLM) analyzes the music
              and a high-level text prompt to identify key temporal anchors and
              creative cues for the piece. Next, for each anchor, a multimodal
              retriever suggests high-quality motion clips from a dance library
              based on local music and text, empowering the user with concrete
              and predictable options. Finally, a custom music-conditioned
              diffusion in-painter seamlessly connects the selected phrases,
              allowing for iterative, user-guided refinement of the final
              composition, supported by visualizations of motion dynamics.
            </p>
          </div>
        </div>
      </section>

      <section className="video-section dark-section" id="video">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="kicker">02 / Video</p>
              <h2>CustomDance in action.</h2>
            </div>
            <p className="lead dark-lead">
              The video contains two parts. User Workflow presents an actual
              three-stage authoring process and its final result; Comparison
              Study visualizes CustomDance alongside recent dance-generation
              methods across multiple genres.
            </p>
          </div>
          <figure className="video-frame">
            <video
              controls
              playsInline
              preload="metadata"
              poster="assets/media/hero-teaser.webp"
            >
              <source
                src="assets/media/customdance_demo_video.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML video.
            </video>
            <figcaption>
              <span>Demo video</span>
              <span>03:58 / 1920 × 1080</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="method paper-section" id="method">
        <div className="section-shell">
          <div className="section-heading method-heading">
            <div>
              <p className="kicker ink-kicker">03 / Method</p>
              <h2>One timeline. Three authoring scales.</h2>
            </div>
            <p className="lead">
              Planning establishes choreographic structure. Retrieval turns
              intent into selectable phrases. Completion and repair preserve
              the creator&apos;s decisions while resolving unfinished motion.
            </p>
          </div>

          <figure className="overview-frame">
            <img
              src="assets/media/method-overview.webp"
              alt="Overview of CustomDance showing motif planning, trimodal phrase retrieval, and diffusion-based completion and refinement."
              loading="lazy"
            />
            <figcaption>
              <span>System overview</span>
              <span>Planner / Retriever / Completer / Diagnoser / Remaker</span>
            </figcaption>
          </figure>

          <div className="stage-ledger" aria-label="Three-stage method">
            {stages.map((stage) => (
              <article key={stage.number} className={`stage-row stage-${stage.accent}`}>
                <div className="stage-number">{stage.number}</div>
                <div>
                  <p className="stage-label">{stage.label}</p>
                  <h3>{stage.title}</h3>
                  <p className="component-list">{stage.components}</p>
                </div>
                <p>{stage.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow graphite-section">
        <div className="section-shell">
          <div className="section-heading compact-heading">
            <div>
              <p className="kicker">Method in use</p>
              <h2>Authoring operations remain visible.</h2>
            </div>
            <p className="lead dark-lead">
              Each stage exposes an inspectable operation in the same timeline,
              so creators can move between high-level intent and local motion
              edits without losing the larger composition.
            </p>
          </div>

          <div className="workflow-list">
            {stages.map((stage) => (
              <article key={stage.number} className="workflow-entry">
                <figure className="media-frame">
                  <img src={stage.image} alt={stage.alt} loading="lazy" />
                </figure>
                <div className="workflow-copy">
                  <p className={`stage-label text-${stage.accent}`}>
                    Stage {stage.number} / {stage.label}
                  </p>
                  <h3>{stage.title}</h3>
                  <p className="component-list">{stage.components}</p>
                  <p>{stage.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="results paper-section" id="results">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="kicker ink-kicker">04 / Results</p>
              <h2>Choreography shaped around creative intent.</h2>
            </div>
            <p className="lead">
              CustomDance gives creators control over phrase selection,
              transitions, and local repair, helping them create expressive,
              coherent dances that remain aligned with their music and creative
              intent.
            </p>
          </div>

          <figure className="result-feature">
            <img
              src="assets/media/results-genres.webp"
              alt="Five customized choreographies across HanTang, Uyghur, Jazz, Korean, and Hip-Hop styles."
              loading="lazy"
            />
            <figcaption>
              Qualitative results of CustomDance across five FineDance coarse
              styles (Classic, Folk, Standard, Mix, Street), conditioned on user
              preferences.
            </figcaption>
          </figure>

          <div className="result-grid">
            <figure>
              <img
                src="assets/media/results-ratings.webp"
                alt="Task-level ratings for controllability, pose satisfaction, and description fulfillment across five authoring conditions."
                loading="lazy"
              />
              <figcaption>
                Task-level 7-point Likert ratings on Perceived Controllability,
                Pose Satisfaction, and Description Fulfillment across the five
                interface conditions.
              </figcaption>
            </figure>
            <figure>
              <img
                src="assets/media/results-ranking.webp"
                alt="Rank distributions for music alignment, description fulfillment, and overall performance."
                loading="lazy"
              />
              <figcaption>
                Rank distributions of CustomDance, MEGADance, Lodge, and
                Baseline across Music Alignment, Description Fulfillment, and
                Overall Performance.
              </figcaption>
            </figure>
          </div>

          <details className="comparison-disclosure">
            <summary>View qualitative comparison</summary>
            <figure>
              <img
                src="assets/media/results-comparison.webp"
                alt="Qualitative comparison of CustomDance, MEGADance, Lodge, and a basic editor on a Popping choreography prompt."
                loading="lazy"
              />
              <figcaption>
                Qualitative comparison on a street-style excerpt conditioned on
                user preferences.
              </figcaption>
            </figure>
          </details>
        </div>
      </section>

      <section className="citation-section dark-section" id="citation">
        <div className="section-shell">
          <BibtexBlock />
        </div>
      </section>

      <footer className="site-footer">
        <span>© Xulong Tang 2026</span>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  );
}
