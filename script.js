// Database Prompt Siap Pakai
const promptData = [
  {
    id: "skripsi-outline",
    title: "Outline & Kerangka Bab Skripsi",
    category: "pelajar",
    desc: "Membuat struktur bab dan sub-bab skripsi yang runtut dan akademis.",
    template:
      "Bertindaklah sebagai Dosen Pembimbing Skripsi. Buatkan outline terstruktur untuk Bab {bab} skripsi dengan judul '{judul}'. Sertakan poin-poin utama yang harus dibahas pada setiap sub-bab.",
    variables: [
      {
        key: "bab",
        label: "Bab Berapa? (contoh: 1 / 2 / 3)",
        placeholder: "1 (Pendahuluan)",
      },
      {
        key: "judul",
        label: "Judul Skripsi / Topik",
        placeholder: "Pengaruh Social Media Marketing terhadap Penjualan",
      },
    ],
  },
  {
    id: "jurnal-summary",
    title: "Rangkum Jurnal / Artikel Panjang",
    category: "pelajar",
    desc: "Menyaring poin penting, metodologi, dan hasil studi dari teks jurnal.",
    template:
      "Rangkum teks berikut menjadi 5 poin utama. Sertakan: 1) Tujuan Penelitian, 2) Metodologi, 3) Hasil Utama, dan 4) Kesimpulan.\n\nTeks:\n{teks}",
    variables: [
      {
        key: "teks",
        label: "Tempel Teks Jurnal/Artikel",
        placeholder: "Paste teks jurnal di sini...",
        long: true,
      },
    ],
  },
  {
    id: "email-penolakan",
    title: "Balas Email Penolakan Klien (Sopan)",
    category: "pekerja",
    desc: "Menolak tawaran atau penyesuaian jadwal klien tanpa merusak hubungan profesional.",
    template:
      "Bertindaklah sebagai profesional kantor. Tuliskan draf balasan email sopan untuk menolak {hal_ditolak} dari klien bernama {nama_klien}. Berikan alasan singkat yaitu {alasan} dan tawarkan solusi alternatif.",
    variables: [
      {
        key: "hal_ditolak",
        label: "Hal yang Ditolak",
        placeholder: "Perubahan deadline rapat",
      },
      { key: "nama_klien", label: "Nama Klien", placeholder: "Bpk. Hendra" },
      {
        key: "alasan",
        label: "Alasan Menolak",
        placeholder: "Jadwal tim sudah penuh minggu ini",
      },
    ],
  },
  {
    id: "excel-formula",
    title: "Cari Rumus Excel / Sheets",
    category: "pekerja",
    desc: "Mendapatkan rumus Excel persis sesuai dengan kasus data kamu.",
    template:
      "Tuliskan rumus Excel/Google Sheets untuk kasus berikut: Saya ingin {tujuan_data} di kolom {kolom}. Jelaskan cara kerja rumus tersebut langkah demi langkah.",
    variables: [
      {
        key: "tujuan_data",
        label: "Apa yang mau kamu hitung/cari?",
        placeholder: "Menghitung total bonus jika omset > 10 juta",
      },
      { key: "kolom", label: "Kolom Data", placeholder: "Kolom C" },
    ],
  },
  {
    id: "tiktok-script",
    title: "Naskah Video Pendek (TikTok/Reels)",
    category: "creator",
    desc: "Buat konsep video 30 detik lengkap dengan hook pembuka yang bikin penasaran.",
    template:
      "Buatkan skrip video pendek (30-60 detik) tentang {topik_konten}. Format naskah harus memiliki: 1) Hook menarik di 3 detik pertama, 2) Isi poin utama, 3) Call to Action (CTA) di akhir.",
    variables: [
      {
        key: "topik_konten",
        label: "Topik / Produk Konten",
        placeholder: "3 Tips Mengatasi Malas Belajar",
      },
    ],
  },
  {
    id: "copywriting-shopee",
    title: "Deskripsi Produk Shopee/Tokopedia",
    category: "creator",
    desc: "Deskripsi jualan persuasif + keunggulan produk yang siap memikat pembeli.",
    template:
      "Tuliskan deskripsi produk jualan untuk marketplace. Produk: {nama_produk}. Target pembeli: {target}. Jelaskan keunggulan utama produk, garansi/benefit, dan ajakan membeli yang persuasif.",
    variables: [
      {
        key: "nama_produk",
        label: "Nama & Fitur Produk",
        placeholder: "Botol Minum Termos Tahan Dingin 24 Jam",
      },
      {
        key: "target",
        label: "Target Pembeli",
        placeholder: "Anak kantoran & mahasiswa",
      },
    ],
  },
  {
    id: "fix-bug-code",
    title: "Jelaskan & Fix Error Code",
    category: "coding",
    desc: "Menemukan akar penyebab error pada kodingan dan cara memperbaikinya.",
    template:
      "Saya mendapat pesan error berikut di bahasa {bahasa_pemrograman}:\n\nError:\n{error_log}\n\nKodingan saya:\n{kode}\n\nTolong jelaskan kenapa error ini terjadi dan berikan versi kode yang sudah diperbaiki.",
    variables: [
      {
        key: "bahasa_pemrograman",
        label: "Bahasa Pemrograman",
        placeholder: "JavaScript / Python / PHP",
      },
      {
        key: "error_log",
        label: "Pesan Error",
        placeholder: "TypeError: Cannot read property 'map' of undefined",
        long: true,
      },
      {
        key: "kode",
        label: "Potongan Kode Kamu",
        placeholder: "Paste kode di sini...",
        long: true,
      },
    ],
  },
  {
    id: "swot",
    title: "Analisis SWOT Usaha",
    category: "bisnis",
    desc: "Kekuatan, kelemahan, peluang, ancaman, plus strategi prioritas.",
    template:
      "Buatkan analisis SWOT untuk usaha {jenis_usaha} di {lokasi}. Sajikan dalam tabel dan akhiri dengan 3 rekomendasi strategi prioritas.",
    variables: [
      { key: "jenis_usaha", label: "Jenis Usaha", placeholder: "Warung kopi" },
      { key: "lokasi", label: "Lokasi", placeholder: "Pekalongan" },
    ],
  },
  {
    id: "learning-roadmap",
    title: "Buat Roadmap Belajar",
    category: "pelajar",
    desc: "Membuat roadmap belajar terstruktur dari pemula hingga mahir.",
    template:
      "Buatkan roadmap belajar {topik} dari level {level_awal} hingga {target_level}. Saya memiliki waktu belajar {waktu} per hari. Susun berdasarkan tahap, materi, latihan, dan project yang harus dikerjakan.",
    variables: [
      { key: "topik", label: "Topik", placeholder: "JavaScript" },
      { key: "level_awal", label: "Level Awal", placeholder: "Pemula" },
      { key: "target_level", label: "Target Level", placeholder: "Menengah" },
      { key: "waktu", label: "Waktu Belajar", placeholder: "2 jam" },
    ],
  },
  {
    id: "study-plan",
    title: "Buat Jadwal Belajar",
    category: "pelajar",
    desc: "Membuat jadwal belajar berdasarkan target dan waktu yang tersedia.",
    template:
      "Buatkan jadwal belajar {mata_pelajaran} selama {durasi}. Saya dapat belajar {waktu} per hari dan target saya adalah {target}. Buat jadwal yang realistis dengan sesi belajar, latihan, review, dan istirahat.",
    variables: [
      {
        key: "mata_pelajaran",
        label: "Mata Pelajaran",
        placeholder: "Pemrograman Web",
      },
      { key: "durasi", label: "Durasi", placeholder: "30 hari" },
      { key: "waktu", label: "Waktu Per Hari", placeholder: "2 jam" },
      {
        key: "target",
        label: "Target",
        placeholder: "Mampu membuat website sendiri",
      },
    ],
  },
  {
    id: "debug-code",
    title: "Debugging Kode",
    category: "coding",
    desc: "Mencari error dan memberikan solusi perbaikan pada kode.",
    template:
      "Periksa kode {bahasa} berikut. Temukan error atau potensi masalahnya, jelaskan penyebabnya dengan sederhana, lalu berikan versi kode yang sudah diperbaiki. Jangan mengubah fungsi utama program.\n\n{kode}",
    variables: [
      { key: "bahasa", label: "Bahasa Pemrograman", placeholder: "JavaScript" },
      {
        key: "kode",
        label: "Kode",
        placeholder: "Tempel kode yang bermasalah...",
      },
    ],
  },
  {
    id: "business-plan",
    title: "Buat Business Plan",
    category: "bisnis",
    desc: "Menyusun rencana bisnis lengkap dari produk hingga strategi pemasaran.",
    template:
      "Buatkan business plan untuk {jenis_usaha} yang menargetkan {target_pasar} di {lokasi}. Sertakan konsep bisnis, target pasar, keunggulan, strategi pemasaran, operasional, estimasi biaya awal, dan sumber pendapatan.",
    variables: [
      { key: "jenis_usaha", label: "Jenis Usaha", placeholder: "Coffee shop" },
      {
        key: "target_pasar",
        label: "Target Pasar",
        placeholder: "Mahasiswa dan pekerja muda",
      },
      { key: "lokasi", label: "Lokasi", placeholder: "Pekalongan" },
    ],
  },

  {
    id: "marketing-strategy",
    title: "Strategi Marketing",
    category: "bisnis",
    desc: "Membuat strategi pemasaran berdasarkan target dan jenis bisnis.",
    template:
      "Buatkan strategi pemasaran untuk {jenis_usaha} dengan target pelanggan {target_pasar}. Budget marketing saya sekitar {budget}. Buat strategi online dan offline yang realistis, lalu susun prioritas berdasarkan dampak dan biaya.",
    variables: [
      {
        key: "jenis_usaha",
        label: "Jenis Usaha",
        placeholder: "Jasa desain website",
      },
      { key: "target_pasar", label: "Target Pasar", placeholder: "UMKM lokal" },
      { key: "budget", label: "Budget", placeholder: "Rp500.000 per bulan" },
    ],
  },

  {
    id: "competitor-analysis",
    title: "Analisis Kompetitor",
    category: "bisnis",
    desc: "Membandingkan kompetitor dan menemukan peluang yang belum dimanfaatkan.",
    template:
      "Analisis kompetitor untuk bisnis {jenis_usaha} di {lokasi}. Kompetitor utama saya adalah {kompetitor}. Bandingkan produk, harga, keunggulan, kelemahan, strategi marketing, dan peluang diferensiasi.",
    variables: [
      {
        key: "jenis_usaha",
        label: "Jenis Usaha",
        placeholder: "Laundry kiloan",
      },
      { key: "lokasi", label: "Lokasi", placeholder: "Klaten" },
      {
        key: "kompetitor",
        label: "Kompetitor",
        placeholder: "Laundry A, Laundry B, Laundry C",
      },
    ],
  },
  {
    id: "ui-concept",
    title: "Konsep UI Website",
    category: "desain",
    desc: "Membuat konsep UI modern berdasarkan jenis website dan target pengguna.",
    template:
      "Buatkan konsep UI untuk website {jenis_website} dengan target pengguna {target_pengguna}. Gunakan gaya {gaya}. Jelaskan struktur halaman, warna, typography, komponen UI, dan animasi yang sesuai.",
    variables: [
      {
        key: "jenis_website",
        label: "Jenis Website",
        placeholder: "Portfolio developer",
      },
      {
        key: "target_pengguna",
        label: "Target Pengguna",
        placeholder: "Recruiter dan client",
      },
      { key: "gaya", label: "Gaya Design", placeholder: "Modern minimalis" },
    ],
  },

  {
    id: "color-palette",
    title: "Buat Color Palette",
    category: "desain",
    desc: "Membuat kombinasi warna yang sesuai dengan identitas sebuah website.",
    template:
      "Buatkan color palette untuk website {jenis_website} dengan tema {tema}. Berikan warna primary, secondary, accent, background, surface, heading, dan text lengkap dengan kode HEX serta alasan pemilihannya.",
    variables: [
      {
        key: "jenis_website",
        label: "Jenis Website",
        placeholder: "Portfolio developer",
      },
      { key: "tema", label: "Tema", placeholder: "Modern dan futuristik" },
    ],
  },
  {
    id: "cv-builder",
    title: "Buat CV ATS",
    category: "karier",
    desc: "Membuat CV yang terstruktur dan mudah dibaca sistem ATS.",
    template:
      "Buatkan CV ATS untuk posisi {posisi}. Saya memiliki pengalaman {pengalaman} dan skill {skill}. Buat struktur CV yang profesional, ringkas, dan relevan dengan posisi tersebut.",
    variables: [
      {
        key: "posisi",
        label: "Posisi",
        placeholder: "Junior Front-End Developer",
      },
      {
        key: "pengalaman",
        label: "Pengalaman",
        placeholder: "Freelance membuat website",
      },
      {
        key: "skill",
        label: "Skill",
        placeholder: "HTML, CSS, JavaScript, Git",
      },
    ],
  },

  {
    id: "interview-simulator",
    title: "Simulasi Interview",
    category: "karier",
    desc: "Berlatih interview kerja dengan AI sebagai interviewer.",
    template:
      "Bertindak sebagai interviewer untuk posisi {posisi}. Saya memiliki pengalaman {pengalaman}. Ajukan pertanyaan interview satu per satu, tunggu jawaban saya, lalu berikan evaluasi singkat sebelum melanjutkan ke pertanyaan berikutnya.",
    variables: [
      { key: "posisi", label: "Posisi", placeholder: "Front-End Developer" },
      {
        key: "pengalaman",
        label: "Pengalaman",
        placeholder: "Belum memiliki pengalaman profesional",
      },
    ],
  },
  {
    id: "rewrite-natural",
    title: "Buat Tulisan Lebih Natural",
    category: "writing",
    desc: "Mengubah tulisan agar lebih natural, jelas, dan tidak kaku.",
    template:
      "Tulis ulang teks berikut agar terdengar lebih natural dan mudah dibaca. Pertahankan maksud asli, jangan menambahkan informasi baru, dan gunakan gaya bahasa {gaya}.\n\n{teks}",
    variables: [
      {
        key: "gaya",
        label: "Gaya Bahasa",
        placeholder: "Santai dan profesional",
      },
      { key: "teks", label: "Teks", placeholder: "Masukkan teks di sini..." },
    ],
  },

  {
    id: "email-writer",
    title: "Buat Email Profesional",
    category: "writing",
    desc: "Membuat email profesional berdasarkan tujuan dan konteks.",
    template:
      "Buatkan email {jenis_email} kepada {penerima} dengan tujuan {tujuan}. Gunakan bahasa yang {gaya}, jelas, singkat, dan profesional.",
    variables: [
      {
        key: "jenis_email",
        label: "Jenis Email",
        placeholder: "Lamaran kerja",
      },
      { key: "penerima", label: "Penerima", placeholder: "HRD perusahaan" },
      {
        key: "tujuan",
        label: "Tujuan",
        placeholder: "Melamar posisi Front-End Developer",
      },
      {
        key: "gaya",
        label: "Gaya Bahasa",
        placeholder: "Sopan dan profesional",
      },
    ],
  },
];

