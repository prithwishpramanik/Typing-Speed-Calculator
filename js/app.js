var timeleft = 60;
document.getElementById("button").addEventListener("click", function (e){
    var x = document.getElementById("exampleFormControlTextarea1");
    var y = document.getElementById("count");
    var r = document.getElementById("result");
    var z = document.getElementById("button");

    if (x.style.display === "none" && y.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "none";
    }

    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("count").innerHTML = "Finished";
            x.style.display = "none";
            r.style.display = "block";

        } else {
            document.getElementById("count").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;

        let words = document.getElementById("exampleFormControlTextarea1").value;
        words.replace(/(^\s*)|(\s*$)/gi," ");
        words.replace(/[ ]{2,}/gi," ");
        words.replace(/\n/,"\n");
        let a=words.match(/(\w+)/g).length;


        document.getElementById("result").innerHTML = a;






    }, 1000)


})

