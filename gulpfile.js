const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const replace = require("gulp-replace");

const chemins = {
  sources: "./src/",
  distrib: "./distrib/"
};



gulp.task("isdef.min.js", () => {
  return gulp.src([
      "src/**.js"
    ])
    .pipe(concat("isdef.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(chemins.distrib))
});

gulp.task("isdef.js", () => {
  return gulp.src([
      "src/**.js"
    ])
    .pipe(concat("isdef.js"))
    .pipe(gulp.dest(chemins.distrib))
});

gulp.task("isdef-node.js", () => {
  return gulp.src([
      "src/**.js"
    ])
    .pipe(concat("isdef-node.js"))
    .pipe(replace("window.", "global."))
    .pipe(gulp.dest(chemins.distrib))
});



gulp.task("default", ["isdef.min.js", "isdef.js", "isdef-node.js"]);


gulp.task("all", ["default"]);