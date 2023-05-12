//::::::::::::::::::::::::::::::::::::::::::::::::::
function openTab() {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  for (i = 0; i < arguments.length; i++) {
    document.getElementById(arguments[i]).style.display = "flex";
  }
}

window.onload = function() {
  // код для отображения страницы
}