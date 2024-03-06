const img = document.getElementById('changeBackground')

img.addEventListener('click', () => {
  const body = document.body

  if (body.classList.contains("light")) {
    body.classList.remove("light")
    body.classList.add("dark")
    img.src = "IMG/Dark_Icon.png"; //DARK
  } else {
    body.classList.remove("dark")
    body.classList.add("light")
    img.src = "IMG/Light_Icon.png" // LIGHT
  }

  // Zapisz wybrany motyw i ikonę do localStorage
  localStorage.setItem("theme", body.className);
  localStorage.setItem("icon", img.src);
});

window.addEventListener('load', function() {
  // Pobierz zapisany motyw i ikonę z localStorage
  var savedTheme = localStorage.getItem("theme");
  var savedIcon = localStorage.getItem("icon");

  // Jeśli zapisany motyw istnieje, użyj go. W przeciwnym razie, użyj domyślnego motywu "light".
  document.body.className = savedTheme ? savedTheme : "light";

  // Jeśli zapisana ikona istnieje, użyj jej.
  if (savedIcon) {
    img.src = savedIcon;
  }
});

/*
const img = document.getElementById('changeBackground')

img.addEventListener('click', () => {
  const body = document.body

  if (body.classList.contains("light")) {
    body.classList.remove("light")
    body.classList.add("dark")
    img.src = "IMG/Dark_Icon.png"; //DARK
  }else{
    body.classList.remove("dark")
    body.classList.add("light")
    img.src = "IMG/Light_Icon.png" // LIGHT
  }
});
*/