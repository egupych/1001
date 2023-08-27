//::::::::::::::::::::::::::::::::::::::::::::::::::
//Анимация прокрутки до якоря
//::::::::::::::::::::::::::::::::::::::::::::::::::

function openTab(tabName, button) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "flex";
  button.className += " active";
}

window.onload = function() {
// код для отображения страницы
}

//::::::::::::::::::::::::::::::::::::::::::::::::::
//Анимация прокрутки до якоря
//::::::::::::::::::::::::::::::::::::::::::::::::::

function setScrollIntoView1(top) {
	const biography = document.querySelector('.rocket_up');
	biography.scrollIntoView(top);
}

function setScrollIntoView1Options(top) {
	const biography = document.querySelector('.rocket_up');
	biography.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}



function reloadPage() {
  location.reload(); // Обновление текущей страницы
}


// Для перехода на ссылки при клике на div

document.getElementById("myDiv1").addEventListener("click", function() {
  window.location.href = "https://egupych.github.io/1002/";
});
document.getElementById("myDiv2").addEventListener("click", function() {
  window.location.href = "https://egupych.github.io/1003/";
});
document.getElementById("myDiv3").addEventListener("click", function() {
  window.location.href = "https://egupych.github.io/1004/";
});
document.getElementById("myDiv4").addEventListener("click", function() {
  window.location.href = "https://egupych.github.io/1005/";
});
document.getElementById("myDiv5").addEventListener("click", function() {
  window.location.href = "https://egupych.github.io/1006/";
});


window.addEventListener('scroll', function() {
  var rocket = document.getElementById('rocket');
  var scrollPositionRocket = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPositionRocket >= window.innerHeight) {
    rocket.style.display = 'block';
  } else {
    rocket.style.display = 'none';
  }
});


