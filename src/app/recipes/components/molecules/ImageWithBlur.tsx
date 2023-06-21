type ImageWithBlurProps = {
  alt: string
  src?: string
}

/**
 * ぼかし付き画像
 * @param props
 * @returns
 */
const ImageWithBlur = (props: ImageWithBlurProps) => {
  const { alt, src } = props
  return (
    <>
      <div className="relative flex aspect-square w-full justify-center">
        {/* 画像 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="object-cover" src={src} alt={alt} />

        {/* ぼかし */}
        <div className="z-1 absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </>
  )
}
export default ImageWithBlur
