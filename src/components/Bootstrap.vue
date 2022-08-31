<template>
  <n-button v-if="data.isShowPDF" @click="closePDF()" strong secondary>
    返回
  </n-button>
  <Preview
    v-if="data.isShowPDF"
    url="http://www.rainxy.com/BootstrapPage/assets/%E4%BD%9C%E5%93%81%E9%9B%86PDF.pdf"
  />
  <div v-else>
    <n-carousel>
      <img
        @click="openPDF()"
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      />
    </n-carousel>
    <n-grid :x-gap="12" :y-gap="8" :cols="4">
      <n-grid-item
        @click="goToPage(item.href)"
        class="itemBox"
        v-for="(item, index) in data.listArr"
        :key="index"
      >
        <n-card :title="item.title">
          <template #cover>
            <img :src="item.src" />
          </template>
          <p class="small">{{ item.smallText }}</p>
          <p class="bottom">{{ item.text }}</p>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup>
import Preview from "./Preview.vue";
const data = reactive({
  isShowPDF: false,
  listArr: [
    {
      title: "优站精选",
      smallText: " Bootstrap 网站实例",
      text: "Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。",
      href: "https://www.youzhan.org/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/expo.png",
      alt: "Bootstrap 优站精选",
    },

    {
      title: "React",
      smallText: "用于构建用户界面的 JavaScript 框架",
      text: "React 起源于 Facebook 的内部项目，是一个用于构建用户界面的 JavaScript 库。",
      href: "https://reactjs.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/react.png",
      alt: "React - 用于构建用户界面的 JavaScript 框架",
    },

    {
      title: "Webpack",
      smallText: "是前端资源模块化管理和打包工具",
      text: "Webpack 是当下最热门的前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。",
      href: "https://www.webpackjs.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/webpack.png",
      alt: "Webpack 是前端资源模块化管理和打包工具",
    },

    {
      title: "TypeScript",
      smallText: "中文手册",
      text: "TypeScript 是由微软开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。",
      href: "https://typescript.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/typescript.png",
      alt: "TypeScript 中文手册",
    },

    {
      title: "Next.js",
      smallText: "中文文档",
      text: "Next.js 是一个轻量级的 React 服务端渲染应用框架。",
      href: "https://www.nextjs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/nextjs.png",
      alt: "Next.js 是一个轻量级的 React 服务端渲染应用框架。",
    },

    {
      title: "Babel",
      smallText: "是一个 JavaScript 编译器。",
      text: "Babel 是一个 JavaScript 编译器。Babel 通过语法转换器支持最新版本的 JavaScript 语法。",
      href: "https://www.babeljs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/babeljs.png",
      alt: "Babel 是一个 JavaScript 编译器。",
    },

    {
      title: "NPM",
      smallText: "中文文档",
      text: "NPM（node package manager）是 Node.js 世界的包管理器。NPM 可以让 JavaScript 开发者在共享代码、复用代码以及更新共享的代码上更加方便。",
      href: "https://www.npmjs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/npm.png",
      alt: "NPM 中文文档",
    },

    {
      title: "Yarn",
      smallText: "中文手册",
      text: "Yarn 是一个快速、可靠、安全的依赖管理工具。是 NPM 的替代品。",
      href: "https://www.yarnpkg.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/yarn.png",
      alt: "Yarn 是一个快速、可靠、安全的依赖管理工具。是 NPM 的替代品。",
    },

    {
      title: "Yarn v2",
      smallText: "中文手册",
      text: "Yarn 是一个快速、可靠、安全的依赖管理工具。是 NPM 的替代品。Yarn v2 与 v1 版本有很大的不同，Yarn v2 改进了 CLI 交互、支持 workspace、PnP 等新功能。",
      href: "https://www.yarnpkg.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/yarn.png",
      alt: "Yarn 是一个快速、可靠、安全的依赖管理工具。是 NPM 的替代品。Yarn v2 与 v1 版本有很大的不同，Yarn v2 改进了 CLI 交互、支持 workspace、PnP 等新功能。",
    },

    {
      title: "pnpm",
      smallText: "速度快、节省磁盘空间的软件包管理",
      text: "pnpm 是一个速度快、节省磁盘空间的软件包管理器。pnpm 在功能上与 npm 和 Yarn 类似。",
      href: "https://www.pnpm.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/pnpm.png",
      alt: "pnpm",
    },

    {
      title: "Tailwind CSS",
      smallText: "中文文档",
      text: "Tailwind CSS 是一个用于快速UI开发的实用工具集 CSS 框架。与 Bootstrap 、Foundation 不同，Tailwind CSS 没有内置的 UI 组件。完全需要开发者根据自身情况来定制设计。",
      href: "https://www.tailwindcss.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/tailwindcss.png",
      alt: "Tailwind CSS 中文网 / 中文文档",
    },

    {
      title: "Alpine.js",
      smallText: "中文文档",
      text: "Alpine.js 通过很低的成本提供了与 Vue 或 React 这类大型框架相近的响应式和声明式特性。Alpine.js 的语法几乎完全借用自 Vue。",
      href: "https://www.alpinejs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/alpinejs.png",
      alt: "Alpine.js",
    },

    {
      title: "Docusaurus",
      smallText: " 基于 React 框架的静态站点生成器",
      text: "Docusaurus 是一款基于 React 框架构建的易于维护的静态网站创建工具。Docusaurus 能够帮你快速建立文档网站、博客、营销页面等。",
      href: "https://www.docusaurus.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/docusaurus.png",
      alt: "Docusaurus 中文文档",
    },

    {
      title: "Svelte",
      smallText: "中文网",
      text: "Svelte 是构建 Web 应用程序的一种新方法。Svelte 是一个编译器，它将声明性组件转换成高效的 JavaScript 代码，并像做外科手术一样细粒度地更新 DOM。",
      href: "https://www.sveltejs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/svelte.png",
      alt: "Svelte",
    },

    {
      title: "Solid.js",
      smallText: "中文网",
      text: "Solid.js 是一个用于构建用户界面、简单高效、性能卓越的 JavaScript 库，是 React.js 的有力竞争者。",
      href: "https://www.solidjs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/solidjs.png",
      alt: "Solid.js",
    },

    {
      title: "Lerna",
      smallText: "中文文档",
      text: "Lerna 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目。",
      href: "https://www.lernajs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/lernajs.png",
      alt: "Lerna 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目。",
    },

    {
      title: "Vue.js",
      smallText: " 中文文档。",
      text: "Vue.js - 是一套构建用户界面的渐进式框架。",
      href: "https://vuejs.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/vuejs.png",
      alt: "Vue.js - 渐进式 JavaScript 框架",
    },

    {
      title: "Nuxt.js",
      smallText: "中文文档",
      text: "Nuxt.js 是一个基于 Vue.js 的通用应用框架。通过对客户端/服务端基础架构的抽象组织，Nuxt.js 主要关注的是应用的 UI渲染。",
      href: "https://www.nuxtjs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/nuxtjs.png",
      alt: "Nuxt.js 中文文档",
    },

    {
      title: "Recoil",
      smallText: " React 状态管理库",
      text: "Recoil 是一个针对 React 应用程序的状态管理库。 它提供了仅使用 React 难以实现的几种功能，同时与 React 的最新功能兼容。",
      href: "https://www.recoiljs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/recoil.png",
      alt: "Recoil 中文文档",
    },

    {
      title: "Redux",
      smallText: "中文文档",
      text: "Redux 是 JavaScript 状态容器，提供可预测化的状态管理、构建一致化的应用，运行于不同的环境（客户端、服务器、原生应用），并且易于测试。",
      href: "https://www.reduxjs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/redux.png",
      alt: "Redux 中文文档",
    },

    {
      title: "MobX",
      smallText: "中文文",
      text: "MobX 是一个简单、可扩展的状态管理工具库",
      href: "https://www.mobxjs.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/mobx.png",
      alt: "MobX 中文文档",
    },

    {
      title: "Rollup",
      smallText: "新一代的 JavaScript 模块打包工具",
      text: "Rollup 是一个 JavaScript 模块打包工具，可以将小块代码编译成大块复杂的代码。Rollup 对 JavaScript 代码模块使用新的 ES6 标准化格式，如 CommonJS 和 AMD。",
      href: "https://www.rollupjs.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/rollup.png",
      alt: "rollup.js 是新一代的 JavaScript 模块打包工具。",
    },

    {
      title: "Parcel",
      smallText: "中文文档",
      text: "Parcel - 极速、零配置的 web 应用打包工具。",
      href: "https://www.parceljs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/parcel.png",
      alt: "Parcel - 极速、零配置的 web 应用打包工具。",
    },

    {
      title: "Lodash",
      smallText: "JavaScript 工具库",
      text: "Lodash 是一个具有一致接口、模块化、高性能等特性的 JavaScript 工具库。比相同功能的 Underscore.js 使用更广泛。",
      href: "https://www.lodashjs.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/lodash.png",
      alt: "Lodash 是最流行的 JavaScript 工具库。",
    },

    {
      title: "Pro Git",
      smallText: "Git 入门到专家指南",
      text: "Pro Git 中文版（第二版）是一本详细的 Git 指南，主要介绍了 Git 的使用基础和原理，让你从 Git 初学者成为 Git 专家。",
      href: "https://www.progit.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/progit.png",
      alt: "Pro Git 中文版（第二版）让你从 Git 初学者成为 Git 专家",
    },

    {
      title: "Bootstrap Icons",
      smallText: "Bootstrap 专用 SVG 图标集",
      text: "Bootstrap Icons 的设计初衷是与 Bootstrap 组件配合使用。Bootstrap Icons 全部是 SVG 文件，因此能够轻松快捷地进行缩放，并可以通过 CSS 设置样式。虽然 Bootstrap Icons 是为 Bootstrap 而开发的，但它也可以应用于任何项目。",
      href: "https://icons.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/bootstrap-icons.png",
      alt: "专为 Bootstrap 打造的 SVG 图标（icons）集",
    },

    {
      title: "Preact",
      smallText: "React 轻量替代方案。",
      text: "Preact - 一个只有 3kB 大小的 React 替代品，拥有与 React 相同的 API、组件和虚拟 DOM。",
      href: "https://www.preactjs.com.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/preact.png",
      alt: "Preact - 一个只有 3kB 大小的 React 替代品，拥有与 React 相同的 API、组件和虚拟 DOM。",
    },

    {
      title: "PurgeCSS",
      smallText: "中文网",
      text: "PurgeCSS 是一个用来删除未使用的 CSS 代码的工具，能够减小 CSS 文件的体积。例如可以用来减小 Bootstrap 等前端框架的文件体积，提升加载速度。",
      href: "https://www.purgecss.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/purgecss.png",
      alt: "PurgeCSS 中文文档",
    },

    {
      title: "gulp.js",
      smallText: "基于流的自动化构建工具。",
      text: "gulp.js - 基于流(stream)的自动化构建工具。Grunt 采用配置文件的方式执行任务，而 Gulp 一切都通过代码实现。",
      href: "https://www.gulpjs.com.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/gulpjs.png",
      alt: "gulp.js - 基于流的自动化构建工具。",
    },

    {
      title: "Markdown",
      smallText: " 中文手册及速查表",
      text: "Markdown 是一种轻量级标记语言，便于人们使用易读易写的纯文本格式编写文档并添加格式元素。Markdown 是 John Gruber 于 2004 年创建的。",
      href: "https://www.markdown.xyz/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/markdown.png",
      alt: "Markdown 中文手册及速查表",
    },

    {
      title: "MDX",
      smallText: "中文",
      text: "MDX 是一种书写格式，允许你在 Markdown 文档中无缝地编写 JSX。你可以导入组件，如交互式图表等，并将它们嵌入到你的内容中。这使得用组件编写长篇内容成为一种可能。",
      href: "https://www.mdxjs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/mdx.png",
      alt: "MDX 中文文档",
    },

    {
      title: "ESLint",
      smallText: "JavaScript 代码检查工具",
      text: "ESLint 是一个插件化并且可配置的 JavaScript 语法规则和代码风格的检查工具。ESLint 能够帮你轻松写出高质量的 JavaScript 代码。",
      href: "https://www.eslint.com.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/eslint.png",
      alt: "ESLint 是一个插件化并且可配置的 JavaScript 语法规则和代码风格的检查工具。ESLint 能够帮你轻松写出高质量的 JavaScript 代码。",
    },

    {
      title: "Stylelint",
      smallText: "CSS 代码检查器",
      text: "Stylelint 是一个强大、先进的 CSS 代码检查器（linter），可以帮助你规避 CSS 代码中的错误并保持一致的编码风格。",
      href: "https://stylelint.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/stylelint.png",
      alt: "Stylelint 是一个强大、先进的 CSS 代码检查器（linter），可以帮助你规避 CSS 代码中的错误并保持一致的编码风格。",
    },

    {
      title: "Sass",
      smallText: "最流行的 CSS 扩展语言解析",
      text: "Sass 是一个成熟、稳定、强大的 CSS 扩展语言解析器。",
      href: "https://www.sasscss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/sass.png",
      alt: "Sass 是一个成熟、稳定、强大的 CSS 扩展语言解析器。",
    },

    {
      title: "LESS",
      smallText: "一种动态样式语",
      text: "LESS 为 CSS 赋予了动态语言的特性，如变量、继承、运算、函数。LESS 既可以在客户端上运行 (支持 IE 6+、Webkit、Firefox)，也可以借助 Node.js 或者 Rhino 在服务端运行。",
      href: "https://less.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/lesscss.png",
      alt: "LESS 一种动态样式语言",
    },

    {
      title: "Infima CSS 框架",
      smallText: "中文文档",
      text: "Infima 是 Facebook 出品的一个 CSS 框架，专为内容驱动型网站而设计，并且内建对暗模式的支持。是 Docusaurus的姊妹项目。",
      href: "https://infima.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/infima.png",
      alt: "Infima CSS 框架中文网 / 中文文档",
    },

    {
      title: "VuePress",
      smallText: "基于 Vue 前端开发框架的静态站点生成工具",
      text: "VuePress 是基于 Vue 前端开发框架的静态站点生成工具。",
      href: "https://www.vuepress.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/vuepress.png",
      alt: "VuePress 是基于 Vue 前端开发框架的静态站点生成工具。",
    },

    {
      title: "Gatsby",
      smallText: "中文文档",
      text: "Gatsby 是一个基于 React 的免费、开源框架，可以帮助开发人员构建快速的网站和应用程序。",
      href: "https://www.gatsbyjs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/gatsby.png",
      alt: "Gatsby 中文文档",
    },

    {
      title: "Handlebars",
      smallText: "一个书写高效率、语义化的模板引擎",
      text: "Handlebars 是一个书写高效率、语义化的模板引擎，与 Mustache 模板兼容。",
      href: "https://www.handlebarsjs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/handlebars.png",
      alt: "Handlebars 模板引擎",
    },

    {
      title: "Stylus",
      smallText: "CSS 预处理语言",
      text: "Stylus - 富于表现力、健壮、功能丰富的 CSS 预处理语言。",
      href: "https://www.stylus-lang.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/stylus.png",
      alt: "Stylus -- CSS 预处理语言",
    },

    {
      title: "Pug",
      smallText: "Node.js 模板引",
      text: "Pug 是一款健壮、灵活、功能丰富的模板引擎，专门为 Node.js 平台开发。Pug 是由 Jade 改名而来。",
      href: "https://www.pugjs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/pug.png",
      alt: "Pug - 健壮、灵活、功能丰富的 Node.js 模板引擎",
    },

    {
      title: "Liquid",
      smallText: "Jekyll 的模板语言。",
      text: "Liquid - 最流行的模板语言。Jekyll、Github Pages 都在用。",
      href: "https://liquid.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/liquid.png",
      alt: "Liquid - Jekyll 的模板语言。",
    },

    {
      title: "WebAssembly",
      smallText: "面向 web 应用的编译格式",
      text: "WebAssembly，简称为 wasm，是一种新型可移植，具有占用存储小、加载速度快等特点的面向 web 应用的编译格式。",
      href: "https://www.wasm.com.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/webassembly.png",
      alt: "WebAssembly 中文文档",
    },

    {
      title: "EJS",
      smallText: "中文文档",
      text: "EJS 是一套简单的模板语言，帮你利用普通的 JavaScript 代码生成 HTML 页面。EJS 没有再造一套迭代和控制流语法，有的只是普通的 JavaScript 代码而已。",
      href: "https://ejs.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/ejs.png",
      alt: "EJS 中文文档",
    },

    {
      title: "PostCSS",
      smallText: "中文网",
      text: "PostCSS 利用 JavaScript 的强大编程能力对 CSS 代码进行转换。数以百计的 PostCSS 插件可以用来为 CSS 属性添加特定于浏览器厂商的前缀、支持未来 CSS 语法、模块化、代码检测等。",
      href: "https://www.postcss.com.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/postcss.png",
      alt: "PostCSS - 是一个用 JavaScript 工具和插件来转换 CSS 代码的工具",
    },

    {
      title: "Underscore.js",
      smallText: "JavaScript 工具库",
      text: "Underscore.js是一个 JavaScript 工具库，它提供了一整套函数式编程的实用功能，弥补了 jQuery 没有实现的功能，同时又是 Backbone 必不可少的部分。",
      href: "https://www.underscorejs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/underscore.png",
      alt: "Underscore.js 是一个 JavaScript 工具库",
    },

    {
      title: "cssnano",
      smallText: "中文文档",
      text: "cssnano 将你的 CSS 文件做多方面的的优化，以确保最终生成的文件对生产环境来说体积是最小的。cssnano 是基于PostCSS 构建的。",
      href: "https://www.cssnano.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/cssnano.png",
      alt: "cssnano 中文文档",
    },

    {
      title: "Nunjucks",
      smallText: "模板引擎",
      text: "Nunjucks 是 JavaScript 专用的功能丰富、强大的模板引擎。",
      href: "https://nunjucks.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/nunjucks.png",
      alt: "Nunjucks 是 JavaScript 专用的功能丰富、强大的模板引擎。",
    },

    {
      title: "Zepto.js",
      smallText: "JavaScript 工具库",
      text: "Zepto.js 是一个轻量级、兼容 jQuery 的 JavaScript 工具库。",
      href: "https://zeptojs.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/zeptojs.png",
      alt: "Zepto.js 是一个轻量级、兼容 jQuery 的 JavaScript 工具库",
    },

    {
      title: "GraphQL",
      smallText: "中文文档",
      text: "GraphQL 既是一种用于 API 的查询语言也是一个满足你数据查询的运行时。",
      href: "https://graphql.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/graphql.png",
      alt: "GraphQL 中文文档",
    },

    {
      title: "Express",
      smallText: "中文文档",
      text: "Express 是基于 Node.js 平台，快速、开放、极简的 Web 开发框架",
      href: "https://www.expressjs.com.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/express.png",
      alt: "Express 中文文档",
    },

    {
      title: "fastify",
      smallText: "中文文档",
      text: "Fastify，快速并且低开销的 web 框架，专为 Node.js 平台量身打造",
      href: "https://www.fastify.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/fastify.png",
      alt: "fastify 中文文档",
    },

    {
      title: "Browsersync",
      smallText: "浏览器同步测试工具",
      text: "Browsersync 浏览器同步测试工具，很容易与 Web 平台、构建工具和其他 Node.js 项目集成，替代了大量重复测试劳动。",
      href: "https://browsersync.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/browsersync.png",
      alt: "Browsersync 浏览器同步测试工具",
    },

    {
      title: "Jest",
      smallText: " JavaScript 测试框",
      text: "Jest 是一个令人愉快的 JavaScript 测试框架，专注于简洁明快。",
      href: "https://www.jestjs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/jest.png",
      alt: "Jest 中文文档",
    },

    {
      title: "SemVer",
      smallText: " 语义化版本规范",
      text: "SemVer 全称为 Semantic Versioning(语义化版本表示)。该规则规定了版本号如何表示、如何增加、如何进行比较，不同的版本号意味着什么。",
      href: "https://semver.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/semver.png",
      alt: "SemVer 语义化版本规范中文全文",
    },

    {
      title: "Chart.js",
      smallText: "开源的 HTML5 图表工具",
      text: "Chart.js 是为设计和开发人员准备的简单、灵活的 JavaScript 图表工具。",
      href: "https://chartjs.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/chartjs.png",
      alt: "Chart.js 是为设计和开发人员准备的简单、灵活的 JavaScript 图表工具。",
    },

    {
      title: "Moment.js",
      smallText: " 中文文档",
      text: "Moment.js 是一个 JavaScript 日期处理类库，用于解析、校验、操作以及显示日期。",
      href: "https://momentjs.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/momentjs.png",
      alt: "Moment.js 中文文档",
    },

    {
      title: "Rome",
      smallText: " 一个完整的 JavaScript 工具",
      text: "Rome 是一个完整的 JavaScript 工具链。它囊括了编译器、语法检查器、格式化程序、打包工具、测试框架等等。Rome 旨在成为处理 JavaScript 源代码的综合工具。Rome 的作者是 Sebastian McKenzie，同时也是 Babel 和 Yarn 的作者。",
      href: "https://www.romejs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/rome.png",
      alt: "Rome 中文文档",
    },

    {
      title: "Gridsome",
      smallText: " 基于 Vue.js 框架的静态站点生成器",
      text: "Gridsome 是一个免费、开源的 Vue.js 框架，用于构建网站和应用程序，在默认配置下也能有非常快的速度。",
      href: "https://www.gridsome.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/gridsome.png",
      alt: "Gridsome 中文文档",
    },

    {
      title: "Mirage",
      smallText: " 帮助前端开发者模拟后端 API",
      text: "Mirage 是一个 API 模拟库，它能帮助前端开发者模拟后端 API，从而能够构建和测试 JavaScript 应用程序，而不必依赖任何后端服务。",
      href: "https://www.miragejs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/miragejs.png",
      alt: "Mirage 中文文档",
    },

    {
      title: "Jekyll",
      smallText: "中文文档",
      text: "Jekyll 是一个静态站点生成工具。它将 Markdown （或者 Textile） 以及 Liquid 转化成一个完整的可发布的静态网站。",
      href: "https://www.jekyll.com.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/jekyll.png",
      alt: "Jekyll 是最流行的静态站点生成工具。",
    },

    {
      title: "Create React App",
      smallText: " 中文文档",
      text: "Create React App 是由 React 官方维护的创建 React 单页面应用的工具。它提供了一种无需配置的现代构建方案。",
      href: "https://create-react-app.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/create-react-app.png",
      alt: "Create-React-App 中文文档",
    },

    {
      title: "Sapper",
      smallText: " 是基于 Svelte 构建的 web 应用开发框架",
      text: "Sapper 是基于 Svelte 构建的、用于创建高性能 Web 应用开发框架。",
      href: "https://www.sapperjs.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/sapper.png",
      alt: "Sapper 中文文档",
    },

    {
      title: "Bootstrap 编码规范",
      smallText: "by @mdo",
      text: "Bootstrap 编码规范：编写灵活、稳定、高质量的 HTML 和 CSS 代码的规范。",
      href: "https://codeguide.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/codeguide.png",
      alt: "Bootstrap 编码规范",
    },

    {
      title: "jQuery API",
      smallText: "中文手册",
      text: "根据最新的 jQuery 1.11.x 和 2.1.x 版本翻译的 jQuery API 中文文档/手册。",
      href: "https://www.jquery123.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/jqueryapi.png",
      alt: "jQuery API 中文文档/手册",
    },

    {
      title: "Bundler",
      smallText: "是 Ruby 世界中最好的 gem 管理工具",
      text: "Bundler 是 Ruby 世界中最好的 gem 管理工具。",
      href: "https://www.bundler.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/bundler.png",
      alt: "Bundler 是 Ruby 世界中最好的 gem 管理工具。",
    },

    {
      title: "w3schools",
      smallText: "原版国内镜像",
      text: "w3schools.com 是最受欢迎的前端技术教程网站，但是国内用户一直不能访问，并且国内的中文翻译版本十分陈旧。因此做了个镜像，希望英文好的同学直接去看原版教程吧！",
      href: "https://www.quanzhanketang.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/w3schools.png",
      alt: "w3schools 原版国内镜像",
    },

    {
      title: "Nginx",
      smallText: "中文手册",
      text: "Nginx (engine x) 是一个高性能的HTTP和反向代理服务，也是一个IMAP/POP3/SMTP服务。",
      href: "https://www.cnginx.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/nginx.png",
      alt: "Nginx 中文参考手册 - Nginx 中文文档",
    },

    {
      title: "Tippy.js",
      smallText: "中文文档",
      text: "Tippy.js 是一个基于 Popper.js 构建的、高度可定制的工具提示（tooltip）和气泡弹框（popover）库。",
      href: "https://tippyjs.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/tippyjs.png",
      alt: "Tippy.js 是一个基于 Popper.js 构建的、高度可定制的工具提示（tooltip）和气泡弹框（popover）库",
    },

    {
      title: "Popper",
      smallText: "中文文档",
      text: "Popper 作为工具提示（tooltip）和气泡弹框（popover）的定位引擎，不依赖 jQuery，并且体积仅有 3k。",
      href: "https://popperjs.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/popper.png",
      alt: "Popper 是工具提示（tooltip）和气泡弹框（popover）的定位引擎",
    },

    {
      title: "Mocha",
      smallText: " JavaScript 测试框架",
      text: "Mocha 是一个功能丰富的 JavaScript 测试框架，运行在 Node.js 和浏览器中，让异步测试变得简单有趣。",
      href: "https://mochajs.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/mocha.png",
      alt: "Mocha 中文文档",
    },

    {
      title: "Rust 程序设计语言",
      smallText: "第二版 &amp; 2018 edition） 简体中文版",
      text: "“Rust 程序设计语言”是一本介绍 Rust 的书。Rust 程序设计语言能帮助你编写更快、更可靠的软",
      href: "https://rust.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/rust.png",
      alt: "Rust 程序设计语言（第二版 &amp; 2018 edition） 简体中文版",
    },

    {
      title: "Blitz",
      smallText: "一个 React 全栈开发框架",
      text: "Blitz 是基于 Next.js 构建的 React 全栈开发框架。Blitz 的诞生受到 Ruby on Rails 框架的启发。",
      href: "https://www.blitzjs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/blitz.png",
      alt: "Blitz 是基于 Next.js 构建的 React 全栈开发框架",
    },

    {
      title: "Nest",
      smallText: "中文文档",
      text: "Nest (NestJS) 是一个用于构建高效、可扩展的 Node.js 服务器端应用程序的框架。它使用渐进式 JavaScript，内置并完全支持 TypeScript 并结合了 OOP（面向对象编程），FP（函数式编程）和 FRP（函数式响应编程）的元素。",
      href: "https://nestjs.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/nestjs.png",
      alt: "Nest (NestJS) 是 Node.js 服务器端应用程序的框架",
    },

    {
      title: "TypeORM",
      smallText: "是一个 ORM 框架",
      text: "TypeORM 是一个 ORM 框架，可以与 TypeScript 和 JavaScript (ES5,",
      href: "https://typeorm.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/typeorm.png",
      alt: "TypeORM 是一个 ORM 框架，可以与 TypeScript 和 JavaScript (ES5,",
    },

    {
      title: "Sequelize",
      smallText: "中文文档",
      text: "Sequelize 是一个基于 promise 的 Node.js ORM,",
      href: "https://www.sequelize.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/sequelize.png",
      alt: "Sequelize 中文文档",
    },

    {
      title: "Prisma",
      smallText: "数据库工具",
      text: "Prisma 是用于数据库查询、迁移和建模的工具包。",
      href: "https://prisma.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/prisma.png",
      alt: "Prisma 是用于数据库查询、迁移和建模的工具包",
    },

    {
      title: "SWR",
      smallText: "中文文档",
      text: "SWR 是用于数据获取的 React Hook 工具库。",
      href: "https://swr.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/swr.png",
      alt: "SWR 是用于数据获取的 React Hook 工具库",
    },

    {
      title: "Socket.IO",
      smallText: "中文文档",
      text: "Socket.IO 是一个可以在浏览器与服务器之间实现实时、双向、基于事件的通信的工具库。",
      href: "https://socketio.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/socketio.png",
      alt: "Socket.IO 是一个可以在浏览器与服务器之间实现实时、双向、基于事件的通信的工具库。",
    },

    {
      title: "Simple Icons",
      smallText: "Icon汇",
      text: "Simple Icons -- Icon汇。收集众多网站的 Logo，并提供高质量、不同尺寸的 png 格式图片给广大网友，所有 Icon 版权归其所属公司。",
      href: "https://www.bootcss.com/p/simple-icons/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/simpleicons.png",
      alt: "Icon汇",
    },

    {
      title: "Git Guide",
      smallText: "Git 简易指南",
      text: "Git简易指南 -- 帮助你开始使用 git 的简易指南，木有高深内容，;)。",
      href: "https://www.bootcss.com/p/git-guide/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/git-guide.png",
      alt: "Git 简易指南",
    },

    {
      title: "Swift",
      smallText: "编程语言中文教程",
      text: "中文版 Apple 官方 Swift 编程教程 《The Swift Programming Language》",
      href: "https://swift.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/swift.png",
      alt: "Swift 编程语言中文教程",
    },

    {
      title: "Prettier",
      smallText: "代码格式工具",
      text: "Prettier 是一个“有态度”的代码格式化工具。它是唯一一个全自动的“风格指南”，也就是说，Prettier 提供的配置参数非常少，几乎所有代码风格都是固定的、不可调整的，你只能接受。这样做的好处是节省了在代码风格上争吵的时间。",
      href: "https://www.prettier.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/prettier.png",
      alt: "Prettier 是一个“有态度”的代码格式化工具",
    },

    {
      title: "Puppeteer",
      smallText: " 中文文档",
      text: "Puppeteer 是一个 Node 工具库，它提供了一套高阶 API 来通过 DevTools 协议控制 Chromium 或 Chrome。",
      href: "https://puppeteer.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/puppeteer.png",
      alt: "Puppeteer 是一个 Node 工具库，它提供了一套高阶 API 来通过 DevTools 协议控制 Chromium 或 Chrome。",
    },

    {
      title: "Playwright",
      smallText: "跨浏览器的自动化操作工具库",
      text: "Playwright 是一个 Node.js 库，为 Chromium、Firefox 和 WebKit 浏览器的自动化操作提供了统一的 API。 Playwright 旨在实现持久、功能强大、可靠且快速的跨浏览器的 Web 自动化操作。",
      href: "https://Playwright.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/playwright.png",
      alt: "Playwright 是一个跨浏览器的自动化操作工具库",
    },

    {
      title: "AssemblyScript",
      smallText: "为 WebAssembly 量身定制的编程语言",
      text: "AssemblyScript 是 TypeScript 的一个严格的变体，它使用 Binaryen 将代码编译为 WebAssembly。AssemblyScript 能够生成精简的 WebAssembly 模块，并且只需通过 npm install 就能使用。",
      href: "https://assemblyscript.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/assemblyscript.png",
      alt: "AssemblyScript",
    },

    {
      title: "Vite.js",
      smallText: "新一代的前端开发工具链",
      text: "Vite.js 是新一代的前端开发工具链，旨在提升前端开发体验。Vite.js 包含两个重要的组成部分：支持原生 JavaScript 模块的开发服务器，以及基于 Rollup 的打包工具。",
      href: "https://vitejs.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/vitejs.png",
      alt: "Vite.js 是新一代的前端开发工具链",
    },

    {
      title: "Rematch",
      smallText: "一个 Redux 框架",
      text: "Rematch 是基于 Redux 构建的，并且减少了样板代码、强化了最佳实践。Rematch 不再需要 action types、action creators、switch 语句或 thunks，体积不到 1.4k。",
      href: "https://rematchjs.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/rematchjs.png",
      alt: "Rematch 是基于 Redux 构建的，并且减少了样板代码、强化了最佳实践。",
    },

    {
      title: "Remotion",
      smallText: "利用 React 等前端技术创建视频/动画",
      text: "Remotion 是一个利用 React 等前端技术创建视频/动画的工具。你可以使用 React 和 TypeScript 编写视频并通过浏览器按照时间线查看视频。",
      href: "https://remotion.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/remotion.png",
      alt: "Remotion",
    },

    {
      title: "Axios",
      smallText: "一个基于 promise 构建的网络请求库",
      text: "Axios 是一个基于 promise 构建的网络请求库，可以用于浏览器和 node.js。",
      href: "https://www.axios-http.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/axios.png",
      alt: "Axios",
    },

    {
      title: "Deno",
      smallText: "中文文档",
      text: "Deno 是一个简单、现代且安全的 JavaScript 和 TypeScript 运行时，deno 基于 V8 引擎并使用 Rust 编程语言构建。",
      href: "https://www.denojs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/deno.png",
      alt: "Deno 是一个简单、现代且安全的 JavaScript 和 TypeScript 运行时，deno 基于 V8 引擎并使用 Rust 编程语言构建。",
    },

    {
      title: "Node.js",
      smallText: "中文文档 / 手册",
      text: "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。",
      href: "https://www.nodeapp.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/nodejs.png",
      alt: "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。",
    },

    {
      title: "Hugo",
      smallText: "中文文",
      text: "Hugo 是最流行的开源静态站点生成器之一。凭借其惊人的速度和灵活性，Hugo 让搭建网站再次变得有趣。",
      href: "https://www.gohugo.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/hugo.png",
      alt: "Hugo 中文文档",
    },

    {
      title: "Mongoose",
      smallText: "中文文档",
      text: "Mongoose 是一个支持异步环境的 MongoDB 数据库对象建模工具。Mongoose 提供了对 promise 和 callback 的支持。",
      href: "https://www.mongoosejs.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/mongoose.png",
      alt: "Mongoose 是一个支持异步环境的 MongoDB 数据库对象建模工具。Mongoose 提供了对 promise 和 callback 的支持。",
    },

    {
      title: "Grunt",
      smallText: "项目构建工具",
      text: "Grunt 是基于 Node.js 的项目构建工具。它可以自动运行你所设定的任务。Grunt 拥有数量庞大的插件，几乎任何你所要做的事情都可以用 Grunt 实现。",
      href: "https://www.gruntjs.net/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/gruntjs.png",
      alt: "Grunt 是基于 Node.js 的项目构建工具",
    },

    {
      title: "Formik",
      smallText: "中文文档",
      text: "Formik 是一个开源工具库，用于为 React 和 React Native 构建表单。",
      href: "https://formik.bootcss.com/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/formik.png",
      alt: "Formik 是一个开源工具库，用于为 React 和 React Native 构建表单。",
    },

    {
      title: "JSDoc",
      smallText: "中文文档",
      text: "JSDoc 是一个为 JavaScript 源码生成 API 文档的工具，类似于 Javadoc 或 phpDocumentor。",
      href: "https://www.jsdoc.com.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/jsdoc.png",
      alt: "JSDoc 是一个为 JavaScript 源码生成 API 文档的工具，类似于 Javadoc 或 phpDocumentor。",
    },

    {
      title: "TypeDoc",
      smallText: "中文文档",
      text: "TypeDoc 用于将 TypeScript 源码中的注释转换为 HTML 格式的文档或 JSON 数据。",
      href: "https://www.typedoc.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/typedoc.png",
      alt: "TypeDoc 用于将 TypeScript 源码中的注释转换为 HTML 格式的文档或 JSON 数据。",
    },

    {
      title: "React-Bootstrap",
      smallText: "中文文档",
      text: "React-Bootstrap 是 React 版的 Bootstrap。",
      href: "https://www.react-bootstrap.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/react-bootstrap.png",
      alt: "React-Bootstrap 是 React 版的 Bootstrap。",
    },

    {
      title: "Bootstrap 官网",
      smallText: "中国镜像",
      text: "Bootstrap 官网中国镜像。旨在改善 Bootstrap 官网在国内的访问速度，为查看 Bootstrap 英文文档的开发者提供便利。",
      href: "https://www.getbootstrap.cn/",
      src: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/img/bootstrap.png",
      alt: "Bootstrap 官网中国镜像。",
    },
  ],
});

