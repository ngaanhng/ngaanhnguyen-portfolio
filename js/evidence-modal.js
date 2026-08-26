/**
 * Evidence Modal Module - Deep Dive Evidence & Proof of Work
 */

class EvidenceModal {
  constructor() {
    this.modalEl = document.getElementById('evidence-modal');
    this.modalContent = document.getElementById('evidence-modal-content');
    this.currentProject = null;
    this.bindGlobalEvents();
  }

  bindGlobalEvents() {
    if (!this.modalEl) return;
    
    // Close on overlay click, Esc, or any close trigger button
    this.modalEl.addEventListener('click', (e) => {
      if (e.target === this.modalEl || e.target.closest('#modal-close-btn') || e.target.closest('.modal-close-trigger')) {
        this.close();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modalEl.classList.contains('hidden')) {
        this.close();
      }
    });
  }

  open(projectId) {
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project) return;
    this.currentProject = project;
    this.render();
    this.modalEl.classList.remove('hidden');
    if (this.modalContent) this.modalContent.scrollTop = 0;
    document.body.classList.add('overflow-hidden');
  }

  close() {
    this.modalEl.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');

    // 1. Immediately pause and reset all HTML5 video & audio elements
    const mediaElements = this.modalEl.querySelectorAll('video, audio');
    mediaElements.forEach(media => {
      try {
        media.pause();
        media.currentTime = 0;
        media.src = '';
        media.load();
      } catch (err) {}
    });

    // 2. Stop all embedded iframes (Google Drive streams, Web simulation) to cut audio instantly
    const iframes = this.modalEl.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      try {
        iframe.src = 'about:blank';
      } catch (err) {}
    });

    // 3. Completely empty modal inner content to release all audio/video streaming connections
    if (this.modalContent) {
      this.modalContent.innerHTML = '';
    }

    this.currentProject = null;
  }

  render() {
    const p = this.currentProject;

    this.modalContent.innerHTML = `
      <!-- Modal Top Header Bar (Clean, spacious, with 3 Badges and (X) centered along the blue line) -->
      <div class="py-5 sm:py-6 px-6 sm:px-10 bg-gradient-to-r from-pink-700 via-rose-700 to-pink-900 text-white rounded-t-3xl relative overflow-hidden flex items-center justify-between shadow-md">
        <!-- Dot matrix motif -->
        <div class="absolute -right-6 -bottom-6 w-36 h-36 dot-matrix-white opacity-20 pointer-events-none"></div>

        <!-- Left spacer for exact mathematical centering -->
        <div class="w-10 h-10 hidden sm:block pointer-events-none flex-shrink-0"></div>

        <!-- 3 Badges: Exactly on the blue line (vertically & horizontally centered with equal top & bottom padding) -->
        <div class="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mx-auto text-center pr-10 sm:pr-0 z-10">
          <span class="px-5 py-2 bg-white/25 backdrop-blur-md rounded-full text-xs sm:text-sm md:text-base font-black uppercase tracking-wider text-white border border-white/30 shadow-md">
            ${p.category}
          </span>
          <span class="px-5 py-2 bg-black/30 backdrop-blur-md rounded-full text-xs sm:text-sm md:text-base font-bold text-pink-100 border border-white/20 shadow-md">
            ${p.course}
          </span>
          <span class="px-5 py-2 bg-amber-400/30 backdrop-blur-md text-amber-200 rounded-full text-xs sm:text-sm md:text-base font-black border border-amber-300/40 shadow-md">
            ${p.year}
          </span>
        </div>

        <!-- Floating Close Button (X) vertically centered on the exact same axis -->
        <button class="modal-close-trigger p-2.5 sm:p-3 bg-black/40 hover:bg-black/80 backdrop-blur-md rounded-full transition-all text-white border border-white/20 shadow-lg cursor-pointer flex items-center justify-center group hover:scale-105 z-20 flex-shrink-0" title="Đóng cửa sổ">
          <i data-lucide="x" class="w-5 h-5 sm:w-5.5 sm:h-5.5 group-hover:rotate-90 transition-transform duration-200"></i>
        </button>
      </div>

      <!-- Main Content Showcase Area (Unified scroll container) -->
      <div class="p-6 md:p-8 bg-white space-y-6">
        <!-- Project Title & Role/Tool Summary Card -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-pink-100">
          <div>
            <h2 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${p.title}</h2>
          </div>
          <div class="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
            <div class="flex items-center gap-1.5 bg-pink-50 text-[#B8005A] px-3.5 py-1.5 rounded-xl font-bold border border-pink-100">
              <span class="text-gray-600">Vai trò:</span>
              <span class="text-[#B8005A] font-extrabold">${p.role}</span>
            </div>
            <div class="flex items-center gap-1">
              ${p.software.map(s => `
                <span class="px-2.5 py-1 bg-gray-100 text-gray-800 rounded-lg text-xs font-semibold border border-gray-200">${s}</span>
              `).join('')}
            </div>
          </div>
        </div>
        ${p.liveAppUrl ? `
          <!-- Live Interactive Web / App Simulation Container -->
          <div class="rounded-2xl overflow-hidden shadow-2xl border-2 border-pink-200 bg-white">
            <!-- Simulation Top Control Bar -->
            <div class="bg-gray-900 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-2 border-b border-gray-800">
              <div class="flex items-center gap-2 text-xs">
                <span class="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                <span class="ml-2 font-mono text-pink-300 font-bold hidden sm:inline">${p.liveAppUrl.replace('https://', '').replace('/', '')}</span>
              </div>

              <div class="flex items-center gap-2">
                <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded-md text-[11px] font-bold flex items-center gap-1 border border-emerald-500/30">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Live Interactive Demo
                </span>
                <a href="${p.liveAppUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1 bg-[#B8005A] hover:bg-pink-700 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm">
                  <span>Mở tab mới</span>
                  <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                </a>
              </div>
            </div>

            <!-- Live Iframe Simulation Frame -->
            <div class="w-full h-[600px] sm:h-[680px] md:h-[740px] bg-slate-100 relative">
              <iframe 
                src="${p.liveAppUrl}" 
                class="w-full h-full border-0" 
                title="${p.title}"
                loading="lazy"
                allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media">
              </iframe>
            </div>
          </div>
        ` : (p.videos && p.videos.length ? `
          <!-- Multiple Video Showcase Containers (TVC 1 & TVC 2) -->
          <div class="space-y-8">
            ${p.videos.map((vid, vIdx) => `
              <div class="space-y-3 bg-pink-50/20 p-4 sm:p-5 rounded-3xl border border-pink-100 shadow-sm">
                <div class="flex items-center gap-3">
                  <span class="px-4 py-1.5 bg-[#B8005A] text-white rounded-xl text-xs font-black tracking-widest uppercase shadow-md flex items-center gap-1.5">
                    <i data-lucide="video" class="w-4 h-4"></i> ${vid.label || `TVC ${vIdx + 1}`}
                  </span>
                  <h3 class="text-sm sm:text-base font-extrabold text-gray-900">${vid.title}</h3>
                </div>
                <div id="modal-video-player-container-${vIdx}" class="rounded-2xl overflow-hidden shadow-xl border-2 border-pink-100"></div>
              </div>
            `).join('')}
          </div>
        ` : `
          <!-- Interactive Video Player Container -->
          <div id="modal-video-player-container" class="rounded-2xl overflow-hidden shadow-2xl border-2 border-pink-100"></div>
        `)}

        <!-- Project Highlights & Technical Details -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-pink-50/50 rounded-2xl border border-pink-100 space-y-2">
            <h4 class="font-bold text-gray-900 text-sm flex items-center gap-2">
              <i data-lucide="sparkles" class="w-4 h-4 text-pink-600"></i> Mục tiêu kỹ thuật &amp; Kế hoạch dự án
            </h4>
            <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">${p.shortDesc}</p>
          </div>

          <div class="p-5 bg-pink-50/50 rounded-2xl border border-pink-100 space-y-2">
            <h4 class="font-bold text-gray-900 text-sm flex items-center gap-2">
              <i data-lucide="${p.liveAppUrl ? 'smartphone' : 'headphones'}" class="w-4 h-4 text-pink-600"></i> 
              ${p.liveAppUrl ? 'Tính năng Zalo OA Mini App' : 'Thiết kế âm thanh &amp; Xử lý thoại'}
            </h4>
            <ul class="space-y-1.5 text-xs text-gray-600">
              ${p.miniApp ? p.miniApp.features.map(f => `
                <li><strong class="text-pink-900 font-bold">${f.name}:</strong> ${f.desc}</li>
              `).join('') : (p.audioDesign ? p.audioDesign.details.map(d => `
                <li><strong class="text-gray-800">${d.label}:</strong> ${d.desc}</li>
              `).join('') : '<li>Tối ưu trải nghiệm chuyển đổi số người dùng.</li>')}
            </ul>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) lucide.createIcons();
    if (!p.liveAppUrl) {
      this.initVideoPlayer();
    }
  }

  initVideoPlayer() {
    const p = this.currentProject;
    if (p && p.videos && p.videos.length && window.RetroVideoPlayer) {
      p.videos.forEach((vid, vIdx) => {
        new RetroVideoPlayer(`modal-video-player-container-${vIdx}`, {
          title: vid.title || `${vid.label || 'TVC'} - ${p.title}`,
          subtitle: vid.subtitle || `${p.category} • ${p.role}`,
          poster: vid.poster || p.previewImage,
          chapters: vid.chapters || [],
          sampleSrc: vid.sampleSrc || '',
          driveUrl: vid.driveUrl || ''
        });
      });
      if (window.lucide) lucide.createIcons();
    } else if (p && p.video && window.RetroVideoPlayer) {
      new RetroVideoPlayer('modal-video-player-container', {
        title: p.video.title || p.title,
        subtitle: p.video.subtitle || `${p.category} • ${p.role}`,
        poster: p.video.poster || p.previewImage,
        chapters: p.video.chapters || [],
        sampleSrc: p.video.sampleSrc || '',
        driveUrl: p.video.driveUrl || ''
      });
      if (window.lucide) lucide.createIcons();
    }
  }
}

window.EvidenceModal = EvidenceModal;