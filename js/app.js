let elText = document.querySelector(".site__clock");

function getDate(){
   let now = new Date();
   let year = now.getFullYear();
   let days = now.getMonth();
   let hour = now.getHours();
   let minute = now.getMinutes();
   let secund = now.getSeconds();
   let mileSecund = now.getMilliseconds()
   elText.innerHTML = `${year}`.padStart(2, "0") + ":" + `${days}`.padStart(2, "0") + ":" + `${hour}`.padStart(2, "0") + ":" + `${minute}`.padStart(2, "0") + ":" + `${secund}`.padStart(2, "0") + ":" + `${mileSecund}`.padStart(2, "0")
   setTimeout(getDate, 1000)
}

getDate();