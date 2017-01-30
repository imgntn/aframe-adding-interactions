 //adapted from https://wmurphyrd.github.io/aframe-super-hands-component/examples/hands/
 AFRAME.registerComponent('change-color-on-grab', {
     play: function() {
         this.el.addEventListener('grab-start', function(evt) {
             evt.detail.dropped.setAttribute('material', 'color',
                 '#' + (Math.random() * 0xFFFFFF << 0).toString(16));
         });
         this.el.addEventListener('grab-end', function(evt) {
             evt.detail.dropped.setAttribute('material', 'color',
                 '#' + (Math.random() * 0xFFFFFF << 0).toString(16));
         });
     }
 });