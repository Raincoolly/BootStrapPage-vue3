<template>
    <n-grid :x-gap="12" :y-gap="8" :cols="4">
        <n-grid-item class="itemBox">
           <n-card title="带封面的卡片">
                <template #cover>
                    <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
                </template>
                <p class="small">Bootstrap 网站实例</p>
                <p class="bottom">Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。</p>
            </n-card> 
        </n-grid-item>
    </n-grid>
    
</template>

<script setup>

</script>

<style scoped>
:deep() .itemBox{
    margin: 10px 20px;
}
:deep().n-card {
    max-width: 252px;
}
:deep().n-card .n-card-cover img {
    display: block;
    width: 252px;
    height: 150px;
}
:deep().n-card > .n-card-header {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: var(--n-title-font-size);
    padding: var(--n-padding-top) var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
    font-size: 24px;
    text-decoration: none;
    padding-bottom: 10px;
}
:deep().n-card > .n-card-header .n-card-header__main {
    font-weight: var(--n-title-font-weight);
    transition: color .3s var(--n-bezier);
    flex: 1;
    color: #337ab7 !important;
}
:deep().n-card > .n-card__content{
    height: 130px;
}
:deep().n-card > .n-card__content .small{
    padding: 0 !important;
}
:deep().n-card > .n-card__content .bottom {
    margin: 10px 0 10px;
}
</style>