function navBarItem() {
    let x = document.getElementById("myLinks");
    let z = document.getElementById("line");
    let y = document.getElementById("vertical")
    if (x.style.display === "flex") {
        x.style.display = "none";
        z.style.display = "none";
        y.style.display = "none";
    } else {
        x.style.display = "flex";
        z.style.display = "inherit";
        y.style.display = "flex";
    }
}