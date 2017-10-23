document.addEventListener("DOMContentLoaded", function() {
  var s = document.querySelector("#pprotect");
  var encoded = s.attributes.src.value;
  var url = new URL(encoded, location.href)
  
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
});
