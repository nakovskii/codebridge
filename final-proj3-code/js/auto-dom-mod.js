
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

    let selfState2 = new selfState(2,'The Complaining Self aka The Regretful Self','yellow','journeying for God',
    'the Isthmus','Heart','Love','The Way-Tariqa',`People who have not developed beyond the first level are unaware and unconscious. As the light of faith grows, insight dawns, perhaps for the first time. The negative effects of a habitually self-centered approach to the world become apparent to the regretful self.`);


$(document).ready(function(){
  selfState2.postToDOM();
});
