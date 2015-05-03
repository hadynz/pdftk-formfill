'use strict';

var fdf = require('fdf');
var spawn = require('child_process').spawn;

module.exports = function generatePDF(pdfFormPath, jsonData, callback) {
  var fdfData = fdf.generate(jsonData);
  var child = spawn('pdftk', [pdfFormPath, 'fill_form', '-', 'output', '-', 'flatten']);
  var err = '';
  var out = '';

  // Pipe FDF generated data to process' stdin
  child.stdin.write(fdfData);
  child.stdin.end();

  child.on('err', function (err) {
    callback(err);
  });

  child.stderr.on('data', function (data) {
    err += data;
  });

  child.stdout.on('data', function(data) {
    out += data;
  });

  child.on('exit', function (code) {
    callback(err, code, out);
  });

  return child;
};
