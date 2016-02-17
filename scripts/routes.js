page('/', controller_home.index);
page('/projects', controller_project.index);
page('/about', controller_about.index);
page('/projects/:category', controller_project.index_course);
page('/projects/:category/:project', controller_project.index_item);  // THIS IS NOT CURRENTLY WORKING.  NEED TROUBLESHOOTING.

page();
