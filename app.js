/* ============================================
   DClaw Mobile — Application Logic
   Lumina Intelligence Design System
   ============================================ */

// === Wallet Login ===
function connectWallet() {
  const btn = document.querySelector('.login-connect-btn');
  btn.textContent = 'Connecting...';
  btn.disabled = true;
  
  setTimeout(() => {
    // Simulate wallet address
    const addr = '0x7a3b' + Math.random().toString(16).slice(2, 6) + '...f42d';
    localStorage.setItem('dclaw_wallet', addr);
    
    enterApp(addr);
  }, 1200);
}

function enterApp(addr) {
  const loginPage = document.getElementById('loginPage');
  const app = document.getElementById('app');
  
  // Update wallet address in account page
  const walletEl = document.getElementById('walletAddr');
  if (walletEl) walletEl.textContent = addr;
  
  // Fade out login, show app
  loginPage.classList.add('hiding');
  app.style.display = '';
  
  setTimeout(() => {
    loginPage.style.display = 'none';
  }, 400);
}

// Auto-login if already connected
document.addEventListener('DOMContentLoaded', () => {
  const savedWallet = localStorage.getItem('dclaw_wallet');
  if (savedWallet) {
    enterApp(savedWallet);
  }
});

// === i18n System ===
const i18n = {
  'zh-TW': {
    deviceList: '設備列表',
    currentDevice: '當前設備',
    tabDClaw: 'DClaw',
    tabControl: '控制',
    tabAgent: '代理',
    tabMe: '我的',
    skillMarket: '技能廣場',
    viewAll: '查看全部',
    tutorials: '使用教程',
    online: '在線',
    offline: '離線',
    notInstalled: '未安裝',
    installBtn: '一鍵安裝',
    channels: '頻道',
    sessions: '會話',
    cronJobs: '定時任務',
    heartbeat: '心跳',
    skills: '技能',
    tools: '工具',
    configuration: '配置',
    workspace: '工作區',
    mcp: 'MCP',
    accountSettings: '帳號設置',
    agentMgmt: 'Agent 管理',
    models: '模型',
    environments: '環境變數',
    security: '安全',
    tokenUsage: 'Token 用量',
    voiceTranscription: '語音轉錄',
    language: '語言',
    save: '儲存',
    create: '建立',
    importBtn: '匯入',
    upload: '上傳',
    download: '下載',
    dailyReport: '每日早報推送',
    healthCheck: '系統健康檢查',
    tutorial1Title: '快速開始',
    tutorial1Desc: '3分鐘內完成首個Agent部署',
    tutorial2Title: '技能管理指南',
    tutorial2Desc: '如何配置與優化Agent技能鏈',
    tutorial3Title: '頻道接入',
    tutorial3Desc: '將DClaw連接至您的社群平台',
    langName: '繁體中文',
    devicesSummary: '共 {n} 台設備已連結',
    enabled: '已啟用',
    disabled: '已停用',
    active: '活躍',
    inactive: '未啟用',
    builtinBot: '內建 · 機器人',
    builtinConnected: '內建 · 已連接',
    builtinNotConfigured: '內建 · 未配置',
    noFilesInWorkspace: '工作區內暫無文件',
    enableHeartbeat: '啟用心跳',
    interval: '間隔',
    hours: '小時',
    minutes: '分鐘',
    replyTarget: '回覆目標',
    silentMode: '靜默模式 (預設)',
    lastChatChannel: '最近聊天頻道',
    activeHours: '活動時段 (可選)',
    mcpClients: 'MCP 客戶端',
    local: '本地',
    enable: '啟用',
    reactAgent: 'ReAct Agent',
    agentLanguage: 'Agent 語言',
    userTimezone: '用戶時區',
    maxIterations: '最大迭代次數',
    contextManagement: '上下文管理',
    maxInputLength: '最大輸入長度',
    contextCompactRatio: '上下文壓縮比',
    toolDescShell: '在沙箱中執行命令',
    toolDescRead: '讀取本地文件內容',
    toolDescWrite: '建立新文件並寫入內容',
    toolDescEdit: '修改文件指定行',
    toolDescBrowser: '自動化網頁瀏覽與抓取',
    toolDescScreenshot: '擷取系統桌面截圖',
    loginTagline: '隨時隨地管理您的個人AI助手',
    connectWallet: '連接錢包',
    poweredBy: 'Powered by Community',
  },
  'en': {
    deviceList: 'Devices',
    currentDevice: 'Current',
    tabDClaw: 'DClaw',
    tabControl: 'Control',
    tabAgent: 'Agent',
    tabMe: 'Me',
    skillMarket: 'Skill Market',
    viewAll: 'View All',
    tutorials: 'Tutorials',
    online: 'Online',
    offline: 'Offline',
    notInstalled: 'Not Installed',
    installBtn: 'Install',
    channels: 'Channels',
    sessions: 'Sessions',
    cronJobs: 'Cron Jobs',
    heartbeat: 'Heartbeat',
    skills: 'Skills',
    tools: 'Tools',
    configuration: 'Configuration',
    workspace: 'Workspace',
    mcp: 'MCP',
    accountSettings: 'Account Settings',
    agentMgmt: 'Agent Management',
    models: 'Models',
    environments: 'Environments',
    security: 'Security',
    tokenUsage: 'Token Usage',
    voiceTranscription: 'Voice Transcription',
    language: 'Language',
    save: 'Save',
    create: 'Create',
    importBtn: 'Import',
    upload: 'Upload',
    download: 'Download',
    dailyReport: 'Daily Report Push',
    healthCheck: 'System Health Check',
    tutorial1Title: 'Quick Start',
    tutorial1Desc: 'Set up DClaw Agent in 3 minutes',
    tutorial2Title: 'Skill Management',
    tutorial2Desc: 'Configure and optimize Agent skill chains',
    tutorial3Title: 'Channel Integration',
    tutorial3Desc: 'Connect DClaw to your community platforms',
    langName: 'English',
    devicesSummary: '{n} devices linked',
    enabled: 'Enabled',
    disabled: 'Disabled',
    active: 'Active',
    inactive: 'Inactive',
    builtinBot: 'Built-in · Bot',
    builtinConnected: 'Built-in · Connected',
    builtinNotConfigured: 'Built-in · Not configured',
    noFilesInWorkspace: 'No files in workspace',
    enableHeartbeat: 'Enable Heartbeat',
    interval: 'Interval',
    hours: 'Hours',
    minutes: 'Minutes',
    replyTarget: 'Reply Target',
    silentMode: 'Silent mode (default)',
    lastChatChannel: 'Last chat channel',
    activeHours: 'Active Hours (optional)',
    mcpClients: 'MCP Clients',
    local: 'Local',
    enable: 'Enable',
    reactAgent: 'ReAct Agent',
    agentLanguage: 'Agent Language',
    userTimezone: 'User Timezone',
    maxIterations: 'Max Iterations',
    contextManagement: 'Context Management',
    maxInputLength: 'Max Input Length',
    contextCompactRatio: 'Context Compact Ratio',
    toolDescShell: 'Execute shell commands in sandbox',
    toolDescRead: 'Read contents from local file system',
    toolDescWrite: 'Create new files with content',
    toolDescEdit: 'Modify existing files at specific lines',
    toolDescBrowser: 'Automated web browsing and scraping',
    toolDescScreenshot: 'Capture system-level desktop images',
    loginTagline: 'Manage your personal AI assistant anytime, anywhere',
    connectWallet: 'Connect Wallet',
    poweredBy: 'Powered by Community',
  }
};

