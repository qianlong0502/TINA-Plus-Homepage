const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#site-nav");
const languageButton = document.querySelector("[data-language-switch]");
const copyButton = document.querySelector("[data-copy-bibtex]");
const tableTabs = [...document.querySelectorAll("[data-table-tab]")];
const tablePanels = [...document.querySelectorAll("[data-table-panel]")];
const galleryTrack = document.querySelector("[data-gallery-track]");
const galleryPrevious = document.querySelector("[data-gallery-prev]");
const galleryNext = document.querySelector("[data-gallery-next]");
const gallerySlides = [...document.querySelectorAll(".gallery-slide")];
const galleryDots = [...document.querySelectorAll("[data-gallery-page]")];

const translations = {
  zh: {
    "nav.abstract": "摘要",
    "nav.method": "方法",
    "nav.results": "实验",
    "nav.analysis": "分析",
    "nav.citation": "引用",
    "hero.eyebrow": "扩散一致的视觉探测",
    "hero.title": "<em>TINA+：</em>通过扩散一致的无文本反演探测遗忘扩散模型中的残留视觉知识",
    "hero.deck": "TINA+ 完全绕过文本路径并寻找扩散一致的视觉生成轨迹，从而检验擦除后的模型是否仍保留目标概念的生成知识。",
    "hero.affiliations": "哈尔滨工业大学（深圳） · 香港城市大学 · 新加坡国立大学 · 鹏城实验室 · 深圳河套学院",
    "hero.paper": "论文 · 即将公开",
    "hero.code": "代码 · 即将公开",
    "hero.bibtex": "BibTeX",
    "hero.caption": "概念擦除可能让目标文本无法再触发相应图像，却没有真正删除模型中的视觉知识。TINA+ 绕过文本路径，检验这些知识能否通过有效的视觉生成轨迹被重新访问。",
    "thesis.index": "核心问题",
    "thesis.title": "删除一种<span>文本—图像关联</span>，是否等同于删除<span>视觉知识本身？</span>",
    "thesis.old.label": "主流测试方式",
    "thesis.old.title": "文本提示词还能生成被擦除的概念吗？",
    "thesis.old.body": "现有擦除方法和对抗探测主要通过文本条件工作。因此，文本攻击失败只能说明文本到图像的路径被阻断，并不能证明模型已经忘记该概念的视觉形态。",
    "thesis.new.label": "我们的视觉测试",
    "thesis.new.title": "模型是否仍能沿着有效的视觉轨迹到达该概念？",
    "thesis.new.body": "TINA+ 从目标图像出发，在空文本条件下寻找对应的种子潜变量，再检验同一个擦除模型能否沿扩散一致的轨迹重新生成该概念。",
    "abstract.title": "摘要",
    "abstract.p1": "尽管文本到图像扩散模型具有强大的生成能力，为了安全部署并避免生成有害内容，概念擦除技术不可或缺。对抗探测通过检验被擦除概念能否恢复，持续推动更强防御方法的发展。然而，擦除与探测方法仍大多局限于文本中心范式，只检验文本到图像的映射是否被切断，却忽略了相应的视觉知识是否仍然存在。",
    "abstract.p2": "我们转而从视觉角度出发，检验扩散反演能否找到一条生成轨迹来重建被擦除概念的视觉实例。标准反演通常利用文本提示词来保证重建质量，但文本中心防御所抑制的恰恰是这一条件，而且使用文本也无法形成纯视觉评估。空文本条件消除了这种依赖，却会放大标准反演中的近似误差，阻碍对真实轨迹的准确恢复。",
    "abstract.p3": "因此，我们提出 <strong>TINA+</strong>，一种扩散一致的无文本反演攻击，并通过基于优化的反演过程提高空文本反演的准确性。除了准确性问题，我们还发现无约束扩散反演可能找到伪轨迹，甚至让随机初始化的扩散模型重建目标概念。这类轨迹不符合扩散过程，并可能错误地暗示模型中存在残留视觉知识。",
    "abstract.p4": "TINA+ 通过扩散一致轨迹正则化解决这一问题。该方法惩罚能量显著低于扩散边缘能量期望演化的轨迹，在保留有效概念恢复能力的同时抑制伪反演路径。",
    "abstract.p5": "在十二种擦除方法、四类概念擦除任务和不同模型架构上的实验表明，TINA+ 能够通过扩散一致轨迹可靠地探测残留视觉知识。结果进一步说明，现有方法往往只是通过切断文本—图像联系来隐藏概念，而没有真正删除底层视觉知识。",
    "method.title": "一条轨迹理解 TINA+",
    "method.intro": "从目标图像出发，在空文本条件下寻找有效种子潜变量，再通过同一个概念擦除模型完成生成。",
    "method.framework.caption": "TINA+ 从目标图像中寻找种子潜变量，再将其送回同一个擦除模型。如果模型能够重新生成被擦除概念，就说明对应的视觉生成路径仍然存在。",
    "method.details.label": "技术框架",
    "method.details.title": "准确反演是必要条件，轨迹有效性同样重要。",
    "method.details.caption": "TINA+ 将固定点优化、前向边缘初始化和边缘能量正则化结合起来，最后在空文本条件下从优化后的种子潜变量完成生成。",
    "method.s1.title": "从视觉出发",
    "method.s1.body": "编码具有代表性的目标图像，摆脱对已被擦除提示词的依赖。",
    "method.s2.title": "修正反演误差",
    "method.s2.body": "针对固定点一致性优化每一步潜变量，而不是直接接受 DDIM 近似误差的累积。",
    "method.s3.title": "约束轨迹有效性",
    "method.s3.body": "通过前向边缘初始化和边缘能量正则化，抑制不符合扩散过程的路径。",
    "method.s4.title": "探测擦除模型",
    "method.s4.body": "让同一个擦除模型从找到的种子重新生成，并检验目标概念是否再次出现。",
    "results.title": "大规模实验证据",
    "results.intro": "即使通过文本条件工作的现有攻击受到显著抑制，TINA+ 仍然保持有效。",
    "results.stat1": "种擦除方法",
    "results.stat2": "类概念擦除任务",
    "results.stat3": "种代表性攻击",
    "results.stat4": "类模型架构",
    "tables.label": "定量结果",
    "tables.title": "主表查看器",
    "tables.hint": "选择一类任务，再通过横向滑动或滚动查看完整表格。ASR 越高越好。",
    "tables.nudity": "裸露内容",
    "tables.style": "艺术风格",
    "tables.object": "物体",
    "tables.celebrity": "名人身份",
    "tables.nudity.caption": "八种裸露内容擦除防御上的攻击成功率（%）。",
    "tables.style.caption": "梵高艺术风格擦除任务上的攻击成功率（%）。",
    "tables.object.caption": "四类物体和八种擦除防御上的攻击成功率（%）。",
    "tables.celebrity.caption": "ESD 与 STEREO 下三位名人身份的攻击成功率（%）。",
    "gallery.label": "定性结果",
    "gallery.title": "主图画廊",
    "results.card0": "<span>裸露内容擦除</span>在八种防御上，文本中心攻击的输出往往变成正常着装、中性或无关内容，而 TINA+ 能够稳定恢复目标内容。",
    "results.card1": "<span>风格与物体擦除</span>在 STEREO 上，普通生成和 UDA 偏离目标，而 TINA+ 能够恢复目标特定的视觉内容。",
    "results.card2": "<span>名人身份擦除</span>文本中心攻击可能被完全抑制，但 TINA+ 仍能访问带有可辨识身份特征的视觉轨迹。",
    "analysis.title": "可靠的探测必须排除伪证据",
    "analysis.intro": "视觉上的相似重建并不足够。即使随机模型也可能通过无效轨迹被反演。",
    "analysis.a1.label": "轨迹诊断",
    "analysis.a1.title": "初始化负责对齐，能量正则化保证后续轨迹有效。",
    "analysis.a1.body": "前向边缘初始化提供对齐的起点，边缘能量约束则阻止优化在 Random-UNet 负对照中利用严重的能量塌缩。",
    "analysis.a2.label": "负对照",
    "analysis.a2.title": "让无效重建表现为明确的生成失败。",
    "analysis.a2.body": "DDIM 和无约束 TINA 能从不包含目标知识的模型中重建出可识别特征。TINA+ 在优化过程中抑制这些假阳性，而不是在生成后简单拒绝它们。",
    "beyond.title": "深入分析",
    "beyond.card1": "<span>内部表征</span>看似无结构的种子潜变量能够在擦除后的 UNet 内激活清晰可分、概念特异的内部响应。",
    "beyond.card2": "<span>不同模型架构</span>该脆弱性不仅存在于基于 UNet 的模型，也延伸到基于 DiT 的 PixArt 模型。",
    "citation.title": "引用",
    "citation.note": "论文公开后，我们将更新此处的引用信息。",
    "citation.copy": "复制 BibTeX",
    "footer.tagline": "以扩散一致的无文本反演评估概念擦除。",
    "footer.copyright": "© 2026 TINA+ 作者"
  }
};

