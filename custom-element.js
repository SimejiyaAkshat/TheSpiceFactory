let activeCount = 3;
let i = 0;
const quoteArrw = ()=> {
    const arrowDvi = document.createElement("div");
    const arrowImg = document.createElement("img");
    arrowImg.src = "arrow.png";
    arrowDvi.classList.add("arrow-img-main");
    arrowDvi.appendChild(arrowImg);

    return arrowDvi;
}

const quoteInd = [];
const txt = [];
const quoteTxtOuter = [];


const quoteDetails = ()=>{
    const quoteDet = document.createElement("div");
    quoteDet.classList.add("quote-text-main");
    
    for(let i=0; i<7;i++){
        quoteTxtOuter[i] = document.createElement("div");
        quoteTxtOuter[i].classList.add("text-outer-container");
        quoteInd[i] = document.createElement("div");
        txt[i] = document.createElement("p");
        quoteInd[i].classList.add("quote-text");
        // txt[i].innerHTML = `consistently demonstrates remarkable problem-solving skills. Whether it's tackling complex tasks or navigating challenging situations, he displays a keen ability to analyse problems from multiple angles, devise innovative solutions, and effectively implement them. This not only enhances the team's productivity but also contributes significantly to our overall success.`
        quoteInd[i].appendChild(txt[i]);
        quoteTxtOuter[i].appendChild(quoteInd[i]);
        quoteDet.appendChild(quoteTxtOuter[i]);
    }

    quoteTxtOuter[3].classList.add("active-txt-container")
    txt[0].innerHTML = `First Description`;
    txt[1].innerHTML = `Second Description`;
    txt[2].innerHTML = `Third Description`;
    txt[3].innerHTML = `Fourth Description`;
    txt[4].innerHTML = `Fifth Description`;
    txt[5].innerHTML = `Sixth Description`;
    txt[6].innerHTML = `Seventh Description`;

    return quoteDet;
}

const personImages = ()=>{
    const profileImages = document.createElement("div");
    profileImages.classList.add("profile-main-div");
    
    let profileOCont = [];
    let profileImg = [];
    let divImg = [];
    let profileNm = [];
    let profileInfo =[];
    for(let i =0; i<7;i++){
        profileOCont[i] = document.createElement("div");
        profileOCont[i].classList.add("profileOutCont");

        profileImg[i] = document.createElement("div");
        profileImg[i].classList.add("profileImg");
        profileImg[i].setAttribute("onclick","changePro("+i+")");
        divImg[i] = document.createElement("div");
        profileNm[i] = document.createElement("h1");
        profileInfo[i] = document.createElement("p");

        profileImg[i].appendChild(divImg[i]);
        profileImg[i].appendChild(profileNm[i]);
        profileImg[i].appendChild(profileInfo[i]);
        profileOCont[i].appendChild(profileImg[i]);

        profileImages.appendChild(profileOCont[i]);
    }
    
    
    profileNm[0].innerHTML = `ABC`;
    profileInfo[0].innerHTML = `ABC`;
    profileNm[1].innerHTML = `DEF`;
    profileInfo[1].innerHTML = `DEF`;
    profileNm[2].innerHTML = `GHI`;
    profileInfo[2].innerHTML = `GHI`;
    profileNm[3].innerHTML = `JKL`;
    profileInfo[3].innerHTML = `JKL`;
    profileNm[4].innerHTML = `MNO`;
    profileInfo[4].innerHTML = `MNO`;
    profileNm[5].innerHTML = `PQR`;
    profileInfo[5].innerHTML = `PQR`;
    profileNm[6].innerHTML = `STU`;
    profileInfo[6].innerHTML = `STU`;

    return profileImages;
}

const  customElementinit =  ()=>{
    const mndiv = document.createElement("div");
    mndiv.classList.add('testimonial-main-container');
    mndiv.appendChild(quoteArrw());
    mndiv.appendChild(quoteDetails());
    mndiv.appendChild(personImages());
    return mndiv;
}

