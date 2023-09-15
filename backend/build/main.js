import Express from "express";
import 'dotenv/config';
import { getNpcMotivation, getNegativeTrait, getNpcAge, getNpcProblem, getNpcProfession, getNpcStrength, getNpcVirtue } from "./npc/npc.js";
const app = Express();
const port = process.env.PORT;
//#region npc routes
app.get(`/npc/motivation`, getNpcMotivation);
app.get(`/npc/negativeTrait`, getNegativeTrait);
app.get(`/npc/age`, getNpcAge);
app.get(`/npc/problem`, getNpcProblem);
app.get(`/npc/profession`, getNpcProfession);
app.get(`/npc/strength`, getNpcStrength);
app.get(`/npc/virtue`, getNpcVirtue);
//#endregion
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=main.js.map