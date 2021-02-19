console.log("script loaded")

function init() {

  loadXMLDoc()
}

let booksArr = [];
let test;

// AJAX
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
               //console.log(xmlhttp.responseText);
               ajax(JSON.parse(xmlhttp.responseText))
               test = xmlhttp.responseText
           }
           else if (xmlhttp.status == 400) {
              console.log('There was an error 400');
           }
           else {
               console.log('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open("GET", "bookData", true);
    xmlhttp.send();
}

function ajax(content) {
  booksArr = Object.values(content)
  //booksArr = content
  displayContent(booksArr)
  console.log(booksArr);
}





function displayContent(content) {

      var displayWrap = document.getElementById("display");

      console.log(content[0].cd.length)
      console.log(content[0].cd.length)
      for (var i = 0; i < content[0].cd.length; i++) {

          const div = document.createElement("div");
          div.id = "book" + i
          div.classList.add("books");


          for(var elm in content[0].cd[i]) {
            const row = document.createElement("div");

            const property = document.createElement("span");
            property.classList.add("property");
            const propertyTxt = document.createTextNode(elm + ": ");
            property.appendChild(propertyTxt);
            row.appendChild(property);

            const value = document.createElement("span");
            value.classList.add("value");
            const valueTxt = document.createTextNode(content[0].cd[i][elm]);
            value.appendChild(valueTxt);
            row.appendChild(value);

            div.appendChild(row);
          }

          // Delete Btn
          const del = document.createElement("button");
          del.id = "del" + i
          const delTxt = document.createTextNode("Delete");
          del.appendChild(delTxt);
          del.addEventListener("click", deleteBook)
          div.appendChild(del);

          // Edit Btn
          const edit = document.createElement("button");
          edit.id = "edit" + i
          const editTxt = document.createTextNode("Edit");
          edit.appendChild(editTxt);
          edit.addEventListener("click", editBook)
          div.appendChild(edit);

          displayWrap.appendChild(div)



      }

  };



function deleteBook() {
  console.log("delete" + this.id)


  const bookDivsNode = document.getElementById("display").childNodes;
  let bookDivs = Array.prototype.slice.call(bookDivsNode);
  bookDivs.shift()

  thisId = this.id;
  this.parentElement.remove();



  for (var i = 0; i < bookDivs.length; i++) {
    let bookIdNum = bookDivs[i].id.match(/\d+/g).map(Number)

    if (bookIdNum[0] == thisId.match(/\d+/g).map(Number)) {
        booksArr[0].cd.splice(i, 1)
        //console.log("Removed " + bookDivs[i].outerText);
      break;
    }
  }
  post("/del", booksArr);
};



function editBook() {
  let selectedElm = this.parentElement;


  let editElm = Array.prototype.slice.call(this.parentElement.childNodes);

  //console.log(editElm[0].childNodes[0])

  this.parentElement.lastChild.remove();



   // Save Btn
   const save = document.createElement("button");
   save.id = "save"
   const saveTxt = document.createTextNode("Save");
   save.appendChild(saveTxt);
   save.addEventListener("click", saveEdit)
   selectedElm.appendChild(save)




  for (var i = 0; i < editElm.length; i++) {

    //console.log(editElm[i].childNodes[1].classList.contains("value"))
    if(editElm[i].childNodes[1].classList.contains("value")) {}
      let input = document.createElement("INPUT");
      input.setAttribute("type", "text");

      input.value = editElm[i].childNodes[1].innerHTML;

      editElm[i].childNodes[1].remove()
      editElm[i].appendChild(input);



  }

}



function saveEdit () {

  let selectedElm = this.parentElement;


  let editElm = Array.prototype.slice.call(this.parentElement.childNodes);

  this.parentElement.lastChild.remove();

  const edit = document.createElement("button");
  const editTxt = document.createTextNode("Edit");
  edit.appendChild(editTxt);
  edit.addEventListener("click", editBook)
  selectedElm.appendChild(edit)



 for (var i = 0; i < editElm.length; i++) {

   if(editElm[i].childNodes[1].classList.contains("value")) {}

     const value = document.createElement("span");
     value.classList.add("value");
     const valueTxt = document.createTextNode(editElm[i].childNodes[1].value);
     value.appendChild(valueTxt);

     editElm[i].childNodes[1].remove()
     editElm[i].appendChild(value);
 }
}






function post(url, data) {
    console.log(test)
    console.log(JSON.stringify(data, null, 4))


    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", url, true ); // false for synchronous request
    xmlHttp.send(JSON.stringify(data, null, 4));
    return xmlHttp.responseText;
}

















window.addEventListener("load", init);
