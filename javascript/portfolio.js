function toggleOpen() {
    console.log('Hello');
    // this.classList.toggle('open');
  }

//   function toggleActive(e) {
//     console.log(e.propertyName);
//     if (e.propertyName.includes('flex')) {
//       this.classList.toggle('open-active');
//     }
//   }

  projects.forEach(projectTitle => projectTitle.addEventListener('click', toggleOpen));
//   panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));