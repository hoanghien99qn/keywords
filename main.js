
function work() {
  let keywords = document.getElementById("keywords");
  document.getElementById("btn").innerText = "Done!!!"
  let str = keywords.value;
  
  let arr = str.split("Remove term: ")
  
  let total = arr.map(e => {
    let result ="";
    
    if (e == "Groupbuy Groupbuy\n") {
        result += "Groupbuy";
    } else if (e == "Instant Deliver Instant Deliver\n") {
        result += "Instant Deliver";
    } else {
      let temp = e.split(" ")
      let lastIndex = temp.lastIndexOf(`${temp[0]}`);
      if (lastIndex != 0) {
        temp.splice(lastIndex)
        
      }
      temp = temp.join(" ")
      result += temp
  
    }
    
    return result
    
  })
  total = total.join(", ")
  navigator.clipboard.writeText(total);
}

 
