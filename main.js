// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Calculate the target element's position
            const offset = targetElement.offsetTop - 100;

            // Scroll smoothly to the target element using CSS
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start', // Adjust as needed
            });
        }
    });
}); 

// For new nav bar on smaller screens
const bar = document.querySelector('.bar');
const barSection = document.querySelector('.mobile-nav');
const close = document.querySelector('.close');
const navBar = document.querySelector('.navbar')
const navRight = document.querySelector('.nav-right');
const navButton = document.querySelector('.button-section')

if (bar) {
	bar.addEventListener('click', (event) => {
        event.preventDefault();
		navRight.classList.add('active');
        navBar.classList.add('active');
        barSection.style.display = 'none';
        navBar.style.borderBottomLeftRadius = '8px';
        navBar.style.borderBottomRightRadius = '8px';
        navBar.style.boxShadow = '0px 3px 6px rgba(0, 0, 0, 0.5)';
	})
}

if (close) {
	close.addEventListener('click', (event) => {
		event.preventDefault();
		navRight.classList.remove('active');
        navBar.classList.remove('active');
        barSection.style = '';
        navBar.style.borderBottomLeftRadius = '0px';
        navBar.style.borderBottomRightRadius = '0px';
        navBar.style.boxShadow = 'none';
	})
}

if (close) {
	document.addEventListener('keydown', (event, keyCode) => {
		if (event.keyCode === 27) {
			event.preventDefault();
			navRight.classList.remove('active');
            navBar.classList.remove('active');
            barSection.style = '';
            navBar.style.borderBottomLeftRadius = '0px';
            navBar.style.borderBottomRightRadius = '0px';
            navBar.style.boxShadow = 'none';
		}
	})
}

if (close) {
	close.addEventListener('keydown', (event, keyCode) => {
		if (event.keyCode === 27) {
			event.preventDefault();
			navRight.classList.remove('active');
            navBar.classList.remove('active');
            barSection.style = '';
            navBar.style.borderBottomLeftRadius = '0px';
            navBar.style.borderBottomRightRadius = '0px';
            navBar.style.boxShadow = 'none';
		}
	})
}

// // Initialize the previous window width variable
// var prevWindowWidth = window.innerWidth;

// function updateElementClass() {
//   // Get the current window width
//   var windowWidth = window.innerWidth;

//   // Check if the window width is 1150 pixels or more
//   // and the previous window width was less than 1150 pixels
//   if (windowWidth >= 1150 && prevWindowWidth < 1150) {
//     // Remove the 'active' class from the element's class list
//     navMenu.style.display = 'none';
//   }

//   // Update the previous window width
//   prevWindowWidth = windowWidth;
// }

// // Call the function initially to handle the initial state
// updateElementClass();

// // Add an event listener to handle window resize
// window.addEventListener('resize', updateElementClass);
