/**
 * GS Portal Main Script
 * Handles Mobile Sidebar Toggle & General Interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  setupMobileSidebar();
});

function setupMobileSidebar() {
  // 1. Cek apakah elemen sidebar ada
  // Karena sidebar di-load pake 'load-part.js', kita harus nunggu dia muncul
  // Kita pake Interval check sederhana
  const checkSidebar = setInterval(() => {
    const sidebar = document.getElementById("sidebar-component");

    if (sidebar) {
      clearInterval(checkSidebar);
      initSidebarLogic(sidebar);
    }
  }, 100);
}

function initSidebarLogic(sidebar) {
  // 2. Inject Tombol Hamburger & Overlay ke Body (Otomatis)
  // Biar Mike gak capek edit semua file HTML :D

  const body = document.body;

  // Buat Overlay
  const overlay = document.createElement("div");
  overlay.className = "sidebar-overlay";
  body.appendChild(overlay);

  // Buat Tombol Hamburger
  const hamburgerBtn = document.createElement("button");
  hamburgerBtn.className = "hamburger-btn";
  hamburgerBtn.innerHTML = '<i class="fas fa-bars text-lg"></i>';
  body.appendChild(hamburgerBtn);

  // 3. Logic Buka Tutup

  // BUKA: Pas tombol hamburger diklik
  hamburgerBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  });

  // TUTUP: Pas tombol Close (X) di sidebar diklik
  const closeBtn = document.getElementById("close-sidebar");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });
  }

  // TUTUP: Pas Overlay (area gelap) diklik
  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  // TUTUP: Pas salah satu menu diklik (biar user langsung liat konten)
  const navLinks = sidebar.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Cek kalo lagi di mobile aja
      if (window.innerWidth < 768) {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
      }
    });
  });
}