const textNodes = [...document.querySelectorAll("[data-i18n]")];
const htmlNodes = [...document.querySelectorAll("[data-i18n-html]")];

textNodes.forEach((node) => {
  node.dataset.en = node.textContent.trim();
});
htmlNodes.forEach((node) => {
  node.dataset.enHtml = node.innerHTML.trim();
});

let currentLanguage = "en";
try {
  currentLanguage = localStorage.getItem("tina-language") === "zh" ? "zh" : "en";
} catch {
  currentLanguage = "en";
}

const applyLanguage = (language) => {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = language === "zh" ? translations.zh[key] ?? node.dataset.en : node.dataset.en;
  });

  htmlNodes.forEach((node) => {
    const key = node.dataset.i18nHtml;
    node.innerHTML = language === "zh" ? translations.zh[key] ?? node.dataset.enHtml : node.dataset.enHtml;
  });

  if (languageButton) {
    languageButton.textContent = language === "zh" ? "EN" : "中文";
    languageButton.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
  }

  document.title = language === "zh"
    ? "TINA+ | 扩散一致的无文本反演"
    : "TINA+ | Diffusion-Consistent Text-Free Inversion";

  const description = document.querySelector('meta[name="description"]');
  description?.setAttribute(
    "content",
    language === "zh"
      ? "TINA+ 通过扩散一致的无文本反演，探测概念擦除扩散模型中残留的视觉知识。"
      : "TINA+ probes residual visual knowledge in concept-erased diffusion models through diffusion-consistent text-free inversion."
  );
};

