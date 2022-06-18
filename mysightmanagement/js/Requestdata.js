//==============My own Sheet=================================//
//google spreedsheet data
//1YQ6NIvVvpN3TFF8QrTjONTwC6V6vqeXYHfnZQsEjzxs
const sheetId = '1YQ6NIvVvpN3TFF8QrTjONTwC6V6vqeXYHfnZQsEjzxs';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = 'admin';
const query = encodeURIComponent('Select *')
const url = `${base}&sheet=${sheetName}&tq=${query}`

//DOM function lisatener
const data = []
document.addEventListener('DOMContentLoaded', init)

/*INT FUNCTION TO PROCCESS ***This function fetches data from the google sheet detailed above
after the data is fethced in the function, it is then changed from an unstructures array 
to a structured array to use in other functoons****/
function init() {
  fetch(url)
      .then(res => res.text())
      .then(rep => {
          //Remove additional text and extract only JSON:
          const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
          //rows of the data retrieved
          const arrTest = jsonData.table.rows;
          //=============LOG TO CONSOLE========================//
          //console.log(jsonData);
          var tableB2 = document.getElementById("tbody2");
          let structuredArr = [ ];

          //console.log(arrTest);
          for (let i = 0; i < arrTest.length; i++) {
           
            var Id = arrTest[i].c[0].v;
            var Name = arrTest[i].c[1].v;
            var Surname = arrTest[i].c[2].v;
            var Email = arrTest[i].c[3].v;
            var Personalemail = arrTest[i].c[4].v;
            var Phone = arrTest[i].c[5].v;
            var privateKey = arrTest[i].c[6].v;

            //console.log(arrTest[i].c);
            
            //contruction a proper structured array of the data
            structuredArr.push({
              "Id": Id,
              "Name": Name,
              "Surname": Surname,
              "Email": Email,
              "Phone": Phone,
              "PersonalEmail": Personalemail,
              "privateKey":privateKey 
            });
  

          }

          var num = structuredArr.length;
          //log array to console to check proper structure
          //console.log("");
          //console.log("Proper Structured Array combining the " + num + " Above");
          //console.log(structuredArr)      
      })
}

function submitform(){
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
            //rows of the data retrieved
            const arrTest = jsonData.table.rows;
            //this fgor loop sorts out the valuer of the array and presents them to us
           

            var fEmail = document.getElementById("Email").value;
            var fPass = document.getElementById("Password").value;
            var err = document.getElementById("errorMess");
            var removeDiv = document.getElementById("overlay");
           
            //COMPARE DATABSE PASSWORDS
            if(fEmail == "" && fPass == "")
              {
                err.innerHTML = "Please fill in all fields!";
              }
              else if(fEmail != "" && fPass != "")
              {
                for (let i = 1; i < arrTest.length; i++)
                {
                  
                  var d2Email = arrTest[i].c[3].v;
                  var d2Pass = arrTest[i].c[6].v

                  if(fEmail == d2Email)
                  {
                    if(fPass == d2Pass)
                    {
                        tracklogin();
                        removeDiv.style.display = "none"; 
                    }
                  }
                  else
                  {
                    err.innerHTML = "incorrect Password / Email!";
                  }
                }
              }
   
  })
}

function tracklogin(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwabqAmYqnobYMCqHAP-XJkqaMldLFuFYrQeZbd0D1LJwnnmaGVrhBuidY9x3enKzRpwA/exec';
    const form = document.forms['loginfrm'];
  
   
   
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))

}