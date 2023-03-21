import path from 'path'
import { NextApiRequest, NextApiResponse } from 'next'
import csv from 'csvtojson'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { start, end } = req.query
  const filePath = path.join(process.cwd(), 'data')
  const data = await csv().fromFile(filePath + '/data.csv')

  if (start && end) {
    const filteredData = data.filter(
      (item) => item.time >= start && item.time <= end
    )
    res.status(200).json(filteredData)
  } else {
    res.status(200).json(data)
  }
}
