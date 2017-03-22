* allowJsしてjsファイルのReactコンポーネントをimportしようとしたらこんなのが出た
```
ERROR in ./src/components/HelloJs.js
Module parse failed: /Users/200147/practice/ts-handson/node_modules/source-map-loader/index.js!/Users/200147/practice/ts-handson/src/comp
onents/HelloJs.js Unexpected token (3:35)
You may need an appropriate loader to handle this file type.
```
* tsx?$ => jsはtsコンパイルでできるが、js(ES6) => js(ES5)はbabel噛ませる必要がある？

* 【解決】↑tsコンパイルしたものをbabelにかませたらコンパイルできた。jsファイルのimportも成功
