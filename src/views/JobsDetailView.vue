<template lang="">
    <div>
        Hello {{slug}}
    </div>
</template>
<script>
export default {
    props: ['slug'],
    mounted(){
        // console.log(slug)
        // console.log(this.$route)
    }
    
}
</script>
<style lang="">
    
</style>