let currentLang = localStorage.getItem('dclaw-lang') || 'zh-TW';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('dclaw-lang', lang);
  applyI18n();
  const label = document.getElementById('currentLangLabel');
  if (label) label.textContent = i18n[lang].langName;
}

function applyI18n() {
  const strings = i18n[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (strings[key]) el.textContent = strings[key];
  });
}

function showLanguagePicker() {
  const newLang = currentLang === 'zh-TW' ? 'en' : 'zh-TW';
  setLang(newLang);
}

// === Device Data ===
const devices = [
  {
    id: 'dgrid-789',
    name: '#789',
    createdTime: '03-15 10:20',
    online: true,
    soc: 'Amlogic S905',
    ram: '1.8 GB',
    emmc: '6.5 GB',
    dclawInstalled: true,
    dclawVer: 'v1.2.0',
    cpu: '12%',
    mem: '834MB',
    wifi: 'HomeNet_5G',
    uptime: '14天',
    ip: '192.168.100.4',
    port: '8088'
  },
  {
    id: 'dgrid-790',
    name: '#790',
    createdTime: '03-18 14:45',
    online: false,
    soc: 'Amlogic S905',
    ram: '2 GB',
    emmc: '8 GB',
    dclawInstalled: false,
    dclawVer: null,
    cpu: '-',
    mem: '-',
    wifi: null,
    uptime: '-',
    ip: '192.168.100.5',
    port: '8088'
  },
  {
    id: 'dgrid-791',
    name: '#791',
    createdTime: '03-20 09:12',
    online: true,
    soc: 'Amlogic S905X3',
    ram: '2 GB',
    emmc: '16 GB',
    dclawInstalled: true,
    dclawVer: 'v1.1.0',
    cpu: '5%',
    mem: '612MB',
    wifi: 'Office_5G',
    uptime: '3天',
    ip: '10.0.2.15',
    port: '8088'
  }
];

