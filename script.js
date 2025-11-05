    const lengthSlider = document.getElementById("length");
    const lengthValue = document.getElementById("length-value");
    const generateBtn = document.getElementById("generate");
    const output = document.getElementById("password-output");

    // Update displayed length
    lengthSlider.addEventListener("input", () => {
      lengthValue.textContent = lengthSlider.value;
    });

    generateBtn.addEventListener("click", () => {
      const length = parseInt(lengthSlider.value);
      const includeLower = document.getElementById("lowercase").checked;
      const includeUpper = document.getElementById("uppercase").checked;
      const includeNumbers = document.getElementById("numbers").checked;
      const includeSymbols = document.getElementById("symbols").checked;

      let chars = "";
      if (includeLower) chars += "abcdefghijklmnopqrstuvwxyz";
      if (includeUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (includeNumbers) chars += "0123456789";
      if (includeSymbols) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

      if (chars === "") {
        output.textContent = "⚠️ Please select at least one option!";
        return;
      }

      let password = "";
      for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      output.textContent = password;
    });
