<script>
import {chessboard} from 'vue-chessboard'
import 'vue-chessboard/dist/vue-chessboard.css'
import editor from '../editor.vue'

export default {
	name: 'chess',
	data: function() {
		return {
			greeting: 'Hello',
			lettertext: 'teste123[a2][b2]',
			l1l: false,
			l1r: false,
			l2l: false,
			l2r: false,
			showletter: false,
			lettermessage: "mememe"
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
		sendLetter() {
			this.l1r = true;
			setTimeout(() => this.l1r = false, 3500);
			setTimeout(() => this.l2l = true, 4500);
			setTimeout(() => this.l2l = false, 8000);
		},
		receiveLetter() {
			this.l2r = true;
			setTimeout(() => this.l2r = false, 3500);
			setTimeout(() => this.l1l = true, 4500);
			setTimeout(() => this.l1l = false, 8000);
			setTimeout(() => this.showletter = true, 8100);
		},
		readLetter(){
			this.showletter = false;
			alert(this.lettermessage);

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
					<div id="letter2left" v-if="l2l">
						<marquee direction="left" scrollamount="15" style="position:fixed;top: 200px;"><img src="img/seagull_with_letter_left.gif" /></marquee>
					</div>
					<div id="letter2right" v-if="l2r">
						<marquee direction="right" scrollamount="15" style="position:fixed;top:200px;"><img src="img/seagull_with_letter_right.gif" /></marquee>
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
						<center>
							<textarea id="letter" name="w3review" rows="4" v-model="lettertext" placeholder="Between square brackets, choose first the chess piece position and then where it will move."></textarea>
							</br>
							<a style="cursor: pointer;" alt="sendcard" @click="sendLetter">
								<img src="/img/sendcard.gif"/>
							</a>
						</center>
						<h3 style="text-align: center;color: gold;margin-bottom:5px;">Mailbox</h3>
						<marquee
						direction="down"
						width="183"
						height="183"
						behavior="alternate"
						style="border:solid;border-color: #AA6C39;">
							<marquee behavior="alternate" direction="left" ref="bounce1" v-if="showletter" @click="readLetter"> <img src="img/letter.gif" /> </marquee>
						</marquee>	
					</div>
					<div>
						<div id="letter1left" v-if="l1l">
							<marquee direction="left" scrollamount="15" style="position:fixed;top:550px;"><img src="img/seagull_with_letter_left.gif" /></marquee>
						</div>
						<div id="letter1right" v-if="l1r">
							<marquee direction="right" scrollamount="15" style="position:fixed;top:550px;" ><img src="img/seagull_with_letter_right.gif" /></marquee>
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

