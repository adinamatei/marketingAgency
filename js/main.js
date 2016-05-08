function callback(event) {
  for (var j = 0; j<menuList.length; j++) {
    menuList[j].classList.remove('selected');
  }
  event.currentTarget.classList.add('selected');
  console.log(event.currentTarget.classList);
}

menuList = document.getElementsByClassName('btn')
for (var i = 0; i<menuList.length; i++) {
  var button = menuList[i]
  button.addEventListener('click', callback)
}
