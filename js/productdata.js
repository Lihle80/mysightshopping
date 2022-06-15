/* 
let products = [
    {
        Name: "hoodie",  
        Price: 200,
        Sku: "", 
        color: "",
        imgs: "",
        size: "",
        StockQuantity: 0
    
    },
    {
        Name: "Golfer",  
        Price: 200,
        Sku: "", 
        color: "",
        imgs: "",
        size: "",
        StockQuantity: 0
    
    },
    {
        Name: "t-shirt",  
        Price: 200,
        Sku: "", 
        color: "",
        imgs: "",
        size: "",
        StockQuantity: 0
    
    }
]

function onShopPageLoad()
{
    //log products array to console
    console.log(products);

    
  var table = document.getElementById("tbody");
  for( let i = 0; i<products.length; i++)
  {
    var prodName = products[i].Name;
    var prodPrice = products[i].Price;

    //add  cards
    var rowcards = document.getElementById("pdCards");

     rowcards.innerHTML += `<div class="col-sm-3">
        <div class="card">
        <div class="card-header" id="productName">${prodName}</div>
        <div class="card-body" id="b1"></div> 
        <div class="card-footer" id="f1"></div>
        </div>
        </div>`
    
 
      
    document.getElementById("productName").innerHTML = prodName;
  
  }

      

}
*/