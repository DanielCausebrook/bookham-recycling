<script lang="ts">
    import "$lib/index";
    import items from "$lib/items";
    import extraInformationMd from "$lib/extra-information.md?raw";
    import showdown from 'showdown';

    const converter = new showdown.Converter({simpleLineBreaks: true});
</script>

<h1>Recycling in Bookham</h1>
<div class="items">
    {#each items as location}
        <div>
            <div>
                <div class="name">{location.name}</div>
                {#if location.details !== undefined}
                    <div class="details">{@html converter.makeHtml(location.details)}</div>
                {/if}
            </div>
            <div>
                {#each location.items as item}
                    <div>
                        {#if item.icon !== undefined}
                            <img src={item.icon} alt="Icon"/>
                        {/if}
                        <div>
                            <span class="name">{item.name}</span>
                            {#if item.details !== undefined}
                                <span class="details">{@html converter.makeHtml(item.details)}</span>
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>
<div class="extra-information">
    {@html converter.makeHtml(extraInformationMd)}
</div>
<style>
    :root {
        max-width: 600px;
        margin: 0 auto;
        font-size: 10pt;
        padding-bottom: 30px;
    }
    h1 {
        text-align: center;
    }
    .items {
        display: grid;
        grid: ". . ." / 1fr auto 1.2fr;
        gap: 10px 0;

        > div {
            grid-column: 1 / -1;
            display: grid;
            grid-template-columns: subgrid;
            background: hsl(0, 0%, 90%);
            padding-bottom: 3px;
            border-radius: 5px;
            overflow: hidden;

            > div:first-child {
                grid-column: 1 / span 1;
                grid-row: 1 / -1;
                display: flex;
                flex-flow: column nowrap;
                gap: 5px;
                padding: 8px 16px;
                background: hsl(0, 0%, 85%);

                > .name {
                    font-weight: bold;
                    font-size: 150%;
                }
                > .details {
                    font-size: 110%;

                    > :global(p) {
                        margin: 0;
                    }
                    > :global(hr) {
                        margin: 5px 0 3px;
                        opacity: 40%;
                    }
                }
            }

            > div:not(:first-child) {
                grid-column: 2 / -1;
                align-self: flex-start;
                display: grid;
                grid-template-columns: subgrid;
                gap: 5px;
                padding: 8px 16px;

                > div {
                    --height: 30px;
                    grid-column: 1 / -1;
                    display: grid;
                    grid-template-columns: subgrid;
                    grid-template-areas: "icon name";
                    gap: 10px;
                    min-height: var(--height);

                    > img {
                        align-self: start;
                        grid-area: icon;
                        width: var(--height);
                    }
                    > div {
                        align-self: center;
                        grid-area: name;
                        display: flex;
                        flex-flow: column nowrap;
                        > .name {
                            font-weight: 600;
                            font-size: 120%;
                        }
                        > .details {
                            > :global(p) {
                                margin: 0;
                            }
                        }
                    }
                }
            }
        }
    }
    .extra-information {
        margin-top: 40px;
    }
</style>