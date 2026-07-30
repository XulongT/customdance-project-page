"use client";

import { useState } from "react";

const bibtex = `@inproceedings{tang2026customdance,
  title     = {CustomDance: Customized 3D Dance Generation
               with Coarse-to-Fine Human-Centered Interactive System},
  author    = {Tang, Xulong and Yang, Kaixing and Guo, Xiaohu and
               Prabhakaran, Balakrishnan and Alghofaili, Rawan},
  booktitle = {Proceedings of the SIGGRAPH Asia 2026 Conference Papers},
  year      = {2026}
}`;

function legacyCopy(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);
  if (!copied) {
    throw new Error("Copy command was rejected.");
  }
}

export function BibtexBlock() {
  const [copyLabel, setCopyLabel] = useState("Copy BibTeX");

  async function copyBibtex() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(bibtex);
      } else {
        legacyCopy(bibtex);
      }
      setCopyLabel("Copied");
      window.setTimeout(() => setCopyLabel("Copy BibTeX"), 1800);
    } catch {
      setCopyLabel("Copy failed");
      window.setTimeout(() => setCopyLabel("Copy BibTeX"), 1800);
    }
  }

  return (
    <div className="citation-block" id="bibtex">
      <div className="citation-heading">
        <p className="kicker">Citation</p>
        <h2>BibTeX</h2>
        <button type="button" className="copy-button" onClick={copyBibtex}>
          {copyLabel}
        </button>
      </div>
      <pre>
        <code>{bibtex}</code>
      </pre>
    </div>
  );
}
