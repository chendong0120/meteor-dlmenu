Package.describe({
    name: 'kevinchen:dlmenu',
    version: '0.0.2',
    // Brief, one-line summary of the package.
    summary: 'heytz dlmenu',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/chendong0120/meteor-dlmenu.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');
    api.addFiles('modernizr-custom.js', 'client');
    api.addFiles('component.css', 'client');
    api.addAssets([
        'fonts/icomoon.dev.svg',
        'fonts/icomoon.svg',
        'fonts/icomoon.ttf',
        'fonts/icomoon.woff',
        'fonts/icomoon.eot'], ["client"]);
    api.addFiles('jquery.dlmenu.js', 'client');
});
