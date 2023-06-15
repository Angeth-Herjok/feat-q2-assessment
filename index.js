// **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.

// pseudo code
// input-length,moral lessons,age group
// output-translates different words to different languages
// process-create classes-AncestralStories,methods-translatesToLanguage,oralStories

class AncestralStories{
    constructor(length,moralLessons,age){
        this.length=length
        this.moralLessons=moralLessons
        this.age=age
    }
    rcordsOralStories(story){
        this.story="Siku ya mungu"
        console.log(`The ${this.mooralLessons} of this ${story} various from each ${this.age}`);
    }
    translatesToLanguage(translates){
        this.translates="God's day"
        console.log(`The ${story} is means ${translates} in English`);
    }

}
let translating=new AncestralStories("200","God will judge",Range(16,30))
translating.translates()
rcordsOralStories.translating()


// 2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

// pseudo code
//    input-unique ingredients,preparation time,cooking method,nutrional information
// output-handle recipes from different countries
// process-creating a class-Recipe,subclasses-MoroccanRecipe,EthipianRecipe,NigeriaRecipe,create methods
// and attributes/properties
class Recipe{
    constructor(UniqueIngredients,preparationTime,cookingMethod,nutritionalInformation){
        this.UniqueIngredients=UniqueIngredients
        this.preparationTime=preparationTime
        this.cookingMethod=cookingMethod
        this.nutritionalInformation=nutritionalInformation
    }
    getIngedients(){
        console.log(`Africans foods has ${this.UniqueIngredients} with different ${this.cookingMethod} and ${this.preparationTime} which adds large amount of ${this.nutritionalInformation}`);
    }
}
class MoroccanRecipe{
    constructor(name,type){
        this.name=name
        this.type=type
    }
    getMoroccanFood(){
        this.name="Asida"
        this.type="sorghum"
        console.log(`${this.name} is a product of ${this.type}`);
    }
    
}
class EthiopianRecipe{
    constructor(effects,nutrientsContain){
        this.effects=effects
        this.nutrientsContain=nutrientsContain
    }
    healthCheck(){
        this.effects="acidic"
        this.nutrientsContain="Mineral salts"
        console.log(`Anjera is the best with ${this.nutrientsContain} content with ${effects} to our health`);
    }
    

}
class NigerianRecipe{
    constructor(consumption,ingredientsAmount){
        this.consumption=consumption
        this.ingredientsAmount=ingredientsAmount
    }
    getNigerianRecipe(){
        this.consumption="Eaten by people"
        this.ingredientsAmount="Cassava leaves"
        console.log(`The ${this.ingredientsAmount} is ${this.consumption} in the country`);
        
    }

}
let allRecipes=new Recipe("onions","2hours","2cups of water,spoonful of salt","vitamins")
allRecipes.getIngedients()
// 3. **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to
// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.
class Species{
    constructor(diet,typicalLIfespan,migrationPatterns){
        this.diet=diet
        this.typicalLIfespan=typicalLIfespan
        this.migrationPatterns=migrationPatterns
    }
}
class Predator extends Species{
    getDiet(){
        console.log(`Predators kill ${this.diet} and have the longest ${this.typicalLIfespan}`);
    }
    

}
class Prey extends Species{
    knowPrey(){
        console.log(`The ${this.migrationPatterns} of the prey can be track`);
    }

}
let diets=new Species("proteins",200,"kenya-tanzania")
diets.knowPrey()
// 4. **African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.
class MusicFestival{
    constructor(style,instruments){
        this.style=style
        this.model=model
    }
}
class Artist{
    
}
class Performance
// 5. Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.
// 6. Implement a class called Student with attributes for name, age, and grades (a
// list of integers). Include methods to calculate the average grade, display the
// student information, and determine if the student has passed (average grade >=
// 60). Create objects for the Student class and demonstrate the usage of these
// methods.

// 7. Create a FlightBooking class that represents a flight booking system. Implement
// methods to search for available flights based on destination and date, reserve
// seats for customers, manage passenger information, and generate booking
// confirmations.

// 8. Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.