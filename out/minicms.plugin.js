// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var YAML, applyContext, cc, deepCopy, exec, express, fs, gm, sessionBridge, shellEscape, slugify, uuid,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };



  slugify = require('./utils/slugify');

  cc = require('coffeecup');

  uuid = require('node-uuid');

  gm = require('gm');

  fs = require('fs');

  exec = require('child_process').exec;

  shellEscape = require('./utils/shellEscape');

  deepCopy = require('owl-deepcopy').deepCopy;

  YAML = require('yamljs');

  applyContext = require('./utils/applyContext');

  sessionBridge = require('./utils/sessionBridge');

  express = require('express');

  module.exports = function(BasePlugin) {
    var MinicmsPlugin, _ref;
    return MinicmsPlugin = (function(_super) {
      __extends(MinicmsPlugin, _super);

      function MinicmsPlugin() {
        _ref = MinicmsPlugin.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MinicmsPlugin.prototype.name = 'minicms';

      MinicmsPlugin.prototype.config = {
        prefix: {
          url: 'cms',
          meta: 'cms'
        },
        validate: require('./utils/validate'),
        sanitize: require('./utils/sanitize')
      };

      MinicmsPlugin.prototype.docpadReady = function(opts) {
        return this.docpad.action('watch', {}, function(err) {
          var _ref1;
          if (err) {
            process.stderr.write(("" + ((_ref1 = err.message) != null ? _ref1 : err)).trim() + "\n");
          }
          return this.docpad.log("Force watching file for minicms.");
        });
      };

      MinicmsPlugin.prototype.serverExtend = function(opts) {
        var app, config, docpad;
        app = opts.server;
        console.log("SERVER = ");
        console.log(app);
        docpad = this.docpad;
        config = this.config;
        exec("rm -rf " + (shellEscape(docpad.config.srcPath + '/files/tmp')), function() {});
        app.use('/' + this.config.prefix.url, express["static"](__dirname + '/static'));
        if (this.config.secret == null) {
          throw "Secret is required for cookie sessions (minicms)";
        }
        app.use(express.cookieParser());
        app.use(express.cookieSession({
          secret: this.config.secret
        }));
        app.get('/' + this.config.prefix.url + '/logout', require('./routes/logout').bind(this));
        app.get('/' + this.config.prefix.url + '/login', require('./routes/login').bind(this));
        app.post('/' + this.config.prefix.url + '/login', require('./routes/loginSubmit').bind(this));
        app.get('/' + this.config.prefix.url, require('./routes/root').bind(this));
        app.get('/' + this.config.prefix.url + '/:content/list', require('./routes/list').bind(this));
        app.get('/' + this.config.prefix.url + '/:content/edit', require('./routes/edit').bind(this));
        app.post('/' + this.config.prefix.url + '/:content/edit', require('./routes/edit').bind(this));
        app.post('/' + this.config.prefix.url + '/generate', require('./routes/generate').bind(this));
        return app.post('/' + this.config.prefix.url + '/:content/:field/upload', require('./routes/upload').bind(this));
      };

      return MinicmsPlugin;

    })(BasePlugin);
  };

}).call(this);
