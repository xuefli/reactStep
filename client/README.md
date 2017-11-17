
# 第十五课
## 引入dynamic import
## 使用 extract-text-webpack-plugin 代替 webpack.optimize.UglifyJsPlugin，解决dynamic import uglify时编译问题

```sh
extract-text-webpack-plugin
```
***

# 第十四课
## 对于webpack.config.*.js统一放在config目
## 解决components.js的代码在porlet*.js中重复，增加另外一个CommonsChunkPlugin解决
## 调整公用的css到assets/css目录
## 调整首页到index目录

```
对于components目录，需要在里面增加index.js，import才行。对于src目录中未用到的，代码编译后是不会带入的
```

***

# 第十三课
## 验证多级目录的处理，如果entry没有指定，那么entry下的子目录会合并到entry的js里面

***

# 第十二课
## 优化编译速度，优化production的输出物的尺寸

```sh
yarn add --dev babel-plugin-transform-runtime

```
***

# 第十一课
## 解决html中静态图片引用，不显示的问题

```sh
yarn add --dev copy-webpack-plugin

```
***

# 第十课
## 分离development和production的webpack配置

***

# 第九课
## css样式不再写入html,而是生成css文件link
## 遗留问题是会合并不同的css到同一个文件

```sh
yarn add --dev extract-text-webpack-plugin

```
***

# 第八课
## 支持按照目录输出各个子目录的页面和js
1. 公共的组件分离
2. 第三方的组件分离
3. 各个子系统的组件分离


```sh
yarn add --dev clean-webpack-plugin

```
***

# 第七课
## 支持多bundle输出

```sh
yarn add --dev html-webpack-plugin

```
***

# 第六课
## 支持css、图片资源加载

```sh
yarn add --dev file-loader style-loader css-loader

```
***

# 第五课
## 支持tsx

```sh
yarn global remove typings
typings remove react react-dom
yarn remove typings

```
***

# 第四课
## 支持vsCode和typescript

```sh
yarn global add typings typescript
yarn add --dev ts-loader

```

增加vs code 智能代码提醒
```sh
typings install react
typings install react-dom
```
***

# 第三课
## 支持热更新

```sh
yarn add --dev webpack-dev-server
```

运行命令

```sh
yarn run start
```

***

# 第二课
## 安装es6、jsx依赖包、开发依赖包
```sh
yarn add babel-loader
yarn add --dev babel-register jsxobj babel-preset-es2015
```

## 使用es6特性和jsx特性
```js
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

```
***

# 第一课
## 安装环境nodejs、yarn、依赖包、开发依赖包
```sh
install yarn

mkdir client
cd client

yarn init
yarn add react react-dom lodash babel-preset-env babel-preset-react jsx 
yarn add --dev webpack

mkdir dist src
touch dist/index.html
touch src/index.js
ouch webpack.config.js

```

## 使用React.createElement生成h5的节点
```js

React.createElement('p', null, 'hello the world')

```

## 编译，运行

```sh
yarn run build

```

##运行
用浏览器打开/dist/index.html
