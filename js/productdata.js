//Global Variables
var prodCardinner = document.getElementById("prdCards");
var modinnerBody = document.getElementById("modinnerBody");
var modinnerTitle = document.getElementById("modinnerTitle");
var modinnerFoot = document.getElementById("modinnerFoot");

//work/functions
//https://docs.google.com/spreadsheets/d/1H6bKg6hzG-zO64cAZFl_ChUD5nIhJzLQAX8Fc3Z7qcs/edit?usp=sharing
const sheetId2 = '1H6bKg6hzG-zO64cAZFl_ChUD5nIhJzLQAX8Fc3Z7qcs';
const base2 = `https://docs.google.com/spreadsheets/d/${sheetId2}/gviz/tq?`;
const sheetName2 = 'mysight-products';
const query2 = encodeURIComponent('Select *');
const url= `${base2}&sheet=${sheetName2}&tq=${query2}`;

//DOM function lisatener
const client = []
document.addEventListener('DOMContentLoaded', init, populateDetailsModal)
 
/*INT FUNCTION TO PROCCESS ***This function fetches data from the google sheet detailed above
after the data is fethced in the function, it is then changed from an unstructures array 
to a structured array to use in other functoons****/
function init(){
    fetch(url)
    .then(res => res.text())
    .then(rep => {
        //Remove additional text and extract only JSON:
        const jsonData2 = JSON.parse(rep.substring(47).slice(0, -2));
        //rows of the data retrieved
        const prodArr = jsonData2.table.rows;
        //=============LOG TO CONSOLE========================//
        //console.log(jsonData2);
        //console.log(prodArr);

        let nw = [ ];
		
        for (let i = 0; i < prodArr.length; i++) {
      
          var prd_Code = prodArr[i].c[0].v;
          var productName =	prodArr[i].c[1].v;
          var prdDescription =	prodArr[i].c[2].v;
          var prdPrice = prodArr[i].c[3].v;
          var stockStatus = prodArr[i].c[4].v;
          var imgUrl = prodArr[i].c[5].v;


          //contruction a proper structured array of the data
          nw.push({
                "Prd_Code":	prd_Code,
                "Name": productName,	
                "Description": prdDescription,	
                "Price": prdPrice,
                "StockStatus": stockStatus,
                "img_url": imgUrl
            });
    
            var statustColor;
             if(stockStatus == "Out of stock"){
              statustColor = "redofs";
            }
            else{
              statustColor = "greenofs";
            }

            try{
    				prodCardinner.innerHTML += `
    				<div class="col-md">
    					<div class="card chover" style="width: 35rem; height: 55rem;">
    						<div class="card-header bg-dark text-light">
    						<h4>${productName}</h4>
    						</div>

                <div class="card-body text-center">
    						<img src="${imgUrl}" alt="${productName} img" width="100%" height="100%">
    		        </div>

                <div class="card-footer">
    							<h4 class="card-title">R ${prdPrice}.00</h4>
    							<p class="card-text"></p>
    							<button type="button" id="${prd_Code}" onclick="populateDetailsModal(this.id)" class="btn btn-warning" data-toggle="modal" data-target="#productCenter">View Product</button>
                  &nbsp;<span class="${statustColor}" id="stkStatus">${stockStatus}</span>
    						</div>
    					</div>
    				</div>`;
            }
            catch{
              
            }


        }
        console.log(nw);


    })        
}

//global variables for the modal
var modinnerFoot, modinnerBody, modinnerTitle, prodleft, right;
modinnerTitle = document.getElementById("modinnerTitle");
modinnerBody = document.getElementById("modinnerBody");
modinnerFoot =document.getElementById("modinnerFoot");
prodleft = document.getElementById("prodleft");
prodright = document.getElementById("prodright");

function populateDetailsModal(clickedId){

  //retrive the correct id for thew product
  modinnerTitle.innerHTML = "Item Code: " + clickedId;


  
  fetch(url)
    .then(res => res.text())
    .then(rep => {
        //Remove additional text and extract only JSON:
        const jsonData2 = JSON.parse(rep.substring(47).slice(0, -2));
        //rows of the data retrieved
        const prodArr = jsonData2.table.rows;
        //=============LOG TO CONSOLE========================//
        //console.log(jsonData2);
        //console.log(prodArr);

        let nw = [ ];
    
        for (let i = 0; i < prodArr.length; i++) {
      
          var prd_Code = prodArr[i].c[0].v;
          var productName = prodArr[i].c[1].v;
          var prdDescription = prodArr[i].c[2].v;
          var prdPrice = prodArr[i].c[3].v;
          var stockStatus = prodArr[i].c[4].v;
          var imgUrl = prodArr[i].c[5].v;


          //contruction a proper structured array of the data
          nw.push({
                "Prd_Code": prd_Code,
                "Name": productName,  
                "Description": prdDescription,  
                "Price": prdPrice,
                "StockStatus": stockStatus,  
                "img_url": imgUrl
            });

      
            if(clickedId == prd_Code){
              prodright.innerHTML = `<h1>All the images and related gallery for this product will go here.</h1>`;

              prodleft.innerHTML = `
              <h4>${productName}</h4>
              <hr>
              <h5>Description</h5>
              <p>${prdDescription}</p>
              <hr>
              <div id="frmsize">
                <h5><b>Select size</b></h5>
                <form class="size">
                  <label>Small</label>
                  <input type="radio" name="sizeRad"><br>
                  <label>Medium</label>
                  <input type="radio" name="sizeRad"><br>
                  <label>Large</label>
                  <input type="radio" name="sizeRad"><br>
                  <label>XLarge</label>
                  <input type="radio" name="sizeRad"><br>
                  <label>2XLarge</label>
                  <input type="radio" name="sizeRad">
                <from>
                <hr>
              </div>

              <div id="frmcolor">
                <h5><b>Select a color</b></h5>
                <form class="colorfrm">
                  <label>Red</label>
                  <input type="radio" name="capColor"><br>
                  <label>Blue</label>
                  <input type="radio" name="capColor"><br>
                <from>
                <hr>
               </div>
              <h4>R ${prdPrice}.00</h4>
              <p style="color: red" id="otfstk">This product is out of stcok!</p>`;

              if(productName.includes("Cap") == true){
                document.getElementById("frmsize").style.display = "none";
                document.getElementById("frmcolor").style.display = "none";
              }
              else if(productName.includes("Beanie") == true){
                document.getElementById("frmsize").style.display = "none";
                document.getElementById("frmcolor").style.display = "none";
              }
              else{
                document.getElementById("frmsize").style.display = "block";
                document.getElementById("frmcolor").style.display = "none";
              }
              
              //
              if(productName.includes("Red") == true){
                document.getElementById("frmsize").style.display = "none";
                document.getElementById("frmcolor").style.display = "block";
                console.log("im a red and blue")
              }

              //

              if(stockStatus == "Out of stock")
              {
                document.getElementById("add-cBtn").style.display = "none";
                document.getElementById("otfstk").style.display = "block"
              }
              else{
                document.getElementById("add-cBtn").style.display = "block";
                document.getElementById("otfstk").style.display = "none"
              }

            }//end of if Statement

        }//end of forloop

    });        
}