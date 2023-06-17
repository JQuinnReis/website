//__________________________________________________________________________________
var i = 1

//    If javascript is enabled this replaces the <a></a>'s in the buttons
   
const listItems = document.querySelectorAll('.Main_Nav li'); // varaialbe is made to hold list of li
const pageButton =  document.querySelector('li button[value="page"]')

for (let i = 0; i <= listItems.length - 1; i++) { //for-loop through range (0, list leng-1, i=i+1)

        const cName = listItems[i].children[0].name //var made on each loop to obtian button name
        const cID = listItems[i].children[0].id //var made on each loop to obtian button id (href)
                if (pageButton.name == cName){
                        listItems[i].innerHTML = `<button type="button" name="${cName}" value="${pageButton.value}"onclick="goto('./${cID}.html')">.${cName}</button>` 
                        // replaces the <a> of button (i) with JS friendly// this is current page.
                }
                else{
                        listItems[i].innerHTML = `<button type="button" name="${cName}" onclick="goto('./${cID}.html')">.${cName}</button>`
                        // replaces the <a> of button (i) with JS friendly code. // this is other pages
                        }; 
}
//__________________________________________________________________________________
//   allows the buttons to function without an <a></a>  

function goto(link){
    onclick = location.replace(link);
};


//_______________________________________________________________________________--
//  enter key unchecks fake cmd checkbox
const button = document.getElementById('index_check');

console.log(button);
document.addEventListener('keydown', function(event){
                if ( event.key == "Enter" ){
                console.log("working");
                button.checked = false;
};});
 
//__________________________________________________________________________________



// const button = document.getElementById('index_check')
//         button.addEventListener( 'change', function() {
//         if(this.checked) {
//                 const text = document.getElementById("index_label");
//                 text.innerHTML= "Press Enter";
//         } else {
//                 const text = document.getElementById("index_label");
//                 text.innerHTML= "[ReisJ@Home:~]$<span>▮</span>";
//     }
// });
//         // if (button.checked = true){
        //         console.log("box is checked");
        //         changelable1()
        // };

// function changelable1(){
//         console.log('change function runs');
//         const text = document.getElementById("index_label");
//         text.innerHTML= "Press Enter";
// };

// DarkReader.disable()
// DarkReader.removeDynamicTheme()



//get cat pic
// get a quote for meme
// place pic on page
// place quote on page
// import { createClient } from 'pexels';
// var My_Key = "563492ad6f917000010000012c15e885446e45b498fe5a19b4f57a25"
// get cat pic
// get a quote for meme
// place pic on page
// place quote on page
// import { createClient } from 'pexels';
// var My_Key = "563492ad6f917000010000012c15e885446e45b498fe5a19b4f57a25"

function CatAPI(){
    let CatPic = document.getElementById("Cat_Pic");    

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", "01e5a7b9-70a0-48dd-b282-8cccce4e5c86");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };
    
        fetch("https://api.thecatapi.com/v1/images/search?format=json&limit=1&size=med", requestOptions)
                .then(function(response) { 
                        return response.json();
                })
                .then(function(Data){
                        var ObjectURL = Data[0]["url"];
                        CatPic.src = ObjectURL;
                })
                .catch(error => console.log('cat pic error', error));

}
        let MemeText = document.getElementById("text_span");

        // fetch("https://api.kanye.rest")
        //         .then(function(response) {
        //                 return response.json();
        //         })
        //         .then(function(Data){
        //                 let objectData = Data['quote'];
        //                 console.log(objectData);
        //                 MemeText.innerHTML = objectData;
        //         })
        //         .catch(error => console.log('meme words error', error));

        // MemeText.innerHTML("?");




               


function MakeCatMeme(){
        // CatAPI();
        MemeTextAPI(api_url);
    
        document.getElementById("Cat_Pic").style.width = "90%";
}


// function CatPractice(){
//         // var n = i;
       
//         // const CatPic = document.getElementById("Cat_Pic");    
//         // const SRC = CatPic.src;
//         // // let ftype = SRC.split(".")
//         // // ftype = ftype.slice(-1)
//         // let splitSrc = SRC.split('/');
//         // let fCount = splitSrc.length;
//         // var folder = splitSrc.slice(0, fCount - 1).join('/');

// if ( i >=9) {
//         i = 1
//         CatPractice()
//         }
//         else{
//                 document.getElementById("Cat_Pic").src = `../media/Cats/Cat (${i}).jpg`;
//                 i++
//         };



// };
