// Script from https://maxpixels.moe/resources/nekoweb-stats/
let username = "balitorius.nekoweb.org";
(async () => {
try {
const request = await fetch(`https://nekoweb.org/api/site/info/${username}`,);
const json = await request.json();
const updated = new Date(json.updated_at).toLocaleDateString();
const created = new Date(json.created_at).toLocaleDateString(); 
if (document.getElementById("created")) document.getElementById("created").innerHTML = `<b><i>created: ${created}</i></b>`;
if (document.getElementById("updated")) document.getElementById("updated").innerHTML = `<b><i>updated: ${updated}</i></b>`;
if (document.getElementById("visitors")) document.getElementById("visitors").innerHTML = `<b><i>visitors: ${json.views}</i></b>`;
if (document.getElementById("followers")) document.getElementById("followers").innerHTML = `<b><i>followers: ${json.followers}</i></b>`;
} catch (error) {
console.error(error);
}
})();