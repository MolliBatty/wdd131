const hero = {
    name: "Wooliam the Raccoon Knight",
    characterClass: "Knight",
    level: 1,
    health: 100,
    image: "wooliam.png",

    attacked(){
        this.health -= 20;
        if (this.health <= 0){
            this.health = 0;
            document.getElementById("character-health").textContent = this.health;
            alert(`${this.name} has died!`);
        } else{
            document.getElementById("character-health").textContent = this.health;
        }
    },

    levelUp(){
        this.level +=1;
        document.getElementById("character-level").textContent = this.level;
    }
};