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
              <a href="mailto:support@xuantudazi.com" aria-label="Email">${footerIcon('mail')}</a>
            </div>
          </div>

          <div>
            <h3 class="footer-heading">产品</h3>
            <ul class="footer-list">
              <li><a href="./product.html">产品与价格</a></li>
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
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">京ICP备XXXXXXXX号-1</a>
            <span class="hide-mobile">|</span>
            <a href="#" class="footer-record">
              <img src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" alt="公安网备" />
              <span>京公网安备 XXXXXXXXXXXXXX号</span>
            </a>
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

function demoVideo(label, iconName = 'play-circle', extra = '') {
  return `
    <div class="demo-video ${extra}">
      <div class="center">
        <div class="text-center">
          <i class="icon" data-lucide="${iconName}" style="width:64px;height:64px;color:#cbd5e1"></i>
          <div class="label">${label}</div>
        </div>
      </div>
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

        <p class="home-kicker reveal">Cullmate</p>

        <h1 class="home-title reveal">
          <span class="home-glow" aria-hidden="true"></span>
          <span class="title-text">选图 从未如此智能</span>
          <span class="home-underline" aria-hidden="true"></span>
        </h1>

        <p class="home-copy reveal">
          强大的本地 AI 引擎，快速剔除废片、闭眼与重复底片。所有处理均在本地完成，无需上传云端，为您提供极致的隐私保护与绝对的安全。将繁琐的筛选交给机器，把时间留给创作。
        </p>

        <div class="home-cta reveal">
          <a class="btn btn-primary btn-gradient" href="./product.html">
            <span>立即下载 ${icon('arrow-right')}</span>
          </a>
        </div>
      </div>
    </section>
  `;
}

