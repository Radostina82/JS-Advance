function toggle() {
  const button = document.getElementsByClassName('button')[0].textContent;
  const extra = document.getElementById('extra');
  if(button == 'More'){
    extra.style.display = 'block';
    document.getElementsByClassName('button')[0].textContent = 'Less';
  }else if(button == 'Less'){
      extra.style.display = 'none';
      document.getElementsByClassName('button')[0].textContent = 'More';
  }
}