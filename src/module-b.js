
// more about style loading https://webpack.js.org/loaders/style-loader/
var y = require('./styles.css');

function moduleB(){

}

moduleB.hello = function () {
    //alert('hello');
    let x = document.getElementById('hello');
    x.innerHTML = 'Hello World!';
    x.style.fontSize = '100px';

    require.ensure('./angular.png', function(require){

        let img = require('./angular.png');
        console.log(img);
        document.getElementById('img1').src = img;
    })
}


module.exports = moduleB;