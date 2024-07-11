const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}


window.newHeader = document.createElement('h1');


window.newHeader.id = 'victory';


window.newHeader.textContent = 'Nick is the champion'; 


document.body.appendChild(window.newHeader);
