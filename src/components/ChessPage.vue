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
			<tr bgcolor="black">
				<td>
				<div align="center">
					<img src="img/chessmaster.png" width="250"/>
				</div>
				</td>
				<td>
					<div id="letter2left" >
						<marquee direction="left" loop="1" scrollamount="15" style="position:fixed;top: 200px;"><img src="img/seagull_with_letter_left.gif" /></marquee>
					</div>
					<div id="letter2right" >
						<marquee direction="right" loop="1" scrollamount="15" style="position:fixed;top:200px;"><img src="img/seagull_with_letter_right.gif" /></marquee>
					</div>
					<img src="img/candle.gif" align="center" style="padding-left:20px;" width="130"/>
				</td>
			</tr>
			<tr>
				<td bgcolor="white">
					<editor/>
				</td>
				<td>					

					<div>
						<br/>
						<br/>
						<center>
							<img src="img/sendcard.gif" alt="sendcard"/>
						</center>
						<br/>
						<br/>
						<br/>
						<h3 style="text-align: center;color: gold;margin-bottom:5px;">Mailbox</h3>
						<marquee
						direction="down"
						width="168"
						height="168"
						behavior="alternate"
						style="border:solid;border-color: #AA6C39;">
							<marquee behavior="alternate" direction="left" ref="bounce1"> <img src="img/letter.gif"/> </marquee>
						</marquee>	
					</div>
					<div>
						<div id="letter1left" >
							<marquee direction="left" loop="1" scrollamount="15" style="position:fixed;top:550px;"><img src="img/seagull_with_letter_left.gif" /></marquee>
						</div>
						<div id="letter1right" >
							<marquee direction="right" loop="1" scrollamount="15" style="position:fixed;top:550px;"><img src="img/seagull_with_letter_right.gif" /></marquee>
						</div>
					</div>
				</td>
			</tr>
		</tbody>
	</table>

	<div id="letter2"></div>



	<div >
		<img style="position:fixed;bottom:90px;" src="/img/gnome.gif" ref="gnome" @click="gnome" title="You've found a gnome!!! Click on it!"/>
		<audio ref="gaudio" src="/snd/gnome-woo.mp3"></audio>
	</div>
	</div>
</template>

