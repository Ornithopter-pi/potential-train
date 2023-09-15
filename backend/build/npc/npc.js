import { getRandomIntInclusive } from "../utils/rng.js";
import { npcMotivations, npcNegativeTraits, npcProblems, npcStrengths, npcVirtues, npcFuturisticJobs } from "./npc_data.js";
// Reminder: copy code from 8 and 9 to each function.
function getNpcMotivation(_req, res) {
    //TODO: handle same roll exception. https://stackoverflow.com/questions/64930937/how-to-cast-req-query-parameters-in-express-using-typescript
    //TODO: Improve error message. Maybe add console error log (or cat picture describing the error)
    const motivationIndex = getRandomIntInclusive(npcMotivations.length);
    if (motivationIndex.err) {
        res.sendStatus(503);
        return;
    }
    res.send(npcMotivations[motivationIndex.val]);
    return;
}
function getNegativeTrait(_req, res) {
    const negativeTraitIndex = getRandomIntInclusive(npcNegativeTraits.length);
    if (negativeTraitIndex.err) {
        res.sendStatus(503);
        return;
    }
    res.send(npcNegativeTraits[negativeTraitIndex.val]);
}
function getNpcProblem(_req, res) {
    const problemIndex = getRandomIntInclusive(npcProblems.length);
    if (problemIndex.err) {
        res.sendStatus(503);
        return;
    }
    res.send(npcProblems[problemIndex.val]);
    return;
}
function getNpcStrength(_req, res) {
    const strengthIndex = getRandomIntInclusive(npcStrengths.length);
    if (strengthIndex.err) {
        res.sendStatus(503);
        return;
    }
    res.send(npcStrengths[strengthIndex.val]);
    return;
}
function getNpcVirtue(_req, res) {
    const virtueIndex = getRandomIntInclusive(npcVirtues.length);
    if (virtueIndex.err) {
        res.sendStatus(503);
        return;
    }
    res.send(npcVirtues[virtueIndex.val]);
    return;
}
function getNpcAge(_req, res) {
    res.send(JSON.stringify(getRandomIntInclusive(60, 16).val));
    return;
}
function getNpcProfession(_req, res) {
    const professionIndex = getRandomIntInclusive(npcFuturisticJobs.length);
    if (professionIndex.err) {
        res.sendStatus(503);
        return;
    }
    res.send(npcFuturisticJobs[professionIndex.val]);
    return;
}
export { getNegativeTrait, getNpcMotivation, getNpcProblem, getNpcStrength, getNpcVirtue, getNpcAge, getNpcProfession };
//# sourceMappingURL=npc.js.map