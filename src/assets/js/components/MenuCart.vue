<template>
    
    <div> 
        <h1>IMA CART</h1>

        <p v-for="item in items">
            {{ item.name }}: {{ item.qty }}
        </p>
    </div>
</template>


<script>
export default {
    name: "menu-cart",

    data: () => {
        return {
            items: [
                {name:"Test", qty:3},
                {name:"Test", qty:3},
                {name:"Test", qty:3},
                {name:"Test", qty:3},
            ]
        }
    }
}
</script>


