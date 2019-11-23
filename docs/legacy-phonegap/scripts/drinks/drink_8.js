
// Drink name: Granolin

drink = new DrinkClass(8);

drink.setType(4);
drink.setBaseComponent(6);
drink.setGlass(1);

drink.setPreparationText("[?]");
drink.setHistoryText("[?]");

drink.addIngredient(3, "cl", "component_6", [0,0]);
drink.addIngredient(1, "cl", "component_22", [0,0]);
drink.addIngredient(1, "cl", "component_23", [0,0]);
drink.addIngredient(4, "cl", "component_25", [0,0]);
drink.addIngredient(4, "cl", "component_24", [0,0]);

drink.addDecoration(7, [0,0]);

//drink.addTool(0, [0,0]);

drink.addComment("Feltaláló: Németh Zoltán [1/A]");
drink.addComment("korábbi név: Grendoline");

