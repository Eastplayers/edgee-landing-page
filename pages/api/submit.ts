import type { NextApiRequest, NextApiResponse } from 'next'
import { google } from "googleapis";

type SheetForm = {
  date: string,
  description: string,
  email: string,
  name: string,
  phone: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' })
  }

  const body = req.body as SheetForm

  try {
    // const auth = new google.auth.GoogleAuth({
    //   credentials: {
    //     client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
    //     private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
    //   },
    //   scopes: [
    //     'https://www.googleapis.com/auth/drive',
    //     'https://www.googleapis.com/auth/drive.file',
    //     'https://www.googleapis.com/auth/spreadsheets'
    //   ]
    // })

    // const authClient = await auth.getClient();

    // const sheets = google.sheets({
    //   auth: authClient,
    //   version: 'v4'
    // });

    // const response = await sheets.spreadsheets.values.append({
    //   spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
    //   range: 'A1:E1',
    //   valueInputOption: 'USER_ENTERED',
    //   requestBody: {
    //     values: [
    //       [body.date, body.name, body.email, body.phone, body.description]
    //     ]
    //   }
    // });



    return res.status(201).json({
      data: {
        NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
        NEXT_PUBLIC_GOOGLE_PRIVATE_KEY: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        NEXT_PUBLIC_GOOGLE_SHEET_ID: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID
      }
    })
  } catch (e: any) {
    return res.status(e.code).send({ message: e.message })
  }
}
