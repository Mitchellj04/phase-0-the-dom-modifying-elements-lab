
document.getElementById('main').remove();
const name = 'Justin'

const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.textContent = `${name}` + 'is the champion';

document.body.append(newHeader);