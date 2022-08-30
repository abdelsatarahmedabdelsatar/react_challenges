const Challenge1 = () => {
  const getOutput = (k, a) => {
    var arr1 = [];
    arr1 = a;
    var arr2 = [];

    var temp = 0;
    for (let i = 0; i < k; i++) {
      temp = Math.min.apply(Math, arr1);
      arr2.push(temp);
      var index = arr1.indexOf(temp);
      arr1.splice(index, 1);
    }

    let num = arr2[arr2.length - 1] - arr2[0];
    console.log("output : ", num, arr2);
  };

  var arr = [30, 100, 300, 200, 1000, 10, 20];
  getOutput(3, arr);

  return (
    <>
      <h1>output in the console</h1>
    </>
  );
};

export default Challenge1;
