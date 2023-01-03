import {apiGet} from '../api'
const Home = {
    render: async function() {
      const paramUrl = new URLSearchParams(location.search)
      console.log(paramUrl.get('search'))
      const search = paramUrl.get('search')
        let data = await apiGet('/books')
        console.log(data)
        let categories = data.map(i => i.categories?.name)
        
        console.log(categories)
       
        categories = categories.filter(function(item, pos) {
            return categories.indexOf(item) == pos;
            
            
        })
      
        return /*html*/`
        <div class="duongdan flex">
        <p class="pr-2"> <a class="duongdantext" href="/">Trang chủ</a> </p>
        <p class="pr-2"> > </p>
        <p class="pr-2"> <a class="duongdantext" href="/">Nhà Sách Tiki</a> </p>
                </div>
        <div class="bd1">
        <div class="bd2">
        
        <div class="sizetext flex pl-3">
            <div class="w-1/3">
                <p class="sizeH pt-2">DANH MỤC SẢN PHẨM</p>
               
                <p class="">  ${categories.map(c =>/*html*/ `<li class="dmsp"><a class="" href="http://localhost:3000/"><button class="text-black text-primary py-2">${c}</button></a></li>`).join('')}</p>
              




              

                <p class="sizeH">ĐỊA CHỈ NHẬN HÀNG</p> 
                <p class="diachi">Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</p>
                <p class="text-sky-600 font-bold"> <a href="/">ĐỔI ĐỊA CHỈ 
                </a> </p>


                

                

                <p class="sizeH">DỊCH VỤ</p>  
                <p class="flex"><input type="checkbox"> <a class="flex" href="/"><img class="filter-icon pr-2 ml-2" width="76" height="24" src="https://salt.tikicdn.com/ts/upload/f9/ad/0e/a8a97f5ac7661d637942b42796893662.png">  Giao Siêu Tốc 2H 
                </a> </p>
                
                <p class="flex"><input type="checkbox"> <a class="flex" href="/"><img class="filter-icon pr-2 ml-2" width="76" height="24" src="https://salt.tikicdn.com/ts/upload/af/84/fc/2037c3b93a81767aed21358ebf3f8b8e.png">  Không Giới Hạn
                </a> </p>
                <p><input type="checkbox"> <a class="ml-1" href="/"> Rẻ Hơn Hoàn Tiền
                </a> </p>
                <p><input type="checkbox"> <a class="ml-1" href="/"> Trả Góp 0%
                </a> </p>
                
                

               
               
                <p class="sizeH">NƠI BÁN</p> 
                <p><input type="checkbox"> <a href="/"> Hà Nội
                </a> </p>
                <p><input type="checkbox"> <a href="/"> Hồ Chí Minh
                </a> </p>
                <p><input type="checkbox"> <a href="/"> Tây Ninh
                </a> </p>
                <p><input type="checkbox"> <a href="/"> Đà Nẵng
                </a> </p>
                <p><input type="checkbox"> <a href="/"> Thái Bình
                </a> </p>

                

                <p class="text-sky-600 font-semibold pt-2.5"> <a href="/">Xem thêm ▼
                </a> </p> 
    
             

                <p class="sizeH">ĐÁNH GIÁ</p> 
                
                <div class="flex">
                <p class="Stars__Wrapper-sc-1t6kjxa-0 hlnKeG" style="font-size: 12px; display: flex;">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                <p> <a href="/"> từ 5 sao
                </a> </p>  </p> 
                </div>

                <div class="flex">
                <p class="Stars__Wrapper-sc-1t6kjxa-0 hlnKeG" style="font-size: 12px; display: flex;">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#b8b8b8" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#b8b8b8" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#b8b8b8" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                <p> <a href="/"> từ 4 sao
                </a> </p>  </p> 
                </div>

                <div class="flex">
                <p class="Stars__Wrapper-sc-1t6kjxa-0 hlnKeG" style="font-size: 12px; display: flex;">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#b8b8b8" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#b8b8b8" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#b8b8b8" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#b8b8b8" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#b8b8b8" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#b8b8b8" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#b8b8b8" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                <p> <a href="/"> từ 3 sao
                </a> </p>  </p> 
                
            

                <br>

                </div>

                <p class="sizeH">GIÁ</p>
                <div class="filter-items1" data-view-id="search_selected_filter_container" data-view-content="{&quot;click_data&quot;:{&quot;trace_id&quot;:&quot;pwbiKishvGvtVguZ&quot;}}"><p class="item sticky ">Dưới 40.000</p> 
                </div>

                <div class="filter-items1" data-view-id="search_selected_filter_container" data-view-content="{&quot;click_data&quot;:{&quot;trace_id&quot;:&quot;pwbiKishvGvtVguZ&quot;}}"><p class="item sticky ">Từ 40.000 đến 120.000</p> </div>

                <div class="filter-items1" data-view-id="search_selected_filter_container" data-view-content="{&quot;click_data&quot;:{&quot;trace_id&quot;:&quot;pwbiKishvGvtVguZ&quot;}}"><p class="item sticky ">Từ 120.000 đến 280.000</p> 
                </div>

                <div class="filter-items1" data-view-id="search_selected_filter_container" data-view-content="{&quot;click_data&quot;:{&quot;trace_id&quot;:&quot;pwbiKishvGvtVguZ&quot;}}"><p class="item sticky ">Trên 280.000</p> 
                </div>

                <p class="text-gray-400">Chọn khoảng giá</p> 
                <div class="flex">
                <p><input  class="timgia" type="text" value="0"></p> 
                <p class="pr-2 pl-2"> - </p> 
                 <p ><input  class="timgia" type="text" value="0"></p> 
                </div> 
                
                
                <div class="pt-2 pb-3">
                <button class="apdung" type="submit">Áp dụng</button>
                </div> 
                
                
                <p class="sizeH">THƯƠNG HIỆU</p> 
                <p><input type="checkbox"> <a href="/"> CHONMUA 365
                </a> </p>
                <p><input type="checkbox"> <a href="/"> Deli
                </a> </p>
                <p><input type="checkbox"> <a href="/"> Stabilo
                </a> </p>
                <p><input type="checkbox"> <a href="/"> Pentel
                </a> </p>
                <p><input type="checkbox"> <a href="/"> Thiên Long
                </a> </p>

                

                <p class="text-sky-600 font-semibold pt-2.5"> <a href="/">Xem thêm ▼
                </a> </p> 
    
               

                <p class="sizeH">NHÀ CUNG CẤP</p> 
                <p><input type="checkbox"> <a href="/"> Nhà sách Fahasa
                </a> </p>
                <p><input type="checkbox"> <a href="/"> Tiki Trading
                </a> </p>
                <p><input type="checkbox"> <a href="/"> Minhhabooks
                </a> </p>
                <p><input type="checkbox"> <a href="/"> Times Books
                </a> </p>
                <p><input type="checkbox"> <a href="/"> info book
                </a> </p>

                

                <p class="text-sky-600 font-semibold pt-2.5"> <a href="/">Xem thêm ▼
                </a> </p> 
    
                

                <p class="sizeH">GIAO HÀNG</p> 
                <p><input type="radio"> <a href="/"> Hàng Nội Địa
                </a> </p>
                <p><input type="radio"> <a href="/"> Hàng Quốc Tế
                </a> </p>
                
                

                <br>
                <div class="clear-both">
                <div class="qcsp1">
                <a href="/">
                <img src="https://salt.tikicdn.com/ts/tka/70/47/9b/8b730ede1601338aa35a25ef7c823974.png" alt="banner"></div> </div> </a> 
                 <br>
                 <br>
            </div>
            <div class="bd3">
            <div class="w-full">
            <p class="sizeH1 pl-4">Nhà Sách Tiki</p> 
            
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/e8/9b/a5/1814421495c5c81524d54bd835e4f04a.png"  style="width: 861px; height: 286px; object-fit: cover;" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/99/b8/9a/13e0cf7163b2d66222cc317275f0c421.jpg"  style="width: 861px; height: 286px; object-fit: cover;" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/5b/53/7d/1f1b4b28542d72f4142616bead002f65.jpg" style="width: 861px; height: 286px; object-fit: cover;" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/30/1c/1a/b10881e82fa7c3e6b70d710854de2542.jpg" style="width: 861px; height: 286px; object-fit: cover;" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
   
  </button>
</div>

            
            <br> 

            <div class="grid grid-cols-9 ml-7">
                <div><a href="/">Phổ Biến</a></div> 
                <div><a href="/">Bán Chạy</a></div>
                <div><a href="/">Hàng Mới</a></div>
                <div><a href="/">Giá Thấp</a></div>
                <div><a href="/">Giá Cao</a></div>
                </div> 
                
                
                
                <div class="filter-items" data-view-id="search_selected_filter_container" data-view-content="{&quot;click_data&quot;:{&quot;trace_id&quot;:&quot;pwbiKishvGvtVguZ&quot;}}"><p class="item sticky "><img src="https://salt.tikicdn.com/ts/upload/f9/ad/0e/a8a97f5ac7661d637942b42796893662.png" height="24" width="56"></p><p class="item sticky "><img src="https://salt.tikicdn.com/ts/upload/af/84/fc/2037c3b93a81767aed21358ebf3f8b8e.png" height="24" width="76"></p></div>
                <div class="grid grid-cols-4">
                    ${data.map(item => /*html*/`
                        <a class="hvsp1" href="/books/${item.id}">
                            <img class="anhsach" src="${item.images[0].base_url}" alt="" width="263px" height="60px">
                            <img class="logosale1" width="70" src="https://salt.tikicdn.com/ts/upload/9f/32/dd/8a8d39d4453399569dfb3e80fe01de75.png">
                            <p class="tieudesach">${item.name}</p>
                            <div class="flex">
                <p class="Stars__Wrapper-sc-1t6kjxa-0 hlnKeG pl-2" style="font-size: 12px; display: flex;">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                <p class="sachdaban pl-2 pr-2">|</p>
                <p class="sachdaban">Đã bán ${item.quantity_sold ? item.quantity_sold.text : ""}</p>
                </div>
                            <p class="giasach">${item.current_seller.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} </p>
                            <div class="giasalesach"> <p class="chusale">-20% </p></div>  
                            <img class="logosale" width="140" src="https://salt.tikicdn.com/ts/upload/51/ac/cc/528e80fe3f464f910174e2fdf8887b6f.png">
                        </a>
                        
                    `).join('')}
                </div>
            
        </div>  

        <div class="soluongtrang">  
        <div class="grid grid-cols-6 float-right mr-24 mt-3">
        <div><a class="hoversltrang-section" href="/">1</a></div> 
        <div><a class="hoversltrang"href="/">2</a></div>
        <div><a class="hoversltrang" href="/">3</a></div>
        <div><a class="hoversltrang" href="/">4</a></div>
        <div><a class="hoversltrang"href="/">5</a></div>
        <div><a class="hoversltrang" href="/">►</a></div>
        </div>   
        </div>  

        <div class="spdaxem">
        <p class="sizeH1 pl-4">SẢN PHẨM BẠN ĐÃ XEM</p> 
        <p class="sanphamduocxem">KHÔNG CÓ SẢN PHẨM NÀO</p> 

        </div>   
        
        <div class="khoangtrang"> </div> 
        </div> 
        </div> <img src="https://salt.tikicdn.com/ts/tka/33/2f/c2/7325d3a41d7a1640d0e20fb9f79d4b6f.png" alt="banner">
        
        `
        
    }
}

export default Home