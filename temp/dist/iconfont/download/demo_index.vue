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
          <!-- <i class="Audi-Dash Audi-Dashicon-download"></i> -->
          <i class="Audi-Dash Audi-Dashdown-small"></i>
        </a>
        <!-- <a href="https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=3618271" target="_blank" class="nav-more" rel="noopener norefferrer">查看项目</a> -->
      </div>
      <div class="tab-container">
        <div class="content unicode">
          <ul class="icon_lists dib-box">
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xeaa5;</span>
              <div class="name">close-one</div>
              <div class="code-name">&amp;#xeaa5;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xeaa6;</span>
              <div class="name">down</div>
              <div class="code-name">&amp;#xeaa6;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xeaa7;</span>
              <div class="name">file-excel</div>
              <div class="code-name">&amp;#xeaa7;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xeaa8;</span>
              <div class="name">hamburger-button</div>
              <div class="code-name">&amp;#xeaa8;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xeaa9;</span>
              <div class="name">left</div>
              <div class="code-name">&amp;#xeaa9;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xeaaa;</span>
              <div class="name">webcam</div>
              <div class="code-name">&amp;#xeaaa;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xeaab;</span>
              <div class="name">save-one</div>
              <div class="code-name">&amp;#xeaab;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xeaac;</span>
              <div class="name">right</div>
              <div class="code-name">&amp;#xeaac;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe680;</span>
              <div class="name">activity-source</div>
              <div class="code-name">&amp;#xe680;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe681;</span>
              <div class="name">adjacent-item</div>
              <div class="code-name">&amp;#xe681;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe682;</span>
              <div class="name">add-one-1</div>
              <div class="code-name">&amp;#xe682;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe683;</span>
              <div class="name">add-one</div>
              <div class="code-name">&amp;#xe683;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe684;</span>
              <div class="name">application-two</div>
              <div class="code-name">&amp;#xe684;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe685;</span>
              <div class="name">background-color</div>
              <div class="code-name">&amp;#xe685;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe686;</span>
              <div class="name">abnormal</div>
              <div class="code-name">&amp;#xe686;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe687;</span>
              <div class="name">bank-card-two</div>
              <div class="code-name">&amp;#xe687;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe688;</span>
              <div class="name">bookmark</div>
              <div class="code-name">&amp;#xe688;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe689;</span>
              <div class="name">add</div>
              <div class="code-name">&amp;#xe689;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe68a;</span>
              <div class="name">close</div>
              <div class="code-name">&amp;#xe68a;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe68b;</span>
              <div class="name">bill</div>
              <div class="code-name">&amp;#xe68b;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe68c;</span>
              <div class="name">credit</div>
              <div class="code-name">&amp;#xe68c;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe68d;</span>
              <div class="name">check-correct</div>
              <div class="code-name">&amp;#xe68d;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe68e;</span>
              <div class="name">category-management</div>
              <div class="code-name">&amp;#xe68e;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe68f;</span>
              <div class="name">chart-scatter</div>
              <div class="code-name">&amp;#xe68f;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe690;</span>
              <div class="name">bank-card-one</div>
              <div class="code-name">&amp;#xe690;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe691;</span>
              <div class="name">check-one</div>
              <div class="code-name">&amp;#xe691;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe692;</span>
              <div class="name">diamond-three</div>
              <div class="code-name">&amp;#xe692;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe693;</span>
              <div class="name">book-open</div>
              <div class="code-name">&amp;#xe693;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe694;</span>
              <div class="name">card-two</div>
              <div class="code-name">&amp;#xe694;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe695;</span>
              <div class="name">delete-1</div>
              <div class="code-name">&amp;#xe695;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe696;</span>
              <div class="name">bookmark-one</div>
              <div class="code-name">&amp;#xe696;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe697;</span>
              <div class="name">delete</div>
              <div class="code-name">&amp;#xe697;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe698;</span>
              <div class="name">corner-up-right</div>
              <div class="code-name">&amp;#xe698;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe699;</span>
              <div class="name">delete-three</div>
              <div class="code-name">&amp;#xe699;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe69a;</span>
              <div class="name">delete-one</div>
              <div class="code-name">&amp;#xe69a;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe69b;</span>
              <div class="name">data-user</div>
              <div class="code-name">&amp;#xe69b;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe69c;</span>
              <div class="name">experiment-one</div>
              <div class="code-name">&amp;#xe69c;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe69d;</span>
              <div class="name">calendar-dot</div>
              <div class="code-name">&amp;#xe69d;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe69e;</span>
              <div class="name">bookshelf</div>
              <div class="code-name">&amp;#xe69e;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe69f;</span>
              <div class="name">find</div>
              <div class="code-name">&amp;#xe69f;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6a0;</span>
              <div class="name">edit-one</div>
              <div class="code-name">&amp;#xe6a0;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6a1;</span>
              <div class="name">hashtag-key</div>
              <div class="code-name">&amp;#xe6a1;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6a2;</span>
              <div class="name">font-size-two</div>
              <div class="code-name">&amp;#xe6a2;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6a3;</span>
              <div class="name">down-small</div>
              <div class="code-name">&amp;#xe6a3;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6a4;</span>
              <div class="name">down</div>
              <div class="code-name">&amp;#xe6a4;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6a5;</span>
              <div class="name">minus</div>
              <div class="code-name">&amp;#xe6a5;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6a6;</span>
              <div class="name">mark</div>
              <div class="code-name">&amp;#xe6a6;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6a7;</span>
              <div class="name">excel</div>
              <div class="code-name">&amp;#xe6a7;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6a8;</span>
              <div class="name">file-pdf</div>
              <div class="code-name">&amp;#xe6a8;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6a9;</span>
              <div class="name">every-user</div>
              <div class="code-name">&amp;#xe6a9;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6aa;</span>
              <div class="name">insert-table</div>
              <div class="code-name">&amp;#xe6aa;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6ab;</span>
              <div class="name">emotion-happy</div>
              <div class="code-name">&amp;#xe6ab;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6ac;</span>
              <div class="name">edit</div>
              <div class="code-name">&amp;#xe6ac;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6ad;</span>
              <div class="name">page-template</div>
              <div class="code-name">&amp;#xe6ad;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6ae;</span>
              <div class="name">doc-search-two</div>
              <div class="code-name">&amp;#xe6ae;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6af;</span>
              <div class="name">info</div>
              <div class="code-name">&amp;#xe6af;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6b0;</span>
              <div class="name">send-to-back</div>
              <div class="code-name">&amp;#xe6b0;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6b1;</span>
              <div class="name">preview-close</div>
              <div class="code-name">&amp;#xe6b1;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6b2;</span>
              <div class="name">iphone</div>
              <div class="code-name">&amp;#xe6b2;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6b3;</span>
              <div class="name">search-1</div>
              <div class="code-name">&amp;#xe6b3;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6b4;</span>
              <div class="name">financing</div>
              <div class="code-name">&amp;#xe6b4;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6b5;</span>
              <div class="name">notes</div>
              <div class="code-name">&amp;#xe6b5;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6b6;</span>
              <div class="name">people-safe-one</div>
              <div class="code-name">&amp;#xe6b6;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6b7;</span>
              <div class="name">open-one</div>
              <div class="code-name">&amp;#xe6b7;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6b8;</span>
              <div class="name">list-top</div>
              <div class="code-name">&amp;#xe6b8;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6b9;</span>
              <div class="name">expand-text-input</div>
              <div class="code-name">&amp;#xe6b9;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6ba;</span>
              <div class="name">handwashing</div>
              <div class="code-name">&amp;#xe6ba;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6bb;</span>
              <div class="name">message-one</div>
              <div class="code-name">&amp;#xe6bb;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6bc;</span>
              <div class="name">setting-one-1</div>
              <div class="code-name">&amp;#xe6bc;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6bd;</span>
              <div class="name">time-1</div>
              <div class="code-name">&amp;#xe6bd;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6be;</span>
              <div class="name">phone-telephone</div>
              <div class="code-name">&amp;#xe6be;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6bf;</span>
              <div class="name">move-in-one</div>
              <div class="code-name">&amp;#xe6bf;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6c0;</span>
              <div class="name">local-pin</div>
              <div class="code-name">&amp;#xe6c0;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6c1;</span>
              <div class="name">preview-open</div>
              <div class="code-name">&amp;#xe6c1;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6c2;</span>
              <div class="name">people-speak</div>
              <div class="code-name">&amp;#xe6c2;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6c3;</span>
              <div class="name">search</div>
              <div class="code-name">&amp;#xe6c3;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6c4;</span>
              <div class="name">preview-open-1</div>
              <div class="code-name">&amp;#xe6c4;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6c5;</span>
              <div class="name">star</div>
              <div class="code-name">&amp;#xe6c5;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6c6;</span>
              <div class="name">setting-one</div>
              <div class="code-name">&amp;#xe6c6;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6c7;</span>
              <div class="name">switch-one</div>
              <div class="code-name">&amp;#xe6c7;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6c8;</span>
              <div class="name">union-selection</div>
              <div class="code-name">&amp;#xe6c8;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6c9;</span>
              <div class="name">permissions</div>
              <div class="code-name">&amp;#xe6c9;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6ca;</span>
              <div class="name">plus</div>
              <div class="code-name">&amp;#xe6ca;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6cb;</span>
              <div class="name">user</div>
              <div class="code-name">&amp;#xe6cb;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6cc;</span>
              <div class="name">subtract-selection</div>
              <div class="code-name">&amp;#xe6cc;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6cd;</span>
              <div class="name">user-business</div>
              <div class="code-name">&amp;#xe6cd;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6ce;</span>
              <div class="name">split</div>
              <div class="code-name">&amp;#xe6ce;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6cf;</span>
              <div class="name">report</div>
              <div class="code-name">&amp;#xe6cf;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6d0;</span>
              <div class="name">solar-energy</div>
              <div class="code-name">&amp;#xe6d0;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6d1;</span>
              <div class="name">time</div>
              <div class="code-name">&amp;#xe6d1;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6d2;</span>
              <div class="name">up-small</div>
              <div class="code-name">&amp;#xe6d2;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6d3;</span>
              <div class="name">switch-button</div>
              <div class="code-name">&amp;#xe6d3;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6d4;</span>
              <div class="name">user-positioning</div>
              <div class="code-name">&amp;#xe6d4;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6d5;</span>
              <div class="name">swipe</div>
              <div class="code-name">&amp;#xe6d5;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6d6;</span>
              <div class="name">tickets-checked</div>
              <div class="code-name">&amp;#xe6d6;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe6d7;</span>
              <div class="name">setting-two</div>
              <div class="code-name">&amp;#xe6d7;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe67a;</span>
              <div class="name">resize-increase</div>
              <div class="code-name">&amp;#xe67a;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe67b;</span>
              <div class="name">ellipsis</div>
              <div class="code-name">&amp;#xe67b;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe67c;</span>
              <div class="name">menu-XS-dark</div>
              <div class="code-name">&amp;#xe67c;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe67d;</span>
              <div class="name">Vector</div>
              <div class="code-name">&amp;#xe67d;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe67e;</span>
              <div class="name">Vector-1</div>
              <div class="code-name">&amp;#xe67e;</div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash">&#xe67f;</span>
              <div class="name">settings</div>
              <div class="code-name">&amp;#xe67f;</div>
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
            <pre>
              <code class="language-css">
              @font-face {
                font-family: 'Audi-Dash';
                src: url('iconfont.woff2?t=1664154971432') format('woff2'),
                    url('iconfont.woff?t=1664154971432') format('woff'),
                    url('iconfont.ttf?t=1664154971432') format('truetype');
              }
              </code>
            </pre>
            <h3 id="-iconfont-">第二步：定义使用 iconfont 的样式</h3>
            <pre><code class="language-css"
