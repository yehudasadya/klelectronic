// app/tools/qr-generator/page.tsx
'use client'

import { useState } from 'react'

export default function QRGenerator() {
  const [url, setUrl] = useState('')
  const [qrCode, setQrCode] = useState('')

  const generateQR = () => {
    // כאן נוסיף את הלוגיקה של יצירת ה-QR
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`
    setQrCode(qrCodeUrl)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">יצירת קוד QR</h1>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="url" className="block text-lg mb-2">
            הכנס כתובת URL או טקסט
          </label>
          <input
            id="url"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-3 border rounded-lg"
            placeholder="https://example.com"
            dir="ltr"
          />
        </div>

        <button
          onClick={generateQR}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          צור קוד QR
        </button>

        {qrCode && (
          <div className="text-center">
            <img src={qrCode} alt="QR Code" className="mx-auto" />
            <a
              href={qrCode}
              download="qr-code.png"
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              הורד את הקוד
            </a>
          </div>
        )}
      </div>
    </div>
  )
}