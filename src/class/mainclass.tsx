
 export class Basic{
    name: string
    hp: number
    atk: number
    def: number

    constructor(name, hp, atk, def){
        this.name = name
        this.hp = hp,
        this.atk = atk,
        this.def = def
    }
}


export class Mage extends Basic {
    attack(enemyHP){
        let damage = Math.random() + this.atk * 1.5
        return enemyHP -= damage
    }
}


