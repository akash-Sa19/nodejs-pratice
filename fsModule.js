// const fs = require('fs');
// fs.readFileSync

const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");
const path = require("path");

const txtPath = path.join(__dirname, "/content", "text.txt");

// readfileSync takes two argument path and charIncoding likr utf8
// console.log(readFileSync(txtPath, "utf8"));

// fs.writeFileSync(file, data, [options])
// takes three agrument path, data, and options
// flag: "a" -> points to appending of the data, Default : "w"
// encoding : Default "utf8" -> to change buffer into string
// return undefined
// writeFileSync(txtPath, "and small ones two ", { flag: "a", encoding: "utf8" });

// readfile(path, {options}, callback)
readFile(txtPath, { encoding: "utf-8" }, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

// fs.writeFile(file, data, [options], callback);
writeFile(txtPath, "a cute little cat ", { flag: "a" }, (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(res);
});

// It is unsafe to use filehandle.writeFile() multiple times on the same file without waiting for the promise to be fulfilled (or rejected).

// If one or more filehandle.write() calls are made on a file handle and then a filehandle.writeFile() call is made, the data will be written from the current position till the end of the file. It doesn't always write from the beginning of the file.
