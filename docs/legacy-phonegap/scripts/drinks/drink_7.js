
// Drink name: Appletini

drink = new DrinkClass(7);

drink.setType(3);
drink.setBaseComponent(16);
drink.setGlass(1);

drink.setPreparationText("az összetevõket keverõpohárban jéggel összekeverjük, és koktélospohárba szûrjük");
drink.setHistoryText("[?]");

drink.addIngredient(4, "cl", "product_7", [0,0]);
drink.addIngredient(1.5, "cl", "product_6", [0,0]);
drink.addIngredient(1.5, "cl", "product_8", [0,0]);

drink.addDecoration(8, [1,1]);
drink.addDecoration(9, [1,2]);

//drink.addTool(0, [0,0]);

drink.addComment("Bols Academy vizsgakoktél");

