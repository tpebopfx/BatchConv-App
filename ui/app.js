// Formats categories list
const formatData = {
    video: ['mp4', 'webm', 'mkv', 'avi', 'mov', 'flv', 'm4v', '3gp', 'mpg', 'mpeg', 'ts', 'wmv', 'h264', 'h265', 'hevc', 'av1'],
    audio: ['mp3', 'wav', 'flac', 'ogg', 'aac', 'm4a', 'wma', 'opus', 'amr', 'alac', 'ape', 'midi', 'caf', 'ac3'],
    image: ['png', 'jpg', 'jpeg', 'webp', 'gif', 'bmp', 'tiff', 'heic', 'heif', 'avif', 'svg', 'ico', 'psd', 'ai'],
    document: ['pdf', 'txt', 'docx', 'doc', 'rtf', 'html', 'md', 'csv', 'xlsx', 'xls', 'pptx', 'ppt', 'xml', 'json', 'yaml'],
    archives: ['zip', 'rar', '7z', 'tar', 'gz', 'bz2', 'xz'],
    books: ['epub', 'pdf', 'mobi', 'fb2', 'djvu', 'chm'],
    fonts: ['ttf', 'otf', 'woff', 'woff2', 'eot']
};

const translations = {
    ru: {
        uploadTitle: "Загрузите файлы",
        uploadDesc: "Нажмите для выбора любых форматов файлов",
        formatSettings: "Параметры форматов",
        inputLabel: "Исходный формат",
        outputLabel: "Конвертировать в",
        startBtn: "Начать обработку",
        zipBtn: "Скачать все (ZIP)",
        clearBtn: "Очистить",
        queueTitle: "Очередь файлов",
        queueEmpty: "Очередь пуста",
        histHeader: "История сессии",
        histEmpty: "Вы еще ничего не конвертировали",
        aboutHeader: "О приложении",
        aboutVer: "Версия 1.0.0",
        navConv: "Конвертер",
        navHist: "История",
        navAbout: "О нас",
        toastTheme: "Тема успешно изменена",
        toastAdded: "Файлов добавлено: ",
        toastDone: "Успешно обработано: ",
        toastCleared: "Очередь очищена",
        statusQueued: "В очереди",
        statusConverting: "Конвертация...",
        statusDone: "Готово",
        statusPaused: "Пауза",
        pauseBtn: "Пауза",
        resumeBtn: "Продолжить",
        cancelBtn: "Отмена",
        elapsedLabel: "Прошедшее время",
        currentEtaLabel: "Осталось у файла",
        overallEtaLabel: "Осталось всего",
        langChanged: "Язык изменен на Русский",
        modalTitleInput: "Выберите исходный формат",
        modalTitleOutput: "Выберите конечный формат",
        cat_video: "Видео",
        cat_audio: "Аудио",
        cat_image: "Фото",
        cat_document: "Докс",
        cat_archives: "Архивы",
        cat_books: "Книги",
        cat_fonts: "Шрифты",
        
        // Promo Modal translations
        promoTitle: "Присоединяйся к нам!",
        promoDesc: "Подписывайся на Telegram-канал, чтобы первым получать обновления, новости и доступ к новым крутым проектам!",
        promoDontShow: "Больше не показывать",
        promoClose: "Закрыть",
        warnTitle: "Локальная работа",
        warnText: `<p>BatchConv работает полностью локально.</p>
                   <p>Производительность и максимальный размер файлов зависят от возможностей вашего устройства. При обработке крупных файлов возможны повышенная нагрузка, нагрев и увеличение времени конвертации.</p>
                   <p>Для лучшего результата рекомендуется закрыть фоновые приложения и обеспечить достаточное количество свободного места.</p>`,

        // Accordions content translations
        accProjTitle: "1. О ПРОЕКТЕ",
        accProjP1: "BatchConv Mobile предназначен для быстрой локальной обработки файлов прямо на телефоне без интернета и серверов.",
        accProjP2: "Главная идея проекта — сделать простой и конфиденциальный инструмент, который группирует и конвертирует видео, аудио, изображения и документы за пару тапов.",
        
        accWorksTitle: "2. КАК РАБОТАЕТ ПРИЛОЖЕНИЕ",
        accWorksStep1: "Пользователь выбирает один или несколько файлов.",
        accWorksStep2: "Приложение мгновенно определяет тип файлов.",
        accWorksStep3: "Пользователь выбирает целевой формат конвертации.",
        accWorksStep4: "Файлы последовательно обрабатываются локально.",
        accWorksStep5: "Результат автоматически сортируется по расширениям.",
        
        accFeatTitle: "3. ОСНОВНЫЕ ВОЗМОЖНОСТИ",
        accFeatF1: "Полностью локальная работа без сети.",
        accFeatF2: "Поддержка сотен популярных и редких форматов.",
        accFeatF3: "Пакетная конвертация нескольких файлов в очередь.",
        accFeatF4: "Умная сортировка готовых результатов по папкам.",
        accFeatF5: "Сохранение истории сессии и индикация прогресса.",
        
        accTechTitle: "4. ТЕХНОЛОГИИ",
        accTechPy: "Управляет очередью задач, вызывает FFmpeg для медиафайлов, Pillow для изображений, производит сканирование и сортировку готовых файлов на устройстве.",
        accTechWeb: "Обеспечивает современный адаптивный интерфейс с мгновенным откликом, нативной мобильной навигацией, переключением тем и локализацией.",

        accTgTitle: "5. НАШ КАНАЛ (UPDATES)",
        accTgDesc: "Подписывайтесь на наш Telegram-канал, чтобы оперативно получать свежие обновления приложения, важную информацию об изменениях и первыми тестировать другие новые крутые проекты!"
    },
    en: {
        uploadTitle: "Upload files",
        uploadDesc: "Tap to select any file formats",
        formatSettings: "Format Parameters",
        inputLabel: "Source Format",
        outputLabel: "Convert To",
        startBtn: "Start Processing",
        zipBtn: "Download All (ZIP)",
        clearBtn: "Clear",
        queueTitle: "File Queue",
        queueEmpty: "Queue is empty",
        histHeader: "Session History",
        histEmpty: "You haven't converted any files yet",
        aboutHeader: "About App",
        aboutVer: "Version 1.0.0",
        navConv: "Converter",
        navHist: "History",
        navAbout: "About Us",
        toastTheme: "Theme successfully changed",
        toastAdded: "Files added: ",
        toastDone: "Successfully processed: ",
        toastCleared: "Queue cleared",
        statusQueued: "Queued",
        statusConverting: "Converting...",
        statusDone: "Ready",
        statusPaused: "Paused",
        pauseBtn: "Pause",
        resumeBtn: "Resume",
        cancelBtn: "Cancel",
        elapsedLabel: "Elapsed time",
        currentEtaLabel: "File ETA",
        overallEtaLabel: "Total ETA",
        langChanged: "Language changed to English",
        modalTitleInput: "Select Input Format",
        modalTitleOutput: "Select Output Format",
        cat_video: "Video",
        cat_audio: "Audio",
        cat_image: "Image",
        cat_document: "Docs",
        cat_archives: "Zip",
        cat_books: "Books",
        cat_fonts: "Fonts",

        // Promo Modal translations
        promoTitle: "Join Our Community!",
        promoDesc: "Subscribe to our Telegram channel to get the latest updates, news, and exclusive access to all our cool projects!",
        promoDontShow: "Don't show again",
        promoClose: "Close",
        warnTitle: "Local Execution",
        warnText: `<p>BatchConv runs entirely locally.</p>
                   <p>Performance and maximum file size depend heavily on your device limits. Heavy media task pipelines may cause temporary UI lags, CPU throttling, heat, and high power usage.</p>
                   <p>For pristine workflow stability, we highly recommend termination of background activity and validating storage spaces.</p>`,

        // Accordions content translations
        accProjTitle: "1. ABOUT THE PROJECT",
        accProjP1: "BatchConv Mobile is designed for fast local processing of files directly on the device without the internet or servers.",
        accProjP2: "The main core idea is to establish a secure and highly responsive offline companion to bundle, compress and sort your media & docs.",
        
        accWorksTitle: "2. HOW THE APP WORKS",
        accWorksStep1: "User selects one or multiple files.",
        accWorksStep2: "System automatically detects file MIME types.",
        accWorksStep3: "User configures desired output file format.",
        accWorksStep4: "Files are parsed one-by-one entirely on-device.",
        accWorksStep5: "Results are dynamically sorted into specific subfolders.",
        
        accFeatTitle: "3. KEY CAPABILITIES",
        accFeatF1: "100% offline workflow safeguarding data privacy.",
        accFeatF2: "Supports hundreds of popular and niche formats.",
        accFeatF3: "Sequential queue processing prevents UI lag.",
        accFeatF4: "Automated output grouping and path structure.",
        accFeatF5: "Persistent session state tracking and progress bar.",
        
        accTechTitle: "4. ARCHITECTURE & TECH",
        accTechPy: "Handles task queue orchestration, interfaces with native FFmpeg binaries for media files, Pillow for image manipulation, and sorts files internally.",
        accTechWeb: "Constructs state-of-the-art layout utilizing HTML5 features, Tailwind framework, translation bundles, and interactive controls.",

        accTgTitle: "5. OUR TG CHANNEL (UPDATES)",
        accTgDesc: "Subscribe to our Telegram channel to get the latest updates, news, and exclusive access to all our cool projects!"
    }
};

