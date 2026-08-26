/**
 * Main Application Controller - Nguyen Nga Anh Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Components
  const evidenceModal = new EvidenceModal();
  const deckController = new DeckModeController();
  deckController.setEvidenceModal(evidenceModal);

  // State
  let currentCategory = 'ALL';
  let searchQuery = '';

  // DOM Elements
  const projectGrid = document.getElementById('projects-grid');
  const categoryPills = document.querySelectorAll('.category-filter-pill');
  const dockSearchInput = document.getElementById('dock-search-input');
  const heroSearchInput = document.getElementById('hero-search-input');
  const switchDeckBtn = document.getElementById('switch-to-deck-btn');
  const openContactBtn = document.getElementById('open-contact-modal-btn');
  const toastEl = document.getElementById('toast-notification');

  // Render Projects Function
  function renderProjects() {
    if (!projectGrid) return;

    const filtered = PROJECTS_DATA.filter(p => {
      const pCat = p.category ? p.category.toUpperCase() : '';
      const selectedCat = currentCategory.toUpperCase();
      const matchCat = selectedCat === 'ALL' || pCat === selectedCat;
      const matchSearch = searchQuery === '' || 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.software.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      projectGrid.innerHTML = `
        <div class="col-span-full py-16 text-center">
          <div class="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <i data-lucide="search-x" class="w-8 h-8"></i>
          </div>
          <h3 class="text-lg font-bold text-gray-800">Không tìm thấy dự án phù hợp</h3>
          <p class="text-sm text-gray-500 mt-1">Vui lòng thử tìm với từ khóa khác như "Milo", "Color Grading", "Zalo", "Talkshow"...</p>
          <button id="reset-filter-btn" class="mt-4 px-5 py-2 bg-pink-600 text-white rounded-full text-xs font-bold shadow hover:bg-pink-700 transition-all">
            Xem tất cả dự án
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-filter-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentCategory = 'ALL';
          searchQuery = '';
          if (dockSearchInput) dockSearchInput.value = '';
          if (heroSearchInput) heroSearchInput.value = '';
          updateCategoryUI();
          renderProjects();
        });
      }
      if (window.lucide) lucide.createIcons();
      return;
    }

    projectGrid.innerHTML = filtered.map((p, idx) => `
      <div class="project-card bg-white rounded-3xl overflow-hidden border border-pink-100 shadow-xl flex flex-col group transition-all duration-300 hover:border-pink-300">
        <!-- Card Header / Poster -->
        <div class="relative aspect-video bg-gray-900 overflow-hidden cursor-pointer open-project-trigger" data-project-id="${p.id}">
          <img src="${p.previewImage || 'assets/images/milo_preview.svg'}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="${p.title}">
          
          <!-- Category & Tag Badges -->
          <div class="absolute top-3 left-3 flex items-center gap-2">
            <span class="px-3 py-1 bg-pink-600/90 backdrop-blur-md text-white rounded-full text-xs font-extrabold tracking-wider uppercase shadow-md">
              ${p.category}
            </span>
            <span class="px-2.5 py-0.5 bg-black/60 backdrop-blur-md text-white rounded-full text-[10px] font-semibold">
              ${p.num}
            </span>
          </div>

          <!-- Play Action Overlay -->
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div class="w-14 h-14 bg-white/95 text-pink-600 rounded-full flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
              <i data-lucide="play" class="w-6 h-6 fill-current ml-0.5"></i>
            </div>
          </div>
        </div>

        <!-- Card Body Content -->
        <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-2 text-xs text-gray-500 font-medium mb-2.5 min-h-[38px] sm:min-h-[40px]">
              <span class="text-pink-700 font-bold flex items-start gap-1.5 leading-snug flex-1 min-w-0">
                <i data-lucide="award" class="w-3.5 h-3.5 flex-shrink-0 text-pink-600 mt-0.5"></i>
                <span class="line-clamp-2">${p.course}</span>
              </span>
              <span class="px-2.5 py-0.5 rounded-full bg-gray-50/80 text-gray-500 font-bold text-[11px] border border-gray-200 shadow-xs flex-shrink-0 whitespace-nowrap self-start">${p.year}</span>
            </div>

            <h3 class="text-lg sm:text-xl font-extrabold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2 min-h-[3.25rem] sm:min-h-[3.5rem] flex items-start leading-snug">
              ${p.title}
            </h3>

            <p class="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-3 min-h-[2.5rem]">
              ${p.shortDesc}
            </p>

            <div class="space-y-1 text-xs mb-3 bg-pink-50/50 p-2.5 rounded-xl border border-pink-100 min-h-[50px] flex items-center">
              <p class="leading-snug"><strong class="text-gray-700">Vai trò đảm nhiệm:</strong> <span class="text-[#B8005A] font-bold">${p.role}</span></p>
            </div>
          </div>

          <div>
            <!-- Software Tags -->
            <div class="mb-4">
              <span class="text-[11px] font-bold text-gray-700 block mb-1.5">Công cụ sử dụng:</span>
              <div class="flex flex-wrap gap-1.5">
                ${p.software.map(s => `
                  <span class="px-2.5 py-1 bg-pink-50 text-pink-800 rounded-md text-[11px] font-semibold border border-pink-100">${s}</span>
                `).join('')}
              </div>
            </div>

            <!-- Action Pink Bar (Click anywhere to open evidence) -->
            <div class="mt-4 -mx-6 -mb-6 p-4 bg-[#B8005A] hover:bg-[#9d004c] active:bg-[#80003e] text-white rounded-b-3xl flex items-center justify-between cursor-pointer transition-all duration-200 shadow-md group/action open-project-trigger select-none" data-project-id="${p.id}">
              <div class="flex items-center gap-2 font-bold text-xs sm:text-sm text-white">
                <span class="text-white">${p.liveAppUrl ? 'Xem App Mô Phỏng' : 'Xem Video'}</span>
                <i data-lucide="arrow-right" class="w-4 h-4 text-white transform group-hover/action:translate-x-1.5 transition-transform"></i>
              </div>
              <div class="text-white/90 group-hover/action:text-white transition-colors flex items-center justify-center">
                <i data-lucide="${p.liveAppUrl ? 'smartphone' : 'presentation'}" class="w-4 h-4 text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    if (window.lucide) lucide.createIcons();

    // Bind Click Events
    projectGrid.querySelectorAll('.open-project-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        const pid = btn.dataset.projectId;
        evidenceModal.open(pid);
      });
    });

    projectGrid.querySelectorAll('.open-slide-direct').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const slideIdx = parseInt(btn.dataset.slideIndex, 10);
        deckController.open(slideIdx);
      });
    });
  }

  // Update Category UI
  function updateCategoryUI() {
    categoryPills.forEach(pill => {
      const cat = pill.dataset.category;
      if (cat === currentCategory) {
        pill.classList.add('bg-pink-600', 'text-white', 'shadow-md');
        pill.classList.remove('bg-white', 'text-gray-700', 'hover:bg-pink-50');
      } else {
        pill.classList.remove('bg-pink-600', 'text-white', 'shadow-md');
        pill.classList.add('bg-white', 'text-gray-700', 'hover:bg-pink-50');
      }
    });
  }

  // Category Pill Clicks
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      currentCategory = pill.dataset.category;
      updateCategoryUI();
      renderProjects();
    });
  });

  // Search inputs
  const handleSearch = (val) => {
    searchQuery = val;
    if (dockSearchInput && dockSearchInput.value !== val) dockSearchInput.value = val;
    if (heroSearchInput && heroSearchInput.value !== val) heroSearchInput.value = val;
    renderProjects();
  };

  if (dockSearchInput) {
    dockSearchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  }
  if (heroSearchInput) {
    heroSearchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  }

  // Presentation Deck Mode Button
  if (switchDeckBtn) {
    switchDeckBtn.addEventListener('click', () => {
      deckController.open(0);
    });
  }

  // Direct project slide openers from header
  document.querySelectorAll('.open-deck-slide-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.slideIdx || '0', 10);
      deckController.open(idx);
    });
  });

  // Copy to clipboard helper
  function copyToClipboard(text, message) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message || `Đã sao chép: ${text}`);
    }).catch(() => {
      showToast(`Số điện thoại / Email: ${text}`);
    });
  }

  window.copyContactInfo = copyToClipboard;

  // Toast helper
  function showToast(msg) {
    if (!toastEl) return;
    toastEl.querySelector('#toast-message').textContent = msg;
    toastEl.classList.remove('translate-y-20', 'opacity-0');
    toastEl.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
      toastEl.classList.add('translate-y-20', 'opacity-0');
      toastEl.classList.remove('translate-y-0', 'opacity-100');
    }, 3500);
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contact-inquiry-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('#contact-name').value;
      const email = contactForm.querySelector('#contact-email').value;
      showToast(`Cảm ơn ${name}! Yêu cầu hợp tác đã được gửi thành công đến Nga Anh.`);
      contactForm.reset();
    });
  }

  // Ambient sound / BGM effect toggle in Dock
  const dockSoundBtn = document.getElementById('dock-sound-toggle');
  let isSoundActive = false;
  if (dockSoundBtn) {
    dockSoundBtn.addEventListener('click', () => {
      isSoundActive = !isSoundActive;
      dockSoundBtn.classList.toggle('active', isSoundActive);
      showToast(isSoundActive ? '🔊 Hiệu ứng âm thanh đã BẬT' : '🔇 Hiệu ứng âm thanh đã TẮT');
    });
  }

  // Image & Asset Protection: Disable dragging and direct extraction
  document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'svg' || e.target.tagName === 'PICTURE') {
      e.preventDefault();
      return false;
    }
  });

  document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG' || e.target.closest('.port-folio-title') || e.target.closest('.font-signature') || e.target.closest('.deck-slide')) {
      e.preventDefault();
      return false;
    }
  });

  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
  });

  // Initial Render
  renderProjects();
});