'use strict';

const expect = require ('chai').expect;
const config = require ('../../../config.js');
const utils = require ('../../../../lib/utils') (config);

const reportModule = require ('../../../../lib/reports');

describe ('reports', function () {
  it ('should be a function', function () {
    expect (reportModule).to.be.a ('function');
  });

  var reports = reportModule (utils);

  var keys = [ 'export' ];

  it ('should return an object with keys to methods', function () {
    expect (reports).to.be.an ('object').that.has.keys (keys);
  });

  describe ('reports#exportReports', function () {
    it ('should be a function', function () {
      expect (reports.export).to.be.a ('function');
    });
  });
});
