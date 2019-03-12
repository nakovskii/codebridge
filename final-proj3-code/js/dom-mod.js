
    class selfState {
      constructor(level, name, color, journey, world, place, condition, method, description){
        this.level = level;
        this.name = name;
        this.color = color;
        this.journey = journey;
        this.world = world;
        this.place = place;
        this.condition = condition;
        this.method = method;
        this.description = description;
      }
      postToDOM(){
        document.getElementById('level').innerHTML = "State Level: "+this.level;
        document.getElementById('name').innerHTML = "It's name is: " + this.name;
        document.getElementById('color').innerHTML = "It's color is: "+this.color;
        document.getElementById('journey').innerHTML = "It's "+this.journey;
        document.getElementById('world').innerHTML = "It's world is "+this.world;
        document.getElementById('place').innerHTML = "It's place is "+this.place;
        document.getElementById('condi').innerHTML = "It's condition is "+this.condition;
        document.getElementById('method').innerHTML = "It's condition is "+this.method;
        document.getElementById('desc').innerHTML = "Description: "+this.description;
        document.getElementById('mainleft').style.backgroundColor = this.color;

      }
    }

    let selfState1 = new selfState(1,'The Animal Self','blue','journeying to God',
    'menifestation of the senses','chest','desiring','Law-Shariah',`The first level has also been described as the domineering self or the self that incites to evil. The commanding self seeks to dominate and to control each individual. At this level there is unbridled selfishness and no sense of morality or compassion.`);