const CATEGORY_LABELS = {
  pelajar: "Pelajar & Skripsi",
  pekerja: "Pekerja Kantor",
  creator: "Content Creator",
  coding: "Coding & Tech",
  bisnis: "Bisnis & UMKM",
};

// DOM Elements
const promptGrid = document.getElementById("prompt-grid");
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");
const categoryGroup = document.getElementById("category-group");
const resultInfo = document.getElementById("result-info");
const toastEl = document.getElementById("toast");
const themeToggleBtn = document.getElementById("theme-toggle");
const favoriteCountEl = document.getElementById("favorite-count");

const statPrompts = document.getElementById("stat-prompts");
const statCategories = document.getElementById("stat-categories");
const footerYear = document.getElementById("footer-year");

const recentToggleBtn = document.getElementById("recent-toggle");
const recentSection = document.getElementById("recent-section");
const recentList = document.getElementById("recent-list");
const closeRecentBtn = document.getElementById("close-recent");

const modalOverlay = document.getElementById("modal-overlay");
const modalTitle = document.getElementById("modal-title");
const modalClose = document.getElementById("modal-close");
const modalForm = document.getElementById("modal-form");
const dynamicFields = document.getElementById("dynamic-fields");
const modalOutput = document.getElementById("modal-output");
const modalCopyBtn = document.getElementById("modal-copy-btn");
const modalNote = document.getElementById("modal-note");

