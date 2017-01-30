 //adapted from https://wmurphyrd.github.io/aframe-super-hands-component/examples/hands/
 AFRAME.registerComponent('change-color-on-click', {
     play: function() {
         this.el.addEventListener('click', function(evt) {
             evt.detail.dropped.setAttribute('material', 'color',
                 '#' + (Math.random() * 0xFFFFFF << 0).toString(16));
         });
     }
 });