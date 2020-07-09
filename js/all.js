var app = new Vue({
    el: '#app',
    data: {
        products: [
            {
                title: '素色釦皮革外套',
                category: 'Leather Jacket',
                content: '皮衣外套',
                description: '商品說明',
                imageUrl: "https://images.unsplash.com/photo-1563183927-071ac1d9aef6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1158&q=80",
                enabled: true,
                origin_price: 2000,
                price: 1499,
                unit: '單位',
                id: 1111111111111,
            },
            {
                title: '西裝外套(緊身)',
                category: 'suit',
                content: '西裝外套',
                description: '商品說明',
                imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                enabled: false,
                origin_price: 2500,
                price: 1999,
                unit: '單位',
                id: 22222222222,
            },
            {
                title: '特彈 Skinny Fit 百搭緊身牛仔褲',
                category: 'Jeans',
                content: '牛仔褲',
                description: '商品說明',
                imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                enabled: true,
                origin_price: 690,
                price: 590,
                unit: '單位',
                id: 333333333333,
            },
        ],
        editProducts: {},

    },
    methods: {
        // updateProduct if => 判斷新增或編輯中的產品有沒有 ID 存在，
        // 如果存在(使用編輯)，用 forEach 尋找原本產品列表中 ID 符合的產品，
        // 如果符合，用索引值找到位置後把它更換成編輯完成的產品。
        // else 如果沒有 ID 存在，代表使用的是新增產品，新增 ID 賦予產品並加入到產品列表中。
        // 除了 ID ，其餘的產品資訊都是透過 v-model 寫入 以及 @click 完成
        updateProduct() {
            if (this.editProducts.id) {
                const ID = this.editProducts.id;
                this.products.forEach((item, index)=>{
                    if (item.id === ID) {
                        this.products[index] = this.editProducts;
                    }
                });
            } else {
                const ID = new Date().getTime();
                this.editProducts.id = ID;
                this.products.push(this.editProducts);
                // console.log(this.editProducts);
            };
            this.editProducts = {};
            $('#createdItem').modal('hide');
        },
        createdProduct() {
            this.editProducts = {};
            $('#createdItem').modal('show');
        },
        editProduct(item) {
            this.editProducts = Object.assign({}, item);
            $('#createdItem').modal('show');
        },
        removeProduct(item) {
            this.editProducts = Object.assign({}, item)
            $('#removeItem').modal('show');
        },
        confirmDelete() {
            if (this.editProducts.id) {
                this.products.forEach((item, i)=>{
                    if (item.id === this.editProducts.id) {
                        this.products.splice(i, 1);
                        this.tempProduct = {};
                    }
                });
            }
            $('#removeItem').modal('hide');
        },
    },
});