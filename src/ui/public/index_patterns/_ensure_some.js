define(function (require) {
  return function EnsureSomeIndexPatternsFn(Private, createNotifier, $location, kbnUrl) {
    var errors = require('ui/errors');
    var notify = createNotifier();

    return function ensureSomeIndexPatterns() {
      return function promiseHandler(patterns) {
        if (!patterns || patterns.length === 0) {
          // notify.warning(new errors.NoDefinedIndexPatterns());
          kbnUrl.redirectPath('/settings/indices');
        }

        return patterns;
      };
    };
  };
});
