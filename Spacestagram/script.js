/* All const for event listeners */

const image_res = document.getElementById('Image1');
const nxt_btn = document.getElementById('next');
const pre_btn = document.getElementById('prev');
const like_btn1 = document.getElementById('heart1');
const like_btn2 = document.getElementById('heart2');
const like_btn3 = document.getElementById('heart3');
const like_btn4 = document.getElementById('heart4');
const like_btn5 = document.getElementById('heart5');

number = 0; //used for accessing the photos array in API

// counter 
counter1 = 0;
counter2 = 0;
counter3 = 0;
counter4 = 0;
counter5 = 0;

nxt_btn.addEventListener('click', ()=>{ //next function
    console.log('next pressed')
    raNo()
    sendApiRequest()
    document.getElementById('heart1').style.color = 'white';
    document.getElementById('heart2').style.color = 'white';
    document.getElementById('heart3').style.color = 'white';
    document.getElementById('heart4').style.color = 'white';
    document.getElementById('heart5').style.color = 'white';
    counter1 = 0;
    counter2 = 0;
    counter3 = 0;
    counter4 = 0;
    counter5 = 0;

})

pre_btn.addEventListener('click', ()=>{ //previous function
    console.log('previous pressed')
    prNo()
    sendApiRequest()
})

like_btn1.addEventListener('click', ()=>{

    counter1++;
    //console.log(counter1)
    if (counter1%2 == 1){
        document.getElementById('heart1').style.color = 'red';
    }
    else{
        document.getElementById('heart1').style.color = 'white';
    }
})

like_btn2.addEventListener('click', ()=>{

    counter2++;
    //console.log(counter2)
    if (counter2%2 == 1){
        document.getElementById('heart2').style.color = 'red';
    }
    else{
        document.getElementById('heart2').style.color = 'white';
    }
})

like_btn3.addEventListener('click', ()=>{

    counter3++;
    //console.log(counter3)
    if (counter3%2 == 1){
        document.getElementById('heart3').style.color = 'red';
    }
    else{
        document.getElementById('heart3').style.color = 'white';
    }
})

like_btn4.addEventListener('click', ()=>{

    counter4++;
    //console.log(counter4)
    if (counter4%2 == 1){
        document.getElementById('heart4').style.color = 'red';
    }
    else{
        document.getElementById('heart4').style.color = 'white';
    }
})

like_btn5.addEventListener('click', ()=>{

    counter5++;
    //console.log(counter5)
    if (counter5%2 == 1){
        document.getElementById('heart5').style.color = 'red';
    }
    else{
        document.getElementById('heart5').style.color = 'white';
    }
})

// function to fetch data in the API runs asynchronously
async function sendApiRequest(){
    let KEY = "MYJjtO5Hl8otusqkUSFL5JbgoNRHPvxAfA8UuPNG"
    let res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${KEY}`);
    //console.log(res)

    let data = await res.json()
    //console.log(data)
    useData(data)
}
   
// generates the next image value 
function raNo(){

    number = number + 5;

    if ( number%855 == 0){
        number = number%855;
    }

    //console.log(number)
}

// generates previous image values if user clicks nxt_btn
function prNo(){

    if ( number == 0){
        number = 855;
    }    
    
    number = number - 5;
    //console.log(number)
}


// fills API data using id in elements within the index
function useData(data){
    /*Takes data from the API and paste them into the innerHTML  */
    document.querySelector("#Image1").innerHTML = `<img src="${data.photos[number].img_src}">`
    document.querySelector("#Name1").innerHTML = "Id: " + data.photos[number].id
    document.querySelector("#Date1").innerHTML = "Earth date: " + data.photos[number].earth_date

    document.querySelector("#Image2").innerHTML = `<img src="${data.photos[number + 1].img_src}">`
    document.querySelector("#Name2").innerHTML = "Id: " + data.photos[number + 1].id
    document.querySelector("#Date2").innerHTML = "Earth date: " + data.photos[number + 1].earth_date

    document.querySelector("#Image3").innerHTML = `<img src="${data.photos[number + 2].img_src}">`
    document.querySelector("#Name3").innerHTML = "Id: " + data.photos[number + 2].id
    document.querySelector("#Date3").innerHTML = "Earth date: " + data.photos[number + 2].earth_date

    document.querySelector("#Image4").innerHTML = `<img src="${data.photos[number + 3].img_src}">`
    document.querySelector("#Name4").innerHTML = "Id: " + data.photos[number + 3].id
    document.querySelector("#Date4").innerHTML = "Earth date: " + data.photos[number + 3].earth_date

    document.querySelector("#Image5").innerHTML = `<img src="${data.photos[number + 4].img_src}">`
    document.querySelector("#Name5").innerHTML = "Id: " + data.photos[number + 4].id
    document.querySelector("#Date5").innerHTML = "Earth date: " + data.photos[number + 4].earth_date

}