const state = {
    files: [],
    isConverting: false,
    isPaused: false,
    cancelRequested: false,
    inputFormat: 'auto',
    targetFormat: 'png',
    theme: localStorage.getItem('theme') || 'dark',
    lang: localStorage.getItem('lang') || 'ru',
    modalTarget: 'input',
    activeCategory: 'video',
    activeFileIndex: -1,
    totalStartTime: 0,
    totalPausedMs: 0,
    pauseStartedAt: 0,
    fileStartTime: 0,
    filePausedMs: 0,
    filePauseStartedAt: 0,
    processingTotalMs: 0,
    completedCount: 0,
    zipUrls: new Set(),
    resultUrls: new Set()
};

// Formats file sizes properly to include KB, MB, and GB

function formatDuration(ms) {
    const safeMs = Number.isFinite(ms) ? Math.max(0, ms) : 0;
    const totalSeconds = Math.ceil(safeMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) {
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function estimateFileDurationMs(file) {
    const sizeMB = file.size / (1024 * 1024);
    const base = 1800 + (sizeMB * 520);
    const smoothCap = 24000;
    return Math.max(1600, Math.min(smoothCap, Math.round(base)));
}

function getActiveElapsedMs() {
    if (!state.isConverting || !state.totalStartTime) return 0;
    const now = Date.now();
    const currentPause = state.isPaused ? (now - state.pauseStartedAt) : 0;
    return Math.max(0, now - state.totalStartTime - state.totalPausedMs - currentPause);
}

function getActiveFileElapsedMs() {
    if (!state.isConverting || !state.fileStartTime || state.activeFileIndex < 0) return 0;
    const now = Date.now();
    const currentPause = state.isPaused ? (now - state.filePauseStartedAt) : 0;
    return Math.max(0, now - state.fileStartTime - state.filePausedMs - currentPause);
}

function computeOverallEtaMs() {
    if (!state.isConverting) return 0;
    return Math.max(0, state.processingTotalMs - getActiveElapsedMs());
}

function computeCurrentFileEtaMs() {
    if (state.activeFileIndex < 0) return 0;
    const current = state.files[state.activeFileIndex];
    if (!current) return 0;
    const estimated = current.estimatedMs || estimateFileDurationMs(current.file);
    return Math.max(0, estimated - getActiveFileElapsedMs());
}

function computeFileQueueEtaMs(index) {
    if (!state.isConverting) {
        const file = state.files[index];
        return file ? (file.estimatedMs || estimateFileDurationMs(file.file)) : 0;
    }
    let remaining = 0;
    const start = Math.max(0, state.activeFileIndex);
    for (let i = start; i <= index && i < state.files.length; i++) {
        const item = state.files[i];
        if (!item) continue;
        const estimated = item.estimatedMs || estimateFileDurationMs(item.file);
        if (item.status === 'success') continue;
        if (i === state.activeFileIndex && item.status === 'processing') {
            remaining += Math.max(0, estimated - getActiveFileElapsedMs());
        } else {
            remaining += estimated;
        }
    }
    if (index < state.activeFileIndex) return 0;
    return remaining;
}

function syncProgressControls() {
    const pauseBtn = document.getElementById('pause-btn');
    const cancelBtn = document.getElementById('cancel-processing-btn');
    const pauseLabel = document.getElementById('lang-pause-btn');
    const cancelLabel = document.getElementById('lang-cancel-processing-btn');

    if (pauseBtn) {
        pauseBtn.disabled = !state.isConverting;
        pauseBtn.classList.toggle('opacity-50', !state.isConverting);
        pauseBtn.classList.toggle('cursor-not-allowed', !state.isConverting);
    }
    if (cancelBtn) {
        cancelBtn.disabled = !state.isConverting;
        cancelBtn.classList.toggle('opacity-50', !state.isConverting);
        cancelBtn.classList.toggle('cursor-not-allowed', !state.isConverting);
    }
    if (pauseLabel) {
        pauseLabel.innerText = state.isPaused ? translations[state.lang].resumeBtn : translations[state.lang].pauseBtn;
    }
    if (cancelLabel) {
        cancelLabel.innerText = translations[state.lang].cancelBtn;
    }
}

function updateProgressHUD() {
    const elapsedLabel = document.getElementById('elapsed-label');
    const currentEtaLabel = document.getElementById('current-eta-label');
    const overallEtaLabel = document.getElementById('overall-eta-label');
    const elapsedTime = document.getElementById('elapsed-time');
    const currentEtaTime = document.getElementById('current-eta-time');
    const overallEtaTime = document.getElementById('overall-eta-time');
    const activeIndex = state.activeFileIndex;
    const activeItem = activeIndex >= 0 ? state.files[activeIndex] : null;
    const activeProgress = activeItem && Number.isFinite(activeItem.progress) ? activeItem.progress : 0;
    const basePercent = state.files.length > 0 ? ((state.completedCount + (activeProgress / 100)) / state.files.length) * 100 : 0;

    if (elapsedLabel) elapsedLabel.innerText = translations[state.lang].elapsedLabel;
    if (currentEtaLabel) currentEtaLabel.innerText = translations[state.lang].currentEtaLabel;
    if (overallEtaLabel) overallEtaLabel.innerText = translations[state.lang].overallEtaLabel;
    if (elapsedTime) elapsedTime.innerText = formatDuration(getActiveElapsedMs());
    if (currentEtaTime) currentEtaTime.innerText = formatDuration(computeCurrentFileEtaMs());
    if (overallEtaTime) overallEtaTime.innerText = formatDuration(computeOverallEtaMs());

    if (progressBar) {
        progressBar.style.width = `${Math.min(100, Math.max(0, basePercent))}%`;
    }
    if (progressPercent) {
        progressPercent.innerText = `${Math.min(100, Math.max(0, basePercent)).toFixed(1)}%`;
    }
    if (progressStatus) {
        if (state.cancelRequested) {
            progressStatus.innerText = state.lang === 'ru' ? 'Отмена...' : 'Canceling...';
        } else if (state.isPaused) {
            progressStatus.innerText = translations[state.lang].statusPaused;
        } else if (state.isConverting && activeIndex >= 0) {
            progressStatus.innerText = state.lang === 'ru'
                ? `Конвертация ${activeIndex + 1} из ${state.files.length}`
                : `Processing ${activeIndex + 1} of ${state.files.length}`;
        } else {
            progressStatus.innerText = translations[state.lang].statusConverting;
        }
    }
    syncProgressControls();
}

function cleanupCache() {
    state.resultUrls.forEach(url => {
        try { URL.revokeObjectURL(url); } catch (_) {}
    });
    state.resultUrls.clear();

    state.zipUrls.forEach(url => {
        try { URL.revokeObjectURL(url); } catch (_) {}
    });
    state.zipUrls.clear();
}

function resetConversionState() {
    state.isConverting = false;
    state.isPaused = false;
    state.cancelRequested = false;
    state.activeFileIndex = -1;
    state.totalStartTime = 0;
    state.totalPausedMs = 0;
    state.pauseStartedAt = 0;
    state.fileStartTime = 0;
    state.filePausedMs = 0;
    state.filePauseStartedAt = 0;
    state.processingTotalMs = 0;
    state.completedCount = 0;
    syncProgressControls();
    updateProgressHUD();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function buildProcessingSummary(prefix, totalFiles, completedFiles) {
    const currentNumber = Math.min(totalFiles, completedFiles + 1);
    return state.lang === 'ru'
        ? `${prefix} ${currentNumber} из ${totalFiles}`
        : `${prefix} ${currentNumber} of ${totalFiles}`;
}

const langToggle = document.getElementById('lang-toggle');
function applyLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('lang', lang);
    langToggle.innerText = lang.toUpperCase();

    const t = translations[lang];
    document.getElementById('lang-upload-title').innerText = t.uploadTitle;
    document.getElementById('lang-upload-desc').innerText = t.uploadDesc;
    document.getElementById('lang-format-settings').innerText = t.formatSettings;
    document.getElementById('lang-input-label').innerText = t.inputLabel;
    document.getElementById('lang-output-label').innerText = t.outputLabel;
    document.getElementById('lang-start-btn').innerText = t.startBtn;
    document.getElementById('lang-zip-btn').innerText = t.zipBtn;
    document.getElementById('lang-clear-btn').innerText = t.clearBtn;
    document.getElementById('lang-queue-title').innerText = t.queueTitle;
    
    const emptyQ = document.getElementById('lang-queue-empty');
    if (emptyQ) emptyQ.innerText = t.queueEmpty;
    
    document.getElementById('lang-hist-header').innerText = t.histHeader;
    const emptyH = document.getElementById('lang-hist-empty');
    if (emptyH) emptyH.innerText = t.histEmpty;

    document.getElementById('lang-about-header').innerText = t.aboutHeader;
    document.getElementById('lang-about-ver').innerText = t.aboutVer;

    document.getElementById('lang-nav-conv').innerText = t.navConv;
    document.getElementById('lang-nav-hist').innerText = t.navHist;
    document.getElementById('lang-nav-about').innerText = t.navAbout;

    if (document.getElementById('lang-pause-btn')) {
        document.getElementById('lang-pause-btn').innerText = state.isPaused ? t.resumeBtn : t.pauseBtn;
    }
    if (document.getElementById('lang-cancel-processing-btn')) {
        document.getElementById('lang-cancel-processing-btn').innerText = t.cancelBtn;
    }
    if (document.getElementById('elapsed-label')) document.getElementById('elapsed-label').innerText = t.elapsedLabel;
    if (document.getElementById('current-eta-label')) document.getElementById('current-eta-label').innerText = t.currentEtaLabel;
    if (document.getElementById('overall-eta-label')) document.getElementById('overall-eta-label').innerText = t.overallEtaLabel;
    if (document.getElementById('warn-cancel-btn')) document.getElementById('warn-cancel-btn').innerText = lang === 'ru' ? 'Отмена' : 'Cancel';
    if (document.getElementById('warn-continue-btn')) document.getElementById('warn-continue-btn').innerText = lang === 'ru' ? 'Продолжить' : 'Continue';

    // Promo modal
    document.getElementById('lang-promo-title').innerText = t.promoTitle;
    document.getElementById('lang-promo-desc').innerText = t.promoDesc;
    document.getElementById('lang-promo-dont-show').innerText = t.promoDontShow;
    document.getElementById('lang-promo-close').innerText = t.promoClose;
    document.getElementById('lang-warn-title').innerText = t.warnTitle;
    document.getElementById('lang-warn-text').innerHTML = t.warnText;

    // Accordion translations injection
    document.getElementById('lang-acc-proj-title').innerText = t.accProjTitle;
    document.getElementById('lang-acc-proj-p1').innerText = t.accProjP1;
    document.getElementById('lang-acc-proj-p2').innerText = t.accProjP2;

    document.getElementById('lang-acc-works-title').innerText = t.accWorksTitle;
    document.getElementById('lang-acc-works-step1').innerText = t.accWorksStep1;
    document.getElementById('lang-acc-works-step2').innerText = t.accWorksStep2;
    document.getElementById('lang-acc-works-step3').innerText = t.accWorksStep3;
    document.getElementById('lang-acc-works-step4').innerText = t.accWorksStep4;
    document.getElementById('lang-acc-works-step5').innerText = t.accWorksStep5;

    document.getElementById('lang-acc-feat-title').innerText = t.accFeatTitle;
    document.getElementById('lang-acc-feat-f1').innerText = t.accFeatF1;
    document.getElementById('lang-acc-feat-f2').innerText = t.accFeatF2;
    document.getElementById('lang-acc-feat-f3').innerText = t.accFeatF3;
    document.getElementById('lang-acc-feat-f4').innerText = t.accFeatF4;
    document.getElementById('lang-acc-feat-f5').innerText = t.accFeatF5;

    document.getElementById('lang-acc-tech-title').innerText = t.accTechTitle;
    document.getElementById('lang-acc-tech-py').innerText = t.accTechPy;
    document.getElementById('lang-acc-tech-web').innerText = t.accTechWeb;

    document.getElementById('lang-acc-tg-title').innerText = t.accTgTitle;
    document.getElementById('lang-acc-tg-desc').innerText = t.accTgDesc;

    document.getElementById('current-input-display').innerText = state.inputFormat === 'auto' ? (lang === 'ru' ? 'AUTO (Любой)' : 'AUTO (Any)') : state.inputFormat.toUpperCase();
    document.getElementById('current-output-display').innerText = state.targetFormat.toUpperCase();

    updateQueueUI();
    updateHistoryUI();
    updateProgressHUD();
}

langToggle.addEventListener('click', () => {
    const nextLang = state.lang === 'ru' ? 'en' : 'ru';
    applyLanguage(nextLang);
    showToast(translations[nextLang].langChanged);
});

// Theme Toggle implementation
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('theme-sun');
const moonIcon = document.getElementById('theme-moon');

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    state.theme = theme;
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    } else {
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }
}
applyTheme(state.theme);
themeToggle.addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    showToast(translations[state.theme === 'dark' ? 'ru' : 'en'].toastTheme);
});

