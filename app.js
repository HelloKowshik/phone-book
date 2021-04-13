const addForm = document.querySelector('#add-form');
let fullName = document.querySelector('#fullName');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let address = document.querySelector('#address');
let searchText = document.querySelector('#searchText');
const parentDiv = document.querySelector('#parentDiv');
// let contacts = [];
let contacts = getLocalData();

function getLocalData() {
    let contacts = '';
    if (localStorage.getItem('contacts') === null) {
        contacts = [];
    } else {
        contacts = JSON.parse(localStorage.getItem('contacts'));
    }
    return contacts;
}

function saveToStorage(contact) {
    let contacts = '';
    if (localStorage.getItem('contacts') === null) {
        contacts = [];
        contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
        contacts = JSON.parse(localStorage.getItem('contacts'));
        contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }
}

function deleteFromStorage(id) {
    let contacts = JSON.parse(localStorage.getItem('contacts'));
    let result = contacts.filter(contact => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(result));
    if (result.length === 0) {
        location.reload();
    }
}

addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let obj = createObj(fullName.value, email.value, phone.value, address.value);
    contacts.push(obj);
    saveToStorage(obj);
    getContacts(contacts);
    this.reset();
})

function createObj(name, email, phone, title) {
    let id = new Date().getMilliseconds();
    if (!name|| !email || !phone) {
        alert('Empty Field!');
    } else {
        return { id: id, name, email, phone, title: title || 'Work' };
    }
}

function getContacts(contacts) {
    if (contacts.length > 0) {
        let div;
        contacts.forEach(contact => {
            let { id, name, email, phone, title } = contact;
            div = document.createElement('div');
            div.classList.add('mb-2');
            div.id = id;
            div.innerHTML = `<ul class="list-group">
            <li class="list-group-item">${name}</li>
            <li class="list-group-item">${email}</li>
            <li class="list-group-item">${phone}</li>
            <li class="list-group-item">${title}</li>
            <li class="list-group-item"><button type="submit" class="btn btn-primary btn-sm">Delete</button></li>
            </ul>`;
            parentDiv.appendChild(div);
        });
        // parentDiv.appendChild(div);
    }
}

getContacts(contacts);

parentDiv.addEventListener('click', e => {
    if (e.target.classList.contains('btn')) {
        console.log(e.target.parentElement.parentElement.parentElement.id);
        const id = Number.parseInt(e.target.parentElement.parentElement.parentElement.id);
        e.target.parentElement.parentElement.remove();
        const result = contacts.filter(contact => contact.id !== id);
        contacts = result;
        deleteFromStorage(id);
    }
})

searchText.addEventListener('keyup', e => {
    let inputText = e.target.value.toLowerCase();
    document.querySelectorAll('.list-group').forEach(list => {
        let name = list.firstElementChild.textContent.toLowerCase();
        let email = list.firstElementChild.nextElementSibling.textContent.toLowerCase();
        let phone = list.firstElementChild.nextElementSibling.nextElementSibling.textContent;
        if (name.indexOf(inputText) === -1 && phone.indexOf(inputText) === -1) {
            list.style.display = 'none';
        } else {
            list.style.display = 'block';
        }
    })
});