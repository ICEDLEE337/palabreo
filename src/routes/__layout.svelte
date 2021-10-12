<div>
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
    import { linx } from '$lib/linx';
    import { speak } from '$lib/speak';
    import {onDestroy} from 'svelte'

    let links = linx.map(name => ({name, slug: `/${name}/`}))
    let pageParams = '';

    onDestroy(page.subscribe(p => {
        console.warn(p)
        pageParams = p.params;
        speak(Window, Object.keys(p).join(', '))
    }))

</script>

<style lang="scss">
    @import '@onivoro/browser-layout/index';

    a {
        @extend .btn-1;
    }

    nav {
        border-bottom: solid 1px;
    }
</style>