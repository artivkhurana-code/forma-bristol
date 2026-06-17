/* ============================================================
   FORMA BRISTOL — interactions
   Vanilla JS, no dependencies. Motion respects user prefs.
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Anchored to UK time (BST / UTC+1, in effect late June). The countdown uses
  // absolute time, so every visitor sees the same remaining time to this instant.
  var EVENT_START = new Date("2026-06-27T09:00:00+01:00");

  /* ---------- helpers ---------- */
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }

  /* ============================================================
     BOOT LOADER — quick "tuning in" sequence
     ============================================================ */
  function runBoot() {
    var boot = $("#boot");
    if (!boot) return;
    var bar = $("#bootBar");
    var line = $("#bootLine");
    var done = function () {
      boot.classList.add("is-done");
      document.body.classList.add("booted");
      window.setTimeout(function () { if (boot.parentNode) boot.parentNode.removeChild(boot); }, 700);
    };

    if (reduceMotion) { done(); return; }

    var words = ["TUNING IN", "LOCKING SIGNAL", "BRISTOL FOUND"];
    var i = 0;
    var pct = 0;
    var swap = window.setInterval(function () {
      i = (i + 1) % words.length;
      if (line) line.firstChild.textContent = words[i] + " ";
    }, 360);
    var tick = window.setInterval(function () {
      pct += Math.random() * 16 + 8;
      if (pct >= 100) { pct = 100; window.clearInterval(tick); window.clearInterval(swap); window.setTimeout(done, 260); }
      if (bar) bar.style.width = pct + "%";
    }, 90);

    // safety: never trap the user
    window.setTimeout(function () { window.clearInterval(tick); window.clearInterval(swap); done(); }, 2600);
  }

  /* ============================================================
     COUNTDOWN
     ============================================================ */
  function runCountdown() {
    var dEl = $("#cdD"), hEl = $("#cdH"), mEl = $("#cdM"), sEl = $("#cdS");
    if (!dEl) return;
    function update() {
      var diff = EVENT_START - new Date();
      if (diff <= 0) {
        dEl.textContent = "00"; hEl.textContent = "00"; mEl.textContent = "00"; sEl.textContent = "00";
        var lbl = $(".countdown__label");
        if (lbl) lbl.textContent = "We're on air — see you in Bristol";
        return false;
      }
      var s = Math.floor(diff / 1000);
      dEl.textContent = Math.floor(s / 86400);
      hEl.textContent = pad(Math.floor(s / 3600) % 24);
      mEl.textContent = pad(Math.floor(s / 60) % 60);
      sEl.textContent = pad(s % 60);
      return true;
    }
    if (update()) window.setInterval(update, 1000);
  }

  /* ============================================================
     SCROLL REVEAL (IntersectionObserver)
     ============================================================ */
  function runReveal() {
    var items = $$("[data-reveal]");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-in"); });
      $$("[data-stagger]").forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        el.classList.add("is-in");
        if (el.hasAttribute("data-stagger")) {
          $$(":scope > *", el).forEach(function (child, idx) {
            child.style.transitionDelay = (idx * 70) + "ms";
          });
        }
        io.unobserve(el);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ============================================================
     TEXT DECODE (hero + footer headlines)
     ============================================================ */
  function runDecode() {
    if (reduceMotion) return;
    var glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&/01";
    $$("[data-decode]").forEach(function (el) {
      var io = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          obs.disconnect();
          var target = el.getAttribute("data-decode");
          var frame = 0;
          var total = target.length;
          var timer = window.setInterval(function () {
            var out = "";
            for (var k = 0; k < total; k++) {
              if (target[k] === " ") { out += " "; continue; }
              if (k < frame) { out += target[k]; }
              else { out += glyphs[Math.floor(Math.random() * glyphs.length)]; }
            }
            el.textContent = out;
            frame += 0.5;
            if (frame >= total) { el.textContent = target; window.clearInterval(timer); }
          }, 40);
        });
      }, { threshold: 0.5 });
      io.observe(el);
    });
  }

  /* ============================================================
     NAV — shrink on scroll, mobile menu, scrollspy
     ============================================================ */
  function runNav() {
    var nav = $("#nav");
    var burger = $("#burger");
    var links = $(".nav__links");
    var toTop = $("#toTop");
    var ticking = false;

    function onScroll() {
      var y = window.pageYOffset;
      if (nav) nav.classList.toggle("is-shrunk", y > 40);
      if (toTop) toTop.classList.toggle("is-shown", y > 700);
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });
    onScroll();

    if (burger && links) {
      burger.addEventListener("click", function () {
        var open = links.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
        burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      });
      $$("a", links).forEach(function (a) {
        a.addEventListener("click", function () {
          links.classList.remove("is-open");
          burger.setAttribute("aria-expanded", "false");
        });
      });
    }

    if (toTop) {
      toTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      });
    }
  }

  /* ============================================================
     FAQ — animated accordion height
     ============================================================ */
  function runFaq() {
    $$(".qa").forEach(function (qa) {
      var body = $(".qa__body", qa);
      var summary = $("summary", qa);
      if (!body || !summary) return;
      body.style.height = "0px";

      summary.addEventListener("click", function (ev) {
        ev.preventDefault();
        var isOpen = qa.hasAttribute("open");
        if (isOpen) {
          body.style.height = body.scrollHeight + "px";
          window.requestAnimationFrame(function () {
            body.style.transition = "height .35s cubic-bezier(.2,.7,.2,1)";
            body.style.height = "0px";
          });
          var close = function () { qa.removeAttribute("open"); body.style.transition = ""; body.removeEventListener("transitionend", close); };
          if (reduceMotion) { close(); } else { body.addEventListener("transitionend", close); }
        } else {
          qa.setAttribute("open", "");
          var h = body.scrollHeight;
          body.style.transition = reduceMotion ? "" : "height .35s cubic-bezier(.2,.7,.2,1)";
          body.style.height = "0px";
          window.requestAnimationFrame(function () { body.style.height = h + "px"; });
          var openEnd = function () { body.style.height = "auto"; body.removeEventListener("transitionend", openEnd); };
          if (reduceMotion) { body.style.height = "auto"; } else { body.addEventListener("transitionend", openEnd); }
        }
      });
    });
  }

  /* ============================================================
     MAP — pins + tooltip (hover & tap)
     ============================================================ */
  function runMap() {
    var map = $("#bristolMap");
    var tip = $("#mapTip");
    if (!map || !tip) return;
    var nameEl = $(".map__tipname", tip);
    var noteEl = $(".map__tipnote", tip);
    var activePin = null;

    function show(pin) {
      nameEl.textContent = pin.getAttribute("data-name");
      noteEl.textContent = pin.getAttribute("data-note");
      tip.style.left = pin.style.getPropertyValue("--x");
      tip.style.top = pin.style.getPropertyValue("--y");
      tip.hidden = false;
      if (activePin) activePin.classList.remove("is-active");
      pin.classList.add("is-active");
      activePin = pin;
    }
    function hide() {
      tip.hidden = true;
      if (activePin) { activePin.classList.remove("is-active"); activePin = null; }
    }

    $$(".pin", map).forEach(function (pin) {
      pin.addEventListener("mouseenter", function () { show(pin); });
      pin.addEventListener("focus", function () { show(pin); });
      pin.addEventListener("click", function (e) {
        e.preventDefault();
        if (activePin === pin) { hide(); } else { show(pin); }
      });
    });
    map.addEventListener("mouseleave", hide);
    document.addEventListener("click", function (e) {
      if (!map.contains(e.target)) hide();
    });
  }

  /* ============================================================
     RADIO — play the SoundCloud track via the hidden widget
     ============================================================ */
  function runPlayer() {
    var player = $(".player");
    var btn = $("#playBtn");
    var now = $("#playerNow");
    var iframe = $("#scPlayer");
    if (!player || !btn) return;

    function setUI(on) {
      player.classList.toggle("is-playing", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.setAttribute("aria-label", on ? "Pause Forma Radio" : "Play Forma Radio");
      if (now) now.textContent = on ? "Now playing" : "On air";
    }

    // Preferred path: control the SoundCloud widget so audio actually plays.
    if (iframe && window.SC && SC.Widget) {
      var widget = SC.Widget(iframe);
      var playing = false;
      widget.bind(SC.Widget.Events.PLAY, function () { playing = true; setUI(true); });
      widget.bind(SC.Widget.Events.PAUSE, function () { playing = false; setUI(false); });
      widget.bind(SC.Widget.Events.FINISH, function () { playing = false; setUI(false); });
      btn.addEventListener("click", function () {
        if (playing) { widget.pause(); } else { widget.play(); }
      });
      return;
    }

    // Fallback (SoundCloud unavailable): open the track in a new tab.
    btn.addEventListener("click", function () {
      window.open("https://soundcloud.com/formaradio/muymuy", "_blank", "noopener");
    });
  }

  /* ============================================================
     COPY CODE + toast
     ============================================================ */
  function toast(msg) {
    var t = $("#toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("is-shown");
    window.clearTimeout(toast._t);
    toast._t = window.setTimeout(function () { t.classList.remove("is-shown"); }, 1900);
  }
  function runCopy() {
    var btn = $("#copyCode");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var code = btn.getAttribute("data-code");
      var fallback = function () { toast("Code: " + code); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(function () { toast("Copied " + code); }, fallback);
      } else { fallback(); }
    });
  }

  /* ---------- init ---------- */
  function init() {
    runBoot();
    runCountdown();
    runReveal();
    runDecode();
    runNav();
    runFaq();
    runMap();
    runPlayer();
    runCopy();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})();
