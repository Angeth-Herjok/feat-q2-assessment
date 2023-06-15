# // **Ancestral Stories:** In many African cultures, the art of storytelling is passed
# // down from generation to generation. Imagine you're creating an application that
# // records these oral stories and translates them into different languages. The
# // stories vary by length, moral lessons, and the age group they are intended for.
# // Think about how you would model `Story`, `StoryTeller`, and `Translator`
# // objects, and how inheritance might come into play if there are different types of
# // stories or storytellers.

# // pseudo code
# // input-length,moral lessons,age group
# // output-translates different words to different languages
# // process-create classes-AncestralStories,methods-translatesToLanguage,oralStories

class AncestralStories:
    def __init__(self,length,moralLessons,age):
        self.length=length
        self.moralLessons=moralLessons
        self.age=age
    
    def rcordsOralStories(self,story):
        self.story="Siku ya mungu"
        return f"The {self.mooralLessons} of this {story} various from each {self.age}"
    
    def translatesToLanguage(self,translates):
        self.translates="God's day"
        return f"The {self.story} is means {translates} in English"
    


translating=AncestralStories("200","God will judge",range(16,30))
translating.translates()



# / 2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
# // The app needs to handle recipes from different African countries, each with its
# // unique ingredients, preparation time, cooking method, and nutritional
# // information. Consider creating a `Recipe` class, and think about how you might
# // create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# // `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
# // methods.

# // pseudo code
# //    input-unique ingredients,preparation time,cooking method,nutrional information
# // output-handle recipes from different countries
# // process-creating a class-Recipe,subclasses-MoroccanRecipe,EthipianRecipe,NigeriaRecipe,create methods
# // and attributes/properties
class Recipe:
    def __init__(self,UniqueIngredients,preparationTime,cookingMethod,nutritionalInformation):
        self.UniqueIngredients=UniqueIngredients
        self.preparationTime=preparationTime
        self.cookingMethod=cookingMethod
        self.nutritionalInformation=nutritionalInformation
    
    def getIngedients(self):
        return f"Africans foods has {self.UniqueIngredients} with different {self.cookingMethod} and {self.preparationTime} which adds large amount of {self.nutritionalInformation}"
    

class MoroccanRecipe:
    def __init__(self,name,type):
        self.name=name
        self.type=type
    
    def getMoroccanFood(self):
        self.name="Asida"
        self.type="sorghum"
        return f"{self.name} is a product of {self.type}"
    
    

class EthiopianRecipe:
    def __init__(self,effects,nutrientsContain):
        self.effects=effects
        self.nutrientsContain=nutrientsContain
    
    def healthCheck(self):
        self.effects="acidic"
        self.nutrientsContain="Mineral salts"
        return f"Anjera is the best with {self.nutrientsContain} content with {self.effects} to our health"
    
    


class NigerianRecipe:
    def __init__(self,consumption,ingredientsAmount):
        self.consumption=consumption
        self.ingredientsAmount=ingredientsAmount
    
    def getNigerianRecipe(self):
        this.consumption="Eaten by people"
        this.ingredientsAmount="Cassava leaves"
        return f"The {this.ingredientsAmount} is {this.consumption} in the country"
        
    

allRecipes=Recipe("onions","2hours","2cups of water,spoonful of salt","vitamins")
allRecipes.getIngedients()


# // 3. **Wildlife Preservation:** You're a wildlife conservationist working on a
# // program to track different species in a national park. Each species has its own
# // characteristics and behaviors, such as its diet, typical lifespan, migration
# // patterns, etc. Some species might be predators, others prey. You'll need to
# // create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
# // these classes might relate to each other through inheritance.
class Species:
    def __init__(self, diet,typicalLIfespan,migrationPatterns):
        self.diet=diet
        self.typicalLIfespan=typicalLIfespan
        self.migrationPatterns=migrationPatterns
    

class Predator :
    def getDiet(self):
        return f"Predators kill {self.diet} and have the longest {self.typicalLIfespan}"
    
    


class Prey:
    def knowPrey(self):
        return f"The {self.migrationPatterns} of the prey can be track"
    

diets=Species("proteins",200,"kenya-tanzania")
