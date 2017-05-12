Package.describe({
    name: 'kevinchen:dlmenu',
    version: '0.0.1',
    summary: 'heytz dlmenu',
    git: 'https://github.com/chendong0120/meteor-dlmenu.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');
    api.addFiles('modernizr-custom.js', 'client');
    api.use("fortawesome:fontawesome");
    api.addFiles('component.css', 'client');
    api.addFiles('jquery.dlmenu.js', 'client');
});