let activeDeviceId = 'dgrid-789';

function getActiveDevice() {
  return devices.find(d => d.id === activeDeviceId);
}

// === Screen Navigation ===
let currentScreen = 'screen-dclaw';

function goScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    // Re-trigger animations
    target.querySelectorAll('.fade-up').forEach(el => {
      el.style.animation = 'none';
      el.offsetHeight;
      el.style.animation = '';
    });
  }

  // Update nav
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.screen === id);
  });

  // Show/hide header based on screen
  const header = document.getElementById('appHeader');
  header.style.display = id === 'screen-dclaw' ? '' : 'none';

  currentScreen = id;
}

// === Header Tab Switch ===
let currentHeaderTab = 'current';

function switchHeaderTab(tab) {
  currentHeaderTab = tab;

  // Update tab styles
  document.getElementById('headerTabDevices').classList.toggle('active', tab === 'devices');
  document.getElementById('headerTabCurrent').classList.toggle('active', tab === 'current');

  // Toggle views
  document.getElementById('viewCurrent').classList.toggle('hidden', tab !== 'current');
  document.getElementById('viewDeviceList').classList.toggle('hidden', tab !== 'devices');

  if (tab === 'devices') {
    renderDeviceList();
  }
}

// === Device List Rendering (Material Symbols) ===
function renderDeviceList() {
  const container = document.getElementById('deviceListContainer');
  const t = i18n[currentLang];

  container.innerHTML = devices.map((d, i) => `
    <div class="device-list-card ${d.id === activeDeviceId ? 'selected' : ''} ${d.online ? '' : 'offline'} fade-up d${i}"
         onclick="selectDevice('${d.id}')">
      <div class="device-list-top">
        <div class="device-list-icon"><span class="material-symbols-outlined">memory</span></div>
        <div class="device-list-info">
          <div class="device-list-name">
            ${d.name}
            ${!d.dclawInstalled ? `<span class="badge-mini">${t.notInstalled}</span>` : ''}
          </div>
          <div class="device-list-sn">Created Time: ${d.createdTime}</div>
        </div>
        <div class="device-list-side">
          ${!d.dclawInstalled ? 
            `<button class="install-btn-action" onclick="event.stopPropagation(); alert('${t.installBtn} ${d.name}')">
               <span class="material-symbols-outlined" style="font-size:16px">download</span>
               ${t.installBtn}
             </button>` :
            `<span class="hw-pill living"><span class="living-dot"></span>Living</span>`
          }
        </div>
      </div>
    </div>
  `).join('');

  // Add summary text
  const summary = container.parentElement.querySelector('.device-list-summary');
  if (!summary) {
    container.insertAdjacentHTML('afterend',
      `<div class="device-list-summary" style="text-align:center;padding:20px 0;font-size:13px;color:rgba(25,28,30,.30);font-weight:500">${t.devicesSummary.replace('{n}', devices.length)}</div>`
    );
  }
}

