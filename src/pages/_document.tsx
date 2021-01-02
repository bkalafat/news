import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="tr">
        <Head />
        <body>
          <Main />
          <NextScript />

          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossOrigin="anonymous"></script>
          <script type="text/javascript" src="https://paracevirici.com/servis/widget/widget.js"></script>
          <script src="js/widget.js"></script>

        </body>
      </Html>
    )
  }
}

export default MyDocument