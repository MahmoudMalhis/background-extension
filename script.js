document
  .querySelectorAll("*")
  .forEach(
    (e) =>
      (e.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16))
  );