let activeCategory = "semua";
let activePrompt = null;
let favorites = new Set(
  JSON.parse(localStorage.getItem("prompt-favorites") || "[]"),
);
let recentPrompts = JSON.parse(localStorage.getItem("prompt-recent") || "[]");
let toastTimer;

// Functions
function escapeHtml(s) {
  return s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}

function shortLabel(label) {
  return label
    .replace(/\(.*?\)/g, "")
    .replace(/[?:]/g, "")
    .trim();
}

function fillTemplate(template, values) {
  return Object.entries(values).reduce(
    (text, [key, val]) => text.split(`{${key}}`).join(val),
    template,
  );
}

function placeholderValues(item) {
  return Object.fromEntries(
    item.variables.map((v) => [v.key, `[${shortLabel(v.label)}]`]),
  );
}

// Theme
function initTheme() {
  const theme = localStorage.getItem("prompt-theme") || "light";
  document.documentElement.setAttribute("data-theme", theme);
  themeToggleBtn.querySelector(".theme-icon").textContent =
    theme === "dark" ? "☀" : "☾";
}

themeToggleBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("prompt-theme", next);
  themeToggleBtn.querySelector(".theme-icon").textContent =
    next === "dark" ? "☀" : "☾";
});

// Storage
function saveFavorites() {
  localStorage.setItem("prompt-favorites", JSON.stringify([...favorites]));
  favoriteCountEl.textContent = favorites.size;
}

