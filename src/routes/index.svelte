<script lang="ts">
    import { page } from '$app/stores';
import Voice from '$lib/components/voice.svelte';
    import { speak } from '$lib/features/speech/speak';
    import { voiceStore } from '$lib/features/speech/voice.store';
import { onMount } from 'svelte';

    let langs;
// onMount(() => {
//     voiceStore.subscribe((v) => {
//         console.warn(v);
//         langs = v;
//     })
// });

</script>

<style lang="scss">
@import '@onivoro/browser-layout/index';
button {
    background-color: lime;
}
</style>

<div class="hero light blackice">
    <div>
        <h1>Voices</h1>
    </div>
</div>

<div class="pancake-stack">
    {#each $voiceStore as voice }
        <a class="pancake stroked" href={'lang/' + voice.lang + '/voice/' + voice.name}>
           <h1>{voice.name} {voice.lang}</h1>
        </a>
    {/each}
</div>