<template lang="pug">
	v-footer()
		v-layout(  wrap  align-content-space-between )
			v-card(width="100%")
				v-card-title
					a(href='/donate') Donate
					|  |
					a(href='/team') Contribution
					|  |
					a(href='/site/technologies') Technologies
					|  |
					a(href='https://github.com/opensourcewebsite-org/opensourcewebsite-org', rel='nofollow noreferrer noopener', target='_blank') We're on GitHub
					|  |
					a(href='https://gitter.im/opensourcewebsite-org/community', rel='nofollow noreferrer noopener', target='_blank') Join us on Facebook
					|  |
					a(href='https://join.slack.com/t/opensourcewebsite/shared_invite/enQtNDE0MDc2OTcxMDExLWJiMzlkYmUwY2QxZTZhZGZiMzdiNmFmOGJhNDkxOTM4MDg1MDE4YmFhMWMyZWVjZjhlZmFhNjlhY2MzMDMxMTE', rel='nofollow noreferrer noopener', target='_blank') Join us on Slack
					|  |
					a(href='/contact') Contact us
					|  |
					a(href='/terms-of-use') Terms of Use
					|  |
					a(href='/privacy-policy') Privacy Policy
</template>

<script>
export default {
	data: () => ({

	})
}
</script>

<style lang="sass" scoped>
.v-footer
	border-top: 2px solid #dee2e6
a
	color: #007bff
	text-decoration: none
	padding: 0 10px
	font-size: 1rem
	&:hover
		color: #0056b3

</style>