>.Audi-Dash {
  font-family: "Audi-Dash" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</code></pre>
            <h3 id="-">第三步：挑选相应图标并获取字体编码，应用于页面</h3>
            <pre>
<code class="language-html"
>&lt;span class="Audi-Dash"&gt;&amp;#x33;&lt;/span&gt;
</code></pre>
            <blockquote>
              <p>"Audi-Dash" 是你项目下的 font-family。可以通过编辑项目查看，默认是 "iconfont"。</p>
            </blockquote>
          </div>
        </div>
        <div class="content font-class" style="display: block;">
          <ul class="icon_lists dib-box">
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashclose-one"></span>
              <div class="name">
                close-one
              </div>
              <div class="code-name">.Audi-Dashclose-one
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashdown1"></span>
              <div class="name">
                down
              </div>
              <div class="code-name">.Audi-Dashdown1
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashfile-excel"></span>
              <div class="name">
                file-excel
              </div>
              <div class="code-name">.Audi-Dashfile-excel
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashhamburger-button"></span>
              <div class="name">
                hamburger-button
              </div>
              <div class="code-name">.Audi-Dashhamburger-button
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashleft"></span>
              <div class="name">
                left
              </div>
              <div class="code-name">.Audi-Dashleft
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashwebcam"></span>
              <div class="name">
                webcam
              </div>
              <div class="code-name">.Audi-Dashwebcam
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashsave-one"></span>
              <div class="name">
                save-one
              </div>
              <div class="code-name">.Audi-Dashsave-one
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashright"></span>
              <div class="name">
                right
              </div>
              <div class="code-name">.Audi-Dashright
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashactivity-source"></span>
              <div class="name">
                activity-source
              </div>
              <div class="code-name">.Audi-Dashactivity-source
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashadjacent-item"></span>
              <div class="name">
                adjacent-item
              </div>
              <div class="code-name">.Audi-Dashadjacent-item
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashadd-one-1"></span>
              <div class="name">
                add-one-1
              </div>
              <div class="code-name">.Audi-Dashadd-one-1
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashadd-one"></span>
              <div class="name">
                add-one
              </div>
              <div class="code-name">.Audi-Dashadd-one
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashapplication-two"></span>
              <div class="name">
                application-two
              </div>
              <div class="code-name">.Audi-Dashapplication-two
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashbackground-color"></span>
              <div class="name">
                background-color
              </div>
              <div class="code-name">.Audi-Dashbackground-color
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashabnormal"></span>
              <div class="name">
                abnormal
              </div>
              <div class="code-name">.Audi-Dashabnormal
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashbank-card-two"></span>
              <div class="name">
                bank-card-two
              </div>
              <div class="code-name">.Audi-Dashbank-card-two
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashbookmark"></span>
              <div class="name">
                bookmark
              </div>
              <div class="code-name">.Audi-Dashbookmark
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashadd"></span>
              <div class="name">
                add
              </div>
              <div class="code-name">.Audi-Dashadd
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashclose"></span>
              <div class="name">
                close
              </div>
              <div class="code-name">.Audi-Dashclose
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashbill"></span>
              <div class="name">
                bill
              </div>
              <div class="code-name">.Audi-Dashbill
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashcredit"></span>
              <div class="name">
                credit
              </div>
              <div class="code-name">.Audi-Dashcredit
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashcheck-correct"></span>
              <div class="name">
                check-correct
              </div>
              <div class="code-name">.Audi-Dashcheck-correct
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashcategory-management"></span>
              <div class="name">
                category-management
              </div>
              <div class="code-name">.Audi-Dashcategory-management
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashchart-scatter"></span>
              <div class="name">
                chart-scatter
              </div>
              <div class="code-name">.Audi-Dashchart-scatter
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashbank-card-one"></span>
              <div class="name">
                bank-card-one
              </div>
              <div class="code-name">.Audi-Dashbank-card-one
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashcheck-one"></span>
              <div class="name">
                check-one
              </div>
              <div class="code-name">.Audi-Dashcheck-one
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashdiamond-three"></span>
              <div class="name">
                diamond-three
              </div>
              <div class="code-name">.Audi-Dashdiamond-three
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashbook-open"></span>
              <div class="name">
                book-open
              </div>
              <div class="code-name">.Audi-Dashbook-open
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashcard-two"></span>
              <div class="name">
                card-two
              </div>
              <div class="code-name">.Audi-Dashcard-two
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashdelete-1"></span>
              <div class="name">
                delete-1
              </div>
              <div class="code-name">.Audi-Dashdelete-1
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashbookmark-one"></span>
              <div class="name">
                bookmark-one
              </div>
              <div class="code-name">.Audi-Dashbookmark-one
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashdelete"></span>
              <div class="name">
                delete
              </div>
              <div class="code-name">.Audi-Dashdelete
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashcorner-up-right"></span>
              <div class="name">
                corner-up-right
              </div>
              <div class="code-name">.Audi-Dashcorner-up-right
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashdelete-three"></span>
              <div class="name">
                delete-three
              </div>
              <div class="code-name">.Audi-Dashdelete-three
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashdelete-one"></span>
              <div class="name">
                delete-one
              </div>
              <div class="code-name">.Audi-Dashdelete-one
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashdata-user"></span>
              <div class="name">
                data-user
              </div>
              <div class="code-name">.Audi-Dashdata-user
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashexperiment-one"></span>
              <div class="name">
                experiment-one
              </div>
              <div class="code-name">.Audi-Dashexperiment-one
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashcalendar-dot"></span>
              <div class="name">
                calendar-dot
              </div>
              <div class="code-name">.Audi-Dashcalendar-dot
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashbookshelf"></span>
              <div class="name">
                bookshelf
              </div>
              <div class="code-name">.Audi-Dashbookshelf
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashfind"></span>
              <div class="name">
                find
              </div>
              <div class="code-name">.Audi-Dashfind
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashedit-one"></span>
              <div class="name">
                edit-one
              </div>
              <div class="code-name">.Audi-Dashedit-one
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashhashtag-key"></span>
              <div class="name">
                hashtag-key
              </div>
              <div class="code-name">.Audi-Dashhashtag-key
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashfont-size-two"></span>
              <div class="name">
                font-size-two
              </div>
              <div class="code-name">.Audi-Dashfont-size-two
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashdown-small"></span>
              <div class="name">
                down-small
              </div>
              <div class="code-name">.Audi-Dashdown-small
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashdown"></span>
              <div class="name">
                down
              </div>
              <div class="code-name">.Audi-Dashdown
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashminus"></span>
              <div class="name">
                minus
              </div>
              <div class="code-name">.Audi-Dashminus
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashmark"></span>
              <div class="name">
                mark
              </div>
              <div class="code-name">.Audi-Dashmark
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashexcel"></span>
              <div class="name">
                excel
              </div>
              <div class="code-name">.Audi-Dashexcel
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashfile-pdf"></span>
              <div class="name">
                file-pdf
              </div>
              <div class="code-name">.Audi-Dashfile-pdf
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashevery-user"></span>
              <div class="name">
                every-user
              </div>
              <div class="code-name">.Audi-Dashevery-user
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashinsert-table"></span>
              <div class="name">
                insert-table
              </div>
              <div class="code-name">.Audi-Dashinsert-table
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashemotion-happy"></span>
              <div class="name">
                emotion-happy
              </div>
              <div class="code-name">.Audi-Dashemotion-happy
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashedit"></span>
              <div class="name">
                edit
              </div>
              <div class="code-name">.Audi-Dashedit
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashpage-template"></span>
              <div class="name">
                page-template
              </div>
              <div class="code-name">.Audi-Dashpage-template
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashdoc-search-two"></span>
              <div class="name">
                doc-search-two
              </div>
              <div class="code-name">.Audi-Dashdoc-search-two
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashinfo"></span>
              <div class="name">
                info
              </div>
              <div class="code-name">.Audi-Dashinfo
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashsend-to-back"></span>
              <div class="name">
                send-to-back
              </div>
              <div class="code-name">.Audi-Dashsend-to-back
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashpreview-close"></span>
              <div class="name">
                preview-close
              </div>
              <div class="code-name">.Audi-Dashpreview-close
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashiphone"></span>
              <div class="name">
                iphone
              </div>
              <div class="code-name">.Audi-Dashiphone
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashsearch-1"></span>
              <div class="name">
                search-1
              </div>
              <div class="code-name">.Audi-Dashsearch-1
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashfinancing"></span>
              <div class="name">
                financing
              </div>
              <div class="code-name">.Audi-Dashfinancing
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashnotes"></span>
              <div class="name">
                notes
              </div>
              <div class="code-name">.Audi-Dashnotes
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashpeople-safe-one"></span>
              <div class="name">
                people-safe-one
              </div>
              <div class="code-name">.Audi-Dashpeople-safe-one
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashopen-one"></span>
              <div class="name">
                open-one
              </div>
              <div class="code-name">.Audi-Dashopen-one
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashlist-top"></span>
              <div class="name">
                list-top
              </div>
              <div class="code-name">.Audi-Dashlist-top
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashexpand-text-input"></span>
              <div class="name">
                expand-text-input
              </div>
              <div class="code-name">.Audi-Dashexpand-text-input
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashhandwashing"></span>
              <div class="name">
                handwashing
              </div>
              <div class="code-name">.Audi-Dashhandwashing
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashmessage-one"></span>
              <div class="name">
                message-one
              </div>
              <div class="code-name">.Audi-Dashmessage-one
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashsetting-one-1"></span>
              <div class="name">
                setting-one-1
              </div>
              <div class="code-name">.Audi-Dashsetting-one-1
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashtime-1"></span>
              <div class="name">
                time-1
              </div>
              <div class="code-name">.Audi-Dashtime-1
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashphone-telephone"></span>
              <div class="name">
                phone-telephone
              </div>
              <div class="code-name">.Audi-Dashphone-telephone
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashmove-in-one"></span>
              <div class="name">
                move-in-one
              </div>
              <div class="code-name">.Audi-Dashmove-in-one
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashlocal-pin"></span>
              <div class="name">
                local-pin
              </div>
              <div class="code-name">.Audi-Dashlocal-pin
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashpreview-open"></span>
              <div class="name">
                preview-open
              </div>
              <div class="code-name">.Audi-Dashpreview-open
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashpeople-speak"></span>
              <div class="name">
                people-speak
              </div>
              <div class="code-name">.Audi-Dashpeople-speak
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashsearch"></span>
              <div class="name">
                search
              </div>
              <div class="code-name">.Audi-Dashsearch
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashpreview-open-1"></span>
              <div class="name">
                preview-open-1
              </div>
              <div class="code-name">.Audi-Dashpreview-open-1
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashstar"></span>
              <div class="name">
                star
              </div>
              <div class="code-name">.Audi-Dashstar
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashsetting-one"></span>
              <div class="name">
                setting-one
              </div>
              <div class="code-name">.Audi-Dashsetting-one
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashswitch-one"></span>
              <div class="name">
                switch-one
              </div>
              <div class="code-name">.Audi-Dashswitch-one
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashunion-selection"></span>
              <div class="name">
                union-selection
              </div>
              <div class="code-name">.Audi-Dashunion-selection
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashpermissions"></span>
              <div class="name">
                permissions
              </div>
              <div class="code-name">.Audi-Dashpermissions
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashplus"></span>
              <div class="name">
                plus
              </div>
              <div class="code-name">.Audi-Dashplus
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashuser"></span>
              <div class="name">
                user
              </div>
              <div class="code-name">.Audi-Dashuser
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashsubtract-selection"></span>
              <div class="name">
                subtract-selection
              </div>
              <div class="code-name">.Audi-Dashsubtract-selection
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashuser-business"></span>
              <div class="name">
                user-business
              </div>
              <div class="code-name">.Audi-Dashuser-business
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashsplit"></span>
              <div class="name">
                split
              </div>
              <div class="code-name">.Audi-Dashsplit
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashreport"></span>
              <div class="name">
                report
              </div>
              <div class="code-name">.Audi-Dashreport
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashsolar-energy"></span>
              <div class="name">
                solar-energy
              </div>
              <div class="code-name">.Audi-Dashsolar-energy
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashtime"></span>
              <div class="name">
                time
              </div>
              <div class="code-name">.Audi-Dashtime
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashup-small"></span>
              <div class="name">
                up-small
              </div>
              <div class="code-name">.Audi-Dashup-small
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashswitch-button"></span>
              <div class="name">
                switch-button
              </div>
              <div class="code-name">.Audi-Dashswitch-button
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashuser-positioning"></span>
              <div class="name">
                user-positioning
              </div>
              <div class="code-name">.Audi-Dashuser-positioning
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashswipe"></span>
              <div class="name">
                swipe
              </div>
              <div class="code-name">.Audi-Dashswipe
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashtickets-checked"></span>
              <div class="name">
                tickets-checked
              </div>
              <div class="code-name">.Audi-Dashtickets-checked
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashsetting-two"></span>
              <div class="name">
                setting-two
              </div>
              <div class="code-name">.Audi-Dashsetting-two
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashresize-increase"></span>
              <div class="name">
                resize-increase
              </div>
              <div class="code-name">.Audi-Dashresize-increase
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashellipsis"></span>
              <div class="name">
                ellipsis
              </div>
              <div class="code-name">.Audi-Dashellipsis
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashmenu-XS-dark"></span>
              <div class="name">
                menu-XS-dark
              </div>
              <div class="code-name">.Audi-Dashmenu-XS-dark
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-DashVector"></span>
              <div class="name">
                Vector
              </div>
              <div class="code-name">.Audi-DashVector
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-DashVector-1"></span>
              <div class="name">
                Vector-1
              </div>
              <div class="code-name">.Audi-DashVector-1
              </div>
            </li>
          
            <li class="dib">
              <span class="icon Audi-Dash Audi-Dashsettings"></span>
              <div class="name">
                settings
              </div>
              <div class="code-name">.Audi-Dashsettings
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
            <pre><code class="language-html">&lt;span class="Audi-Dash Audi-Dashxxx"&gt;&lt;/span&gt;
</code></pre>
            <blockquote>
              <p>"
                Audi-Dash" 是你项目下的 font-family。可以通过编辑项目查看，默认是 "iconfont"。</p>
            </blockquote>
          </div>
        </div>
        <div class="content symbol">
          <ul class="icon_lists dib-box">
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashclose-one"></use>
              </svg>
              <div class="name">close-one</div>
              <div class="code-name">#Audi-Dashclose-one</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashdown1"></use>
              </svg>
              <div class="name">down</div>
              <div class="code-name">#Audi-Dashdown1</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashfile-excel"></use>
              </svg>
              <div class="name">file-excel</div>
              <div class="code-name">#Audi-Dashfile-excel</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashhamburger-button"></use>
              </svg>
              <div class="name">hamburger-button</div>
              <div class="code-name">#Audi-Dashhamburger-button</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashleft"></use>
              </svg>
              <div class="name">left</div>
              <div class="code-name">#Audi-Dashleft</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashwebcam"></use>
              </svg>
              <div class="name">webcam</div>
              <div class="code-name">#Audi-Dashwebcam</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashsave-one"></use>
              </svg>
              <div class="name">save-one</div>
              <div class="code-name">#Audi-Dashsave-one</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashright"></use>
              </svg>
              <div class="name">right</div>
              <div class="code-name">#Audi-Dashright</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashactivity-source"></use>
              </svg>
              <div class="name">activity-source</div>
              <div class="code-name">#Audi-Dashactivity-source</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashadjacent-item"></use>
              </svg>
              <div class="name">adjacent-item</div>
              <div class="code-name">#Audi-Dashadjacent-item</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashadd-one-1"></use>
              </svg>
              <div class="name">add-one-1</div>
              <div class="code-name">#Audi-Dashadd-one-1</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashadd-one"></use>
              </svg>
              <div class="name">add-one</div>
              <div class="code-name">#Audi-Dashadd-one</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashapplication-two"></use>
              </svg>
              <div class="name">application-two</div>
              <div class="code-name">#Audi-Dashapplication-two</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashbackground-color"></use>
              </svg>
              <div class="name">background-color</div>
              <div class="code-name">#Audi-Dashbackground-color</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashabnormal"></use>
              </svg>
              <div class="name">abnormal</div>
              <div class="code-name">#Audi-Dashabnormal</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashbank-card-two"></use>
              </svg>
              <div class="name">bank-card-two</div>
              <div class="code-name">#Audi-Dashbank-card-two</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashbookmark"></use>
              </svg>
              <div class="name">bookmark</div>
              <div class="code-name">#Audi-Dashbookmark</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashadd"></use>
              </svg>
              <div class="name">add</div>
              <div class="code-name">#Audi-Dashadd</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashclose"></use>
              </svg>
              <div class="name">close</div>
              <div class="code-name">#Audi-Dashclose</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashbill"></use>
              </svg>
              <div class="name">bill</div>
              <div class="code-name">#Audi-Dashbill</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashcredit"></use>
              </svg>
              <div class="name">credit</div>
              <div class="code-name">#Audi-Dashcredit</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashcheck-correct"></use>
              </svg>
              <div class="name">check-correct</div>
              <div class="code-name">#Audi-Dashcheck-correct</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashcategory-management"></use>
              </svg>
              <div class="name">category-management</div>
              <div class="code-name">#Audi-Dashcategory-management</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashchart-scatter"></use>
              </svg>
              <div class="name">chart-scatter</div>
              <div class="code-name">#Audi-Dashchart-scatter</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashbank-card-one"></use>
              </svg>
              <div class="name">bank-card-one</div>
              <div class="code-name">#Audi-Dashbank-card-one</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashcheck-one"></use>
              </svg>
              <div class="name">check-one</div>
              <div class="code-name">#Audi-Dashcheck-one</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashdiamond-three"></use>
              </svg>
              <div class="name">diamond-three</div>
              <div class="code-name">#Audi-Dashdiamond-three</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashbook-open"></use>
              </svg>
              <div class="name">book-open</div>
              <div class="code-name">#Audi-Dashbook-open</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashcard-two"></use>
              </svg>
              <div class="name">card-two</div>
              <div class="code-name">#Audi-Dashcard-two</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashdelete-1"></use>
              </svg>
              <div class="name">delete-1</div>
              <div class="code-name">#Audi-Dashdelete-1</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashbookmark-one"></use>
              </svg>
              <div class="name">bookmark-one</div>
              <div class="code-name">#Audi-Dashbookmark-one</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashdelete"></use>
              </svg>
              <div class="name">delete</div>
              <div class="code-name">#Audi-Dashdelete</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashcorner-up-right"></use>
              </svg>
              <div class="name">corner-up-right</div>
              <div class="code-name">#Audi-Dashcorner-up-right</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashdelete-three"></use>
              </svg>
              <div class="name">delete-three</div>
              <div class="code-name">#Audi-Dashdelete-three</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashdelete-one"></use>
              </svg>
              <div class="name">delete-one</div>
              <div class="code-name">#Audi-Dashdelete-one</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashdata-user"></use>
              </svg>
              <div class="name">data-user</div>
              <div class="code-name">#Audi-Dashdata-user</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashexperiment-one"></use>
              </svg>
              <div class="name">experiment-one</div>
              <div class="code-name">#Audi-Dashexperiment-one</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashcalendar-dot"></use>
              </svg>
              <div class="name">calendar-dot</div>
              <div class="code-name">#Audi-Dashcalendar-dot</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashbookshelf"></use>
              </svg>
              <div class="name">bookshelf</div>
              <div class="code-name">#Audi-Dashbookshelf</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashfind"></use>
              </svg>
              <div class="name">find</div>
              <div class="code-name">#Audi-Dashfind</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashedit-one"></use>
              </svg>
              <div class="name">edit-one</div>
              <div class="code-name">#Audi-Dashedit-one</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashhashtag-key"></use>
              </svg>
              <div class="name">hashtag-key</div>
              <div class="code-name">#Audi-Dashhashtag-key</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashfont-size-two"></use>
              </svg>
              <div class="name">font-size-two</div>
              <div class="code-name">#Audi-Dashfont-size-two</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashdown-small"></use>
              </svg>
              <div class="name">down-small</div>
              <div class="code-name">#Audi-Dashdown-small</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashdown"></use>
              </svg>
              <div class="name">down</div>
              <div class="code-name">#Audi-Dashdown</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashminus"></use>
              </svg>
              <div class="name">minus</div>
              <div class="code-name">#Audi-Dashminus</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashmark"></use>
              </svg>
              <div class="name">mark</div>
              <div class="code-name">#Audi-Dashmark</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashexcel"></use>
              </svg>
              <div class="name">excel</div>
              <div class="code-name">#Audi-Dashexcel</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashfile-pdf"></use>
              </svg>
              <div class="name">file-pdf</div>
              <div class="code-name">#Audi-Dashfile-pdf</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashevery-user"></use>
              </svg>
              <div class="name">every-user</div>
              <div class="code-name">#Audi-Dashevery-user</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashinsert-table"></use>
              </svg>
              <div class="name">insert-table</div>
              <div class="code-name">#Audi-Dashinsert-table</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashemotion-happy"></use>
              </svg>
              <div class="name">emotion-happy</div>
              <div class="code-name">#Audi-Dashemotion-happy</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashedit"></use>
              </svg>
              <div class="name">edit</div>
              <div class="code-name">#Audi-Dashedit</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashpage-template"></use>
              </svg>
              <div class="name">page-template</div>
              <div class="code-name">#Audi-Dashpage-template</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashdoc-search-two"></use>
              </svg>
              <div class="name">doc-search-two</div>
              <div class="code-name">#Audi-Dashdoc-search-two</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashinfo"></use>
              </svg>
              <div class="name">info</div>
              <div class="code-name">#Audi-Dashinfo</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashsend-to-back"></use>
              </svg>
              <div class="name">send-to-back</div>
              <div class="code-name">#Audi-Dashsend-to-back</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashpreview-close"></use>
              </svg>
              <div class="name">preview-close</div>
              <div class="code-name">#Audi-Dashpreview-close</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashiphone"></use>
              </svg>
              <div class="name">iphone</div>
              <div class="code-name">#Audi-Dashiphone</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashsearch-1"></use>
              </svg>
              <div class="name">search-1</div>
              <div class="code-name">#Audi-Dashsearch-1</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashfinancing"></use>
              </svg>
              <div class="name">financing</div>
              <div class="code-name">#Audi-Dashfinancing</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashnotes"></use>
              </svg>
              <div class="name">notes</div>
              <div class="code-name">#Audi-Dashnotes</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashpeople-safe-one"></use>
              </svg>
              <div class="name">people-safe-one</div>
              <div class="code-name">#Audi-Dashpeople-safe-one</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashopen-one"></use>
              </svg>
              <div class="name">open-one</div>
              <div class="code-name">#Audi-Dashopen-one</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashlist-top"></use>
              </svg>
              <div class="name">list-top</div>
              <div class="code-name">#Audi-Dashlist-top</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashexpand-text-input"></use>
              </svg>
              <div class="name">expand-text-input</div>
              <div class="code-name">#Audi-Dashexpand-text-input</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashhandwashing"></use>
              </svg>
              <div class="name">handwashing</div>
              <div class="code-name">#Audi-Dashhandwashing</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashmessage-one"></use>
              </svg>
              <div class="name">message-one</div>
              <div class="code-name">#Audi-Dashmessage-one</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashsetting-one-1"></use>
              </svg>
              <div class="name">setting-one-1</div>
              <div class="code-name">#Audi-Dashsetting-one-1</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashtime-1"></use>
              </svg>
              <div class="name">time-1</div>
              <div class="code-name">#Audi-Dashtime-1</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashphone-telephone"></use>
              </svg>
              <div class="name">phone-telephone</div>
              <div class="code-name">#Audi-Dashphone-telephone</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashmove-in-one"></use>
              </svg>
              <div class="name">move-in-one</div>
              <div class="code-name">#Audi-Dashmove-in-one</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashlocal-pin"></use>
              </svg>
              <div class="name">local-pin</div>
              <div class="code-name">#Audi-Dashlocal-pin</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashpreview-open"></use>
              </svg>
              <div class="name">preview-open</div>
              <div class="code-name">#Audi-Dashpreview-open</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashpeople-speak"></use>
              </svg>
              <div class="name">people-speak</div>
              <div class="code-name">#Audi-Dashpeople-speak</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashsearch"></use>
              </svg>
              <div class="name">search</div>
              <div class="code-name">#Audi-Dashsearch</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashpreview-open-1"></use>
              </svg>
              <div class="name">preview-open-1</div>
              <div class="code-name">#Audi-Dashpreview-open-1</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashstar"></use>
              </svg>
              <div class="name">star</div>
              <div class="code-name">#Audi-Dashstar</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashsetting-one"></use>
              </svg>
              <div class="name">setting-one</div>
              <div class="code-name">#Audi-Dashsetting-one</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashswitch-one"></use>
              </svg>
              <div class="name">switch-one</div>
              <div class="code-name">#Audi-Dashswitch-one</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashunion-selection"></use>
              </svg>
              <div class="name">union-selection</div>
              <div class="code-name">#Audi-Dashunion-selection</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashpermissions"></use>
              </svg>
              <div class="name">permissions</div>
              <div class="code-name">#Audi-Dashpermissions</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashplus"></use>
              </svg>
              <div class="name">plus</div>
              <div class="code-name">#Audi-Dashplus</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashuser"></use>
              </svg>
              <div class="name">user</div>
              <div class="code-name">#Audi-Dashuser</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashsubtract-selection"></use>
              </svg>
              <div class="name">subtract-selection</div>
              <div class="code-name">#Audi-Dashsubtract-selection</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashuser-business"></use>
              </svg>
              <div class="name">user-business</div>
              <div class="code-name">#Audi-Dashuser-business</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashsplit"></use>
              </svg>
              <div class="name">split</div>
              <div class="code-name">#Audi-Dashsplit</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashreport"></use>
              </svg>
              <div class="name">report</div>
              <div class="code-name">#Audi-Dashreport</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashsolar-energy"></use>
              </svg>
              <div class="name">solar-energy</div>
              <div class="code-name">#Audi-Dashsolar-energy</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashtime"></use>
              </svg>
              <div class="name">time</div>
              <div class="code-name">#Audi-Dashtime</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashup-small"></use>
              </svg>
              <div class="name">up-small</div>
              <div class="code-name">#Audi-Dashup-small</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashswitch-button"></use>
              </svg>
              <div class="name">switch-button</div>
              <div class="code-name">#Audi-Dashswitch-button</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashuser-positioning"></use>
              </svg>
              <div class="name">user-positioning</div>
              <div class="code-name">#Audi-Dashuser-positioning</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashswipe"></use>
              </svg>
              <div class="name">swipe</div>
              <div class="code-name">#Audi-Dashswipe</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashtickets-checked"></use>
              </svg>
              <div class="name">tickets-checked</div>
              <div class="code-name">#Audi-Dashtickets-checked</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashsetting-two"></use>
              </svg>
              <div class="name">setting-two</div>
              <div class="code-name">#Audi-Dashsetting-two</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashresize-increase"></use>
              </svg>
              <div class="name">resize-increase</div>
              <div class="code-name">#Audi-Dashresize-increase</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashellipsis"></use>
              </svg>
              <div class="name">ellipsis</div>
              <div class="code-name">#Audi-Dashellipsis</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashmenu-XS-dark"></use>
              </svg>
              <div class="name">menu-XS-dark</div>
              <div class="code-name">#Audi-Dashmenu-XS-dark</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-DashVector"></use>
              </svg>
              <div class="name">Vector</div>
              <div class="code-name">#Audi-DashVector</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-DashVector-1"></use>
              </svg>
              <div class="name">Vector-1</div>
              <div class="code-name">#Audi-DashVector-1</div>
            </li>
          
            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#Audi-Dashsettings"></use>
              </svg>
              <div class="name">settings</div>
              <div class="code-name">#Audi-Dashsettings</div>
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
            <pre>
                          <code class="language-html">&lt;svg class="icon svg-icon" aria-hidden="true"&gt;
              &lt;use xlink:href="#Audi-Dashxxx"&gt;&lt;/use&gt;
            &lt;/svg&gt;
            </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <footerBar/>
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
      <span class="icon Audi-Dash Audi-Dashactivity-source"></span>
      switch (that.tableIndex) {
        case 0:
          content = $(this).children(".code-name").text().trim() || "";
          code = `<i class="icon Audi-Dash">${content}</i>`;
          break;

        case 1:
          content = $(this).children(".name").text().trim() || "";
          // code = `<i class="icon Audi-Dash icon-${content}"></i>`;
          code = `<i class="Audi-Dash Audi-Dash${content}"></i>`;
          break;

        case 2:
          content = $(this).children(".code-name").text().trim() || "";
          code = `<svg class="icon svg-icon" aria-hidden="true">\n\t<use xlink:href="${content}"></use>\n</svg>`;
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
