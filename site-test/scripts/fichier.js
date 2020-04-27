let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World !';


class Stylo {
    colorDessin = ''
    desinner() {

    }
}

class StyloAAlcool {
    colorCoque = ''
}


let monStylo = new StyloAAlcool()

class Aliment {

}

class Fruit extends Aliment {

}

class Legume extends Aliment {

}


    estCeQueCestUneGolden() {
        if(this.type === 'golden') {
            return true
        }
        else {
            return false
        }
        return this.type === 'golden'
    }
}


const uneChaineDeCaractere = 'quelque chose'
const unNombre = 15
const unBooleen = true || false
const uneList = ['pomme', 'abricot', 'fraise']
const unObject = {
    fruits: uneList,
    enleverUnFruit(fruit) {
        //....
    }
}

let document = {
    querySelector() {
        // ...
    }
}

let truc = document.querySelector('div')

let image = document.createElement('img')

image.src = 'http://google.fr'

truc.appendChild(image)

unObject.fruits['']
unObject['fruits']
uneList[0]
uneList[1]
uneList[2]


for(let fruit of uneList) {
    console.log(fruit)
}


const maPomme = new Pomme()

if(maPomme.estCeQueCestUneGolden()) {
    // alors....
}
