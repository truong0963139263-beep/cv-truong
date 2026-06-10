/* ============================================================================
 *  APP.JS  —  BỘ KHỞI CHẠY GIAO DIỆN (đọc nội dung từ data.js)
 *  Bạn KHÔNG cần sửa file này. Mọi nội dung nằm ở data.js.
 * ----------------------------------------------------------------------------
 *  Nhiệm vụ: đọc window.SITE_DATA → hiển thị theo ngôn ngữ đang chọn,
 *  xử lý nút chuyển ngôn ngữ (VI/EN), tag trạng thái, nút Tải CV, timeline,
 *  thư viện ảnh (lightbox), menu mobile, và form liên hệ.
 * ========================================================================== */
(function () {
  "use strict";

  var DATA = window.SITE_DATA;
  if (!DATA) { console.error("Khong tim thay data.js (window.SITE_DATA)."); return; }

  /* ---- tiện ích nhỏ ---- */
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  var lang = DATA.profile.defaultLang || "vi";

  // Lấy đúng ngôn ngữ nếu là object {vi,en}; nếu không, trả về nguyên giá trị
  function P(v) {
    return (v && typeof v === "object" && ("vi" in v || "en" in v)) ? v[lang] : v;
  }
  // Tìm theo đường dẫn "a.b.c" trong DATA
  function resolve(path) {
    return path.split(".").reduce(function (o, k) { return (o == null ? undefined : o[k]); }, DATA);
  }

  /* ---- biểu tượng cho thẻ năng lực ---- */
  var ICONS = {
    ops:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/></svg>',
    lead:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0113 0"/><path d="M16 5.5a3 3 0 010 6M21.5 20a6 6 0 00-4.5-5.8"/></svg>',
    data:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="6"/><rect x="12" y="7" width="3" height="10"/><rect x="17" y="13" width="3" height="4"/></svg>',
    improve: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 17l6-6 4 4 8-8"/><path d="M21 7h-5M21 7v5"/></svg>'
  };

  // ô giữ chỗ (placeholder) đẹp cho ảnh chưa có — tông xanh + viền vàng
  function placeholder(label) {
    var vlines = "", hlines = "", i;
    for (i = 0; i < 11; i++) vlines += "<line x1='" + (i * 64) + "' y1='0' x2='" + (i * 64) + "' y2='480'/>";
    for (i = 0; i < 9; i++)  hlines += "<line x1='0' y1='" + (i * 64) + "' x2='640' y2='" + (i * 64) + "'/>";
    var svg =
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 480'>" +
      "<rect width='640' height='480' fill='#1C4480'/>" +
      "<g stroke='#3E6BB0' stroke-width='1'>" + vlines + hlines + "</g>" +
      "<g fill='none' stroke='#C8A24A' stroke-width='2'><rect x='270' y='196' width='100' height='74' rx='6'/><path d='M270 220h100'/><path d='M306 196v-14h28v14'/></g>" +
      "<text x='320' y='320' fill='#A2B3CF' font-family='monospace' font-size='17' letter-spacing='2' text-anchor='middle'>" + label + "</text></svg>";
    return "data:image/svg+xml," + encodeURIComponent(svg);
  }

  /* ---- gắn text qua thuộc tính data-bind / data-bind-ph ---- */
  function applyBindings() {
    $$("[data-bind]").forEach(function (el) {
      var v = resolve(el.getAttribute("data-bind"));
      if (v != null) el.textContent = P(v);
    });
    $$("[data-bind-ph]").forEach(function (el) {
      var v = resolve(el.getAttribute("data-bind-ph"));
      if (v != null) el.setAttribute("placeholder", P(v));
    });
    document.documentElement.lang = lang;
  }

  /* ---- tag trạng thái làm việc ---- */
  function renderStatus() {
    var tag = $("#statusTag"); if (!tag) return;
    var s = DATA.status, cur = (s.current === "open") ? "open" : "working";
    tag.classList.toggle("is-open", cur === "open");
    tag.classList.toggle("is-working", cur === "working");
    $("#statusText").textContent = P(s[cur]);
  }

  /* ---- nút Tải CV (trỏ tới đúng file theo ngôn ngữ) ---- */
  function updateCV() {
    var a = $("#cvBtn"); if (!a) return;
    var href = (DATA.profile.cv && DATA.profile.cv[lang]) || "#";
    a.setAttribute("href", href);
    a.setAttribute("download", "CV-TrinhCongTruong-" + lang.toUpperCase() + ".pdf");
  }

  /* ---- KPI ---- */
  function renderKPIs() {
    $("#kpiStrip").innerHTML = DATA.kpis.map(function (k) {
      return '<div class="kpi"><div class="kpi-num" data-target="' + k.value + '" data-suffix="' + k.suffix +
             '">0' + k.suffix + '</div><div class="kpi-label">' + P(k.label) + '</div></div>';
    }).join("");
  }

  /* ---- Giới thiệu (About) ---- */
  function renderAbout() {
    $("#aboutSummary").innerHTML = P(DATA.about.summary).map(function (p) { return "<p>" + p + "</p>"; }).join("");
    $("#eduOrg").textContent = P(DATA.about.eduOrg);
    $("#eduList").innerHTML = DATA.about.eduItems.map(function (it) { return "<li>" + P(it) + "</li>"; }).join("");
    $("#langList").innerHTML = DATA.about.languages.map(function (l) {
      return '<div class="lang-row"><div class="name"><span>' + P(l.name) + '</span><span>' + P(l.level) +
             '</span></div><div class="bar"><i style="width:' + l.pct + '%"></i></div></div>';
    }).join("");
  }

  /* ---- Kinh nghiệm (timeline có thể mở/đóng) ---- */
  function renderExperience() {
    var exp = DATA.experience;
    $("#timeline").innerHTML = exp.jobs.map(function (job, idx) {
      var groups = job.groups.map(function (g) {
        return '<div class="job-group"><div class="job-group-title">' + P(g.title) +
               '</div><ul class="job-points">' + P(g.points).map(function (p) { return "<li>" + p + "</li>"; }).join("") +
               '</ul></div>';
      }).join("");
      var tag = job.current ? '<span class="tag">' + P(exp.currentLabel) + '</span>' : "";
      var open = idx === 0;
      return '' +
        '<article class="job' + (job.current ? " is-current" : "") + '"><div class="job-card">' +
          '<button class="job-head" aria-expanded="' + open + '"><span class="job-meta">' +
            '<span class="job-period">' + job.period + ' ' + tag + '</span>' +
            '<span class="job-role">' + P(job.role) + '</span>' +
            '<span class="job-company">' + job.company + '</span>' +
            '<span class="job-loc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>' + P(job.location) + '</span>' +
          '</span><span class="job-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg></span></button>' +
          '<div class="job-detail" style="grid-template-rows:' + (open ? "1fr" : "0fr") + '"><div><div class="job-detail-inner">' + groups + '</div></div></div>' +
        '</div></article>';
    }).join("");

    $$(".job-head").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var ex = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!ex));
        btn.parentElement.querySelector(".job-detail").style.gridTemplateRows = ex ? "0fr" : "1fr";
      });
    });
  }

  /* ---- Kỹ năng ---- */
  function renderSkills() {
    $("#compGrid").innerHTML = DATA.skills.groups.map(function (c) {
      return '<div class="comp-card reveal"><div class="comp-icon">' + (ICONS[c.icon] || ICONS.ops) +
             '</div><h3>' + P(c.title) + '</h3><ul class="comp-list">' +
             P(c.items).map(function (i) { return "<li>" + i + "</li>"; }).join("") + '</ul></div>';
    }).join("");
    $("#systemsChips").innerHTML = DATA.skills.systems.map(function (s) { return '<span class="chip">' + s + '</span>'; }).join("");
    observeReveals();
  }

  /* ---- Thư viện ảnh ---- */
  function renderGallery() {
    $("#galleryGrid").innerHTML = DATA.gallery.items.map(function (g, i) {
      var src = g.src ? g.src : placeholder("ADD PHOTO");
      var num = String(i + 1);
      if (num.length < 2) num = "0" + num;
      var cap = P(g.caption);
      return '<button class="shot reveal" data-index="' + i + '" aria-label="' + cap + '">' +
               '<span class="shot-num">' + num + '</span>' +
               '<img src="' + src + '" alt="' + cap + '" loading="lazy" onerror="this.src=\'' + placeholder("IMAGE NOT FOUND") + '\'">' +
               '<span class="shot-cap">' + cap + '</span></button>';
    }).join("");
    $$(".shot").forEach(function (s) { s.addEventListener("click", function () { openLightbox(+s.dataset.index); }); });
    observeReveals();
  }

  /* ---- Liên hệ (giá trị + link) ---- */
  function renderContact() {
    $("#emailVal").textContent = DATA.profile.email;
    $("#phoneVal").textContent = DATA.profile.phone;
    $("#locVal").textContent   = P(DATA.contact.location);
    $("#emailLink").href   = "mailto:" + DATA.profile.email;
    $("#phoneLink").href   = "tel:" + DATA.profile.phoneTel;
    $("#linkEmail").href   = "mailto:" + DATA.profile.email;
    $("#linkPhone").href   = "tel:" + DATA.profile.phoneTel;
    $("#linkLinkedin").href = DATA.profile.linkedin || "#";
  }

  function renderAll() {
    applyBindings();
    renderStatus();
    updateCV();
    renderKPIs();
    renderAbout();
    renderExperience();
    renderSkills();
    renderGallery();
    renderContact();
  }

  /* ---- chuyển ngôn ngữ (mượt) ---- */
  function setLang(next, animate) {
    if (next !== "vi" && next !== "en") return;
    var apply = function () {
      lang = next;
      store.set("lang", lang);
      $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
      renderAll();
      // số KPI hiển thị giá trị cuối ngay khi đổi ngôn ngữ (không đếm lại)
      $$(".kpi-num").forEach(function (n) { n.textContent = n.dataset.target + n.dataset.suffix; });
    };
    var main = $("main");
    if (animate && !reduceMotion) {
      main.style.transition = "opacity .18s ease";
      main.style.opacity = "0";
      setTimeout(function () { apply(); main.style.opacity = "1"; }, 170);
    } else { apply(); }
  }

  /* ---- KPI đếm lên (khoảnh khắc điểm nhấn) ---- */
  var counted = false;
  function countUp() {
    if (counted) return; counted = true;
    $$(".kpi-num").forEach(function (el) {
      var target = +el.dataset.target, suffix = el.dataset.suffix || "";
      if (reduceMotion) { el.textContent = target + suffix; return; }
      var dur = 1300, start = performance.now();
      var tick = function (now) {
        var p = Math.min((now - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }

  /* ---- hiện dần khi cuộn + menu đang xem ---- */
  var revealObserver;
  function observeReveals() {
    if (reduceMotion) { $$(".reveal").forEach(function (e) { e.classList.add("in"); }); return; }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); revealObserver.unobserve(en.target); } });
      }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    }
    $$(".reveal:not(.in)").forEach(function (e) { revealObserver.observe(e); });
  }

  function initActiveNav() {
    var links = $$('.nav-links a[href^="#"]');
    var map = {}; links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.classList.remove("active"); });
          if (map[en.target.id]) map[en.target.id].classList.add("active");
        }
      });
    }, { threshold: 0.001, rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { obs.observe(s); });
  }

  /* ---- Lightbox (thư viện ảnh) ---- */
  var lbIndex = 0;
  var lb = $("#lightbox");
  function lbSrc(i) { var g = DATA.gallery.items[i]; return g.src ? g.src : placeholder("ADD PHOTO"); }
  function showLb(i) {
    var items = DATA.gallery.items;
    lbIndex = (i + items.length) % items.length;
    var cap = P(items[lbIndex].caption);
    $("#lbImg").src = lbSrc(lbIndex);
    $("#lbImg").alt = cap;
    $("#lbCap").textContent = cap;
  }
  function openLightbox(i) { showLb(i); lb.classList.add("open"); $("#lbClose").focus(); document.body.style.overflow = "hidden"; }
  function closeLightbox() { lb.classList.remove("open"); document.body.style.overflow = ""; }
  if (lb) {
    $("#lbClose").addEventListener("click", closeLightbox);
    $("#lbPrev").addEventListener("click", function () { showLb(lbIndex - 1); });
    $("#lbNext").addEventListener("click", function () { showLb(lbIndex + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showLb(lbIndex - 1);
      if (e.key === "ArrowRight") showLb(lbIndex + 1);
    });
  }

  /* ---- menu mobile ---- */
  var burger = $("#burger"), navLinks = $("#navLinks");
  if (burger) {
    burger.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { navLinks.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
    });
  }

  /* ---- nút ngôn ngữ ---- */
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.lang, true); }); });

  /* ---- thanh tiến trình cuộn ---- */
  function onScroll() {
    var h = document.documentElement;
    var scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    $("#progress").style.width = (scrolled * 100) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Form liên hệ ----
     Mặc định: mở ứng dụng email của khách với nội dung soạn sẵn (mailto) — chạy
     trên mọi static host. Nếu đặt profile.formEndpoint (vd Formspree) thì gửi
     thẳng tới đó. */
  var form = $("#contactForm"), note = $("#formNote");
  function setNote(key, ok) { note.textContent = P(DATA.contact.form[key]); note.classList.toggle("ok", !!ok); }
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = $("#cName").value.trim();
      var email = $("#cEmail").value.trim();
      var subject = $("#cSubject").value.trim() || (lang === "vi" ? "Liên hệ từ portfolio" : "Portfolio enquiry");
      var message = $("#cMsg").value.trim();
      var validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!name || !validEmail || !message) { setNote("err", false); return; }

      if (DATA.profile.formEndpoint) {
        setNote("sending", false);
        fetch(DATA.profile.formEndpoint, { method: "POST", headers: { "Accept": "application/json" }, body: new FormData(form) })
          .then(function (res) { if (res.ok) { form.reset(); setNote("sent", true); } else { setNote("failed", false); } })
          .catch(function () { setNote("failed", false); });
        return;
      }
      var body = message + "\n\n— " + name + " (" + email + ")";
      window.location.href = "mailto:" + DATA.profile.email +
        "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      setNote("opened", true);
    });
  }

  /* ---- Khởi chạy ---- */
  var yearEl = $("#year"); if (yearEl) yearEl.textContent = new Date().getFullYear();
  var photo = window.__PHOTO_OVERRIDE__ || DATA.profile.photo;   // override chỉ dùng cho bản preview tự chứa
  var photoEl = $("#profilePhoto"); if (photoEl) photoEl.src = photo;

  var saved = store.get("lang");
  setLang(saved || DATA.profile.defaultLang || "vi", false);

  observeReveals();
  initActiveNav();
  onScroll();

  var kpiStrip = $("#kpiStrip");
  if (kpiStrip) {
    var kpiObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { countUp(); kpiObs.disconnect(); } });
    }, { threshold: 0.3 });
    kpiObs.observe(kpiStrip);
  }

})();
