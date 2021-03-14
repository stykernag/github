(function () {
    let cl = document.getElementById('cl');

    document.onload = testFunc()

    cl.onchange = testFunc;
    
      function testFunc() {
      document.body.style.backgroundColor = document.getElementById('cl').value;
    }

    window.addEventListener('load', (event) => {
      document.body.style.overflowY = "visible";
      alert('Loaded');
    });



  })();