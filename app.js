const PAGE_LINKS = [
  { key: 'home', label: '首页', href: './index.html' },
  { key: 'product', label: '产品', href: './product.html' },
  { key: 'download', label: '下载', href: './download.html' },
];

function icon(name, extraClass = '') {
  return `<i class="icon ${extraClass}" data-lucide="${name}"></i>`;
}

function footerIcon(name) {
  return `<i class="icon" data-lucide="${name}"></i>`;
}

function appLink(href, label) {
  return `<a href="${href}">${label}</a>`;
}

function navLink(link, activePage, mobile = false) {
  const active = activePage === link.key ? 'active' : '';
  return `<a class="${active}" href="${link.href}" data-nav-link="${link.key}">${link.label}</a>`;
}

function renderHeader(activePage) {
  return `
    <nav class="site-nav" id="site-nav">
      <div class="container nav-inner">
        <a class="brand" href="./index.html" aria-label="返回首页">
          <img class="brand-mark" src="./assets/logo.png" alt="选图搭子 Logo" />
          <span class="brand-text">选图搭子</span>
        </a>

        <div class="nav-links" aria-label="主导航">
          ${PAGE_LINKS.map((link) => navLink(link, activePage)).join('')}
        </div>

        <button class="nav-toggle" type="button" aria-label="展开菜单" aria-expanded="false" id="nav-toggle">
          ${icon('menu')}
        </button>
      </div>

      <div class="mobile-nav" id="mobile-nav">
        <div class="container">
          <div class="mobile-links">
            ${PAGE_LINKS.map((link) => navLink(link, activePage, true)).join('')}
          </div>
        </div>
      </div>
    </nav>
  `;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand">
              <img class="brand-mark" src="./assets/logo.png" alt="选图搭子 Logo" />
              <span class="brand-text">选图搭子</span>
            </div>
            <p class="footer-desc">专为摄影师打造的智能选图搭子。利用 AI 技术，快速剔除废片、重复底片，让修图更高效。</p>
            <div class="footer-icons">
              <a href="#" aria-label="WeChat">${footerIcon('message-circle')}</a>
              <a href="#" aria-label="Twitter">${footerIcon('twitter')}</a>
              <a href="mailto:yunongguo9@gmail.com" aria-label="Email">${footerIcon('mail')}</a>
            </div>
          </div>

          <div>
            <h3 class="footer-heading">产品</h3>
            <ul class="footer-list">
              <li><a href="./product.html">产品功能</a></li>
              <li><a href="./download.html">下载客户端</a></li>
              <li><a href="./changelog.html">更新日志</a></li>
              <li><a href="./about.html">关于我们</a></li>
            </ul>
          </div>

          <div>
            <h3 class="footer-heading">支持与法律</h3>
            <ul class="footer-list">
              <li><a href="./faq.html">常见问题</a></li>
              <li><a href="./contact.html">联系方式</a></li>
              <li><a href="./legal.html#privacy">隐私政策</a></li>
              <li><a href="./legal.html#terms">用户协议</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="footer-copy">© ${year} 选图搭子. All rights reserved.</p>
          <div class="footer-meta">
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">蜀ICP备2026016056号-1</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function sectionReveal(className = '') {
  return className ? `${className} reveal` : 'reveal';
}

function featureList(items, accent = 'blue') {
  const colorClass = `accent-${accent}`;
  return `
    <ul class="feature-list">
      ${items
        .map(
          (item) => `
            <li>
              <i class="icon ${colorClass}" data-lucide="check-circle-2"></i>
              <span>${item}</span>
            </li>
          `,
        )
        .join('')}
    </ul>
  `;
}

function demoVideo(label, iconName = 'play-circle', extra = '', src = '') {
  const videoMarkup = src
    ? `
      <video class="demo-video-player" autoplay muted loop playsinline preload="metadata" aria-label="${label}">
        <source src="${src}" type="video/mp4" />
      </video>
    `
    : `
      <div class="center">
        <div class="text-center">
          <i class="icon" data-lucide="${iconName}" style="width:64px;height:64px;color:#cbd5e1"></i>
          <div class="label">${label}</div>
        </div>
      </div>
    `;

  return `
    <div class="demo-video ${extra}">
      ${videoMarkup}
    </div>
  `;
}

function featureRow({
  eyebrow,
  eyebrowClass = '',
  title,
  desc,
  bullets,
  media,
  reverse = false,
}) {
  return `
    <div class="feature-row ${reverse ? 'reverse' : ''}">
      <div class="feature-media">${media}</div>
      <div class="feature-copy">
        <div class="eyebrow ${eyebrowClass}">${eyebrow}</div>
        <h3>${title}</h3>
        <p>${desc}</p>
        ${featureList(bullets, eyebrowClass.includes('green') ? 'green' : eyebrowClass.includes('purple') ? 'purple' : eyebrowClass.includes('pink') ? 'pink' : 'blue')}
      </div>
    </div>
  `;
}

