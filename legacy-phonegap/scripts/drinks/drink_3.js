
// Drink name: Bronx

drink = new DrinkClass(3);

drink.setType(3);
drink.setBaseComponent(6);
drink.setGlass(1);

drink.setPreparationText("az összetevõket shakerben jéggel összerázzuk, és koktélospohárba szűrjük");
drink.setHistoryText("[?]");

drink.addIngredient(3, "cl", "product_4", [0,0]);
drink.addIngredient(1.5, "cl", "component_4", [0,0]);
drink.addIngredient(1, "cl", "component_7", [0,0]);
drink.addIngredient(1.5, "cl", "component_8", [0,0]);

drink.addDecoration(0, [0,0]);

//drink.addTool(0, [0,0]);

drink.addComment("Bols Academy vizsgakoktél");
drink.addComment("duplán szűrjük");
drink.addComment("+ narancspeel");

