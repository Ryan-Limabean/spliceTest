<template>
    
    <div> 
      
        <h1>CART</h1>
        <p v-for="(item,index) in items" :key="index">
            {{ item.name }}: {{ item.qty }}
        </p>
        
   </div>
</template>
   


<script>
var p1counter=0;
var p2counter=0;
var p3counter=0;
var p4counter=0;
export default {
    name: "menu-cart",
   
    data: () => {
         
        return {
              

            items: [
                {name:"Sweet nuts", qty:p1counter},
                {name:"Pasta sauces", qty:p2counter},
                {name:"Snacks", qty:p3counter},
                {name:"Hampers", qty:p4counter}
            ],


            }

        }
         
    }

</script>


