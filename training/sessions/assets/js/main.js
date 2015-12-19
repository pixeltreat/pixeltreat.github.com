// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	controls: false,
	progress: true,
	history: true,
	center: true,
	rollingLinks: true,

	theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
	transition: Reveal.getQueryHash().transition || 'linear', // default/cube/page/concave/zoom/linear/fade/none

	// Optional libraries used to extend on reveal.js
	dependencies: [
		{ src: '../assets/js/lib/classList.js', condition: function() { return !document.body.classList; } },
		{ src: '../assets/js/plugin/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: '../assets/js/plugin/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: '../assets/js/plugin/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: '../assets/js/plugin/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
		{ src: '../assets/js/plugin/notes.js', async: true, condition: function() { return !!document.body.classList; } }
	]
});
