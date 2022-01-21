const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
};

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
};

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

const modalViews = document.querySelectorAll('.help__modal');
const modalBtns = document.querySelectorAll('.help__button');
const modalCloses = document.querySelectorAll('.help__modal-close');

let modal = function(modalClick) {
	modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i) => {
	modalBtn.addEventListener('click', () => {
		modal(i);
	});
});

modalCloses.forEach(modalClose => {
	modalClose.addEventListener('click', () => {
		modalViews.forEach(modalView => {
			modalView.classList.remove('active-modal');
		});
	});
});

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        };
    });
};

window.addEventListener('scroll', scrollActive);

function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) {
		nav.classList.add('scroll-header');
    } else {
		nav.classList.remove('scroll-header');
	};
};

window.addEventListener('scroll', scrollHeader);

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) {
		scrollUp.classList.add('show-scroll');
    } else {
		scrollUp.classList.remove('show-scroll');
    };
};

window.addEventListener('scroll', scrollUp);

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
};

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

// Regex Search
$(document).ready(function () {
	var wordsArray = wordsData;
	
	$("[name='theme']").keyup(function () {
		var words = $(this).val().replace(/_/g, '.');
		
		console.log(words);

		try {
			var searchWord = words.toLowerCase()
			var regex = new RegExp(searchWord);

			$("#result").html('');

			for (var index = 0; index < wordsArray.length; index++) {
				var value = wordsArray[index];
				var eachWord = value.toLowerCase();

				if (regex.test(eachWord)) {
					var i;

					if (searchWord.length != eachWord.length) {
						continue;
					};

					for (i = 0; i < searchWord.length; i++) {
						if (searchWord[i] == '.') {
							continue;
						};

						if (searchWord[i] != eachWord[i]) {
							break;
						};
					};

					if (i == searchWord.length) {
						$("#result").append('<p title="Click to copy to clipboard">' + '<a class="a_word" href="#form">' + value + '</a>' + '<br>');
					};
				};
			};
		} catch (error) {
			console.log(error);
		};
	});
});

var count = document.getElementById("count");
var input = document.getElementById("input");

input.addEventListener("input", function(event){
	count.innerHTML = event.target.value.length;
});