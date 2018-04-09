# hello vue

>  Vue + Typescript + Webpack 初学者入门Demo

## 运行前端

``` bash
# 安装依赖
npm install

# 启动。从浏览器访问 localhost:8080
npm run dev

# 生成生产环境的最小化包
npm run build

# 生成生产环境的最小化包并查看报告
npm run build --report
```

## 目录结构
- src是前端代码
- build是webpack构建配置文件
- dist是build后生成的可发布文件
- static是静态css/js/fonts文件，编译时会被复制到dist目录下。

## 代码解读

> 重点看一下src目录下的源代码，新项目可以在这里接着写。其他目录下的代码几乎不用动。对于Vue的基本概念还是要到官网学习。

- index.html首页框架代码。webpack打包后的css/js文件引用会插入到该文件，压缩后拷贝到dist目录。
- assets目录几乎没什么用了，有了static目录。
- components存放vue的组件。VLink.vue使用的是es6的export/import语法。也可以使用官网的es5语法。定义了组件的属性href，以及内部点击事件调用go方法实现路由跳转。结合main.ts，了解路由的实现。
- layouts存放页面布局代码。Main.vue演示了如何使用VLink.vue组件。Main.vue又作为布局组件，提供给pages目录里的页面使用。
- pages目录是功能页面的实现。前面的所有代码都是为了让pages里的页面服务的。home.vue使用了Main.vue组件，逻辑代码分离到home.ts文件中。
- home.ts使用了类型化的ts写法定义Vue组件。类的属性Message映射到传统Vue的data属性，类的方法映射到Vue的methods，事件created、mounted等自动映射。其他Vue特性通过@Component、@Prop等指令映射。更多用法参考[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)，或者[这里](https://www.cnblogs.com/crazycode2/p/7821389.html)。
