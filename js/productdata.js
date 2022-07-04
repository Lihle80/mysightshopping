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
document.addEventListener('DOMContentLoaded', init)
 
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
        console.log(prodArr);

        let nw = [ ];
		
        for (let i = 1; i < prodArr.length; i++) {
      
          var prd_Code = prodArr[i].c[0].v;
          var productName =	prodArr[i].c[1].v;
          var prdDescription =	prodArr[i].c[2].v;
          var prdPrice =	prodArr[i].c[3].v;
          var imgUrl = prodArr[i].c[4].v;


          //contruction a proper structured array of the data
          nw.push({
                "Prd_Code":	prd_Code,
                "Name": productName,	
                "Description": prdDescription,	
                "Price": prdPrice,	
                "img_url": imgUrl
            });

            
            try{
				prodCardinner.innerHTML = `
				<div class="col-sm-4">
					<div class="card chover" style="width: 30rem;">
						<div class="card-header">
						<h4>${productName}</h4>
						</div>
						<img src='${imgUrl}' class="card-img-top" alt="productName">
						<div class="card-body">
							<h4 class="card-title">${prdPrice}</h4>
							<p class="card-text"></p>
							<button type="button" id="prd_Code" class="btn btn-warning" data-toggle="modal" data-target="#productCenter">View Product</button>
						</div>
					</div>
				</div>`;
            }
            catch{
              
            }
			
        }
    })        
}
