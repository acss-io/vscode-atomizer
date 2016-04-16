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

> Please restart the editor for the changes to take effect. The autocomplete will work only for the files with the following extensions, `.html`, `.htm`, `.js` and `.jsx`.

## Usage

![](http://res.cloudinary.com/dw9fem4ki/image/upload/v1459669466/usage_mtx65l.gif)