        // // EXAMINE THE DOCUMENT OBJECT //
        // // // console.dir(Document);

        // // console.log(document.domain)

        // // console.log(document.URL)

        // // // console.log(document.title)

        // // // console.log(document.doctype)

        // // // console.log(document.body)

        // // // console.log(document.head)

        // // // console.log(document.all)

        // // // console.log(document.all[10])

        // // // document.all[10].textContent = 'Hello';

        // // console.log(document.forms[0]);
        // // // // console.log(document.links);
    
        // // console.log(document.images);

        // // GETELEMENTBYID //


        // // console.log(document.getElementById('header-title'));
        // var headerTitle = document.getElementById('header-title');
        // var headerTitle = document.getElementById('main-header')
        // // console.log(headerTitle);

        // // headerTitle.textContent = 'Hello';

    //     // // headerTitle.innerText = 'Good Bye';
    //     // console.log(headerTitle.innerText);

    //     // headerTitle.innerHTML = '<h3>Hello</h3>';    

    //     // headerTitle.style.borderBottom = 'solid 3px black'

    // //    // GETELEMENTBYCLASSNAME //

    // //    var items = document.getElementsByClassName('list-group-item');
    // //    console.log(items);

    // //    console.log(items[1]);

    // //    items[1].textContent = 'Rishi';

    // //    items[3].innerHTML = 'Hello';

    // //    items[1].style.fontWeight = 'bold';
    // //    items[1].style.backgroundColor = 'yellow'
    

    // //    for(var i = 0; i < items.length; i++){
    // //        items[i].style.backgroundColor = 'grey';

    // //    }

    //    // GETELEMENTSBYTAGNAME //

    // //   var li = document.getElementsByTagName('li');
    // //   console.log(li);
    // //   console.log(li[1]);

    // //   li[1].textContent = 'Hello 2';
    // //   li[3].innerText = 'Rishi';
    
    // //   for(var i = 0; i < li.length; i++){
    // //       li[i].style.backgroundColor = 'yellow';
    // //   }

    // // QUERYSELECTOR //

    // var header = document.querySelector('#main-header');
    // header.style.borderBottom = 'solid 4px black';

    // var input = document.querySelector('input');
    // input.value = 'Hello World';
    // ;
    // var submit = document.querySelector('input[type="submit"]');
    // submit.style.backgroundColor = 'red';
    // submit.value = 'Here We Go'

    // var item = document.querySelector('.list-group-item');
    // item.style.color = 'red' 
    // item.style.backgroundColor = 'yellow'

    // var lastItem = document.querySelector('.list-group-item:last-Child');
    // lastItem.style.color = 'blue';

    // var secondItem = document.querySelector('.list-group-item:nth-child(2)');
    // secondItem.style.co4lor = 'coral';


    // QUERYSELECTORALL //

    // var titles = document.querySelectorAll('.title');
    // console.log(titles);
    // titles[0].textContent = 'Rishi';

    // var odd = document.querySelectorAll('li:nth-child(odd)');
    // for (i = 0; i < odd.length; i++){
    //     odd[i].style.backgroundColor = 'grey';
    // }


    // var even = document.querySelectorAll('li:nth-child(even)');
    // for (i = 0; i < even.length; i++){
    //     even[i].style.backgroundColor = 'coral';
    // }


    // // PART 2 //
    // var itemList = document.querySelector('#items');

    // parentNode //
    // console.log(itemList.parentNode);
    // itemList.parentNode.style.backgroundColor = "#f4f4f4";

    // console.log(itemList.parentNode.parentNode.parentNode);

    // parentElement //

    // console.log(itemList.parentElement);
    // itemList.parentElement.style.backgroundColor = "#f4f4f4";

    // console.log(itemList.parentElement.parentElement.parentElement);

    // // childNodes //
    // console.log(itemList.childNodes);

    // console.log(itemList.children);
    // console.log(itemList.children[1]);
    // itemList.children[1].style.backgroundColor = 'yellow';

    //firstChild //

    // console.log(itemList.firstChild);

    // // firstElementChild //
    // console.log(itemList.firstElementChild);
    // itemList.firstElementChild.style.backgroundColor = 'pink';
    // itemList.firstElementChild.textContent ='Rishi';

    //lastChild //

    // console.log(itemList.lastChild);

    //  // lastElementChild //
    //  console.log(itemList.lastElementChild);
    //  itemList.lastElementChild.style.backgroundColor = 'green';
    //  itemList.lastElementChild.textContent ='Pavan';
 
    // nextSibling //
    // console.log(itemList.nextSibling);

    // nextElementSibling //

    // console.log(itemList.nextElementSibling);
// // Previoussibling //
// console.log(itemList.previousSibling);
// // PreviousElementsibling //
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';'

// createElement  //
// create a div
// var newDiv = document.createElement('div');
// //Add Name
// newDiv.className = 'Rishi';
// //Add Id
// newDiv.id = 'Rishi 1';
// //Add Attribute
// newDiv.setAttribute('title', 'Hello Rishi');
// //create next node
// var newDivText = document.createTextNode('How are You');
// //Add Tex to div
// newDiv.appendChild(newDivText);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1)

// PART 3 //

// Events //
// var button = document.getElementById('button').addEventListener('click', buttonClick);
// function buttonClick(e){
// console.log('Button Clicked');
// document.getElementById('header-title').textContent = 'Changed';
// document.querySelector('#main').style.backgroundColor = 'red';
// console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// var output = document.getElementById('output');
// output.innerHTML = '<h3>'+e.target.id+'</h3>';

// // console.log(e.type);
// console.log(e.clientX);
// console.log(e.clientY);

// console.log(e.offsetX);
// console.log(e.offsetY);

// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }

// var button = document.getElementById('button');
// var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);

//box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);

// itemInput.addEventListener('keyup', runEvent);

// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);


// itemInput.addEventListener('cut', runEvent);
//itemInput.addEventListener('input', runEvent);


// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);
// form.addEventListener('submit', runEvent);

// function runEvent(e){
//     e.preventDefault();
// console.log('EVENT TYPE: '+e.type);

// console.log(e.target.value)

// console.log(e.target.value);
// document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'

// output.innerHTML = '<h3>MouseX: '+e.ofsetX+' </h3><h3>MouseY: '+e.ofsetY+'</h3>';

// document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
// }

// Part 4 //
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event //
form.addEventListener('submit', addItem);
// Delete event //
itemList.addEventListener('click', removeItem);
// Filter event //
filter.addEventListener('keyup', filterItems);

// Add item //
function addItem(e){
  e.preventDefault();

  // Get input value //
  var newItem = document.getElementById('item').value;

  // Create new li element //
  var li = document.createElement('li');
  // Add class //
  li.className = 'list-group-item';
  // Add text node with input value //
  li.appendChild(document.createTextNode(newItem));

  // Create delete button element //
  var deleteBtn = document.createElement('button');

  // Add classes to delete button //
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node //
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li //
  li.appendChild(deleteBtn);

  // Append li to list //
  itemList.appendChild(li);
}

// Remove item //
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items //
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
    // Get lis //
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
        } else {
        item.style.display = 'none';
        }
    });
  }