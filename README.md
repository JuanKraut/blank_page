## Git
```
 git clone
```
## npm
```
 npm init
 ```
## Webpack
 ```
 npm install --save-dev webpack webpack-dev-server webpack-cli
 ```
Then `touch webpack.config.js` and change entry point "main" @package.json

 ## CSS
 ```
 npm install --save-dev style-loader css-loader
 ```

 ## SASS
 ```
 npm install --save-dev sass-loader node-sass
 ```
 ## Plugins
 ```
 npm install html-webpack-plugin extract-text-webpack-plugin --save-dev
 ```
## Babel babel-plugin-transform-regenerator
```
npm install --save-dev
            babel-core
            babel-cli 
            babel-loader 
            babel-preset-env*
            babel-preset-es2015* 
            babel-polyfill
            babel-plugin-transform-regenerator**
```
`touch .babelrc` and include `{ "presets": [*], "plugins": [**] }` @package.json, and also as entry @webpack.config.js

---
# Using React.js

## React
```
npm install --save-dev babel-preset-react
```
```
npm install --save react react-dom
```
...and then set webpack's module rule for react.

---
# Using Vue.js

## Vue
```
npm install --save-dev vue-hot-reload-api vue-html-loader vue-loader vue-template-compiler
```
```
npm install --save vue
```
...and then set webpack's module rule for vue and the resolve object.