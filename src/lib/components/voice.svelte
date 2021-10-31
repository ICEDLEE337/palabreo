<article class="card hero light blackice">
    <h3>{name}</h3>
    <h3>Language: {lang}</h3>
    <hr />
    <slot></slot>
</article>

<script lang="ts">
    export let name;
    export let lang;
</script>

<style lang="scss">
    @import '@onivoro/browser-layout/index';
</style>