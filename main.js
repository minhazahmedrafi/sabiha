let funClick = () => {
  let para = document.getElementById("count");

  function* myFun(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }
  const gen = myFun(1, 1000);
  let fun2 = (start, end) => {
    let arr = [];
    for (let k = start; k <= end; k++) {
      arr.push("I love you " + gen.next().value + " Sabiha");
    }
    console.log(arr);
    for (let j = start; j < end; j++) {
      const para1 = document.createElement("p");
      const node = document.createTextNode(`${arr[j]}`);
      para1.appendChild(node);
      para.appendChild(para1);
    }
  };
  fun2(1, 1000);
};
