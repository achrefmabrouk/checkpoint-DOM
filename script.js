function totprice(){
    const price = document.getElementsByClassName('prixarticle')
    let sum=0
    for (let i=0 ; i < price.length ; i++){
        sum += parseInt(price[i].innerHTML) 
    } 
    let tot = document.getElementById('total-price')
    tot.innerHTML = sum 
}
 const btnP=document.getElementsByClassName('btn-plus')
for (let i=0 ; i<btnP.length;i++){
    btnP[i].addEventListener('click',function(e){
        let qte = e.target.nextElementSibling
        qte.innerHTML= +(qte.innerHTML)+1
        let PU =e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
       let PA = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
        PA.innerHTML= +(PU.innerHTML)* parseInt(qte.innerHTML)
        totprice()
    })
}
const btnM = document.getElementsByClassName('btn-moins')
for( let i=0 ; i<btnM.length ;i++){
    btnM[i].addEventListener('click',function(e){ 
        let qte = e.target.previousElementSibling
        if(qte.innerHTML>0){
        qte.innerHTML= +(qte.innerHTML) -1}
let PU = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
let PA =e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
PA.innerHTML = +(qte.innerHTML) * parseInt(PU.innerHTML)
totprice()
    })
}
const btnFav = document.getElementsByClassName('favoris')
for(let el of btnFav){
        el.addEventListener('click',function (){
      if(el.style.color=='black'){
        return el.style.color = 'red'
      }
      else {
        return el.style.color = 'black'
      }
        })
}
const del = document.getElementsByClassName('delete')
for (let supp of del){
supp.addEventListener('click',function(e){
    e.target.parentElement.remove()
    totprice()
})
}