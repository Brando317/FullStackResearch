import express from "express";
import cheerio from 'cheerio';
import fetch from "isomorphic-fetch";

async function fetchHtml(url) {
    let res = await fetch(url)
    let data = await res.text();
    return cheerio.load(data)
}

const router = express.Router();
router.get("/articles", async (req, res, next) => {
    try {
        const $ = await fetchHtml("https://www.nationalgeographic.com/")

        const newArray1 = []

        $("div.HomepagePromos a.AnchorLink").each(function (i, ele) {
            console.log($(ele).attr("href"))
            let found;

            $(".ListItem__Title > div").each((i, val) => $(ele).attr("aria-labelledby") === $(val).attr("id") ? found = true : null);

            if (found) {
                let href = $(ele).attr("href")
                let category = href.slice(href.indexOf(".com")).split("/")[1];
                newArray1.push({ category, href: $(ele).attr("href"), title: $(`.ListItem__Title > div#${$(ele).attr("aria-labelledby")} > span > span > span`).text() })
            }
        })
        res.send(newArray1.sort(function (a, b) {
            return a.category > b.category ? 1 : -1;
        }))
    } catch (error) {
        next(error);
    }
})

export default router