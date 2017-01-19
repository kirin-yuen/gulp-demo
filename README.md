# gulp demo
> A demo about web front-end with compile jade sass and bundle js with browserify, and also use live reload to reduce refresh with browser.

<br>

## Install
```
// install gulp globally if not install yet
npm install -g gulp
npm install
```
<br>


## Usage
#### default task which include tasks `jade`, `js`, `sass`, `watch`, `connect`
```
gulp
```
<br>

#### Task `jade` for complie jade to html
```
gulp jade
```
<br>

#### Task `js` for bundle all the js file with browserify
```
gulp js
```
<br>

#### Task `sass` for compile sass/scss to css
```
gulp sass
```
<br>

#### Task `watch` for watch files change then run the mapping task
```
gulp watch
```
<br>

#### Task `connect` for watch files change then run the mapping task
```
gulp connect
```
