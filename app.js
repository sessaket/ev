(function () {
  const deckConfig = window.DECK_CONFIG || {};
  const slides = Array.isArray(window.SLIDES_DATA) ? window.SLIDES_DATA : [];

  const appEl = document.getElementById("deckApp");
  const menuBtnEl = document.getElementById("menuBtn");
  const sidebarOverlayEl = document.getElementById("sidebarOverlay");
  const slidesNavEl = document.getElementById("slidesNav");
  const slideSearchInputEl = document.getElementById("slideSearchInput");
  const slideSearchLabelEl = document.getElementById("slideSearchLabel");

  const brandLineEl = document.getElementById("brandLine");
  const deckTitleEl = document.getElementById("deckTitle");
  const sectionLabelEl = document.getElementById("sectionLabel");

  const slideCounterEl = document.getElementById("slideCounter");
  const prevBtnEl = document.getElementById("prevBtn");
  const nextBtnEl = document.getElementById("nextBtn");
  const fullscreenBtnEl = document.getElementById("fullscreenBtn");
  const langBtnEls = Array.from(document.querySelectorAll(".lang-btn"));

  const canvasWrapEl = document.getElementById("canvasWrap");
  const slideCanvasEl = document.getElementById("slideCanvas");
  const slideRegionEl = document.getElementById("slideRegion");
  const slideTitleEl = document.getElementById("slideTitle");
  const slideCategoryEl = document.getElementById("slideCategory");
  const slideMainGridEl = document.getElementById("slideMainGrid");
  const insightsGridEl = document.getElementById("insightsGrid");
  const ctaRowEl = document.getElementById("ctaRow");
  const compareCardEl = document.getElementById("compareCard");
  const carLogoChipEl = document.getElementById("carLogoChip");
  const carLogoImageEl = document.getElementById("carLogoImage");
  const heroImageEl = document.getElementById("heroImage");
  const heroOverlayTitleEl = document.getElementById("heroOverlayTitle");

  const detailsHeadingEl = document.getElementById("detailsHeading");
  const detailsRowsEl = document.getElementById("detailsRows");
  const strengthsHeadingEl = document.getElementById("strengthsHeading");
  const limitsHeadingEl = document.getElementById("limitsHeading");
  const whyHeadingEl = document.getElementById("whyHeading");
  const strengthsListEl = document.getElementById("strengthsList");
  const limitsListEl = document.getElementById("limitsList");
  const whyListEl = document.getElementById("whyList");
  const compareHeadingEl = document.getElementById("compareHeading");
  const compareHeadRowEl = document.getElementById("compareHeadRow");
  const compareTableBodyEl = document.getElementById("compareTableBody");

  const officialBtnEl = document.getElementById("officialBtn");
  const appBtnEl = document.getElementById("appBtn");
  const sourcesPanelEl = document.getElementById("sourcesPanel");
  const sourcesHeadingEl = document.getElementById("sourcesHeading");
  const sourcesGridEl = document.getElementById("sourcesGrid");

  const state = {
    lang: (deckConfig.defaultLang === "fr" ? "fr" : "en"),
    currentIndex: 0,
    slideFilter: ""
  };

  function safeUi(lang) {
    const ui = deckConfig.ui || {};
    return ui[lang] || ui.en || {};
  }

  function getUiText(key) {
    const ui = safeUi(state.lang);
    return ui[key] || "";
  }

  function getUiLabel(key) {
    const ui = safeUi(state.lang);
    const labels = ui.labels || {};
    return labels[key] || key;
  }

  function isLangMap(value) {
    if (!value || Array.isArray(value) || typeof value !== "object") {
      return false;
    }
    return Object.prototype.hasOwnProperty.call(value, "en")
      || Object.prototype.hasOwnProperty.call(value, "fr");
  }

  function localText(value) {
    if (isLangMap(value)) {
      return String(value[state.lang] || value.en || "");
    }
    if (value && typeof value === "object") {
      if (isLangMap(value.label)) {
        return String(value.label[state.lang] || value.label.en || "");
      }
      if (typeof value.label === "string") {
        return value.label;
      }
      if (isLangMap(value.value)) {
        return String(value.value[state.lang] || value.value.en || "");
      }
      if (typeof value.value === "string") {
        return value.value;
      }
      if (typeof value.text === "string") {
        return value.text;
      }
      return "";
    }
    if (value === null || value === undefined) {
      return "";
    }
    return String(value);
  }

  function clampIndex(index) {
    if (!slides.length) {
      return 0;
    }
    if (index < 0) {
      return 0;
    }
    if (index > slides.length - 1) {
      return slides.length - 1;
    }
    return index;
  }

  function parseHashIndex() {
    const match = window.location.hash.match(/^#slide-(\d+)$/i);
    if (!match) {
      return 0;
    }
    const index = Number.parseInt(match[1], 10) - 1;
    return Number.isNaN(index) ? 0 : clampIndex(index);
  }

  function currentSlide() {
    return slides[state.currentIndex] || null;
  }

  function isComparisonSlide(slide) {
    return Boolean(slide && slide.tableSlide);
  }

  function slideI18n(slide) {
    if (!slide || !slide.translations) {
      return {};
    }
    return slide.translations[state.lang] || slide.translations.en || {};
  }

  function modelName(slide) {
    const i18n = slideI18n(slide);
    return i18n.modelName || slide.modelName || "";
  }

  function sidebarTitle(slide) {
    const i18n = slideI18n(slide);
    return i18n.sidebarTitle || slide.sidebarTitle || modelName(slide);
  }

  function slideSubtitle(slide) {
    const i18n = slideI18n(slide);
    return i18n.subtitle || slide.subtitle || "";
  }

  function heroOverlayText(slide) {
    const i18n = slideI18n(slide);
    return i18n.heroOverlay || slide.heroOverlay || modelName(slide);
  }

  function regionName(slide) {
    const i18n = slideI18n(slide);
    return i18n.region || slide.region || "";
  }

  function localizedList(slide, key) {
    const i18n = slideI18n(slide);
    if (Array.isArray(i18n[key]) && i18n[key].length) {
      return i18n[key];
    }
    return Array.isArray(slide[key]) ? slide[key] : [];
  }

  function localizedDetailRows(slide) {
    const i18n = slideI18n(slide);
    if (Array.isArray(i18n.detailRows) && i18n.detailRows.length) {
      return i18n.detailRows;
    }
    if (Array.isArray(slide.detailRows) && slide.detailRows.length) {
      return slide.detailRows;
    }
    return [];
  }

  function localizedSources(slide) {
    const i18n = slideI18n(slide);
    if (Array.isArray(i18n.sources) && i18n.sources.length) {
      return i18n.sources;
    }
    if (Array.isArray(slide.sources) && slide.sources.length) {
      return slide.sources;
    }
    return [];
  }

  function localizedCtaLabels(slide) {
    const i18n = slideI18n(slide);
    if (i18n.cta && typeof i18n.cta === "object") {
      return i18n.cta;
    }
    if (slide.cta && typeof slide.cta === "object") {
      return slide.cta;
    }
    return null;
  }

  function categoryClassName(category) {
    const raw = String(category || "").toLowerCase();
    if (raw === "ev") {
      return "tag-category-ev";
    }
    if (raw === "hybrid") {
      return "tag-category-hybrid";
    }
    if (raw === "phev") {
      return "tag-category-phev";
    }
    return "";
  }

  function categoryLabel(category) {
    const ui = safeUi(state.lang);
    const map = ui.categoryMap || {};
    return map[category] || category || "-";
  }

  function availabilityText(slide) {
    const i18n = slideI18n(slide);
    if (i18n.details && i18n.details.availability) {
      return i18n.details.availability;
    }
    const ui = safeUi(state.lang);
    const map = ui.availabilityMap || {};
    const details = slide.details || {};
    return map[details.availability] || details.availability || "-";
  }

  function chargingText(slide) {
    const i18n = slideI18n(slide);
    if (i18n.details && i18n.details.charging) {
      return i18n.details.charging;
    }

    const details = slide.details || {};
    const charging = details.charging || {};
    const parts = [];
    if (charging.ac) {
      parts.push("AC " + charging.ac);
    }
    if (charging.dc) {
      parts.push("DC " + charging.dc);
    }
    return parts.join(" | ") || "-";
  }

  function firstKwValue(input) {
    const match = String(input || "").match(/([\d.]+)\s*kW/i);
    return match ? match[1] + " kW" : "";
  }

  function chargePowerText(slide) {
    const details = (slide && slide.details) ? slide.details : null;
    const charging = details ? details.charging : null;
    if (!charging) {
      return "N/A";
    }
    const acKw = firstKwValue(charging.ac);
    const dcKw = firstKwValue(charging.dc);

    if (!acKw && !dcKw) {
      return "N/A";
    }
    if (acKw && dcKw) {
      return "AC " + acKw + " / DC " + dcKw;
    }
    if (acKw) {
      return "AC " + acKw;
    }
    return "DC " + dcKw;
  }

  function powerText(slide) {
    return (slide && slide.details && slide.details.power) ? slide.details.power : "-";
  }

  function priceText(slide) {
    const i18n = slideI18n(slide);
    if (i18n.details && i18n.details.price_mad) {
      return i18n.details.price_mad;
    }
    const details = slide.details || {};
    return details.price_mad || "-";
  }

  function fuelText(slide) {
    const details = slide.details || {};
    const value = details.fuel_economy_l100km;
    if (value === null || value === undefined || value === "") {
      return "-";
    }
    return String(value);
  }

  function rangeText(slide) {
    const details = slide.details || {};
    const value = details.range_km;
    if (value === null || value === undefined || value === "") {
      return "-";
    }
    return String(value);
  }

  function createDetailRows(slide) {
    const customRows = localizedDetailRows(slide);
    const rows = [];

    if (customRows.length) {
      customRows.forEach(function (row) {
        rows.push({
          label: localText(row.label) || "-",
          value: localText(row.value) || "-"
        });
      });
    } else {
      const details = slide.details || {};
      rows.push({
        label: getUiLabel("powertrain"),
        value: details.powertrain || "-"
      });

      if (details.range_km !== null && details.range_km !== undefined) {
        rows.push({
          label: getUiLabel("range_km"),
          value: rangeText(slide)
        });
      }

      if (details.fuel_economy_l100km !== null && details.fuel_economy_l100km !== undefined) {
        rows.push({
          label: getUiLabel("fuel_economy_l100km"),
          value: fuelText(slide)
        });
      }

      if (details.charging) {
        rows.push({
          label: getUiLabel("charging"),
          value: chargingText(slide)
        });
      }

      if (details.price_mad) {
        rows.push({
          label: getUiLabel("price_mad"),
          value: priceText(slide)
        });
      }

      rows.push({
        label: getUiLabel("availability"),
        value: availabilityText(slide)
      });
    }

    detailsRowsEl.innerHTML = "";
    rows.forEach(function (row) {
      const rowEl = document.createElement("div");
      rowEl.className = "detail-row";

      const labelEl = document.createElement("div");
      labelEl.className = "detail-label";
      labelEl.textContent = row.label;

      const valueEl = document.createElement("div");
      valueEl.className = "detail-value";
      valueEl.textContent = row.value;

      rowEl.appendChild(labelEl);
      rowEl.appendChild(valueEl);
      detailsRowsEl.appendChild(rowEl);
    });
  }

  function fillList(listEl, items) {
    listEl.innerHTML = "";
    items.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      listEl.appendChild(li);
    });
  }

  function renderSources(slide) {
    if (!sourcesPanelEl || !sourcesGridEl) {
      return;
    }

    const sources = localizedSources(slide);
    sourcesGridEl.innerHTML = "";

    if (!sources.length) {
      sourcesPanelEl.hidden = true;
      return;
    }

    sources.forEach(function (source) {
      const cardEl = document.createElement("article");
      cardEl.className = "source-item";

      const titleEl = document.createElement("div");
      titleEl.className = "source-title";
      titleEl.textContent = localText(source.title || source.label || "Source");
      cardEl.appendChild(titleEl);

      const value = localText(source.value || source.note || "");
      if (value) {
        const valueEl = document.createElement("div");
        valueEl.className = "source-value";
        valueEl.textContent = value;
        cardEl.appendChild(valueEl);
      }

      const url = localText(source.url || source.link || "");
      if (url) {
        const linkEl = document.createElement("a");
        linkEl.className = "source-link";
        linkEl.href = url;
        if (/^https?:\/\//i.test(url)) {
          linkEl.target = "_blank";
          linkEl.rel = "noopener";
        }
        linkEl.textContent = localText(source.linkLabel || getUiText("viewSource") || "View source");
        cardEl.appendChild(linkEl);
      }

      sourcesGridEl.appendChild(cardEl);
    });

    sourcesPanelEl.hidden = false;
  }

  function localizedTableValue(value) {
    if (isLangMap(value)) {
      return value[state.lang] || value.en || "";
    }
    return value || "";
  }

  function localizedTableColumns(columns) {
    if (Array.isArray(columns)) {
      return columns;
    }
    if (isLangMap(columns)) {
      const byLang = columns[state.lang] || columns.en;
      return Array.isArray(byLang) ? byLang : [];
    }
    if (columns && typeof columns === "object") {
      const byLang = columns[state.lang] || columns.en;
      return Array.isArray(byLang) ? byLang : [];
    }
    return [];
  }

  function renderTableHeader(columns) {
    compareHeadRowEl.innerHTML = "";
    columns.forEach(function (label) {
      const th = document.createElement("th");
      th.scope = "col";
      th.textContent = label;
      compareHeadRowEl.appendChild(th);
    });
  }

  function appendSourceCell(cellEl, value) {
    if (value && typeof value === "object" && value.url) {
      const link = document.createElement("a");
      link.className = "compare-source-link";
      link.href = value.url;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = value.label || "Source";
      cellEl.appendChild(link);
      return;
    }
    if (typeof value === "string" && /^https?:\/\//i.test(value)) {
      const link = document.createElement("a");
      link.className = "compare-source-link";
      link.href = value;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = "Source";
      cellEl.appendChild(link);
      return;
    }
    cellEl.textContent = String(value || "-");
  }

  function appendSlideCell(cellEl, value) {
    if (!value || typeof value !== "object" || !value.slideId) {
      return false;
    }

    const text = localText(value);
    if (!text) {
      return false;
    }

    const nameBtn = document.createElement("button");
    nameBtn.type = "button";
    nameBtn.className = "compare-link";
    nameBtn.dataset.slideId = String(value.slideId);
    nameBtn.textContent = text;
    cellEl.appendChild(nameBtn);
    return true;
  }

  function renderCarsTable(tableConfig) {
    const columns = localizedTableColumns(tableConfig.columns);
    renderTableHeader(columns);
    compareTableBodyEl.innerHTML = "";

    slides.filter(function (slide) {
      return !isComparisonSlide(slide) && !slide.excludeFromCarsTable;
    }).forEach(function (slide) {
      const rowEl = document.createElement("tr");
      const rowValues = [
        modelName(slide),
        (slide.details && slide.details.powertrain) ? slide.details.powertrain : "-",
        powerText(slide),
        chargePowerText(slide)
      ];

      rowValues.forEach(function (value, index) {
        const cell = document.createElement("td");
        if (index === 0) {
          const nameBtn = document.createElement("button");
          nameBtn.type = "button";
          nameBtn.className = "compare-link";
          nameBtn.dataset.slideId = slide.id;
          nameBtn.textContent = value;
          cell.appendChild(nameBtn);
        } else {
          cell.textContent = value;
        }
        rowEl.appendChild(cell);
      });

      compareTableBodyEl.appendChild(rowEl);
    });
  }

  function renderCustomTable(tableConfig) {
    const columns = localizedTableColumns(tableConfig.columns);
    const rows = Array.isArray(tableConfig.rows) ? tableConfig.rows : [];
    renderTableHeader(columns);
    compareTableBodyEl.innerHTML = "";

    rows.forEach(function (row) {
      const rowEl = document.createElement("tr");
      const cells = Array.isArray(row) ? row : [];

      for (let i = 0; i < columns.length; i += 1) {
        const cellEl = document.createElement("td");
        const value = cells[i];
        const label = String(columns[i] || "").toLowerCase();
        if (label.indexOf("source") !== -1) {
          appendSourceCell(cellEl, value);
        } else if (appendSlideCell(cellEl, value)) {
          // linked slide name cell
        } else {
          const text = localText(value);
          cellEl.textContent = text || "-";
        }
        rowEl.appendChild(cellEl);
      }

      compareTableBodyEl.appendChild(rowEl);
    });
  }

  function renderComparisonTable(slide) {
    if (!compareTableBodyEl || !compareHeadRowEl) {
      return;
    }

    const tableConfig = (slide && slide.table) ? slide.table : null;
    const tableTitle = localizedTableValue(tableConfig && tableConfig.title);
    compareHeadingEl.textContent = tableTitle || "Table";

    if (tableConfig && tableConfig.rowSource === "cars") {
      renderCarsTable(tableConfig);
      return;
    }

    if (tableConfig) {
      renderCustomTable(tableConfig);
      return;
    }

    compareHeadRowEl.innerHTML = "";
    compareTableBodyEl.innerHTML = "";
  }

  function onComparisonClick(event) {
    const trigger = event.target.closest(".compare-link");
    if (!trigger) {
      return;
    }
    const slideId = trigger.dataset.slideId;
    if (!slideId) {
      return;
    }
    const targetIndex = slides.findIndex(function (slide) {
      return slide.id === slideId;
    });
    if (targetIndex === -1) {
      return;
    }
    goToSlide(targetIndex);
  }

  function setSlideMode(isTableSlide) {
    if (slideMainGridEl) {
      slideMainGridEl.hidden = isTableSlide;
    }
    if (insightsGridEl) {
      insightsGridEl.hidden = isTableSlide;
    }
    if (ctaRowEl) {
      ctaRowEl.hidden = isTableSlide;
    }
    if (compareCardEl) {
      compareCardEl.hidden = !isTableSlide;
    }
  }

  function setSidebarOpen(isOpen) {
    appEl.classList.toggle("nav-open", isOpen);
    menuBtnEl.setAttribute("aria-expanded", String(isOpen));
  }

  function slideMatchesFilter(slide) {
    if (!state.slideFilter) {
      return true;
    }
    const haystack = [
      modelName(slide),
      slideSubtitle(slide),
      categoryLabel(slide.category),
      regionName(slide)
    ].join(" ").toLowerCase();
    return haystack.indexOf(state.slideFilter) !== -1;
  }

  function buildSidebar() {
    slidesNavEl.innerHTML = "";
    const slideLabel = getUiText("slideLabel") || "Slide";
    let rendered = 0;

    slides.forEach(function (slide, index) {
      if (!slideMatchesFilter(slide)) {
        return;
      }

      rendered += 1;
      const itemEl = document.createElement("button");
      itemEl.type = "button";
      itemEl.className = "slide-nav-item";
      itemEl.dataset.index = String(index);

      const labelEl = document.createElement("span");
      labelEl.className = "slide-nav-label";
      labelEl.textContent = slideLabel + " " + String(index + 1);

      const titleEl = document.createElement("span");
      titleEl.className = "slide-nav-title";
      titleEl.textContent = sidebarTitle(slide);

      itemEl.appendChild(labelEl);
      itemEl.appendChild(titleEl);

      const subtitle = slideSubtitle(slide);
      if (subtitle) {
        const subtitleEl = document.createElement("span");
        subtitleEl.className = "slide-nav-subtitle";
        subtitleEl.textContent = subtitle;
        itemEl.appendChild(subtitleEl);
      }

      const tagsEl = document.createElement("div");
      tagsEl.className = "slide-nav-tags";

      const categoryTag = document.createElement("span");
      categoryTag.className = "tag " + categoryClassName(slide.category);
      categoryTag.textContent = categoryLabel(slide.category);

      const regionTag = document.createElement("span");
      regionTag.className = "tag";
      regionTag.textContent = regionName(slide);

      tagsEl.appendChild(categoryTag);
      tagsEl.appendChild(regionTag);

      itemEl.appendChild(tagsEl);
      slidesNavEl.appendChild(itemEl);
    });

    if (!rendered) {
      const emptyEl = document.createElement("p");
      emptyEl.className = "slides-nav-empty";
      emptyEl.textContent = getUiText("noSlidesFound") || "No matching slides";
      slidesNavEl.appendChild(emptyEl);
    }
  }

  function updateSidebarActive() {
    const buttons = slidesNavEl.querySelectorAll(".slide-nav-item");
    buttons.forEach(function (btn) {
      const index = Number.parseInt(btn.dataset.index, 10);
      const isActive = index === state.currentIndex;
      btn.classList.toggle("is-active", isActive);
      if (isActive) {
        btn.scrollIntoView({ block: "nearest" });
      }
    });
  }

  function updateTopbarText() {
    prevBtnEl.textContent = getUiText("prev") || "Prev";
    nextBtnEl.textContent = getUiText("next") || "Next";

    const isFullscreen = document.fullscreenElement === canvasWrapEl || document.fullscreenElement === slideCanvasEl;
    fullscreenBtnEl.textContent = isFullscreen
      ? (getUiText("exitFullscreen") || "Exit Fullscreen")
      : (getUiText("fullscreen") || "Fullscreen");

    detailsHeadingEl.textContent = getUiText("details") || "DETAILS";
    strengthsHeadingEl.textContent = getUiText("strengths") || "STRENGTHS";
    limitsHeadingEl.textContent = getUiText("limits") || "LIMITS";
    whyHeadingEl.textContent = getUiText("whyItMatters") || "WHY IT MATTERS";
    if (sourcesHeadingEl) {
      sourcesHeadingEl.textContent = getUiText("sources") || "SOURCES";
    }
    officialBtnEl.textContent = getUiText("website") || getUiText("officialWebsite") || "Website";
    appBtnEl.textContent = getUiText("getApp") || "Get the App";

    if (sectionLabelEl) {
      sectionLabelEl.textContent = getUiText("sectionLabel") || "PRESENTATION WEBSITE UI";
    }
    if (slideSearchLabelEl) {
      slideSearchLabelEl.textContent = getUiText("searchSlides") || "Search slides";
    }
    if (slideSearchInputEl) {
      slideSearchInputEl.placeholder = getUiText("searchPlaceholder") || "Search by title";
    }

    langBtnEls.forEach(function (btn) {
      btn.classList.toggle("is-active", btn.dataset.lang === state.lang);
    });
  }

  function renderSlide() {
    const slide = currentSlide();
    if (!slide) {
      slideCanvasEl.innerHTML = "<p>No slide data found.</p>";
      return;
    }
    const tableSlide = isComparisonSlide(slide);

    slideCounterEl.textContent = String(state.currentIndex + 1) + " / " + String(slides.length);
    prevBtnEl.disabled = state.currentIndex === 0;
    nextBtnEl.disabled = state.currentIndex === slides.length - 1;

    deckTitleEl.textContent = (deckConfig.deckTitle && (deckConfig.deckTitle[state.lang] || deckConfig.deckTitle.en))
      || "EV Morocco Benchmark Deck";
    brandLineEl.textContent = (deckConfig.brandLine && (deckConfig.brandLine[state.lang] || deckConfig.brandLine.en))
      || "PRESENTATION WEBSITE UI";

    slideRegionEl.textContent = regionName(slide);
    slideTitleEl.textContent = modelName(slide);
    slideCategoryEl.textContent = categoryLabel(slide.category);
    slideCategoryEl.className = "slide-category " + categoryClassName(slide.category);
    setSlideMode(tableSlide);
    const defaultWebsiteText = getUiText("website") || getUiText("officialWebsite") || "Website";
    const defaultSecondaryText = getUiText("getApp") || "Get the App";

    if (tableSlide) {
      renderComparisonTable(slide);
      carLogoChipEl.hidden = true;
      heroImageEl.removeAttribute("src");
      heroImageEl.alt = "";
      heroOverlayTitleEl.hidden = true;
      officialBtnEl.textContent = defaultWebsiteText;
      appBtnEl.textContent = defaultSecondaryText;
      officialBtnEl.href = "#";
      appBtnEl.href = "#";
      renderSources(slide);
      return;
    }

    if (slide.brandLogo) {
      carLogoChipEl.hidden = false;
      carLogoImageEl.src = slide.brandLogo;
      carLogoImageEl.alt = modelName(slide) + " logo";
    } else {
      carLogoChipEl.hidden = true;
      carLogoImageEl.removeAttribute("src");
      carLogoImageEl.alt = "";
    }

    if (slide.heroImage) {
      heroImageEl.src = slide.heroImage;
      heroImageEl.alt = modelName(slide) + " image";
    } else {
      heroImageEl.removeAttribute("src");
      heroImageEl.alt = "";
    }

    const overlayText = heroOverlayText(slide);
    if (overlayText) {
      heroOverlayTitleEl.hidden = false;
      heroOverlayTitleEl.textContent = overlayText;
    } else {
      heroOverlayTitleEl.hidden = true;
      heroOverlayTitleEl.textContent = "";
    }

    createDetailRows(slide);

    fillList(strengthsListEl, localizedList(slide, "strengths"));
    fillList(limitsListEl, localizedList(slide, "limits"));
    fillList(whyListEl, localizedList(slide, "whyItMatters"));

    const ctaLabels = localizedCtaLabels(slide);
    officialBtnEl.textContent = (ctaLabels && ctaLabels.website) ? ctaLabels.website : defaultWebsiteText;
    appBtnEl.textContent = (ctaLabels && ctaLabels.secondary) ? ctaLabels.secondary : defaultSecondaryText;

    const links = slide.links || {};
    officialBtnEl.href = links.official || links.website || "#";
    appBtnEl.href = links.app || links.dealer || "#";

    renderSources(slide);
  }

  function renderAll() {
    updateTopbarText();
    buildSidebar();
    updateSidebarActive();
    renderSlide();
  }

  function goToSlide(index, options) {
    const targetIndex = clampIndex(index);
    const nextHash = "#slide-" + String(targetIndex + 1);
    const useReplace = Boolean(options && options.replace);

    if (window.location.hash !== nextHash) {
      if (useReplace) {
        history.replaceState(null, "", nextHash);
        onHashChange();
      } else {
        window.location.hash = nextHash;
      }
      return;
    }

    state.currentIndex = targetIndex;
    renderAll();
  }

  function onHashChange() {
    state.currentIndex = parseHashIndex();
    renderAll();
  }

  function onSidebarClick(event) {
    const btn = event.target.closest(".slide-nav-item");
    if (!btn) {
      return;
    }
    const index = Number.parseInt(btn.dataset.index, 10);
    if (Number.isNaN(index)) {
      return;
    }
    goToSlide(index);
    setSidebarOpen(false);
  }

  function onKeyboardNav(event) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToSlide(state.currentIndex + 1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToSlide(state.currentIndex - 1);
    }
  }

  async function toggleFullscreen() {
    const fullscreenTarget = canvasWrapEl;
    try {
      if (document.fullscreenElement === fullscreenTarget || document.fullscreenElement === slideCanvasEl) {
        await document.exitFullscreen();
      } else {
        await fullscreenTarget.requestFullscreen();
      }
    } catch (_err) {
      // Ignore Fullscreen API errors (for local file scenarios).
    }
    updateTopbarText();
  }

  function bindEvents() {
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("keydown", onKeyboardNav);
    slidesNavEl.addEventListener("click", onSidebarClick);
    compareTableBodyEl.addEventListener("click", onComparisonClick);

    prevBtnEl.addEventListener("click", function () {
      goToSlide(state.currentIndex - 1);
    });

    nextBtnEl.addEventListener("click", function () {
      goToSlide(state.currentIndex + 1);
    });

    fullscreenBtnEl.addEventListener("click", toggleFullscreen);
    document.addEventListener("fullscreenchange", updateTopbarText);

    langBtnEls.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const lang = btn.dataset.lang;
        if (lang !== "en" && lang !== "fr") {
          return;
        }
        state.lang = lang;
        renderAll();
      });
    });

    if (slideSearchInputEl) {
      slideSearchInputEl.addEventListener("input", function () {
        state.slideFilter = String(slideSearchInputEl.value || "").trim().toLowerCase();
        buildSidebar();
        updateSidebarActive();
      });
    }

    menuBtnEl.addEventListener("click", function () {
      const open = !appEl.classList.contains("nav-open");
      setSidebarOpen(open);
    });

    sidebarOverlayEl.addEventListener("click", function () {
      setSidebarOpen(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 940) {
        setSidebarOpen(false);
      }
    });
  }

  if (!slides.length) {
    slideCanvasEl.innerHTML = "<p>No slide data found. Check slides.data.js</p>";
    return;
  }

  bindEvents();

  if (!window.location.hash.match(/^#slide-\d+$/i)) {
    goToSlide(0, { replace: true });
  } else {
    state.currentIndex = parseHashIndex();
    renderAll();
  }
})();
