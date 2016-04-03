'use strict';
var vscode_1 = require('vscode');
var exec = require('child_process').exec;
var fs = require('fs');

function activate(context) {
    
    console.log('activated');
    var config = vscode_1.workspace.getConfiguration('files');
    var controller = new FinalNewLineController(config);
    context.subscriptions.push(controller);
}

exports.activate = activate;
var FinalNewLineController = (function () {
    function FinalNewLineController(config) {
        this._config = config;
        var subscriptions = [];
        vscode_1.workspace.onDidSaveTextDocument(this._onDocumentSaved, this, subscriptions);
        
        this._disposable = vscode_1.Disposable.from.apply(vscode_1.Disposable, subscriptions);
    }
    FinalNewLineController.prototype.dispose = function () {
        this._disposable.dispose();
    };
    FinalNewLineController.prototype._onDocumentSaved = function () {
        
        var root = vscode_1.workspace.rootPath;
        var json = require(root+'/atomizer.json');
        
        var cmd = __dirname + '/node_modules/atomizer/bin/atomizer -c ' + root + '/.atomizer-config.js' + ' -o ' + root + '/' + json.output + ' ' + root + '/' + json.input;
    
        fs.writeFileSync(root + '/.atomizer-config.js', 'module.exports = ' + JSON.stringify(json.config));
    
    
    
            exec(cmd, function(error, stdout, stderr) {
                
                fs.unlink(root + '/.atomizer-config.js');
            });
    
        
    };
    return FinalNewLineController;
}());