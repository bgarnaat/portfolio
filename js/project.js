'use strict';

(function(module) {
  function Project(data) {
    this.title = data.title;
    this.course = data.course;
    this.timeline = data.timeline;
    this.completed = data.completed;
    this.url = data.url;
    this.deployed = data.deployed;
    this.description = data.description;
  }
  function Courses(data) {
    this.category = data;
  };
  Courses.all = [];
  Project.all = [];

  module.Courses = Courses;
  module.Project = Project;

  Project.prototype.toHtml = function() {
    var template = Handlebars.compile($('#project_template').text());

    this.completed_days = parseInt((new Date() - new Date(this.completed))/60/60/24/1000);
    this.status = this.completed ? this.completed_days + ' days ago' : '(in progress)';

    return template(this);
  };

  Courses.prototype.toHtml = function() {
    var template = Handlebars.compile($('#project_menu_template').text());
    return template(this);
  };

  Project.allCoursesFilter = function() {
    return Project.all.map(function(project) {
      return project.course;
    })
    .filter(function(ele, idx, arr) {
      return arr.indexOf(ele) === idx;
    });
  };

  Project.loadAll = function(data_projects) {
    data_projects.sort(function(a,b) {
      return (new Date(a.completed)) - (new Date(b.completed));
    });

    data_projects.forEach(function(ele) {
      Project.all.push(new Project(ele));
    });

    Project.allCoursesFilter().forEach(function(ele) {
      Courses.all.push(new Courses(ele));
    });
  };

  Project.fetchAll = function() {
    if (localStorage.data_projects) {
      $.ajax({
        type: 'HEAD',
        url: 'data/data_projects.json',
        success: function(data, message, xhr) {
          console.log(xhr);
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || eTag !== localStorage.eTag) {
            // localStorage.clear();
            localStorage.eTag = eTag;
            Project.getData();
          } else {
            Project.loadAll(JSON.parse(localStorage.data_projects));
            index_view.initIndexPage();
          }
        }
      });
    } else {
      console.log('Creating local storage...');
      Project.getData();
    };
    console.log('Local storage ready');
  };

  Project.getData = function() {
    $.getJSON('data/data_projects.json', function(data_projects) {
      Project.loadAll(data_projects);
      localStorage.data_projects = JSON.stringify(data_projects);
      index_view.initIndexPage();
    });
  };
})(window);
