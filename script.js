function getAdvice() {
  fetch(`https://api.adviceslip.com/advice`, {
    method: "GET",
  })
    .then((res) => {
      res.json().then((response) => {
        const { id, advice } = response.slip;
        document.getElementById("adviceId").innerText = id;
        document.getElementById("advice").innerText = advice;
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

document.querySelector("button").addEventListener("click", getAdvice);
