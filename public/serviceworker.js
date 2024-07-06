self.addEventListener("install", () => {
	console.log("service worker installed");
});

self.addEventListener("activate", () => {
	console.log("service worker activated");
});

self.addEventListener("message", (e) => {
	console.log(e.data);
	const { type, data } = e.data;
	if (type === "customMessage") {
		setTimeout(() => {
			self.clients.matchAll().then((client) => {
				client.forEach((c) => {
					c.postMessage({ type: "responseMsg", data: data + "New data!" });
				});
			});
		}, 2000);
	}
});
