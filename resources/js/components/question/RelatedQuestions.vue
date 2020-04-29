<template>
    <div>
        <span class="font-related-questions"><b>Related questions</b></span>
        <v-divider class="mt-1" ></v-divider>
        <div class="mt-3"
        v-for="n in 10"
        :key="n"
        >         
            <p id="related-question"><a href="#" class="a-related">Lorem aaaaaa ipsum dolor sit amet consectetur, adipisicing elit. Amet, laudantium fugit optio?</a></p>                   
        </div>  
    </div>   
</template>

<script>
export default {

}
</script>

<style>

    .font-related-questions {
        font-size: 16px;
        color: #333333;
    }

    .a-related {
        text-decoration: none;
    }

    .a-related:hover {
        text-decoration: underline;
    }

    #related-question {
        font-size: 13px;
        text-align: justify;
    }

</style>
