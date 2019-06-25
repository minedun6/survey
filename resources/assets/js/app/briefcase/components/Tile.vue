<template>
    <span class="tile" :id="'tile_' + tile.id" :style="tilePosition" ref="tile"></span>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import resizable from "jquery-ui/ui/widgets/resizable";
import draggable from "jquery-ui/ui/widgets/draggable";

export default {
  props: ["tile"],
  data() {
    return {
      tileResizing: {
        w: 66,
        h: 66
      }
    };
  },
  computed: {
    ...mapGetters({
      overlapDrag: "briefcase/overlapDrag",
      overlapResize: "briefcase/overlapResize",
      overlapAdd: "briefcase/overlapAdd",
      grid: "briefcase/grid"
    }),
    tilePosition() {

    }
  },
  mounted() {
    let _this = this;
    $(".tile")
      .draggable({
        containment: ".ipad-grid",
        cursor: "move",
        scroll: false,
        grid: [_this.tileResizing.w, _this.tileResizing.h],
        drag: function(e, ui) {
          _this.checkOverlapDrag(ui);
          if (!_this.overlapDrag) {
            _this.positionateTile({
              ui: ui, tile: _this.tile, ref: _this.$refs.tile
            });
          } else {
            return !_this.overlapDrag;
          }
        }
      })
      .resizable({
        containment: ".ipad-grid",
        grid: [_this.tileResizing.w, _this.tileResizing.h],
        minWidth: _this.tileResizing.w,
        minHeight: _this.tileResizing.h,
        start: function(e, ui) {
          _this.tileResizing.w = $(this).width();
          _this.tileResizing.h = $(this).height();
        },
        resize: function(event, ui) {
          let width = $(this).width();
          let height = $(this).height();
          let offset = $(this).offset();
          _this.checkOverlapResize({
            width,
            height,
            offset
          });
          if (_this.overlapResize) {
            $(this).resizable("option", "maxWidth", _this.tileResizing.w);
            $(this).resizable("option", "maxHeight", _this.tileResizing.h);
          } else {
            _this.positionateTile({
              ui: ui, tile: _this.tile, ref: _this.$refs.tile
            });
            _this.tileResizing.w = $(this).width();
            _this.tileResizing.h = $(this).height();
          }
        },
        stop: function(e, ui) {
          $(this).resizable("option", "maxWidth", 1024);
          $(this).resizable("option", "maxHeight", 768);
        }
      });
    
  },
  methods: {
    ...mapActions({
      checkOverlapDrag: "briefcase/checkOverlapDrag",
      checkOverlapResize: "briefcase/checkOverlapResize",
      checkOverlapToAdd: "briefcase/checkOverlapToAdd",
      positionateTile: "briefcase/positionateTile"
    })
  }
};
</script>

<style>

</style>