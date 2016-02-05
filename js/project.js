var projects = [];

function Project(data) {
  this.title = data.title;
  this.course = data.course;
  this.timeline = data.timeline;
  this.completed = data.completed;
  this.url = data.url;
  this.deployed = data.deployed;
  this.description = data.description;
}

Project.prototype.toHtml = function() {
  var template = Handlebars.compile($('#project_template').text());

  this.completed_days = parseInt((new Date() - new Date(this.completed))/60/60/24/1000);
  this.status = this.completed ? this.completed_days + ' days ago' : '(in progress)';

  return template(this);
};


data.sort(function(a,b) {
  return (new Date(a.completed)) - (new Date(b.completed));
});

data.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#project_content_area').prepend(a.toHtml());
});
