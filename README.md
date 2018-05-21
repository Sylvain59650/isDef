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


