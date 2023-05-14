window.onload = () => {
  const nao = document.getElementById("nao");
  const foo = document.getElementById("foo");

  foo.style.display = "none"

  nao.addEventListener("mouseover", () => {
    let top = getRandomArbitrary(0, 80);
    let left = getRandomArbitrary(0, 80);
    
    nao.style.position = "absolute";
    nao.style.top = `${top}%`;
    nao.style.left = `${left}%`;

    foo.style.display = "block"
  })

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }  
}