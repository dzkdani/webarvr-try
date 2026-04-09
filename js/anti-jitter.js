AFRAME.registerComponent("anti-jitter", {
  tick: function () {
    const target = this.el.object3D.parent.position;
    this.el.object3D.position.lerp(target, 0.15);
    this.el.object3D.quaternion.slerp(this.el.object3D.parent.quaternion, 0.15);
  },
});
