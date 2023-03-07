function addNewChildElement(parentId, childTagType, text) {
  const pElement = document.getElementById(parentId);
  const li = document.createElement('li');
  li.textContent = text;
  pElement.appendChild(li);
}
addNewChildElement('number-list', 'li', '3');

