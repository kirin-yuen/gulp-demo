# gulp demo
> A demo about web front-end with compile jade sass and bundle js with browserify, and also use live reload to reduce refresh with browser.


## Install
```
// install gulp globally if not install yet
npm install -g gulp
npm install
```


## Usage
#### default task which include tasks `jade`, `js`, `sass`, `watch`, `connect`
```
gulp
```

#### Run `jade` task for complie jade to html
```
gulp jade
```

#### Run `js` task for bundle all the js file with browserify
```
gulp js
```

#### Run `sass` task for compile sass/scss to css
```
gulp sass
```

#### Run `watch` task for watch files change then run the mapping task
```
gulp watch
```

#### Run `connect` task for watch files change then run the mapping task
```
gulp connect
```
