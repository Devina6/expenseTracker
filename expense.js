var expenseList = document.getElementById('listOfExpense');
expenseList.addEventListener('click',removeItem);

    
function details(addForm){
    let key = Math.floor((Math.random() * 100) + 1);
    let obj = {
        amount:document.getElementById("amount").value,
        description:document.getElementById("description").value,
        category:document.getElementById("category").value
    };
    let objS = JSON.stringify(obj);
    localStorage.setItem(key,objS);
    
    printOnScreen(obj,key);
}


function printOnScreen(obj,key){
    var parentElem = document.getElementById('listOfExpense');
    var childElem = document.createElement('li');
    childElem.className = 'expenseDetails';
    childElem.setAttribute('data-key',key);
    childElem.textContent = 'Amount: '+obj.amount+' , Description: '+obj.description+' , Category: '+obj.category;
    parentElem.appendChild(childElem);
    
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    childElem.appendChild(deleteBtn);   
    
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-secondary edit';
    editBtn.setAttribute('id','edit-btn');
    editBtn.appendChild(document.createTextNode('Edit'));
    childElem.appendChild(editBtn);
    
    var changeItem = document.getElementById('edit-btn');
    changeItem.addEventListener('click',editItem);
    
}


function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            const key = e.target.parentElement.getAttribute('data-key');
            expenseList.removeChild(li);
            localStorage.removeItem(key);
            
            }
    }
}

function editItem(e){
    var li = e.target.parentElement;
    
    const key = e.target.parentElement.getAttribute('data-key');
    let objD = JSON.parse(localStorage.getItem(key));
    
    var amt = document.getElementById("amount");
    amt.value = objD.amount;
    var des = document.getElementById("description");
    des.value = objD.description;
    var cat = document.getElementById("category");
    cat.value = objD.category;
        
    expenseList.removeChild(li);
    localStorage.removeItem(key);
}

