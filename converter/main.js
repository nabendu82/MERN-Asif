document.getElementById("kgsInput").addEventListener("input", e => {
    // let kgs = document.getElementById("kgsInput").value;
    let kgs = e.target.value;
    document.getElementById("lbsOutput").innerText = kgs * 2.2046;
})