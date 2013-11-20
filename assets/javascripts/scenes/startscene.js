function StartScene() {
  
  var name = "Start Menu";
  var DEFAULT_ENTITIES = [
      new Text({ type: 'Title', text: 'OUROBOROS' }),
      new Menu([
          new Text({ type: 'MenuItem', text: 'New Game (coming soon!)' }),
          new Text({ type: 'MenuItem', text: 'Continue (coming soon!)', fillStyle: (docCookies.hasItem('save')) ? '#282828' : '#aaa' }),
          new Text({ type: 'MenuItem', text: 'Time Attack' })
      ], { })
  ];
  var keyHandler = function (e) {
    var d = scenes[0].entities[0].direction,
        key = e.which;
    
    if      (key == '38' && d != Direction.DOWN)  d = Direction.UP;
    else if (key == '40' && d != Direction.UP)    d = Direction.DOWN;
    else if (key == '13') {
      switch(scenes[0].entities[1].cursor.i){ 
          case StartSceneMenuOptions.TIMEATTACK:
            scenes[0].initialized = false;
            cur = TimeAttackScenes.SNAKE;
            document.removeEventListener('keydown', keyHandler);
            return;
          case 0:
          case 1:
          default:
            break;
      }
    }
    inputs.push(d);
  };
  
  Scene.call(this, name, DEFAULT_ENTITIES, keyHandler);
}