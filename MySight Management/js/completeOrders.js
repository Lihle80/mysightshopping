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

         
          //populate table headers
          for (let j = 0; j < arrtestHead.length; j++) {
  
            var orderNum = arrtestHead[0].label;
            var orderDate = arrtestHead[1].label;
            var orderItem = arrtestHead[2].label;
            var orderTotal = arrtestHead[3].label;
            var orderAddress = arrtestHead[4].label;
            var customerPhone = arrtestHead[5].label;
            var customerEmail = arrtestHead[6].label;
            var CustomerName = arrtestHead[7].label;

            tableBH.innerHTML =`
            <th>${orderNum}</th>
            <th>${orderDate}</th>
            <th>${orderItem}</th>
            <th>${orderTotal}</th>
            <th>${orderAddress}</th>
            <th>${customerPhone}</th>
            <th>${customerEmail}</th>
            <th>${CustomerName}</th>
            `;
          }

          //populate table rows
          for (let i = 0; i < arrTest.length; i++) {
           
            var d2orderNum = arrTest[i].c[0].v;
            var d2orderDate = arrTest[i].c[1].v;
            var d2orderItem = arrTest[i].c[2].v;
            var d2orderTotal = arrTest[i].c[3].v;
            var d2orderAdress = arrTest[i].c[4].v;
            var d2CusPhone = arrTest[i].c[5].v;
            var d2CusEmail = arrTest[i].c[6].v;
            var d2CusName = arrTest[i].c[7  ].v;

            tableB2.innerHTML +=`<tr>
            <td>${d2orderNum}</td>
            <td>${d2orderDate}</td>
            <td>${d2orderItem}</td>
            <td>${d2orderTotal}</td>
            <td>${d2orderAdress}</td>
            <td>${d2CusPhone}</td>
            <td>${d2CusEmail}</td>
            <td>${d2CusName}</td>
            </tr>`;

           
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

          var num = structuredArr.length;
          //log array to console to check proper structure
          console.log("Proper Structured Array combining the " + num + " Above");
          console.log(structuredArr)      
      })
}