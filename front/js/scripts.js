// map init
$(document).ready(function() {
    const $background = $('#background');
    maps.forEach(function(map) {
        const html = "<div id=" + map.name + "><img src=" + map.img + "><p class=mapname>" + map.name + "</p></div>"; 
        $background.append(html);
        const $mapElem = $('#' + map.name);
        $mapElem.css({
            left: map.left + "%", 
            top: map.top + "%",
        });
    });
})

// panzoom element
$(document).ready(function() {
    const $panzoom = $('#background').panzoom();
    $panzoom.panzoom("option", {
        increment: 0.05,
        minScale: 1
    });
    $panzoom.parent().on('mousewheel.focal', function( e ) {
        e.preventDefault();
        let delta = e.delta || e.originalEvent.wheelDelta;
        let zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
        $panzoom.panzoom('zoom', zoomOut, {
          animate: false,
          focal: e
        });
    });
})

// map algorithm
const $runmaps = $('.runmaps');
const $findmaps = $('.findmaps');
const update = function updateRunAndFindMaps(){
    $('.runmaps > img').remove();
    $('.findmaps > img').remove();
    for (let i = 0; i < order.length; i++){
        const tier = order[i];
        if (!tier.completed) {
            tier.indexes.forEach(function(index) {
                $runmaps.append("<img src=" + maps[index].img + " alt=" + maps[index].name + ">");
            });
            if (tier.tier !== 2.1) { // 2.1 is LAST IN ARRAY
                order[i+1].indexes.forEach(function(index) {
                    $findmaps.append("<img src=" + maps[index].img + " alt=" + maps[index].name + ">");
                });
            }
            break;
        }
    }
}

// map toggling
$(document).ready(function() {
    $('#background > div').click(function() {
        $(this).find("img").toggle();
        update();
    })
})

//GET DATA FROM mongodb
//maps.forEach()... map.done = SERVER_VAL

//tier {indexes, true/false}
const order = [
    {
        tier: 1.1,
        completed: false,
        indexes: [0, 1],
    },
    {
        tier: 2.1,
        completed: false,
        indexes: [2, 3],
    }
]

