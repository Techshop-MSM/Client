import { useState } from "react"

export const decorateData = (rawArticles) => {
    const baseData = []
    const detailData = []

    console.log(rawArticles)
    rawArticles.map((article) => {
        baseData.push(article.baseData)
    })

    // const arr = rawArticles.filter((entry) => {
    //     entry.baseData
    // })
    // detailData.push(arr)
    // console.log("baseData", baseData)
    // console.log("detailData", detailData)
    return baseData // detailData
}