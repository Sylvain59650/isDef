<div style="display:inline">

[![build](https://travis-ci.org/Sylvain59650/isDef.png?branch=master)](https://travis-ci.org/Sylvain59650/isDef)
![version](https://img.shields.io/npm/v/isDef.svg)
![package](https://img.shields.io/github/package-json/v/Sylvain59650/isDef.svg)
![dependencies](https://img.shields.io/david/Sylvain59650/isDef.svg)
[![dependencies graph](https://img.shields.io/badge/dependencies-graph-blue.svg)](http://npm.anvaka.com/#/view/2d/isDef)
![minified](https://img.shields.io/bundlephobia/min/isDef.svg)
![linter](https://img.shields.io/badge/eslint-ok-blue.svg)
![tests](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![license](https://img.shields.io/npm/l/isDef.svg)
[![hits](http://hits.dwyl.com/Sylvain59650/isDef.svg)](http://hits.dwyl.com/Sylvain59650/isDef)
</div>

 <div class="Note" style="color:orange;font-style:italic">
 
  The lastest version of this document is available on [Github > isDef](https://github.com/Sylvain59650/isDef/blob/master/README.md)
</div>

# isDef
This function returns true if its argument is neither null nor undefined.

# Why

I'm tired of always writing the same function of a single line in all my projects so I add it in npm. This function is eslint OK.

# Integration

To integrate it into your project, different ways:
add the 3 lines of code below.

    
    window.isDef = function(obj) {
        return (obj !== null && typeof obj !== "undefined");
    }
    

or

    npm install isDef --save
then references like this

    <script>node_modules/isDef/distrib/isDef.js</script>

or 

    npm install isDef --save
then
    with gulp, you can concatenate your sources and include
    "node_modules/isDef/distrib/isDef.js"

# usage

When using isDef in your sources,
add the tag <code>/* global isDef */</code> to pass eslint validation.

# example

    /* global isDef */

    var var1 = null;
    isDef(var1); // false
    isDef(var2); // false

    var obj = {a:1};
    isDef(obj); // true
    isDef(obj.b); // false