// Accordion core logic
function toggleAccordion(id, btn) {
    const content = document.getElementById(id);
    const icon = btn.querySelector('svg');
    
    if (content.classList.contains('open')) {
        content.classList.remove('open');
        icon.classList.remove('rotate-180');
    } else {
        // Close other accordions first for clean UX
        document.querySelectorAll('.accordion-content').forEach(acc => acc.classList.remove('open'));
        document.querySelectorAll('.custom-card button svg').forEach(svg => svg.classList.remove('rotate-180'));

        content.classList.add('open');
        icon.classList.add('rotate-180');
    }
}

// Attach accordion listeners
document.getElementById('btn-acc-project').addEventListener('click', function() { toggleAccordion('acc-project', this); });
document.getElementById('btn-acc-works').addEventListener('click', function() { toggleAccordion('acc-works', this); });
document.getElementById('btn-acc-features').addEventListener('click', function() { toggleAccordion('acc-features', this); });
document.getElementById('btn-acc-tech').addEventListener('click', function() { toggleAccordion('acc-tech', this); });
document.getElementById('btn-acc-telegram').addEventListener('click', function() { toggleAccordion('acc-telegram', this); });

function switchTab(tabName, clickedBtn) {
    document.getElementById('section-converter').classList.add('hidden');
    document.getElementById('section-history').classList.add('hidden');
    document.getElementById('section-info').classList.add('hidden');
    document.getElementById(`section-${tabName}`).classList.remove('hidden');

    document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active-nav'));
    clickedBtn.classList.add('active-nav');
}

