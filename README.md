项目需要用到 `metaweather` 提供的 api，直接请求存在跨域问题。

因为服务端没有跨域限制，所以我决定用 express 搭个服务器处理请求问题。

要想在 node 中使用 esm 的语法，需要在 pakage.json 添加`"type": "module"`
