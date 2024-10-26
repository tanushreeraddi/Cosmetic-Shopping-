
let offers=["https://images-static.nykaa.com/creatives/696a7db9-d710-4824-be70-f38bc82a1342/default.jpg?tr=cm-pad_resize,w-600","https://images-static.nykaa.com/creatives/6126792e-c0b9-4e6b-86e8-67acdb0d75d0/default.jpg?tr=cm-pad_resize,w-600","https://images-static.nykaa.com/creatives/6b66e239-107d-4d69-b95d-cbaefaae4396/default.jpg?tr=cm-pad_resize,w-600","https://images-static.nykaa.com/creatives/6e5b5ffc-962f-4435-a54f-7395c67fff7f/default.jpg?tr=cm-pad_resize,w-600","https://images-static.nykaa.com/creatives/ed9fadbb-6637-4c57-acd1-2b426dac3887/default.jpg?tr=cm-pad_resize,w-600","https://images-static.nykaa.com/creatives/279d427e-00e5-4268-a0b4-541711bb9656/default.jpg?tr=cm-pad_resize,w-600"]


display(offers)

function display(data){
document.querySelector("#offerCard").innerHTML=""
    data.map(function(el){
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=el
        div.append(img)
        document.querySelector("#offerCard").append(div)
    })
}