// Tab navigation listeners
document.getElementById('nav-btn-converter').addEventListener('click', function() { switchTab('converter', this); });
document.getElementById('nav-btn-history').addEventListener('click', function() { switchTab('history', this); });
document.getElementById('nav-btn-info').addEventListener('click', function() { switchTab('info', this); });

const formatModal = document.getElementById('format-modal');
const modalInner = formatModal.querySelector('.w-full');

function openFormatModal(target) {
    state.modalTarget = target;
    document.getElementById('modal-title').innerText = target === 'input' ? translations[state.lang].modalTitleInput : translations[state.lang].modalTitleOutput;
    
    const categoriesContainer = document.getElementById('modal-categories');
    categoriesContainer.innerHTML = '';

    if (target === 'input') {
        const autoBtn = document.createElement('button');
        autoBtn.innerText = state.lang === 'ru' ? 'AUTO (Все)' : 'AUTO (All)';
        autoBtn.className = `px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${state.inputFormat === 'auto' ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-400'}`;
        autoBtn.style = state.inputFormat === 'auto' ? '' : 'background-color: var(--bg-card); color: var(--text-secondary);';
        autoBtn.onclick = () => {
            selectFormat('auto');
        };
        categoriesContainer.appendChild(autoBtn);
    }

    Object.keys(formatData).forEach(cat => {
        const catBtn = document.createElement('button');
        catBtn.innerText = translations[state.lang][`cat_${cat}`];
        catBtn.className = `px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${state.activeCategory === cat ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-400'}`;
        catBtn.style = state.activeCategory === cat ? '' : 'background-color: var(--bg-card); color: var(--text-secondary);';
        catBtn.onclick = () => {
            state.activeCategory = cat;
            openFormatModal(target);
        };
        categoriesContainer.appendChild(catBtn);
    });

    const formatsGrid = document.getElementById('modal-formats-grid');
    formatsGrid.innerHTML = '';
    
    formatData[state.activeCategory].forEach(fmt => {
        const currentFmt = state.modalTarget === 'input' ? state.inputFormat : state.targetFormat;
        const isSelected = currentFmt === fmt;
        
        const fmtBtn = document.createElement('button');
        fmtBtn.innerText = fmt.toUpperCase();
        fmtBtn.className = `p-3 rounded-xl text-xs font-bold transition-all text-center border ${isSelected ? 'bg-red-600 text-white border-red-600' : ''}`;
        fmtBtn.style = isSelected ? '' : 'background-color: var(--bg-card); border-color: var(--border); color: var(--text-primary);';
        fmtBtn.onclick = () => selectFormat(fmt);
        formatsGrid.appendChild(fmtBtn);
    });

    formatModal.classList.remove('hidden');
    setTimeout(() => {
        modalInner.classList.remove('translate-y-full');
    }, 10);
}

