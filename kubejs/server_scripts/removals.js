//priority: 999
onEvent(`recipes`, e => {
  var idRemove = [

    `minecraft:comparator`,
    `minecraft:glass`,

    `botania:conversions/blazeblock_deconstruct`,
    `botania:blaze_block`,

    `pedestals:pedestal_crushing/dustnethergold`,

    `forbidden_arcanus:leather`,

    `computercraft:turtle_normal`,
    `computercraft:turtle_advanced`,

    `byg:black_glass_from_sand`,
    `byg:purple_glass_from_sand`,
    `byg:blue_glass_from_sand`,
    `byg:white_glass_from_sand`,

    `engineerstools:crushing/aluminium_grit_crushing_recipe`,

    `xreliquary:alkahestry/crafting/nether_star`,

    `create:milling/sand`,
    `create:crushing/sand`,
    `create:crushing/netherrack`,

    `immersiveengineering:crafting/paper_from_sawdust`,

    `exnihilosequentia:heat/wall_torch`,
    `exnihilosequentia:heat/fire`,
    `exnihilosequentia:heat/magma_block`,
    `exnihilosequentia:heat/lava`
  ];
  idRemove.forEach(iR => {
    e.remove({
      id: iR
    });
  });
  //Recipe removals
  e.remove({
    output: [
      `appliedenergistics2:silicon`,

      `mekanism:upgrade_anchor`,
      `mekanism:digital_miner`,
      `mekanism:atomic_disassembler`,
      `mekanism:block_charcoal`,
      `mekanismgenerators:wind_generator`,

      `forbidden_arcanus:rotten_leather`,
      `forbidden_arcanus:iron_chain`,

      `xreliquary:alkahestry_tome`,

      /*
      `naturesaura:chunk_loader`,
      */

      `cyclic:uncrafter`,
      `cyclic:tile_transporter_empty`,

      `solarflux:sp_6`,
      `solarflux:sp_7`,
      `solarflux:sp_8`,

      `titanium:iron_gear`,
      `titanium:gold_gear`,
      `titanium:diamond_gear`,

      /*
      `quarryplus:solidquarry`,
      `quarryplus:workbenchplus`,
      */

      `mininggadgets:upgrade_empty`,

      `pamhc2foodcore:fruitpunchitem`,
      `pamhc2foodcore:applejuiceitem`,
      `pamhc2foodcore:melonjuiceitem`,
      `pamhc2foodcore:sweetberryjuiceitem`,
      `pamhc2foodcore:p8juiceitem`,

      `angelring:itemring`,
      `angelring:itemdiamondring`,

      `silentgear:iron_rod`,

      `entangled:block`,
      `entangled:item`,

      `refinedstorage:4096k_fluid_storage_part`,

      `extradisks:4096k_storage_part`,
      `extradisks:16384k_fluid_storage_part`,
      `extradisks:16384k_storage_part`,
      `extradisks:65536k_fluid_storage_part`,
      `extradisks:65536k_storage_part`,
      `extradisks:262144k_fluid_storage_part`,
      `extradisks:262144k_storage_part`,
      `extradisks:1048576k_fluid_storage_part`,
      `extradisks:1048576k_storage_part`,
      `extradisks:infinite_fluid_storage_part`,
      `extradisks:infinite_storage_part`,

      `mysticalagriculture:unattuned_augment`,

      `allthemodium:teleport_pad`,

      `rftoolsbuilder:builder`,

      `darkutils:ender_hopper`
    ]
  });
  e.remove({
    input: [
      `appliedenergistics2:flour`
    ]
  });
  e.remove({
    type: `xreliquary:alkahestry_charging`
  });
});