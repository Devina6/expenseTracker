window.addEventListener("DOMContentLoaded",async()=>{
    let response = await axios.get('http://localhost:3100/');
    
    for(var i=0;i<response.data.length;i++){
        printOnScreen(response.data[i]);
    }
    })


var expenseList = document.getElementById('listOfExpense');
expenseList.addEventListener('click',removeItem);

    
async function details(){
    let obj = {
        amount:document.getElementById("amount").value,
        description:document.getElementById("description").value,
        category:document.getElementById("category").value
    };
    
    let res = await axios.post('http://localhost:3100/add-expense', obj)
    printOnScreen(res.data)
}


function printOnScreen(obj){
    var parentElem = document.getElementById('listOfExpense');
    var childElem = document.createElement('li');
    childElem.className = 'expenseDetails';
    childElem.setAttribute('key',obj.id);
    childElem.textContent = 'Amount: '+obj.amount+' , Description: '+obj.description+' , Category: '+obj.category;
    parentElem.appendChild(childElem);
    
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    childElem.appendChild(deleteBtn);   
       
}


async function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            const key = li.getAttribute('key');
            let url = 'http://localhost:3100/delete/'+key;
            let res1 = await axios.get(url);
            console.log(res1)
            expenseList.removeChild(li);            
            }
    }
}



