<script>
function giveSlotItems(blueprintPath) {
    var numItems = prompt("输入数量");
    if (numItems != null) {
        var numTimes = parseInt(prompt("输入格子数量"));
        if (isNaN(numTimes)) {
            alert("请输入有效数字");
            return;
        }

        for (var i = 0; i < numTimes; i++) {
            h5gg.CommandQueue('admincheat giveslotitem "' + blueprintPath + '" 1 ' + numItems);
        }
    }
}

function a31() {
    giveSlotItems('Blueprint\'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_01.PrimalItemArtifact_01_C\'');
}

function a32() {
    giveSlotItems('Blueprint\'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_02.PrimalItemArtifact_02_C\'');
}

function a33() {
    giveSlotItems('Blueprint\'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_03.PrimalItemArtifact_03_C\'');
}

function a34() {
    giveSlotItems('Blueprint\'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_04.PrimalItemArtifact_04_C\'');
}

function a35() {
    giveSlotItems('Blueprint\'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_05.PrimalItemArtifact_05_C\'');
}

function a36() {
    giveSlotItems('Blueprint\'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_06.PrimalItemArtifact_06_C\'');
}

function a37() {
    giveSlotItems('Blueprint\'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_07.PrimalItemArtifact_07_C\'');
}

function a38() {
    giveSlotItems('Blueprint\'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_08.PrimalItemArtifact_08_C\'');
}

function a39() {
    giveSlotItems('Blueprint\'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_09.PrimalItemArtifact_09_C\'');
}

function BB1() {
    giveSlotItems('Blueprint\'/Game/PrimalEarth/CoreBlueprints/Items/PrimalItem_MatureBoost_Toy_Yoyo.PrimalItem_MatureBoost_Toy_Yoyo_C\'');
}

function BB3() {
    giveSlotItems('Blueprint\'/Game/PrimalEarth/CoreBlueprints/Items/PrimalItem_MatureBoost_Toy_Yoyo.PrimalItem_MatureBoost_Toy_Yoyo_C\'');
}

function BB4() {
    giveSlotItems('Blueprint\'/Game/PrimalEarth/CoreBlueprints/Items/Consumables/PrimalItemConsumable_PotentHealSoup.PrimalItemConsumable_PotentHealSoup_C\'');
}

function BB5() {
    giveSlotItems('Blueprint\'/Game/PrimalEarth/CoreBlueprints/Items/Consumables/PrimalItemConsumable_DungeonSalve_Healing.PrimalItemConsumable_DungeonSalve_Healing_C\'');
}

function BB6() {
    giveSlotItems('Blueprint\'/Game/PrimalEarth/CoreBlueprints/Items/Armor/Collars/PrimalItemArmor_GoldenChain.PrimalItemArmor_GoldenChain_C\'');
}

function BB7() {
    giveSlotItems('Blueprint\'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_EeryElement.PrimalItemResource_EeryElement_C\'');
}

function BB8() {
    giveSlotItems('Blueprint\'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_DinoAmber.PrimalItemResource_DinoAmber_C\'');
}
</script>
