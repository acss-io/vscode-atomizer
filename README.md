## Installation

![](http://res.cloudinary.com/dw9fem4ki/image/upload/v1459669769/installation_iscrel.gif)

## Activation

The extension activates automatically when it finds the `atomizer.json` file in the root of the project directory. A typical file looks like the following,

```js
{
    "input"     : "./app/components/*.html",
    "output"    : "./app/css/atomic.css",
    
    "config"    : {
        "breakPoints": {
            "sm": "@media(min-width=750px)",
            "md": "@media(min-width=1000px)",
            "lg": "@media(min-width=1200px)"
        },
        "custom": {
            "1": "1px solid #000",
            "foo": "2px dotted #f00"
        },
        "classNames": []
    }    
}
```

Restart the editor for the changes to take effect.

## Usage

![](http://res.cloudinary.com/dw9fem4ki/image/upload/v1459669466/usage_mtx65l.gif)

## License

The MIT License (MIT)
Copyright (c) 2016 Pankaj Parashar

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.