<h1 align="center">
  react-template
</h1>
<h4 align="center">使用 React + TS 构建的基础项目模版</h4>

<p align="center">
  <img src="https://img.shields.io/github/license/sankeyangshu/react-template" alt="license" />
  <img src="https://img.shields.io/github/package-json/v/sankeyangshu/react-template" alt="version" />
  <img src="https://img.shields.io/github/languages/top/sankeyangshu/react-template" alt="languages" />
</p>

---

## 简介

🚀🚀🚀 **react-template** 使用了`React18`、`React-Router v6`、`React-Hooks`、`Vite4`、`Zustand`、`Typescript`等主流技术开发，集成 `Dark Mode`(暗黑)模式，并且持久化保存，集成了代码规范检查工具`Eslint`、`Prettier`、`Stylelint`。

## 功能

- 采用最新技术栈开发：React18、React-Router v6、React-Hooks、TypeScript、Vite4
- 采用 Vite4 作为项目开发、打包工具（配置 Gzip 打包、TSX 语法、跨域代理…）
- 整个项目集成了 TypeScript
- 使用 Zustand 做状态管理，轻量、简单、易用
- 使用 Prettier 统一格式化代码，集成 Eslint、Stylelint 代码校验规范（项目规范配置）
- 使用 husky、lint-staged、commitlint 规范提交信息（项目规范配置）

## 基础知识

提前了解和学习这些知识会对使用本项目有很大的帮助。

- [React](https://react.dev/) - 熟悉 `React` 基础语法
- [React-Router](https://reactrouter.com/en/main) - 熟悉 `React-Router`基本使用
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - 熟悉 `Zustand` 基本使用
- [Vite](https://cn.vitejs.dev/) - 熟悉 `Vite` 特性
- [TypeScript](https://www.typescriptlang.org/) - 熟悉 `TypeScript` 基本语法
- [Icones](https://icones.js.org/) - 本项目推荐图标库，当然你也可以使用其他图标库
- [Es6+](http://es6.ruanyifeng.com/) - 熟悉 `ES6` 基本语法

## 环境准备

本地环境需要安装 [pnpm7.x](https://www.pnpm.cn/)、[Node.js](http://nodejs.org/) 和 [Git](https://git-scm.com/)

- 必须使用[pnpm7.x](https://www.pnpm.cn/)，否则依赖可能安装不上。
- [Node.js](http://nodejs.org/) 版本要求`12.x`以上，这里推荐 `16.x` 及以上。

## Vscode 配套插件

如果你使用的 IDE 是[vscode](https://code.visualstudio.com/)(推荐)的话，可以安装以下工具来提高开发效率及代码格式化

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - react 开发必备
- [CSS Modules](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules) - css 模块化支持
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化

## 安装和使用

### 克隆使用

```bash
# 克隆项目
git clone https://github.com/sankeyangshu/react-template.git

# 进入项目目录
cd react-template

# 安装依赖 - 推荐使用pnpm
pnpm install

# 启动服务
pnpm dev

# 打包发布
pnpm build
```