function homePage() {
  return `
    <section class="home-hero">
      <div class="home-atmosphere" aria-hidden="true">
        <div class="home-orb one"></div>
        <div class="home-orb two"></div>
        <div class="home-orb three"></div>
        <div class="grid-overlay"></div>
        <div class="home-particles" id="home-particles"></div>
      </div>

      <div class="container home-hero-inner hero-stack">
        <div class="pill reveal">
          ${icon('sparkles')}
          <span class="muted">选图搭子 1.0 现已发布</span>
        </div>

        <p class="home-kicker reveal">CULLMATE</p>

        <div class="home-hero-media reveal" aria-hidden="true">
          <img src="./assets/hero-gemini.png" alt="" />
        </div>

        <div class="home-copy-block reveal">
          <h1 class="home-title">
            <span class="home-glow" aria-hidden="true"></span>
            <span class="title-text">选图 从未如此智能</span>
          </h1>

          <div class="home-cta">
            <a class="btn btn-primary btn-gradient" href="./product.html">
              <span>立即下载 ${icon('arrow-right')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function productPage() {
  return `
    <section class="section product-hero">
      <div class="container">
        <h1 class="page-heading reveal">重新定义选图效率。</h1>
        <p class="page-lead reveal">选图搭子 1.0 带来前所未有的 AI 智能选图体验。从自动剔除废片到快速 RAW 加载，每一项功能都为节省您的时间而生。</p>
      </div>
    </section>

    <section class="section mockup-wrap">
      <div class="container">
        <div class="product-video-card reveal">
          <div class="product-video-header">
            <span class="window-dot red"></span>
            <span class="window-dot yellow"></span>
            <span class="window-dot green"></span>
            <div class="product-video-title">${icon('video')} 完整操作流程视频占位</div>
          </div>

          <div class="product-video-body">
            <div class="product-video-placeholder">
              <div class="product-video-icon">${icon('play-circle')}</div>
              <h3>这里放完整操作流程视频</h3>
              <p>先保留视频卡片的位置，等你的视频做完后直接替换成 <code>assets/videos/product-flow.mp4</code> 即可。</p>
              <div class="product-video-meta">
                <span>16:9 视频卡片</span>
                <span>自动播放 / 静音 / 循环</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="showcase">
      <div class="container showcase-grid">
        ${featureRow({
          reverse: true,
          eyebrow: '核心功能',
          eyebrowClass: 'blue',
          title: 'AI 智能选图，自动剔除废片',
          desc: '告别手动筛选的繁琐。选图搭子 强大的本地 AI 引擎能够精准识别照片中的瑕疵，包括闭眼、失焦、严重模糊以及曝光异常。一键标记废片，让您只专注于最好的作品。',
          bullets: ['精准识别闭眼与微表情'],
          media: demoVideo('AI 智能选图演示视频', 'play-circle', '', './assets/videos/ai-select.mp4'),
        })}

        ${featureRow({
          eyebrow: '高效解析',
          eyebrowClass: 'pink',
          title: 'RAW 格式快速加载',
          desc: '无需等待漫长的预览图生成。我们深度优化了 RAW 文件的解析引擎，即使是大体积的源文件，也能实现快速的预览加载，让您的选图过程保持流畅。',
          bullets: ['支持市面主流相机 RAW 格式', '无需预渲染，即点即看', '极低内存占用'],
          media: demoVideo('快速加载演示视频', 'play-circle', '', './assets/videos/raw-load.mp4'),
        })}

        ${featureRow({
          reverse: true,
          eyebrow: '细节控必备',
          eyebrowClass: 'green',
          title: '人脸放大对比',
          desc: '拍摄合影时，最难判断的往往是关键人物的眼神与表情。使用人脸放大功能，可将重要人脸单独放大显示，在多张照片间快速切换观察细节，更高效地完成筛选。',
          bullets: ['重要人脸单独放大显示', '快速观察表情与闭眼细节'],
          media: demoVideo('人脸放大演示视频', 'play-circle', '', './assets/videos/face-zoom.mp4'),
        })}

        ${featureRow({
          eyebrow: '智能分组',
          eyebrowClass: 'purple',
          title: '相似内容归组 & Best 推荐',
          desc: '连拍了几十张？没关系。选图搭子 会自动将相似场景、相同人物的照片进行智能归组。更棒的是，AI 会综合评估清晰度、表情和构图，为您推荐每组中的 Best 最佳照片。',
          bullets: ['毫秒级连拍照片分组', '多维度综合评分推荐', '支持自定义分组严格度'],
          media: demoVideo('相似归组演示视频', 'play-circle', '', './assets/videos/grouping.mp4'),
        })}

        ${featureRow({
          reverse: true,
          eyebrow: '星级标记',
          eyebrowClass: 'green',
          title: '一键标星，导出后星级继续保留',
          desc: '在筛选过程中直接给照片打 1 到 5 星。导出时会同步写入星级元数据，让 Lightroom 和 Capture One 打开后也能继续显示相同的星级，方便您无缝进入精修流程。',
          bullets: ['支持 1-5 星快速标记', '导出时同步写入评级元数据', 'Lightroom / Capture One 可继续显示星级'],
          media: demoVideo('标星同步导出演示视频', 'star', '', './assets/videos/star-export.mp4'),
        })}

        ${featureRow({
          eyebrow: '安全至上',
          eyebrowClass: 'green',
          title: '100% 本地处理，极致隐私保护',
          desc: '在云端 AI 盛行的今天，我们坚持将选图搭子的核心 AI 引擎完全部署在您的本地设备上。这意味着您的任何私人照片、商业机密、未公开作品都不会离开您的电脑。',
          bullets: ['零数据上传，彻底杜绝隐私泄露', '符合最严格的商业保密要求'],
          media: `
            <div class="demo-video">
              <div class="center">
                <div class="text-center">
                  <i class="icon" data-lucide="shield-check" style="width:64px;height:64px;color:rgba(16,185,129,0.55)"></i>
                  <div class="label" style="color:rgba(16,185,129,0.45)">本地离线运行</div>
                </div>
              </div>
            </div>
          `,
        })}
      </div>
    </section>

    <section class="pricing-section">
      <div class="pricing-glow" aria-hidden="true"></div>
      <div class="container">
        <div class="section-heading">
          <h2>版本介绍</h2>
          <p class="page-lead">官网仅展示软件功能与下载入口。</p>
        </div>

        <div class="pricing-grid">
          <article class="pricing-card featured reveal">
            <div class="ribbon">版本介绍</div>
            <h3>1.0 版本</h3>
            <p>适合独立摄影师，先下载体验完整功能。</p>
            <div class="price-row" style="display:flex;align-items:flex-end;gap:16px;flex-wrap:wrap;margin:14px 0 10px">
              <span class="price" style="font-size:3.6rem;line-height:1;font-weight:900;letter-spacing:-.04em">本地软件</span>
            </div>
            <ul class="bullets">
              <li>${icon('check-circle-2')}<span>终身使用 1.0 版本所有功能</span></li>
              <li>${icon('check-circle-2')}<span>包含 AI 智能选图与分组</span></li>
              <li>${icon('check-circle-2')}<span>免费获取 1.0 后续小版本更新</span></li>
              <li>${icon('check-circle-2')}<span>支持单设备授权使用</span></li>
            </ul>
            <div style="display:grid;gap:12px">
              <a class="btn btn-primary" href="./download.html">下载客户端 ${icon('arrow-right')}</a>
            </div>
            <p style="text-align:center;margin-top:16px">网站仅提供软件下载与软件介绍。</p>
          </article>

          <article class="pricing-card soft reveal">
            <h3>即将加入更多功能</h3>
            <p>我们持续迭代选图、分组和导出效率相关能力。</p>
            <ul class="bullets">
              <li style="color:#64748b">${icon('check-circle-2')}<span>更快的局部预览与解析性能</span></li>
              <li style="color:#64748b">${icon('check-circle-2')}<span>更丰富的筛选辅助规则</span></li>
              <li style="color:#64748b">${icon('check-circle-2')}<span>更顺滑的导出与工作流适配</span></li>
            </ul>
            <button class="btn btn-disabled" disabled>敬请期待</button>
          </article>
        </div>
      </div>
    </section>
  `;
}

function downloadPage() {
  return `
    <section class="download-page">
      <div class="download-glow" aria-hidden="true"></div>
      <div class="container">
        <div class="section-heading">
          <h1 class="page-heading reveal">开始您的高效选图之旅。</h1>
          <p class="page-lead reveal" style="max-width:760px;margin:0 auto">下载 选图搭子 客户端，安装后即可体验核心选图能力与本地处理流程。</p>
        </div>

        <div class="download-grid">
          <article class="download-card reveal">
            <div class="floating-tag green">${icon('shield-check')} Apple 官方认证</div>
            <div class="big-icon">${icon('apple')}</div>
            <h3>macOS</h3>
            <div class="download-meta">
              <strong>v1.0.3 Beta</strong>
              <span>•</span>
              <span>2026-03-25</span>
              <span>•</span>
              <span>158 MB</span>
            </div>

            <div class="spec-box">
              <h4>系统与硬件要求：</h4>
              <div class="spec-item">${icon('apple')}<span>macOS 12.0 或更高版本<br><small style="color:#94a3b8">原生支持 Apple Silicon (M1/M2/M3) 及 Intel 芯片</small></span></div>
              <div class="spec-item">${icon('cpu')}<span>最低 8GB 统一内存<br><small style="color:#94a3b8">推荐 16GB 及以上以获得最佳 AI 选图速度</small></span></div>
              <div class="spec-item">${icon('hard-drive')}<span>2GB 可用存储空间</span></div>
            </div>

            <button class="btn btn-primary download-action" data-platform="mac" type="button">${icon('download')} 下载 Mac 版</button>
            <p style="font-size:.88rem;color:#94a3b8;margin:14px 0 0;display:flex;gap:6px;justify-content:center;align-items:center">${icon('shield-check')} 100% 纯净：无广告、无捆绑、无隐私收集</p>
          </article>

          <article class="download-card muted reveal">
            <div class="floating-tag gray">开发中</div>
            <div class="big-icon muted">${icon('monitor')}</div>
            <h3 style="color:#94a3b8">Windows</h3>
            <div class="download-meta" style="background:#f1f5f9;color:#94a3b8">
              <span>敬请期待</span>
            </div>

            <div class="spec-box" style="background:#f8fafc80;opacity:.74">
              <h4 style="color:#64748b">预计系统要求：</h4>
              <div class="spec-item" style="color:#64748b">${icon('monitor')}<span>Windows 10 / 11 (64-bit)</span></div>
              <div class="spec-item" style="color:#64748b">${icon('cpu')}<span>建议配备 Nvidia RTX 系列独立显卡<br><small>以加速本地 AI 模型推理</small></span></div>
            </div>

            <button class="btn btn-disabled" disabled type="button">${icon('monitor')} Windows 版即将推出</button>
          </article>
        </div>

        <div class="agreement reveal" id="agreement-wrap">
          <label>
            <span class="check-box" id="agreement-box"></span>
            <input id="agreement-input" type="checkbox" />
            <span class="agreement-text">
              我已阅读并同意 选图搭子 的 <a href="./legal.html#terms">用户协议</a> 和 <a href="./legal.html#privacy">隐私政策</a>
            </span>
          </label>
          <div class="error-text" id="agreement-error" hidden>请先勾选同意用户协议和隐私政策</div>
        </div>

        <div class="howto-card reveal">
          <h3>如何开始使用？</h3>
          <div class="steps">
            <div class="step">
              <div class="circle" style="background:#dbeafe;color:#2563eb">${icon('download')}</div>
              <h4>1. 下载并安装</h4>
              <p>选择适合您操作系统的版本，下载并完成安装。</p>
            </div>
            <div class="step">
              <div class="circle" style="background:#f3e8ff;color:#7c3aed">${icon('key')}</div>
              <h4>2. 打开软件</h4>
              <p>启动 选图搭子，导入照片后即可开始使用核心功能。</p>
            </div>
            <div class="step">
              <div class="circle" style="background:#fce7f3;color:#db2777">${icon('sparkles')}</div>
              <h4>3. 开始选图</h4>
              <p>使用 AI 归组、废片识别和 Best 推荐，快速完成初筛。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function aboutPage() {
  return `
    <section class="about-hero">
      <div class="orb" aria-hidden="true"></div>
      <div class="container">
        <h1 class="page-heading reveal">为效率而生。</h1>
        <p class="page-lead reveal">
          选图搭子 (Cullmate) 是一款专为职业摄影师打造的 AI 智能选图引擎。<br class="hide-mobile" />
          我们深知，在快门按下的那一刻，创作才刚刚开始，而随之而来的海量素材筛选往往耗尽了摄影师的精力。<br class="hide-mobile" />
          我们将繁琐的初筛、去重与瑕疵检测交给机器，把最宝贵的创作时间还给你。
        </p>
      </div>
    </section>

    <section class="about-white about-philosophy">
      <div class="container">
        <h2 class="reveal">专注，所以专业。</h2>
        <div class="about-columns">
          <div class="about-column reveal">
            <div class="about-icon">${icon('target')}</div>
            <h3>不是修图，是选图。</h3>
            <p>选图搭子 1.0 的定位非常明确：它不是一个大而全的后期修图平台，也不是一个臃肿的影像资产管理工具。它是一款纯粹的效率型工具，像一把锋利的手术刀，精准切入“选图初筛”这一最耗时、最枯燥的环节。我们希望它能无缝接入您现有的 Lightroom 或 Capture One 工作流，成为您最得力的助手。</p>
          </div>
          <div class="about-column reveal">
            <div class="about-icon">${icon('zap')}</div>
            <h3>最小阻力，最大价值。</h3>
            <p>作为首个商业化版本，我们采用“最小可售卖版本”策略。我们没有堆砌华而不实的功能，而是优先解决最刚需、最高频的痛点：连拍分组、闭眼检测。用最直观的界面和最少的操作层级，帮助您在数千张海量素材中，以极高的效率完成第一轮粗筛与优选。</p>
          </div>
          <div class="about-column reveal">
            <div class="about-icon" style="background:#ecfdf5">${icon('shield-check')}</div>
            <h3>绝对安全，拥抱未来。</h3>
            <p>作为摄影师，客户的隐私与未公开作品的安全性至关重要。在 1.0 版本中，选图搭子坚持 100% 本地离线运行，所有 AI 推理均在您的设备上完成。未来的 2.0 与 3.0 版本也将继续坚持本地运行路线，在保障数据隐私与用户授权的前提下，持续提升图像理解能力与整体选图效率。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-dark">
      <div class="container">
        <h2 class="reveal">谁在使用 选图搭子？</h2>
        <div class="audience-grid">
          <article class="audience-card reveal">
            <div class="icon-wrap">${icon('users')}</div>
            <h3>婚礼摄影师</h3>
            <p>面对数千张连拍素材，快速剔除表情崩坏与闭眼废片，快速锁定完美瞬间。</p>
          </article>
          <article class="audience-card reveal">
            <div class="icon-wrap">${icon('scan')}</div>
            <h3>人像摄影师</h3>
            <p>在相似的构图中，通过 AI 辅助对比微表情差异，轻松选出最佳神态。</p>
          </article>
          <article class="audience-card reveal">
            <div class="icon-wrap">${icon('clock')}</div>
            <h3>活动纪实从业者</h3>
            <p>告别漫长的人工逐张对比，让 AI 自动归组相似场景，大幅缩短交付周期。</p>
          </article>
        </div>
      </div>
    </section>

    <section class="value-section">
      <div class="value-orb" aria-hidden="true"></div>
      <div class="container">
        <div class="value-card reveal">
          <div style="width:64px;height:64px;margin:0 auto 24px;color:#0f172a">${icon('shield-check')}</div>
          <h2>用最少的操作，<br>省下最明显的时间。</h2>
          <p>这就是 选图搭子 的核心价值主张。<br>我们不追求替代摄影师的审美，而是通过 AI 消除机械劳动，让您在面对上万张原片时，依然能保持敏锐的艺术直觉。</p>
        </div>
      </div>
    </section>
  `;
}

function faqItem(question, answer) {
  return `
    <article class="content-card faq-item reveal">
      <h3>${question}</h3>
      <div>${answer}</div>
    </article>
  `;
}

function faqPage() {
  return `
    <section class="content-page">
      <div class="container">
        <div class="page-title-block">
          <div class="page-icon-box blue reveal">${icon('help-circle')}</div>
          <h1 class="page-heading reveal" style="margin-bottom:14px">常见问题解答</h1>
          <p class="page-lead reveal">如果您在这里找不到答案，请随时与我们联系。</p>
        </div>

        <div class="faq-list">
          ${faqItem('买断制是什么意思？', '<p>买断制意味着您只需支付一次费用，即可永久使用 选图搭子 1.0 的所有功能，后续 1.0 小版本的更新也完全免费，无需按月或按年订阅。</p>')}
          ${faqItem(
            '升级到 2.0 或 3.0 需要重新购买吗？',
            `
              <div>
                <p>对于 1.0 买断用户，未来升级到 2.0 或 3.0 等大版本时，只需补齐差价即可升级，无需全额重新购买。</p>
                <p>选图搭子 1.0 当前阶段不纳入以下内容：</p>
                <ul>
                  <li>复杂人像分类体系</li>
                  <li>情绪分类、场景分类、动作分类</li>
                </ul>
                <p>选图搭子 1.0 本质上是一款围绕“初筛效率”设计的本地工具，而不是全流程修图 SaaS 或完整经营后台。</p>
              </div>
            `,
          )}
          ${faqItem('支持哪些操作系统？', '<p>目前支持 macOS（Apple Silicon M1/M2/M3 及 Intel 芯片，macOS 12.0 或更高版本）。Windows 版本暂未开放。</p>')}
          ${faqItem('如何激活 7 天免费试用？', '<p>下载并安装客户端后，在软件内使用手机号注册并登录账号，即可自动开启 7 天全功能免费试用。</p>')}
        </div>
      </div>
    </section>
  `;
}

function contactPage() {
  return `
    <section class="content-page">
      <div class="container">
        <div class="page-title-block">
          <h1 class="page-heading reveal" style="margin-bottom:18px">联系我们</h1>
          <p class="page-lead reveal">无论您是遇到使用问题、有功能建议，还是寻求商务合作，我们都随时准备为您提供帮助。</p>
        </div>

        <div class="contact-grid">
          <article class="content-card contact-card reveal">
            <div class="card-icon" style="background:#eef2ff;color:#4f46e5">${icon('mail')}</div>
            <h3>邮件支持</h3>
            <p>对于技术支持、账号问题或一般咨询，请发送邮件给我们。我们通常会在 24 小时内回复。</p>
            <a class="contact-link" href="mailto:yunongguo9@gmail.com">yunongguo9@gmail.com ${icon('arrow-right')}</a>
          </article>

          <article class="content-card contact-card reveal">
            <div class="card-icon" style="background:#dcfce7;color:#16a34a">${icon('message-circle')}</div>
            <h3>微信客服</h3>
            <p>添加我们的官方微信客服，获取更及时的帮助，或加入用户交流群获取最新资讯。</p>
            <div style="font-weight:600;color:#0f172a">微信号：guo357719175</div>
          </article>
        </div>

        <div class="contact-banner reveal">
          <div class="orb" aria-hidden="true"></div>
          <div class="inner">
            <h2 style="margin:0 0 12px;font-size:2rem">商务合作</h2>
            <p>如果您是摄影工作室、摄影培训机构或相关媒体，希望与我们探讨合作机会，请直接联系我们的商务团队。</p>
            <a class="btn btn-light" href="mailto:yunongguo9@gmail.com">联系商务团队</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function legalPage() {
  return `
    <section class="content-page">
      <div class="container">
        <div class="legal-card reveal">
          <h1>法律与隐私</h1>
          <p class="updated">最后更新时间：2026年4月</p>

          <section class="legal-section" id="privacy">
            <h2>隐私政策</h2>
            <div class="legal-prose">
              <p>选图搭子（以下简称“我们”）深知个人信息对您的重要性，我们将严格遵守相关法律法规，采取相应的安全保护措施来保护您的个人信息。</p>
              <p><strong>特别提示：选图搭子 1.0、2.0 及 3.0 的核心定位均是“本地 AI 选图工具”，我们的核心照片分析与筛选工作流均在您的本地设备上完成，我们绝不会将您的原片上传至云端。</strong></p>
              <p>请您在使用我们的产品与/或服务前，仔细阅读并充分理解本《选图搭子 隐私政策》。</p>

              <h3>1. 我们如何收集和使用您的信息</h3>
              <p>为了向您提供软件的各项功能及服务，我们将根据“合法、正当、必要”的原则，在以下场景区分收集和使用您的信息：</p>

              <h4>1.1 用户主动提供的信息</h4>
              <p>当您注册账号时，您可能需要向我们主动提供以下信息：</p>
              <ul>
                <li><strong>账号信息：</strong>您的手机号码或其他登录凭证（用于创建账号和身份验证）。</li>
                <li><strong>基础资料：</strong>您自愿设置的账户昵称、头像等。</li>
              </ul>

              <h4>1.2 本地处理的照片数据（核心声明）</h4>
              <ul>
                <li><strong>本地处理原则：</strong>您导入到 选图搭子 软件中的照片、图片文件、文件夹路径、筛选结果、项目数据、导出结果等，均属于您在本地设备上处理的数据内容。</li>
                <li><strong>不上传云端：</strong>由于 选图搭子 的核心定位是本地 AI 工具，本软件的所有核心选图、去重、闭眼及废片分析功能，均完全在您的本地设备上运行，绝不会将您的照片上传至任何云端服务器。您的影像资产隐私将得到最大程度的本地化保护。</li>
              </ul>

              <h4>1.3 订单与授权信息</h4>
              <p>为了保障您的合法权益、确认您的软件使用权限，我们会收集并记录您的：</p>
              <ul>
                <li><strong>交易状态：</strong>购买记录、订单号、支付状态、退款记录。</li>
                <li><strong>授权状态：</strong>试用期状态、1.0 版本买断授权状态、设备绑定记录及授权密钥信息。</li>
              </ul>

              <h4>1.4 软件运行必要信息</h4>
              <p>为保障软件的安全稳定运行、进行授权验证、异常排查及服务改进，在软件后台运行期间，我们可能会自动收集必要的系统与技术性数据，包括：</p>
              <ul>
                <li><strong>设备信息：</strong>设备型号、操作系统版本、唯一设备标识符（如 MAC 地址/机器码，仅用于设备授权绑定与限制）。</li>
                <li><strong>日志信息：</strong>软件崩溃日志、错误代码、基础运行日志（不包含您的照片实体内容）。</li>
              </ul>
              <p>这些信息仅限于实现登录、授权、购买、稳定性维护和安全风控所必需的最小范围。</p>

              <h3>2. 我们如何存储和保护您的信息</h3>
              <ul>
                <li><strong>存储地点：</strong>我们在中华人民共和国境内收集和产生的个人信息，将存储在境内服务器。</li>
                <li><strong>安全措施：</strong>我们采用业界标准的安全技术措施（如加密传输、数据脱敏等）来保护您的订单、账号及授权等敏感信息，防止数据遭到未经授权的访问、公开披露、使用或修改。</li>
                <li><strong>本地数据安全：</strong>对于您在本地处理的照片数据，其安全性依赖于您个人设备的物理及系统安全，请您妥善保管您的个人电脑及存储设备。</li>
              </ul>

              <h3>3. 我们如何共享、公开披露您的信息</h3>
              <p>我们不会将您的个人信息出售给任何第三方。我们仅在以下情况共享或披露您的信息：</p>
              <ul>
                <li>获得您的明确同意。</li>
                <li>基于法定情形：根据法律法规规定、诉讼争议解决需要，或行政、司法机关依法提出的要求。</li>
                <li>与授权合作伙伴共享：例如，为了完成订单支付，我们需要将必要的订单号及金额信息共享给第三方支付机构（如微信支付、支付宝）。</li>
              </ul>

              <h3>4. 您的权利</h3>
              <p>您对自己的个人信息享有查阅、更正、补充及删除的权利。您可以通过软件内的账号设置页面管理您的基础信息。如您需要注销账号，可联系我们的官方客服，我们将在核实您的身份及订单结算状态后，在法定时限内为您处理账号注销。</p>

              <h3>5. 联系我们</h3>
              <p>如果您对本隐私政策或您的个人信息保护有任何疑问、意见或建议，可通过以下方式与我们联系：</p>
              <ul>
                <li><strong>客服邮箱：</strong>yunongguo9@gmail.com</li>
                <li><strong>客服微信：</strong>guo357719175</li>
              </ul>
            </div>
          </section>

          <section class="legal-section" id="terms">
            <h2>用户协议</h2>
            <div class="legal-prose">
              <p>欢迎您使用 选图搭子！</p>
              <p>本《选图搭子 用户协议》（以下简称“本协议”）是您（以下简称“用户”或“您”）与 选图搭子 软件开发者/运营方（以下简称“我们”或“平台”）之间关于下载、安装、使用 选图搭子 软件及相关服务所订立的合法协议。<strong>在注册、登录或使用本软件前，请您务必审慎阅读、充分理解各条款内容，特别是免除或限制责任的条款、知识产权条款以及关于 AI 辅助判断的特别说明。</strong></p>

              <h3>1. 软件定位与服务内容</h3>
              <ul>
                <li><strong>软件定位：</strong>选图搭子是一款专为摄影师设计的本地 AI 选图工具。本软件聚焦于“选图初筛效率”，旨在通过本地工作流帮助用户降低海量素材的筛查压力。当前版本支持 macOS（Apple Silicon M1/M2/M3 及 Intel 芯片，macOS 12.0 或更高版本），Windows 版本暂未开放。</li>
                <li><strong>非全流程平台：</strong>选图搭子本质上是一款效率型辅助工具，并非全流程修图 SaaS 或完整经营后台。当前版本不包含复杂人像分类体系、情绪/场景/动作分类等功能。</li>
              </ul>

              <h3>2. 核心功能与 AI 辅助判断特别声明</h3>
              <p><strong>核心功能：</strong>选图搭子提供以下核心初筛辅助功能：</p>
              <ul>
                <li><strong>相似内容识别与归组：</strong>对导入照片进行相似内容识别，将明显重复或连续相似的照片归组。</li>
                <li><strong>重复组内 Best 选择：</strong>在重复照片组中，辅助推荐相对更优的照片。</li>
                <li><strong>闭眼识别：</strong>识别照片中的明显闭眼情况，辅助标记或排除。</li>
                <li><strong>废片识别：</strong>对明显失焦、严重模糊、严重曝光异常、误触快门等明显低可用性照片进行辅助识别并归入“废片”类型。</li>
              </ul>

              <p><strong>AI 辅助性质与责任边界（重要）：</strong></p>
              <ul>
                <li><strong>仅为效率辅助：</strong>上述识别、分组、辅助判断和推荐结果，仅属于提升筛选效率的辅助能力，我们不对照片内容的绝对正确性或百分之百准确性作出任何保证。</li>
                <li><strong>不评判艺术价值：</strong>“废片”识别仅基于技术指标（如对焦、曝光等）进行效率辅助判断，绝不代表对照片的艺术价值、纪实价值、情绪价值或特殊保留意义作出最终结论。</li>
                <li><strong>用户复核义务：</strong>软件的识别与归类结果仅供参考。最终保留、删除、导出或使用某张照片的决定，必须由您自行人工复核并作出。</li>
                <li><strong>免责声明：</strong>因您完全依赖软件的 AI 判断结果、未作必要人工复核而导致的任何素材误删、丢失、交付失误或商业损失，平台不承担任何法律及赔偿责任。</li>
              </ul>

              <h3>3. 账号、登录与试用机制</h3>
              <ul>
                <li><strong>账号注册：</strong>选图搭子 1.0 仅支持手机号注册/登录。您应保证所提供的手机号码及其他账号信息真实、合法、有效。您的账号仅限您本人使用，不得转让、出借或售卖。</li>
                <li><strong>免费试用：</strong>新用户首次登录后，可自动获得 7 天免费试用资格，试用期内可体验 1.0 版本的核心功能。</li>
                <li><strong>试用期满：</strong>试用期结束后，如您未付费解锁，软件的相关核心功能将被限制。您需完成付款后方可继续使用正式版能力。</li>
              </ul>

              <h3>4. 软件授权、买断制与版本权益</h3>
              <ul>
                <li><strong>买断制授权：</strong>选图搭子 1.0 采用买断制（非订阅制）。您完成购买后，即可获得 1.0 正式版的永久解锁权益，无需针对 1.0 版本重复续费。</li>
                <li><strong>价格政策：</strong>软件在不同阶段实行不同定价（如内测阶段 199 元，公测阶段 399 元），具体以购买时页面展示为准。</li>
                <li><strong>老用户权益与后续升级：</strong>已购买 1.0 的用户默认享有“老用户身份”。未来当平台发布 2.0 或 3.0 大版本时（2.0 及 3.0 版本也将继续保持本地运行的原则），老用户享有“补差价升级资格”，无需全价重新购买。</li>
              </ul>

              <h3>5. 退款观察期规则</h3>
              <ul>
                <li><strong>7 天退款观察期：</strong>鉴于软件已提供 7 天免费试用期供您充分体验，正式购买后原则上不鼓励退款。但为保障用户权益，我们提供购买后 7 天的退款观察期。</li>
                <li><strong>退款申请：</strong>如您在购买后 7 天内确需退款，可向平台提交申请，平台将按规则审核处理。超过 7 天后，平台将不再接受无理由退款申请。</li>
              </ul>

              <h3>6. 知识产权与禁止破解</h3>
              <ul>
                <li><strong>平台知识产权：</strong>选图搭子 软件本身的代码、UI 界面、算法流程、商标、图文文档等所有知识产权均归开发者或相关权利人所有。您购买的仅为软件的使用授权，并非获得软件源码、算法或商标的所有权。</li>
                <li><strong>用户数据产权：</strong>您自行导入软件内的照片、项目文件及其内容，其知识产权及相关权利仍归您或原权利人所有，您需自行对其合法性负责。</li>
                <li><strong>禁止反向工程与破解：</strong>您承诺并保证，不得对本软件进行反向工程、反向编译、反汇编，不得尝试提取源代码或算法；不得对软件进行非法破解、篡改、复制、转售；不得制作、发布、传播外挂程序或利用技术手段绕过平台的授权控制机制。如有违反，平台有权立即终止您的授权、封禁账号，并追究您的法律责任。</li>
              </ul>

              <h3>7. 协议的变更与终止</h3>
              <p>我们有权根据业务发展或法律法规变化修改本协议。协议修改后，我们将在软件内或官网予以公布。若您继续使用本软件，即视为您已接受修改后的协议。若您严重违反本协议（如破解软件、违规套现等），我们有权单方面终止向您提供服务，并保留追究法律责任的权利。</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  `;
}

function changelogPage() {
  return `
    <section class="content-page">
      <div class="container">
        <div class="page-title-block">
          <div class="page-icon-box pink reveal">${icon('clock')}</div>
          <h1 class="page-heading reveal" style="margin-bottom:14px">更新日志</h1>
          <p class="page-lead reveal">了解 选图搭子 的最新功能与改进。</p>
        </div>

        <article class="changelog-card reveal">
          <div style="display:flex;gap:16px;justify-content:space-between;align-items:center;flex-wrap:wrap;margin-bottom:22px">
            <h2>v1.0.0 内测版</h2>
            <span class="changelog-date">${icon('sparkles')} 2026-03-25</span>
          </div>
          <h3 style="font-size:.75rem;text-transform:uppercase;letter-spacing:.12em;color:#64748b;margin:0 0 18px">✨ 新功能</h3>
          <ul class="bullets" style="margin:0">
            <li>${icon('check-circle-2')}<span><strong>全新发布：</strong> 选图搭子 1.0 首次内测上线。</span></li>
            <li>${icon('check-circle-2')}<span><strong>AI 智能选图：</strong> 支持自动识别闭眼、失焦、严重模糊、曝光异常等废片。</span></li>
            <li>${icon('check-circle-2')}<span><strong>相似归组：</strong> 智能识别相似照片并进行归组，提供 Best 推荐。</span></li>
            <li>${icon('check-circle-2')}<span><strong>标星同步导出：</strong> 支持一键标星，导出后可在 Lightroom 和 Capture One 中继续显示星级。</span></li>
            <li>${icon('check-circle-2')}<span><strong>快速加载：</strong> 优化 RAW 格式解析引擎，实现快速预览加载。</span></li>
            <li>${icon('check-circle-2')}<span><strong>人脸放大：</strong> 支持一键放大并锁定所有人脸，方便对比微表情。</span></li>
          </ul>
        </article>
      </div>
    </section>
  `;
}

const PAGES = {
  home: homePage,
  product: productPage,
  download: downloadPage,
  about: aboutPage,
  faq: faqPage,
  contact: contactPage,
  legal: legalPage,
  changelog: changelogPage,
};

function currentPageKey() {
  const bodyPage = document.body.dataset.page;
  if (bodyPage && PAGES[bodyPage]) {
    return bodyPage;
  }

  const path = window.location.pathname.replace(/\\/g, '/');
  if (path.endsWith('/product.html')) return 'product';
  if (path.endsWith('/download.html')) return 'download';
  if (path.endsWith('/about.html')) return 'about';
  if (path.endsWith('/faq.html')) return 'faq';
  if (path.endsWith('/contact.html')) return 'contact';
  if (path.endsWith('/legal.html')) return 'legal';
  if (path.endsWith('/changelog.html')) return 'changelog';
  return 'home';
}

function renderApp() {
  const page = currentPageKey();
  const header = document.getElementById('site-header');
  const main = document.getElementById('site-main');
  const footer = document.getElementById('site-footer');

  if (header) header.innerHTML = renderHeader(page);
  if (main) main.innerHTML = PAGES[page]();
  if (footer) footer.innerHTML = renderFooter();

  document.body.classList.add('js-ready');

  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }

  setupInteractions(page);
  setupRevealObserver();
  syncActiveLinks(page);
}

function syncActiveLinks(activePage) {
  document.querySelectorAll('[data-nav-link]').forEach((link) => {
    const key = link.getAttribute('data-nav-link');
    link.classList.toggle('active', key === activePage);
  });
}

function setupInteractions(page) {
  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  const updateNav = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 20);
  };

  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('no-scroll', open);
    });
  }

  document.querySelectorAll('[data-nav-link]').forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileNav?.classList.contains('open')) {
        mobileNav.classList.remove('open');
        toggle?.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
      }
    });
  });

  if (page === 'home') {
    setupHome();
  }

  if (page === 'download') {
    setupDownload();
  }

  if (page === 'legal') {
    setupLegal();
  }
}

function setupRevealObserver() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '40px 0px -40px 0px' },
  );

  items.forEach((item) => observer.observe(item));
}

function setupHome() {
  const particlesWrap = document.getElementById('home-particles');
  if (particlesWrap) {
    const count = 20;
    const viewportWidth = window.innerWidth || 1200;
    const viewportHeight = window.innerHeight || 800;
    const particles = Array.from({ length: count }, (_, index) => {
      const size = (Math.random() * 1.6 + 0.6).toFixed(2);
      const left = Math.random() * viewportWidth;
      const top = Math.random() * viewportHeight;
      const dx = Math.random() * 120 - 60;
      const dy = -(Math.random() * 220 + 120);
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 4;
      const opacity = Math.random() * 0.4 + 0.2;
      return `<span class="particle" style="left:${left}px;top:${top}px;--scale:${size};--dx:${dx}px;--dy:${dy}px;--duration:${duration}s;--delay:${delay}s;opacity:${opacity}"></span>`;
    }).join('');
    particlesWrap.innerHTML = particles;
  }

  const hero = document.querySelector('.home-hero');
  const orbs = document.querySelectorAll('.home-orb');
  if (!hero || !orbs.length) return;

  const move = (event) => {
    const rect = hero.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const factors = [
      [0.05, 0.05],
      [-0.05, -0.05],
      [0.02, -0.02],
    ];

    orbs.forEach((orb, index) => {
      const [fx, fy] = factors[index] || [0, 0];
      orb.style.transform = `translate(${x * fx}px, ${y * fy}px)`;
    });
  };

  hero.addEventListener('mousemove', move);
  hero.addEventListener('mouseleave', () => {
    orbs.forEach((orb) => {
      orb.style.transform = '';
    });
  });
}

function setupDownload() {
  const checkbox = document.getElementById('agreement-input');
  const box = document.getElementById('agreement-box');
  const error = document.getElementById('agreement-error');
  const buttons = document.querySelectorAll('.download-action');

  if (!checkbox || !box || !error) return;

  let errorTimer = null;

  const setError = (visible) => {
    error.hidden = !visible;
    box.classList.toggle('error', visible);
    box.classList.toggle('checked', checkbox.checked && !visible);
  };

  const sync = () => {
    box.classList.toggle('checked', checkbox.checked);
    box.classList.remove('error');
    if (!checkbox.checked) {
      error.hidden = true;
    }
  };

  checkbox.addEventListener('change', () => {
    sync();
    if (checkbox.checked) {
      error.hidden = true;
      if (errorTimer) {
        window.clearTimeout(errorTimer);
        errorTimer = null;
      }
    }
  });

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (!checkbox.checked) {
        if (errorTimer) window.clearTimeout(errorTimer);
        setError(true);
        errorTimer = window.setTimeout(() => {
          setError(false);
        }, 2000);
        return;
      }

      const platform = button.getAttribute('data-platform') || 'unknown';
      console.log(`Downloading ${platform} version...`);
    });
  });
}

function setupLegal() {
  const hash = window.location.hash;
  if (!hash) {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return;
  }

  const id = hash.replace('#', '');
  const target = document.getElementById(id);
  if (target) {
    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }
}

document.addEventListener('DOMContentLoaded', renderApp);
