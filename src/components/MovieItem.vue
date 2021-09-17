<template>
  <div>{{ movie.idmbID }}</div>
</template>

<script>
export default {
	props: {
		movie: {
			type:Object,
			default: () => ({})
		}
	}
}
</script>