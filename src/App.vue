<template>
  <div id="app" >
	<marquee scrollamount="15" truespeed="30" direction="left"  height="145" style="color: darkblue;font-size: 70px;">Ultra Chess Master 3000: Pedro’s Revengeance</marquee>
	<router-link to="/"></router-link>
	<router-view></router-view>
	<a class="btn-audio is-active" ref="abutton" @click="audio_pause"></a>
	<video controls autoplay width="0" ref="audio" id="VaporWave">
		<source src="http://radio.plaza.one/mp3" type="audio/mpeg">
	</video>

	<marquee direction="left" style="position: fixed;bottom:0px;"><img src="/img/alien2.gif"/></marquee>

  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  },
  data () {

  },
  mounted(){
	this.$refs.audio.volume = "0.05";
  }, 
  methods: {
  	audio_pause(){
			if(!this.$refs.audio.paused){
				this.$refs.audio.pause();
				this.$refs.abutton.className = "btn-audio is-inactive";
			}else{
				this.$refs.audio.play();
				this.$refs.abutton.className = "btn-audio is-active";
			}
		},	
      }
}
</script>

<style>
	.btn-audio.is-active {
		background-position: 0 0;
	}
	.btn-audio.is-inactive {
		background-position: 0 -40px;
	}
	.btn-audio {
		width: 40px;
		height: 40px;
		display: block;
		cursor: pointer;
		position: absolute;
		top: 100px;
		right: 10px;
		z-index: 999;
		background-image: url(/img/ico-audio.png);
		background-size: 40px;
	}
</style>



