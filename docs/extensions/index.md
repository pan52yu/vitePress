---
title: extensions
---

# extensions

## 目录

**Input**

```
[[toc]]
```



**Output**

[[toc]]

## Links  链接

#### 内部链接
##### test
[Plugin](../plugin/videoPlayer.md)

```markdown
[Plugin](../plugin/videoPlayer.md)
```

#### 外部链接

+ [VitePress](https://vitepress.vuejs.org/)

```markdown
+ [VitePress](https://vitepress.vuejs.org/)
```



## GitHub 风格的表格

**Input**

```
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

**Output**


| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## Emoji 🎉

**Input**

```
:tada: :100:
```

**Output**

:tada: :100:



[所有表情](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json) 



## 自定义容器



**Input**

```
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```



**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::



## 代码块某一行突出显示

**Input 输入**



````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output 输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```



##### 除了单行之外，还可以指定多个单行、范围或两者：

> - 行范围：例如 `{5-8}` 、 `{3-10}` 、 `{10-17}`
>- 多个单行：例如 `{4,7,9}`
> - 行范围和单行：例如 `{4,7-13,16,23-27,40}`



##### 或者，可以使用 `// [!code hl]` 注释直接在行中突出显示。

**Input**

````
```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code  hl]
    }
  }
}
```
````
**Output**

```js

export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code hl]
    }
  }
}
```



## 代码组

**Input**

````
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::
````



**Output**

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::





## 代码块聚焦

> 语法：`// [!code focus]`

**Input**

>  请注意， `!code` 之后只需要一个空格，这里有两个空格以防止处理。

````
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code  focus]
    }
  }
}
```
````

**Output**

```js
export default {
  data() {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```



## 代码块差异

> 语法：`// [!code  --]` `// [!code  ++]`

**Input**

````
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code  --]
      msg: 'Added' // [!code  ++]
    }
  }
}
```
````



**Output**

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```



## 代码块错误和警告

> 语法：`// [!code error]` `// [!code warning]`

````
```js
export default {
  data () {
    return {
      msg: 'Error', // [!code  error]
      msg: 'Warning' // [!code  warning]
    }
  }
}
```
````



```js
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```



