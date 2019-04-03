This a course test project for running a cat image webpage with npm and gulp.
To load and set up the project for demo, follow these steps using the command line
1: Make sure you have gulp and related modules installed
    $ npm install -g gulp@3.9
    $ npm install gulp gulp-uglify gulp-concat gulp-nodemon
    $ npm install gulp-changed gulp-imagemin gulp-livereload
2: Install all the other dependencies
    $ npm install
3: Rebuild the dist folder
    $ gulp
4: Start up the server
    $ node server/index.js
5: Browse the website at localhost:8080/index.html