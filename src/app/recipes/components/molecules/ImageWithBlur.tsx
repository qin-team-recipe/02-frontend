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
      <div className="w-full relative flex justify-center aspect-square">
        {/* 画像 */}
        <img className="object-cover" src={src} alt={alt} />

        {/* ぼかし */}
        <div className="absolute bottom-0 left-0 w-full h-12 z-1 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </>
  )
}
export default ImageWithBlur
