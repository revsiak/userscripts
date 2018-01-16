// ==UserScript==
// @name           Linkify
// @description    The script analyzes candidates on the website for urls to.
// @version        1.0
// @author         revsiak
// @include        *
// ==/UserScript==

const document_reference = document.getElementsByTagName("body");

const whitelist = [
	"address", "article", "aside", "footer", "header", "main", "nav", "section", 
	"div", "span", 
	"h1", "h2", "h3", "h4", "h5", "h6", "p", 
	"iframe", 
	"blockquote", "caption", "figcaption", "code", "summary", "details", 
	"li", 
	"th", "td", 
	"b", "strong", "em", "i", "sub", "sup", "u", "mark", "s", "strike", "small", "big", "q", "center", 
	"del", "ins", "cite", 
];

const regular_expression = /\b(https?:\/\/)?(www\.)?([A-Za-z0-9-_~]\.)?([A-Za-z0-9-_~]*)(\.[A-Za-z]{2,3})(\/[A-Za-z0-9-_~.])(\?[A-Za-z0-9]\=[A-Za-z0-9])?(\#[A-Za-z0-9-_~])?\b/g;


function search_nodes(document_reference) {
	for (let tag in whitelist) {
		let nodes = document.getElementsByTagName(tag);
		document_snapshot.push(nodes);
	}
}

function linkify(document_snapshot) {
	for (let current_node in document_snapshot) {
		if (current_node.nodeValue.search(regular_expression) != -1) {
		}
	}
}

let nodes = search_nodes(document_reference);
linkify(nodes);


function mutation_notification() {
	const update_notification = new MutationObserver(function(mutation) {
		search_nodes(mutation);
	});
	const configuration = {childList: true, subtree: true};
	update_notification.observe(document_reference, configuration);
}
mutation_notification();