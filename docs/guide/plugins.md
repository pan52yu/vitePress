# 插件


> 本项目使用的一些插件

## unplugin-auto-import

> 支持`vue`, `vue-router`, `vue-i18n`, `@[[[[vueuse]]]]/head`, `@vueuse/core`等自动引入
>
> https://github.com/antfu/unplugin-auto-import
>
> https://juejin.cn/post/7162052830054842399

###### 效果

```tsx
// 引入前
import { ref, computed } from 'vue'
const count = ref(0)
const doubled = computed(() => count.value * 2)

//引入后
const count = ref(0)
const doubled = computed(() => count.value * 2)


// 引入前
import { useState } from 'react'
export function Counter() {
  const [count, setCount] = useState(0)
  return <div>{ count }</div>
}

//引入后
export function Counter() {
  const [count, setCount] = useState(0)
  return <div>{ count }</div>
}
```

###### 安装

```shell
pnpm i -D unplugin-auto-import
```

###### vite.config.ts配置

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/head', '@vueuse/core'],
      // auto-import.d.ts 生成的位置 (默认是在根目录)
      dts: 'src/type/auto-import.d.ts',
    })
  ]
})
```

## unplugin-vue-components

> https://github.com/antfu/unplugin-vue-components

###### 安装

```shell
pnpm i unplugin-vue-components -D
```

###### vite.config.ts配置

```ts
// vite.config.ts
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    Components({ 
      /* options */ 
      // 自动引入文件的位置
      dts: 'src/type/components.d.ts',
    }),
  ],
})
```

###### 效果

It will automatically turn this

```vue
<template>
  <div>
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
```

into this

```vue
<template>
  <div>
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
  </div>
</template>

<script>
import HelloWorld from './src/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
```

###### TS 支持

为了获得对自动导入组件的TypeScript支持，Vue 3有一个PR扩展了全局组件的接口。目前，Volar已经支持这种用法。如果您使用的是Volar，您可以如下更改配置以获得支持。

```tsx
Components({
  dts: true, // enabled by default if `typescript` is installed
  // dts: 'src/type/components.d.ts'
})
```

在`include`下将`components.d.ts`添加到`tsconfig.json`中

```json
{
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
}
```

###### 支持从UI库导入

<img src="https://huyu-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20230217150510906.png" alt="image-20230217150510906"  />

```ts
// vite.config.ts
import Components from 'unplugin-vue-components/vite'
import {
  AntDesignVueResolver,
  ElementPlusResolver,
  VantResolver,
} from 'unplugin-vue-components/resolvers'

// your plugin installation
Components({
  resolvers: [
    AntDesignVueResolver(),
    ElementPlusResolver(),
    VantResolver(),
  ],
})
```

> 可以去antfu大佬的插件链接查看更多的配置

## unplugin-vue-define-options

::: warning
在最新版的 vue3 中已经支持了 defineOptions，所以这个插件可以不用了
:::

> Vue3 中写调试代码需要name
>
> https://vue-macros.sxzz.moe/macros/define-options.html

###### 安装

```shell
pnpm install unplugin-vue-define-options -D
```

###### 配置

```ts
//vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import defineOptions from 'unplugin-vue-define-options/dist/vite';

export default defineConfig({
  plugins: [vue(), defineOptions()],
});
```

###### TS支持

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["unplugin-vue-define-options/macros-global" /* ... */]
  }
}
```

###### 使用

```vue
<script lang="ts" setup>
  defineOptions({
    name: 'YourName',
  });
</script>
```

## pinia-plugin-persist

> Pinia持久化插件
> [Getting started | Pinia Plugin Persist](https://seb-l.github.io/pinia-plugin-persist/#vue3)
> 详情看: 
> [vue3/Pinia](https://github.com/pan52yu/MyNote/blob/main/vue3/Pinia.md)