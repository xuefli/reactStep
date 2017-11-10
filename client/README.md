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