function productPage() {
  const mockupCells = [
    { src: 'https://picsum.photos/seed/cull0/400/300' },
    { src: 'https://picsum.photos/seed/cull1/400/300', bad: true, label: '闭眼' },
    { src: 'https://picsum.photos/seed/cull2/400/300' },
    { src: 'https://picsum.photos/seed/cull3/400/300' },
    { src: 'https://picsum.photos/seed/cull4/400/300', good: true, label: 'Best' },
    { src: 'https://picsum.photos/seed/cull5/400/300' },
  ];

  return `
    <section class="section product-hero">
      <div class="container">
        <h1 class="page-heading reveal">重新定义选图效率。</h1>
        <p class="page-lead reveal">选图搭子 1.0 带来前所未有的 AI 智能选图体验。从自动剔除废片到快速 RAW 加载，每一项功能都为节省您的时间而生。</p>
      </div>
    </section>

    <section class="section mockup-wrap">
      <div class="container">
        <div class="mockup reveal">
          <div class="mockup-header">
            <span class="window-dot red"></span>
            <span class="window-dot yellow"></span>
            <span class="window-dot green"></span>
            <div class="mockup-title">${icon('scan')} AI 分析中 - 428/1024</div>
          </div>

          <div class="mockup-body">
            <aside class="mockup-sidebar">
              <div class="stub"></div>
              <div class="stub" style="width:75%"></div>
              <div class="stub" style="width:86%"></div>
              <div class="stat">
                <small>已剔除废片</small>
                <strong>156</strong>
              </div>
            </aside>

            <div class="mockup-grid">
              <div class="scan-line" aria-hidden="true"></div>
              ${mockupCells
                .map(
                  (cell, index) => `
                    <div class="photo-cell ${cell.bad ? 'bad' : cell.good ? 'good' : ''}">
                      <img src="${cell.src}" alt="样片 ${index + 1}" />
                      ${
                        cell.bad
                          ? `<div class="overlay"><span class="overlay-badge">${icon('eye')} <span>${cell.label}</span></span></div>`
                          : ''
                      }
                      ${
                        cell.good
                          ? `<div class="overlay"><span class="overlay-badge green">${icon('sparkles')} <span>${cell.label}</span></span></div>`
                          : ''
                      }
                    </div>
                  `,
                )
                .join('')}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bento-section">
      <div class="container">
        <div class="section-heading">
          <h2>重塑工作流的<br><span class="gradient">核心引擎。</span></h2>
        </div>

        <div class="bento-grid">
          <article class="bento-card blue reveal">
            <div class="bg"></div>
            <div class="content">
              <i class="icon accent-blue" data-lucide="cpu" style="width:32px;height:32px;margin-bottom:20px"></i>
              <h3>快速 RAW 解析</h3>
              <p>抛弃漫长的预渲染等待。深度优化的底层架构，让高像素 RAW 文件的加载速度突破极限，即点即看。</p>
              <div class="bars">
                ${[40, 70, 45, 90, 65, 100, 80]
                  .map((h) => `<span class="bar" style="--h:${h}%"></span>`)
                  .join('')}
              </div>
            </div>
          </article>

          <article class="bento-card purple reveal">
            <div class="bg"></div>
            <div class="content">
              <i class="icon accent-purple" data-lucide="eye" style="width:32px;height:32px;margin-bottom:20px"></i>
              <h3>微表情锁定</h3>
              <p>一键放大并锁定画面中的所有人脸。闭眼、失焦、表情不佳？AI 帮您瞬间揪出。</p>
              <div class="orbit">
                <i class="icon accent-purple" data-lucide="scan" style="width:24px;height:24px"></i>
              </div>
            </div>
          </article>

          <article class="bento-card pink reveal">
            <div class="bg"></div>
            <div class="content">
              <i class="icon accent-pink" data-lucide="layers" style="width:32px;height:32px;margin-bottom:20px"></i>
              <h3>相似归组</h3>
              <p>连拍几十张？AI 自动将相似场景归为一组，并为您推荐其中最完美的一张。</p>
              <div class="stacking">
                <span class="stack-card" style="transform:translateY(-16px) scale(0.96);z-index:9"></span>
                <span class="stack-card" style="transform:translateY(-8px) scale(0.98);z-index:8"></span>
                <span class="stack-card" style="transform:translateY(0) scale(1);z-index:7"></span>
              </div>
            </div>
          </article>

          <article class="bento-card green reveal">
            <div class="bg"></div>
            <div class="content">
              <i class="icon accent-green" data-lucide="shield-check" style="width:32px;height:32px;margin-bottom:20px"></i>
              <h3>绝对安全，极致隐私</h3>
              <p>您的照片属于您自己。所有 AI 分析与处理均在本地设备上离线完成，无需上传任何数据到云端，从根本上杜绝隐私泄露风险。</p>
              <div class="lock-card">
                <i class="icon accent-green" data-lucide="shield-check" style="width:32px;height:32px;position:relative;z-index:1"></i>
              </div>
            </div>
          </article>
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
          bullets: ['精准识别闭眼与微表情', '自动检测对焦准确度', '智能判断曝光问题'],
          media: demoVideo('AI 智能选图演示视频'),
        })}

        ${featureRow({
          eyebrow: '智能分组',
          eyebrowClass: 'purple',
          title: '相似内容归组 & Best 推荐',
          desc: '连拍了几十张？没关系。选图搭子 会自动将相似场景、相同人物的照片进行智能归组。更棒的是，AI 会综合评估清晰度、表情和构图，为您推荐每组中的 Best 最佳照片。',
          bullets: ['毫秒级连拍照片分组', '多维度综合评分推荐', '支持自定义分组严格度'],
          media: demoVideo('相似归组演示视频'),
          reverse: false,
        })}

        ${featureRow({
          reverse: true,
          eyebrow: '高效解析',
          eyebrowClass: 'pink',
          title: 'RAW 格式快速加载',
          desc: '无需等待漫长的预览图生成。我们深度优化了 RAW 文件的解析引擎，即使是大体积的源文件，也能实现快速的预览加载，让您的选图过程保持流畅。',
          bullets: ['支持市面主流相机 RAW 格式', '无需预渲染，即点即看', '极低内存占用'],
          media: demoVideo('快速加载演示视频'),
        })}

        ${featureRow({
          eyebrow: '细节控必备',
          eyebrowClass: 'green',
          title: '人脸放大对比',
          desc: '拍摄合影时最怕有人闭眼或表情不佳。使用人脸放大功能，一键锁定并放大画面中的所有人脸，在多张照片间快速切换对比，轻松选出完美合影。',
          bullets: ['一键识别并框选所有人脸', '多图同步放大对比', '支持快捷键快速切换'],
          media: demoVideo('人脸放大演示视频'),
        })}

        ${featureRow({
          reverse: true,
          eyebrow: '安全至上',
          eyebrowClass: 'green',
          title: '100% 本地处理，极致隐私保护',
          desc: '在云端 AI 盛行的今天，我们坚持将选图搭子的核心 AI 引擎完全部署在您的本地设备上。这意味着您的任何私人照片、商业机密、未公开作品都不会离开您的电脑。',
          bullets: ['无需网络连接，断网亦可使用', '零数据上传，彻底杜绝隐私泄露', '符合最严格的商业保密要求'],
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
          <h2>选择适合您的方案</h2>
          <p class="page-lead">买断制授权，一次付费，终身使用 1.0 版本。</p>
        </div>

        <div class="pricing-grid">
          <article class="pricing-card featured reveal">
            <div class="ribbon">限时特惠</div>
            <h3>1.0 版本买断</h3>
            <p>适合独立摄影师，享受首发特惠折扣。</p>
            <div class="price-row">
              <span class="price">¥199</span>
              <span class="strike">原价 ¥399</span>
            </div>
            <ul class="bullets">
              <li>${icon('check-circle-2')}<span>终身使用 1.0 版本所有功能</span></li>
              <li>${icon('check-circle-2')}<span>包含 AI 智能选图与分组</span></li>
              <li>${icon('check-circle-2')}<span>免费获取 1.0 后续小版本更新</span></li>
              <li>${icon('check-circle-2')}<span>后续 2.0/3.0 大版本补差价升级</span></li>
              <li>${icon('check-circle-2')}<span>支持单设备授权使用</span></li>
            </ul>
            <a class="btn btn-primary" href="./download.html">立即下载 ${icon('arrow-right')}</a>
            <p style="text-align:center;margin-top:16px">请先下载客户端，在软件内注册并购买</p>
          </article>

          <article class="pricing-card soft reveal">
            <h3>工作室版本</h3>
            <p>专为摄影团队打造，支持多设备协同。</p>
            <div class="price-row">
              <span class="price" style="font-size:2.8rem">即将推出</span>
            </div>
            <ul class="bullets">
              <li style="color:#64748b">${icon('check-circle-2')}<span>包含 1.0 版本所有功能</span></li>
              <li style="color:#64748b">${icon('check-circle-2')}<span>支持多设备同时在线</span></li>
              <li style="color:#64748b">${icon('check-circle-2')}<span>团队素材库共享与协同</span></li>
              <li style="color:#64748b">${icon('check-circle-2')}<span>专属企业级技术支持</span></li>
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
          <p class="page-lead reveal" style="max-width:760px;margin:0 auto">下载 选图搭子 客户端，享受 7 天全功能免费试用。无需绑定信用卡，下载安装后在软件内直接注册登录即可激活。</p>
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
          <h3>如何开始试用或购买？</h3>
          <div class="steps">
            <div class="step">
              <div class="circle" style="background:#dbeafe;color:#2563eb">${icon('download')}</div>
              <h4>1. 下载并安装</h4>
              <p>选择适合您操作系统的版本，下载并完成安装。</p>
            </div>
            <div class="step">
              <div class="circle" style="background:#f3e8ff;color:#7c3aed">${icon('key')}</div>
              <h4>2. 软件内登录</h4>
              <p>打开 选图搭子，使用手机号或邮箱注册并登录账号。</p>
            </div>
            <div class="step">
              <div class="circle" style="background:#fce7f3;color:#db2777">${icon('sparkles')}</div>
              <h4>3. 激活与付费</h4>
              <p>登录后自动开启 7 天免费试用。试用满意后，可在软件内直接购买买断版。</p>
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
            <p>作为首个商业化版本，我们采用“最小可售卖版本”策略。我们没有堆砌华而不实的功能，而是优先解决最刚需、最高频的痛点：连拍分组、闭眼检测、模糊剔除。用最直观的界面和最少的操作层级，帮助您在数千张海量素材中，以极高的效率完成第一轮粗筛与优选。</p>
          </div>
          <div class="about-column reveal">
            <div class="about-icon" style="background:#ecfdf5">${icon('shield-check')}</div>
            <h3>绝对安全，拥抱未来。</h3>
            <p>作为摄影师，客户的隐私与未公开作品的安全性至关重要。在 1.0 版本中，选图搭子坚持 100% 本地离线运行，所有 AI 推理均在您的设备上完成。同时，随着 AI 算力的演进，我们不排除在未来的 2.0 或 3.0 版本中引入可选的云端处理能力，以实现更深度的图像语义理解与智能排版，但“用户授权与数据隐私”始终是我们不可逾越的底线。</p>
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
          ${faqItem('支持哪些操作系统？', '<p>目前支持 macOS (Apple Silicon M1/M2/M3 及 Intel 芯片，macOS 12.0 或更高版本) 和 Windows (Windows 10 / 11 64-bit，建议配备独立显卡以获得最佳性能)。</p>')}
          ${faqItem('如何激活 7 天免费试用？', '<p>下载并安装客户端后，在软件内使用手机号或邮箱注册并登录账号，即可自动开启 7 天全功能免费试用，无需绑定信用卡。</p>')}
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
            <a class="contact-link" href="mailto:support@xuantudazi.com">support@xuantudazi.com ${icon('arrow-right')}</a>
          </article>

          <article class="content-card contact-card reveal">
            <div class="card-icon" style="background:#dcfce7;color:#16a34a">${icon('message-circle')}</div>
            <h3>微信客服</h3>
            <p>添加我们的官方微信客服，获取更及时的帮助，或加入用户交流群获取最新资讯。</p>
            <div style="font-weight:600;color:#0f172a">微信号：xuantudazi_support</div>
          </article>
        </div>

        <div class="contact-banner reveal">
          <div class="orb" aria-hidden="true"></div>
          <div class="inner">
            <h2 style="margin:0 0 12px;font-size:2rem">商务合作</h2>
            <p>如果您是摄影工作室、摄影培训机构或相关媒体，希望与我们探讨合作机会，请直接联系我们的商务团队。</p>
            <a class="btn btn-light" href="mailto:business@xuantudazi.com">联系商务团队</a>
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
              <p>欢迎您使用选图搭子（以下简称“本软件”）。我们非常重视您的隐私保护。本隐私政策旨在向您说明我们在您使用本软件时如何收集、使用、保存、共享和转让您的个人信息。</p>

              <h3>1. 本地处理原则</h3>
              <p><strong>选图搭子的核心功能（包括图片加载、AI 智能选图、人脸识别、闭眼检测等）完全在您的本地设备上离线运行。</strong> 我们不会将您的任何图片、面部特征数据或其他媒体文件上传至云端服务器。您的照片隐私完全属于您自己。</p>

              <h3>2. 我们收集的信息</h3>
              <p>为了提供基础的软件授权和更新服务，我们仅会收集以下必要信息：</p>
              <ul>
                <li><strong>设备信息：</strong> 用于软件授权绑定的设备唯一标识符（如 MAC 地址的哈希值）。</li>
                <li><strong>授权信息：</strong> 您的购买记录、激活码及授权状态。</li>
                <li><strong>崩溃日志（可选）：</strong> 当软件发生崩溃时，在您明确同意的情况下，我们会收集匿名的崩溃日志以帮助我们修复 Bug。</li>
              </ul>

              <h3>3. 信息的存储与保护</h3>
              <p>我们采用业界标准的安全技术和措施来保护您的信息，防止数据遭到未经授权的访问、公开披露、使用、修改、损坏或丢失。</p>
            </div>
          </section>

          <section class="legal-section" id="terms">
            <h2>用户协议</h2>
            <div class="legal-prose">
              <p>本《用户协议》（以下简称“本协议”）是您与选图搭子开发者之间关于下载、安装、使用本软件所订立的协议。</p>

              <h3>1. 软件授权</h3>
              <p>本软件提供“1.0 版本买断”授权模式。您购买后，将获得本软件 1.x 版本的永久使用权，并可免费获取 1.x 版本的后续更新。单设备授权仅限在一台计算机上激活使用。</p>

              <h3>2. 使用限制</h3>
              <p>您不得对本软件进行反向工程、反向编译或反汇编；不得修改、破坏本软件原有的版权声明；不得利用本软件进行任何违法活动。</p>

              <h3>3. 免责声明</h3>
              <p>本软件按“现状”提供。我们尽最大努力确保软件的稳定性和准确性，但不对因使用本软件而导致的任何直接或间接损失（包括但不限于数据丢失、业务中断等）承担法律责任。请您在使用前做好重要数据的备份工作。</p>

              <h3>4. 协议修改</h3>
              <p>我们保留在必要时修改本协议的权利。协议修改后，我们将在官方网站或软件内公布。如果您继续使用本软件，即视为您接受修改后的协议。</p>
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
            <li>${icon('check-circle-2')}<span><strong>快速加载：</strong> 优化 RAW 格式解析引擎，实现快速预览加载。</span></li>
            <li>${icon('check-circle-2')}<span><strong>人脸放大：</strong> 支持一键放大并锁定所有人脸，方便对比微表情。</span></li>
          </ul>
        </article>
      </div>
    </section>
  `;
}

