const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});

// need to set up links to:
// my github,
// my linkedin,
// my twitter,
// my instagram,
// my youtube,
// my codepen,
// my (future) koffie,
// my email (buisness address)