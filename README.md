<div style="display:inline">

[![build](https://travis-ci.org/Sylvain59650/isdef.png?branch=master)](https://travis-ci.org/Sylvain59650/isdef)
![version](https://img.shields.io/npm/v/isdef.svg)
![package](https://img.shields.io/github/package-json/v/Sylvain59650/isdef.svg)
![dependencies](https://img.shields.io/david/Sylvain59650/isdef.svg)
[![dependencies graph](https://img.shields.io/badge/dependencies-graph-blue.svg)](http://npm.anvaka.com/#/view/2d/isdef)
![minified](https://img.shields.io/bundlephobia/min/isdef.svg)
![linter](https://img.shields.io/badge/eslint-ok-blue.svg)
![tests](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![license](https://img.shields.io/npm/l/isdef.svg)
[![hits](http://hits.dwyl.com/Sylvain59650/isdef.svg)](http://hits.dwyl.com/Sylvain59650/isdef)
</div>

 <div class="Note" style="color:orange;font-style:italic">
 
  The lastest version of this document is available on [Github > isdef](https://github.com/Sylvain59650/isdef/blob/master/README.md)
</div>

# isdef
This function returns true if its argument is neither null nor undefined.

# Why

I'm tired of always writing the same function of a single line in all my projects so I add it in npm. This function is eslint OK.

# Integration for browser

To integrate it into your project, different ways:
add the 3 lines of code below.

    
    window.isDef = function(obj) {
        return (obj !== null && typeof obj !== "undefined");
    }
    

or

    npm install isdef --save
then references like this

    <script>node_modules/isdef/distrib/isdef.js</script>

or 

    npm install isdef --save
then
    with gulp, you can concatenate your sources and include
    "node_modules/isdef/distrib/isdef.js"

# Integration for Node.js
 
    npm install isdef --save

    const isDef=require("isdef");

    isDef("a");


# usage

When using isdef in your sources,
add the tag <code>/* global isDef */</code> to pass eslint validation.

# example

    /* global isDef */

    var var1 = null;
    isDef(var1); // false
    isDef(var2); // false

    var obj = {a:1};
    isDef(obj); // true
    isDef(obj.b); // false