function checkoutPage() {
  return `
    <section class="content-page">
      <div class="container">
        <div class="checkout-top reveal">
          <div class="crumb">${icon('shield-check')} <span>官方安全支付收银台</span></div>
          <a href="./index.html" style="color:#64748b">返回官网首页</a>
        </div>

        <div class="checkout-grid">
          <div>
            <article class="content-card checkout-order reveal">
              <h2>订单详情</h2>
              <div class="order-row">
                <div>
                  <h3>选图搭子 1.0 版本买断</h3>
                  <p>单设备永久授权，包含 1.x 版本免费更新</p>
                </div>
                <div class="order-price">
                  <div class="now">¥199.00</div>
                  <div class="old">原价 ¥399.00</div>
                </div>
              </div>
              <div class="pay-total">
                <span style="color:#475569;font-weight:600">应付总额</span>
                <span class="amount">¥199.00</span>
              </div>
            </article>

            <article class="content-card checkout-pay reveal" style="margin-top:24px">
              <h2>选择支付方式</h2>
              <div class="payment-grid">
                <button class="payment-option alipay active" type="button" data-payment-option="alipay">
                  <span class="chip">支</span>
                  <span class="name">支付宝支付</span>
                  <span class="check">${icon('check-circle-2')}</span>
                </button>
                <button class="payment-option wechat" type="button" data-payment-option="wechat">
                  <span class="chip">微</span>
                  <span class="name">微信支付</span>
                  <span class="check">${icon('check-circle-2')}</span>
                </button>
              </div>
            </article>
          </div>

          <aside class="sticky-card">
            <article class="content-card reveal" style="text-align:center">
              <h2 style="margin:0 0 20px;font-size:1.15rem">使用 <span id="payment-method-label">支付宝</span> 扫码支付</h2>
              <div class="qr-box">
                ${icon('qr-code')}
                <div class="overlay"><span style="font-size:.9rem;font-weight:600;color:#475569">等待接入支付接口</span></div>
              </div>
              <p style="margin:0 0 22px;color:#64748b;font-size:.93rem;line-height:1.75">
                支付完成后，您的软件将自动激活。如果未自动刷新，请在软件内点击“我已支付”。
              </p>
              <div class="security-chip">${icon('shield-check')} 安全支付保障</div>
            </article>
          </aside>
        </div>
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
  checkout: checkoutPage,
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
  if (path.endsWith('/checkout.html')) return 'checkout';
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

  if (page === 'checkout') {
    setupCheckout();
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

function setupCheckout() {
  const options = document.querySelectorAll('[data-payment-option]');
  const label = document.getElementById('payment-method-label');

  const setMethod = (method) => {
    options.forEach((option) => {
      const active = option.getAttribute('data-payment-option') === method;
      option.classList.toggle('active', active);
    });
    if (label) {
      label.textContent = method === 'alipay' ? '支付宝' : '微信';
    }
  };

  options.forEach((option) => {
    option.addEventListener('click', () => {
      setMethod(option.getAttribute('data-payment-option') || 'alipay');
    });
  });

  setMethod('alipay');
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
