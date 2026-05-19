/* ============================================================
   BRANDIV — Discovery Survey Engine v4
   Built against exact Webflow HTML structure
   ============================================================ */

(function () {

  const TOTAL_STEPS = 18;

  const steps = [
    {
      id: 1, block: "Block 1 of 5 — Context",
      title: "Let's start with the basics.",
      description: "This helps us tailor every insight to your brand's real world.",
      component: "comp_short-text", field: "brand_name",
      label: "What's your brand name?", placeholder: "e.g. Brandiv",
    },
    {
      id: 2, block: "Block 1 of 5 — Context",
      title: "What space does your brand operate in?",
      description: "Don't overthink it. A rough category is enough.",
      component: "comp_dropdown", field: "industry",
      label: "Select your industry",
      options: [
        { value: "", label: "Select..." },
        { value: "technology", label: "Technology & Software" },
        { value: "design", label: "Design & Creative Services" },
        { value: "ecommerce", label: "E-commerce & Retail" },
        { value: "health", label: "Health & Wellness" },
        { value: "finance", label: "Finance & Fintech" },
        { value: "education", label: "Education & Learning" },
        { value: "food", label: "Food & Beverage" },
        { value: "fashion", label: "Fashion & Lifestyle" },
        { value: "consulting", label: "Consulting & Professional Services" },
        { value: "nonprofit", label: "Non-profit & Social Impact" },
        { value: "media", label: "Media & Entertainment" },
        { value: "real_estate", label: "Real Estate" },
        { value: "other", label: "Other" },
      ],
    },
    {
      id: 3, block: "Block 2 of 5 — The Problem",
      title: "In one sentence — what does your brand do?",
      description: "No buzzwords. No mission statement. Just what it actually does.",
      component: "comp_short-text", field: "what_you_do",
      label: "What does your brand do?",
      placeholder: "e.g. We help independent designers build brand books without code.",
    },
    {
      id: 4, block: "Block 2 of 5 — The Problem",
      title: "What problem are you solving, and for whom?",
      description: "Be specific. A good answer names a real frustration a real person has.",
      component: "comp_long-text", field: "problem",
      label: "Describe the problem",
      placeholder: "e.g. Designers spend hours building brand books in Notion or PDFs that clients ignore. We fix that.",
    },
    {
      id: 5, block: "Block 2 of 5 — The Problem",
      title: "Why isn't this problem well solved today?",
      description: "What do existing options get wrong? What do they ignore?",
      component: "comp_long-text-ai", field: "problem_gap",
      label: "Why isn't this problem well solved today?",
      placeholder: "e.g. Most tools are either too complex for small teams or too generic to feel like a real brand document.",
    },
    {
      id: 6, block: "Block 3 of 5 — Your Audience",
      title: "Where does your brand operate?",
      description: "Scale and geography shape how a brand speaks.",
      component: "comp_dropdown", field: "geo_scope",
      label: "Select your reach",
      options: [
        { value: "", label: "Select..." },
        { value: "local", label: "Local — one city or region" },
        { value: "national", label: "National" },
        { value: "latam", label: "Latin America" },
        { value: "europe", label: "Europe" },
        { value: "global_en", label: "Global — English-first" },
        { value: "global_multi", label: "Global — multilingual" },
      ],
    },
    {
      id: 7, block: "Block 3 of 5 — Your Audience",
      title: "When does someone reach for your brand?",
      description: "Pick the moments that feel most true. You can select more than one.",
      component: "comp_text-cards", field: "consumption_moment",
      maxSelect: 3,
      options: [
        "At work, solving a problem",
        "During a moment of change",
        "As a daily ritual",
        "When making an important decision",
        "After something failed",
        "When looking for inspiration",
        "To signal identity or taste",
      ],
    },
    {
      id: 8, block: "Block 3 of 5 — Your Audience",
      title: "Which brands would your audience have in their world?",
      description: "Not competitors — brands that share a cultural space with yours.",
      component: "comp_multiselect", field: "brand_references",
      label: "Select all that feel right",
      maxSelect: 6,
      options: ["Apple", "Muji", "Notion", "Moleskine", "Patagonia", "Nike", "Beats", "Airbnb", "Oatly", "Rolex", "Figma", "Stripe", "Linear"],
    },
    {
      id: 9, block: "Block 3 of 5 — Your Audience",
      title: "What does your audience value most?",
      description: "What would make them choose you — even if you cost more?",
      component: "comp_text-cards", field: "audience_values",
      maxSelect: 3,
      options: [
        "Aesthetics & craft",
        "Functionality & reliability",
        "Community & belonging",
        "Status & recognition",
        "Purpose & ethics",
        "Simplicity",
        "Exclusivity",
        "Transparency",
      ],
    },
    {
      id: 10, block: "Block 4 of 5 — Your Difference",
      title: "Why would someone choose you over the alternatives?",
      description: "Not what you wish were true — what's actually true.",
      component: "comp_long-text", field: "differentiator",
      label: "Your honest differentiator",
      placeholder: "e.g. We're the only tool that lets a designer hand over a living brand book, not a PDF that gets forgotten.",
    },
    {
      id: 11, block: "Block 4 of 5 — Your Difference",
      title: "What do your competitors get wrong or ignore?",
      description: "Where is the gap in the market you're walking into?",
      component: "comp_long-text-ai", field: "competitor_gap",
      label: "The gap you're filling",
      placeholder: "e.g. Everyone builds document tools. Nobody builds brand infrastructure.",
    },
    {
      id: 12, block: "Block 4 of 5 — Your Difference",
      title: "How does your brand show up vs. how it doesn't?",
      description: "This helps define your edges — the lines you don't cross.",
      component: "comp_comparison", field: "we_are", fieldB: "we_are_not",
    },
    {
      id: 13, block: "Block 5 of 5 — Voice & Story",
      title: "Where does your brand sit on these spectrums?",
      description: "Move each dial to where your brand naturally lives.",
      component: "comp_slider-spectrum", field: "tone_sliders",
      spectrums: [
        { id: "spectrum-bar_1", left: "Formal", right: "Casual" },
        { id: "spectrum-bar_2", left: "Serious", right: "Playful" },
        { id: "spectrum-bar_3", left: "Technical", right: "Accessible" },
      ],
    },
    {
      id: 14, block: "Block 5 of 5 — Voice & Story",
      title: "Which of these sounds most like your brand?",
      description: "Same idea, five different voices. Pick the one that feels right.",
      component: "comp_multiselect", field: "tone_choice",
      maxSelect: 1, options: [], _isToneChoice: true,
    },
    {
      id: 15, block: "Block 5 of 5 — Voice & Story",
      title: "What kind of story does your brand tell?",
      description: "Every brand is a narrative. Pick the one that's yours.",
      component: "comp_story-cards", field: "story_archetype", maxSelect: 2,
    },
    {
      id: 16, block: "Block 5 of 5 — Voice & Story",
      title: "What was the moment — or the reason — this brand started?",
      description: "Origin stories are rarely dramatic. But they're always specific.",
      component: "comp_long-text-ai", field: "origin",
      label: "The origin",
      placeholder: "e.g. I built this after watching a client's brand manual get ignored for the third time in a row.",
    },
    {
      id: 17, block: "Block 5 of 5 — Voice & Story",
      title: "How do you want to be remembered in 5 years?",
      description: "Not your revenue goal. What mark do you want to leave?",
      component: "comp_long-text", field: "legacy",
      label: "Your legacy",
      placeholder: "e.g. The tool that made brand consistency accessible to every small team.",
    },
    {
      id: 18, block: "Block 5 of 5 — Voice & Story",
      title: "Here's what we found.",
      description: "Based on your answers, here are three things worth paying attention to.",
      component: "comp_market-insight", field: null, _isInsight: true,
    },
  ];

  // ── STATE ──────────────────────────────────────────
  let currentStep = 0;
  const answers = {};

  // ── DOM ────────────────────────────────────────────
  const allComponents = [
    "comp_market-insight", "comp_short-text", "comp_long-text",
    "comp_dropdown", "comp_slider-spectrum", "comp_multiselect",
    "comp_comparison", "comp_story-cards", "comp_long-text-ai",
    "comp_text-cards",
  ];

  const $progressBar   = document.querySelector(".stat3_progress-bar");
  const $progressLabel = document.querySelector("#progres-bar .tagline");
  const $blockTag      = document.querySelector("#tag .tagline");
  const $title         = document.querySelector(".heading-style-h5");
  const $description   = document.querySelector(".header-main .text-size-regular");
  const $backBtn       = document.querySelector(".section_content > .button-group_footer .button.is-text");
  const $nextBtn       = document.querySelector(".section_content > .button-group_footer .button.is-secondary-icon");

  // ── HELPERS ────────────────────────────────────────
  function hideAllComponents() {
    allComponents.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add("hide");
    });
  }

  function showComponent(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove("hide");
  }

  function updateProgress(i) {
    const pct = ((i + 1) / TOTAL_STEPS) * 100;
    if ($progressBar)  $progressBar.style.width = pct + "%";
    if ($progressLabel) $progressLabel.textContent = `Step ${i + 1} of ${TOTAL_STEPS}`;
  }

  function updateHeader(step) {
    if ($blockTag)    $blockTag.textContent    = step.block;
    if ($title)       $title.textContent       = step.title;
    if ($description) $description.textContent = step.description;
  }

  function cardSelectedStyle(el, selected) {
    el.style.borderColor     = selected ? "var(--border-color--border-secondary)" : "";
    el.style.backgroundColor = selected ? "var(--background-color--background-tertiary)" : "";
  }

  // ── POPULATORS ─────────────────────────────────────

  function populateShortText(step) {
    const label    = document.querySelector("#comp_short-text .text-area_heading .tagline");
    const textarea = document.querySelector("#comp_short-text textarea");
    if (label)    label.textContent     = step.label || "";
    if (textarea) { textarea.placeholder = step.placeholder || ""; textarea.value = answers[step.field] || ""; }
    const inner = document.querySelector("#comp_short-text .button-group_footer");
    if (inner) inner.style.display = "none";
  }

  function populateLongText(step) {
    const label    = document.querySelector("#comp_long-text .text-area_heading .tagline");
    const textarea = document.querySelector("#comp_long-text textarea");
    if (label)    label.textContent     = step.label || "";
    if (textarea) { textarea.placeholder = step.placeholder || ""; textarea.value = answers[step.field] || ""; }
    const inner = document.querySelector("#comp_long-text .button-group_footer");
    if (inner) inner.style.display = "none";
  }

  function populateLongTextAI(step) {
    const label    = document.querySelector("#comp_long-text-ai .tagline");
    const textarea = document.querySelector("#comp_long-text-ai textarea");
    if (label)    label.textContent     = step.label || "";
    if (textarea) { textarea.placeholder = step.placeholder || ""; textarea.value = answers[step.field] || ""; }
  }

  function populateDropdown(step) {
    const label  = document.querySelector("#comp_dropdown .text-area_heading .tagline");
    const select = document.querySelector("#comp_dropdown select");
    if (label) label.textContent = step.label || "";
    if (select && step.options) {
      select.innerHTML = step.options.map(o => `<option value="${o.value}">${o.label}</option>`).join("");
      select.value = answers[step.field] || "";
    }
    const inner = document.querySelector("#comp_dropdown .button-group_footer");
    if (inner) inner.style.display = "none";
  }

  // comp_multiselect — pills, rebuilds selection_row
  function populateMultiselect(step) {
    const heading   = document.querySelector("#comp_multiselect .text-area_heading .tagline");
    const multiWrap = document.querySelector("#comp_multiselect .multi-select");
    if (!multiWrap) return;
    if (heading) heading.textContent = step.label || "";

    const saved   = answers[step.field] || [];
    const max     = step.maxSelect || 99;
    const counter = multiWrap.querySelector(".tagline.text-color-alternate");

    // Remove existing rows
    multiWrap.querySelectorAll(".selection_row").forEach(r => r.remove());

    const row = document.createElement("div");
    row.className = "selection_row";
    row.style.flexWrap = "wrap";

    step.options.forEach(opt => {
      const btn = document.createElement("a");
      btn.href = "#";
      btn.className = "option w-button" + (saved.includes(opt) ? " is-selected" : "");
      btn.textContent = opt;
      btn.addEventListener("click", e => {
        e.preventDefault();
        const cur = answers[step.field] || [];
        if (cur.includes(opt)) {
          answers[step.field] = cur.filter(o => o !== opt);
          btn.classList.remove("is-selected");
        } else if (cur.length < max) {
          answers[step.field] = [...cur, opt];
          btn.classList.add("is-selected");
        }
        if (counter) counter.textContent = `${(answers[step.field]||[]).length}/${max} selected`;
      });
      row.appendChild(btn);
    });

    multiWrap.appendChild(row);
    if (counter) counter.textContent = `${saved.length}/${max} selected`;
  }

  // comp_text-cards — uses text-short-cards_item (exact Webflow class)
  function populateTextCards(step) {
    const wrapper = document.querySelector("#comp_text-cards .text-short-cards_wrapper");
    if (!wrapper) return;

    const saved = answers[step.field] || [];
    const max   = step.maxSelect || 99;

    // Rebuild items to match step options
    wrapper.innerHTML = "";
    step.options.forEach(opt => {
      const item = document.createElement("div");
      item.className = "text-short-cards_item";
      item.innerHTML = `<div class="tagline">${opt}</div>`;
      item.style.cursor = "pointer";

      cardSelectedStyle(item, saved.includes(opt));

      item.addEventListener("click", () => {
        const cur = answers[step.field] || [];
        if (cur.includes(opt)) {
          answers[step.field] = cur.filter(o => o !== opt);
          cardSelectedStyle(item, false);
        } else if (cur.length < max) {
          answers[step.field] = [...cur, opt];
          cardSelectedStyle(item, true);
        }
      });
      wrapper.appendChild(item);
    });
  }

  // comp_story-cards — uses text-short-cards_item (exact Webflow class)
  function populateStoryCards(step) {
    const wrapper = document.querySelector("#comp_story-cards .text-short-cards_wrapper");
    if (!wrapper) return;

    const saved = answers[step.field] || [];
    const max   = step.maxSelect || 2;

    const storyData = [
      { num: "01", title: "Rebellion",        desc: "We exist to break what's broken. The status quo is the problem." },
      { num: "02", title: "Underdog",          desc: "We started with nothing. Our limitations became our edge." },
      { num: "03", title: "Community",         desc: "We didn't build a product. We built a place where people recognize each other." },
      { num: "04", title: "Overcoming",        desc: "We help people cross a threshold. There's a before and after us." },
      { num: "05", title: "Legacy",            desc: "We build to last. What we do today matters in 20 years." },
      { num: "06", title: "Silent Revolution", desc: "We changed everything without making noise. The work speaks, we don't." },
      { num: "07", title: "Empowerment",       desc: "We give others what they need to become more than they are." },
    ];

    // Update existing items in place — don't rebuild, just update content & wire clicks
    const items = wrapper.querySelectorAll(".text-short-cards_item");
    items.forEach((item, i) => {
      const data = storyData[i];
      if (!data) return;

      // Update content
      const headings = item.querySelectorAll(".story-card_heading .tagline");
      if (headings[0]) headings[0].textContent = data.num;
      if (headings[1]) headings[1].textContent = data.title;
      const desc = item.querySelector(".text-size-regular");
      if (desc) desc.innerHTML = data.desc;

      item.style.cursor = "pointer";
      cardSelectedStyle(item, saved.includes(data.title));

      // Replace onclick to avoid duplicates
      const newItem = item.cloneNode(true);
      item.parentNode.replaceChild(newItem, item);

      // Re-query heading after clone
      const newHeadings = newItem.querySelectorAll(".story-card_heading .tagline");
      if (newHeadings[0]) newHeadings[0].textContent = data.num;
      if (newHeadings[1]) newHeadings[1].textContent = data.title;
      const newDesc = newItem.querySelector(".text-size-regular");
      if (newDesc) newDesc.innerHTML = data.desc;
      newItem.style.cursor = "pointer";
      cardSelectedStyle(newItem, saved.includes(data.title));

      newItem.addEventListener("click", () => {
        const cur = answers[step.field] || [];
        if (cur.includes(data.title)) {
          answers[step.field] = cur.filter(t => t !== data.title);
          cardSelectedStyle(newItem, false);
        } else if (cur.length < max) {
          answers[step.field] = [...cur, data.title];
          cardSelectedStyle(newItem, true);
        }
      });
    });
  }

  // comp_slider-spectrum — rebuilds spectrum bars
  function populateSliders(step) {
    const spectrumWrapper = document.querySelector("#comp_slider-spectrum .spectrum_wrapper");
    if (!spectrumWrapper) return;

    spectrumWrapper.innerHTML = "";

    step.spectrums.forEach((spec, i) => {
      const savedVal = (answers["tone_sliders"] || {})[spec.id] || 50;

      const barEl = document.createElement("div");
      barEl.id = spec.id;
      barEl.className = "spectrum-bar_component";
      barEl.innerHTML = `
        <div class="spectrum-bar_concepts-wrapper">
          <div>${spec.left}</div>
          <div>${spec.right}</div>
        </div>
        <div style="position:relative;width:100%;height:20px;display:flex;align-items:center;margin-bottom:var(--_spacing---spacing--small);">
          <div style="position:absolute;left:0;right:0;height:2px;background:rgba(26,26,24,0.15);border-radius:2px;pointer-events:none;"></div>
          <div id="sfill-${i}" style="position:absolute;left:0;width:${savedVal}%;height:2px;background:var(--base-color-neutral--neutral-darker);border-radius:2px;pointer-events:none;"></div>
          <div id="sthumb-${i}" style="position:absolute;left:${savedVal}%;transform:translateX(-50%);width:14px;height:14px;border-radius:50%;background:var(--base-color-neutral--neutral-darker);border:2px solid var(--background-color--background-primary);box-shadow:0 1px 4px rgba(0,0,0,.15);pointer-events:none;"></div>
          <input type="range" min="0" max="100" value="${savedVal}" style="position:absolute;left:0;right:0;width:100%;opacity:0;cursor:pointer;height:100%;margin:0;">
        </div>`;

      spectrumWrapper.appendChild(barEl);

      const input = barEl.querySelector("input[type=range]");
      input.addEventListener("input", function() {
        const v = this.value;
        document.getElementById(`sfill-${i}`).style.width = v + "%";
        document.getElementById(`sthumb-${i}`).style.left = v + "%";
        if (!answers["tone_sliders"]) answers["tone_sliders"] = {};
        answers["tone_sliders"][spec.id] = parseInt(v);
      });
    });
  }

  // comp_multiselect tone choice — AI phrases, vertical list
  async function populateToneChoice() {
    const heading   = document.querySelector("#comp_multiselect .text-area_heading .tagline");
    const multiWrap = document.querySelector("#comp_multiselect .multi-select");
    if (!multiWrap) return;

    const counter = multiWrap.querySelector(".tagline.text-color-alternate");
    multiWrap.querySelectorAll(".selection_row").forEach(r => r.remove());

    if (heading) heading.textContent = "Generating options based on your tone settings...";

    const loadRow = document.createElement("div");
    loadRow.id = "tone-loading";
    loadRow.style.cssText = "padding:16px 0;color:var(--text-color--text-alternate);font-size:var(--_typography---text-size--tagline);letter-spacing:1px;";
    loadRow.textContent = "GENERATING TONE OPTIONS...";
    multiWrap.appendChild(loadRow);

    const phrases = await generateTonePhrases();

    document.getElementById("tone-loading")?.remove();
    if (heading) heading.textContent = "Select the one that feels most like your brand";
    if (counter) counter.textContent = "0/1 selected";

    const row = document.createElement("div");
    row.className = "selection_row";
    row.style.cssText = "flex-direction:column;align-items:stretch;gap:8px;";

    phrases.forEach(phrase => {
      const btn = document.createElement("a");
      btn.href = "#";
      btn.className = "option w-button";
      btn.style.cssText = "border-radius:var(--_system---border-radious--main);white-space:normal;text-align:left;height:auto;padding:12px 16px;width:100%;justify-content:flex-start;text-transform:none;letter-spacing:0;font-size:var(--_typography---text-size--regular);";
      btn.textContent = phrase;
      btn.addEventListener("click", e => {
        e.preventDefault();
        multiWrap.querySelectorAll(".option").forEach(b => b.classList.remove("is-selected"));
        btn.classList.add("is-selected");
        answers["tone_choice"] = phrase;
        if (counter) counter.textContent = "1/1 selected";
      });
      row.appendChild(btn);
    });

    multiWrap.appendChild(row);
  }

  async function generateTonePhrases() {
    const sliders   = answers["tone_sliders"] || {};
    const formal    = sliders["spectrum-bar_1"] || 50;
    const serious   = sliders["spectrum-bar_2"] || 50;
    const technical = sliders["spectrum-bar_3"] || 50;
    const brandName = answers["brand_name"] || "this brand";

    const fL = formal    < 33 ? "formal"    : formal    > 66 ? "casual"     : "balanced formal-casual";
    const sL = serious   < 33 ? "serious"   : serious   > 66 ? "playful"    : "balanced serious-playful";
    const tL = technical < 33 ? "technical" : technical > 66 ? "accessible" : "balanced technical-accessible";

    const prompt = `Generate exactly 5 different ways to say the same thing for brand "${brandName}". Tone settings: ${fL}, ${sL}, ${tL}. Core message: "We help you build something that lasts." Range from most formal/serious to most casual/playful. Each version 1-2 sentences max. Return ONLY a JSON array of 5 strings, no markdown: ["v1","v2","v3","v4","v5"]`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 400, messages: [{ role: "user", content: prompt }] }),
      });
      const data = await res.json();
      const text = data.content.filter(b => b.type === "text").map(b => b.text).join("").replace(/```json|```/g, "").trim();
      return JSON.parse(text);
    } catch {
      return [
        "We provide the strategic infrastructure necessary to achieve sustainable brand consistency.",
        "We give you the tools to build a brand that actually works — and keeps working.",
        "Your brand, built right. Built to last.",
        "We help you build something that sticks around — and means something when it does.",
        "Forget the chaos. Let's build a brand that works while you sleep.",
      ];
    }
  }

  function populateComparison(step) {
    const taA = document.querySelector("#Personality-We-are");
    const taB = document.querySelector("#Personality-We-are-not");
    if (taA) taA.value = answers[step.field]  || "";
    if (taB) taB.value = answers[step.fieldB] || "";
  }

  function populateInsight() {
    const insights = [
      (answers["brand_references"] || []).length > 0
        ? `Your brand references — ${(answers["brand_references"]||[]).slice(0,3).join(", ")} — signal an audience that values craft and intentionality over noise. That's a positioning opportunity, not just an aesthetic choice.`
        : "You haven't selected brand references yet. This makes it harder to triangulate your audience's cultural world.",
      answers["differentiator"] && (answers["audience_values"]||[]).length > 0
        ? `There's a productive tension between your differentiator and what your audience values most (${answers["audience_values"][0]}). Make sure your messaging resolves that tension — or it becomes a gap competitors can exploit.`
        : "Your differentiator and audience values haven't fully emerged yet. The clearest brands know exactly who they're NOT for.",
      (answers["story_archetype"]||[]).length > 0
        ? `A "${answers["story_archetype"][0]}" narrative works best when it's specific and earned — not claimed. Your origin story will be the proof. Make it concrete.`
        : "Your narrative archetype is still undefined. The most memorable brands don't just have a product — they have a story with stakes.",
    ];
    ["market-insight_1","market-insight_2","market-insight_3"].forEach((id, i) => {
      const card = document.getElementById(id);
      if (!card) return;
      const labelEl = card.querySelector(".tagline");
      const textEl  = card.querySelector(".text-size-medium");
      if (labelEl) labelEl.textContent = ["Pattern","Tension","Opportunity"][i];
      if (textEl)  textEl.textContent  = insights[i] || "—";
    });
  }

  // ── SAVE ───────────────────────────────────────────
  function saveCurrentStep() {
    const step = steps[currentStep];
    switch (step.component) {
      case "comp_short-text": {
        const ta = document.querySelector("#comp_short-text textarea");
        if (ta) answers[step.field] = ta.value; break;
      }
      case "comp_long-text": {
        const ta = document.querySelector("#comp_long-text textarea");
        if (ta) answers[step.field] = ta.value; break;
      }
      case "comp_long-text-ai": {
        const ta = document.querySelector("#comp_long-text-ai textarea");
        if (ta) answers[step.field] = ta.value; break;
      }
      case "comp_dropdown": {
        const sel = document.querySelector("#comp_dropdown select");
        if (sel) answers[step.field] = sel.value; break;
      }
      case "comp_comparison": {
        const taA = document.querySelector("#Personality-We-are");
        const taB = document.querySelector("#Personality-We-are-not");
        if (taA) answers[step.field]  = taA.value;
        if (taB) answers[step.fieldB] = taB.value; break;
      }
    }
  }

  // ── RENDER ─────────────────────────────────────────
  async function renderStep(index) {
    const step = steps[index];
    updateProgress(index);
    updateHeader(step);
    hideAllComponents();
    showComponent(step.component);

    switch (step.component) {
      case "comp_short-text":      populateShortText(step);    break;
      case "comp_long-text":       populateLongText(step);     break;
      case "comp_long-text-ai":    populateLongTextAI(step);   break;
      case "comp_dropdown":        populateDropdown(step);     break;
      case "comp_text-cards":      populateTextCards(step);    break;
      case "comp_story-cards":     populateStoryCards(step);   break;
      case "comp_multiselect":
        if (step._isToneChoice) await populateToneChoice();
        else populateMultiselect(step);
        break;
      case "comp_slider-spectrum": populateSliders(step);      break;
      case "comp_comparison":      populateComparison(step);   break;
      case "comp_market-insight":  populateInsight();          break;
    }

    if ($backBtn) $backBtn.style.visibility = index === 0 ? "hidden" : "visible";
    if ($nextBtn) {
      const lbl = $nextBtn.querySelector("div:first-child");
      if (lbl) lbl.textContent = index === TOTAL_STEPS - 1 ? "Finish" : "Next";
    }
  }

  // ── NAV ────────────────────────────────────────────
  async function goNext() {
    saveCurrentStep();
    if (currentStep < TOTAL_STEPS - 1) {
      currentStep++;
      await renderStep(currentStep);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      console.log("Survey complete", answers);
      alert("Survey complete! Brand book generation coming soon.");
    }
  }

  function goBack() {
    saveCurrentStep();
    if (currentStep > 0) { currentStep--; renderStep(currentStep); window.scrollTo({ top: 0, behavior: "smooth" }); }
  }

  if ($backBtn) $backBtn.addEventListener("click", e => { e.preventDefault(); goBack(); });
  if ($nextBtn) $nextBtn.addEventListener("click", e => { e.preventDefault(); goNext(); });

  document.querySelectorAll(".component_wrapper .button-group_footer").forEach(el => { el.style.display = "none"; });

  // ── CSS ────────────────────────────────────────────
  const style = document.createElement("style");
  style.textContent = `
    .option.is-selected {
      background-color: var(--base-color-neutral--neutral-darker, #1a1a18) !important;
      color: var(--background-color--background-primary, #f5f3ee) !important;
      border-color: var(--base-color-neutral--neutral-darker, #1a1a18) !important;
    }
    .selection_row { flex-wrap: wrap; }
    input[type=range]::-webkit-slider-thumb { -webkit-appearance:none; width:0; height:0; }
    input[type=range]::-moz-range-thumb { width:0; height:0; border:none; background:none; }
  `;
  document.head.appendChild(style);

  renderStep(0);

})();
