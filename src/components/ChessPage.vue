<script>
import {chessboard} from 'vue-chessboard'
import 'vue-chessboard/dist/vue-chessboard.css'
import editor from '../editor.vue'

export default {
	name: 'chess',
	data: function() {
		return {
			greeting: 'Hello'
		};
	},
	mounted(){
			this.$refs.gaudio.volume = "0.40";
		},
	methods: {
		bounce(){
			window.location.reload();
			console.log("1");	
		},
		gnome(){
			this.$refs.gaudio.play();	
		},
		showInfo(data){
			this.positionInfo = data
		},
		loadFen(fen) {
			this.currentFen = fen
		},
		promote() {
			if (confirm("Want to promote to rook? Queen by default") ) {
				return 'r'
			} else {
				return 'q'
			}
		},
	},
	components: {
		chessboard,
		editor
	},
}	
</script>
<template>
	<div id="app">
	<table id="table1" cellspacing="2" cellpadding="2" align="center" border="5" bgcolor="darkblue" bordercolor="#ffc900">
		<tbody>
			<tr>
				<div align="center">
					<img src="img/gnome.gif"/>
				</div>
			</tr>
			<tr>
				<td>
					<editor/>
				</td>
				<td>
					<div align="center">
						<marquee
						direction="down"
						width="250"
						height="200"
						behavior="alternate"
						style="border:solid">
							<marquee behavior="alternate" direction="left" ref="bounce1"> i'm bouncing </marquee>
						</marquee>	
					</div>
					<div>
						asd
					</div>
				</td>
			</tr>
		</tbody>
	</table>
	<div >
		<img style="position:fixed;bottom:90px;" src="/img/gnome.gif" ref="gnome" @click="gnome" title="You've found a gnome!!! Click on it!"/>
		<audio ref="gaudio" src="/snd/gnome-woo.mp3"></audio>
	</div>
	<div>
	</div>
	</div>
</template>

