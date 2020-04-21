cssBtn.onclick= () =>{
  const ajax = new XMLHttpRequest();
  ajax.open('get', '/style.css');
  ajax.onreadystatechange=()=> {
    if(ajax.readyState === 4 && ajax.status === 200){
      const style = document.createElement('style')
      style.innerHTML=ajax.response;
      document.head.appendChild(style);
    }
  }
  ajax.send();
}
jsBtn.onclick= () =>{
  const ajax = new XMLHttpRequest();
  ajax.open('get', '/2.js');
  ajax.onreadystatechange=()=> {
    if(ajax.readyState === 4 && ajax.status === 200){
      const script = document.createElement('script');
      script.innerHTML = ajax.response;
      document.body.appendChild(script);
    }
  }
  ajax.send();
}
htmlBtn.onclick= () =>{
  const ajax = new XMLHttpRequest();
  ajax.open('get', '/3.html');
  ajax.onreadystatechange=()=> {
    if(ajax.readyState === 4 && ajax.status === 200){
      const div = document.createElement('div');
      div.innerHTML = ajax.response;
      document.body.appendChild(div);
      // const script = document.createElement('script');
      // script.innerHTML = ajax.response;
      // document.body.appendChild(script);
    }
  }
  ajax.send();
}
xmlBtn.onclick= () =>{
  const ajax = new XMLHttpRequest();
  ajax.open('get', '/4.xml');
  ajax.onreadystatechange=()=> {
    if(ajax.readyState === 4 && ajax.status === 200){
      // dom对象
      const domXml = ajax.responseXML;
      const text = domXml.getElementsByTagName('warning')[0].textContent.trim()
    }
  }
  ajax.send();
}
jsonBtn.onclick= () =>{
  const ajax = new XMLHttpRequest();
  ajax.open('get', '/5.json');
  ajax.onreadystatechange=()=> {
    if(ajax.readyState === 4 && ajax.status === 200){
      const json = JSON.parse(ajax.response);
      const div = document.createElement('div');
      div.innerHTML = json.name;
      document.body.appendChild(div);
    }
  }
  ajax.send();
}