function selectDevice(deviceId) {
  const device = devices.find(d => d.id === deviceId);
  if (!device || !device.online) return;

  activeDeviceId = deviceId;
  updateDeviceHero();
  switchHeaderTab('current');
}

function updateDeviceHero() {
  const d = getActiveDevice();
  if (!d) return;
  const t = i18n[currentLang];

  document.getElementById('heroDeviceName').textContent = d.name;

  // DClaw status badge
  const badgeContainer = document.getElementById('heroStatusBadge');
  if (d.dclawInstalled) {
    badgeContainer.innerHTML = '<span class="dclaw-badge living"><span class="living-dot"></span> Living</span>';
  } else {
    badgeContainer.innerHTML = `<button class="install-btn"><span class="material-symbols-outlined" style="font-size:16px">download</span> ${t.installBtn}</button>`;
  }
}

// === Sub-Tab Navigation (Control / Agent) ===
function switchSubTab(group, tabName) {
  const tabsContainer = document.getElementById(group + 'SubTabs');
  if (tabsContainer) {
    tabsContainer.querySelectorAll('.sub-tab').forEach(t => {
      const onclick = t.getAttribute('onclick') || '';
      const match = onclick.match(/switchSubTab\(\s*'[^']+'\s*,\s*'([^']+)'\s*\)/);
      const thisTab = match ? match[1] : '';
      t.classList.toggle('active', thisTab === tabName);
    });
  }

  // Show/hide sub-pages
  const screen = document.getElementById('screen-' + group);
  if (screen) {
    screen.querySelectorAll('.sub-page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(group + '-' + tabName);
    if (target) {
      target.classList.add('active');
      target.querySelectorAll('.fade-up').forEach(el => {
        el.style.animation = 'none';
        el.offsetHeight;
        el.style.animation = '';
      });
    }
  }
}

// === Account Settings Page ===
function showAccountPage() {
  document.getElementById('accountPage').classList.add('open');
}

function hideAccountPage() {
  document.getElementById('accountPage').classList.remove('open');
}

function copyWallet() {
  const addr = document.getElementById('walletAddr').textContent;
  navigator.clipboard.writeText(addr).then(() => {
    const btn = document.querySelector('.account-copy-btn .material-symbols-outlined');
    btn.textContent = 'check';
    btn.style.color = 'var(--primary)';
    setTimeout(() => {
      btn.textContent = 'content_copy';
      btn.style.color = '';
    }, 1500);
  });
}

function handleLogout() {
  if (confirm('Are you sure you want to log out?')) {
    localStorage.removeItem('dclaw_wallet');
    location.reload();
  }
}

// === Providers Page ===
function showProvidersPage() {
  document.getElementById('providersPage').classList.add('open');
}

function hideProvidersPage() {
  document.getElementById('providersPage').classList.remove('open');
}

function showAddProviderModal() {
  document.getElementById('addProviderOverlay').classList.add('open');
}

function hideAddProviderModal() {
  document.getElementById('addProviderOverlay').classList.remove('open');
}

function showModelMgmtModal(btn) {
  const card = btn.closest('.provider-card');
  const name = card.querySelector('.provider-name').childNodes[0].textContent.trim();
  document.getElementById('modelMgmtTitle').textContent = name + ' \u2014 Model Management';
  document.getElementById('modelMgmtOverlay').classList.add('open');
}

function hideModelMgmtModal() {
  document.getElementById('modelMgmtOverlay').classList.remove('open');
  // also collapse form if open
  document.getElementById('addModelForm').classList.remove('open');
}

function toggleAddModelForm() {
  document.getElementById('addModelForm').classList.toggle('open');
}

// === Token Usage Page ===
function showTokenUsagePage() {
  document.getElementById('tokenUsagePage').classList.add('open');
}

function hideTokenUsagePage() {
  document.getElementById('tokenUsagePage').classList.remove('open');
}

// === Channel Modal ===
const channelData = {
  console:  { title: 'Console Settings',  doc: '', enabled: true },
  dingtalk: { title: 'DingTalk Settings', doc: 'DingTalk Doc', enabled: false },
  feishu:   { title: 'Feishu Settings',   doc: 'Feishu Doc',   enabled: false },
  discord:  { title: 'Discord Settings',  doc: 'Discord Doc',  enabled: false },
  telegram: { title: 'Telegram Settings', doc: 'Telegram Doc', enabled: false },
  qq:       { title: 'QQ Settings',       doc: 'QQ Doc',       enabled: false }
};

function openChannelModal(channelId) {
  const data = channelData[channelId];
  if (!data) return;
  
  document.getElementById('channelModalTitle').textContent = data.title;
  
  const docLink = document.getElementById('channelDocLink');
  const docText = document.getElementById('channelDocText');
  if (data.doc) {
    docLink.style.display = 'inline-flex';
    docText.textContent = data.doc;
  } else {
    docLink.style.display = 'none';
  }
  
  const toggle = document.getElementById('chSettingEnabled');
  toggle.classList.toggle('on', data.enabled);
  
  document.getElementById('chSettingPrefix').value = '';
  document.getElementById('chSettingClientId').value = '';
  document.getElementById('chSettingSecret').value = '';
  
  const modal = document.getElementById('channelModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeChannelModal(e) {
  if (e && e.target !== e.currentTarget) return;
  const modal = document.getElementById('channelModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function togglePassword(el) {
  const input = el.parentElement.querySelector('input');
  const icon = el.querySelector('.material-symbols-outlined');
  if (input.type === 'password') {
    input.type = 'text';
    icon.textContent = 'visibility';
  } else {
    input.type = 'password';
    icon.textContent = 'visibility_off';
  }
}

// === Session Modal ===
const sessionData = {
  session1: {
    name: 'Can you te',
    id: 'b578126d-1651-4a14-b555-8ec3ba0dc6b8',
    session_id: '1773909769951',
    user_id: 'default',
    channel: 'console'
  },
  session2: {
    name: "Let's star",
    id: 'a3f29e71-8824-4c0b-9a12-7df42c1e93a5',
    session_id: '1773908847203',
    user_id: 'default',
    channel: 'console'
  }
};

function openSessionModal(sessionId) {
  const data = sessionData[sessionId];
  if (!data) return;
  
  document.getElementById('modalSessionName').value = data.name;
  document.getElementById('modalSessionId').value = data.id;
  document.getElementById('modalSessionSid').value = data.session_id;
  document.getElementById('modalSessionUid').value = data.user_id;
  document.getElementById('modalSessionChannel').value = data.channel;
  
  const modal = document.getElementById('sessionModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSessionModal(e) {
  if (e && e.target !== e.currentTarget) return;
  const modal = document.getElementById('sessionModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// === Generic Modal ===
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id, e) {
  if (e && e.target !== e.currentTarget) return;
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// === Init ===
document.addEventListener('DOMContentLoaded', () => {
  applyI18n();
  updateDeviceHero();

  const label = document.getElementById('currentLangLabel');
  if (label) label.textContent = i18n[currentLang].langName;

  // URL double-click to copy
  document.querySelectorAll('.modal-url-list li').forEach(li => {
    li.style.cursor = 'pointer';
    li.addEventListener('dblclick', () => {
      const text = li.textContent.trim();
      navigator.clipboard.writeText(text).then(() => {
        const orig = li.textContent;
        li.textContent = '✓ Copied!';
        li.style.color = 'var(--primary)';
        setTimeout(() => {
          li.textContent = orig;
          li.style.color = '';
        }, 1200);
      });
    });
  });
});
