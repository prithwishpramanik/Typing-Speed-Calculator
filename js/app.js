

var timeleft = 60;

document.getElementById("button").addEventListener("click", function (e){
    let name = document.getElementById("fname").value;
    let age = document.getElementById("age").value;
    let gender=document.querySelector('input[name="gender"]:checked').value;



    var form = document.getElementById("form");
    var msg = document.getElementById("msg");
    var x = document.getElementById("exampleFormControlTextarea1");
    var y = document.getElementById("count");
    var r = document.getElementById("result");
    var z = document.getElementById("button");
    var g=document.getElementById("gutter");

    if (x.style.display === "none" && y.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "none";
        form.style.display = "none";
        msg.style.display = "none";

    }

    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("count").innerHTML = "Your Result";
            x.style.display = "none";
            r.style.display = "block";
            g.style.display = "block"
            document.getElementById("Name").innerHTML=name;
            document.getElementById("Age").innerHTML=age;
            document.getElementById("Gender").innerHTML=gender;



        } else {
            document.getElementById("count").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;

        let words = document.getElementById("exampleFormControlTextarea1").value;
        words.replace(/(^\s*)|(\s*$)/gi," ");
        words.replace(/[ ]{2,}/gi," ");
        words.replace(/\n/,"\n");
        let a=words.match(/(\w+)/g).length;




        document.getElementById("result").innerHTML ="Number Of Words/second: "+a;

      if(a>5 || a<=10){
          document.getElementById("progress").style.width= "10%";
      }else if(a>10 || a<=20){
          document.getElementById("progress").style.width= "20%";
      }else if(a>20 || a<=30){
          document.getElementById("progress").style.width= "30%";
      }else if(a>30 || a<=40) {
          document.getElementById("progress").style.width = "40%";
      }else if(a>40 || a<=50) {
          document.getElementById("progress").style.width = "50%";
      }else if(a>50 || a<=60) {
          document.getElementById("progress").style.width = "60%";
      }else if(a>60 || a<=70) {
          document.getElementById("progress").style.width = "70%";
      }
      else if(a>70 || a<=80) {
          document.getElementById("progress").style.width = "80%";
      }else if(a>80 || a<=90) {
          document.getElementById("progress").style.width = "90%";
      }else{
          document.getElementById("progress").style.width = "100%";

      }




    }, 1000)





})

//document.getElementById("button").innerText="block";


