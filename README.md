# pdftk-formfill

Form fill wrapper around PDFtk's implementation using streams

## Installation

```bash
npm install pdftk-formfill
```

## Usage

```js
var fs = require('fs');
var pdftkFormFill = require('PDFtkFormFill');

var outputPath = './output.pdf';
var sampleData = {
  ...
};

pdftkFormFill('./sample.pdf', sampleData, function(err, out, code){
  fs.writeFile(outputPath, out, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
});
```

## License

Copyright (c) 2015 Hady Osman   
Licensed under the [MIT][license] license.

[license]: https://github.com/hadynz/docusign-api/blob/master/README.md
[stub]: https://github.com/hadynz/docusign-api/blob/master/config.dev.json.stub
