<script setup lang="ts">


</script>
	
<template>
	<div id="app">
	<table align="center">
		<tr>
			<router-link to="/chess"><br><div align="center"><img height="300" src="img/door.gif"/></div></router-link>
		</tr>
			<router-view>
			</router-view>
		<tr>
			<div align="center"><h1 style="color: blue;">Hey there, websurfer! Open the door!</h1></div>
		</tr>
	</table>
	</div>
</template>

