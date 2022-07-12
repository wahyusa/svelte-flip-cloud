<script lang="ts">
    let isFlipped = false;
    import { fade } from "svelte/transition";
    const handleFlip = () => {
        isFlipped ? isFlipped = false : isFlipped = true;
        return isFlipped
    };
</script>

<section class="relative font-sans text-lg text-cyan-500 font-medium bg-brand-card rounded-md shadow-lg p-6 max-w-xs mx-auto">
    {#if !isFlipped}
    <div in:fade>
        <h1>Hi Son!</h1>
    </div>
    {:else}
    <div in:fade>
        <h1>Are you alright ?</h1>
    </div>
    {/if}
    <div class="absolute right-0 flex justify-center top-0">
        <!-- svelte-ignore a11y-autofocus -->
        <button on:click="{ handleFlip }" class="focus:outline-none focus:ring-1 focus:ring-cyan-500 text-neutral-100 p-1.5 rounded-md block" autofocus>
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path></svg>
        </button>
    </div>
</section>
