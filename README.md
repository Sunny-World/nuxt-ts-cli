# ts-nuxt

> Nuxt.js TypeScript project

## Build Setup

## 对比 vue-ts-cli

### bulid

Performance ----- 20
Accessibility ----- 60
Best Practices ----- 86
SEO ----- 91

### generate

Performance ----- 63
Accessibility ----- 60
Best Practices ----- 86
SEO ----- 91

### vue-ts-cli bulid

Performance ----- 33
Accessibility ----- 51
Best Practices ----- 86
SEO ----- 75

```bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

```
├── api/                                  //- 接口
│   └── index.js
├── assets/                               //- 需要编译的静态资源，如 scss、less、stylus
│   ├── images/                           //- 图片
│   └── styles/                           //- 样式
├── components/                           //- 公用的组件
│   ├── card.vue                      //- 全局组件`card`
│   └── ...
├── data/                                 //- 静态数据
├── layouts/                              //- 布局
│   └── default.vue                       //- 默认布局
├── middleware/                           //- 中间件
├── pages/                                //- 页面
│   ├── index.vue                         //- 主页
│   └── ...
├── plugins/                              //- vue插件
│   └── iview.ts/                         //- 引用iview
├── static/                               //- 无需编译处理的静态资源
│   └── images/                           //- 这里存放了一些通过数据循环出来的图片
├── store/                                //- vuex
│   └── index.js
├── utils/                                //- 工具集
├── nuxt.config.js                        //- Nuxt.js配置文件
├── package-lock.json                     //- npm的版本锁
├── package.json
└── README.md
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
