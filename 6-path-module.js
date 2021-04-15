const path = require('path')

console.log(path.sep)

// path.join: joins a sequence of path segments, and takes path.sep (separator) as a delimeter.

// path.join : joins the path to a file
const filepath = path.join('/content', 'subfolder', 'test.txt')
console.log(filepath)

// path.basename : returns the basename
const base = path.basename(filepath)
console.log(base)


// path.resolve : returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);
