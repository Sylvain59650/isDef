<div style="display:inline">

[![build](https://travis-ci.org/Sylvain59650/isdef.png?branch=master)](https://travis-ci.org/Sylvain59650/isnotnull)
![version](https://img.shields.io/npm/v/isnotnull.svg)
![package](https://img.shields.io/github/package-json/v/Sylvain59650/isnotnull.svg)
![dependencies](https://img.shields.io/david/Sylvain59650/isnotnull.svg)
[![dependencies graph](https://img.shields.io/badge/dependencies-graph-blue.svg)](http://npm.anvaka.com/#/view/2d/isnotnull)
![minified](https://img.shields.io/bundlephobia/min/isnotnull.svg)
![linter](https://img.shields.io/badge/eslint-ok-blue.svg)
![tests](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![license](https://img.shields.io/npm/l/isnotnull.svg)
[![hits](http://hits.dwyl.com/Sylvain59650/isnotnull.svg)](http://hits.dwyl.com/Sylvain59650/isnotnull)
</div>

 <div class="Note" style="color:orange;font-style:italic">
 
  The lastest version of this document is available on [Github > isnotnull](https://github.com/Sylvain59650/isnotnull/blob/master/README.md)
</div>

# isDef
This function returns true if its argument is neither null nor undefined.

# Why

I'm tired of always writing the same function of a single line in all my projects so I add it in npm. This function is eslint OK.

# Integration for browser

To integrate it into your project, different ways:
add the 3 lines of code below.

 ```html   
 <script>
    window.isDef = function(obj) {
        return (obj !== null && typeof obj !== "undefined");
    }
</script>
```  

or

    npm install isnotnull --save
then references like this
```html
    <script>node_modules/isnotnull/distrib/isdef.min.js</script>
```
or 

    npm install isnotnull --save
then
    with gulp, you can concatenate your sources and include
    "node_modules/isnotnull/distrib/isdef.min.js"

# Integration for Node.js
 
    npm install isnotnull --save

    const isDef=require("isnotnull");

    
# usage

When using isdef in your sources,
add the tag <code>/* global isDef */</code> to pass eslint validation.

# example
```html

<script>
    /* global isDef */

    var var1 = null;
    isDef(var1); // false
    isDef(var2); // false

    var obj = {a:1};
    isDef(obj); // true
    isDef(obj.b); // false
</script>
```