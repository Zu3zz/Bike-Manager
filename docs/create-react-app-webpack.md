# 在 create-react-app 下配置 react 以及 antd 相关配置

## 由于 create-react-app 脚手架工具隐藏了项目的配置 所以需要先使用

> yarn run eject

让所有项目中的配置暴露出来

### 接着安装我们需要的几个包工具 antd less-loader babel-plugin-import less 用处接下来会将

因为 ant design 的样式使用 less 所以需要在 webpack 中对 less 文件做样式预处理

但是 create-react-app 中没有预先配置 less 所以需要我们手工配置 配置步骤如下

- 打开在 config 目录下的 webpack.config.js 中作如下修改

```javascript
{
test: /\.(js|mjs|jsx|ts|tsx)$/,
include: paths.appSrc,
loader: require.resolve('babel-loader'),
options: {
  customize: require.resolve(
    'babel-preset-react-app/webpack-overrides'
  ),
  plugins: [
    [
      require.resolve('babel-plugin-named-asset-import'),
      {
        loaderMap: {
          svg: {
            ReactComponent: '@svgr/webpack?-svgo,+ref![path]',
          },
        },
      },
    ],
    + [
    +   'import',
    +   {
    +     "libraryName": 'antd',
    +     style: true
    +   }
    + ]
  ],
  // ...省略
},
},
```

- 此处就是对于 babel-plugin-import 的处理 可以在引入 antd 组件的时候实现按需加载 此处可以参照官方文档描述操作

- 另外还需要在 webpack.config.js 中进行 less 文件的配置 详细配置如下 需要注意的是 需要在modules的rules下进行配置

```javascript
{
test: /\.less$/,
use: [{
  loader: 'style-loader'
}, {
  loader: 'css-loader'
}, {
  loader: require.resolve('less-loader'),
  options: {
    modules: false,
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1DA57A' // 修改主题色为绿色 vue绿色
    }
  }
}]
},
```

#### 至此我们就成功修改完毕 直接在js文件中引入antd组件即可 不需要在通过css或者less文件的引入控制样式了
