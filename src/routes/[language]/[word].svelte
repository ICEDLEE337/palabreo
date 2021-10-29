<script lang="ts">
    import { page } from '$app/stores';
    import { speak } from '$lib/features/speech/speak';
    import { voiceStore } from '$lib/features/speech/voice';

    const click = (word, voice) => speak(window, word, 2, 1, voice);

</script>

lang { $page.params.language }

word { $page.params.word }

<table>

    {#each $voiceStore as voice }
        <tr>
            <td>
                {#if voice} name { voice.name}{/if}
            </td>
            <td>
                {#if voice} lang { voice.lang}{/if}
            </td>
            <td>
                <button on:click={() => click($page.params.word, voice)}>{ $page.params.word }</button>
            </td>
        </tr>
    {/each}
</table>
