/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


/* Drink List */

drinkList = [
    { "refId" : "drink_1", "parentDrinkRefId" : "", "name" : "Brandy Alexander" },
    { "refId" : "drink_2", "parentDrinkRefId" : "", "name" : "Americano" },
    { "refId" : "drink_3", "parentDrinkRefId" : "", "name" : "Bronx" },
    { "refId" : "drink_4", "parentDrinkRefId" : "", "name" : "Daiquiri" },
    { "refId" : "drink_5", "parentDrinkRefId" : "drink_4", "name" : "Fruit Daiquiri" },
    { "refId" : "drink_6", "parentDrinkRefId" : "drink_4", "name" : "Frozen Daiquiri" },
    { "refId" : "drink_7", "parentDrinkRefId" : "", "name" : "Appletini" },
    { "refId" : "drink_8", "parentDrinkRefId" : "", "name" : "Granolin" },
    { "refId" : "drink_9", "parentDrinkRefId" : "", "name" : "[N.Z. 1/B]" },
    { "refId" : "drink_10", "parentDrinkRefId" : "", "name" : "[N.Z. 1/C]" },
    { "refId" : "drink_11", "parentDrinkRefId" : "", "name" : "Margarita" },
    { "refId" : "drink_12", "parentDrinkRefId" : "", "name" : "Manhattan" },
    { "refId" : "drink_13", "parentDrinkRefId" : "drink_12", "name" : "Manhattan Dry" },
    { "refId" : "drink_14", "parentDrinkRefId" : "drink_12", "name" : "Manhattan Perfect" },
    { "refId" : "drink_15", "parentDrinkRefId" : "", "name" : "Swimming Pool" },
    { "refId" : "drink_16", "parentDrinkRefId" : "", "name" : "Caipirinha" },
    { "refId" : "drink_17", "parentDrinkRefId" : "", "name" : "Side Car (English Version)" },
    { "refId" : "drink_18", "parentDrinkRefId" : "", "name" : "Side Car (French Version)" },
    { "refId" : "drink_19", "parentDrinkRefId" : "", "name" : "Absolut Flying" },
    { "refId" : "drink_20", "parentDrinkRefId" : "", "name" : "Piña Colada" }, // Pi&#241;a Colada
    { "refId" : "drink_21", "parentDrinkRefId" : "", "name" : "Mojito (1)" },
    { "refId" : "drink_22", "parentDrinkRefId" : "", "name" : "Mojito (2)" },
    { "refId" : "drink_23", "parentDrinkRefId" : "", "name" : "Tequila Sunrise" },
    { "refId" : "drink_24", "parentDrinkRefId" : "", "name" : "Cuba Libre" },
    { "refId" : "drink_25", "parentDrinkRefId" : "", "name" : "Bloody Mary" },
    { "refId" : "drink_26", "parentDrinkRefId" : "", "name" : "Dry Martini" },
    { "refId" : "drink_27", "parentDrinkRefId" : "drink_26", "name" : "Vodka Martini" },
    { "refId" : "drink_28", "parentDrinkRefId" : "drink_26", "name" : "Sweet Martini" },
    { "refId" : "drink_29", "parentDrinkRefId" : "drink_26", "name" : "Perfect Martini" },
    { "refId" : "drink_30", "parentDrinkRefId" : "", "name" : "Screwdriver" },
    { "refId" : "drink_31", "parentDrinkRefId" : "", "name" : "Flaming Lamborghini" },
    { "refId" : "drink_32", "parentDrinkRefId" : "", "name" : "Sex on the Beach" },
    { "refId" : "drink_33", "parentDrinkRefId" : "", "name" : "Whiskey Sour" },
    { "refId" : "drink_34", "parentDrinkRefId" : "", "name" : "Singapore Sling" },
    { "refId" : "drink_35", "parentDrinkRefId" : "", "name" : "Grasshopper" },
    { "refId" : "drink_36", "parentDrinkRefId" : "", "name" : "B52" },
    { "refId" : "drink_37", "parentDrinkRefId" : "", "name" : "Golden Cadillac" },
    { "refId" : "drink_38", "parentDrinkRefId" : "", "name" : "Black Russian" },
    { "refId" : "drink_39", "parentDrinkRefId" : "", "name" : "White Russian" },
    { "refId" : "drink_40", "parentDrinkRefId" : "", "name" : "Bloody Brain" },
    { "refId" : "drink_41", "parentDrinkRefId" : "", "name" : "Summer Fresh" },
    { "refId" : "drink_42", "parentDrinkRefId" : "", "name" : "Cosmopolitan" },
    { "refId" : "drink_43", "parentDrinkRefId" : "", "name" : "Riccocone" },
    { "refId" : "drink_44", "parentDrinkRefId" : "", "name" : "Garibaldi" },
    { "refId" : "drink_45", "parentDrinkRefId" : "", "name" : "Gin Fizz [Sour]" },
    { "refId" : "drink_46", "parentDrinkRefId" : "drink_45", "name" : "Gin Fizz - [Bols Academy Version]" },
    { "refId" : "drink_47", "parentDrinkRefId" : "drink_45", "name" : "Gin Fizz - Silver Fizz" },
    { "refId" : "drink_48", "parentDrinkRefId" : "drink_45", "name" : "Gin Fizz - Golden Fizz" },
    { "refId" : "drink_49", "parentDrinkRefId" : "drink_45", "name" : "Gin Fizz - Royal Fizz" },
    { "refId" : "drink_50", "parentDrinkRefId" : "drink_45", "name" : "Gin Fizz - Green Fizz" },
    { "refId" : "drink_51", "parentDrinkRefId" : "drink_45", "name" : "Gin Fizz - Pezsgős" },
    { "refId" : "drink_52", "parentDrinkRefId" : "", "name" : "Godfather" },
    { "refId" : "drink_53", "parentDrinkRefId" : "", "name" : "Long Island Iced Tea" },
    { "refId" : "drink_54", "parentDrinkRefId" : "", "name" : "White Lady" },
    { "refId" : "drink_55", "parentDrinkRefId" : "", "name" : "Mai Tai" },
    { "refId" : "drink_56", "parentDrinkRefId" : "", "name" : "Old Fashioned" },
    { "refId" : "drink_57", "parentDrinkRefId" : "drink_50", "name" : "Old Fashioned [Bols Academy Version]" },
    { "refId" : "drink_58", "parentDrinkRefId" : "", "name" : "Zombie" },
    { "refId" : "drink_59", "parentDrinkRefId" : "", "name" : "Orgazmus" },
    { "refId" : "drink_60", "parentDrinkRefId" : "", "name" : "Metaxa Sunginger" },
    { "refId" : "drink_61", "parentDrinkRefId" : "", "name" : "Apple Pie" },
    { "refId" : "drink_62", "parentDrinkRefId" : "", "name" : "La Cubata" },
    { "refId" : "drink_63", "parentDrinkRefId" : "", "name" : "Grant's Cola" },
    { "refId" : "drink_64", "parentDrinkRefId" : "", "name" : "Bellini" },
    { "refId" : "drink_65", "parentDrinkRefId" : "", "name" : "Bull Shot" },
    { "refId" : "drink_66", "parentDrinkRefId" : "", "name" : "Champagne Cocktail" },
    { "refId" : "drink_67", "parentDrinkRefId" : "", "name" : "French Connection" },
    { "refId" : "drink_68", "parentDrinkRefId" : "", "name" : "Gibson" },
    { "refId" : "drink_69", "parentDrinkRefId" : "", "name" : "Ginand French" },
    { "refId" : "drink_70", "parentDrinkRefId" : "", "name" : "Ginand It" },
    { "refId" : "drink_71", "parentDrinkRefId" : "", "name" : "Golden Dream" },
    { "refId" : "drink_72", "parentDrinkRefId" : "", "name" : "Harvey Wallbanger" },
    { "refId" : "drink_73", "parentDrinkRefId" : "", "name" : "Horse's Neck" },
    { "refId" : "drink_74", "parentDrinkRefId" : "", "name" : "Irish Coffee" },
    { "refId" : "drink_75", "parentDrinkRefId" : "", "name" : "Kir Royal" },
    { "refId" : "drink_76", "parentDrinkRefId" : "", "name" : "Kir" },
    { "refId" : "drink_77", "parentDrinkRefId" : "", "name" : "Negroni" },
    { "refId" : "drink_78", "parentDrinkRefId" : "", "name" : "Planter's Punch" },
    { "refId" : "drink_79", "parentDrinkRefId" : "", "name" : "Porto Flip" },
    { "refId" : "drink_80", "parentDrinkRefId" : "", "name" : "[Grant's whisky]" },
    { "refId" : "drink_81", "parentDrinkRefId" : "", "name" : "[Pohár: old fashioned]" },
    { "refId" : "drink_82", "parentDrinkRefId" : "", "name" : "Stinger" },
    { "refId" : "drink_83", "parentDrinkRefId" : "", "name" : "Brandy Egg-Nog" },
    { "refId" : "drink_84", "parentDrinkRefId" : "", "name" : "Parson's Special" },
    { "refId" : "drink_85", "parentDrinkRefId" : "", "name" : "Pussyfoot" },
    { "refId" : "drink_86", "parentDrinkRefId" : "", "name" : "Shirley Temple" },
    { "refId" : "drink_87", "parentDrinkRefId" : "", "name" : "Florida Cocktail" },
    { "refId" : "drink_88", "parentDrinkRefId" : "", "name" : "Spring Wind" }
];

