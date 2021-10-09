<div style="border: solid 1px blue">
    <nav class="row justify-content-space-around">
        {#each links as link}
            <div>
                <a href={link.slug}>{link.name}</a>
            </div>
        {/each}
    </nav>
    <slot></slot>
</div>

<script lang="ts">
    import { page } from '$app/stores';
    import { speak } from '$lib/speak';
    import {onDestroy} from 'svelte'

    let links = [
        {name: 'greek', slug: '/greek/'},
        {name: 'hebrew', slug: '/hebrew/'},
        {name: 'spanish', slug: '/spanish/'},
    ];

    onDestroy(page.subscribe(p => {
        console.warn(p)
        speak(Object.keys(p).join(', '))
    }))
</script>

<style lang="scss">
    @import '@onivoro/browser-layout/index';

    a {
        @extend .btn-1;
    }
</style>