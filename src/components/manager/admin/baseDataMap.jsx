export const baseDataMap = (baseDatas) => {

  baseDatas.map((baseData, i) =>
    Object.values(baseData).map((value) => <td key={`b_${i}`}>{value}</td>)
  )
}
