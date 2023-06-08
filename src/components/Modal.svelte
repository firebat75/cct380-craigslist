<script>
    export let showModal; // boolean
    import { createEventDispatcher } from "svelte";
    let dialog; // HTMLDialogElement

    const dispatch = createEventDispatcher();

    function update() {
        dispatch("message", {
            text: "Hello!",
        });
    }

    $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
    bind:this={dialog}
    on:close={() => (showModal = false)}
    on:click|self={() => dialog.close()}
>
    <div on:click|stopPropagation>
        <slot name="header" />
        <hr />
        <slot />
        <hr />
        <!-- svelte-ignore a11y-autofocus -->
        <div class="btns">
            <button autofocus on:click={() => dialog.close()}>close</button>
            <button on:click={update}>add category</button>
        </div>
    </div>
</dialog>

<style>
    .btns {
        display: flex;
    }
    .btns button {
        margin-left: auto;
        margin-right: auto;
    }
    dialog {
        max-width: 32em;
        border-radius: 0.2em;
        border: none;
        padding: 0;
    }
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
    }
    dialog > div {
        padding: 1em;
    }
    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }
    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    button {
        display: block;
    }
</style>
