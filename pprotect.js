document.addEventListener("DOMContentLoaded", function() {
  var b64 = 'bmFyZg==';
  if (b64) {
    var password = localStorage.password;
    while (1) {
      if (password == atob(b64)) {
        localStorage.password = password;
        break;
      }
      password = prompt('Page Password?');
    }
  }
  var d = document.querySelector('body');
  d.classList.add('active');
}
