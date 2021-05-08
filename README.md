# Landing Page Project

this is the submission of my landing page project
my name is Hala Magdy Hassan.

## Table of Contents
this submission consists of 3 main files 
1- index.html which contains the page structure 
2- styles.css which contains the required CSS classes to control and design the index
 file HTML elements
3. app.js is a javaScript file that contains javascript code to make our index page
 more dynamic 

1] index page description
  it consists of many sections each section has an id and nav-data attribute.

2] style.css description 
  in the project style sheet, we only added two new classes
  a)'active-section-class' this class is responsible for changing the background color
	of the active section (the section which the user is currently reading or scroll to)
  b)'activeLi' this class is responsible for changing the background color
	of the active section name in the navigation menu.


3] app.js description 
  in order to make the landing page (index.html) more dynamic and allowing the user to add
 sections freely and enables the page reader to know where exactly he is reached reading 
through the page.
we build a navigation menu using javascript dynamically

	a) we added a lister to the window on load event which calls
    		a function called  #buildNavBar
	b) in the #buildNavBar function we iterate through all page sections 
    		extract each section name and create a corresponding anchor and add it to 
    		the navigation menu (unordered list)
	c) we also added event lister to the scroll event of the window 
		so we can enhance the user experience of the user by making it
		clear which section is being viewed while scrolling through the page.
		by changing the background of the section name in the navigation
		menu and the background of the section itself.
	d) we created a function entitled 'toggleActiveState' also to improve the user experience of
		the landing page.
		as the list of sections are displayed to the user using the navigation menu
		when the user clicks on one of the sections' name is the navigation menu the page
	 	should scroll to this section, and this made this happens using the 'toggleActiveState'
		function.

		in this function, we made the page scroll to the sect
When clicking an item from the navigation menu, the link should 
scroll to the appropriate section.
