const brands = [
    {
        name: 'Seiko',
        category: 'Bán chạy'
    },
    {
        name: 'Gucci',
        category: 'Bán chạy'
    },
    {
        name: 'Skagen',
        category: 'Bán chạy'
    },
    {
        name: 'Dior',
        category: 'Bán chạy'
    },
    {
        name: 'Fossil',
        category: 'Bán chạy'
    },
    {
        name: 'Marc Jacobs',
        category: 'Bán chạy'
    },
    {
        name: 'Skagen',
        category: 'Khuyên dùng'
    },
    {
        name: 'Michael kors',
        category: 'Khuyên dùng'
    },
    {
        name: 'Burberry',
        category: 'Khuyên dùng'
    },
    {
        name: 'Dkny',
        category: 'Khuyên dùng'
    },
    {
        name: 'Kate Spade',
        category: 'Khuyên dùng'
    },
    {
        name: 'Coach',
        category: 'Khuyên dùng'
    },
    {
        name: 'Calvin Klein',
        category: 'Swiss made'
    },
    {
        name: 'Movado',
        category: 'Swiss made'
    },
    {
        name: 'Longines',
        category: 'Swiss made'
    },
    {
        name: 'Burberry',
        category: 'Swiss made'
    },
    {
        name: 'Blvlgari',
        category: 'Swiss made'
    },
    {
        name: 'Fendi',
        category: 'Swiss made'
    },
    {
        name: 'Renoma',
        category: 'Swiss made'
    },
]

const brandCategory = ['Khuyên dùng', 'Bán chạy', 'Swiss made']

let renderCategory = brandCategory.map(category => {
    return `<div class="brandsContainer"><a href="" class="submenu_bar--list--text submenu_bar--list--text--title">${category}</a>
    <ul class="submenu_bar--element--list" category="${category}"></ul></div>
    `
})

var stringCategory = renderCategory.join("")
document.querySelector(`[node="Brands"]`).innerHTML = stringCategory

brandCategory.forEach(category => {
    let renderBrands = brands.map(item => {
        if (item.category == category) {
            return `
            <li class="submenu_bar--list">
                <a href="" class="submenu_bar--list--text">${item.name}</a>
            </li>`
        }
    })
    var html = renderBrands.join("")
    document.querySelector(`[category="${category}"]`).innerHTML = html
})