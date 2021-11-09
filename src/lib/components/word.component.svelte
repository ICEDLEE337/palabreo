<article class="card">
    <h3>{word}</h3>
    <div class="row justify-content-space-around">
        <slot></slot>
    </div>
</article>

<script lang="ts">
    export let word: IWord;
    export let lang;
</script>

<style lang="scss">
    @import '@onivoro/browser-layout/index';
</style>