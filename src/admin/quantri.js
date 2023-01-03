import { apiGet, apiPut } from "../api"

const ManagementBook = {
    render: async function(param) {
        const book = await apiGet(`/books/${param.data.id}`)
        console.log(book)
        return /*html*/`
            <div class="container mx-auto">
                <h2 class="text-2xl text-primary-dark mt-5">Admin / Chỉnh sửa thông tin sản phẩm</h2>
                <div class="flex space-x-4">
                    <div class="flex-none w-1/3">
                        <div class="flex flex-col">
                            <label class="font-bold">Tên sản phẩm:</label>
                            <input id="book-management-name" class="w-full px-3 py-2 border border-primary" value="${book.name}">
                        </div>
                        <div class="flex flex-col">
                        <label class="font-bold">Giá sản phẩm:</label>
                        <input id="book-management-original_price" class="w-full px-3 py-2 border border-primary" value="${book.original_price}">
                    </div>
                    <div class="flex flex-col">
                        <label class="font-bold">Giá sản phẩm đã sale:</label>
                        <input id="book-management-current_seller" class="w-full px-3 py-2 border border-primary" value="${book.current_seller.price}">
                    </div>
                    <div class="flex flex-col">
                        <label class="font-bold">Tác giả:</label>
                        <input id="book-management-authors" class="w-full px-3 py-2 border border-primary" value="${book.authors?.[0].name}">
                    </div>
                    <div class="flex flex-col">
                        <label class="font-bold">Danh mục sản phẩm:</label>
                        <input id="book-management-categories" class="w-full px-3 py-2 border border-primary" value="${book.categories.name}">
                    </div>
                    <div class="flex flex-col">
                    <label class="font-bold">Mô tả ngắn:</label>
                    <textarea id="book-management-short_description" name="book-management-short_description" rows="5" cols="80">
                   ${book.short_description}
                    </textarea>
                </div>
                <div class="flex flex-col">
                    <label class="font-bold">Mô tả:</label>
                    <textarea id="book-management-description" name="book-management-description" rows="9" cols="80">
                   ${book.description}
                    </textarea>
                </div>

               
                        <button class="bg-primary py-3 px-2 mt-8 text-white" id="book-management-update">Cập nhật sản phẩm</button>
                    </div>
                    <div class="grow grid grid-cols-3 gap-4">
                        ${book.images.map(function(image) {
                            return /*html*/`<img src="${image.base_url}">`
                        }).join('')}
                    </div>
                </div>
            </div>
        `
    },
    afterRender: async function (param) {
        const id = param.data.id;
        const newData = await apiGet(`/books/${id}`)
        const updateBtn = document.querySelector('#book-management-update')
        const nameElement = document.querySelector('#book-management-name')
        const original_priceElement = document.querySelector('#book-management-original_price')
        const current_sellerElement = document.querySelector('#book-management-current_seller')
        const categoriesElement = document.querySelector('#book-management-categories')
        const short_descriptionElement = document.querySelector('#book-management-short_description')
        const descriptionElement = document.querySelector('#book-management-description')
        const authorsElement = document.querySelector('#book-management-authors')
        
        

        updateBtn.addEventListener('click', function () {
            newData.name = nameElement.value
            newData.original_price = Number(original_priceElement.value)
            newData.current_seller.price = Number(current_sellerElement.value)
            newData.categories.name = categoriesElement.value
            newData.short_description = short_descriptionElement.value
            newData.description = descriptionElement.value
            newData.authors[0].name = authorsElement.value
         
            apiPut(`/books/${id}`, newData)
                .then(res => alert('Cập nhật dữ liệu thành công'))
                .catch(console.log)
        })
    }
}

export default ManagementBook;