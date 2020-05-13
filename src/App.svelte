<svelte:options tag="github-card-demo"/>

<div style="display: flex; justify-content: space-around">
    <div style="display: flex; flex-flow: column">
        <h2>Params</h2>
        <label>
            Repository (user/repo) in github<br/>
            <input type="text" bind:value="{repo}"/>
        </label>
        <div style="display: flex;flex-flow: row">
            <label>
                Shadow<br/>
                <input type="checkbox" bind:checked="{withShadow}"/>
            </label>
            <label>
                Logo<br/>
                <input type="checkbox" bind:checked="{withLogo}"/>
            </label>
            <label>
                Fallback link<br/>
                <input type="checkbox" bind:checked="{fallback}"/>
            </label>
            <label>
                Wide<br/>
                <input type="checkbox" bind:checked="{wide}"/>
            </label>
        </div>
        {#if repo}
            <h2>Preview</h2>
            <div>
                <GithubCard repo="{repo}" flat="{flat}" plain="{plain}" wide="{wide}"/>
            </div>
            <h2>Code for embedding</h2>
            <pre>
&lt;github-card repo="{repo}"{#if flat}&nbsp;flat="yes"{/if}{#if plain}&nbsp;plain="yes"{/if}{#if wide}&nbsp;wide="yes"{/if}&gt;
{#if fallback}
&lt;a href="https://github.com/{repo}"&gt;https://github.com/{repo}&lt;/a&gt;
{/if}
&lt;script defer src="https://cdn.jsdelivr.net/gh/reddec/github-card@1/dist/github-card.min.js"&gt;&lt;/script&gt;
&lt;/github-card&gt;
            </pre>
        {/if}
    </div>
</div>
<script>
    import GithubCard from './GithubCard.svelte'

    let repo = 'sveltejs/svelte';
    let withShadow = true;
    let withLogo = true;
    let fallback = true;
    let wide = true;

    $: flat = !withShadow;
    $: plain = !withLogo;

</script>
<style>
    * {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }
    input[type="text"] {
        width: 100%;
        padding: 5px;
        border: #999999 1px dashed;
    }

    label {
        font-weight: bold;
        padding: 1em;
    }

    pre {
        font-family: monospace;
        padding: 1em;
        background-color: #eeeeee;
    }
</style>