const maps = [
    {
        name: "Beach",
        tier: 1,
        img: "https://d1u5p3l4wpay3k.cloudfront.net/pathofexile_gamepedia/1/1a/Beach_Map_%28War_for_the_Atlas%29_inventory_icon.png",
        left: 82.990,
        top: 15.791,
        done: false,
    },
    {
        name: "Dungeon",
        tier: 1,
        img: "https://d1u5p3l4wpay3k.cloudfront.net/pathofexile_gamepedia/7/72/Dungeon_Map_%28War_for_the_Atlas%29_inventory_icon.png",
        left: 16.546,
        top: 13.357,
    },
    {
        name: "Graveyard",
        tier: 1,
        img: "https://d1u5p3l4wpay3k.cloudfront.net/pathofexile_gamepedia/d/d8/Graveyard_Map_%28War_for_the_Atlas%29_inventory_icon.png",
        left: 16.422,
        top: 81.711,
    },
    {
        name: "Lookout",
        tier: 1,
        img: "https://d1u5p3l4wpay3k.cloudfront.net/pathofexile_gamepedia/1/13/Lookout_Map_%28War_for_the_Atlas%29_inventory_icon.png",
        left: 83.115,
        top: 81.268,
    },/*
    {
        name: "Alleyways",
        tier: 2,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Arid Lake",
        tier: 2,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Desert",
        tier: 2,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Flooded Mine",
        tier: 2,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Marshes",
        tier: 2,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Pen",
        tier: 2,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Arcade",
        tier: 3,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Burial Chambers",
        tier: 3,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Cage",
        tier: 3,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Cells",
        tier: 3,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Excavation",
        tier: 3,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Iceberg",
        tier: 3,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Leyline",
        tier: 3,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Peninsula",
        tier: 3,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Port",
        tier: 3,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Springs",
        tier: 3,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Canyon",
        tier: 4,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Chateau",
        tier: 4,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "City Square",
        tier: 4,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Courthouse",
        tier: 4,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Gorge",
        tier: 4,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Grotto",
        tier: 4,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Lighthouse",
        tier: 4,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Relic Chambers",
        tier: 4,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Strand",
        tier: 4,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Volcano",
        tier: 4,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Ancient City",
        tier: 5,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Barrows",
        tier: 5,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Channel",
        tier: 5,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Conservatory",
        tier: 5,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Haunted Mansion",
        tier: 5,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Ivory Temple",
        tier: 5,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Maze",
        tier: 5,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Spider Lair",
        tier: 5,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Sulphur Vents",
        tier: 5,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Toxic Sewer",
        tier: 5,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Academy",
        tier: 6,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Atoll",
        tier: 6,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Ashen Wood",
        tier: 6,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Cemetary",
        tier: 6,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Fields",
        tier: 6,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Jungle Valley",
        tier: 6,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Mausoleum",
        tier: 6,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Phantasmagoria",
        tier: 6,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Thicket",
        tier: 6,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Underground Sea",
        tier: 6,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Wharf",
        tier: 6,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Arachnid Nest",
        tier: 7,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Bazaar",
        tier: 7,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Bone Crypt",
        tier: 7,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Coral Ruins",
        tier: 7,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Dunes",
        tier: 7,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Gardens",
        tier: 7,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Lava Chamber",
        tier: 7,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Ramparts",
        tier: 7,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Residence",
        tier: 7,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Tribunal",
        tier: 7,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Underground River",
        tier: 7,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Armoury",
        tier: 8,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Courtyard",
        tier: 8,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Geode",
        tier: 8,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Infested Valley",
        tier: 8,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Laboratory",
        tier: 8,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Mineral Pools",
        tier: 8,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Mud Geyser",
        tier: 8,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Overgrown Ruin",
        tier: 8,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Shore",
        tier: 8,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Tropical Island",
        tier: 8,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Vaal Pyramid",
        tier: 8,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Arena",
        tier: 9,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Estuary",
        tier: 9,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Moon Temple",
        tier: 9,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Museum",
        tier: 9,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Plateau",
        tier: 9,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Scriptorium",
        tier: 9,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Sepulchre",
        tier: 9,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Temple",
        tier: 9,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Tower",
        tier: 9,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Vault",
        tier: 9,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Waste Pool",
        tier: 9,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Arachnid Tomb",
        tier: 10,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Belfry",
        tier: 10,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Bog",
        tier: 10,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Cursed Crypt",
        tier: 10,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Orchard",
        tier: 10,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Pier",
        tier: 10,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Precint",
        tier: 10,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Shipyard",
        tier: 10,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Siege",
        tier: 10,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Wasteland",
        tier: 10,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Colonnade",
        tier: 11,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Coves",
        tier: 11,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Factory",
        tier: 11,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Mesa",
        tier: 11,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Lair",
        tier: 11,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Pit",
        tier: 11,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Primordial Pool",
        tier: 11,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Promenade",
        tier: 11,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Spider Forest",
        tier: 11,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Waterways",
        tier: 11,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Castle Ruins",
        tier: 12,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Crystal Ore",
        tier: 12,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Defiled Cathedral",
        tier: 12,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Necropolis",
        tier: 12,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Overgrown Shrine",
        tier: 12,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Racecrouse",
        tier: 12,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Summit",
        tier: 12,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Torture Chamber",
        tier: 12,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Villa",
        tier: 12,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Arsenal",
        tier: 13,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Core",
        tier: 13,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Desert Spring",
        tier: 13,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Ghetto",
        tier: 13,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Malformation",
        tier: 13,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Park",
        tier: 13,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Shrine",
        tier: 13,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Terrace",
        tier: 13,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Acid Lakes",
        tier: 14,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Colosseum",
        tier: 14,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Crimson Temple",
        tier: 14,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Dark Forest",
        tier: 14,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Dig",
        tier: 14,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Palace",
        tier: 14,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Plaza",
        tier: 14,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Basilica",
        tier: 15,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Carcass",
        tier: 15,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Lava Lake",
        tier: 15,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Reef",
        tier: 15,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Sunken City",
        tier: 15,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Forge of the Phoenix",
        tier: 16,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Lair of the Hydra",
        tier: 16,
        img: "",
        left: ,
        top: ,
    },
     {
        name: "Maze of the Minotaur",
        tier: 16,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Pit of the Chimera",
        tier: 16,
        img: "",
        left: ,
        top: ,
    },
     {
        name: "Vaal Temple",
        tier: 16,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "The Shaper's Realm",
        tier: 17,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Whakawairua Tuahu",
        tier: 4,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Maelström of Chaos",
        tier: 6,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Hallowed Ground",
        tier: 6,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Olmec's Sanctum",
        tier: 7,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Pillars of Arun",
        tier: 7,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Caer Blaidd, Wolfpack's Den",
        tier: 7,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "The Vinktar Square",
        tier: 8,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Mao Kun",
        tier: 8,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Vaults of Atziri",
        tier: 8,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "The Twilight Temple",
        tier: 9,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "The Putrid Cloister",
        tier: 9,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Poorjoys Asylum",
        tier: 9,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "The Coward's Trial",
        tier: 10,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Hall of Grandmasters",
        tier: 11,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Death and Taxes",
        tier: 12,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Acton's Nightmare",
        tier: 12,
        img: "",
        left: ,
        top: ,
    },
    {
        name: "Oba's Cursed Trove",
        tier: 12,
        img: "",
        left: ,
        top: ,
    },*/
]