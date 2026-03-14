function Dangky(x)
{
	var Tendangnhap,Email,Matkhau;
	Tendangnhap=x.textTendangnhap.value;
	Email=x.textEmail.value;
	Matkhau=x.textMatkhau.value;
	if(Tendangnhap=="")
		{
			alert("Tên đăng nhập không được để trống!!!");
			x.textTendangnhap.focus;
		}
	else if(isNaN(Tendangnhap)==false)
		{
			alert("Tên đăng nhập phải là ký tự!!!");
			x.textTendangnhap.focus;
		}
	else if(Email=="")
		{
			alert("Email không được để trống!!!");
			x.textEmail.focus;
		}
	else if((Email.indexOf("@")==-1)||(Email.indexOf(".")==-1))
		{
			alert("Bạn đã nhập sai Email!!!");
			x.textEmail.focus;
		}
	else if(Matkhau=="")
		{
			alert("Bạn chưa nhập mật khẩu!!!");
			x.textMatkhau.focus;
		}
	else
		alert("Bạn đã đăng ký thành công!!!");
}
function Dangnhap(x)
{
	var Tendangnhap,Email,Matkhau;
	Tendangnhap=x.textTendangnhap.value;
	Email=x.textEmail.value;
	Matkhau=x.textMatkhau.value;
	if(Tendangnhap=="")
		{
			alert("Tên đăng nhập không được để trống!!!");
			x.textTendangnhap.focus;
		}
	else if(isNaN(Tendangnhap)==false)
		{
			alert("Tên đăng nhập phải là ký tự!!!");
			x.textTendangnhap.focus;
		}
	else if(Email=="")
		{
			alert("Email không được để trống!!!");
			x.textEmail.focus;
		}
	else if((Email.indexOf("@")==-1)||(Email.indexOf(".")==-1))
		{
			alert("Bạn đã nhập sai Email!!!");
			x.textEmail.focus;
		}
	else if(Matkhau=="")
		{
			alert("Bạn chưa nhập mật khẩu!!!");
			x.textMatkhau.focus;
		}
	else
		alert("Bạn đã đăng nhập thành công!!!");
}

window.onscroll = function () {
  let btn = document.getElementById("topBtn");
  if (document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function topBack() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}