function saveRecent() {
  localStorage.setItem("prompt-recent", JSON.stringify(recentPrompts));
}

function addToRecent(promptId) {
  recentPrompts = [
    promptId,
    ...recentPrompts.filter((id) => id !== promptId),
  ].slice(0, 3);
  saveRecent();
  renderRecent();
}

// Renderers
function initStats() {
  if (statPrompts) statPrompts.textContent = promptData.length;
  if (statCategories)
    statCategories.textContent = Object.keys(CATEGORY_LABELS).length;
  if (footerYear) footerYear.textContent = new Date().getFullYear();
  if (favoriteCountEl) favoriteCountEl.textContent = favorites.size;
}

function renderRecent() {
  if (!recentPrompts.length) {
    recentToggleBtn.hidden = true;
    recentSection.hidden = true;
    return;
  }
  recentToggleBtn.hidden = false;
  recentList.innerHTML = recentPrompts
    .map((id) => {
      const item = promptData.find((p) => p.id === id);
      if (!item) return "";
      return `
        <button type="button" class="recent-item" data-id="${item.id}">
          <span class="recent-icon">✦</span>
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <small>${CATEGORY_LABELS[item.category]}</small>
          </div>
        </button>`;
    })
    .join("");
}

function renderPrompts() {
  const keyword = searchInput.value.toLowerCase().trim();
  clearSearchBtn.hidden = !keyword;

  const filtered = promptData.filter((item) => {
    const matchCategory =
      activeCategory === "semua" ||
      (activeCategory === "favorit"
        ? favorites.has(item.id)
        : item.category === activeCategory);
    const haystack =
      `${item.title} ${item.desc} ${item.template} ${CATEGORY_LABELS[item.category]}`.toLowerCase();
    return matchCategory && haystack.includes(keyword);
  });

  resultInfo.textContent = `${filtered.length} prompt ditemukan`;

  if (!filtered.length) {
    promptGrid.innerHTML = `
      <div class="no-results">
        <div class="empty-icon">⌕</div>
        <h3>Prompt Tidak Ditemukan</h3>
        <p>Coba gunakan kata kunci lain atau ganti filter kategori.</p>
      </div>`;
    return;
  }

  promptGrid.innerHTML = filtered
    .map((item) => {
      const fav = favorites.has(item.id);
      const preview = escapeHtml(
        fillTemplate(item.template, placeholderValues(item)),
      ).replace(/\[([^\]]+)\]/g, "<mark>[$1]</mark>");
      return `
        <article class="prompt-card" data-id="${item.id}">
          <div>
            <div class="card-header">
              <span class="card-tag">✦ ${CATEGORY_LABELS[item.category]}</span>
              <button type="button" class="fav-btn${fav ? " active" : ""}" data-action="fav">${fav ? "♥" : "♡"}</button>
            </div>
            <h3>${escapeHtml(item.title)}</h3>
            <p class="card-desc">${escapeHtml(item.desc)}</p>
            <div class="card-preview">${preview}</div>
          </div>
          <div class="card-actions">
            <button type="button" class="btn secondary-btn" data-action="copy">Salin Cepat</button>
            <button type="button" class="btn primary-btn" data-action="customize">Sesuaikan</button>
          </div>
        </article>`;
    })
    .join("");
}

