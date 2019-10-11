const pet = {
    name: "Jerry",
    species: "Jackrabbit",
    nicknames: [
        "J"
    ],
    age: 73,
    run: function() {
        console.log("Jerry's on the run, go find him!");
    },
    eatCarrot: function() {
        window.alert("Jerry ate a carrot!")
    },
    jump: function() {
        console.log("Jerry jumped out the window!")
    },
    favoriteToys: [],
    play: function(toy) {
        if (toy.includes("fun")) {
            this.favoriteToys.push(toy);
        };
    }
}
pet.run();
pet.eatCarrot();
pet.jump();

pet.play("funtoy");
console.log(pet.favoriteToys);

