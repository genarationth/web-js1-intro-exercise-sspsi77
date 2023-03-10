function ChangeName() {
    let text;
    let name = prompt("What your name");
    if (name == null || name == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + name;
    }
    document.getElementById("inputName").innerHTML = text;
  }
