fun main() {
    var ancestralStories=AncestralStories(200,"God's judgement",16)
    ancestralStories.rcordsOralStories("Siku ya mungu")

    var recipe=Recipe("onions","2hours","2cups of water,spoonful of salt","vitamins")
    recipe.getIngedients()
    var species=Species("proteins",200,"kenya-tanzania")
}
//# // **Ancestral Stories:** In many African cultures, the art of storytelling is passed
//# // down from generation to generation. Imagine you're creating an application that
//# // records these oral stories and translates them into different languages. The
//# // stories vary by length, moral lessons, and the age group they are intended for.
//# // Think about how you would model `Story`, `StoryTeller`, and `Translator`
//# // objects, and how inheritance might come into play if there are different types of
//# // stories or storytellers.
//
//# // pseudo code
//# // input-length,moral lessons,age group
//# // output-translates different words to different languages
//# // process-create classes-AncestralStories,methods-translatesToLanguage,oralStories

class AncestralStories(var length:Int,var moralLessons:String,var age:Int){




fun rcordsOralStories(story:String) {
    var story = "Siku ya mungu"
    println("The $moralLessons of this $story various from each $age")

}
}

fun translatesToLanguage(translates:String) {
    var translates = "God's day"
    println("The {self.story} is means {translates} in English")

}




//# / 2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
//# // The app needs to handle recipes from different African countries, each with its
//# // unique ingredients, preparation time, cooking method, and nutritional
//# // information. Consider creating a `Recipe` class, and think about how you might
//# // create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
//# // `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
//# // methods.
//
//# // pseudo code
//# //    input-unique ingredients,preparation time,cooking method,nutrional information
//# // output-handle recipes from different countries
//# // process-creating a class-Recipe,subclasses-MoroccanRecipe,EthipianRecipe,NigeriaRecipe,create methods
//# // and attributes/properties
class Recipe(var UniqueIngredients:String,var preparationTime:String,var cookingMethod:String,var nutritionalInformation:String) {


    fun getIngedients() {
        println("Africans foods has $UniqueIngredients with different $cookingMethod and $preparationTime which adds large amount of $nutritionalInformation")
    }
}
class MoroccanRecipe(var name:String,var type:String){

fun getMoroccanFood(){
    var name = "Asida"
    var type = "sorghum"
    println("$name is a product of $type")
}
}


class EthiopianRecipe(var effects:String,var nutrientsContain:String) {

    fun healthCheck() {
        var effects = "acidic"
        var nutrientsContain = "Mineral salts"
        println("Anjera is the best with $nutrientsContain content with $effects to our health")
    }
}


class NigerianRecipe(var consumption:String,var ingredientsAmount:String) {

    fun getNigerianRecipe() {
        var consumption = "Eaten by people"
        var ingredientsAmount = "Cassava leaves"
        println("The $ingredientsAmount is $consumption in the country")

    }
}



//# // 3. **Wildlife Preservation:** You're a wildlife conservationist working on a
//# // program to track different species in a national park. Each species has its own
//# // characteristics and behaviors, such as its diet, typical lifespan, migration
//# // patterns, etc. Some species might be predators, others prey. You'll need to
//# // create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
//# // these classes might relate to each other through inheritance.
open class Species(var diet:String,var typicalLIfespan:Int,var migrationPatterns:String) {
    open fun getDiet() {
        println("Predators kill $diet and have the longest $typicalLIfespan")


    }

    open fun knowPrey() {
        println("The {self.migrationPatterns} of the prey can be track")

    }
    class Predator(diet: String, typicalLIfespan: Int, migrationPatterns: String) :
        Species(diet, typicalLIfespan, migrationPatterns) {
        override fun getDiet() {
            println("Predators kill $diet and have the longest $typicalLIfespan")

        }
    }


    class Prey(diet: String, typicalLIfespan: Int, migrationPatterns: String):Species(diet, typicalLIfespan, migrationPatterns) {
        override fun knowPrey() {
            println("The {self.migrationPatterns} of the prey can be track")

        }

    }
}