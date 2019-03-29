const projects = document.querySelectorAll('.project');
const body = document.querySelector('body');
const linkedin = document.getElementById('linkedIn');

function toggleOpen() {
    if(this.classList != 'open'){
    body.classList.toggle('hide');
    this.classList.toggle('open');
    }
  }
  function message(){
      console.log('hello');
      window.open("www.google.com");
  }


     projects.forEach(project => project.addEventListener('click', toggleOpen));
     linkedin.addEventListener('click',message);
    //  document.getElementById('gmail').addEventListener('click',window.open('mailto:test@example.com'));