'use strict';

exports.routes = function(app, express){
    app.use('/', express.static(process.cwd() + '/public'));
    app.use('/jquery', express.static(process.cwd() + '/node_modules/jquery'));
    app.use('/bootstrap', express.static(process.cwd() + '/node_modules/bootstrap'));
    app.use('/angular', express.static(process.cwd() + '/node_modules/angular'));
    app.use('/angular-ui-router', express.static(process.cwd() + '/node_modules/angular-ui-router'));
    app.use('/angular-animate', express.static(process.cwd() + '/node_modules/angular-animate'));
    app.use('/angular-aria', express.static(process.cwd() + '/node_modules/angular-aria'));
    app.use('/angular-material', express.static(process.cwd() + '/node_modules/angular-material'));
    app.use('/oclazyload', express.static(process.cwd() + '/node_modules/oclazyload'));
}
