import { apiGet } from "../api";
import { rerender } from "../utils/rerender";
import { remove } from "../api";
const Admin = {
    render: async function () {
        const data = await apiGet('/books')
        console.log(data)
        return /*html*/`
            <div class="container mx-auto"> <br>
            <span class="tieudead">Quản trị danh sách sản phẩm</span> <br><br>
            <div>
                <table class="bangquantri">
                    <thead>
                    <tr class="bg-blue-300">
                    <th class="canlead1">STT</th>
                    <th class="canlead1">Name</th>
                    <th class="canlead1">Giá</th>
                    <th class="canlead1">Ảnh</th>
                    <th class="canlead1">Tác giả</th>
                    <th class="canlead1">Tùy chọn</th>
                </tr>
                    </thead>
                    <tbody>
                    ${data.map(function (book, index) {
            return /*html*/`
                        <tr>
                        <td class="canlead2"><p class="sttad">${index + 1}</p></td>
                        <td class="canlead2"><p class="namead"><a class="hover:text-primary" href="/admin/books/${book.id}">${book.name}</a></p></td>
                        <td class="canlead2"><p class="sttad">${book.current_seller.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p></td>
                        
                        <td class="canlead2 flex flex-wrap w-full items-start">${book.images.map(image => `<img class="w-1/3" src="${image.base_url}">`).join('')}</td>
                        
                        <td class="canlead2">
                        ${(book?.authors || ['']).map(function(item) {
                            const authorName = item?.name || '';
                            return authorName;
                        })}
                        </td>
                        <td  class="canlead2">
                        <button class="btn btn-remove btn-danger" data-id=${book.id}>Xóa</button>
                        </td>
                        </tr>`
        }).join('')}
                    </tbody >
                </table >
            </div> 
            </div>`
    },
    afterRender() {
        const btns = document.querySelectorAll('table .btn'); 
        for (let btn of btns) {
            // lấy thuộc tính data-id của button
            const id = btn.dataset.id;
            console.log(id)
            // event click
            btn.addEventListener('click', async function () {
                if (btn.classList.contains('btn-remove')) {
                    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
                    if (confirm) {
                        const { data } = await remove(id);
                        rerender('app', Admin);
                        if (data) {
                            console.log('Xóa thành công');
                        }
                    }
                }
            });
        }
    },
    
}

export default Admin