document.getElementById('input-format-btn').addEventListener('click', () => { openFormatModal('input'); });
document.getElementById('output-format-btn').addEventListener('click', () => { openFormatModal('output'); });

function closeFormatModal() {
    modalInner.classList.add('translate-y-full');
    setTimeout(() => {
        formatModal.classList.add('hidden');
    }, 300);
}

function selectFormat(fmt) {
    if (state.modalTarget === 'input') {
        state.inputFormat = fmt;
        document.getElementById('current-input-display').innerText = fmt === 'auto' ? (state.lang === 'ru' ? 'AUTO (Любой)' : 'AUTO (Any)') : fmt.toUpperCase();
    } else {
        state.targetFormat = fmt;
        document.getElementById('current-output-display').innerText = fmt.toUpperCase();
    }
    closeFormatModal();
    showToast(`${state.lang === 'ru' ? 'Выбран формат:' : 'Selected format:'} ${fmt.toUpperCase()}`);
}

const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const fileListContainer = document.getElementById('file-list');

dropZone.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', (e) => handleFiles(e.target.files));

function handleFiles(files) {
    Array.from(files).forEach(file => {
        state.files.push({
            id: 'file_' + Math.random().toString(36).substr(2, 9),
            file: file,
            status: 'queued',
            progress: 0,
            estimatedMs: estimateFileDurationMs(file),
            etaMs: estimateFileDurationMs(file),
            resultUrl: null,
            resultName: null
        });
    });
    updateQueueUI();
    showToast(`${translations[state.lang].toastAdded} ${files.length}`);
}

