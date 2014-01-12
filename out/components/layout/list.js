// Generated by IcedCoffeeScript 1.6.3-g
(function() {


  module.exports = function() {
    var _ref;
    h2(function() {
      return this.model.name[1];
    });
    if ((_ref = this.model.list.filters) != null ? _ref.length : void 0) {
      div('.navbar.navbar-static', function() {
        return div('.navbar-inner', function() {
          return div('.container', function() {
            return ul('.nav', function() {
              var data, filter, i, name, _i, _len, _ref1, _results;
              _ref1 = this.model.list.filters;
              _results = [];
              for (i = _i = 0, _len = _ref1.length; _i < _len; i = ++_i) {
                filter = _ref1[i];
                data = this.filterData[i];
                name = this.slugify(filter.name);
                _results.push(li('.dropdown', function() {
                  a('.dropdown-toggle', {
                    'data-toggle': 'dropdown',
                    href: '#'
                  }, function() {
                    var item, _j, _len1;
                    if (this.filters[name] != null) {
                      for (_j = 0, _len1 = data.length; _j < _len1; _j++) {
                        item = data[_j];
                        if (this.slugify(item) === this.filters[name]) {
                          text(filter.name + ': ');
                          strong(function() {
                            return item;
                          });
                          break;
                        }
                      }
                    } else {
                      text(h(filter.name));
                    }
                    text(' ');
                    return b('.caret', function() {});
                  });
                  return ul('.dropdown-menu', {
                    role: 'menu'
                  }, function() {
                    var item, _j, _len1, _results1;
                    li((this.filters[name] != null ? '' : '.active'), {
                      role: 'presentation'
                    }, function() {
                      return a({
                        href: '/' + this.config.prefix.url + '/' + this.slugify(this.model.name[0]) + '/list' + this.makeFilter(filter.name, null)
                      }, function() {
                        return 'Any';
                      });
                    });
                    li('.divider', {
                      role: 'presentation'
                    }, function() {});
                    _results1 = [];
                    for (_j = 0, _len1 = data.length; _j < _len1; _j++) {
                      item = data[_j];
                      _results1.push(li((this.slugify(item) === this.filters[name] ? '.active' : ''), {
                        role: 'presentation'
                      }, function() {
                        return a({
                          href: '/' + this.config.prefix.url + '/' + this.slugify(this.model.name[0]) + '/list' + this.makeFilter(filter.name, item)
                        }, function() {
                          return h(item);
                        });
                      }));
                    }
                    return _results1;
                  });
                }));
              }
              return _results;
            });
          });
        });
      });
    }
    if (this.model.form != null) {
      div('.well', function() {
        return a('.btn.btn-primary.btn-small', {
          href: '/' + this.config.prefix.url + '/' + this.slugify(this.model.name[0]) + '/edit'
        }, function() {
          span('.icon-plus.icon-white', function() {});
          return text(' Create ' + h(this.model.name[0].charAt(0).toLowerCase() + this.model.name[0].substring(1)));
        });
      });
    }
    return table('#list.list-' + this.slugify(this.model.name[1]) + '.table.table-hover', function() {
      thead(function() {
        return tr(function() {
          var field, _i, _len, _ref1;
          _ref1 = this.model.list.fields;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            field = _ref1[_i];
            td('.item-' + this.slugify(field.name), function() {
              return h(field.name);
            });
          }
          return td(function() {});
        });
      });
      return tbody(function() {
        var i, item, list, _i, _ref1, _results;
        list = this.data;
        if (list.length) {
          _results = [];
          for (i = _i = _ref1 = list.length - 1; _ref1 <= 0 ? _i <= 0 : _i >= 0; i = _ref1 <= 0 ? ++_i : --_i) {
            item = list[i];
            _results.push(tr(function() {
              var field, _j, _len, _ref2;
              _ref2 = this.model.list.fields;
              for (_j = 0, _len = _ref2.length; _j < _len; _j++) {
                field = _ref2[_j];
                td('.field-' + this.slugify(field.name), function() {
                  var _ref3, _ref4;
                  if (field.value != null) {
                    return h((_ref3 = field.value.apply(item)) != null ? _ref3 : '');
                  } else if (field.html != null) {
                    return text((_ref4 = field.html.apply(item)) != null ? _ref4 : '');
                  }
                });
              }
              return td(function() {
                if (item[this.config.prefix.meta] != null) {
                  a('.btn.btn-primary.btn-small', {
                    href: '/' + this.config.prefix.url + '/' + this.slugify(this.model.name[0]) + '/edit?url=' + item.url
                  }, function() {
                    span('.icon-pencil.icon-white', function() {});
                    return text(' Edit');
                  });
                  return text(' ');
                }
              });
            }));
          }
          return _results;
        }
      });
    });
  };

}).call(this);
