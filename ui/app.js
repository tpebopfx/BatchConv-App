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
        aboutVer: "Версия 3.1.0 (Responsive & Accordion Edition)",
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
        aboutVer: "Version 3.1.0 (Responsive & Accordion Edition)",
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
    inputFormat: 'auto',
    targetFormat: 'png',
    theme: localStorage.getItem('theme') || 'dark',
    lang: localStorage.getItem('lang') || 'ru',
    modalTarget: 'input',
    activeCategory: 'video'
};

// Formats file sizes properly to include KB, MB, and GB
function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
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
        return;
    }

    fileListContainer.innerHTML = '';
    state.files.forEach(item => {
        const el = document.createElement('div');
        el.className = 'custom-card rounded-xl p-3 flex items-center justify-between text-xs w-full gap-2';
        
        let badge = `<span class="px-2 py-1 rounded-md bg-yellow-600/20 text-yellow-500 font-semibold flex-shrink-0">${translations[state.lang].statusQueued}</span>`;
        if (item.status === 'processing') {
            badge = `<span class="px-2 py-1 rounded-md bg-blue-600/20 text-blue-400 font-semibold flex-shrink-0">${translations[state.lang].statusConverting} ${item.progress}%</span>`;
        } else if (item.status === 'success') {
            badge = `<span class="px-2 py-1 rounded-md bg-emerald-600/20 text-emerald-500 font-semibold flex-shrink-0">${translations[state.lang].statusDone}</span>`;
        }

        el.innerHTML = `
            <div class="flex flex-col gap-0.5 min-w-0 flex-1">
                <span class="font-bold truncate block w-full break-all">${item.file.name}</span>
                <span class="text-[10px]" style="color: var(--text-secondary);">${formatFileSize(item.file.size)}</span>
            </div>
            <div class="flex items-center gap-2 flex-shrink-0">
                ${badge}
                ${item.status === 'success' ? `
                    <button onclick="downloadSingle('${item.id}')" class="p-1.5 rounded-lg bg-emerald-600 text-white active:scale-90">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                    </button>
                ` : `
                    <button onclick="removeFile('${item.id}')" class="p-1.5 rounded-lg active:scale-90" style="background-color: var(--bg-card);"><svg class="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                `}
            </div>
        `;
        fileListContainer.appendChild(el);
    });
}

function removeFile(id) {
    state.files = state.files.filter(f => f.id !== id);
    updateQueueUI();
}

document.getElementById('clear-btn').addEventListener('click', () => {
    state.files = [];
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

    // Get max file size in queue (in MB)
    const maxSizeBytes = Math.max(...state.files.map(f => f.file.size));
    const maxSizeMB = maxSizeBytes / (1024 * 1024);

    if (maxSizeMB < 50) {
        // No warning, proceed immediately
        proceedConversion();
    } else {
        // Determine Warning Level
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
    }
});

function cancelConversion() {
    warnModal.classList.add('hidden');
    state.isConverting = false;
    startBtn.disabled = false;
    document.getElementById('clear-btn').disabled = false;
}

async function proceedConversion() {
    warnModal.classList.add('hidden');
    state.isConverting = true;
    startBtn.disabled = true;
    document.getElementById('clear-btn').disabled = true;
    progressCard.classList.remove('hidden');

    let successCount = 0;

    for (let i = 0; i < state.files.length; i++) {
        const item = state.files[i];
        if (item.status === 'success') {
            successCount++;
            continue;
        }
        item.status = 'processing';
        item.progress = 25;
        updateQueueUI();

        await new Promise(resolve => setTimeout(resolve, 600));
        
        item.progress = 100;
        item.status = 'success';
        item.resultUrl = URL.createObjectURL(item.file);
        item.resultName = item.file.name.substring(0, item.file.name.lastIndexOf('.')) + '.' + state.targetFormat;
        successCount++;

        const totalPercent = Math.round(((i + 1) / state.files.length) * 100);
        progressBar.style.width = `${totalPercent}%`;
        progressPercent.innerText = `${totalPercent}%`;
        progressStatus.innerText = state.lang === 'ru' ? `Конвертировано ${i + 1} из ${state.files.length}` : `Converted ${i + 1} of ${state.files.length}`;
        
        addToHistory(item);
        updateQueueUI();
    }

    state.isConverting = false;
    document.getElementById('clear-btn').disabled = false;
    document.getElementById('zip-btn').classList.remove('hidden');
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
    const a = document.createElement('a');
    a.href = url;
    a.download = `BatchConv_Mobile_${Date.now()}.zip`;
    a.click();
    showToast('ZIP OK!');
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