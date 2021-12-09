const dateOfBirth = document.querySelector
("#date-of-birth");
const luckyNumber = document.querySelector
("#lucky-number");
const checkNumberBtn = document.querySelector
("#check-number-btn");
const outputBox = document.querySelector("#output-box");
console.log(dateOfBirth);

function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText = "Yup!! 😍 Your Birthday is lucky 🥳";
    }else{
        outputBox.innerText = "Sorry..😕 Your birthday is not lucky";
    }
}

function checkBirthdayDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    console.log(sum,dob);

    if(sum && dob){
    compareValues(sum,luckyNumber.value)
    }
    else{
        outputBox.innerText  = "please enter both the field";
        


    }
}

function calculateSum(dob) {
    console.log(dob);
    dob = dob.replaceAll("-","");
    let sum=0;
    for(let index=0;index<dob.length;index++){
        sum=sum+Number( dob.charAt(index));
    }
    return sum;
    
}

// checkNumberButton.addEventListener("click",function getValues(){
//     console.log(dateOfBirth.value,luckyNumber.value);

checkNumberBtn.addEventListener("click",checkBirthdayDateIsLucky)