const productArr = []

function getData(category) {
    fetch(`https://fakestoreapi.com/products/category/${category}?limit=4`)
        .then((res) => res.json())
        .then((json) => {
            let products = json.map(item => {
                return `<div class="col c-3 l-4 m-6">
                        <a class="product__item" href="#">
                            <div class="product__background-img"
                                style="background-image: url(${item.image});">
                            </div>
                            <h4 class="product__title">${item.title}</h4>
                            <span class="product_origin">${item.brand}</span>
                            <div class="product__price">
                                <span class="product__price--new">${item.price.toLocaleString('vi-VN')} VND</span>
                            </div>      
                        </a>
                    </div>`
            })
            var html = products.join("")
            document.querySelector(`[category="${category}"]`).childNodes[3].innerHTML = html
        });
}

getData("jewelery");
getData("men's clothing");
getData("women's clothing");
