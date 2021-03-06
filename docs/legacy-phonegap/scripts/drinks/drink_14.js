/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


// Drink name: Manhattan Perfect

drink = new DrinkClass(14);

drink.setType(1);
drink.setBaseComponent(28);
drink.setGlass(1);

drink.setPreparationText("az összetevőket keverőpohárban jéggel összekveverjük, és koktélospohárba töltjük (nem szűrjük)");
drink.setHistoryText("[?]");

drink.addIngredient(4, "cl", "component_29", [0,0]);
drink.addIngredient(1.5, "cl", "component_7", [0,0]);
drink.addIngredient(1.5, "cl", "component_4", [0,0]);

drink.addDecoration(12, [0,0]);

drink.addTool(3, [0,0]);

drink.addComment("az eredeti recept szerint szűrni kell");

