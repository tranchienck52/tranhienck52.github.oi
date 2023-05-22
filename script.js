//-----THIẾT LẬP NÚT SUBMIT-----
function handleSubmit() {
  // lấy giá trị của input email và chuyển sang in thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // lấy element của thẻ p hiện thị lỗi
  const errorEmail = document.getElementById("error-email");
  // điều kiện để là một email
  const checkMail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  console.log("check value email", emailValue);
  // dùng match để kiểm tra với email vừa đăng nhập
  const checkEmail = emailValue.match(checkMail);
  console.log("email", checkEmail);
  //lấy phần chứa thông tin user
  const sectionContent = document.querySelector("#personal-info .info1");
  console.log("check section", sectionContent);
  //lấy element để kiểm soát submit
  const submitControl = document.querySelector(".submit-email");
  if (checkEmail) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng email";
  }
}

//Hiện nút View-more khi di chuyển chuột vào
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}

//Ẩn nút khi rời chuột ra
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  if (!viewMore.classList.value.includes("view-less")) {
    viewMore.style.display = "none";
  }
}

// Hiển thị nội dung khi kich vào nút
function handleViewMore(element) {
  // Chọn vào phần tử cha
  const parentElement = element.closest(".parent");
  // Chọn phần tử button
  const viewMore = parentElement.querySelector(".control-view");
  // Chọn phần tất cả phần tử con cần ẩn
  const sectionContent = parentElement.querySelectorAll(".section-content");

  // Hiển thị nội dung
  if (viewMore.classList.value.includes("view-more")) {
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });
    // chuyển nút view-more sang view-less
    viewMore.classList.remove("view-more");
    viewMore.classList.add("view-less");
    viewMore.innerHTML = "View less";
  } else {
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("view-less");
    viewMore.classList.add("view-more");
    viewMore.innerHTML = "View more";
  }
}
