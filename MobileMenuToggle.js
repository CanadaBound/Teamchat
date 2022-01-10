const mobileMenuToggle = function(){

	const menuButton = document.querySelector('.Mobile-Menu');
	const mobileLink = document.querySelector('.Nav-Link-Mobile');
	const mobileLinkButton = document.querySelector('.Nav-Button-Mobile');
	const mobileMenu = document.querySelector('.Nav-Bar-Mobile');

	const toggleOnMenu = function(){
		if(window.getComputedStyle(mobileMenu).transform.includes('-600')){
			mobileMenu.style.animation = '0.75s ease-in 0s 1 openMenu';
			mobileMenu.style.transform = 'translateY(0px)';
		}else{
			mobileMenu.style.animation = '0.75s ease-out 0s 1 closeMenu';
			mobileMenu.style.transform = 'translateY(-600px)';
		}
	}

	menuButton.addEventListener('click', toggleOnMenu);
	mobileLink.addEventListener('click', toggleOnMenu);
	mobileLinkButton.addEventListener('click', toggleOnMenu);

}
mobileMenuToggle();