//date page:
const d = new Date();
var dateval = document.getElementById("dateP");

dateval.innerHTML = d.toUTCString();
//==============Fetch Data completed orders Sheet=================================
//google spreedsheet data
//1J0MgovNFe7J079vpkg929B4CTC1zDnyTZozeZ-v-j1U

const sheetId2 = '1J0MgovNFe7J079vpkg929B4CTC1zDnyTZozeZ-v-j1U';
const base2 = `https://docs.google.com/spreadsheets/d/${sheetId2}/gviz/tq?`;
const sheetName2 = 'complete-Orders';
const query2 = encodeURIComponent('Select *')
const url2 = `${base2}&sheet=${sheetName2}&tq=${query2}`

//DOM function lisatener
const data2 = []
document.addEventListener('DOMContentLoaded', init)

/*INT FUNCTION TO PROCCESS ***This function fetches data from the google sheet detailed above
after the data is fethced in the function, it is then changed from an unstructures array 
to a structured array to use in other functoons****/
function init() {
  fetch(url2)
      .then(res => res.text())
      .then(rep => {
          //Remove additional text and extract only JSON:
          const jsonData2 = JSON.parse(rep.substring(47).slice(0, -2));
          //rows of the data retrieved
          const arrTest = jsonData2.table.rows;
          const arrtestHead = jsonData2.table.cols;
          //=============LOG TO CONSOLE========================//
          //console.log(jsonData);
          var tableBH = document.getElementById("Histothead");
          var tableB2 = document.getElementById("Histotbody");
          let structuredArr = [ ];

         
          //get headers
          for (let j = 0; j < arrtestHead.length; j++) {
  
            var orderNum = arrtestHead[0].label;
            var orderDate = arrtestHead[1].label;
            var orderItem = arrtestHead[2].label;
            var orderTotal = arrtestHead[3].label;
            var orderAddress = arrtestHead[4].label;
            var customerPhone = arrtestHead[5].label;
            var customerEmail = arrtestHead[6].label;
            var CustomerName = arrtestHead[7].label;
          }

          var completeOrders = document.getElementById("completeOrders");
          var NumberComplete = document.getElementById("numberComplete");
          let tRev = 0;
         
          //get table rows and populate Cards
          for (let i = 0; i < arrTest.length; i++) {
           
            var d2orderNum = arrTest[i].c[0].v;
            var d2orderDate = arrTest[i].c[1].v;
            var d2orderItem = arrTest[i].c[2].v;
            var d2orderTotal = arrTest[i].c[3].v;
            var d2orderAdress = arrTest[i].c[4].v;
            var d2CusPhone = arrTest[i].c[5].v;
            var d2CusEmail = arrTest[i].c[6].v;
            var d2CusName = arrTest[i].c[7].v;

            completeOrders.innerHTML += `
            <div class="col-md">
              <div class="card" style="width: 35rem;">
                <div class="card-body">
                  <h4 class="card-title">${orderNum}: ${d2orderNum}</h4>
                  <h5 class="card-subtitle mb-2 text-muted"><b>${CustomerName}: ${d2CusName}</b></h5>
                  <h5 class="card-subtitle mb-2 text-muted">${d2orderDate}</h5>
                  <hr></hr>
                  <h5 class="card-text">${customerPhone}: <b>${d2CusPhone}</b></h5>
                  <h5 class="card-text">${customerEmail}: <b>${d2CusEmail}</b></h5>
                  <h5 class="card-text">${orderAddress}: <b>${d2orderAdress}</b></h5>
                  <hr></hr>
                  <h5 class="card-text">${orderItem}: <b>${d2orderItem}</b></h5>
                  <hr></hr>
                  <h4 class="card-text">${orderTotal}: <b>R ${d2orderTotal}</b></h4>
                  <span class="moneygreen"><i class="fa fa-sack-dollar"></i></span>&nbsp;&nbsp;&nbsp;
                  <span class="green"><i class="fa fa-circle-check"></i> Complete</span>
                </div>
              </div>
            </div>`;
           
           
            
            //console.log(arrTest[i].c);
            
            //contruction a proper structured array of the data
            structuredArr.push({
                 "OrderNum":d2orderNum,
                 "OrderDate":d2orderDate,
                 "OrderItem":d2orderItem,
                 "OrderTotal":d2orderTotal,
                 "OrderAdress":d2orderAdress,
                 "CusPhone":d2CusPhone,
                 "CusEmail":d2CusEmail,
                 "CusName":d2CusName,
            });

          }

          //var tRev = d2orderTotal;
          NumberComplete.style.fontSize = "18px";
          NumberComplete.innerHTML = `Completed orders: <b>${arrTest.length}</b> <br> Total Revenue: `;

          var num = structuredArr.length;
          //log array to console to check proper structure
          console.log("Proper Structured Array combining the " + num + " Above");
          console.log(structuredArr)      
      })
}