module.exports = function(){
    require.ensure(['./module-b'], function (require) {
        let b = require('./module-b');
        b.hello();
    });
}