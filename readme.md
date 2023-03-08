# Elegant Counter v0.1
This JS module will start a count from 0 to given value when the element appears on screen.  

## Steps
1. import `counter.js` file into your html page.
2. execute function `createCounter(node, options)`

- `node` is the HTML node that contains a value.
- `options` is an object with the following elements. If not given to the function, it will use default values.

## Options

```
{  
	delay: delay in ms before start counting when node appears on screen (default: 0),
	speed: speed of animation (default: 100)
	speedCurve: linear, decrease or increase. Speaks for itself (defaut: decrease)
}
```