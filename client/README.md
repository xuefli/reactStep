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
