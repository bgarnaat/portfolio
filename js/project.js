var projects = [];

function Project(data) {
  this.title = data.title;
  this.course = data.course;
  this.timeline = data.timeline;
  this.completed = data.completed;
  this.url = data.url;
  this.description = data.description;
}

Project.prototype.toHtml = function() {
  var $new_project = $('article.template').clone();

  $new_project.find('.title h2').text(this.title);
  $new_project.find('.course p').text(this.course);
  $new_project.find('.timeline p').text();
  // Display the date as a relative number of "days ago":
  $new_project.find('time').html(parseInt((new Date() - new Date(this.completed))/60/60/24/1000) + ' days ago');
  $new_project.find('.link a').attr('href', this.url);
  $new_project.find('.link a').text(this.url);
  $new_project.find('.content_description p').text(this.description);

  $new_project.append('<hr>');

  $new_project.removeClass('template');
  $new_project.addClass('content_card');

  return $new_project;
};


data.sort(function(a,b) {
  return (new Date(b.completed)) - (new Date(a.completed));
});

data.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#content_area').prepend(a.toHtml());
});
