const SquareAd = () => {
  return (
    <div
      className="col-xs-12 col-sm-12 col-md-4 subNews-child relativeDiv"
      dangerouslySetInnerHTML={{
        __html: `
                <ins class='adsbygoogle' style='display:block' data-ad-client='ca-pub-9881133041867885'
                  data-ad-slot='4914698997'  data-full-width-responsive='true'>
                </ins>
                <script> (adsbygoogle = window.adsbygoogle || []).push({}) </script>
                `
      }} />
  )
}

export default SquareAd