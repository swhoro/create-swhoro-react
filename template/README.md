# create-swhoro-react

### 创建自定义的React项目

## 技术栈

+ pnpm
+ TypeScript
+ ESLint
+ React
+ Vite

## Vite插件

+ [vite-plugin-virtual-html](https://github.com/windsonR/vite-plugin-virtual-html) 用于多页面、HTML模板
+ [vite-plugin-externals](https://github.com/crcong/vite-plugin-externals) 用于引入cdn外部库

## 特性

+ pnpm作为包管理软件
+ TypeScript作为开发语言
+ ESLint作为代码检查工具
+ Vite作为打包工具
+ React框架
+ 支持build时引入cdn外部库
+ 支持多页面
+ 支持ejs渲染HTML页面

## 配置

### 多页面配置：

修改 ViteConfigDate.js 的 pages 常量：

```js
const pages = {
  index: {
    template: '/public/index.html',
    data: {
      script: '<script type="module" src="/src/index.tsx"></script>',
      cdn: []
    },
    render
  }
};
```

key为最终生成的HTML文件名，data.script为入口脚本文件

### cdn配置：

修改 ViteConfigDate.js 的 cdn 常量：

```js
const cdn = [
  '<script src="https://cdn.bootcdn.net/ajax/libs/react/18.1.0/umd/react.production.min.js"></script>',
  '<script src="https://cdn.bootcdn.net/ajax/libs/react-dom/18.1.0/umd/react-dom.production.min.js"></script>'
];
```

修改vite.config.js viteExternalsPlugin配置：

```js
viteExternalsPlugin({
  react: 'React',
  'react-dom/client': 'ReactDOM'
})
```

详细信息可参考：[vite-plugin-externals](https://github.com/crcong/vite-plugin-externals)
