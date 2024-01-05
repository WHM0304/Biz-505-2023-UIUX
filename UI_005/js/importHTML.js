const importHTML = (tag, file) => {
  // 클래스의 객체선언 후 초기화와 유사하다.
  //fileInputStream 과 유사하다. 파일을 전체로 읽어온다.
  const xhr = new XMLHttpRequest();
  xhr.open("GET", file, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      tag.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
};
