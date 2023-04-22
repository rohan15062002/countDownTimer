const endDate="23 April 2023 10:00 PM";

const end_Date=document.getElementById("end-date");
end_Date.innerHTML=endDate;

const inputs=document.querySelectorAll("input");

function timeLeft(){
    //changing time into milliseconds
    const end=new Date(endDate);

    //give us the current date in milliseconds 
    const start=new Date();

    //find the time left

    const diff=(end-start)/1000;

    if(diff<0){
        return;
    }

    const day=Math.floor(diff/3600/24);
    const hour=Math.floor(diff/3600)%24;
    const minutes=Math.floor(diff/60)%60;
    const seconds=Math.floor(diff)%60;

    inputs[0].value=day;
    inputs[1].value=hour;
    inputs[2].value=minutes;
    inputs[3].value=seconds;

}

timeLeft();

//we have to make the function to be call after every 1sec therefore we should have to call the setinterval function

setInterval(timeLeft,1000);