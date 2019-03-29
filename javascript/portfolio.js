const projects = document.querySelectorAll('.project');
const body = document.querySelector('body');
var now = new Date();
var month = now.getMonth();
var day = now.getDate();
var year = now.getFullYear();

function toggleOpen() {
    if(this.classList != 'open'){
    body.classList.toggle('hide');
    this.classList.toggle('open');
    }
  }
  function changeTheme(){
      body.classList.toggle('change')

  }
 
  document.getElementById('m').innerHTML = month + 1;
  document.getElementById('d').innerHTML = day;
  document.getElementById('y').innerHTML = year;

     projects.forEach(project => project.addEventListener('click', toggleOpen));
     document.getElementById('theme').addEventListener('click',changeTheme);