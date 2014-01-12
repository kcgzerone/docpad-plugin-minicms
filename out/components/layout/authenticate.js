// Generated by IcedCoffeeScript 1.6.3-g
(function() {


  module.exports = function() {
    doctype(5);
    return html(function() {
      head(function() {
        meta({
          charset: 'utf-8'
        });
        meta({
          'http-equiv': 'content-type',
          content: 'text/html; charset=utf-8'
        });
        meta({
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0'
        });
        title(this.title);
        link({
          rel: 'stylesheet',
          href: '/' + this.prefix + '/css/bootstrap.css'
        });
        link({
          rel: 'stylesheet',
          href: '/' + this.prefix + '/css/minicms.css'
        });
        script({
          src: '/' + this.prefix + '/js/jquery.js'
        });
        return script({
          src: '/' + this.prefix + '/js/bootstrap.js'
        });
      });
      return body('#minicms', {
        'data-prefix': this.prefix
      }, function() {
        div('#navbar.navbar.navbar-inverse.navbar-fixed-top', function() {
          return div('.navbar-inner', function() {
            return div('.container', function() {
              return ul('.nav', function() {
                li(function() {
                  return a({
                    href: '/'
                  }, function() {
                    span('.icon-home.icon-white', function() {});
                    text(' ');
                    return span('.text', function() {
                      return 'Site';
                    });
                  });
                });
                return li('.active', function() {
                  return a({
                    href: '/' + this.prefix
                  }, function() {
                    span('.icon-pencil.icon-white', function() {});
                    text(' ');
                    return span('.text', function() {
                      return 'Admin';
                    });
                  });
                });
              });
            });
          });
        });
        return div('#content.layout-' + this.layout, function() {
          return div('#authenticate-page', function() {
            return form('.form-inline', {
              action: h(this.url),
              method: 'POST'
            }, function() {
              input('.input-small', {
                type: 'text',
                placeholder: 'Login',
                name: 'login'
              }, function() {});
              text(' ');
              input('.input-small', {
                type: 'password',
                placeholder: 'Password',
                name: 'password'
              }, function() {});
              text(' ');
              return button('.btn', {
                type: 'submit'
              }, function() {
                return 'Sign in';
              });
            });
          });
        });
      });
    });
  };

}).call(this);
