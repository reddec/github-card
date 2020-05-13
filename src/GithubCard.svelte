<svelte:options tag="github-card"/>
{#await getInfo(repo)}
    <p>
        <a href="https://github.com/{repo}">https://github.com/{repo}</a>
        <br/>
        <small>loading...</small>
    </p>
{:then info}
    <div class="github" class:shadow={!flat} class:block={wide} class:inline-block={!wide}>
        <div class="github-card">
            {#if !plain}
                <div class="github-logo">
                    <a target="_blank" href="{info.html_url}">
                        <img alt="{info.owner.login} logo" src="{info.owner.avatar_url}"/>
                    </a>

                </div>
            {/if}
            <div class="github-content">
                <div class="github-head">
                    <div class="github-title">
                        <a target="_blank" href="{info.html_url}">{info.name}</a>
                    </div>
                    <div class="github-tags">
                        <div class="github-language">{info.language}</div>
                        <div class="github-license">{info.license.spdx_id}</div>
                    </div>
                </div>

                <div class="github-meta">
                    <a href="{info.html_url}" target="_blank">
                        <div class="github-badge">
                            <div class="github-badge-title">
                                <svg height="16" width="16" viewBox="0 0 200 200">
                                    <polygon points="100,10 40,198 190,78 10,78 160,198"
                                             style="fill:black;fill-rule:nonzero;"/>
                                </svg>
                                <span>Star</span>
                            </div>
                            <div class="github-badge-content">
                                {info.stargazers_count}
                            </div>
                        </div>
                    </a>
                    <a href="{info.html_url}" target="_blank">
                        <div class="github-badge">
                            <div class="github-badge-title">
                                <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                          d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>
                                </svg>
                                <span>Follow</span>
                            </div>
                            <div class="github-badge-content">
                                {info.subscribers_count}
                            </div>
                        </div>
                    </a>
                </div>
                <p class="github-description">
                    {info.description}
                </p>

            </div>
        </div>
        <div class="github-footer">
            <a class="github-author" href="{info.owner.html_url}" target="_blank">
                by {info.owner.login}
            </a>
            <a class="github-made" href="https://github.com/reddec/github-card">widget by reddec</a>
        </div>

    </div>

{:catch error}
    <p>
        <a href="https://github.com/{repo}">https://github.com/{repo}</a>
        <br/>
        <small>oops... load failed {error}</small>
    </p>
{/await}
<style>
    .github {
        all: initial;
    }
    .github {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        padding: 10px;
    }

    .inline-block {
        display: inline-block;
    }

    .block {
        display: block;
    }

    .shadow {
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, .12);
        flex-direction: column;
        box-sizing: border-box;
    }

    .github-card {
        display: flex;
    }

    .github-content {
        display: flex;
        width: 100%;
        flex-flow: column;
    }

    .github-logo {
        display: flex;
        flex-flow: column;
        text-align: center;
    }

    .github-logo img {
        width: 90px;
        height: 90px;
        margin-right: 5px;
    }

    .github-head {
        display: flex;
        justify-content: space-between;
    }

    .github-title {
        font-size: large;
        font-weight: bold;

    }

    .github-tags {
        display: flex;
    }

    .github-title a {
        text-decoration: none;
        color: inherit;
    }

    .github-title a:hover {
        text-decoration: underline;
    }

    .github-license {
        font-size: small;
        border-radius: 4px;
        background-color: lightgray;
        padding: 5px;
        margin: 2px;
    }

    .github-language {
        font-size: small;
        border-radius: 4px;
        background-color: darkcyan;
        color: white;
        padding: 5px;
        margin: 2px;
    }

    .github-description {
        margin: 1em 0 0;
    }

    .github-meta a {
        text-decoration: none;
        color: inherit;
    }

    .github-badge {
        display: inline-flex;
        vertical-align: middle;
        align-items: center;

        border: #dddddd solid 1px;
        border-radius: 4px;
    }

    .github-badge-title {
        border-radius: 4px 0 0 4px;
        display: inline-flex;
        padding: 0.3em;
        background-color: #dddddd;
    }

    .github-badge-title:hover {
        background-color: #cccccc;
    }

    .github-badge-title span {
        padding-right: 0.3em;
        padding-left: 0.3em;
    }

    .github-badge-content {
        padding: 0.3em;
    }

    .github-badge-content:hover {
        background-color: #cccccc;
    }

    .github-footer {
        padding-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .github-author {
        text-decoration: none;
        font-size: small;
        color: #333333;
    }

    .github-author:hover {
        text-decoration: underline;
    }

    .github-made {
        text-decoration: none;
        color: #999999;
        font-size: xx-small;
    }
</style>
<script>
    export let repo;
    export let wide = false;
    export let plain = false;
    export let flat = false;
    export let keepalive = 60 * 60 * 1000; // 1 HOUR

    async function getInfo(repo) {
        if (!repo)
            throw new Error('no repo defined');
        let saved = localStorage.getItem(repo);
        if (saved) {
            try {
                let {at, info} = JSON.parse(saved)
                if (Date.now() - at < keepalive) {
                    return info;
                }
            } catch (e) {
                console.error(e);
            }
        }
        const res = await fetch(`https://api.github.com/repos/${repo}`);
        if (!res.ok) {
            throw  new Error(res.statusText);
        }
        const info = await res.json();
        localStorage.setItem(repo, JSON.stringify({
            at: Date.now(),
            info: info
        }));
        return info;
    }
</script>