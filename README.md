JavaScript Webpack Generated Script Embed Self Demo
===================================================

如何写一个插件，把由webpack生成的bundle代码，替换到其内部的指定位置，以实现某些特殊效果，如：

- 需要把生成的代码inject到另一个frame中执行

```
npm install
npm run demo
```

将生成`bundle.js`。打开后与`entry.js`对比，可以看到原本`---generatedBundleScript---`的位置，被替换过一次。

注意：

1. 由于替换时有很多复杂的情况，为了保险，在代码中应该简单的把替换文本以字符串形式赋给一个变量再使用，比如：

    ```
    const generated = '---generatedBundleScript---'
    ```

2. 由于webpack生成的bundle代码可能有多行以及各种字符串，替换之后很可能出现语法错误。
为了避免这种情况， 在替换前会先将其转码为base64，替换之后，会在外面包一个浏览器都支持的`atob`(将base64转为正常字符串），
这样就可以避免语法错误。

主要代码在`src/generated-script-embed-self-plugin.js`中，可直接阅读。

