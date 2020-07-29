exports.seed = function (knex) {
  return knex("steps").insert([
    {
      recipe_id: 1,
      step: 1,
      instruction:
        "Pound chicken breasts if they are too thick. Place a cheese and ham slice on each breast within 1/2 inch of the edges. Fold the edges of the chicken over the filling, and secure with toothpicks. Mix the flour and paprika in a small bowl, and coat the chicken pieces.",
    },
    {
      recipe_id: 1,
      step: 2,
      instruction:
        "Heat the butter in a large skillet over medium-high heat, and cook the chicken until browned on all sides. Add the wine and bouillon. Reduce heat to low, cover, and simmer for 30 minutes, until chicken is no longer pink and juices run clear.",
    },
    {
      recipe_id: 1,
      step: 3,
      instruction:
        "Remove the toothpicks, and transfer the breasts to a warm platter. Blend the cornstarch with the cream in a small bowl, and whisk slowly into the skillet. Cook, stirring until thickened, and pour over the chicken. Serve warm.",
    },
    {
      recipe_id: 2,
      step: 1,
      instruction: "Preheat oven to 425 degrees F (220 degrees C).",
    },
    {
      recipe_id: 2,
      step: 2,
      instruction:
        "Heat olive oil and garlic in a small saucepan over low heat until warmed, 1 to 2 minutes. Transfer garlic and oil to a shallow bowl.",
    },
    {
      recipe_id: 2,
      step: 3,
      instruction:
        "Combine bread crumbs and Parmesan cheese in a separate shallow bowl.",
    },
    {
      recipe_id: 2,
      step: 4,
      instruction:
        "Dip chicken breasts in the olive oil-garlic mixture using tongs; transfer to bread crumb mixture and turn to evenly coat. Transfer coated chicken to a shallow baking dish.",
    },
    {
      recipe_id: 2,
      step: 5,
      instruction:
        "Bake in the preheated oven until no longer pink and juices run clear, 30 to 35 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).",
    },
    {
      recipe_id: 3,
      step: 1,
      instruction:
        "Place the onion, chili beans, black beans, corn, tomato sauce, beer, and diced tomatoes in a slow cooker. Add taco seasoning, and stir to blend. Lay chicken breasts on top of the mixture, pressing down slightly until just covered by the other ingredients. Set slow cooker for low heat, cover, and cook for 5 hours.",
    },
    {
      recipe_id: 3,
      step: 2,
      instruction:
        "Remove chicken breasts from the soup, and allow to cool long enough to be handled. Stir the shredded chicken back into the soup, and continue cooking for 2 hours. Serve topped with shredded Cheddar cheese, a dollop of sour cream, and crushed tortilla chips, if desired.",
    },
  ]);
};
