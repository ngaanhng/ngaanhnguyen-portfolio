/**
 * Deck Mode Module - 9-Slide Presentation Deck Simulator
 * Faithful replication of the original 9 PDF slides with interactive enhancements
 */

class DeckModeController {
  constructor() {
    this.deckContainer = document.getElementById('deck-viewport');
    this.slidesWrapper = document.getElementById('deck-slides-wrapper');
    this.currentSlide = 0;
    this.totalSlides = 16;
    this.isOpen = false;
    this.evidenceModal = null;
    this.bindEvents();
  }

  setEvidenceModal(modalInstance) {
    this.evidenceModal = modalInstance;
  }

  bindEvents() {
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        this.nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        this.prevSlide();
      } else if (e.key === 'Escape') {
        this.close();
      }
    });

    // Close button
    const closeBtn = document.getElementById('deck-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    // Next / Prev buttons
    const nextBtn = document.getElementById('deck-next-btn');
    const prevBtn = document.getElementById('deck-prev-btn');
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide());

    // Delegated click handler for any open-evidence-btn within slidesWrapper
    if (this.slidesWrapper) {
      this.slidesWrapper.addEventListener('click', (e) => {
        const btn = e.target.closest('.open-evidence-btn');
        if (btn) {
          e.preventDefault();
          e.stopPropagation();
          const pId = btn.dataset.projectId;
          if (this.evidenceModal) {
            this.evidenceModal.open(pId);
          }
        }
      });
    }
  }

  open(slideIndex = 0) {
    this.isOpen = true;
    this.currentSlide = slideIndex;
    this.renderSlides();
    this.deckContainer.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    this.updateSlideDisplay();
  }

  close() {
    this.isOpen = false;
    this.deckContainer.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
      this.updateSlideDisplay();
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateSlideDisplay();
    }
  }

  goToSlide(idx) {
    this.currentSlide = Math.max(0, Math.min(this.totalSlides - 1, idx));
    this.updateSlideDisplay();
  }

  updateSlideDisplay() {
    const slides = this.slidesWrapper.querySelectorAll('.deck-slide');
    if (slides.length > 0) this.totalSlides = slides.length;
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === this.currentSlide);
      s.classList.toggle('hidden', i !== this.currentSlide);
    });

    // Update Counter & Progress
    const counterEl = document.getElementById('deck-slide-counter');
    if (counterEl) counterEl.textContent = `${this.currentSlide + 1} / ${this.totalSlides}`;

    const progressBar = document.getElementById('deck-progress-bar');
    if (progressBar) {
      const pct = ((this.currentSlide + 1) / this.totalSlides) * 100;
      progressBar.style.width = `${pct}%`;
    }

    // Refresh lucide icons
    if (window.lucide) lucide.createIcons();
  }

  renderSlides() {
    this.slidesWrapper.innerHTML = `
      <!-- Slide 1: Cover (Trang Bìa) -->
      <div class="deck-slide w-full h-full flex flex-col justify-between bg-white p-6 md:p-8 lg:p-10 relative overflow-hidden" data-slide="0">
        <!-- Top header info -->
        <div class="flex justify-between items-center px-4 flex-shrink-0">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-pink-600 animate-pulse"></span>
            <span class="text-xs font-bold text-gray-500 uppercase tracking-widest">My Multimedia Portfolio</span>
          </div>
          <span class="font-black text-[#B8005A] text-base md:text-xl tracking-tight">Nga Anh Nguyen</span>
          <span class="font-black text-[#B8005A] text-base md:text-xl">2026</span>
        </div>

        <!-- Main Folder Body -->
        <div class="my-auto bg-[#B8005A] rounded-[32px] md:rounded-[36px] p-6 sm:p-8 md:p-10 lg:p-12 text-white relative shadow-2xl overflow-hidden flex items-center justify-between min-h-[66%] max-h-[72%] flex-shrink-0">
          <!-- 4x2 Dot grid top left -->
          <div class="absolute top-6 left-8 dot-grid-4x2">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>

          <!-- Bold Typography -->
          <div class="relative z-10 select-none pl-3 sm:pl-4">
            <div class="leading-none mb-0 overflow-visible">
              <span class="font-signature text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white block whitespace-nowrap drop-shadow-lg -rotate-1 pl-1">
                Nguyễn Nga Anh
              </span>
            </div>
            <h1 class="port-folio-title select-none drop-shadow-md uppercase -mt-1 sm:-mt-2 md:-mt-3">
              <span class="word-port uppercase">PORT</span><span class="word-folio uppercase">FOLIO</span>
            </h1>
          </div>

          <!-- Signature Flower Icon -->
          <div class="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 relative z-10 flex-shrink-0 mr-3 sm:mr-6">
            <img src="assets/images/flower.svg" class="w-full h-full object-contain flower-spin-slow flower-glow" alt="Flower">
          </div>
        </div>

        <!-- Slide Footer Taskbar -->
        <div class="bg-[#B8005A] text-white rounded-2xl px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-lg flex-shrink-0">
          <div class="flex items-center gap-3 sm:gap-4">
            <i data-lucide="menu" class="w-4.5 h-4.5 sm:w-5 sm:h-5"></i>
            <div class="bg-white/20 px-3.5 sm:px-4 py-1.5 rounded-full flex items-center gap-2 text-xs w-48 sm:w-64 border border-white/30">
              <i data-lucide="search" class="w-3.5 h-3.5"></i>
              <span class="opacity-80 truncate">ngaanhnguyen-portfolio</span>
              <i data-lucide="mic" class="w-3.5 h-3.5 ml-auto"></i>
            </div>
            <i data-lucide="folder" class="w-4.5 h-4.5 sm:w-5 sm:h-5"></i>
            <i data-lucide="globe" class="w-4.5 h-4.5 sm:w-5 sm:h-5"></i>
          </div>
          <div class="flex items-center gap-2.5 sm:gap-3 text-xs">
            <i data-lucide="wifi" class="w-3.5 h-3.5 sm:w-4 sm:h-4"></i>
            <i data-lucide="volume-2" class="w-3.5 h-3.5 sm:w-4 sm:h-4"></i>
            <i data-lucide="battery" class="w-4 h-4 sm:w-5 sm:h-5"></i>
          </div>
        </div>
      </div>

      <!-- Slide 2: About Me (Giới Thiệu Bản Thân) -->
      <div class="deck-slide w-full h-full flex flex-col md:flex-row bg-white relative overflow-hidden" data-slide="1">
        <!-- Left: Bio & Intro (Scrollable on iPad/Tablet) -->
        <div class="w-full md:w-3/5 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start md:justify-center space-y-3.5 sm:space-y-4 overflow-y-auto max-h-full">
          <div class="flex items-center gap-3 flex-shrink-0">
            <span class="w-8 sm:w-10 h-1.5 bg-pink-600 rounded-full"></span>
            <span class="text-sm sm:text-base md:text-lg font-black text-[#B8005A] uppercase tracking-wider">GIỚI THIỆU BẢN THÂN</span>
          </div>

          <div class="flex items-center gap-3.5 sm:gap-4 flex-shrink-0">
            <div class="w-20 h-24 sm:w-24 sm:h-28 md:w-24 md:h-30 rounded-2xl overflow-hidden shadow-md border-2 border-pink-200 flex-shrink-0 bg-pink-50" style="min-width: 75px; max-width: 96px;">
              <img src="assets/images/avatar.jpg" class="w-full h-full object-cover object-top" alt="Avatar">
            </div>
            <div class="flex-grow min-w-0">
              <div class="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
                <p class="text-xs sm:text-sm text-gray-500 font-semibold tracking-wide">Hello, my name is</p>
                <img src="assets/images/vlu_logo.png" class="h-5 sm:h-6 object-contain flex-shrink-0" alt="Van Lang University Logo">
              </div>
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-[#B8005A] tracking-tight leading-tight mb-1.5 pt-1">NGUYỄN NGA ANH</h2>
              <span class="text-[11px] sm:text-xs md:text-sm font-bold text-pink-600 uppercase tracking-wide block truncate">Trường Đại học Văn Lang • Khóa 28 - Class of 2027</span>
            </div>
          </div>

          <div class="space-y-2.5 sm:space-y-3 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed max-w-2xl text-justify">
            <p class="text-justify">
              Là <strong class="text-gray-900 font-bold">sinh viên năm cuối ngành Truyền thông Đa phương tiện</strong> tại <strong class="text-gray-900 font-bold">Trường Đại học Văn Lang</strong>, em đã tích lũy được kinh nghiệm thực tế về làm việc nhóm và triển khai dự án thông qua nhiều bài tập, đồ án môn học.
            </p>
            <p class="text-justify">
              Những trải nghiệm này giúp em từng bước hoàn thiện các kỹ năng cơ bản về sản xuất nội dung đa nền tảng (bao gồm <strong class="text-gray-900 font-bold">thiết kế, dựng video, sáng tạo nội dung và ứng dụng công cụ AI</strong>), quản lý truyền thông số cũng như hỗ trợ tổ chức sự kiện.
            </p>
            <p class="p-3 sm:p-3.5 bg-pink-50/80 border-l-4 border-pink-600 rounded-r-2xl text-pink-950 font-medium italic text-xs sm:text-sm leading-relaxed shadow-xs text-justify">
              "Với tinh thần chủ động và khả năng thích ứng nhanh, em mong muốn được ứng tuyển vào vị trí Thực tập sinh Truyền thông để tiếp tục rèn luyện kỹ năng chuyên môn và đóng góp tích cực vào các hoạt động truyền thông – marketing của doanh nghiệp."
            </p>
          </div>
        </div>

        <!-- Right: Berry Pink Folder Card with Giant ABOUT ME -->
        <div class="w-full md:w-2/5 bg-[#B8005A] text-white p-6 sm:p-8 md:p-10 flex flex-col justify-between relative rounded-l-[32px] md:rounded-l-[40px] shadow-2xl flex-shrink-0">
          <div class="text-right pt-4 sm:pt-6 md:pt-10">
            <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.92] uppercase">
              <span class="text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]">ABOUT</span><br>
              <span class="text-white">ME</span>
            </h1>
          </div>

          <div class="flex items-end justify-between mt-auto pt-4">
            <div class="dot-grid-4x2">
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
            </div>
            <div class="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32">
              <img src="assets/images/flower.svg" class="w-full h-full object-contain flower-spin-slow" alt="Flower">
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 3: Curriculum Vitae (Hồ Sơ Năng Lực & Kinh Nghiệm) -->
      <div class="deck-slide w-full h-full flex flex-col justify-between bg-white p-5 sm:p-6 md:p-8 relative overflow-hidden" data-slide="2">
        <div class="flex justify-between items-center px-2 mb-2 flex-shrink-0">
          <div class="flex items-center gap-2.5">
            <span class="w-3 h-3 rounded-full bg-pink-600"></span>
            <span class="font-black text-gray-900 text-sm sm:text-base md:text-lg uppercase tracking-wider">My Curriculum Vitae (CV)</span>
          </div>
          <span class="text-xs sm:text-sm font-bold text-pink-700 bg-pink-50 px-3.5 py-1.5 rounded-full border border-pink-100 shadow-xs">Thực Tập Sinh Truyền Thông</span>
        </div>

        <div class="my-auto bg-white rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-pink-100 shadow-xl overflow-y-auto max-h-[76vh]">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            <!-- Left Header -->
            <div class="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-3 pb-4 md:pb-0 md:border-r border-gray-100 md:pr-4 lg:pr-6">
              <div class="w-28 h-36 sm:w-32 sm:h-40 rounded-2xl overflow-hidden shadow-lg border-2 border-pink-200 bg-gray-100 flex-shrink-0" style="min-width: 90px; max-width: 128px;">
                <img src="assets/images/avatar.jpg" class="w-full h-full object-cover object-top" alt="Avatar">
              </div>
              <div class="w-full">
                <h3 class="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 leading-tight">NGUYỄN NGA ANH</h3>
                <p class="text-xs sm:text-sm md:text-[0.95rem] lg:text-base font-black text-[#B8005A] uppercase tracking-wide mt-1.5 leading-snug">THỰC TẬP SINH TRUYỀN THÔNG (COMMUNICATIONS INTERN)</p>
              </div>
              <div class="w-full text-xs sm:text-sm text-gray-700 space-y-2.5 font-bold pt-1 text-left">
                <div class="flex items-center gap-2.5 flex-nowrap">
                  <i data-lucide="map-pin" class="w-4 h-4 text-pink-600 flex-shrink-0"></i>
                  <span class="truncate">TP. Hồ Chí Minh</span>
                </div>
                <div class="flex items-center gap-2.5 flex-nowrap">
                  <i data-lucide="mail" class="w-4 h-4 text-pink-600 flex-shrink-0"></i>
                  <span class="truncate no-underline text-gray-700 select-all" style="text-decoration: none !important; border: none !important; -webkit-text-decoration: none !important;">nguyenngaanh6704@gmail.com</span>
                </div>
                <div class="flex items-center gap-2.5 flex-nowrap">
                  <i data-lucide="phone" class="w-4 h-4 text-pink-600 flex-shrink-0"></i>
                  <span>0962 468 650</span>
                </div>
              </div>
            </div>

            <!-- Right Experience Timeline -->
            <div class="md:col-span-8 space-y-4 md:space-y-5">
              <h4 class="text-sm sm:text-base md:text-lg font-black text-gray-900 uppercase tracking-wider flex items-center gap-2">
                <i data-lucide="briefcase" class="w-5 h-5 text-pink-600"></i> Kinh Nghiệm Làm Việc &amp; Hoạt Động
              </h4>

              <!-- Job 1 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-pink-50/70 border border-pink-200/90 space-y-2 shadow-xs transition-all hover:border-pink-300">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <span class="font-black text-sm sm:text-base md:text-[1.05rem] text-gray-900 leading-snug">TRƯỜNG ĐẠI HỌC VĂN LANG – CTV TELE Tuyển sinh</span>
                  <span class="text-xs sm:text-sm font-bold text-pink-700 bg-white px-3 py-1 rounded-lg border border-pink-100 shadow-xs w-fit flex-shrink-0">06/2026 – 07/2026</span>
                </div>
                <p class="text-xs sm:text-sm md:text-[0.95rem] text-gray-700 leading-relaxed font-normal pt-0.5 text-justify">• Tư vấn tuyển sinh qua điện thoại (50 cuộc/ngày), phân loại và cập nhật hồ sơ thí sinh lên hệ thống CRM.</p>
              </div>

              <!-- Job 2 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-pink-50/70 border border-pink-200/90 space-y-2 shadow-xs transition-all hover:border-pink-300">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <span class="font-black text-sm sm:text-base md:text-[1.05rem] text-gray-900 leading-snug">ATOZ TRAVEL – TTS Truyền thông dự án đa phương tiện</span>
                  <span class="text-xs sm:text-sm font-bold text-pink-700 bg-white px-3 py-1 rounded-lg border border-pink-100 shadow-xs w-fit flex-shrink-0">03/2025 – 05/2025</span>
                </div>
                <p class="text-xs sm:text-sm md:text-[0.95rem] text-gray-700 leading-relaxed font-normal pt-0.5 text-justify">• Xây dựng chiến lược content, sản xuất video ngắn và truyền thông nội bộ. Đạt thành tựu <strong class="text-gray-900 font-bold">120K lượt xem</strong> (tăng trưởng 175%), tiếp cận ≈ 60K người dùng.</p>
                <div class="pt-1.5 flex items-center">
                  <a href="https://docs.google.com/spreadsheets/d/1bDtYDBPuQ2op-TI8iQnG9RPK2eaXbO3k/edit?usp=sharing&ouid=105355807124233674692&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-bold text-pink-700 hover:text-pink-900 hover:bg-pink-100/80 bg-white px-3 py-1 rounded-lg border border-pink-200 shadow-xs transition-all hover:scale-105"><i data-lucide="external-link" class="w-3.5 h-3.5 text-pink-600"></i> <span>Xem minh chứng</span></a>
                </div>
              </div>

              <!-- Events -->
              <div class="p-4 sm:p-5 rounded-2xl bg-pink-50/70 border border-pink-200/90 space-y-2 shadow-xs transition-all hover:border-pink-300">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <span class="font-black text-sm sm:text-base md:text-[1.05rem] text-gray-900 leading-snug">TRƯỜNG ĐẠI HỌC VĂN LANG – CTV Sự kiện</span>
                  <span class="text-xs sm:text-sm font-bold text-pink-700 bg-white px-3 py-1 rounded-lg border border-pink-100 shadow-xs w-fit flex-shrink-0">02/2024 – 12/2024</span>
                </div>
                <p class="text-xs sm:text-sm md:text-[0.95rem] text-gray-700 leading-relaxed font-normal pt-0.5 text-justify">• CTV Truyền thông &amp; Điều phối các chương trình: <em>"Trái Tim Đảo Nhỏ"</em>, <em>"The Chronicle Chapter VII"</em>, <em>"Ready To Love"</em>, Talkshow <em>"Số Phận"</em>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 4: Giấy phép & Chứng nhận (Certifications Card) -->
      <div class="deck-slide w-full h-full flex flex-col justify-between bg-white p-5 sm:p-7 md:p-8 relative overflow-hidden" data-slide="3">
        <div class="flex justify-between items-center px-2 mb-2 flex-shrink-0">
          <div>
            <span class="text-xs font-extrabold uppercase tracking-widest text-pink-600">MY CERTIFICATIONS</span>
            <h2 class="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 tracking-tight">Giấy phép &amp; Chứng nhận</h2>
          </div>
          <span class="text-xs sm:text-sm text-gray-500 font-medium max-w-sm hidden sm:block text-right">Chứng chỉ chuyên môn quốc tế &amp; Kỹ năng số</span>
        </div>

        <!-- Single Card White with Prominent Pink Border -->
        <div class="bg-white p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl border-2 border-pink-300 shadow-xl flex flex-col justify-between my-auto flex-grow max-h-[78%]">
          <div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3.5 sm:mb-4">
              <div class="flex items-center gap-3 sm:gap-3.5">
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-200 flex-shrink-0 shadow-xs">
                  <i data-lucide="award" class="w-4 h-4 sm:w-5 sm:h-5"></i>
                </div>
                <h3 class="text-base sm:text-lg md:text-xl font-black text-[#B8005A] tracking-normal uppercase">CHỨNG CHỈ ĐẠT ĐƯỢC</h3>
              </div>
              <span class="text-xs sm:text-sm font-bold text-pink-700 bg-pink-50 px-3 py-1 rounded-full w-fit border border-pink-100 shadow-xs">Th.05/2025 – Th.06/2025</span>
            </div>

            <ul class="space-y-2.5 sm:space-y-3 text-xs sm:text-sm md:text-base text-gray-800 leading-snug mb-4">
              <li class="flex items-start gap-2.5">
                <span class="text-pink-600 font-black text-base md:text-lg leading-none mt-0.5">•</span>
                <div>
                  <a href="https://www.coursera.org/account/accomplishments/verify/PSCHWMZJNX7L" target="_blank" rel="noopener noreferrer" class="font-extrabold text-gray-900 hover:text-[#B8005A] hover:underline underline-offset-2 transition-colors inline-flex items-center gap-1.5 group/link" title="Nhấp để xem chứng chỉ xác thực trên Coursera ↗">
                    <span>Foundations of Digital Marketing and E-commerce</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5 text-pink-500 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all"></i>
                  </a>
                </div>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-pink-600 font-black text-base md:text-lg leading-none mt-0.5">•</span>
                <div>
                  <a href="https://www.coursera.org/account/accomplishments/verify/BJG18WF4SV8E" target="_blank" rel="noopener noreferrer" class="font-extrabold text-gray-900 hover:text-[#B8005A] hover:underline underline-offset-2 transition-colors inline-flex items-center gap-1.5 group/link" title="Nhấp để xem chứng chỉ xác thực trên Coursera ↗">
                    <span>Create Informative Presentations with Microsoft PowerPoint</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5 text-pink-500 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all"></i>
                  </a>
                </div>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-pink-600 font-black text-base md:text-lg leading-none mt-0.5">•</span>
                <div>
                  <a href="https://www.coursera.org/account/accomplishments/verify/M8ZAPDD1TGSS" target="_blank" rel="noopener noreferrer" class="font-extrabold text-gray-900 hover:text-[#B8005A] hover:underline underline-offset-2 transition-colors inline-flex items-center gap-1.5 group/link" title="Nhấp để xem chứng chỉ xác thực trên Coursera ↗">
                    <span>AI Basics and Tools for Creativity</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5 text-pink-500 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all"></i>
                  </a>
                </div>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-pink-600 font-black text-base md:text-lg leading-none mt-0.5">•</span>
                <div>
                  <a href="https://www.coursera.org/account/accomplishments/verify/XAPXC0WBXSS9" target="_blank" rel="noopener noreferrer" class="font-extrabold text-gray-900 hover:text-[#B8005A] hover:underline underline-offset-2 transition-colors inline-flex items-center gap-1.5 group/link" title="Nhấp để xem chứng chỉ xác thực trên Coursera ↗">
                    <span>AI for Design and Optimization</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5 text-pink-500 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all"></i>
                  </a>
                </div>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-pink-600 font-black text-base md:text-lg leading-none mt-0.5">•</span>
                <div>
                  <a href="https://www.coursera.org/account/accomplishments/verify/8RJ25VY6CPDB" target="_blank" rel="noopener noreferrer" class="font-extrabold text-gray-900 hover:text-[#B8005A] hover:underline underline-offset-2 transition-colors inline-flex items-center gap-1.5 group/link" title="Nhấp để xem chứng chỉ xác thực trên Coursera ↗">
                    <span>AI For Everyone</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5 text-pink-500 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all"></i>
                  </a>
                </div>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-pink-600 font-black text-base md:text-lg leading-none mt-0.5">•</span>
                <div>
                  <a href="https://www.coursera.org/account/accomplishments/verify/PMPOB4O3BQKC" target="_blank" rel="noopener noreferrer" class="font-extrabold text-gray-900 hover:text-[#B8005A] hover:underline underline-offset-2 transition-colors inline-flex items-center gap-1.5 group/link" title="Nhấp để xem chứng chỉ xác thực trên Coursera ↗">
                    <span>GenAI for Everyone</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5 text-pink-500 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div class="flex flex-wrap gap-2 sm:gap-2.5 pt-3.5 border-t border-pink-100 text-xs sm:text-sm font-bold text-pink-700">
            <span class="px-3 py-1.5 bg-pink-50 rounded-xl border border-pink-200/80 shadow-xs">🎓 Digital Marketing &amp; E-commerce</span>
            <span class="px-3 py-1.5 bg-pink-50 rounded-xl border border-pink-200/80 shadow-xs">📊 MS PowerPoint</span>
            <span class="px-3 py-1.5 bg-pink-50 rounded-xl border border-pink-200/80 shadow-xs">🎨 AI Tools for Creativity</span>
            <span class="px-3 py-1.5 bg-pink-50 rounded-xl border border-pink-200/80 shadow-xs">🤖 AI &amp; GenAI for Everyone</span>
          </div>
        </div>
      </div>

      <!-- Slide 5: Năng lực chuyên môn (Skills Card) -->
      <div class="deck-slide w-full h-full flex flex-col justify-between bg-white p-5 sm:p-7 md:p-8 relative overflow-hidden" data-slide="4">
        <div class="flex justify-between items-center px-2 mb-2 flex-shrink-0">
          <div>
            <span class="text-xs font-extrabold uppercase tracking-widest text-pink-600">Professional skills</span>
            <h2 class="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 tracking-tight">Năng lực chuyên môn</h2>
          </div>
          <span class="text-xs sm:text-sm text-gray-500 font-medium max-w-sm hidden sm:block text-right">Từ Pre-production, Production, Post-production đến Digital Publishing.</span>
        </div>

        <!-- Single Card White with Prominent Pink Border (Fully Visible & Perfectly Centered) -->
        <div class="bg-white p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl border-2 border-pink-300 shadow-xl flex flex-col justify-between my-auto flex-grow max-h-[78%]">
          <div>
            <div class="flex items-center gap-3 sm:gap-3.5 mb-3.5 sm:mb-4">
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-200 flex-shrink-0 shadow-xs">
                <i data-lucide="sparkles" class="w-4 h-4 sm:w-5 sm:h-5"></i>
              </div>
              <h3 class="text-base sm:text-lg md:text-xl font-black text-[#B8005A] tracking-normal uppercase">KỸ NĂNG &amp; CÔNG CỤ HỖ TRỢ</h3>
            </div>
            <ul class="space-y-3 sm:space-y-3.5 text-xs sm:text-sm md:text-base text-gray-800 leading-snug mb-4">
              <li class="flex items-start gap-2.5">
                <span class="text-pink-600 font-black text-base md:text-lg leading-none mt-0.5">•</span>
                <div><strong class="font-black text-gray-900">Nhiếp ảnh | Quay phim | Dựng Phim :</strong> Level cơ bản</div>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-pink-600 font-black text-base md:text-lg leading-none mt-0.5">•</span>
                <div><strong class="font-black text-gray-900">Biết sử dụng các công cụ AI (AI video, AI hình ảnh, AI voice,...)</strong> trong sáng tạo nội dung.</div>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-pink-600 font-black text-base md:text-lg leading-none mt-0.5">•</span>
                <div><strong class="font-black text-gray-900">Sáng tạo nội dung:</strong> Viết kịch bản, Content.</div>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-pink-600 font-black text-base md:text-lg leading-none mt-0.5">•</span>
                <div><strong class="font-black text-gray-900">Sử dụng tốt các công cụ hỗ trợ:</strong> Google Workspace, Microsoft 365, Canva, Capcut.</div>
              </li>
            </ul>
          </div>
          <div class="flex flex-wrap gap-2 sm:gap-2.5 pt-3.5 border-t border-pink-100 text-xs sm:text-sm font-bold text-pink-700">
            <span class="px-3 py-1.5 bg-pink-50 rounded-xl border border-pink-200/80 shadow-xs">📷 Nhiếp Ảnh &amp; Quay Phim</span>
            <span class="px-3 py-1.5 bg-pink-50 rounded-xl border border-pink-200/80 shadow-xs">🤖 AI Video &amp; AI Voice</span>
            <span class="px-3 py-1.5 bg-pink-50 rounded-xl border border-pink-200/80 shadow-xs">📝 Viết Kịch Bản &amp; Content</span>
            <span class="px-3 py-1.5 bg-pink-50 rounded-xl border border-pink-200/80 shadow-xs">🛠️ Canva &amp; CapCut</span>
            <span class="px-3 py-1.5 bg-pink-50 rounded-xl border border-pink-200/80 shadow-xs">💼 Google Workspace &amp; MS 365</span>
          </div>
        </div>
      </div>

      <!-- Slide 6: Section Divider Projects -->
      <div class="deck-slide w-full h-full flex flex-col justify-between bg-white p-6 md:p-10 relative overflow-hidden" data-slide="5">
        <div class="flex justify-between items-center px-4">
          <span class="font-black text-[#B8005A] text-lg md:text-xl">Nga Anh Nguyen</span>
          <span class="font-black text-[#B8005A] text-lg md:text-xl">2026</span>
        </div>

        <div class="my-auto bg-[#B8005A] rounded-[36px] p-8 md:p-16 text-white relative shadow-2xl flex items-center justify-between min-h-[68%]">
          <div class="w-36 h-36 md:w-56 md:h-56">
            <img src="assets/images/flower.svg" class="w-full h-full object-contain flower-spin-slow" alt="Flower">
          </div>

          <div class="text-right max-w-xl">
            <div class="dot-grid-4x2 ml-auto mb-6">
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
            </div>
            <h2 class="text-4xl md:text-6xl font-black tracking-tight leading-tight uppercase">
              ABOUT<br>INDIVIDUAL<br>LEARNING<br>PROJECTS
            </h2>
            <span class="text-sm sm:text-base md:text-lg text-pink-100 font-bold tracking-wide mt-4 block">Các dự án đã thực hiện • Đồ án môn học</span>
          </div>
        </div>
      </div>

      <!-- Slide 7: Project - 1 (TVC Milo) -->
      <div class="deck-slide w-full h-full flex flex-col justify-between bg-white p-6 md:p-10 relative overflow-hidden" data-slide="6">
        <div class="flex justify-between items-center px-4">
          <span class="text-xs font-bold text-pink-600 uppercase">Project 1 / 9</span>
          <span class="font-bold text-[#B8005A] text-base md:text-lg">Nga Anh Nguyen • 2026</span>
        </div>

        <div class="my-auto bg-[#B8005A] rounded-[32px] md:rounded-[36px] p-6 md:p-8 lg:p-10 text-white relative shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between min-h-[64%] max-h-[72%]">
          <div class="absolute top-6 left-8 dot-grid-4x2">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>

          <div class="w-full md:w-1/2 pt-4 sm:pt-6">
            <h2 class="text-3xl md:text-4xl font-black tracking-tight mb-1.5">Project - 1</h2>
            <div class="inline-block px-5 py-1 border-2 border-white rounded-full text-xs font-bold uppercase mb-3">
              TVC Commercial
            </div>
            <h3 class="text-base md:text-lg font-black mb-2.5 uppercase tracking-wide min-h-[2.5rem] flex items-center leading-snug">TVC MILO</h3>
            
            <div class="space-y-1 text-xs text-pink-100 mb-4 bg-black/15 p-2.5 sm:p-3 rounded-xl border border-white/10 w-fit min-h-[52px] flex flex-col justify-center">
              <p><span class="text-pink-200 font-bold">Vai trò đảm nhiệm:</span> <span class="text-white font-semibold">Main Video Editor</span></p>
              <p><span class="text-pink-200 font-bold">Công cụ sử dụng:</span> <span class="text-white font-semibold">CapCut, Google Flow, Canva</span></p>
            </div>

            <button class="open-evidence-btn px-6 py-2.5 bg-white text-[#B8005A] hover:bg-pink-100 rounded-full font-extrabold text-xs shadow-lg transition-all flex items-center gap-2 hover:scale-105 cursor-pointer" data-project-id="project-1">
              <i data-lucide="play-circle" class="w-4 h-4"></i> Xem Video
            </button>
          </div>

          <div class="w-full md:w-1/2 relative flex justify-center open-evidence-btn cursor-pointer group/poster" data-project-id="project-1" title="Nhấp để xem Video">
            <div class="w-full max-w-sm aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover/poster:border-white transition-all transform group-hover/poster:scale-105 bg-black/40 flex items-center justify-center">
              <img src="assets/images/milo_cover.png" class="w-full h-full object-cover" alt="Milo Frames">
            </div>
            <div class="absolute -bottom-6 -left-6 w-20 h-20 pointer-events-none">
              <img src="assets/images/flower.svg" class="w-full h-full object-contain flower-spin-slow" alt="Flower">
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 8: Project - 2 (Talkshow Nhà Truyền Thông Học Tâm Lý) -->
      <div class="deck-slide w-full h-full flex flex-col justify-between bg-white p-6 md:p-10 relative overflow-hidden" data-slide="7">
        <div class="flex justify-between items-center px-4">
          <span class="text-xs font-bold text-pink-600 uppercase">Project 2 / 9</span>
          <span class="font-bold text-[#B8005A] text-base md:text-lg">Nga Anh Nguyen • 2026</span>
        </div>

        <div class="my-auto bg-[#B8005A] rounded-[32px] md:rounded-[36px] p-6 md:p-8 lg:p-10 text-white relative shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between min-h-[64%] max-h-[72%]">
          <div class="absolute top-6 left-8 dot-grid-4x2">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>

          <div class="w-full md:w-1/2 pt-4 sm:pt-6">
            <h2 class="text-3xl md:text-4xl font-black tracking-tight mb-1.5">Project - 2</h2>
            <div class="inline-block px-5 py-1 border-2 border-white rounded-full text-xs font-bold uppercase mb-3">
              TALKSHOW
            </div>
            <h3 class="text-base md:text-lg font-black mb-2.5 uppercase tracking-wide min-h-[2.5rem] flex items-center leading-snug">TALKSHOW NHÀ TRUYỀN THÔNG HỌC TÂM LÝ</h3>
            
            <div class="space-y-1 text-xs text-pink-100 mb-4 bg-black/15 p-2.5 sm:p-3 rounded-xl border border-white/10 w-fit min-h-[52px] flex flex-col justify-center">
              <p><span class="text-pink-200 font-bold">Vai trò đảm nhiệm:</span> <span class="text-white font-semibold">Main Video Editor, Cameraman</span></p>
              <p><span class="text-pink-200 font-bold">Công cụ sử dụng:</span> <span class="text-white font-semibold">CapCut Pro, CapCut, Canva</span></p>
            </div>

            <button class="open-evidence-btn px-6 py-2.5 bg-white text-[#B8005A] hover:bg-pink-100 rounded-full font-extrabold text-xs shadow-lg transition-all flex items-center gap-2 hover:scale-105 cursor-pointer" data-project-id="project-2">
              <i data-lucide="play-circle" class="w-4 h-4"></i> Xem Video
            </button>
          </div>

          <div class="w-full md:w-1/2 relative flex justify-center open-evidence-btn cursor-pointer group/poster" data-project-id="project-2" title="Nhấp để xem Video">
            <div class="w-full max-w-sm aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover/poster:border-white transition-all transform group-hover/poster:scale-105 bg-black/40 flex items-center justify-center">
              <img src="assets/images/talkshow_cover.png" class="w-full h-full object-cover" alt="Talkshow Poster">
            </div>
            <div class="absolute -bottom-6 -right-6 w-20 h-20 pointer-events-none">
              <img src="assets/images/flower.svg" class="w-full h-full object-contain flower-spin-slow" alt="Flower">
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 9: Project - 3 (Documentary Hát Bội) -->
      <div class="deck-slide w-full h-full flex flex-col justify-between bg-white p-6 md:p-10 relative overflow-hidden" data-slide="8">
        <div class="flex justify-between items-center px-4">
          <span class="text-xs font-bold text-pink-600 uppercase">Project 3 / 9</span>
          <span class="font-bold text-[#B8005A] text-base md:text-lg">Nga Anh Nguyen • 2026</span>
        </div>

        <div class="my-auto bg-[#B8005A] rounded-[32px] md:rounded-[36px] p-6 md:p-8 lg:p-10 text-white relative shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between min-h-[64%] max-h-[72%]">
          <div class="absolute top-6 left-8 dot-grid-4x2">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>

          <div class="w-full md:w-1/2 pt-4 sm:pt-6">
            <h2 class="text-3xl md:text-4xl font-black tracking-tight mb-1.5">Project - 3</h2>
            <div class="inline-block px-5 py-1 border-2 border-white rounded-full text-xs font-bold uppercase mb-3">
              DOCUMENTARY
            </div>
            <h3 class="text-base md:text-lg font-black mb-2.5 uppercase tracking-wide min-h-[2.5rem] flex items-center leading-snug">PHIM TÀI LIỆU: KHÁM PHÁ NGHỆ THUẬT HÁT BỘI</h3>
            
            <div class="space-y-1 text-xs text-pink-100 mb-4 bg-black/15 p-2.5 sm:p-3 rounded-xl border border-white/10 w-fit min-h-[52px] flex flex-col justify-center">
              <p><span class="text-pink-200 font-bold">Vai trò đảm nhiệm:</span> <span class="text-white font-semibold">Lead Video Editor</span></p>
              <p><span class="text-pink-200 font-bold">Công cụ sử dụng:</span> <span class="text-white font-semibold">CapCut Pro, CapCut</span></p>
            </div>

            <button class="open-evidence-btn px-6 py-2.5 bg-white text-[#B8005A] hover:bg-pink-100 rounded-full font-extrabold text-xs shadow-lg transition-all flex items-center gap-2 hover:scale-105 cursor-pointer" data-project-id="project-3">
              <i data-lucide="play-circle" class="w-4 h-4"></i> Xem Video
            </button>
          </div>

          <div class="w-full md:w-1/2 relative flex justify-center open-evidence-btn cursor-pointer group/poster" data-project-id="project-3" title="Nhấp để xem Video">
            <div class="w-full max-w-sm aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover/poster:border-white transition-all transform group-hover/poster:scale-105 bg-black/40 flex items-center justify-center">
              <img src="assets/images/hat_boi_cover.jpg" class="w-full h-full object-cover" alt="Documentary Poster">
            </div>
            <div class="absolute -bottom-6 -left-6 w-20 h-20 pointer-events-none">
              <img src="assets/images/flower.svg" class="w-full h-full object-contain flower-spin-slow" alt="Flower">
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 10: Project - 4 (Interview Canton Fair 137 - 2025) -->
      <div class="deck-slide w-full h-full flex flex-col justify-between bg-white p-6 md:p-10 relative overflow-hidden" data-slide="9">
        <div class="flex justify-between items-center px-4">
          <span class="text-xs font-bold text-pink-600 uppercase">Project 4 / 9</span>
          <span class="font-bold text-[#B8005A] text-base md:text-lg">Nga Anh Nguyen • 2026</span>
        </div>

        <div class="my-auto bg-[#B8005A] rounded-[32px] md:rounded-[36px] p-6 md:p-8 lg:p-10 text-white relative shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between min-h-[64%] max-h-[72%]">
          <div class="absolute top-6 left-8 dot-grid-4x2">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>

          <div class="w-full md:w-1/2 pt-4 sm:pt-6">
            <h2 class="text-3xl md:text-4xl font-black tracking-tight mb-1.5">Project - 4</h2>
            <div class="inline-block px-5 py-1 border-2 border-white rounded-full text-xs font-bold uppercase mb-3">
              INTERVIEW
            </div>
            <h3 class="text-base md:text-lg font-black mb-2.5 uppercase tracking-wide min-h-[2.5rem] flex items-center leading-snug line-clamp-2">INTERVIEW: PHỎNG VẤN KHÁCH HÀNG CANTON FAIR 137</h3>
            
            <div class="space-y-1 text-xs text-pink-100 mb-4 bg-black/15 p-2.5 sm:p-3 rounded-xl border border-white/10 w-fit min-h-[52px] flex flex-col justify-center">
              <p><span class="text-pink-200 font-bold">Vai trò đảm nhiệm:</span> <span class="text-white font-semibold">Main Video Editor</span></p>
              <p><span class="text-pink-200 font-bold">Công cụ sử dụng:</span> <span class="text-white font-semibold">CapCut Pro, CapCut, Canva</span></p>
            </div>

            <button class="open-evidence-btn px-6 py-2.5 bg-white text-[#B8005A] hover:bg-pink-100 rounded-full font-extrabold text-xs shadow-lg transition-all flex items-center gap-2 hover:scale-105 cursor-pointer" data-project-id="project-4">
              <i data-lucide="play-circle" class="w-4 h-4"></i> Xem Video
            </button>
          </div>

          <div class="w-full md:w-1/2 relative flex justify-center open-evidence-btn cursor-pointer group/poster" data-project-id="project-4" title="Nhấp để xem Video">
            <div class="w-full max-w-sm aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover/poster:border-white transition-all transform group-hover/poster:scale-105 bg-black/40 flex items-center justify-center">
              <img src="assets/images/canton_fair_cover.jpg" class="w-full h-full object-cover" alt="Interview Canton Fair Poster">
            </div>
            <div class="absolute -bottom-6 -right-6 w-20 h-20 pointer-events-none">
              <img src="assets/images/flower.svg" class="w-full h-full object-contain flower-spin-slow" alt="Flower">
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 11: Project - 5 (MV Hẹn Lần Sau - 2026) -->
      <div class="deck-slide w-full h-full flex flex-col justify-between bg-white p-6 md:p-10 relative overflow-hidden" data-slide="10">
        <div class="flex justify-between items-center px-4">
          <span class="text-xs font-bold text-pink-600 uppercase">Project 5 / 9</span>
          <span class="font-bold text-[#B8005A] text-base md:text-lg">Nga Anh Nguyen • 2026</span>
        </div>

        <div class="my-auto bg-[#B8005A] rounded-[32px] md:rounded-[36px] p-6 md:p-8 lg:p-10 text-white relative shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between min-h-[64%] max-h-[72%]">
          <div class="absolute top-6 left-8 dot-grid-4x2">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>

          <div class="w-full md:w-1/2 pt-4 sm:pt-6">
            <h2 class="text-3xl md:text-4xl font-black tracking-tight mb-1.5">Project - 5</h2>
            <div class="inline-block px-5 py-1 border-2 border-white rounded-full text-xs font-bold uppercase mb-3">
              MV
            </div>
            <h3 class="text-base md:text-lg font-black mb-2.5 uppercase tracking-wide min-h-[2.5rem] flex items-center leading-snug">MV REMAKE “HẸN LẦN SAU”</h3>
            
            <div class="space-y-1 text-xs text-pink-100 mb-4 bg-black/15 p-2.5 sm:p-3 rounded-xl border border-white/10 w-fit min-h-[52px] flex flex-col justify-center">
              <p><span class="text-pink-200 font-bold">Vai trò đảm nhiệm:</span> <span class="text-white font-semibold">Lead Video Editor &amp; Colorist</span></p>
              <p><span class="text-pink-200 font-bold">Công cụ sử dụng:</span> <span class="text-white font-semibold">CapCut Pro, CapCut, Canva</span></p>
            </div>

            <button class="open-evidence-btn px-6 py-2.5 bg-white text-[#B8005A] hover:bg-pink-100 rounded-full font-extrabold text-xs shadow-lg transition-all flex items-center gap-2 hover:scale-105 cursor-pointer" data-project-id="project-5">
              <i data-lucide="play-circle" class="w-4 h-4"></i> Xem Video
            </button>
          </div>

          <div class="w-full md:w-1/2 relative flex justify-center open-evidence-btn cursor-pointer group/poster" data-project-id="project-5" title="Nhấp để xem Video">
            <div class="w-full max-w-sm aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover/poster:border-white transition-all transform group-hover/poster:scale-105 bg-black/40 flex items-center justify-center">
              <img src="assets/images/hen_lan_sau_cover.jpg" class="w-full h-full object-cover" alt="MV Frames">
            </div>
            <div class="absolute -bottom-6 -left-6 w-20 h-20 pointer-events-none">
              <img src="assets/images/flower.svg" class="w-full h-full object-contain flower-spin-slow" alt="Flower">
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 12: Project - 6 (Talkshow Góc Nhìn Sáng Tạo - 2026) -->
      <div class="deck-slide w-full h-full flex flex-col justify-between bg-white p-6 md:p-10 relative overflow-hidden" data-slide="11">
        <div class="flex justify-between items-center px-4">
          <span class="text-xs font-bold text-pink-600 uppercase">Project 6 / 9</span>
          <span class="font-bold text-[#B8005A] text-base md:text-lg">Nga Anh Nguyen • 2026</span>
        </div>

        <div class="my-auto bg-[#B8005A] rounded-[32px] md:rounded-[36px] p-6 md:p-8 lg:p-10 text-white relative shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between min-h-[64%] max-h-[72%]">
          <div class="absolute top-6 left-8 dot-grid-4x2">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>

          <div class="w-full md:w-1/2 pt-4 sm:pt-6">
            <h2 class="text-3xl md:text-4xl font-black tracking-tight mb-1.5">Project - 6</h2>
            <div class="inline-block px-5 py-1 border-2 border-white rounded-full text-xs font-bold uppercase mb-3">
              TALKSHOW
            </div>
            <h3 class="text-base md:text-lg font-black mb-2.5 uppercase tracking-wide min-h-[2.5rem] flex items-center leading-snug">TALKSHOW: GÓC NHÌN SÁNG TẠO</h3>
            
            <div class="space-y-1 text-xs text-pink-100 mb-4 bg-black/15 p-2.5 sm:p-3 rounded-xl border border-white/10 w-fit min-h-[52px] flex flex-col justify-center">
              <p><span class="text-pink-200 font-bold">Vai trò đảm nhiệm:</span> <span class="text-white font-semibold">Lead Video Editor &amp; Colorist</span></p>
              <p><span class="text-pink-200 font-bold">Công cụ sử dụng:</span> <span class="text-white font-semibold">CapCut Pro, CapCut, Google Flow, Canva</span></p>
            </div>

            <button class="open-evidence-btn px-6 py-2.5 bg-white text-[#B8005A] hover:bg-pink-100 rounded-full font-extrabold text-xs shadow-lg transition-all flex items-center gap-2 hover:scale-105 cursor-pointer" data-project-id="project-6">
              <i data-lucide="play-circle" class="w-4 h-4"></i> Xem Video
            </button>
          </div>

          <div class="w-full md:w-1/2 relative flex justify-center open-evidence-btn cursor-pointer group/poster" data-project-id="project-6" title="Nhấp để xem Video">
            <div class="w-full max-w-sm aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover/poster:border-white transition-all transform group-hover/poster:scale-105 bg-black/40 flex items-center justify-center">
              <img src="assets/images/goc_nhin_sang_tao_cover.png" class="w-full h-full object-cover" alt="Talkshow Poster">
            </div>
            <div class="absolute -bottom-6 -right-6 w-20 h-20 pointer-events-none">
              <img src="assets/images/flower.svg" class="w-full h-full object-contain flower-spin-slow" alt="Flower">
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 13: Project - 7 (Interview Bất Động Sản - 2026) -->
      <div class="deck-slide w-full h-full flex flex-col justify-between bg-white p-6 md:p-10 relative overflow-hidden" data-slide="12">
        <div class="flex justify-between items-center px-4">
          <span class="text-xs font-bold text-pink-600 uppercase">Project 7 / 9</span>
          <span class="font-bold text-[#B8005A] text-base md:text-lg">Nga Anh Nguyen • 2026</span>
        </div>

        <div class="my-auto bg-[#B8005A] rounded-[32px] md:rounded-[36px] p-6 md:p-8 lg:p-10 text-white relative shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between min-h-[64%] max-h-[72%]">
          <div class="absolute top-6 left-8 dot-grid-4x2">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>

          <div class="w-full md:w-1/2 pt-4 sm:pt-6">
            <h2 class="text-3xl md:text-4xl font-black tracking-tight mb-1.5">Project - 7</h2>
            <div class="inline-block px-5 py-1 border-2 border-white rounded-full text-xs font-bold uppercase mb-3">
              INTERVIEW
            </div>
            <h3 class="text-base md:text-lg font-black mb-2.5 uppercase tracking-wide min-h-[2.5rem] flex items-center leading-snug line-clamp-2">INTERVIEW: BẠN CÓ QUAN TÂM VỀ BẤT ĐỘNG SẢN?</h3>
            
            <div class="space-y-1 text-xs text-pink-100 mb-4 bg-black/15 p-2.5 sm:p-3 rounded-xl border border-white/10 w-fit min-h-[52px] flex flex-col justify-center">
              <p><span class="text-pink-200 font-bold">Vai trò đảm nhiệm:</span> <span class="text-white font-semibold">Main Video Editor, Cameraman</span></p>
              <p><span class="text-pink-200 font-bold">Công cụ sử dụng:</span> <span class="text-white font-semibold">CapCut, Canva</span></p>
            </div>

            <button class="open-evidence-btn px-6 py-2.5 bg-white text-[#B8005A] hover:bg-pink-100 rounded-full font-extrabold text-xs shadow-lg transition-all flex items-center gap-2 hover:scale-105 cursor-pointer" data-project-id="project-7">
              <i data-lucide="play-circle" class="w-4 h-4"></i> Xem Video
            </button>
          </div>

          <div class="w-full md:w-1/2 relative flex justify-center open-evidence-btn cursor-pointer group/poster" data-project-id="project-7" title="Nhấp để xem Video">
            <div class="w-full max-w-sm aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover/poster:border-white transition-all transform group-hover/poster:scale-105 bg-black/40 flex items-center justify-center">
              <img src="assets/images/real_estate_interview_cover.png" class="w-full h-full object-cover" alt="Interview Real Estate Poster">
            </div>
            <div class="absolute -bottom-6 -left-6 w-20 h-20 pointer-events-none">
              <img src="assets/images/flower.svg" class="w-full h-full object-contain flower-spin-slow" alt="Flower">
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 14: Project - 8 (Interview Chuyện Nghề Truyền Thông - 2026) -->
      <div class="deck-slide w-full h-full flex flex-col justify-between bg-white p-6 md:p-10 relative overflow-hidden" data-slide="13">
        <div class="flex justify-between items-center px-4">
          <span class="text-xs font-bold text-pink-600 uppercase">Project 8 / 9</span>
          <span class="font-bold text-[#B8005A] text-base md:text-lg">Nga Anh Nguyen • 2026</span>
        </div>

        <div class="my-auto bg-[#B8005A] rounded-[32px] md:rounded-[36px] p-6 md:p-8 lg:p-10 text-white relative shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between min-h-[64%] max-h-[72%]">
          <div class="absolute top-6 left-8 dot-grid-4x2">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>

          <div class="w-full md:w-1/2 pt-4 sm:pt-6">
            <h2 class="text-3xl md:text-4xl font-black tracking-tight mb-1.5">Project - 8</h2>
            <div class="inline-block px-5 py-1 border-2 border-white rounded-full text-xs font-bold uppercase mb-3">
              INTERVIEW
            </div>
            <h3 class="text-base md:text-lg font-black mb-2.5 uppercase tracking-wide min-h-[2.5rem] flex items-center leading-snug line-clamp-2">INTERVIEW: PHỎNG VẤN KHÁCH HÀNG MỤC TIÊU (LITTLE SPOON)</h3>
            
            <div class="space-y-1 text-xs text-pink-100 mb-4 bg-black/15 p-2.5 sm:p-3 rounded-xl border border-white/10 w-fit min-h-[52px] flex flex-col justify-center">
              <p><span class="text-pink-200 font-bold">Vai trò đảm nhiệm:</span> <span class="text-white font-semibold">Lead Video Editor &amp; Content Producer, Cameraman</span></p>
              <p><span class="text-pink-200 font-bold">Công cụ sử dụng:</span> <span class="text-white font-semibold">CapCut, Canva</span></p>
            </div>

            <button class="open-evidence-btn px-6 py-2.5 bg-white text-[#B8005A] hover:bg-pink-100 rounded-full font-extrabold text-xs shadow-lg transition-all flex items-center gap-2 hover:scale-105 cursor-pointer" data-project-id="project-8">
              <i data-lucide="play-circle" class="w-4 h-4"></i> Xem Video
            </button>
          </div>

          <div class="w-full md:w-1/2 relative flex justify-center open-evidence-btn cursor-pointer group/poster" data-project-id="project-8" title="Nhấp để xem Video">
            <div class="w-full max-w-sm aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover/poster:border-white transition-all transform group-hover/poster:scale-105 bg-black/40 flex items-center justify-center">
              <img src="assets/images/little_spoon_interview_cover.jpg" class="w-full h-full object-cover" alt="Interview Little Spoon Poster">
            </div>
            <div class="absolute -bottom-6 -right-6 w-20 h-20 pointer-events-none">
              <img src="assets/images/flower.svg" class="w-full h-full object-contain flower-spin-slow" alt="Flower">
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 15: Project - 9 (Startup Little Spoon - 2026) -->
      <div class="deck-slide w-full h-full flex flex-col justify-between bg-white p-6 md:p-10 relative overflow-hidden" data-slide="14">
        <div class="flex justify-between items-center px-4">
          <span class="text-xs font-bold text-pink-600 uppercase">Project 9 / 9</span>
          <span class="font-bold text-[#B8005A] text-base md:text-lg">Nga Anh Nguyen • 2026</span>
        </div>

        <div class="my-auto bg-[#B8005A] rounded-[32px] md:rounded-[36px] p-6 md:p-8 lg:p-10 text-white relative shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between min-h-[64%] max-h-[72%]">
          <div class="absolute top-6 left-8 dot-grid-4x2">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>

          <div class="w-full md:w-1/2 pt-4 sm:pt-6">
            <h2 class="text-3xl md:text-4xl font-black tracking-tight mb-1.5">Project - 9</h2>
            <div class="inline-block px-5 py-1 border-2 border-white rounded-full text-xs font-bold uppercase mb-3">
              STARTUP PROJECT
            </div>
            <h3 class="text-base md:text-lg font-black mb-2.5 uppercase tracking-wide min-h-[2.5rem] flex items-center leading-snug">“LITTLE SPOON” - F&amp;B STARTUP PROJECT</h3>
            
            <div class="space-y-1 text-xs text-pink-100 mb-4 bg-black/15 p-2.5 sm:p-3 rounded-xl border border-white/10 w-fit min-h-[52px] flex flex-col justify-center">
              <p><span class="text-pink-200 font-bold">Vai trò đảm nhiệm:</span> <span class="text-white font-semibold">Media &amp; Product Lead / UI-UX Designer</span></p>
              <p><span class="text-pink-200 font-bold">Công cụ sử dụng:</span> <span class="text-white font-semibold">Zalo Mini App Platform, Antigravity, Canva</span></p>
            </div>

            <button class="open-evidence-btn px-6 py-2.5 bg-white text-[#B8005A] hover:bg-pink-100 rounded-full font-extrabold text-xs shadow-lg transition-all flex items-center gap-2 hover:scale-105 cursor-pointer" data-project-id="project-9">
              <i data-lucide="smartphone" class="w-4 h-4"></i> Xem App Mô Phỏng
            </button>
          </div>

          <div class="w-full md:w-1/2 relative flex justify-center open-evidence-btn cursor-pointer group/poster" data-project-id="project-9" title="Nhấp để xem App Mô Phỏng">
            <div class="w-full max-w-sm aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover/poster:border-white transition-all transform group-hover/poster:scale-105 bg-black/40 flex items-center justify-center">
              <img src="assets/images/little_spoon_cover.png" class="w-full h-full object-cover" alt="Little Spoon App">
            </div>
            <div class="absolute -bottom-6 -left-6 w-20 h-20 pointer-events-none">
              <img src="assets/images/flower.svg" class="w-full h-full object-contain flower-spin-slow" alt="Flower">
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 16: Contact Me (Kết Nối & Hợp Tác) -->
      <div class="deck-slide w-full h-full flex flex-col justify-between bg-white p-6 md:p-8 lg:p-10 relative overflow-hidden" data-slide="15">
        <div class="flex justify-between items-center px-4 flex-shrink-0">
          <span class="font-black text-[#B8005A] text-base md:text-xl">Nga Anh Nguyen</span>
          <span class="font-black text-[#B8005A] text-base md:text-xl">2026</span>
        </div>

        <div class="my-auto bg-[#B8005A] rounded-[32px] md:rounded-[36px] p-6 sm:p-8 md:p-10 lg:p-12 text-white relative shadow-2xl flex items-center justify-between min-h-[66%] max-h-[72%] flex-shrink-0">
          <div class="space-y-4 sm:space-y-5 text-left pl-2 sm:pl-3">
            <div>
              <h2 class="text-4xl md:text-6xl font-black tracking-tight mb-1">Contact Me</h2>
              <div class="font-script text-5xl md:text-7xl text-pink-200 font-bold -rotate-2 leading-none mb-3">
                Let's Work Together!
              </div>
            </div>

            <div class="space-y-3 sm:space-y-3.5 md:space-y-4 text-xs sm:text-sm md:text-base pt-1 font-semibold">
              <div class="flex items-center gap-3.5 sm:gap-4 group cursor-pointer transition-all hover:translate-x-1" onclick="copyContactInfo('0962468650', 'Đã sao chép số điện thoại!')" title="Nhấp để sao chép số điện thoại">
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#B8005A] flex items-center justify-center font-bold shadow group-hover:scale-110 transition-transform flex-shrink-0">
                  <i data-lucide="phone" class="w-4.5 h-4.5 sm:w-5 sm:h-5"></i>
                </div>
                <span class="group-hover:underline group-hover:text-pink-100 transition-colors">0962468650</span>
              </div>

              <div class="flex items-center gap-3.5 sm:gap-4 group cursor-pointer transition-all hover:translate-x-1" onclick="copyContactInfo('nguyenngaanh6704@gmail.com', 'Đã sao chép email!')" title="Nhấp để sao chép email">
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#B8005A] flex items-center justify-center font-bold shadow group-hover:scale-110 transition-transform flex-shrink-0">
                  <i data-lucide="mail" class="w-4.5 h-4.5 sm:w-5 sm:h-5"></i>
                </div>
                <span class="group-hover:underline group-hover:text-pink-100 transition-colors break-all">nguyenngaanh6704@gmail.com</span>
              </div>

              <div class="flex items-center gap-3.5 sm:gap-4">
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#B8005A] flex items-center justify-center font-bold shadow flex-shrink-0">
                  <i data-lucide="map-pin" class="w-4.5 h-4.5 sm:w-5 sm:h-5"></i>
                </div>
                <span>TP. Hồ Chí Minh, Việt Nam</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center justify-center mr-4 sm:mr-6 md:mr-8 space-y-2 sm:space-y-3 flex-shrink-0">
            <!-- Flower on Top -->
            <div class="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 flex items-center justify-center">
              <img src="assets/images/flower.svg" class="w-full h-full object-contain flower-spin-slow flower-glow" alt="Flower">
            </div>

            <!-- Signature sized to match email address prominence -->
            <div class="select-none text-center pt-1">
              <span class="font-signature text-2xl sm:text-3xl md:text-4xl text-pink-100 block whitespace-nowrap drop-shadow-md tracking-wide">
                Nguyễn Nga Anh
              </span>
            </div>
          </div>
        </div>

        <!-- Footer Dock -->
        <div class="bg-[#B8005A] text-white rounded-2xl px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-lg flex-shrink-0">
          <div class="flex items-center gap-3 sm:gap-4">
            <i data-lucide="menu" class="w-4.5 h-4.5 sm:w-5 sm:h-5"></i>
            <div class="bg-white/20 px-3.5 sm:px-4 py-1.5 rounded-full flex items-center gap-2 text-xs w-48 sm:w-64 border border-white/30">
              <i data-lucide="search" class="w-3.5 h-3.5"></i>
              <span class="opacity-80 truncate">ngaanhnguyen-portfolio</span>
              <i data-lucide="mic" class="w-3.5 h-3.5 ml-auto"></i>
            </div>
          </div>
          <div class="flex items-center gap-2.5 sm:gap-3 text-xs">
            <i data-lucide="wifi" class="w-3.5 h-3.5 sm:w-4 sm:h-4"></i>
            <i data-lucide="volume-2" class="w-3.5 h-3.5 sm:w-4 sm:h-4"></i>
            <i data-lucide="battery" class="w-4 h-4 sm:w-5 sm:h-5"></i>
          </div>
        </div>
      </div>
    `;

    // Bind Evidence Buttons inside Slides
    this.slidesWrapper.querySelectorAll('.open-evidence-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pId = btn.dataset.projectId;
        if (this.evidenceModal) {
          this.evidenceModal.open(pId);
        }
      });
    });
  }
}

window.DeckModeController = DeckModeController;