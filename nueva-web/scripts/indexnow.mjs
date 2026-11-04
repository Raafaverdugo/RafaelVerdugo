// uso: node indexnow.mjs [url ...]  (sin argumentos: todas las del sitemap)
const KEY = '9b48f8f9b98b3ce93e4fb2a8e982e187'
let urls = process.argv.slice(2)
if (!urls.length) {
  const xml = await (await fetch('https://rafaelverdugo.com/sitemap.xml')).text()
  urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])
}
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: 'rafaelverdugo.com', key: KEY, keyLocation: `https://rafaelverdugo.com/${KEY}.txt`, urlList: urls }),
})
console.log(urls.length, 'URLs ->', res.status, await res.text())
