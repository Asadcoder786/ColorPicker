

let heading = document.querySelector("#heading")


function colorChange() {
    let red =Math.floor(Math.random()*256)
    let green =Math.floor(Math.random()*256)
    let blue =Math.floor(Math.random()*256)
      let mixture=document.body.style.backgroundColor=
    "rgba("+red+","+green+","+blue+")"
    heading.innerHTML=`The Color is : ${mixture}`
}
