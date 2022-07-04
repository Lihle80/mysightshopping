//Global Variables
var prodCardinner = document.getElementById("prdCards");

//https://docs.google.com/spreadsheets/d/1H6bKg6hzG-zO64cAZFl_ChUD5nIhJzLQAX8Fc3Z7qcs/edit?usp=sharing
const sheetId2 = '1H6bKg6hzG-zO64cAZFl_ChUD5nIhJzLQAX8Fc3Z7qcs';
const base2 = `https://docs.google.com/spreadsheets/d/${sheetId2}/gviz/tq?`;
const sheetName2 = 'Products - info';
const query2 = encodeURIComponent('Select *')
const url= `${base2}&sheet=${sheetName2}&tq=${query2}`

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
      
          var Prd_Code = prodArr[i].c[0].v;
          var Product =	prodArr[i].c[1].v;
          var SellingP =	prodArr[i].c[2].v;
          var WaterpreneurP =	prodArr[i].c[3].v;
          var imgUrl = prodArr[i].c[4].v;


          //contruction a proper structured array of the data
          nw.push({
                "Prd_Code":	Prd_Code,
                "Product": Product,	
                "Selling_Price": SellingP,	
                "Waterpreneur_Price": WaterpreneurP,	
                "wholesale_Price": wholesaleP,
                "Pack_Size": packSize,
                "Pallet_Size": PalletSize,
                "img_url": imgUrl
            });

            
            try{
       

            }
            catch{
              
            }
			
        }
    })        
}
