import { apiGet } from "../../api"

const BookDetail = {
    render: async function(param) {
        let data = await apiGet('/books')
        const books = await apiGet(`/books/${param.data.id}`)
        console.log(books);
        return /*html*/`
        
        <div class="duongdan flex">
        <p class="pr-2"><a class="duongdantext" href="/">Trang chủ</a> </p>
        <p class="pr-2">> <a class="duongdantext" href="/">Nhà Sách Tiki</a> </p>
        <p class="pr-2"> > <a class="duongdantext" href="/">${books.categories.name}</a> </p>
        <p class="pr-2"> > <a class="duongdantext" href="/">${books.name}</a> </p>
        </div>
                <div class="bd1">
                <div class="bd2">
                   
                
                
                  
            <div class="chitietsanpham flex">
            <div>
                <img class="anhsachchitiet" src="${books.images[0].base_url}" alt="" width="653px">
                <p class="flex pl-3" style="margin-top:20px;">Chia sẻ đến:
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-facebook.svg" alt="" style="margin-left:35px;margin-right:5px;">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-messenger.svg" alt="" style="margin-right:5px;">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-pinterest.svg" alt="" style="margin-right:5px;">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-twitter.svg" alt="" style="margin-right:5px;">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-copy.svg" alt="" style="margin-right:5px;">
            </p>
            </div>
                <div class="chiale">
                    <div class="motasachngan">${books.short_description}</div>
                    <div class="tieudesachchitiet">${books.name}</div>

                    <div class="flex pl-2">
                    <p class="Stars__Wrapper-sc-1t6kjxa-0 hlnKeG" style="font-size: 12px; display: flex;">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M50v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                    
                    <p class="sachdaban pl-2 pr-2"></p>
                    <p class="sachdaban">(Xem ${books.rating_average} đánh giá)</p>

                    <p class="sachdaban pl-2 pr-2">|</p>
                    <p class="sachdaban">Đã bán ${books.quantity_sold ? books.quantity_sold.text : ""}</p>
                    </div>
                    <div class="banggiatien">

                    <div class="flex">
                    <div class="giasachchitiet pr-4">${books.current_seller.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
                    <div class="giasalechitiet pr-4"> ${books.original_price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
                    <div class="phantramsalechitiet"> -20% </div>
                    
                    </div>

                    <div class=""><img class="logosale1 pb-3" width="150" src="https://salt.tikicdn.com/ts/upload/51/ac/cc/528e80fe3f464f910174e2fdf8887b6f.png">
                    </div>
                    <div class="thuongchitiet"><p class="thuongchitiettext">Thưởng lên đến 7,21 ASA ≈ 3.510 Xu</p>
                    </div>
                    </div>


                    <div class="khoangcach pt-3">
                    </div>

                    <div class="salegiamgia">
                    <div class="giamgia">
                    <p class="pt-2">14 Mã Giảm Giá</p>
                    </div>
                    <div class="flex">
                    <p class="phieugiamgia">Giảm 20K</p>
                    <p class="phieugiamgia">Giảm 200K</p>
                    <p class="phieugiamgia">Giảm 2Tr</p>
                    <p class="nextphieugiamgia">></p>
                    </div>
                    </div>

                    <div class="khoangcach pt-3">
                    </div>

                    <div class="diachichitiet flex">
                    <p class="pt-2 pr-1 cursor-pointer">Giao đến <span class="gachchan"> Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</span> - </p> 
                    <p class="doidiachichitiet pt-2 cursor-pointer">Đổi địa chỉ</p>
                    </div>
                    <div class="khoangcach pt-3">
                    </div>
                    <p class="textslsp" class="">Số Lượng</p>
                    <div class="flex pb-6 pl-3">
                    <button class="btnsl" type="submit">-</button>
                    <input class="soluongsp" type="text" value="1">
                    <button  class="btnsl" type="submit">+</button>
                    </div>
                    <div class="canlebtn">
                    <button  class="btnsl1" type="submit">Chọn Mua</button>
                    </div>
            </div>
            </div>
            <div class="khoangtrang"></div> 
            <div class="bd2">


            <p class="sizeH2 pl-4 pt-3">Sản Phẩm Tương Tự</p>
            

            
              
            

            <div class="sanphamtuongtu grid grid-cols-6 pl-2 pb-4">
           
            </div>
            </div> 
            
            <div class="khoangtrang"></div> 
            <div class="bd1sp">
            <div class="bdsp">
           
            <p class="sizeH2 pl-4 pt-3">Thông Tin Chi Tiết</p>
            <table class="table">
            <thead>
             
            </thead>
            <tbody class="table-group-divider">
            ${books.specifications[0].attributes.map(function (book) {
              return /*html*/`
              <tr>
                <th scope="row">${book.name}</th>
                <td>${book.value}</td>
              </tr>
              
              `
        }).join('')}
            </tbody>
          </table>
          
          </div> 
            
            
            <div class="khoangtrang"></div> 

            <div class="bd1sp">
            <div class="bdsp">

            <p class="sizeH2 pl-4">Mô Tả Sản Phẩm</p>
            <div class="motasp">${books.description}</div>
            </div> 
            </div> 

            <div class="khoangtrang"></div> 

            <div class="bd2">
            <p class="sizeH2 pl-4">Đánh Giá - Nhận Xét Từ Khách Hàng</p>
           
            
            </div> 

            <div class="khoangtrang"></div> 

            <div class="bd2">
            <p class="sizeH2 pl-4">Khám Phá Thêm</p>
            </div> 
            </div> 
            <div class="bd2">



            <div class="sanphamtuongtu grid grid-cols-6 pl-2 pb-4">
            ${data.map(item => /*html*/`
            <a href="/books/${item.id}">
                <img class="anhsach1" src="${item.images[0].base_url}" alt="">
                <img class="logosale2" width="145" src="https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png">
                <p class="tieudesach1">${item.name}</p>
                <div class="flex">
    <p class="Stars__Wrapper-sc-1t6kjxa-0 hlnKeG pl-2" style="font-size: 12px; display: flex;">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
    
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" ></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
    
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
    
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
    
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" ></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
    <p class="sachdaban pl-2 pr-2">|</p>
    <p class="sachdaban1">${item.quantity_sold ? item.quantity_sold.text : "Đã bán 0"}</p>
    </div>
                <p class="giasach">${item.current_seller.price} ₫</p>
                <div class="giasalesach1"> <p class="chusale1">   -20% </p></div>  
                <img class="logosale" width="140" src="https://salt.tikicdn.com/ts/upload/51/ac/cc/528e80fe3f464f910174e2fdf8887b6f.png">
            </a>
            
        `).join('')}
    
            </div>
            </div>
            <div class="khoangtrang"></div> 

            <div class="spdaxem">
            <p class="sizeH2 pl-4">Sản Phẩm Bạn Đã Xem</p> 
            <div class="sanphamdaxem1 grid grid-cols-5 pl-2 pb-4">
           
        

        </div>   
           
        `
    } 
}

export default BookDetail