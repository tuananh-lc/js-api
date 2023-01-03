const Header = {
    render: function () {
        return /*html*/`
        <div class="bgHeader">
        <div class="container mx-auto flex justify-between items-center">
            <img class="logo w-12 md:w-28" src="../../assets/tikilogo.jpg" alt="logo"> 
            <ul class="flex">
            <input class="search ml-32" type="text" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."> 
            <span class="btnSearch"> <img class="logos w-12 pr-1" src="../../assets/icons.png" alt="logo"> <a class="hvtimkiem" href="/">Tìm Kiếm</a></span> 
                <li><a href="/"><img class="logouser" src="../../assets/usericon.png" alt="logo"></a>
                <a class="dndk text-white block px-4 hover:text-white" href="/">Đăng Nhập / Đăng Ký<br><p>Tài Khoản ▼</p></a></li> 
                <li class="flex"><a href="/"><img class="logoshoping" src="../../assets/admin.png" alt="logo"></a>
                <a class="dndk1 text-white block px-4 hover:text-white mt-3" href="http://localhost:3000/admin">Admin</a></li>
                
            </ul>
            
      </div>
    
      </div>
        `
    }
}

export default Header