// Handlers
promptGrid.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const id = btn.closest(".prompt-card").dataset.id;
  const item = promptData.find((p) => p.id === id);
  if (!item) return;

  if (btn.dataset.action === "copy") {
    addToRecent(id);
    copyToClipboard(
      fillTemplate(item.template, placeholderValues(item)),
      "Prompt berhasil disalin!",
    );
  } else if (btn.dataset.action === "customize") {
    openModal(item);
  } else if (btn.dataset.action === "fav") {
    favorites.has(id) ? favorites.delete(id) : favorites.add(id);
    saveFavorites();
    renderPrompts();
  }
});

// Modal Logics
function openModal(item) {
  activePrompt = item;
  addToRecent(item.id);
  modalTitle.textContent = item.title;

  dynamicFields.innerHTML = item.variables
    .map((v) => {
      const id = `field-${v.key}`;
      const inputHtml = v.long
        ? `<textarea id="${id}" data-key="${v.key}" placeholder="${escapeHtml(v.placeholder)}" rows="3"></textarea>`
        : `<input type="text" id="${id}" data-key="${v.key}" placeholder="${escapeHtml(v.placeholder)}" autocomplete="off" />`;
      return `
        <div class="field">
          <label for="${id}">${escapeHtml(shortLabel(v.label))}</label>
          ${inputHtml}
        </div>`;
    })
    .join("");

  updateModalOutput();
  modalOverlay.hidden = false;
  dynamicFields.querySelector("input, textarea")?.focus();
}

