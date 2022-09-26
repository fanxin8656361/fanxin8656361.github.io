<template>
  <div class="main-box">
    <div class="main">
      <h1 class="logo">
        <!-- <a href="https://www.iconfont.cn/" title="iconfont 首页" target="_blank" rel="noopener norefferrer">
          <img width="200"
            src="https://img.alicdn.com/imgextra/i3/O1CN01Mn65HV1FfSEzR6DKv_!!6000000000514-55-tps-228-59.svg"
            alt="icon" />
        </a> -->
        <img src="./iconfont.png" alt="icon" />
      </h1>
      <div class="nav-tabs">
        <ul id="tabs" class="dib-box">
          <li class="dib"><span>Unicode</span></li>
          <li class="dib active"><span>Font class</span></li>
          <li class="dib"><span>Symbol</span></li>
        </ul>
        <a class="nav-more" :href="`${staticUrl}/zip/download.zip`" target="_blank" download="iconfont.zip"
          rel="noopener norefferrer">
          下载字体图标
          <i class="Audi-Dashboard icon-download"></i>
        </a>
        <!-- <a href="https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=3618271" target="_blank" class="nav-more" rel="noopener norefferrer">查看项目</a> -->
      </div>
      <div class="tab-container">
        <div class="content unicode">
          <ul class="icon_lists dib-box">

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe631;</span>
              <div class="name">chart-pie</div>
              <div class="code-name">&amp;#xe631;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe632;</span>
              <div class="name">factory-building</div>
              <div class="code-name">&amp;#xe632;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe633;</span>
              <div class="name">network-tree</div>
              <div class="code-name">&amp;#xe633;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe634;</span>
              <div class="name">edit</div>
              <div class="code-name">&amp;#xe634;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe635;</span>
              <div class="name">user-business</div>
              <div class="code-name">&amp;#xe635;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe61d;</span>
              <div class="name">doublearrow02 (Stroke)</div>
              <div class="code-name">&amp;#xe61d;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe61e;</span>
              <div class="name">doublearrow01 (Stroke)</div>
              <div class="code-name">&amp;#xe61e;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe61f;</span>
              <div class="name">doublearrow04</div>
              <div class="code-name">&amp;#xe61f;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe620;</span>
              <div class="name">upside</div>
              <div class="code-name">&amp;#xe620;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe621;</span>
              <div class="name">downside</div>
              <div class="code-name">&amp;#xe621;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe622;</span>
              <div class="name">strech</div>
              <div class="code-name">&amp;#xe622;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe623;</span>
              <div class="name">menu-XS-dark</div>
              <div class="code-name">&amp;#xe623;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe624;</span>
              <div class="name">doublearrow03</div>
              <div class="code-name">&amp;#xe624;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe625;</span>
              <div class="name">upload</div>
              <div class="code-name">&amp;#xe625;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe626;</span>
              <div class="name">setting</div>
              <div class="code-name">&amp;#xe626;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe627;</span>
              <div class="name">edit-two</div>
              <div class="code-name">&amp;#xe627;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe628;</span>
              <div class="name">info</div>
              <div class="code-name">&amp;#xe628;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe629;</span>
              <div class="name">abnormal</div>
              <div class="code-name">&amp;#xe629;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe62a;</span>
              <div class="name">plus</div>
              <div class="code-name">&amp;#xe62a;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe62b;</span>
              <div class="name">finance</div>
              <div class="code-name">&amp;#xe62b;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe62c;</span>
              <div class="name">minus</div>
              <div class="code-name">&amp;#xe62c;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe62d;</span>
              <div class="name">classroom</div>
              <div class="code-name">&amp;#xe62d;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe62e;</span>
              <div class="name">search</div>
              <div class="code-name">&amp;#xe62e;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe62f;</span>
              <div class="name">preview-open</div>
              <div class="code-name">&amp;#xe62f;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe630;</span>
              <div class="name">preview-close-one</div>
              <div class="code-name">&amp;#xe630;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe605;</span>
              <div class="name">close</div>
              <div class="code-name">&amp;#xe605;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe606;</span>
              <div class="name">add-one</div>
              <div class="code-name">&amp;#xe606;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe607;</span>
              <div class="name">calendar-dot</div>
              <div class="code-name">&amp;#xe607;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe608;</span>
              <div class="name">file-pdf</div>
              <div class="code-name">&amp;#xe608;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe609;</span>
              <div class="name">calculator</div>
              <div class="code-name">&amp;#xe609;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe60a;</span>
              <div class="name">download</div>
              <div class="code-name">&amp;#xe60a;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe60b;</span>
              <div class="name">close-one</div>
              <div class="code-name">&amp;#xe60b;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe60c;</span>
              <div class="name">down</div>
              <div class="code-name">&amp;#xe60c;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe60d;</span>
              <div class="name">analysis</div>
              <div class="code-name">&amp;#xe60d;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe60e;</span>
              <div class="name">left</div>
              <div class="code-name">&amp;#xe60e;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe60f;</span>
              <div class="name">system</div>
              <div class="code-name">&amp;#xe60f;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe610;</span>
              <div class="name">config</div>
              <div class="code-name">&amp;#xe610;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe611;</span>
              <div class="name">up</div>
              <div class="code-name">&amp;#xe611;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe612;</span>
              <div class="name">glasses</div>
              <div class="code-name">&amp;#xe612;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe613;</span>
              <div class="name">right</div>
              <div class="code-name">&amp;#xe613;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe614;</span>
              <div class="name">reduce-two</div>
              <div class="code-name">&amp;#xe614;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe615;</span>
              <div class="name">align-text-both-one</div>
              <div class="code-name">&amp;#xe615;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe616;</span>
              <div class="name">user</div>
              <div class="code-name">&amp;#xe616;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe617;</span>
              <div class="name">time</div>
              <div class="code-name">&amp;#xe617;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe618;</span>
              <div class="name">search</div>
              <div class="code-name">&amp;#xe618;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe619;</span>
              <div class="name">setting-two</div>
              <div class="code-name">&amp;#xe619;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe61a;</span>
              <div class="name">space-colony</div>
              <div class="code-name">&amp;#xe61a;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe61b;</span>
              <div class="name">round-socket</div>
              <div class="code-name">&amp;#xe61b;</div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard">&#xe61c;</span>
              <div class="name">file-txt</div>
              <div class="code-name">&amp;#xe61c;</div>
            </li>

          </ul>
          <div class="article markdown">
            <h2 id="unicode-">Unicode 引用</h2>
            <hr>

            <p>Unicode 是字体在网页端最原始的应用方式，特点是：</p>
            <ul>
              <li>支持按字体的方式去动态调整图标大小，颜色等等。</li>
              <li>默认情况下不支持多色，直接添加多色图标会自动去色。</li>
            </ul>
            <blockquote>
              <p>注意：新版 iconfont 支持两种方式引用多色图标：SVG symbol 引用方式和彩色字体图标模式。（使用彩色字体图标需要在「编辑项目」中开启「彩色」选项后并重新生成。）</p>
            </blockquote>
            <p>Unicode 使用步骤如下：</p>
            <h3 id="-font-face">第一步：拷贝项目下面生成的 <code>@font-face</code></h3>
            <pre><code class="language-css"
