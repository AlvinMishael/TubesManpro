console.log(document.getElementById("pilih-buku").value);
const dropDown = document.getElementById('pilih-buku'); 
 dropDown.addEventListener('change', change);

function change(e){
    console.log("method")
    console.log(document.getElementById("pilih-buku").value);
    if(document.getElementById("pilih-buku").value == 1 ){
        console.log(1);
        document.getElementById("gambarBuku").src="Book 1.jpeg";
        document.getElementById("gambarBuku").className="mt-8 h-10"
        console.log(document.getElementById("gambarBuku").className)

    }
    else if (document.getElementById("pilih-buku").value == 2){
        console.log(2);
        document.getElementById("gambarBuku").src="Book 2.jpg";
        document.getElementById("gambarBuku").className="mt-8 h-10"
        console.log(document.getElementById("gambarBuku").className)
    }
    else if (document.getElementById("pilih-buku").value == 3){
        console.log(3);
        document.getElementById("gambarBuku").src="Book 3.jpg";
        document.getElementById("gambarBuku").className="mt-8 h-10"
        console.log(document.getElementById("gambarBuku").className)
    }
    else if (document.getElementById("pilih-buku").value == 4){
        console.log(4);
        document.getElementById("gambarBuku").src="Book 4.webp";
        document.getElementById("gambarBuku").className="mt-8 h-10"
        console.log(document.getElementById("gambarBuku").className)
    }
    else if (document.getElementById("pilih-buku").value == 5){
        console.log(5);
        document.getElementById("gambarBuku").src="Book 5.jpeg";
        document.getElementById("gambarBuku").className="mt-8 h-10"
        console.log(document.getElementById("gambarBuku").className)
    }
    else{
        document.getElementById("gambarBuku").src="allBook copy.png";
    }
} 
