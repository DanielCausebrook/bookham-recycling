import BatteryIcon from "@tabler/icons/outline/battery-automotive.svg";
import BinocularsIcon from "@tabler/icons/filled/binoculars.svg";
import BlisterPackIcon from "@tabler/icons/filled/pill.svg";
import MobilePhoneIcon from "@tabler/icons/outline/device-mobile.svg";
import SmallElectricalItem from "@tabler/icons/outline/plug.svg";
import GlassesIcon from "@tabler/icons/outline/eyeglass-2.svg";
import StampIcon from "@tabler/icons/outline/sticker-2.svg";
import TextilesIcon from "@tabler/icons/outline/sock.svg";
import ShoeIcon from "@tabler/icons/outline/shoe.svg";
import TetraPakIcon from "@tabler/icons/outline/milk.svg";
import SoftPlasticIcon from "@tabler/icons/outline/shopping-bag.svg";
import PlasticMailingWrapperIcon from "@tabler/icons/outline/mail-spark.svg";
import PaperCupIcon from "@tabler/icons/outline/cup.svg";

type Items = {
    name: string,
    details?: string,
    items: {
        name: string,
        icon?: string,
        details?: string,
    }[],
}[];

let items: Items = [
    {
        name: "Mole Valley Bin Collections",
        details:
            "Place each type of item in its own bag, next to your bins\n\n" +
            "---\n\n" +
            "[Mole Valley Waste Recycling](https://www.molevalley.gov.uk/waste-recycling/)",
        items: [
            { name: "Small Electricals", icon: SmallElectricalItem, details: "(Including phones)", },
            { name: "Batteries", icon: BatteryIcon, },
            { name: "Textiles", icon: TextilesIcon, },
        ]
    },
    {
        name: "St Nicolas Church",
        items: [
            { name: "Binoculars", icon: BinocularsIcon, },
            { name: "Blister Packs", icon: BlisterPackIcon, },
            { name: "Phones", icon: MobilePhoneIcon, },
            { name: "Plastic Mailing Wrappers", icon: PlasticMailingWrapperIcon, },
            { name: "Spectacles", icon: GlassesIcon, },
            { name: "Stamps", icon: StampIcon, },
        ]
    },
    {
        name: "Bookham Baptist Church",
        items: [
            { name: "Blister Packs", icon: BlisterPackIcon, },
        ]
    },
    {
        name: "Brackenburys",
        // details: "High Street",
        items: [
            { name: "Batteries", icon: BatteryIcon, },
        ]
    },
    {
        name: "Lower Shott Car Park",
        items: [
            { name: "Shoes", icon: ShoeIcon, },
            { name: "Tetra Pak", icon: TetraPakIcon, },
            { name: "Textiles", icon: TextilesIcon, },
        ]
    },
    {
        name: "Supermarkets",
        details: "e.g. Co-op",
        items: [
            { name: "Batteries", icon: BatteryIcon, },
            {
                name: "Soft plastics",
                icon: SoftPlasticIcon,
                details:
                    "These won't always tell you they are recyclable - e.g. crisp packets, fruit nets and cling film.\n\n" +
                    "[Check Here](https://www.coop.co.uk/environment/soft-plastics/packaging-list)"
            },
        ]
    },
    {
        name: "Some café chains",
        details:
            "e.g. Costa Coffee, Greggs, McDonald’s, Pret a Manger\n\n" +
            "---\n\n" +
            "[Cup Recycling Scheme](https://www.cuprecyclingscheme.co.uk/)",
        items: [
            { name: "Paper Cups", icon: PaperCupIcon, details: "Usually not recyclable due to their plastic lining"},
        ]
    }
];

export default items;
