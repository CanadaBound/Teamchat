// Slider
const slider = function () {
	const wrapper = document.querySelector('.Review-Card-Wrapper');
	const slides = document.querySelectorAll('.Review-Card');
	const btnLeft = document.querySelector('.Left-Arrow-Button');
	const btnRight = document.querySelector('.Right-Arrow-Button');

  
	let curSlide = 0;
	const maxSlide = slides.length;

	const pageAccessedByReload = (
		  window.performance
			.getEntriesByType('navigation')
			.map((nav) => nav.type)
			.includes('reload')
	  );
  
	const goToSlide = function (slide, firstLoad) {
	
	if(slide !== 0 && slide !== maxSlide-1){
		slides[slide-1].style.filter = 'brightness(60%)';
		slides[slide+1].style.filter = 'brightness(60%)';
		slides[slide].style.filter = 'brightness(100%)';

	}else if(slide === 0){
		slides[maxSlide-1].style.filter = 'brightness(60%)';
		slides[slide+1].style.filter = 'brightness(60%)';
		slides[slide].style.filter = 'brightness(100%)';

	}else{
		slides[slide-1].style.filter = 'brightness(60%)';
		slides[0].style.filter = 'brightness(60%)';
		slides[slide].style.filter = 'brightness(100%)';

	}
	if(!firstLoad && !pageAccessedByReload){
		slides[slide].scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'});
	}else{
		wrapper.scrollLeft = 0;
	}
	
	
	};
  
	// Next slide
	const nextSlide = function () {
	  if (curSlide === maxSlide - 1) {
		curSlide = 0;
	  } else {
		curSlide++;
	  }
  
	  goToSlide(curSlide, false);
	};
  
	const prevSlide = function () {
	  if (curSlide === 0) {
		curSlide = maxSlide - 1;
	  } else {
		curSlide--;
	  }
	  goToSlide(curSlide, false);
	};
  
	const init = function () {
	  goToSlide(0, true);
	};

	init();
	
	// Event handlers
	btnRight.addEventListener('click', nextSlide);
	btnLeft.addEventListener('click', prevSlide);
  
	document.addEventListener('keydown', function (e) {
	  if (e.key === 'ArrowLeft') prevSlide();
	  e.key === 'ArrowRight' && nextSlide();
	});
  };
slider();