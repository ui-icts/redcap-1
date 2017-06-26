'use strict';

const expect = require('chai').expect;
const importInfoModule = require('../../../lib/projects/importInfo.js');

const config = {
  host: 'redcap.uits.iu.edu',
  path: '/api/',
  token: process.env.REDCAP_API_KEY
};

const utils = require('../../../lib/utils')(config);

describe('projects#importInfo', function() {
  it('should be a function', function() {
    expect(importInfoModule).to.be.a('function');
  });

  const importInfo = importInfoModule(utils);

  it('should return a function', function() {
    expect(importInfo).to.be.a('function');
  });

  it('should provide an error if no values are passed', function(done) {
    importInfo({data:{}}, function(err, res) {
      expect(err).to.be.an('object').that.has.property('error');
      expect(res).to.be.null;
      done();
    });
  });

  describe('should return the number of values updated', function() {
    it('for 1 update', function(done) {
      var data = {
        surveys_enabled: 0
      }
      importInfo({data: JSON.stringify(data)}, function(err, res) {
        expect(err).to.be.null;
        expect(res).to.equal(1);
        done();
      });
    });

    it('for 2 updates', function(done) {
      var data = {
        surveys_enabled: 1,
        project_name: 'REDCap.js (Test)'
      }
      importInfo({data: JSON.stringify(data)}, function(err, res) {
        expect(err).to.be.null;
        expect(res).to.equal(2);
        done();
      });
    });
  });
});