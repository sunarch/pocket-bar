
// Drink name: [N.Z. 1/C]

drink = new DrinkClass(10);

drink.setType(4);
drink.setBaseComponent(16);
drink.setGlass(1);

drink.setPreparationText("[?]");
drink.setHistoryText("[?]");

drink.addIngredient(3, "cl", "component_16", [0,0]);
drink.addIngredient(1, "cl", "product_6", [0,0]);
drink.addIngredient(4, "cl", "component_17", [0,0]);
drink.addIngredient(1, "adag", "component_18", [0,0]);
drink.addIngredient(1, "cl", "component_12", [0,0]);
drink.addIngredient(1, "cl", "component_19", [0,0]);

//drink.addDecoration(-1, [0,0]);

//drink.addTool(0,  [0,0]);

drink.addComment("Feltaláló: Németh Zoltán [1/C]");

