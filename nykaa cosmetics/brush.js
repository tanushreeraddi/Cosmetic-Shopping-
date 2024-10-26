let data=[
  {
  image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/d/1/d123951716170027456_3.jpg",
  name:"Bobbi Brown Vitamin Enriched Face Base (Moisturizer & Primer) - Full Size",
  price: 7450,
  rating:"4.7(23)",
  id:"Face Brush"
},

{
  image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/0/70ea50bMACXX00001499_01.jpg",
  name:"M.A.C MACximal Matte Lipstick - Ruby Woo",
  price: 2550,
  rating:"4.5(23)",
  id:"Face Brush"
},

{
  image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/d/1/d1db285607710096257_1.jpg",
  name:"Smashbox Halo Healthy Glow All-In-One Tinted Moisturizer Foundation With SPF 25 Travel Size (Skin Tint) - Light Neutral",
  price: 1690,
  rating: "5(2)",
  id:"Eye Shadow Brush"
},

{
  image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/5/55bd6c65060542727532_a1.jpg",
  name:"Charlotte Tilbury Airbrush Flawless Setting Spray",
  price: 3700,
  rating: "5(2)",
  id:"Eye Shadow Brush"
},

{
  image:"https://images-static.nykaa.com/media/catalog/product/c/f/cfb0109LANEI00000397_1.jpg",
  name:"LANEIGE Lip Balm Trio",
  price: 1913,
  rating: "4.8(42)",
  id:"Face Brush"
},

{
  image:"https://images-static.nykaa.com/media/catalog/product/3/a/3a01c08885190822133.png",
  name:"PIXI FortifEYE Firming Under-Eye Patches with Collagen, Retinol & Caffeine",
  price: 2800,
  rating: "5(3)",
  id:"Eye Shadow Brush"
},

{
  image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/9/792889e773602655816_01.jpg",
  name:"M.A.C Hyper Real Serumizer Skin Balancing Serum With Niacinamide, Hyaluronic Acid & Ceramides",
  price: 5900,
  rating: "4.4(5)",
  id:"Eye Shadow Brush"
},

{
  image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/9/9/99376f1887167388505_01.jpg",
  name:"Estee Lauder Daywear Anti-Oxidant 72H-Hydration Sorbet Creme Moisturiser with SPF 15 for Pollution",
  price: 5400,
  rating: "4.8(6)",
  id:"Eye Shadow Brush"
},

{
  image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/4/7/472f2bbC29HS100A14_1GH.jpg",
  name:"L'Occitane Almond Supple Skin Oil",
  price: 4600,
  rating: "4.8(26)",
  id:"Foundaton Brush"
},

{
  image:"https://images-static.nykaa.com/media/catalog/product/2/f/2fd84433348901553254_1.jpg",
  name:"DIOR Sauvage Shower Gel",
  price: 5200,
  rating: "4.9(24)",
  id:"Face Brush"
},

{
  image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/9/a91cd16690251052905_1.jpg",
  name:"Jo Malone London Peony & Blush Suede",
  price: 4300,
  rating: "4.9(15)",
  id:"Face Brush"
},

{
  image:"https://images-static.nykaa.com/media/catalog/product/f/d/fdbc2ce3360372058861_3.jpg",
  name:"Giorgio Armani Acqua Di Gio Eau De Toilette",
  price: 4720,
  rating: "5(1)",
  id:"Brush Combo"
},

]
display(data)

// ------Filter Function-----------
document.querySelector("#filt").addEventListener("change", myFilt)

function myFilt(){
  let x=document.querySelector("#filt").value
  if(x=="remove"){
      display(data)
  }else{
  let m=data.filter(function(el){
      return el.id==x
      })
      display(m)
      }
}
// ------Sort Function-----------
document.querySelector("#srt").addEventListener("change", mySort)

function mySort(){
  let y=document.querySelector("#srt").value
  if(y=="remove"){
      display(data)
  }else if(y=="asc"){
      let n=data.sort(function(a,b){
          return (a.price-b.price)
      })
      display(n)
  }else if(y=="desc"){
      let o=data.sort(function(a,b){
          return (b.price-a.price)
      })
      display(o)
      }
}

// -------display Function-------

function display(data){
  document.querySelector("#mainProd").innerHTML=""
data.map(function(el,i){
  let x=data.length
  document.querySelector("#cnt").innerText=x
  let div=document.createElement("div")
  let img=document.createElement("img")
  img.src=el.image
  let p1=document.createElement("p")
  p1.innerText=el.name
  let p2=document.createElement("p")    
  p2.innerText= "Rs"+" "+el.price
  let p3=document.createElement("p")
  p3.innerText="Rating :-"+" "+el.rating
  let btn=document.createElement("button")
  btn.innerText="ADD TO CART"
  btn.addEventListener("click", function(){
      addTocart(el)
  })
  div.append(img,p1,p2,p3,btn)
  document.querySelector("#mainProd").append(div)
})
}

let aCart=JSON.parse(localStorage.getItem("cart")) || []

function addTocart(el){
aCart.push(el)
localStorage.setItem("cart",JSON.stringify(aCart))
}