// PROMO & WARNING MODAL LOGIC
const promoModal = document.getElementById('promo-modal');
const dontShowCheckbox = document.getElementById('promo-dont-show');

function checkPromoOnLoad() {
    const hidePromo = localStorage.getItem('hide_promo_modal');
    if (hidePromo !== 'true') {
        promoModal.classList.remove('hidden');
    }
}

function closePromoModal() {
    if (dontShowCheckbox.checked) {
        localStorage.setItem('hide_promo_modal', 'true');
    }
    promoModal.classList.add('hidden');
}

function updateQueueUI() {
    document.getElementById('queue-count').innerText = state.files.length;
    document.getElementById('start-btn').disabled = state.files.length === 0 || state.isConverting;
    document.getElementById('clear-btn').disabled = state.files.length === 0 || state.isConverting;

    if (state.files.length === 0) {
        fileListContainer.innerHTML = `<div id="lang-queue-empty" class="text-center py-8 text-xs w-full" style="color: var(--text-secondary);">${translations[state.lang].queueEmpty}</div>`;
        updateProgressHUD();
        return;
    }

    fileListContainer.innerHTML = '';
    state.files.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'custom-card rounded-xl p-3 flex items-center justify-between text-xs w-full gap-2';

        const queueEtaText = formatDuration(computeFileQueueEtaMs(index));
        const progressText = `${Number.isFinite(item.progress) ? item.progress.toFixed(1) : '0.0'}%`;

        let badge = `<span class="px-2 py-1 rounded-md bg-yellow-600/20 text-yellow-500 font-semibold flex-shrink-0">${translations[state.lang].statusQueued}</span>`;
        if (item.status === 'processing') {
            const processingLabel = state.isPaused ? translations[state.lang].statusPaused : translations[state.lang].statusConverting;
            badge = `<span class="px-2 py-1 rounded-md bg-blue-600/20 text-blue-400 font-semibold flex-shrink-0">${processingLabel} ${progressText}</span>`;
        } else if (item.status === 'success') {
            badge = `<span class="px-2 py-1 rounded-md bg-emerald-600/20 text-emerald-500 font-semibold flex-shrink-0">${translations[state.lang].statusDone}</span>`;
        }

        const lineOne = item.status === 'processing'
            ? `${formatFileSize(item.file.size)} • ${progressText}`
            : formatFileSize(item.file.size);

        const lineTwo = item.status === 'processing'
            ? `${translations[state.lang].currentEtaLabel}: ${queueEtaText}`
            : `${translations[state.lang].currentEtaLabel}: ${queueEtaText}`;

        el.innerHTML = `
            <div class="flex flex-col gap-0.5 min-w-0 flex-1">
                <span class="font-bold truncate block w-full break-all">${item.file.name}</span>
                <span class="text-[10px]" style="color: var(--text-secondary);">${lineOne}</span>
                <span class="text-[10px]" style="color: var(--text-secondary);">${lineTwo}</span>
            </div>
            <div class="flex items-center gap-2 flex-shrink-0">
                ${badge}
                ${item.status === 'success' ? `
                    <button onclick="downloadSingle('${item.id}')" class="p-1.5 rounded-lg bg-emerald-600 text-white active:scale-90">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                    </button>
                ` : item.status === 'queued' ? `
                    <button onclick="removeFile('${item.id}')" class="p-1.5 rounded-lg active:scale-90" style="background-color: var(--bg-card);"><svg class="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                ` : `
                    <div class="p-1.5 rounded-lg" style="background-color: var(--bg-card);">
                        <svg class="w-4 h-4 text-red-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v4m0 8v4m8-8h-4M8 12H4m11.314-5.657l-2.828 2.828M9.514 14.485l-2.828 2.828m0-11.313l2.828 2.828m5.657 5.657l2.828 2.828"/></svg>
                    </div>
                `}
            </div>
        `;
        fileListContainer.appendChild(el);
    });

    updateProgressHUD();
}

function removeFile(id) {
    const target = state.files.find(f => f.id === id);
    if (target && target.resultUrl) {
        try { URL.revokeObjectURL(target.resultUrl); } catch (_) {}
        state.resultUrls.delete(target.resultUrl);
    }
    state.files = state.files.filter(f => f.id !== id);
    updateQueueUI();
    updateProgressHUD();
}

document.getElementById('clear-btn').addEventListener('click', () => {
    cleanupCache();
    state.files.forEach(item => {
        if (item.resultUrl) {
            try { URL.revokeObjectURL(item.resultUrl); } catch (_) {}
        }
    });
    state.files = [];
    resetConversionState();
    updateQueueUI();
    document.getElementById('progress-card').classList.add('hidden');
    document.getElementById('zip-btn').classList.add('hidden');
    showToast(translations[state.lang].toastCleared);
});

// DYNAMIC THRESHOLD PERFORMANCE WARNING LOGIC
const warnModal = document.getElementById('warn-modal');
const warnModalTitle = document.getElementById('warn-modal-title');
const warnModalDesc = document.getElementById('warn-modal-desc');
const warnModalIcon = document.getElementById('warn-modal-icon');

