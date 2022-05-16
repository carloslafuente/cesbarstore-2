// VER EL DOM

let currentOption = 1;
function addOption() {
  let newOption = ++currentOption;
  let newOptionLabel = `Opcion ${newOption}`;

  const ulElement = document.querySelector('#option-list');
  const newElement = document.createElement('li');
  newElement.textContent = newOptionLabel;
  newElement.setAttribute('id', `option-element-${newOption}`);
  if (newOption % 2 === 0) {
    newElement.setAttribute('class', 'list-element');
  } else {
    newElement.style.backgroundColor = 'yellow';
  }
  ulElement.appendChild(newElement);
}
