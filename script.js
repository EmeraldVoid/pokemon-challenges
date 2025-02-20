document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('homeButton');
    const twitchButton = document.getElementById('twitchButton');
    const githubButton = document.getElementById('githubButton');
  
    homeButton.addEventListener('click', function() {
      window.location.href = 'https://emeraldvoid.github.io/pokemon-challenges/';
    });
  
    twitchButton.addEventListener('click', function() {
      window.open('https://www.twitch.tv/emerald_void', '_blank');
    });
  
    githubButton.addEventListener('click', function() {
      window.open('https://www.github.com/emeraldvoid', '_blank');
    });

    creditsButton.addEventListener('click', function() {
        window.location.href = ' https://emeraldvoid.github.io/pokemon-challenges/credits.html';
      });
  });

  





 