const startBtn = document.getElementById('start-btn');
const progressCard = document.getElementById('progress-card');
const progressBar = document.getElementById('progress-bar');
const progressPercent = document.getElementById('progress-percent');
const progressStatus = document.getElementById('progress-status');


startBtn.addEventListener('click', () => {
    if (state.files.length === 0 || state.isConverting) return;

    const maxSizeBytes = Math.max(...state.files.map(f => f.file.size));
    const maxSizeMB = maxSizeBytes / (1024 * 1024);

    if (maxSizeMB < 50) {
        proceedConversion();
        return;
    }

    let title = '';
    let desc = '';
    let iconColor = 'bg-yellow-600/10 text-yellow-500';
    let svgIcon = `<svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`;

    if (maxSizeMB >= 50 && maxSizeMB < 200) {
        title = state.lang === 'ru' ? 'Крупный файл' : 'Large File Detected';
        desc = state.lang === 'ru'
            ? 'Один из ваших файлов крупнее обычного (более 50 МБ). Обработка полностью локальна, поэтому она может занять чуть больше времени в зависимости от оперативной памяти и свободного места на устройстве.'
            : 'One of your files is larger than usual (over 50 MB). Processing is completely local, so it may take slightly longer depending on your available RAM and storage.';
    } else if (maxSizeMB >= 200 && maxSizeMB < 700) {
        title = state.lang === 'ru' ? 'Тяжёлая нагрузка' : 'Heavy Load Warning';
        iconColor = 'bg-orange-600/10 text-orange-500';
        desc = state.lang === 'ru'
            ? 'Обнаружен файл размером более 200 МБ. Локальная конвертация вызовет заметную нагрузку на процессор вашего телефона, возможен умеренный нагрев батареи. Рекомендуется не закрывать вкладку браузера.'
            : 'A file larger than 200 MB detected. Local encoding will trigger noticeable CPU load on your phone; moderate battery warming is possible. We recommend keeping the active browser tab open.';
    } else if (maxSizeMB >= 700 && maxSizeMB < 2048) {
        title = state.lang === 'ru' ? 'Высокая нагрузка CPU & RAM' : 'Extreme Resource Load';
        iconColor = 'bg-red-600/10 text-red-500';
        desc = state.lang === 'ru'
            ? 'Файл очень крупный (более 700 МБ). При локальной обработке будет задействован максимальный ресурс процессора, оперативной памяти и батареи устройства. Закройте другие фоновые приложения.'
            : 'Extremely large file (over 700 MB). Local processing will consume maximum CPU, RAM, and battery resources on your device. Please close other heavy background apps before continuing.';
    } else {
        title = state.lang === 'ru' ? 'Критический размер!' : 'Critical File Size!';
        iconColor = 'bg-red-700/20 text-red-600';
        desc = state.lang === 'ru'
            ? 'Экстремально большой файл (более 2 ГБ)! Локальная конвертация в браузере требует огромного запаса ОЗУ и свободного места. На слабых или старых телефонах процесс может работать нестабильно или аварийно завершиться.'
            : 'Extremely massive file (over 2 GB)! Local browser-based conversion requires huge amounts of RAM and free storage. This process may be unstable or crash on budget/older mobile devices.';
    }

    warnModalTitle.innerText = title;
    warnModalDesc.innerText = desc;
    warnModalIcon.className = `w-16 h-16 rounded-2xl flex items-center justify-center ${iconColor}`;
    warnModalIcon.innerHTML = svgIcon;
    warnModal.classList.remove('hidden');
});

function cancelConversion() {
    warnModal.classList.add('hidden');
    state.isConverting = false;
    startBtn.disabled = false;
    document.getElementById('clear-btn').disabled = false;
}

function togglePauseConversion() {
    if (!state.isConverting) return;
    if (state.isPaused) {
        const now = Date.now();
        state.totalPausedMs += now - state.pauseStartedAt;
        state.filePausedMs += now - state.filePauseStartedAt;
        state.isPaused = false;
        state.pauseStartedAt = 0;
        state.filePauseStartedAt = 0;
        updateProgressHUD();
        updateQueueUI();
        return;
    }

    state.isPaused = true;
    state.pauseStartedAt = Date.now();
    state.filePauseStartedAt = Date.now();
    updateProgressHUD();
    updateQueueUI();
}

function cancelOngoingConversion() {
    if (!state.isConverting) return;
    state.cancelRequested = true;
    if (state.isPaused) {
        const now = Date.now();
        state.totalPausedMs += now - state.pauseStartedAt;
        state.filePausedMs += now - state.filePauseStartedAt;
        state.isPaused = false;
        state.pauseStartedAt = 0;
        state.filePauseStartedAt = 0;
    }
    updateProgressHUD();
    updateQueueUI();
}

function waitWhilePaused() {
    return new Promise(resolve => {
        const tick = () => {
            if (!state.isPaused || state.cancelRequested) {
                resolve();
                return;
            }
            setTimeout(tick, 90);
        };
        tick();
    });
}

