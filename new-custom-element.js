const  customElementinit =  ()=>{
    const nwDIv = document.createElement("div");
    nwDIv.classList.add('testimonial-main-container');
   
    return nwDIv;
}

const customElementStyle = ()=>{
    const cusStyle = document.createElement("style");
    cusStyle.innerHTML= `
    #customDivContainer {
        width:150px;
        height:150px;
        background-color:red;
    }
    `;

    return cusStyle;
}
document.getElementById("customDivContainer").appendChild(customElementStyle());
document.getElementById("customDivContainer").appendChild(customElementinit());