function goToPage(url) {
  window.open(url);
}
function openPDF() {
    data.isShowPDF = ! data.isShowPDF
}
function closePDF() {
    data.isShowPDF = ! data.isShowPDF
}
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  cursor: pointer;
}
:deep() .itemBox {
  margin: 10px 20px;
}

:deep().n-card {
  max-width: 252px;
}

:deep().n-card .n-card-cover img {
  display: block;
  width: 252px;
  height: 150px;
  cursor: pointer;
}

:deep().n-card > .n-card-header {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: var(--n-title-font-size);
  padding: var(--n-padding-top) var(--n-padding-left) var(--n-padding-bottom)
    var(--n-padding-left);
  font-size: 24px;
  text-decoration: none;
  padding-bottom: 10px;
}

:deep().n-card > .n-card-header .n-card-header__main {
  font-weight: var(--n-title-font-weight);
  transition: color 0.3s var(--n-bezier);
  flex: 1;
  color: #337ab7 !important;
  cursor: pointer;
}
:deep().n-card > .n-card-header .n-card-header__main:hover {
  color: #2f4f76 !important;
}

:deep().n-card > .n-card__content {
  height: 130px;
  overflow: hidden;
}

:deep().n-card > .n-card__content .small {
  padding: 0 !important;
  height: 24px;
  overflow: hidden;
  color: #777;
}

:deep().n-card > .n-card__content .bottom {
  margin: 10px 0 10px;
  height: 90px;
  overflow: hidden;
}
</style>