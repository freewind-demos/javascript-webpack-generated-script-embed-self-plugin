JavaScript Webpack Generated Script Embed Demo
==============================================

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

2. `webpack.config.js`中，`mode`要设为`production`，使得生成的js代码为一行。否则替换后的多行代码会出错

