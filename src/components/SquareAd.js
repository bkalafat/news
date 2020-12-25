const SquareAd = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
                <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>
                <ins class='adsbygoogle' style='display:block' data-ad-client='ca-pub-9881133041867885'
                  data-ad-slot='4914698997' data-ad-format='auto' data-full-width-responsive='true'>
                </ins>
                <script> (adsbygoogle = window.adsbygoogle || []).push({}) </script>
                `
      }} />
  )
}

export default SquareAd