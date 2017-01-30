// by @imgntn
AFRAME.registerComponent('simple-tracked-behavior', {
init:function(){
    this.onAxisMove = this.onAxisMove.bind(this);
    this.onButtonChanged = this.onButtonChanged.bind(this);
},
play: function () {
    var el = this.el;
    el.addEventListener('axismove', this.onAxisMove);
    el.addEventListener('buttonchanged', this.onButtonChanged);
},
pause: function () {
    var el = this.el;
    el.removeEventListener('axismove', this.onAxisMove);
    el.removeEventListener('buttonchanged', this.onButtonChanged);
},
onAxisMove:function(evt){
  console.log('onAxisMove event',evt);
},
onButtonChanged:function(data){
  console.log('onButtonChanged event',evt);
}
});