function closeModal() {
  modalOverlay.hidden = true;
}

function updateModalOutput() {
  if (!activePrompt) return;
  const values = {};
  let empty = 0;

  dynamicFields.querySelectorAll("[data-key]").forEach((input) => {
    const val = input.value.trim();
    if (!val) empty++;
    const v = activePrompt.variables.find((x) => x.key === input.dataset.key);
    values[input.dataset.key] = val || `[${shortLabel(v.label)}]`;
  });

  modalOutput.value = fillTemplate(activePrompt.template, values);
  modalNote.textContent = empty
    ? `${empty} isian belum diisi (masih berupa tanda [ ]).`
    : "Semua isian lengkap! Prompt siap dipakai.";
}

dynamicFields.addEventListener("input", updateModalOutput);
modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

modalCopyBtn.addEventListener("click", () => {
  copyToClipboard(modalOutput.value, "Prompt kustom berhasil disalin!");
  closeModal();
});

// Utility
async function copyToClipboard(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch (err) {
    showToast("Gagal menyalin otomatis.");
  }
}

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2500);
}

// Global Search & Keyboard
searchInput.addEventListener("input", renderPrompts);
clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  renderPrompts();
  searchInput.focus();
});

categoryGroup.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  categoryGroup
    .querySelectorAll(".chip")
    .forEach((c) => c.classList.remove("active"));
  chip.classList.add("active");
  activeCategory = chip.dataset.category;
  renderPrompts();
});

recentToggleBtn.addEventListener("click", () => {
  recentSection.hidden = !recentSection.hidden;
});

closeRecentBtn.addEventListener("click", () => {
  recentSection.hidden = true;
});

recentList.addEventListener("click", (e) => {
  const itemEl = e.target.closest(".recent-item");
  if (!itemEl) return;
  const item = promptData.find((p) => p.id === itemEl.dataset.id);
  if (item) openModal(item);
});

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    searchInput.focus();
  }
  if (e.key === "Escape" && !modalOverlay.hidden) closeModal();
});

// Init
initTheme();
initStats();
renderRecent();
renderPrompts();
