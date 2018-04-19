var form = document.getElementById("form");
var input = document.getElementById("name-input");
var btn = document.getElementById("sub-btn");
var list = document.getElementById("list");

window.onload = function() {

 
    var ls1 = '<div class="remove" onclick="remove(this)"></div>';
    var ls2 = '<div class="checkbox" onclick="check(this)"></div>';
    

    form.addEventListener('submit', e => {
        e.preventDefault();
        list.innerHTML += '<li>' + input.value + ls2 + ls1 + '</li>';
        store();
        input.value = "";
        list.value = "";
    }, false)

    
    getStored();
}

function check(el) {
    var item = el.parentNode;

    if (item.classList.contains('checked')) {
        item.classList.remove('checked');
        store();
    }
    else {
        item.classList.add('checked');
        store();
    }
    
    
}

function store() {
    window.localStorage.itemlist = list.innerHTML;
}

function getStored() {
    var storedList = window.localStorage.itemlist;
    list.innerHTML = storedList;
}

function remove(el) {
    var item = el.parentNode;
    item.parentNode.removeChild(item);
    store();
}

