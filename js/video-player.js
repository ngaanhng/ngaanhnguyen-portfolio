/**
 * Video Player Module - Custom Retro OS Video Controller
 */

class RetroVideoPlayer {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.options = options;
    this.isPlaying = false;
    this.init();
  }

  init() {
    const { title, subtitle, poster, chapters, sampleSrc, driveUrl } = this.options;
    
    // Google Drive Video Support
    if (sampleSrc && sampleSrc.includes('drive.google.com')) {
      const finalDriveLink = driveUrl || sampleSrc.replace('/preview', '/view?usp=drive_link');
      this.container.innerHTML = `
        <div class="video-player-container group relative rounded-2xl overflow-hidden shadow-2xl bg-black border-2 border-pink-100">
          <!-- Drive Title Bar Header (Clean without Drive badges) -->
          <div class="p-3.5 bg-gradient-to-r from-gray-950 via-gray-900 to-black text-white flex items-center justify-between gap-2 border-b border-white/10 z-20">
            <div class="flex items-center gap-2.5">
              <span class="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse"></span>
              <div>
                <h4 class="font-bold text-xs sm:text-sm text-white">${title || 'Video Showcase'}</h4>
                ${subtitle ? `<p class="text-[11px] text-pink-300">${subtitle}</p>` : ''}
              </div>
            </div>
          </div>

          <!-- Video Drive Embed Container (Clean Seamless Video - No Icon & No Box) -->
          <div class="w-full aspect-video bg-black relative overflow-hidden">
            <iframe 
              src="${sampleSrc}" 
              class="w-full border-0 absolute top-[-56px] left-0 h-[calc(100%+56px)]" 
              allow="autoplay; fullscreen" 
              allowfullscreen>
            </iframe>
          </div>
        </div>

        <!-- Chapters / Timestamps if available -->
        ${chapters && chapters.length ? `
          <div class="mt-3 flex flex-wrap gap-2">
            ${chapters.map((ch, idx) => `
              <div class="chapter-pill text-xs px-3 py-1.5 bg-pink-50 text-pink-800 rounded-lg border border-pink-200 flex items-center gap-1.5 font-medium shadow-xs">
                <span class="font-mono font-bold text-pink-600">${ch.time}</span>
                <span>${ch.title}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}
      `;
      if (window.lucide) lucide.createIcons();
      return;
    }

    this.container.innerHTML = `
      <div class="video-player-container group relative">
        <video id="retro-video-element" class="w-full aspect-video object-cover bg-black" poster="${poster || ''}" playsinline>
          <source src="${sampleSrc || ''}" type="video/mp4">
          Trình duyệt của bạn không hỗ trợ phát video HTML5.
        </video>

        <!-- Big Play Button Overlay -->
        <button id="video-big-play-btn" class="absolute inset-0 m-auto w-20 h-20 bg-pink-600/90 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-pink-500 transition-all duration-300 z-10">
          <i data-lucide="play" class="w-10 h-10 fill-current ml-1"></i>
        </button>

        <!-- Title Bar Header -->
        <div class="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between text-white transition-opacity duration-300 group-hover:opacity-100 opacity-90 z-20">
          <div>
            <h4 class="font-bold text-sm md:text-base">${title || 'Video Showcase'}</h4>
            ${subtitle ? `<p class="text-xs text-pink-300">${subtitle}</p>` : ''}
          </div>
          <span class="px-2.5 py-1 bg-pink-600/80 rounded-full text-xs font-semibold tracking-wider uppercase">HD 1080P</span>
        </div>

        <!-- Bottom Controller Bar -->
        <div class="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white transition-opacity duration-300 opacity-95 group-hover:opacity-100 z-20">
          <!-- Scrub Progress Bar -->
          <div id="video-progress-bar" class="video-progress-bar mb-3">
            <div id="video-progress-fill" class="video-progress-fill">
              <div class="video-scrub-thumb"></div>
            </div>
          </div>

          <!-- Controls Row -->
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <button id="video-play-toggle" class="p-2 hover:bg-white/20 rounded-lg transition-colors">
                <i data-lucide="play" class="w-5 h-5 fill-current"></i>
              </button>
              
              <div class="text-xs font-mono font-medium text-gray-300">
                <span id="video-current-time">00:00</span> / <span id="video-duration">00:00</span>
              </div>

              <!-- Speed Ramp / Playback Rate Badge -->
              <button id="video-speed-btn" class="px-2 py-0.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-xs font-bold text-pink-300 transition-all">
                1.0x
              </button>
            </div>

            <div class="flex items-center gap-3">
              <!-- Mute / Volume -->
              <button id="video-mute-btn" class="p-2 hover:bg-white/20 rounded-lg transition-colors">
                <i data-lucide="volume-2" class="w-5 h-5"></i>
              </button>
              <input id="video-volume-slider" type="range" min="0" max="1" step="0.05" value="1" class="w-16 accent-pink-500 hidden sm:block">

              <!-- Fullscreen -->
              <button id="video-fullscreen-btn" class="p-2 hover:bg-white/20 rounded-lg transition-colors">
                <i data-lucide="maximize" class="w-5 h-5"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Chapters / Timestamps if available -->
      ${chapters && chapters.length ? `
        <div class="mt-3 flex flex-wrap gap-2">
          ${chapters.map((ch, idx) => `
            <button class="chapter-pill text-xs px-3 py-1.5 bg-pink-50 hover:bg-pink-100 text-pink-800 rounded-lg border border-pink-200 flex items-center gap-1.5 transition-all font-medium" data-time="${ch.time}">
              <span class="font-mono font-bold text-pink-600">${ch.time}</span>
              <span>${ch.title}</span>
            </button>
          `).join('')}
        </div>
      ` : ''}
    `;

    if (window.lucide) lucide.createIcons();
    this.bindEvents();
  }

  bindEvents() {
    const video = this.container.querySelector('#retro-video-element');
    const playToggle = this.container.querySelector('#video-play-toggle');
    const bigPlayBtn = this.container.querySelector('#video-big-play-btn');
    const progressFill = this.container.querySelector('#video-progress-fill');
    const progressBar = this.container.querySelector('#video-progress-bar');
    const currentTimeEl = this.container.querySelector('#video-current-time');
    const durationEl = this.container.querySelector('#video-duration');
    const speedBtn = this.container.querySelector('#video-speed-btn');
    const muteBtn = this.container.querySelector('#video-mute-btn');
    const volumeSlider = this.container.querySelector('#video-volume-slider');
    const fullscreenBtn = this.container.querySelector('#video-fullscreen-btn');
    const chapterButtons = this.container.querySelectorAll('.chapter-pill');

    const togglePlay = () => {
      if (video.paused) {
        video.play().then(() => {
          this.isPlaying = true;
          bigPlayBtn.classList.add('hidden');
          playToggle.innerHTML = '<i data-lucide="pause" class="w-5 h-5 fill-current"></i>';
          if (window.lucide) lucide.createIcons();
        }).catch(() => {});
      } else {
        video.pause();
        this.isPlaying = false;
        bigPlayBtn.classList.remove('hidden');
        playToggle.innerHTML = '<i data-lucide="play" class="w-5 h-5 fill-current"></i>';
        if (window.lucide) lucide.createIcons();
      }
    };

    playToggle.addEventListener('click', togglePlay);
    bigPlayBtn.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);

    // Time update
    video.addEventListener('timeupdate', () => {
      if (!isNaN(video.duration) && video.duration > 0) {
        const percent = (video.currentTime / video.duration) * 100;
        progressFill.style.width = `${percent}%`;
        currentTimeEl.textContent = this.formatTime(video.currentTime);
      }
    });

    video.addEventListener('loadedmetadata', () => {
      durationEl.textContent = this.formatTime(video.duration);
    });

    // Scrubbing
    progressBar.addEventListener('click', (e) => {
      const rect = progressBar.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      video.currentTime = pos * video.duration;
    });

    // Speed Rate Toggle (1x -> 1.5x -> 2x -> 0.5x)
    const speeds = [1.0, 1.5, 2.0, 0.5];
    let currentSpeedIdx = 0;
    speedBtn.addEventListener('click', () => {
      currentSpeedIdx = (currentSpeedIdx + 1) % speeds.length;
      video.playbackRate = speeds[currentSpeedIdx];
      speedBtn.textContent = `${speeds[currentSpeedIdx]}x`;
    });

    // Mute toggle
    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      muteBtn.innerHTML = video.muted 
        ? '<i data-lucide="volume-x" class="w-5 h-5 text-red-400"></i>'
        : '<i data-lucide="volume-2" class="w-5 h-5"></i>';
      if (window.lucide) lucide.createIcons();
    });

    if (volumeSlider) {
      volumeSlider.addEventListener('input', (e) => {
        video.volume = e.target.value;
        video.muted = video.volume === 0;
      });
    }

    // Fullscreen
    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        this.container.querySelector('.video-player-container').requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    // Chapters click
    chapterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const timeStr = btn.dataset.time;
        const parts = timeStr.split(':').map(Number);
        const seconds = parts.length === 2 ? parts[0] * 60 + parts[1] : 0;
        video.currentTime = seconds;
        if (video.paused) togglePlay();
      });
    });
  }

  formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
}

window.RetroVideoPlayer = RetroVideoPlayer;