>@font-face {
  font-family: 'Audi-Dashboard';
  src: url('iconfont.woff2?t=1664154971432') format('woff2'),
       url('iconfont.woff?t=1664154971432') format('woff'),
       url('iconfont.ttf?t=1664154971432') format('truetype');
}
</code></pre>
            <h3 id="-iconfont-">第二步：定义使用 iconfont 的样式</h3>
            <pre><code class="language-css"
>.Audi-Dashboard {
  font-family: "Audi-Dashboard" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</code></pre>
            <h3 id="-">第三步：挑选相应图标并获取字体编码，应用于页面</h3>
            <pre>
<code class="language-html"
>&lt;span class="Audi-Dashboard"&gt;&amp;#x33;&lt;/span&gt;
</code></pre>
            <blockquote>
              <p>"Audi-Dashboard" 是你项目下的 font-family。可以通过编辑项目查看，默认是 "iconfont"。</p>
            </blockquote>
          </div>
        </div>
        <div class="content font-class" style="display: block;">
          <ul class="icon_lists dib-box">

            <li class="dib">
              <span class="icon Audi-Dashboard icon-chart-pie"></span>
              <div class="name">
                chart-pie
              </div>
              <div class="code-name">.icon-chart-pie
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-factory-building"></span>
              <div class="name">
                factory-building
              </div>
              <div class="code-name">.icon-factory-building
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-network-tree"></span>
              <div class="name">
                network-tree
              </div>
              <div class="code-name">.icon-network-tree
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-edit"></span>
              <div class="name">
                edit
              </div>
              <div class="code-name">.icon-edit
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-user-business"></span>
              <div class="name">
                user-business
              </div>
              <div class="code-name">.icon-user-business
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-a-doublearrow02Stroke"></span>
              <div class="name">
                doublearrow02 (Stroke)
              </div>
              <div class="code-name">.icon-a-doublearrow02Stroke
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-a-doublearrow01Stroke"></span>
              <div class="name">
                doublearrow01 (Stroke)
              </div>
              <div class="code-name">.icon-a-doublearrow01Stroke
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-doublearrow04"></span>
              <div class="name">
                doublearrow04
              </div>
              <div class="code-name">.icon-doublearrow04
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-upside"></span>
              <div class="name">
                upside
              </div>
              <div class="code-name">.icon-upside
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-downside"></span>
              <div class="name">
                downside
              </div>
              <div class="code-name">.icon-downside
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-strech"></span>
              <div class="name">
                strech
              </div>
              <div class="code-name">.icon-strech
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-menu-XS-dark"></span>
              <div class="name">
                menu-XS-dark
              </div>
              <div class="code-name">.icon-menu-XS-dark
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-doublearrow03"></span>
              <div class="name">
                doublearrow03
              </div>
              <div class="code-name">.icon-doublearrow03
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-upload"></span>
              <div class="name">
                upload
              </div>
              <div class="code-name">.icon-upload
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-setting"></span>
              <div class="name">
                setting
              </div>
              <div class="code-name">.icon-setting
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-edit-two"></span>
              <div class="name">
                edit-two
              </div>
              <div class="code-name">.icon-edit-two
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-info"></span>
              <div class="name">
                info
              </div>
              <div class="code-name">.icon-info
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-abnormal"></span>
              <div class="name">
                abnormal
              </div>
              <div class="code-name">.icon-abnormal
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-plus"></span>
              <div class="name">
                plus
              </div>
              <div class="code-name">.icon-plus
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-finance"></span>
              <div class="name">
                finance
              </div>
              <div class="code-name">.icon-finance
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-minus"></span>
              <div class="name">
                minus
              </div>
              <div class="code-name">.icon-minus
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-classroom"></span>
              <div class="name">
                classroom
              </div>
              <div class="code-name">.icon-classroom
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-search1"></span>
              <div class="name">
                search
              </div>
              <div class="code-name">.icon-search1
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-preview-open"></span>
              <div class="name">
                preview-open
              </div>
              <div class="code-name">.icon-preview-open
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-preview-close-one"></span>
              <div class="name">
                preview-close-one
              </div>
              <div class="code-name">.icon-preview-close-one
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-close"></span>
              <div class="name">
                close
              </div>
              <div class="code-name">.icon-close
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-add-one"></span>
              <div class="name">
                add-one
              </div>
              <div class="code-name">.icon-add-one
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-calendar-dot"></span>
              <div class="name">
                calendar-dot
              </div>
              <div class="code-name">.icon-calendar-dot
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-file-pdf"></span>
              <div class="name">
                file-pdf
              </div>
              <div class="code-name">.icon-file-pdf
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-calculator"></span>
              <div class="name">
                calculator
              </div>
              <div class="code-name">.icon-calculator
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-download"></span>
              <div class="name">
                download
              </div>
              <div class="code-name">.icon-download
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-close-one"></span>
              <div class="name">
                close-one
              </div>
              <div class="code-name">.icon-close-one
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-down"></span>
              <div class="name">
                down
              </div>
              <div class="code-name">.icon-down
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-analysis"></span>
              <div class="name">
                analysis
              </div>
              <div class="code-name">.icon-analysis
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-left"></span>
              <div class="name">
                left
              </div>
              <div class="code-name">.icon-left
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-system"></span>
              <div class="name">
                system
              </div>
              <div class="code-name">.icon-system
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-config"></span>
              <div class="name">
                config
              </div>
              <div class="code-name">.icon-config
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-up"></span>
              <div class="name">
                up
              </div>
              <div class="code-name">.icon-up
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-glasses"></span>
              <div class="name">
                glasses
              </div>
              <div class="code-name">.icon-glasses
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-right"></span>
              <div class="name">
                right
              </div>
              <div class="code-name">.icon-right
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-reduce-two"></span>
              <div class="name">
                reduce-two
              </div>
              <div class="code-name">.icon-reduce-two
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-align-text-both-one"></span>
              <div class="name">
                align-text-both-one
              </div>
              <div class="code-name">.icon-align-text-both-one
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-user"></span>
              <div class="name">
                user
              </div>
              <div class="code-name">.icon-user
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-time"></span>
              <div class="name">
                time
              </div>
              <div class="code-name">.icon-time
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-search"></span>
              <div class="name">
                search
              </div>
              <div class="code-name">.icon-search
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-setting-two"></span>
              <div class="name">
                setting-two
              </div>
              <div class="code-name">.icon-setting-two
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-space-colony"></span>
              <div class="name">
                space-colony
              </div>
              <div class="code-name">.icon-space-colony
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-round-socket"></span>
              <div class="name">
                round-socket
              </div>
              <div class="code-name">.icon-round-socket
              </div>
            </li>

            <li class="dib">
              <span class="icon Audi-Dashboard icon-file-txt"></span>
              <div class="name">
                file-txt
              </div>
              <div class="code-name">.icon-file-txt
              </div>
            </li>

          </ul>
          <div class="article markdown">
            <h2 id="font-class-">font-class 引用</h2>
            <hr>

            <p>font-class 是 Unicode 使用方式的一种变种，主要是解决 Unicode 书写不直观，语意不明确的问题。</p>
            <p>与 Unicode 使用方式相比，具有如下特点：</p>
            <ul>
              <li>相比于 Unicode 语意明确，书写更直观。可以很容易分辨这个 icon 是什么。</li>
              <li>因为使用 class 来定义图标，所以当要替换图标时，只需要修改 class 里面的 Unicode 引用。</li>
            </ul>
            <p>使用步骤如下：</p>
            <h3 id="-fontclass-">第一步：引入项目下面生成的 fontclass 代码：</h3>
            <pre><code class="language-html">&lt;link rel="stylesheet" href="./iconfont.css"&gt;
</code></pre>
            <h3 id="-">第二步：挑选相应图标并获取类名，应用于页面：</h3>
            <pre><code class="language-html">&lt;span class="Audi-Dashboard icon-xxx"&gt;&lt;/span&gt;
</code></pre>
            <blockquote>
              <p>"
                Audi-Dashboard" 是你项目下的 font-family。可以通过编辑项目查看，默认是 "iconfont"。</p>
            </blockquote>
          </div>
        </div>
        <div class="content symbol">
          <ul class="icon_lists dib-box">

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-chart-pie"></use>
              </svg>
              <div class="name">chart-pie</div>
              <div class="code-name">#icon-chart-pie</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-factory-building"></use>
              </svg>
              <div class="name">factory-building</div>
              <div class="code-name">#icon-factory-building</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-network-tree"></use>
              </svg>
              <div class="name">network-tree</div>
              <div class="code-name">#icon-network-tree</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-edit"></use>
              </svg>
              <div class="name">edit</div>
              <div class="code-name">#icon-edit</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-user-business"></use>
              </svg>
              <div class="name">user-business</div>
              <div class="code-name">#icon-user-business</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-a-doublearrow02Stroke"></use>
              </svg>
              <div class="name">doublearrow02 (Stroke)</div>
              <div class="code-name">#icon-a-doublearrow02Stroke</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-a-doublearrow01Stroke"></use>
              </svg>
              <div class="name">doublearrow01 (Stroke)</div>
              <div class="code-name">#icon-a-doublearrow01Stroke</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-doublearrow04"></use>
              </svg>
              <div class="name">doublearrow04</div>
              <div class="code-name">#icon-doublearrow04</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-upside"></use>
              </svg>
              <div class="name">upside</div>
              <div class="code-name">#icon-upside</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-downside"></use>
              </svg>
              <div class="name">downside</div>
              <div class="code-name">#icon-downside</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-strech"></use>
              </svg>
              <div class="name">strech</div>
              <div class="code-name">#icon-strech</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-menu-XS-dark"></use>
              </svg>
              <div class="name">menu-XS-dark</div>
              <div class="code-name">#icon-menu-XS-dark</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-doublearrow03"></use>
              </svg>
              <div class="name">doublearrow03</div>
              <div class="code-name">#icon-doublearrow03</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-upload"></use>
              </svg>
              <div class="name">upload</div>
              <div class="code-name">#icon-upload</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-setting"></use>
              </svg>
              <div class="name">setting</div>
              <div class="code-name">#icon-setting</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-edit-two"></use>
              </svg>
              <div class="name">edit-two</div>
              <div class="code-name">#icon-edit-two</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-info"></use>
              </svg>
              <div class="name">info</div>
              <div class="code-name">#icon-info</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-abnormal"></use>
              </svg>
              <div class="name">abnormal</div>
              <div class="code-name">#icon-abnormal</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-plus"></use>
              </svg>
              <div class="name">plus</div>
              <div class="code-name">#icon-plus</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-finance"></use>
              </svg>
              <div class="name">finance</div>
              <div class="code-name">#icon-finance</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-minus"></use>
              </svg>
              <div class="name">minus</div>
              <div class="code-name">#icon-minus</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-classroom"></use>
              </svg>
              <div class="name">classroom</div>
              <div class="code-name">#icon-classroom</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-search1"></use>
              </svg>
              <div class="name">search</div>
              <div class="code-name">#icon-search1</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-preview-open"></use>
              </svg>
              <div class="name">preview-open</div>
              <div class="code-name">#icon-preview-open</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-preview-close-one"></use>
              </svg>
              <div class="name">preview-close-one</div>
              <div class="code-name">#icon-preview-close-one</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-close"></use>
              </svg>
              <div class="name">close</div>
              <div class="code-name">#icon-close</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-add-one"></use>
              </svg>
              <div class="name">add-one</div>
              <div class="code-name">#icon-add-one</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-calendar-dot"></use>
              </svg>
              <div class="name">calendar-dot</div>
              <div class="code-name">#icon-calendar-dot</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-file-pdf"></use>
              </svg>
              <div class="name">file-pdf</div>
              <div class="code-name">#icon-file-pdf</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-calculator"></use>
              </svg>
              <div class="name">calculator</div>
              <div class="code-name">#icon-calculator</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-download"></use>
              </svg>
              <div class="name">download</div>
              <div class="code-name">#icon-download</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-close-one"></use>
              </svg>
              <div class="name">close-one</div>
              <div class="code-name">#icon-close-one</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-down"></use>
              </svg>
              <div class="name">down</div>
              <div class="code-name">#icon-down</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-analysis"></use>
              </svg>
              <div class="name">analysis</div>
              <div class="code-name">#icon-analysis</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-left"></use>
              </svg>
              <div class="name">left</div>
              <div class="code-name">#icon-left</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-system"></use>
              </svg>
              <div class="name">system</div>
              <div class="code-name">#icon-system</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-config"></use>
              </svg>
              <div class="name">config</div>
              <div class="code-name">#icon-config</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-up"></use>
              </svg>
              <div class="name">up</div>
              <div class="code-name">#icon-up</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-glasses"></use>
              </svg>
              <div class="name">glasses</div>
              <div class="code-name">#icon-glasses</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-right"></use>
              </svg>
              <div class="name">right</div>
              <div class="code-name">#icon-right</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-reduce-two"></use>
              </svg>
              <div class="name">reduce-two</div>
              <div class="code-name">#icon-reduce-two</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-align-text-both-one"></use>
              </svg>
              <div class="name">align-text-both-one</div>
              <div class="code-name">#icon-align-text-both-one</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-user"></use>
              </svg>
              <div class="name">user</div>
              <div class="code-name">#icon-user</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-time"></use>
              </svg>
              <div class="name">time</div>
              <div class="code-name">#icon-time</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-search"></use>
              </svg>
              <div class="name">search</div>
              <div class="code-name">#icon-search</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-setting-two"></use>
              </svg>
              <div class="name">setting-two</div>
              <div class="code-name">#icon-setting-two</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-space-colony"></use>
              </svg>
              <div class="name">space-colony</div>
              <div class="code-name">#icon-space-colony</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-round-socket"></use>
              </svg>
              <div class="name">round-socket</div>
              <div class="code-name">#icon-round-socket</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-file-txt"></use>
              </svg>
              <div class="name">file-txt</div>
              <div class="code-name">#icon-file-txt</div>
            </li>

          </ul>
          <div class="article markdown">
            <h2 id="symbol-">Symbol 引用</h2>
            <hr>

            <p>这是一种全新的使用方式，应该说这才是未来的主流，也是平台目前推荐的用法。
              这种用法其实是做了一个 SVG 的集合，与另外两种相比具有如下特点：</p>
            <ul>
              <li>支持多色图标了，不再受单色限制。</li>
              <li>通过一些技巧，支持像字体那样，通过 <code>font-size</code>, <code>color</code> 来调整样式。</li>
              <li>兼容性较差，支持 IE9+，及现代浏览器。</li>
              <li>浏览器渲染 SVG 的性能一般，还不如 png。</li>
            </ul>
            <p>使用步骤如下：</p>
            <h3 id="-symbol-">第一步：引入项目下面生成的 symbol 代码：</h3>
            <pre><code class="language-html">&lt;script src="./iconfont.js"&gt;&lt;/script&gt;
</code></pre>
            <h3 id="-css-">第二步：加入通用 CSS 代码（引入一次就行）：</h3>
            <pre><code class="language-html">&lt;style&gt;
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
&lt;/style&gt;
</code></pre>
            <h3 id="-">第三步：挑选相应图标并获取类名，应用于页面：</h3>
            <pre><code class="language-html">&lt;svg class="icon" aria-hidden="true"&gt;
  &lt;use xlink:href="#icon-xxx"&gt;&lt;/use&gt;
&lt;/svg&gt;
</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import('./jquery.js').then(res =>{
//   console.log(3,res);
// });
// import('../iconfont.js').then(res =>{
//   console.log(4,res);
// });
// import('./highlight.js').then(res =>{
//   console.log(5,res);
// }); // 代码高亮

import "../iconfont.js";
import "./jquery.js";
// // 代码高亮
import "./highlight.js";

export default {
  name: "demoIconfont",
  data() {
    return {
      tableIndex: 1,
      staticUrl: this.$staticData.staticUrl,// 'https://raw.githubusercontent.com/fanxin8656361/fanxin8656361.github.io/main/static',
    };
  },
  mounted() {
    const that = this;
    // $(".tab-container .content:first").show();
    $(".tab-container .content").filter((it, ind) => ind == 1).show();
    // console.log(123)

    $("#tabs li").click(function (e) {

      let tabContent = $(".tab-container .content");
      let index = $(this).index();
      that.tableIndex = index;

      if ($(this).hasClass("active")) {
        return;
      } else {
        $("#tabs li").removeClass("active");
        $(this).addClass("active");

        tabContent.hide().eq(index).fadeIn();
      }
    });

    const copyCode = code => {
      const textarea = document.createElement("textarea");
      textarea.readOnly = "readonly";
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      document.execCommand("Copy");
      document.body.removeChild(textarea);
      that.$message.success("图标已复制");
    }

    $(".icon_lists .dib").click(function (e) {
      // console.log(1, $(this))
      // let index = $(this).index()
      let code = "";
      let content = "";

      switch (that.tableIndex) {
        case 0:
          content = $(this).children(".code-name").text().trim() || "";
          code = `<i class="Audi-Dashboard">${content}</i>`;
          break;

        case 1:
          content = $(this).children(".name").text().trim() || "";
          code = `<i class="Audi-Dashboard icon-${content}"></i>`;
          break;

        case 2:
          content = $(this).children(".code-name").text().trim() || "";
          code = `<svg class="icon" aria-hidden="true">\n\t<use xlink:href="${content}"></use>\n</svg>`;

        default:
          break;
      }

      copyCode(code)

    });
  },
};
</script>

<!-- 为了样式隔离 -->

<style src="../demo.css" scoped>

</style>
<style src="./cube.min.css" scoped>

</style>
<style src="../iconfont.css" scoped>

</style>

<style lang="scss" scoped>
// @import url(./cube.min.css);
// @import url(../demo.css);
// @import url(../iconfont.css);


// @import './cube.min.css)';
// @import '../demo.css';
// @import '../iconfont.css';


.main-box {
  .main .logo {
    margin-top: 0;
    height: auto;
    font-size: 80px;
  }

  .main .logo a {
    display: flex;
    align-items: center;
  }

  .main .logo .sub-title {
    margin-left: 0.5em;
    font-size: 22px;
    color: #fff;
    background: linear-gradient(-45deg, #3967ff, #b500fe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
