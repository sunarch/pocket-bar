
// Drink name: Brandy Alexander

drink = new DrinkClass(1); 

drink.setType(1);
drink.setBaseComponent(1);
drink.setGlass(1);

drink.setPreparationText("az összetevőket shakerben jéggel összerázzuk, és koktélos pohárba szűrjük");
drink.setHistoryText("[?]");

drink.addIngredient(2, "cl", "product_1", [0,0]);
drink.addIngredient(2, "cl", "product_2", [0,0]);
drink.addIngredient(2, "cl", "component_2", [0,0]);

drink.addDecoration(1, [0,0]);

//drink.addTool(0,  [0,0]);

drink.addComment("Bols Academy vizsgakoktél");
drink.addComment("finom szűrés vagy dupla szűrés");

