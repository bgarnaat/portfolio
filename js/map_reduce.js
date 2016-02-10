'use strict';

// this function will only ever be called from the console.
// This function chain is to be quarentined from the main .js files for a period of 3 days to ensure no harmful contamination occurs.
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

// This is the function of a Code Knight. Not as clumsy or random as a reduce;
// an elegant function for a more civilized age. For over a thousand generations,
// the Code Knights were the guardians of peace and justice in the Code Republic.
// Before the dark times... before the Empire.
Project.allCoursesFilter = function() {
  return Project.all.map(function(project) {
    return project.course;
  })
  .filter(function(ele, idx, arr) {
    return arr.indexOf(ele) === idx;
  });
};
