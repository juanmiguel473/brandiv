/* ============================================================
   BRANDIV — Discovery Survey Engine
   Integrates on top of Webflow-exported HTML
   ============================================================ */

(function () {

  // ──────────────────────────────────────────────
  // 1. SURVEY DEFINITION
  // ──────────────────────────────────────────────

  const TOTAL_STEPS = 18;

  const steps = [
    // ── BLOQUE 0: Contexto ──
    {
      id: 1,
      block: "Block 1 of 5 — Context",
      title: "Let's start with the basics.",
      description: "This helps us tailor every insight to your brand's real world.",
      component: "comp_short-text",
      field: "brand_name",
      label: "What's your brand name?",
      placeholder: "e.g. Brandiv",
    },
    {
      id: 2,
      block: "Block 1 of 5 — Context",
      title: "What space does your brand operate in?",
      description: "Don't overthink it. A rough category is enough.",
      component: "comp_dropdown",
      field: "industry",
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

    // ── BLOQUE 1: El problema ──
    {
      id: 3,
      block: "Block 2 of 5 — The Problem",
      title: "In one sentence — what does your brand do?",
      description: "No buzzwords. No mission statement. Just what it actually does.",
      component: "comp_short-text",
      field: "what_you_do",
      label: "What does your brand do?",
      placeholder: "e.g. We help independent designers build brand books without code.",
    },
    {
      id: 4,
      block: "Block 2 of 5 — The Problem",
      title: "What problem are you solving, and for whom?",
      description: "Be specific. A good answer names a real frustration a real person has.",
      component: "comp_long-text",
      field: "problem",
      label: "Describe the problem",
      placeholder: "e.g. Designers spend hours building brand books in Notion or PDFs that clients ignore. We fix that.",
    },
    {
      id: 5,
      block: "Block 2 of 5 — The Problem",
      title: "Why isn't this problem well solved today?",
      description: "What do existing options get wrong? What do they ignore?",
      component: "comp_long-text-ai",
      field: "problem_gap",
      label: "Why isn't this problem well solved today?",
      placeholder: "e.g. Most tools are either too complex for small teams or too generic to feel like a real brand document.",
    },

    // ── BLOQUE 2: La audiencia ──
    {
      id: 6,
      block: "Block 3 of 5 — Your Audience",
      title: "Where does your brand operate?",
      description: "Scale and geography shape how a brand speaks.",
      component: "comp_dropdown",
      field: "geo_scope",
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
      id: 7,
      block: "Block 3 of 5 — Your Audience",
      title: "When does someone reach for your brand?",
      description: "Pick the moments that feel most true. You can select more than one.",
      component: "comp_multiselect",
      field: "consumption_moment",
      label: "Select all that apply",
      maxSelect: 3,
      options: [
        "At work, solving a problem",
        "During a moment of change",
        "As a daily ritual",
        "When making an important decision",
        "After something failed",
        "When looking for inspiration",
        "To signal identity or taste",
        "When building something new",
      ],
    },
    {
      id: 8,
      block: "Block 3 of 5 — Your Audience",
      title: "Which brands would your audience have in their world?",
      description: "Not competitors — brands that share a cultural space with yours.",
      component: "comp_multiselect",
      field: "brand_references",
      label: "Select all that feel right",
      maxSelect: 6,
      options: [
        "Apple", "Muji", "Notion", "Moleskine",
        "Patagonia", "Nike", "Beats", "Teenage Engineering",
        "Airbnb", "Oatly", "The Economist", "Rolex",
        "Arc Browser", "Figma", "Stripe", "Linear",
      ],
    },
    {
      id: 9,
      block: "Block 3 of 5 — Your Audience",
      title: "What does your audience value most?",
      description: "What would make them choose you — even if you cost more?",
      component: "comp_multiselect",
      field: "audience_values",
      label: "Pick up to 3",
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

    // ── BLOQUE 3: La diferencia ──
    {
      id: 10,
      block: "Block 4 of 5 — Your Difference",
      title: "Why would someone choose you over the alternatives?",
      description: "Not what you wish were true — what's actually true.",
      component: "comp_long-text",
      field: "differentiator",
      label: "Your honest differentiator",
      placeholder: "e.g. We're the only tool that lets a designer hand over a living brand book, not a PDF that gets forgotten.",
    },
    {
      id: 11,
      block: "Block 4 of 5 — Your Difference",
      title: "What do your competitors get wrong or ignore?",
      description: "Where is the gap in the market you're walking into?",
      component: "comp_long-text-ai",
      field: "competitor_gap",
      label: "The gap you're filling",
      placeholder: "e.g. Everyone builds document tools. Nobody builds brand infrastructure.",
    },
    {
      id: 12,
      block: "Block 4 of 5 — Your Difference",
      title: "How does your brand show up vs. how it doesn't?",
      description: "This helps define your edges — the lines you don't cross.",
      component: "comp_comparison",
      field: "we_are",
      fieldB: "we_are_not",
    },

    // ── BLOQUE 4: El tono ──
    {
      id: 13,
      block: "Block 5 of 5 — Voice & Story",
      title: "Where does your brand sit on these spectrums?",
      description: "Move each dial to where your brand naturally lives.",
      component: "comp_slider-spectrum",
      field: "tone_sliders",
      spectrums: [
        { id: "spectrum-bar_1", left: "Formal", right: "Casual" },
        { id: "spectrum-bar_2", left: "Serious", right: "Playful" },
        { id: "spectrum-bar_3", left: "Technical", right: "Accessible" },
      ],
    },
    {
      id: 14,
      block: "Block 5 of 5 — Voice & Story",
      title: "Which of these sounds most like your brand?",
      description: "Same idea, five different voices. Pick the one that feels right.",
      component: "comp_multiselect",
      field: "tone_choice",
      maxSelect: 1,
      options: [], // populated dynamically after step 13
      _isToneChoice: true,
    },

    // ── BLOQUE 5: La historia ──
    {
      id: 15,
      block: "Block 5 of 5 — Voice & Story",
      title: "What kind of story does your brand tell?",
      description: "Every brand is a narrative. Pick the one that's yours.",
      component: "comp_story-cards",
      field: "story_archetype",
      maxSelect: 2,
    },
    {
      id: 16,
      block: "Block 5 of 5 — Voice & Story",
      title: "What was the moment — or the reason — this brand started?",
      description: "Origin stories are rarely dramatic. But they're always specific.",
      component: "comp_long-text-ai",
      field: "origin",
      label: "The origin",
      placeholder: "e.g. I built this after watching a client's brand manual get ignored for the third time in a row.",
    },
    {
      id: 17,
      block: "Block 5 of 5 — Voice & Story",
      title: "How do you want to be remembered in 5 years?",
      description: "Not your revenue goal. What mark do you want to leave?",
      component: "comp_long-text",
      field: "legacy",
      label: "Your legacy",
      placeholder: "e.g. The tool that made brand consistency accessible to every small team.",
    },
    {
      id: 18,
      block: "Block 5 of 5 — Voice & Story",
      title: "Here's what we found.",
      description: "Based on your answers, here are three things worth paying attention to.",
      component: "comp_market-insight",
      field: null,
      _isInsight: true,
    },
  ];

  // ──────────────────────────────────────────────
  // 2. STATE
  // ──────────────────────────────────────────────

  let currentStep = 0;
  const answers = {};
  const sliderValues = { "spectrum-bar_1": 50, "spectrum-bar_2": 50, "spectrum-bar_3": 50 };

  // ──────────────────────────────────────────────
  // 3. DOM REFERENCES
  // ──────────────────────────────────────────────

  const allComponents = [
    "comp_market-insight",
    "comp_short-text",
    "comp_long-text",
    "comp_dropdown",
    "comp_slider-spectrum",
    "comp_multiselect",
    "comp_comparison",
    "comp_story-cards",
    "comp_long-text-ai",
  ];

  const $progressBar = document.querySelector(".stat3_progress-bar");
  const $progressLabel = document.querySelector("#progres-bar .tagline");
  const $blockTag = document.querySelector("#tag .tagline");
  const $title = document.querySelector(".heading-style-h5");
  const $description = document.querySelector(".header-main .text-size-regular");

  // Main nav buttons (outside component_wrapper)
  const $backBtn = document.querySelector(".section_content > .button-group_footer .button.is-text");
  const $nextBtn = document.querySelector(".section_content > .button-group_footer .button.is-secondary-icon");

  // ──────────────────────────────────────────────
  // 4. HELPERS
  // ──────────────────────────────────────────────

  function hideAllComponents() {
    allComponents.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.classList.add("hide");
    });
  }

  function showComponent(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove("hide");
  }

  function updateProgress(stepIndex) {
    const pct = ((stepIndex + 1) / TOTAL_STEPS) * 100;
    if ($progressBar) $progressBar.style.width = pct + "%";
    if ($progressLabel) $progressLabel.textContent = `Step ${stepIndex + 1} of ${TOTAL_STEPS}`;
  }

  function updateHeader(step) {
    if ($blockTag) $blockTag.textContent = step.block;
    if ($title) $title.textContent = step.title;
    if ($description) $description.textContent = step.description;
  }

  // ──────────────────────────────────────────────
  // 5. COMPONENT POPULATORS
  // ──────────────────────────────────────────────

  function populateShortText(step) {
    const label = document.querySelector("#comp_short-text .text-area_heading .tagline");
    const textarea = document.querySelector("#comp_short-text textarea");
    if (label) label.textContent = step.label || "";
    if (textarea) {
      textarea.placeholder = step.placeholder || "";
      textarea.value = answers[step.field] || "";
    }
    // hide inner nav buttons — we use the outer ones
    const inner = document.querySelector("#comp_short-text .button-group_footer");
    if (inner) inner.style.display = "none";
  }

  function populateLongText(step) {
    const label = document.querySelector("#comp_long-text .text-area_heading .tagline");
    const textarea = document.querySelector("#comp_long-text textarea");
    if (label) label.textContent = step.label || "";
    if (textarea) {
      textarea.placeholder = step.placeholder || "";
      textarea.value = answers[step.field] || "";
    }
    const inner = document.querySelector("#comp_long-text .button-group_footer");
    if (inner) inner.style.display = "none";
  }

  function populateLongTextAI(step) {
    const label = document.querySelector("#comp_long-text-ai .tagline");
    const textarea = document.querySelector("#comp_long-text-ai textarea");
    if (label) label.textContent = step.label || "";
    if (textarea) {
      textarea.placeholder = step.placeholder || "";
      textarea.value = answers[step.field] || "";
    }
  }

  function populateDropdown(step) {
    const label = document.querySelector("#comp_dropdown .text-area_heading .tagline");
    const select = document.querySelector("#comp_dropdown select");
    if (label) label.textContent = step.label || "";
    if (select && step.options) {
      select.innerHTML = step.options
        .map((o) => `<option value="${o.value}">${o.label}</option>`)
        .join("");
      select.value = answers[step.field] || "";
    }
    const inner = document.querySelector("#comp_dropdown .button-group_footer");
    if (inner) inner.style.display = "none";
  }

  function populateMultiselect(step) {
    const label = document.querySelector("#comp_multiselect .text-area_heading .tagline");
    if (label) label.textContent = step.label || "";

    const container = document.querySelector("#comp_multiselect .multi-select");
    if (!container) return;

    const saved = answers[step.field] || [];
    const max = step.maxSelect || 99;

    // Rebuild chips
    const rows = container.querySelectorAll(".selection_row");
    rows.forEach((r) => r.remove());

    const counter = container.querySelector(".tagline.text-color-alternate");

    const row = document.createElement("div");
    row.className = "selection_row";
    step.options.forEach((opt) => {
      const btn = document.createElement("a");
      btn.href = "#";
      btn.className = "option w-button" + (saved.includes(opt) ? " is-selected" : "");
      btn.textContent = opt;
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const current = answers[step.field] || [];
        if (current.includes(opt)) {
          answers[step.field] = current.filter((o) => o !== opt);
          btn.classList.remove("is-selected");
        } else if (current.length < max) {
          answers[step.field] = [...current, opt];
          btn.classList.add("is-selected");
        }
        const count = (answers[step.field] || []).length;
        if (counter) counter.textContent = `${count}/${max} selected`;
      });
      row.appendChild(btn);
    });
    container.appendChild(row);

    const count = saved.length;
    if (counter) counter.textContent = `${count}/${max} selected`;
  }

  function populateStoryCards(step) {
    const cards = document.querySelectorAll("#comp_story-cards .story-card_item");
    const saved = answers[step.field] || [];
    const max = step.maxSelect || 2;

    const storyData = [
      { num: "01", title: "Rebellion", desc: "We exist to break what's broken. The status quo is the problem." },
      { num: "02", title: "Underdog", desc: "We started with nothing. Our limitations became our edge." },
      { num: "03", title: "Community", desc: "We didn't build a product. We built a place where people recognize each other." },
      { num: "04", title: "Overcoming", desc: "We help people cross a threshold. There's a before and after us." },
      { num: "05", title: "Legacy", desc: "We build to last. What we do today matters in 20 years." },
      { num: "06", title: "Silent Revolution", desc: "We changed everything without making noise. The work speaks, we don't." },
      { num: "07", title: "Empowerment", desc: "We give others what they need to become more than they are." },
    ];

    cards.forEach((card, i) => {
      const data = storyData[i];
      if (!data) return;

      // Update content
      const headings = card.querySelectorAll(".story-card_heading .tagline");
      if (headings[0]) headings[0].textContent = data.num;
      if (headings[1]) headings[1].textContent = data.title;
      const desc = card.querySelector(".text-size-regular");
      if (desc) desc.textContent = data.desc;

      // Selection state
      card.classList.toggle("is-selected", saved.includes(data.title));

      card.onclick = (e) => {
        e.preventDefault();
        const current = answers[step.field] || [];
        if (current.includes(data.title)) {
          answers[step.field] = current.filter((t) => t !== data.title);
          card.classList.remove("is-selected");
        } else if (current.length < max) {
          answers[step.field] = [...current, data.title];
          card.classList.add("is-selected");
        }
      };
    });
  }

  function populateSliders(step) {
    const label = document.querySelector("#comp_slider-spectrum .text-area_heading .tagline");
    if (label) label.textContent = step.description || "";

    step.spectrums.forEach((spec) => {
      const bar = document.getElementById(spec.id);
      if (!bar) return;

      const labels = bar.querySelectorAll(".spectrum-bar_concepts-wrapper div");
      if (labels[0]) labels[0].textContent = spec.left;
      if (labels[1]) labels[1].textContent = spec.right;

      const dial = bar.querySelector(".dial_progress");
      if (!dial) return;

      const saved = (answers["tone_sliders"] || {})[spec.id] || 50;
      sliderValues[spec.id] = saved;
      dial.style.left = saved + "%";

      // Make draggable
      makeDraggable(dial, spec.id, bar);
    });
  }

  function makeDraggable(dial, barId, container) {
    // Remove old listeners by cloning
    const newDial = dial.cloneNode(true);
    dial.parentNode.replaceChild(newDial, dial);

    let dragging = false;

    const getPercent = (e, track) => {
      const rect = track.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      let pct = ((clientX - rect.left) / rect.width) * 100;
      return Math.min(100, Math.max(0, Math.round(pct)));
    };

    const track = container.querySelector(".progress-wrapper");

    const onMove = (e) => {
      if (!dragging) return;
      const pct = getPercent(e, track);
      newDial.style.left = pct + "%";
      sliderValues[barId] = pct;
      if (!answers["tone_sliders"]) answers["tone_sliders"] = {};
      answers["tone_sliders"][barId] = pct;
    };

    newDial.addEventListener("mousedown", () => { dragging = true; });
    newDial.addEventListener("touchstart", () => { dragging = true; }, { passive: true });
    document.addEventListener("mousemove", onMove);
    document.addEventListener("touchmove", onMove, { passive: true });
    document.addEventListener("mouseup", () => { dragging = false; });
    document.addEventListener("touchend", () => { dragging = false; });

    // Also allow click on track
    track.addEventListener("click", (e) => {
      if (e.target === newDial) return;
      const pct = getPercent(e, track);
      newDial.style.left = pct + "%";
      sliderValues[barId] = pct;
      if (!answers["tone_sliders"]) answers["tone_sliders"] = {};
      answers["tone_sliders"][barId] = pct;
    });
  }

  function populateComparison(step) {
    const taA = document.querySelector("#Personality-We-are");
    const taB = document.querySelector("#Personality-We-are-not");
    if (taA) taA.value = answers[step.field] || "";
    if (taB) taB.value = answers[step.fieldB] || "";
  }

  function populateInsight() {
    // Generate insights from answers
    const insights = generateInsights();
    const cards = ["market-insight_1", "market-insight_2", "market-insight_3"];
    const labels = ["Pattern", "Tension", "Opportunity"];

    cards.forEach((id, i) => {
      const card = document.getElementById(id);
      if (!card) return;
      const labelEl = card.querySelector(".tagline");
      const textEl = card.querySelector(".text-size-medium");
      if (labelEl) labelEl.textContent = labels[i];
      if (textEl) textEl.textContent = insights[i] || "—";
    });
  }

  function generateInsights() {
    const ins = [];

    // Insight 1: Pattern from brand references
    const refs = answers["brand_references"] || [];
    if (refs.length > 0) {
      ins.push(`Your brand references — ${refs.slice(0, 3).join(", ")} — signal an audience that values craft and intentionality over noise. That's a positioning opportunity, not just an aesthetic choice.`);
    } else {
      ins.push("You haven't selected brand references yet. This makes it harder to triangulate your audience's cultural world.");
    }

    // Insight 2: Tension between values and differentiator
    const diff = answers["differentiator"] || "";
    const vals = answers["audience_values"] || [];
    if (diff && vals.length > 0) {
      ins.push(`There's a productive tension between your differentiator and what your audience values most (${vals[0]}). Make sure your messaging resolves that tension explicitly — or it becomes a gap competitors can exploit.`);
    } else {
      ins.push("Your differentiator and audience values haven't fully emerged yet. The clearest brands know exactly who they're NOT for.");
    }

    // Insight 3: Story archetype opportunity
    const story = answers["story_archetype"] || [];
    if (story.length > 0) {
      ins.push(`A "${story[0]}" narrative works best when it's specific and earned — not claimed. Your origin story will be the proof. Make it concrete.`);
    } else {
      ins.push("Your narrative archetype is still undefined. The most memorable brands don't just have a product — they have a story with stakes.");
    }

    return ins;
  }

  // ──────────────────────────────────────────────
  // 6. SAVE CURRENT STEP ANSWERS
  // ──────────────────────────────────────────────

  function saveCurrentStep() {
    const step = steps[currentStep];
    const comp = step.component;

    if (comp === "comp_short-text") {
      const ta = document.querySelector("#comp_short-text textarea");
      if (ta) answers[step.field] = ta.value;
    } else if (comp === "comp_long-text") {
      const ta = document.querySelector("#comp_long-text textarea");
      if (ta) answers[step.field] = ta.value;
    } else if (comp === "comp_long-text-ai") {
      const ta = document.querySelector("#comp_long-text-ai textarea");
      if (ta) answers[step.field] = ta.value;
    } else if (comp === "comp_dropdown") {
      const sel = document.querySelector("#comp_dropdown select");
      if (sel) answers[step.field] = sel.value;
    } else if (comp === "comp_comparison") {
      const taA = document.querySelector("#Personality-We-are");
      const taB = document.querySelector("#Personality-We-are-not");
      if (taA) answers[step.field] = taA.value;
      if (taB) answers[step.fieldB] = taB.value;
    }
    // multiselect, sliders, story-cards update answers on interaction
  }

  // ──────────────────────────────────────────────
  // 7. RENDER STEP
  // ──────────────────────────────────────────────

  function renderStep(index) {
    const step = steps[index];

    updateProgress(index);
    updateHeader(step);
    hideAllComponents();
    showComponent(step.component);

    // Populate based on component type
    switch (step.component) {
      case "comp_short-text":     populateShortText(step); break;
      case "comp_long-text":      populateLongText(step); break;
      case "comp_long-text-ai":   populateLongTextAI(step); break;
      case "comp_dropdown":       populateDropdown(step); break;
      case "comp_multiselect":    populateMultiselect(step); break;
      case "comp_story-cards":    populateStoryCards(step); break;
      case "comp_slider-spectrum": populateSliders(step); break;
      case "comp_comparison":     populateComparison(step); break;
      case "comp_market-insight": populateInsight(); break;
    }

    // Back button visibility
    if ($backBtn) {
      $backBtn.style.visibility = index === 0 ? "hidden" : "visible";
    }

    // Next button label on last step
    if ($nextBtn) {
      const label = $nextBtn.querySelector("div:first-child");
      if (label) label.textContent = index === TOTAL_STEPS - 1 ? "Finish" : "Next";
    }
  }

  // ──────────────────────────────────────────────
  // 8. NAVIGATION
  // ──────────────────────────────────────────────

  function goNext() {
    saveCurrentStep();
    if (currentStep < TOTAL_STEPS - 1) {
      currentStep++;
      renderStep(currentStep);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Last step — could trigger export/save
      console.log("Survey complete", answers);
      alert("Survey complete! Brand book generation coming soon.");
    }
  }

  function goBack() {
    saveCurrentStep();
    if (currentStep > 0) {
      currentStep--;
      renderStep(currentStep);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // ──────────────────────────────────────────────
  // 9. BIND NAVIGATION BUTTONS
  // ──────────────────────────────────────────────

  if ($backBtn) {
    $backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      goBack();
    });
  }

  if ($nextBtn) {
    $nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      goNext();
    });
  }

  // Also disable inner next/back buttons inside components
  document.querySelectorAll(".component_wrapper .button-group_footer").forEach((el) => {
    el.style.display = "none";
  });

  // ──────────────────────────────────────────────
  // 10. SELECTED STATE CSS (injected)
  // ──────────────────────────────────────────────

  const style = document.createElement("style");
  style.textContent = `
    .option.is-selected {
      background-color: var(--color-text-primary, #fff);
      color: var(--color-background-primary, #000);
    }
    .story-card_item {
      cursor: pointer;
      transition: border-color 0.15s;
    }
    .story-card_item.is-selected {
      border-color: var(--color-text-primary, #fff);
      background: rgba(255,255,255,0.05);
    }
    .dial_progress {
      position: relative;
      cursor: grab;
      user-select: none;
    }
    .dial_progress:active {
      cursor: grabbing;
    }
    .progress-wrapper {
      position: relative;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  // ──────────────────────────────────────────────
  // 11. INIT
  // ──────────────────────────────────────────────

  renderStep(0);

})();
