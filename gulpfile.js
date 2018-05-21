const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const replace = require("gulp-replace");

const chemins = {
  sources: "./src/",
  distrib: "./distrib/"
};



gulp.task("isDef.min.js", () => {
  return gulp.src([
      "src/**.js"
    ])
    .pipe(concat("isDef.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(chemins.distrib))
});

gulp.task("isDef.js", () => {
  return gulp.src([
      "src/**.js"
    ])
    .pipe(concat("isDef.js"))
    .pipe(gulp.dest(chemins.distrib))
});

gulp.task("isDef-node.js", () => {
  return gulp.src([
      "src/**.js"
    ])
    .pipe(concat("isDef-node.js"))
    .pipe(replace("window.", "global."))
    .pipe(gulp.dest(chemins.distrib))
});



gulp.task("default", ["isDef.min.js", "isDef.js", "isDef-node.js"]);


gulp.task("all", ["default"]);