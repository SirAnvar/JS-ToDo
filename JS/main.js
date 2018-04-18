window.onload = function() {
 
    var ls1 = '<div class="remove" onclick="remove(this)"></div>';
    var ls2 = '<div class="checkbox" onclick="check(this)"></div>';
    var form = document.getElementById("form");
    var input = document.getElementById("name-input");
    var btn = document.getElementById("sub-btn");
    var list = document.getElementById("list");

    form.addEventListener('submit', e => {
        e.preventDefault();
        list.innerHTML += '<li>' + input.value + ls2 + ls1 + '</li>';
        store();
        input.value = "";
        list.value = "";
    }, false)

    list.addEventListener('click', function (e) {
        var t = e.target;
        if (t.classList.contains('checked')) {
            t.parentNode.removeChild(t);
            store();
        }
        
        
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
    var ic = el.parentNode;
    var item = ic.parentNode;
    item.parentNode.removeChild(item);
    store();
}

