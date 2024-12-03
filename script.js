<script>
  function calculate() {
    // Get the values from the input fields
    const d = new Date();
    var year = d.getFullYear();
    var num1 = parseFloat(document.getElementById('n1').value);
    var num2 = parseFloat(document.getElementById('n2').value);
    var month = document.getElementById('op').value;
    var result;
    var total;
    
    if(isNaN(num2)){
	num2=0;}

    // Validate inputs
    if (isNaN(num1) ) {
      alert('Please enter valid values!');
      return;
    }

    // Perform the operation based on the selected month
    if (["January", "March", "May", "July", "August", "October", "December"].includes(month)) {
      total = 31 - num2;
      result = num1 * total;
    } else if (["April", "June", "September", "November"].includes(month)) {
      total = 30 - num2;
      result = num1 * total;
    } else if (month === "February") {
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        total = 29 - num2;
      } else {
        total = 28 - num2;
      }
      result = num1 * total;
    }

    // Display the result
    document.getElementById('result').value = result;
  }

  function reset() {
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('result').value = '';
  }
</script>
