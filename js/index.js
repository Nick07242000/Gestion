document.getElementById("menuToggleBox").addEventListener("change", function() {
  if (document.getElementById("menuToggleBox").checked == true) {
    document.getElementsByTagName("main")[0].setAttribute("style", "background: #000; opacity:0.5; z-index:10;");
  } else {
    document.getElementsByTagName("main")[0].setAttribute("style", "background: none");
  }
});

function initMap() {
    const uluru = { lat: -31.41989510155919, lng: -64.18650345528462 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: uluru,
    });
    const spotsArray = [
      {
        lat: -31.438363227089752,
        lng: -64.18884800203924
      }
    ]
    for (let i = 0; i < spotsArray.length; i++) {
      const marker = new google.maps.Marker({
        position: spotsArray[i],
        map: map,
      })
    }
};