const customElementStyle = ()=>{
    const cusStyle = document.createElement("style");
    cusStyle.innerHTML= `
    body {
        background-color: #ffffff;
    }  
    .testimonial-main-container{
    width: 80%;
    margin: auto;
    padding: 68px 70px;
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width:700px;
}

.arrow-img-main {
    width: 52px;
    height: auto;
}

.arrow-img-main img {
    width: 100%;
    height: 100%;
}

.quote-text-main {
    margin-top: 18px;
}

.quote-text {
    display: none;
    opacity: 0;
}

.active-txt-container .quote-text {
    display: block;
    opacity: 1;
}

.quote-text p {
    max-width: 490px;
    font-family: 'Poppins', sans-serif;
    color: #000;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.profile-main-div {
    display: grid;
    grid-template-columns: repeat(7, minmax(50px, 150px));
    margin-top: 30px;
    align-items: center;
    justify-items: center;
    height: 150px;
}

.profileImg {
    width: 50px;
    height: 50px;
    overflow: hidden;
    transition: all 3s ease-in-out;
    cursor: pointer;
}

.profileImg div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #D9D9D9;
}

.profileOutCont.active {
    width: max-content;
    height: max-content;
    margin: 0 20px;
}

.profileOutCont.active .profileImg{
    width: max-content;
    height: max-content;
}

.active .profileImg div {
    width: 100px;
    height: 100px;
    border: 5px solid #000;
}

.profileImg h1{
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    margin-top: 10px;
}

.profileImg p {
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-align: center;
}

@media (max-width:800px) and (min-width:470px) {
    .testimonial-main-container {
        padding: 57px 38px;
        max-width: 600px;
    }

    .profile-main-div {
        grid-template-rows: repeat(4, minmax(50px, 130px));
        grid-template-columns: repeat(6, minmax(50px, 150px));
        height: 250px;
    }

    .profileOutCont.active {
        grid-row: 1/4;
        grid-column: 2/6;
    }

    .profileOutCont {
        grid-row: 4;
    }
}


@media (max-width:470px) {
    .testimonial-main-container {
        padding: 57px 38px;
        max-width: 326px;
    }

    .arrow-img-main {
        width: 44px;
        height: 37px;
    }

    .quote-text-main {
        margin-top: 15px;
    }

    .quote-text p {
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

    .profile-main-div {
        grid-template-rows: repeat(5, minmax(50px, 130px));
        grid-template-columns: repeat(5, minmax(50px, 150px));
        height: 250px;
    }

    .profileOutCont {
        grid-row: 4;
    }

    .profileOutCont:nth-child(5), .profileOutCont:nth-child(6), .profileOutCont:nth-child(7){
        grid-row: 5;
    }

    .profileOutCont:nth-child(1), .profileOutCont:nth-child(5) {
        grid-column: 2/3;
    }

    .profileOutCont:nth-child(2), .profileOutCont:nth-child(6) {
        grid-column: 3/4;
    }

    .profileOutCont:nth-child(3), .profileOutCont:nth-child(7) {
        grid-column: 4/5;
    }

    .profileOutCont.active {
        grid-row: 1/4;
        grid-column: 2/5;
    }

    .active .profileImg div {
        width: 80px;
        height: 80px;
    }

    .profileImg h1{
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-top: 5px;
    }

    .profileImg p{
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

    .profileImg div {
        width: 40px;
        height: 40px;
    }

    .profileImg {
        width: 40px;
        height: 40px;
    }
}  
    `;

    return cusStyle;
}

function changeEle(){
    const myTimer = setInterval(changeActive, 5000);
}

function changePro(x){
    i = x;
    changeActive()    
}

function changeActive(){
    let profCont = document.querySelectorAll(".profileOutCont");
    let profileImg = document.querySelectorAll(".profileImg");
    let txtOuterContainer = document.querySelectorAll(".text-outer-container");
    let txtIn = document.querySelectorAll(".quote-text");

    profileImg[activeCount].remove();
    profileImg[i].remove();
    txtIn[activeCount].remove();
    txtIn[i].remove();

    profCont[activeCount].appendChild(profileImg[i]);
    profCont[i].appendChild(profileImg[activeCount]);
    txtOuterContainer[i].appendChild(txtIn[activeCount]);
    txtOuterContainer[activeCount].appendChild(txtIn[i]);

    if(i==6){
        i = 0;
    }else if(i===activeCount-1){
        i=4;
    }else{
        i++;
    }
}

function  addElement(){
    document.getElementById("customDivContainer").appendChild(customElementStyle());
    document.getElementById("customDivContainer").appendChild(customElementinit());

    let profCont = document.querySelectorAll(".profileOutCont");
    profCont[3].classList.add("active");
    changeEle();


}

document.addEventListener('load',addElement())
