document.getElementById("menuToggleBox").addEventListener("change", function() {
    if (document.getElementById("menuToggleBox").checked == true) {
      document.getElementsByTagName("main")[0].setAttribute("style", "background: #000; opacity:0.5; z-index:10;");
    } else {
      document.getElementsByTagName("main")[0].setAttribute("style", "background: none");
    }
  });