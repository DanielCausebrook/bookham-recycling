<script lang="ts">
    import "$lib/index";
    import items from "$lib/items";
    import extraInformationMd from "$lib/extra-information.md?raw";
    import showdown from 'showdown';
    import RightArrow from "@tabler/icons/outline/arrow-right.svg";

    const converter = new showdown.Converter({simpleLineBreaks: true});

    type Resources = {
        name: string,
        url: string,
        details: string,
    }[];
    const furtherResources = [
        {
            name: "Leatherhead Community Recycling Centre",
            url: "https://www.surreycc.gov.uk/waste-and-recycling/community-recycling-centres/leatherhead#can",
            details: "You can bring:\n\n" +
                "> aerosols, black bag waste, bottle tops, cans, car batteries, cardboard, carpet, CDs, books, DVDs, cooking oil, engine oil, fluorescent tubes, foil, furniture, garden waste, gas bottles, glass bottles and jars, gypsum based products/plasterboard, hardcore and rubble, hard plastics, household batteries, household/garden chemicals, large electricals (e.g. fridges), mattresses, metal, mobile phones, small electricals, paint, paper and card, plastic bottles, printer cartridges, spectacles, Tetra Pak cartons, textiles, TVs and monitors, tyres, vapes, water filters, wood/timber\n\n" +
                "Revive re-use shop: sell pre-owned items, supporting local charities"
        },
        {
            name: "Mole Valley District Council – Waste, Recycling and Bins",
            url: "https://www.molevalley.gov.uk/waste-recycling/",
            details: "Information about recycling in household collections, general recycling guidance, and various local Bring Sites (e.g. textiles, Terracycle)."
        },
        {
            name: "Recycling Symbols PDF",
            url: "https://digitalcontent.api.tesco.com/v2/media/ghs-mktg/9aead218-4f5d-4879-8b9d-eea66280f657/TESCO-4R-Recycling+explained.pdf?icid=4rs_zone_recycling_symbols",
            details: "Sometimes there are misconceptions around what the symbols on products mean.  This PDF explains many of the common recycling symbols."
        },
        {
            name: "BRA Recycling Search Tool",
            url: "https://recycle.bookhamresidents.org.uk/",
            details: "Recycling search tool for Bookham and the surrounding area."
        },
        {
            name: "Plastic Free Bookham",
            url: "https://plasticfreebookham.blogspot.com/",
            details: "Advice on alternatives to plastic products and how to recycle plastics, including various national recycling schemes for objects like toiletries, make-up, and pens."
        },
        {
            name: "Recycle Now",
            url: "https://www.recyclenow.com/",
            details: "A recycling search tool to check what can be recycled locally, and plenty of recycling tips!"
        },
    ]
</script>

<h1>Recycling in Bookham</h1>
<article class="items">
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
</article>
<h2>Further Resources</h2>
<article class="resources">
    {#each furtherResources as resource}
            <div>
                <a href={resource.url}>
                    <div class="name">{resource.name}<img src={RightArrow} alt="RightArrow"></div>
                </a>
                <div class="details">{@html converter.makeHtml(resource.details)}</div>
            </div>
    {/each}
</article>
<article class="extra-information">
    {@html converter.makeHtml(extraInformationMd)}
</article>
<style>
    :root {
        max-width: 600px;
        margin: 0 auto;
        font-size: 10pt;
        padding-bottom: 30px;
        --pill-content-bg: hsl(130, 30%, 95%);
        --pill-title-bg: hsl(130, 30%, 70%);
        --pill-title-font-size: 150%;
        background: hsl(130, 30%, 90%);
    }
    h1 {
        text-align: center;
    }
    :global(p) {
        margin: 0;
    }
    :global(hr) {
        margin: 5px 0 3px;
        border-color: hsl(130, 30%, 20%);
        opacity: 40%;
    }
    article {
        margin-bottom: 40px;
    }
    .items {
        display: grid;
        grid: ". . ." / 1fr auto 1.2fr;
        gap: 10px 0;

        > div {
            grid-column: 1 / -1;
            display: grid;
            grid-template-columns: subgrid;
            background: var(--pill-content-bg);
            border: 1px solid var(--pill-title-bg);
            border-radius: 5px;
            overflow: hidden;

            > div:first-child {
                grid-column: 1 / span 1;
                grid-row: 1 / -1;
                display: flex;
                flex-flow: column nowrap;
                gap: 5px;
                padding: 8px 16px 11px;
                background: var(--pill-title-bg);

                > .name {
                    font-weight: bold;
                    font-size: var(--pill-title-font-size);
                }
                > .details {
                    font-size: 110%;
                }
            }

            > div:not(:first-child) {
                grid-column: 2 / -1;
                align-self: flex-start;
                display: grid;
                grid-template-columns: subgrid;
                gap: 5px;
                padding: 8px 16px 11px;

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
    .resources {
        display: flex;
        flex-flow: column nowrap;
        gap: 16px;

        > div {
            overflow: hidden;

            > a {
                text-decoration: none;
                color: inherit;
                &:hover {
                    filter: brightness(90%);
                }
            }
            > a > .name {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
                padding: 5px 10px;
                background: var(--pill-title-bg);
                border-radius: 5px;
                font-size: var(--pill-title-font-size);
                font-weight: bold;
                text-decoration: underline;
            }
            > .details {
                margin: 0 5px 3px;
                padding: 8px 16px;
                border-left: 1px solid var(--pill-title-bg);
                background: var(--pill-content-bg);
            }
        }
    }
    @media print {
        :root {
            background: none;
        }
        .items {
            break-after: page;
        }
    }
</style>