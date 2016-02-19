page('/', controller_home.index);
page('/projects', controller_project.index);
page('/about', controller_about.index);
page('/projects/:category', controller_project.index_course);
page('/projects/:category/:project', controller_project.index_item);  // THIS IS SORT OF NOT CURRENTLY WORKING.  NEED TROUBLESHOOTING.
// line 5 bugs:  any projects with spaces in the title will not be loaded.  link replaces space with %20 while id containes space... 2 ids...   :/
// possible solution:  use regex or slice title along delimiter (space) and concat for href of a and for id.
// Name all projects with underscores and replace for actual title possibly?

page();
