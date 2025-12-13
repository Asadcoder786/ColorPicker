function colorChange() {
    let red =Math.floor(Math.random()*256)
    let green =Math.floor(Math.random()*256)
    let blue =Math.floor(Math.random()*256)
    document.body.style.backgroundColor=
    "rgba("+red+","+green+","+blue+")"
}