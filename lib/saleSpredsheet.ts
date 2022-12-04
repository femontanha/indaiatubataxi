const { GoogleSpreadsheet } = require('google-spreadsheet')

export type TSale = {
  date: string,
  initial_time: string,
  final_time: string,
  from: string,
  to: string,
  price: string,
}

export const getSales = async () => {
  const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID)
  await doc.useServiceAccountAuth({
    client_email: process.env.SPREADSHEET_CLIENT_EMAIL,
    private_key: process.env.SPREADSHEET_PRIVATE_KEY,
  });

  await doc.loadInfo()
  return doc.sheetsByIndex[0]
}
