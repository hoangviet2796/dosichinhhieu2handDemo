fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
        let products = json.map(item => {
            return `<div class="col c-3 l-4 m-6">
        <a class="product__item" href="#">
            <div class="product__background-img"
                style="background-image: url(${item.image});">
            </div>
            <h4 class="product__title">${item.title}</h4>
            <div class="product__price">
                <span class="product__price--new">${item.price} $</span>
            </div>
            <div class="product__status">
                <span class="product__status-heart">
                    <!--<i class="far fa-heart"></i>-->
                    <i class="fas fa-heart"></i>
                </span>
                <span class="product__status-rate">
                    <i class="product__status-icon-gold fas fa-star"></i>
                    <i class="product__status-icon-gold fas fa-star"></i>
                    <i class="product__status-icon-gold fas fa-star"></i>
                    <i class="product__status-icon-gold fas fa-star"></i>
                    <i class=" fas fa-star"></i>
                </span>
            </div>
            <div class="product__origin">TP.Hồ Chí Minh</div>           
        </a>
    </div>`
        })
        var html = products.join("")
        document.querySelector('.productContainer').innerHTML = html
    });

