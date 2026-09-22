function ex001() {
  alert("ex001");
}
function ex002() {
  alert("ex002");
}
function ex003() {
  alert("ex003");
}
function ex004() {
  alert("ex004");
}
function ex005() {
  alert("ex005");
}
function ex006() {
  alert("ex006");
}
function ex007() {
  alert("ex007");
}
function ex008() {
  alert("ex008");
}
function ex009() {
  alert("ex009");
}
function ex010() {
  alert("ex010");
}
function ex011() {
  alert("ex011");
}
function ex012() {
  alert("ex012");
}
function ex013() {
  alert("ex013");
}
function ex014() {
  alert("ex014");
}
function ex015() {
  alert("ex015");
}
function ex016() {
  alert("ex016");
}
function ex017() {
  alert("ex017");
}
function ex018() {
  alert("ex018");
}
function ex019() {
  alert("ex019");
}
function ex020() {
  alert("ex020");
}
function ex021() {
  alert("ex021");
}
function ex022() {
  alert("ex022");
}
function ex023() {
  alert("ex023");
}
function ex024() {
  alert("ex024");
}
function ex025() {
  alert("ex025");
}
function ex026() {
  alert("ex026");
}
function ex027() {
  alert("ex027");
}
function ex028() {
  alert("ex028");
}
function ex029() {
  alert("ex029");
}
function ex030() {
  alert("ex030");
}
function ex031() {
  alert("ex031");
}
function ex032() {
  alert("ex032");
}
function ex033() {
  alert("ex033");
}
function ex034() {
  alert("ex034");
}
function ex035() {
  alert("ex035");
}
function ex036() {
  alert("ex036");
}
function ex037() {
  alert("ex037");
}
function ex038() {
  alert("ex038");
}
function ex039() {
  alert("ex039");
}
function ex040() {
  alert("ex040");
}
function ex041() {
  alert("ex041");
}
function ex042() {
  alert("ex042");
}
function ex043() {
  alert("ex043");
}
function ex044() {
  alert("ex044");
}
function ex045() {
  alert("ex045");
}
function ex046() {
  alert("ex046");
}
function ex047() {
  alert("ex047");
}
function ex048() {
  alert("ex048");
}
function ex049() {
  alert("ex049");
}
function ex050() {
  alert("ex050");
}
function ex051() {
  alert("ex051");
}
function ex052() {
  alert("ex052");
}
function ex053() {
  alert("ex053");
}
function ex054() {
  alert("ex054");
}
function ex055() {
  alert("ex055");
}
function ex056() {
  alert("ex056");
}
function ex057() {
  alert("ex057");
}
function ex058() {
  alert("ex058");
}
function ex059() {
  alert("ex059");
}
function ex060() {
  alert("ex060");
}
function ex061() {
  alert("ex061");
}

const btns = document.querySelectorAll(".exercise");

btns.forEach((btn) => {
  const num = btn.querySelector(".letter").textContent.padStart(3, "0");
  btn.addEventListener("click", () => {
    const funcName = `ex${num}`;
    if (typeof window[funcName] === "function") {
      window[funcName]();
    } else {
      console.error(`Função ${funcName} não existe!`);
    }
  });
});
