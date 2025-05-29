function showMessage() {
    alert("This is a survey to see what the most popular favorite color is.");
}

document.getElementById("colorForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from submitting and refreshing the page

      const colorInput = document.getElementById("color").value;
      
      // Process the input (in this case, display it on the page)
      document.getElementById("output").textContent = "Your input, '" + colorInput + "' was added to the database. Thank you!";
      });