applyLanguage(currentLanguage);

languageButton?.addEventListener("click", () => {
  const nextLanguage = currentLanguage === "en" ? "zh" : "en";
  applyLanguage(nextLanguage);
  try {
    localStorage.setItem("tina-language", nextLanguage);
  } catch {
    // Language switching still works when storage is unavailable.
  }
});

const updateHeader = () => {
  header?.classList.toggle("scrolled", window.scrollY > 16);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav?.classList.toggle("open", !open);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  });
});

const activateTable = (name, moveFocus = false) => {
  tableTabs.forEach((tab) => {
    const active = tab.dataset.tableTab === name;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active && moveFocus) tab.focus();
  });

  tablePanels.forEach((panel) => {
    const active = panel.dataset.tablePanel === name;
    panel.hidden = !active;
    panel.classList.toggle("active", active);
  });
};

tableTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTable(tab.dataset.tableTab));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tableTabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tableTabs.length) % tableTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tableTabs.length - 1;
    activateTable(tableTabs[nextIndex].dataset.tableTab, true);
  });
});

let activeGalleryPage = 0;

const updateGalleryPage = (page) => {
  activeGalleryPage = Math.max(0, Math.min(page, gallerySlides.length - 1));
  galleryDots.forEach((dot, index) => {
    const active = index === activeGalleryPage;
    dot.classList.toggle("active", active);
    if (active) dot.setAttribute("aria-current", "true");
    else dot.removeAttribute("aria-current");
  });
};

const showGalleryPage = (page) => {
  if (!galleryTrack || !gallerySlides.length) return;
  const nextPage = (page + gallerySlides.length) % gallerySlides.length;
  updateGalleryPage(nextPage);
  const slide = gallerySlides[nextPage];
  const centeredLeft = slide.offsetLeft - (galleryTrack.clientWidth - slide.offsetWidth) / 2;
  galleryTrack.scrollTo({ left: centeredLeft, behavior: "smooth" });
};

galleryPrevious?.addEventListener("click", () => showGalleryPage(activeGalleryPage - 1));
galleryNext?.addEventListener("click", () => showGalleryPage(activeGalleryPage + 1));
galleryDots.forEach((dot) => {
  dot.addEventListener("click", () => showGalleryPage(Number(dot.dataset.galleryPage)));
});

let galleryScrollFrame;
galleryTrack?.addEventListener("scroll", () => {
  window.cancelAnimationFrame(galleryScrollFrame);
  galleryScrollFrame = window.requestAnimationFrame(() => {
    const viewportCenter = galleryTrack.scrollLeft + galleryTrack.clientWidth / 2;
    const closestPage = gallerySlides.reduce((best, slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const bestSlide = gallerySlides[best];
      const bestCenter = bestSlide.offsetLeft + bestSlide.offsetWidth / 2;
      return Math.abs(slideCenter - viewportCenter) < Math.abs(bestCenter - viewportCenter) ? index : best;
    }, 0);
    updateGalleryPage(closestPage);
  });
});

copyButton?.addEventListener("click", async () => {
  const bibtex = document.querySelector("#bibtex")?.innerText;
  if (!bibtex) return;

  try {
    await navigator.clipboard.writeText(bibtex);
    copyButton.textContent = currentLanguage === "zh" ? "已复制" : "Copied";
    window.setTimeout(() => {
      copyButton.textContent = currentLanguage === "zh" ? translations.zh["citation.copy"] : copyButton.dataset.en;
    }, 1800);
  } catch {
    copyButton.textContent = currentLanguage === "zh" ? "请手动选择复制" : "Select to copy";
  }
});
