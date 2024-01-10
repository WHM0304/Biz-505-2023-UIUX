document.addEventListener("DOMContentLoaded", () => {
  const img_view = document.querySelector("div.image_view img");
  const img_list_box = document.querySelector("div.image_list");

  img_list_box.addEventListener("click", (e) => {
    /*
    div.img_list 에 click event 가 발생할때
    event.target 요소는 가장 안쪽의 img tag 가 된다.
    */
    const target = e.target;
    const img_src = target.src;
    // img tag 의 src 요소값을 출력해 보기
    console.log("SRC", img_src);
    img_view.src = img_src;
    img_view.computedStyleMap.opacity = 0;
    img_view.src = img_src;
    img_view.computedStyleMap.opacity = 1;
  });
});
