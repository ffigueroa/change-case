Package.describe({
  name: 'ffigueroa:change-case',
  summary: 'Convert strings between camelCase, PascalCase, Title Case, snake_case, etc.',
  version: '2.3.1',
  git: 'https://github.com/ffigueroa/change-case'
});

Npm.depends({
  "change-case": "2.3.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles('ffigueroa:change-case.js', ['server']);
  api.export(['changeCase'], ['server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ffigueroa:change-case');
  api.addFiles('ffigueroa:change-case-tests.js');
});
