import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          <meta
            property="og:image"
            content="https://tribes-image.s3.ap-southeast-1.amazonaws.com/files/a1efee379d382f9610cbd7607f505d97.png"
          />
          <meta
            property="og:title"
            content="Edgee - Nền tảng chuyển đổi số toàn diện"
          />
          <meta
            property="og:description"
            content="Nền tảng Edgee hỗ trợ tích hợp các giải pháp số vào cốt lỗi của doanh nghiệp. Giúp tăng cơ hội và nâng cao năng lực cạnh tranh bền vững."
          />

          <meta
            property="twitter:title"
            content="Edgee - Nền tảng chuyển đổi số toàn diện"
          />
          <meta
            property="twitter:description"
            content="Nền tảng Edgee hỗ trợ tích hợp các giải pháp số vào cốt lỗi của doanh nghiệp. Giúp tăng cơ hội và nâng cao năng lực cạnh tranh bền vững."
          />
          <meta
            property="twitter:image"
            content="https://tribes-image.s3.ap-southeast-1.amazonaws.com/files/a1efee379d382f9610cbd7607f505d97.png"
          />

          <title>Edgee - Nền tảng chuyển đổi số toàn diện</title>
          <meta
            name="description"
            content="Nền tảng Edgee hỗ trợ tích hợp các giải pháp số vào cốt lỗi của doanh nghiệp. Giúp tăng cơ hội và nâng cao năng lực cạnh tranh bền vững."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
