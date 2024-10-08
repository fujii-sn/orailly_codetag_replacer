window.addEventListener("load", main, false);

function main() {
  const jsInitCheckTimer = setInterval(jsLoaded, 1000)
  function jsLoaded() {
    if (document.querySelector('div.page') != null) {
      clearInterval(jsInitCheckTimer);

      // window.alert('codeタグを変換しました')
      const codes = document.querySelectorAll('code')
      Array.from(codes).filter(code => !code.closest('pre')).forEach(code => code.outerHTML = `<span style="background-color: #EEF2F6;">${code.innerHTML}</span>`)
    }
  }
}
