// Pobranie modala
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");
var modal9 = document.getElementById("myModal9");

// Pobranie opisu w modalu
var modalDescription = document.getElementById("modal-description");

// Pobranie wszystkich obrazków
var imgs = document.querySelectorAll(".MainImages img");

// Dodanie zdarzenia onclick do każdego obrazka
imgs.forEach(function(img) {
  img.onclick = function() {
      // Sprawdzenie, czy id obrazka to 1
      if (img.id === '1') {
        // Wyświetlenie modala
        modal1.style.display = "block";
      }
      if (img.id === '2') {
        // Wyświetlenie modala
        modal2.style.display = "block";
      }
      if (img.id === '3') {
        // Wyświetlenie modala
        modal3.style.display = "block";
      }
      if (img.id === '4') {
        // Wyświetlenie modala
        modal4.style.display = "block";
      }
      if (img.id === '5') {
        // Wyświetlenie modala
        modal5.style.display = "block";
      }
      if (img.id === '6') {
        // Wyświetlenie modala
        modal6.style.display = "block";
      }
      if (img.id === '7') {
        // Wyświetlenie modala
        modal7.style.display = "block";
      }
      if (img.id === '8') {
        // Wyświetlenie modala
        modal8.style.display = "block";
      }
      if (img.id === '9') {
        // Wyświetlenie modala
        modal9.style.display = "block";
      }
  }
});
// Pobranie elementów <span> zamykających modal
var spans = document.getElementsByClassName("close");

// Kiedy użytkownik kliknie na <span> (x), zamknij modal
for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function() { 
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
    modal7.style.display = "none";
    modal8.style.display = "none";
    modal9.style.display = "none";
  }
}