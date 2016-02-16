'use strict';

// THIS IS A TEST FILE.  FUNCTIONS WILL BE MIGRATED TO MAIN DOCUMENT AS NEEDED.
// filter function below will be added to prject.js to dynamically generate project menu items when time is available to set up script / functions.
Project.numWordsAll = function() {
  return Project.all.map(function(project) {
    // use regex to count words in project description.  /\b\w+ finds all words, /g is a global flag
    return project.description.match(/\b\w+/g).length;
  })
  .reduce(function(prev, curr) {
    return prev + curr;
  });
};


// THIS IS UGLY.  FILTER IS CLEANER TO ACCOMPLISH IDENTICAL TASK. SEE BELOW.
Project.allCoursesReduce = function() {
  return Project.all.map(function(project) {
    return project.course;
  })
  .reduce(function(names, name) {
    if (names.indexOf(name) === -1) {
      names.push(name);
    }
    return names;
  }, []);
};


Project.allCoursesFilter = function() {
  return Project.all.map(function(project) {
    return project.course;
  })
  .filter(function(ele, idx, arr) {
    return arr.indexOf(ele) === idx;
  });
};