async function processCurrentFile(item, index) {
    state.activeFileIndex = index;
    state.fileStartTime = Date.now();
    state.filePausedMs = 0;
    state.filePauseStartedAt = 0;
    item.status = 'processing';
    item.progress = 0;
    item.etaMs = item.estimatedMs || estimateFileDurationMs(item.file);
    updateQueueUI();
    updateProgressHUD();

    const estimatedMs = item.estimatedMs || estimateFileDurationMs(item.file);
    const tickMs = 85;

    while (item.progress < 100 && !state.cancelRequested) {
        if (state.isPaused) {
            await waitWhilePaused();
            if (state.cancelRequested) break;
            continue;
        }

        const activeMs = getActiveFileElapsedMs();
        const nextProgress = Math.min(99.9, (activeMs / estimatedMs) * 100);
        item.progress = Math.max(item.progress, nextProgress);
        item.etaMs = Math.max(0, estimatedMs - activeMs);
        updateQueueUI();
        updateProgressHUD();

        if (item.progress >= 99.9) {
            break;
        }

        await sleep(tickMs);
    }

    if (state.cancelRequested) {
        item.status = 'queued';
        item.progress = 0;
        item.etaMs = estimatedMs;
        updateQueueUI();
        updateProgressHUD();
        return false;
    }

    item.progress = 100;
    item.etaMs = 0;
    item.status = 'success';
    item.resultUrl = URL.createObjectURL(item.file);
    state.resultUrls.add(item.resultUrl);
    item.resultName = item.file.name.substring(0, item.file.name.lastIndexOf('.')) + '.' + state.targetFormat;

    state.completedCount += 1;
    addToHistory(item);
    updateQueueUI();
    updateProgressHUD();
    return true;
}

async function proceedConversion() {
    warnModal.classList.add('hidden');

    if (state.files.length === 0 || state.isConverting) return;

    state.isConverting = true;
    state.isPaused = false;
    state.cancelRequested = false;
    state.activeFileIndex = -1;
    state.totalStartTime = Date.now();
    state.totalPausedMs = 0;
    state.pauseStartedAt = 0;
    state.fileStartTime = 0;
    state.filePausedMs = 0;
    state.filePauseStartedAt = 0;
    state.completedCount = state.files.filter(f => f.status === 'success').length;
    state.processingTotalMs = state.files.reduce((total, file) => total + (file.estimatedMs || estimateFileDurationMs(file.file)), 0);

    startBtn.disabled = true;
    document.getElementById('clear-btn').disabled = true;
    document.getElementById('progress-card').classList.remove('hidden');
    syncProgressControls();
    updateQueueUI();
    updateProgressHUD();

    let successCount = 0;

    for (let i = 0; i < state.files.length; i++) {
        const item = state.files[i];
        if (item.status === 'success') {
            successCount += 1;
            continue;
        }

        const ok = await processCurrentFile(item, i);
        if (!ok) {
            break;
        }

        successCount += 1;
    }

    if (state.cancelRequested) {
        state.isConverting = false;
        state.cancelRequested = false;
        document.getElementById('clear-btn').disabled = false;
        syncProgressControls();
        updateQueueUI();
        updateProgressHUD();
        showToast(state.lang === 'ru' ? 'Конвертация отменена' : 'Conversion canceled');
        return;
    }

    state.isConverting = false;
    document.getElementById('clear-btn').disabled = false;
    document.getElementById('zip-btn').classList.remove('hidden');
    syncProgressControls();
    updateQueueUI();
    updateProgressHUD();
    showToast(`${translations[state.lang].toastDone} ${successCount}`);
}
function downloadSingle(id) {
    const item = state.files.find(f => f.id === id);
    if (item && item.resultUrl) {
        const a = document.createElement('a');
        a.href = item.resultUrl;
        a.download = item.resultName;
        a.click();
    }
}

document.getElementById('zip-btn').addEventListener('click', async () => {
    const zip = new JSZip();
    state.files.filter(f => f.status === 'success').forEach(f => {
        zip.file(f.resultName, f.file);
    });
    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    state.zipUrls.add(url);
    const a = document.createElement('a');
    a.href = url;
    a.download = `BatchConv_Mobile_${Date.now()}.zip`;
    a.click();
    setTimeout(() => {
        try { URL.revokeObjectURL(url); } catch (_) {}
        state.zipUrls.delete(url);
    }, 3000);
    showToast(state.lang === 'ru' ? 'ZIP готов' : 'ZIP ready');
});

const historyItems = [];

function addToHistory(item) {
    if (historyItems.some(h => h.id === item.id)) return;
    
    historyItems.unshift({
        id: item.id,
        resultName: item.resultName,
        targetFormat: state.targetFormat
    });
    updateHistoryUI();
}

function updateHistoryUI() {
    const historyList = document.getElementById('history-list');
    if (historyItems.length === 0) {
        historyList.innerHTML = `<div id="lang-hist-empty" class="text-center py-12 text-xs w-full" style="color: var(--text-secondary);">${translations[state.lang].histEmpty}</div>`;
        return;
    }

    historyList.innerHTML = '';
    historyItems.forEach(item => {
        const el = document.createElement('div');
        el.className = 'custom-card rounded-xl p-3 flex items-center justify-between text-xs w-full gap-2';

        el.innerHTML = `
            <div class="flex flex-col min-w-0 flex-1">
                <span class="font-bold truncate block w-full break-all">${item.resultName}</span>
                <span class="text-[10px]" style="color: var(--text-secondary);">${state.lang === 'ru' ? 'Формат' : 'Format'}: ${item.targetFormat.toUpperCase()}</span>
            </div>
            <span class="text-emerald-500 font-bold flex-shrink-0 ml-2">OK</span>
        `;
        historyList.appendChild(el);
    });
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.classList.remove('opacity-0');
    t.classList.add('opacity-100');
    setTimeout(() => {
        t.classList.remove('opacity-100');
        t.classList.add('opacity-0');
    }, 2500);
}

applyLanguage(state.lang);
checkPromoOnLoad();
window.addEventListener('beforeunload', () => cleanupCache());
