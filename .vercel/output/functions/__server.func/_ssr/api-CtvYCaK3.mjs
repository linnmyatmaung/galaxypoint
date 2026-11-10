import { i as useMemberStore, t as mockExpiry } from "./member-DgJPEBtm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-CtvYCaK3.js
var delay = (ms = 600) => new Promise((r) => setTimeout(r, ms));
async function fetchTransactions() {
	await delay();
	return useMemberStore.getState().transactions;
}
async function fetchExpiry() {
	await delay();
	return mockExpiry;
}
/**
* DEMO ONLY: generates a client-side placeholder token for the member QR.
* Real dynamic QR tokens must be issued and validated by the backend.
*/
function generateDemoQrToken(memberId) {
	const nonce = Math.random().toString(36).slice(2, 10).toUpperCase();
	return `DEMO|${memberId}|${Date.now()}|${nonce}`;
}
//#endregion
export { fetchTransactions as n, generateDemoQrToken as r, fetchExpiry as t };
