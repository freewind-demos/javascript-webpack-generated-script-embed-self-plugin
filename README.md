JavaScript Webpack Custom Plugin Demo
=====================================

Webpack的plugin看起来还有点复杂，这里的例子只是一个最简单的Hello World。

如果想写一些更复杂的例子，还需要理解webpack的`compiler`和`compilation`。

```
npm install
npm run demo
```

将输出:

```
========= HelloWorldPlugin ==========
Hello, webpack!
-------------------------------------
```

说明我们的Plugin被成功调用。

Resources
---------

- Write a plugin: <https://webpack.docschina.org/contribute/writing-a-plugin/>