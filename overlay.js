google.maps.__gjsload__('overlay', function(_) {
    'use strict';
    var oB = _.na("j"),
        pB = _.k(),
        qB = function() {
            var a = this.sh;
            if (this.getPanes()) {
                if (this.getProjection()) {
                    if (!a.j && this.onAdd) this.onAdd();
                    a.j = !0;
                    this.draw()
                }
            } else {
                if (a.j)
                    if (this.onRemove) this.onRemove();
                    else this.remove();
                a.j = !1
            }
        },
        rB = function(a) {
            a.sh = a.sh || new pB;
            return a.sh
        },
        sB = function(a) {
            _.If.call(this);
            this.La = (0, _.u)(qB, a)
        };
    _.v(oB, _.J);
    oB.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.E(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.j : null))
    };
    _.v(sB, _.If);
    _.nc("overlay", {
        Dm: function(a) {
            var b = a.getMap(),
                c = rB(a),
                d = c.No;
            c.No = b;
            d && (c = rB(a), (d = c.Ra) && d.unbindAll(), (d = c.Nj) && d.unbindAll(), a.unbindAll(), a.set("panes", null), a.set("projection", null), _.G(c.Ga, _.I.removeListener), c.Ga = null, c.Pb && (c.Pb.La(), c.Pb = null), _.xm("Ox", "-p", a));
            if (b) {
                c = rB(a);
                d = c.Pb;
                d || (d = c.Pb = new sB(a));
                _.G(c.Ga, _.I.removeListener);
                var e = c.Ra = c.Ra || new _.Ql,
                    f = b.__gm;
                e.bindTo("zoom", f);
                e.bindTo("offset", f);
                e.bindTo("center", f, "projectionCenterQ");
                e.bindTo("projection", b);
                e.bindTo("projectionTopLeft",
                    f);
                e = c.Nj = c.Nj || new oB(e);
                e.bindTo("zoom", f);
                e.bindTo("offset", f);
                e.bindTo("projection", b);
                e.bindTo("projectionTopLeft", f);
                a.bindTo("projection", e, "outProjection");
                a.bindTo("panes", f);
                e = (0, _.u)(d.Ba, d);
                c.Ga = [_.I.addListener(a, "panes_changed", e), _.I.addListener(f, "zoom_changed", e), _.I.addListener(f, "offset_changed", e), _.I.addListener(b, "projection_changed", e), _.I.addListener(f, "projectioncenterq_changed", e), _.I.forward(b, "forceredraw", d)];
                d.Ba();
                b instanceof _.Cd && (_.Y(b, "Ox"), _.wm("Ox", "-p", a, !!b.j))
            }
        }
    });
});
