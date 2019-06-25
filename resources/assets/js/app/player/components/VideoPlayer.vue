<template>
    <div class="row">
        <a class="btn btn-primary" data-toggle="modal" href='#modal-id' @click.prevent="loadVideo">
            <i class="glyphicon glyphicon-play-circle"></i>
        </a>
        <div class="modal fade" id="modal-id" ref="modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">Modal title</h4>
                    </div>
                    <div class="modal-body">
                        <video id="player" class="video-js vjs-default-skin vjs-fluid" controls width="640" height="264"></video>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import videojs from "video.js";

export default {
  props: ["api"],
  data() {
    return {
      player: null,
      ext: null,
      url: null
    };
  },
  mounted() {
    $(this.$refs.modal).on("hidden.bs.modal", () => {
      if (!this.player.paused()) {
        this.player.pause();
      }
      this.player.reset();
    });
  },
  methods: {
    loadVideo(api) {
      this.player = videojs("player", {
        techOrder: ["html5"],
        autoplay: false,
        youtube: { iv_load_policy: 3 }
      });
      axios.get(this.api).then(res => {
        this.url = res.data;

        if (this.isYoutubeVideo(this.url) !== false) {
          this.ext = "youtube";
          console.log("Youtube");
        } else {
          if (!this.ext) this.ext = "mp4";
          this.ext = this.url.split(".").pop();

          this.player.src({
            type: "video/" + this.ext,
            src: this.url
          });

          this.player.play();
        }
      });
    },
    isYoutubeVideo() {
      //var p = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/;
      let p = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      return this.url.match(p) ? RegExp.$1 : false;
    }
  }
};
</script>

<style>

</style>
