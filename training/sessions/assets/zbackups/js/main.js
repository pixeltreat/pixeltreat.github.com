// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	controls: false,
	progress: true,
	history: true,
	center: true,
	rollingLinks: true,

	transition: Reveal.getQueryHash().transition || 'slide', // default/cube/page/concave/zoom/linear/fade/none

	// Optional libraries used to extend on reveal.js
	dependencies: [
		{ src: '../assets/js/lib/classList.js', condition: function() { return !document.body.classList; } },
		{ src: '../assets/js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: '../assets/js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: '../assets/js/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: '../assets/js/plugin/zoom-js/zoom.js', async: true },
        { src: '../assets/js/plugin/notes/notes.js', async: true }
	]
});
