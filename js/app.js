/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active






function addEventToAnchor(navBarLiAnchor,section){
	navBarLiAnchor.addEventListener("click", e =>{
    		e.preventDefault();
    		section.scrollIntoView({behavior: "smooth", block: "center" });
	});
}




window.addEventListener('load', buildNavBar);


function buildNavBar(){
	let navBarUl = document.querySelector("#navbar__list");
	let sections = document.querySelectorAll('section');
	const fragment = document.createDocumentFragment();
	for(let section of sections)
	{
		let navData = section.getAttribute("data-nav");
		const navBarLi = document.createElement('li');
		
		let navBarLiAnchor = document.createElement("a");
		navBarLiAnchor.classList.add("menu__link");
		navBarLiAnchor.textContent = navData;
		navBarLiAnchor.href = `#${navData}`;
		navBarLiAnchor.setAttribute('id',`anc${section['id']}`);
		addEventToAnchor(navBarLiAnchor,section);
		navBarLi.appendChild(navBarLiAnchor);
		fragment.appendChild(navBarLi);

	}
	let navBarLiIcon = document.createElement('li');
		
	let navBarLiAnchorIcon = document.createElement("a");
	navBarLiAnchorIcon.classList.add("icon");
	navBarLiAnchorIcon.href = `javascript:void(0);`;
	//navBarLiAnchorIcon.addEventListener('onclick' ,flexNavbar());
	navBarLiIcon.appendChild(navBarLiAnchorIcon);
	fragment.appendChild(navBarLiIcon);
	navBarUl.appendChild(fragment);
}

function toggleActiveState(){
	//alert('window.pageXOffset '+ window.pageYOffset);//+window.pageXOffset+'\nwindow.pageYOffset' + window.pageYOffset);
	const sections = document.querySelectorAll('section');
	
	for(let section of sections){
		//alert(`#anc${section['id']}`);
		let navBarElem = document.querySelector(`#anc${section['id']}`);


		let sectionHeight = section.offsetTop + section.offsetHeight;
		if(window.pageYOffset >= (section.offsetTop-170) && window.pageYOffset< (sectionHeight- 160)){
			section.classList.add("active-section-class");
			navBarElem.classList.add("activeLi");
			//navBarElem.style.backgroundColor='green';
		}
		else{
			//alert(navBarElem);
			section.classList.remove("active-section-class");
			navBarElem.classList.add("menu__link");
			navBarElem.classList.remove("activeLi");
			//navBarElem.style.backgroundColor='yellow';
		}
	}
}
window.addEventListener('scroll',toggleActiveState);