
// Drink name: Manhattan

drink = new DrinkClass(12);

drink.setType(1);
drink.setBaseComponent(28);
drink.setGlass(1);

drink.setPreparationText("az összetevőket keverőpohárban jéggel összekveverjük, és koktélospohárba töltjük (nem szűrjük)");
drink.setHistoryText("[?]");

drink.addIngredient(5, "cl", "component_29", [0,0]);
drink.addIngredient(2, "cl", "component_4", [0,0]);
drink.addIngredient(2, "csepp", "product_10", [0,0]);

drink.addDecoration(12, [0,0]);

drink.addTool(3, [0,0]);

drink.addComment("Bols Academy vizsgakoktél");
drink.addComment("az eredeti recept szerint szűrni kell");

